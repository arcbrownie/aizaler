'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';

interface DualVideoPlayerLoopProps {
  videoSrc: string;
  posterSrc: string;
  crossfadeDuration?: number; // 초 단위 (기본: 1.2s)
  aspectClass?: string; // 목업 프레임 종횡비 (기본: aspect-[720/1560])
  className?: string;
}

/**
 * 듀얼 플레이어 웹 비디오 쇼케이스 컴포넌트
 * - 2개의 비디오 인스턴스가 종료 직전 교차 재생되어 부드러운 오버랩 전환 구현
 * - IntersectionObserver 스크롤 기반 재생 및 visibilitychange 백그라운드 탭 감지
 * - prefers-reduced-motion 감지 시 자동 재생을 멈추고 고화질 포스터 및 수동 재생 토글 제공
 * - 비디오 로딩 실패(onError) 시 무한 로딩 방지 및 정적 대체 포스터 렌더링
 * - unmount 시 setTimeout/play promise/observer 완전 클린업 보장
 */
export default function DualVideoPlayerLoop({
  videoSrc,
  posterSrc,
  crossfadeDuration = 1.2,
  aspectClass = 'aspect-[720/1560]',
  className = '',
}: DualVideoPlayerLoopProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const transitionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isMountedRef = useRef(true);
  const isInViewRef = useRef(false);
  const isTransitioningRef = useRef(false);

  const [activeVideo, setActiveVideo] = useState<1 | 2>(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // 1. 모션 감축(prefers-reduced-motion) 미디어 쿼리 감지
  useEffect(() => {
    isMountedRef.current = true;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      if (isMountedRef.current) {
        setPrefersReducedMotion(e.matches);
        if (e.matches) {
          videoRef1.current?.pause();
          videoRef2.current?.pause();
          setIsPlaying(false);
        }
      }
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMotionChange);
    } else {
      mediaQuery.addListener(handleMotionChange);
    }

    return () => {
      isMountedRef.current = false;
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
        transitionTimeoutRef.current = null;
      }
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleMotionChange);
      } else {
        mediaQuery.removeListener(handleMotionChange);
      }
    };
  }, []);

  // 2. IntersectionObserver & 탭 활성화(visibilitychange) 연동 재생 제어
  useEffect(() => {
    const playCurrent = () => {
      if (prefersReducedMotion || hasError) return;
      const target = activeVideo === 1 ? videoRef1.current : videoRef2.current;
      if (target && target.paused) {
        target
          .play()
          .then(() => {
            if (isMountedRef.current && isInViewRef.current) {
              setIsPlaying(true);
            }
          })
          .catch(() => {
            if (isMountedRef.current) setIsPlaying(false);
          });
      }
    };

    const pauseAll = () => {
      videoRef1.current?.pause();
      videoRef2.current?.pause();
      if (isMountedRef.current) setIsPlaying(false);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!isMountedRef.current) return;
          if (entry.isIntersecting) {
            isInViewRef.current = true;
            if (document.visibilityState === 'visible') {
              playCurrent();
            }
          } else {
            isInViewRef.current = false;
            pauseAll();
          }
        });
      },
      { threshold: 0.25 },
    );

    const handleVisibility = () => {
      if (!isMountedRef.current) return;
      if (document.visibilityState === 'hidden') {
        pauseAll();
      } else if (isInViewRef.current) {
        playCurrent();
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);
    const el = containerRef.current;
    if (el) observer.observe(el);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
      observer.disconnect();
      pauseAll();
    };
  }, [activeVideo, prefersReducedMotion, hasError]);

  // 3. 교차 재생(크로스페이드) 트리거 함수
  const triggerCrossfade = useCallback(
    (currentNum: 1 | 2) => {
      const currentVideo = currentNum === 1 ? videoRef1.current : videoRef2.current;
      const nextVideo = currentNum === 1 ? videoRef2.current : videoRef1.current;
      const nextNum = currentNum === 1 ? 2 : 1;

      if (!currentVideo || !nextVideo || !isInViewRef.current || !isMountedRef.current) return;
      if (isTransitioningRef.current) return;

      isTransitioningRef.current = true;
      nextVideo.currentTime = 0;

      // 단초 영상 대비 안전 가용 크로스페이드 시간 계산
      const mediaDuration = currentVideo.duration || 3;
      const safeDuration = Math.min(crossfadeDuration, Math.max(0.2, mediaDuration * 0.35));
      const transitionDelayMs = Math.round(safeDuration * 1000);

      nextVideo
        .play()
        .then(() => {
          if (!isMountedRef.current || !isInViewRef.current) {
            nextVideo.pause();
            isTransitioningRef.current = false;
            return;
          }
          setActiveVideo(nextNum);

          if (transitionTimeoutRef.current) {
            clearTimeout(transitionTimeoutRef.current);
          }
          transitionTimeoutRef.current = setTimeout(() => {
            if (isMountedRef.current) {
              currentVideo.pause();
              currentVideo.currentTime = 0;
              isTransitioningRef.current = false;
            }
          }, transitionDelayMs);
        })
        .catch(() => {
          if (isMountedRef.current) {
            isTransitioningRef.current = false;
          }
        });
    },
    [crossfadeDuration],
  );

  // 4. timeupdate 이벤트 핸들러
  const handleTimeUpdate = useCallback(
    (currentNum: 1 | 2) => {
      const currentVideo = currentNum === 1 ? videoRef1.current : videoRef2.current;
      if (!currentVideo || !currentVideo.duration) return;

      const mediaDuration = currentVideo.duration;
      const safeCrossfade = Math.min(crossfadeDuration, Math.max(0.2, mediaDuration * 0.35));

      if (
        currentVideo.currentTime >= mediaDuration - safeCrossfade &&
        !isTransitioningRef.current
      ) {
        triggerCrossfade(currentNum);
      }
    },
    [crossfadeDuration, triggerCrossfade],
  );

  // 5. ended 폴백 (모바일 timeupdate 스로틀링 누락 대비)
  const handleEnded = useCallback(
    (currentNum: 1 | 2) => {
      triggerCrossfade(currentNum);
    },
    [triggerCrossfade],
  );

  // 6. 수동 재생/정지 토글
  const togglePlay = () => {
    if (isPlaying) {
      videoRef1.current?.pause();
      videoRef2.current?.pause();
      setIsPlaying(false);
    } else {
      const target = activeVideo === 1 ? videoRef1.current : videoRef2.current;
      target?.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const safeDurationSec = Math.min(crossfadeDuration, 2.0);

  return (
    <div
      ref={containerRef}
      className={`relative mx-auto w-full max-w-[280px] overflow-hidden rounded-[2.2rem] border-[4px] border-black bg-black shadow-2xl ${className}`}
    >
      {/* 상단 노치 바 */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 z-30 h-3 w-24 rounded-b-xl border border-black bg-black"
      />

      {/* 내부 스크린 뷰포트 */}
      <div className={`relative w-full overflow-hidden rounded-[1.8rem] bg-black ${aspectClass}`}>
        {/* 모션 감축 환경 안내 포스터 */}
        {prefersReducedMotion ? (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={posterSrc}
              alt="데모 서비스 시연 정적 포스터"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-4 bottom-6 rounded-xl bg-black/80 p-3 text-center backdrop-blur-sm">
              <p className="text-[11px] font-medium text-white/80">동작 줄이기(prefers-reduced-motion) 적용으로 정적 포스터가 표시됩니다</p>
            </div>
          </div>
        ) : hasError ? (
          /* 에러 폴백 포스터 */
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={posterSrc}
              alt="데모 서비스 시연 대체 이미지"
              className="h-full w-full object-cover opacity-80"
            />
            <div className="absolute inset-x-4 bottom-6 rounded-xl bg-black/85 p-3 text-center border border-white/10">
              <span className="text-[11px] font-semibold text-white/90">정적 프리뷰 화면</span>
              <p className="mt-1 text-[10px] text-white/50">비디오 로드 불가 시 포스터로 대체 표시됩니다</p>
            </div>
          </div>
        ) : (
          <>
            {/* 로딩 인디케이터 */}
            {isLoading && (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/60 text-white backdrop-blur-xs">
                <div className="h-7 w-7 animate-spin rounded-full border-2 border-[#d9ff3f] border-t-transparent mb-2" />
                <span className="text-[11px] font-semibold text-white/80">영상 준비 중...</span>
              </div>
            )}

            {/* 플레이어 1 */}
            <video
              ref={videoRef1}
              src={videoSrc}
              poster={posterSrc}
              preload="metadata"
              playsInline
              muted
              onLoadedData={() => {
                setIsLoading(false);
                setHasError(false);
              }}
              onWaiting={() => setIsLoading(true)}
              onPlaying={() => setIsLoading(false)}
              onError={() => {
                setIsLoading(false);
                setHasError(true);
              }}
              onTimeUpdate={() => handleTimeUpdate(1)}
              onEnded={() => handleEnded(1)}
              style={{ transition: `opacity ${safeDurationSec}s ease-in-out` }}
              className={`absolute inset-0 h-full w-full object-cover ${
                activeVideo === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            />

            {/* 플레이어 2 */}
            <video
              ref={videoRef2}
              src={videoSrc}
              poster={posterSrc}
              preload="metadata"
              playsInline
              muted
              onLoadedData={() => {
                setIsLoading(false);
                setHasError(false);
              }}
              onWaiting={() => setIsLoading(true)}
              onPlaying={() => setIsLoading(false)}
              onError={() => {
                setIsLoading(false);
                setHasError(true);
              }}
              onTimeUpdate={() => handleTimeUpdate(2)}
              onEnded={() => handleEnded(2)}
              style={{ transition: `opacity ${safeDurationSec}s ease-in-out` }}
              className={`absolute inset-0 h-full w-full object-cover ${
                activeVideo === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            />

            {/* 비디오 1 & 2: 재생 버튼, 컨트롤 바, 프로그레스 바 없는 순수 심리스 루프 */}
          </>
        )}
      </div>
    </div>
  );
}

