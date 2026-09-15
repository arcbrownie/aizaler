'use client';

import React, { useState, useEffect, useRef } from 'react';

interface CountdownTickerProps {
  targetDate?: string; // ISO 8601 형식 (기본값: '2027-01-01T00:00:00+09:00')
  className?: string;
}

/**
 * 실시간 밀리초 카운트다운 티커 (rAF 프레임 스로틀링 & IntersectionObserver)
 * - 32ms 단위로 스로틀링하여 30fps 안정적 갱신 (메인 스레드 부하 0)
 * - 뷰포트 진입 시에만 tick 동작, 화면 이탈 시 즉시 rAF 취소로 배터리 절약
 * - 입체 글래스 카드 및 상단 림 라이트 하이라이트 내장
 */
export default function CountdownTicker({
  targetDate = '2027-01-01T00:00:00+09:00',
  className = '',
}: CountdownTickerProps) {
  const [remainingMs, setRemainingMs] = useState<number | null>(null);
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = new Date(targetDate).getTime();
    let animationFrame = 0;
    let lastPaint = 0;
    let intervalId: ReturnType<typeof setInterval> | null = null;
    let isVisible = document.visibilityState === 'visible';
    let isIntersecting = false;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const updateTime = () => {
      setRemainingMs(Math.max(0, target - Date.now()));
    };

    const tick = (frameTime: number) => {
      if (frameTime - lastPaint >= 32) {
        updateTime();
        lastPaint = frameTime;
      }
      if (isVisible && isIntersecting && !prefersReducedMotion) {
        animationFrame = window.requestAnimationFrame(tick);
      }
    };

    const start = () => {
      if (prefersReducedMotion) {
        updateTime();
        if (!intervalId) intervalId = setInterval(updateTime, 1000);
      } else {
        if (!animationFrame) animationFrame = window.requestAnimationFrame(tick);
      }
    };

    const stop = () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = 0;
      }
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    };

    const handleVisibility = () => {
      isVisible = document.visibilityState === 'visible';
      if (isVisible && isIntersecting) {
        start();
      } else {
        stop();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
        if (isIntersecting && isVisible) {
          start();
        } else {
          stop();
        }
      },
      { rootMargin: '120px 0px' },
    );

    document.addEventListener('visibilitychange', handleVisibility);
    const el = tickerRef.current;
    if (el) observer.observe(el);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
      observer.disconnect();
      stop();
    };
  }, [targetDate]);

  const remaining = remainingMs ?? 0;
  const hours = Math.floor((remaining / 3_600_000) % 24);
  const minutes = Math.floor((remaining / 60_000) % 60);
  const seconds = Math.floor((remaining / 1_000) % 60);
  const milliseconds = Math.floor((remaining % 1_000) / 10);

  const units = [
    { value: String(hours).padStart(2, '0'), label: '시' },
    { value: String(minutes).padStart(2, '0'), label: '분' },
    { value: String(seconds).padStart(2, '0'), label: '초' },
    { value: String(milliseconds).padStart(2, '0'), label: 'ms' },
  ];

  return (
    <div
      ref={tickerRef}
      className={`relative mx-auto max-w-[520px] ${className}`}
      aria-label="마감까지 남은 시간 실시간 카운트다운"
    >
      <div aria-hidden="true" className="grid grid-cols-4 gap-2 sm:gap-3.5">
        {units.map((unit, index) => (
          <div
            key={unit.label}
            className="relative rounded-xl border border-white/18 bg-gradient-to-b from-[#323d49]/95 via-[#1e252e]/98 to-[#11151a] px-2 py-3.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.38),inset_0_-2px_4px_rgba(0,0,0,0.65),0_12px_28px_rgba(0,0,0,0.45)] backdrop-blur-md sm:rounded-2xl sm:px-3 sm:py-5"
          >
            {/* 상단 림 라이트 하이라이트 */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-2.5 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent sm:inset-x-4"
            />

            {index < units.length - 1 && (
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-1 top-[28px] z-20 -translate-y-1/2 translate-x-1/2 select-none font-mono text-[14px] font-black text-[#d9ff3f] drop-shadow-[0_0_8px_rgba(217,255,63,0.6)] sm:-right-[7px] sm:top-[43px] sm:text-[19px]"
              >
                :
              </span>
            )}

            <span className="relative block bg-gradient-to-b from-white via-[#f1f5f9] to-[#bac7d4] bg-clip-text font-mono text-[22px] font-black leading-none tabular-nums text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.55)] sm:text-[34px]">
              {unit.value}
            </span>
            <span className="relative mt-1.5 block text-[10px] font-bold tracking-[0.1em] text-white/55 sm:mt-2.5 sm:text-[12px]">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
      {/* 바닥 네온 라임 앰비언트 글로우 */}
      <div
        aria-hidden="true"
        className="absolute inset-x-[6%] -bottom-4 h-8 rounded-full bg-[#d9ff3f]/12 blur-2xl pointer-events-none"
      />
    </div>
  );
}
