'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { useInView, useReducedMotion } from 'framer-motion';

export interface ParticleFlowStreamProps {
  /**
   * 좌측 소스 레이블 (기본: '블로그')
   */
  leftSourceLabel?: string;
  /**
   * 우측 소스 레이블 (기본: '스레드')
   */
  rightSourceLabel?: string;
  /**
   * 중앙 하드웨어/엔진 목업 이미지 경로
   */
  centerHardwareSrc?: string;
  /**
   * 분출 아웃풋 레이블 (기본: '자동 수익화')
   */
  outputLabel?: string;
  /**
   * 브랜드 액센트 컬러 (기본: '#d9ff3f')
   */
  accentColor?: string;
  className?: string;
}

/**
 * ParticleFlowStream — Product 6 멀티 채널 트래픽 수렴 및 자동 전환 무대 컴포넌트
 *
 * Product 6 실전 구현 (`Product6SynergyAssetSection.tsx` 라인 148~500):
 * - 유입: 네이버 블로그(좌) & 스레드(우) 로고 파티클이 곡선 궤적을 그리며 랩탑 화면으로 가속 수렴
 * - 중앙: 투명 배경 누끼 맥북 컷아웃 및 중앙 포털 펄스 오라, 베이스 접지 그림자
 * - 분출: 랩탑 하단에서 캐시/아웃풋 파티클이 전면으로 쏟아져 나오는 풍성한 스트림
 * - 안정성: useInView 이탈 시 자동 paused, 브라우저 탭 비활성 시 일시정지, prefers-reduced-motion 완벽 대응
 *
 * ⚠️ [일관된 일러스트레이션 예외 규정 준수]
 * 본 컴포넌트는 단일한 캔버스 무대 안에서 트래픽의 수렴과 전환을 표현하는 1개의 통합 주 비주얼(Coherent Stage)입니다.
 */
export default function ParticleFlowStream({
  leftSourceLabel = '블로그',
  rightSourceLabel = '스레드',
  centerHardwareSrc = '/assets/mockups/mockup-macbook-front.webp',
  outputLabel = '24시간 무인 파이프라인',
  accentColor = '#d9ff3f',
  className = '',
}: ParticleFlowStreamProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(stageRef, { once: false, amount: 0.15 });
  const shouldReduceMotion = useReducedMotion() ?? false;
  const [isDocHidden, setIsDocHidden] = useState(false);

  useEffect(() => {
    const handleVisibility = () => setIsDocHidden(document.hidden);
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  const active = isInView && !isDocHidden && !shouldReduceMotion;
  const playState = active ? 'running' : 'paused';

  return (
    <div className={`relative mx-auto my-8 w-full max-w-[620px] select-none text-center ${className}`.trim()}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes streamL0 {
              0% { transform: translate3d(0, 0, 0) scale(0.9); opacity: 0; }
              15% { opacity: 0.95; }
              60% { transform: translate3d(360%, 25%, 0) scale(0.8); opacity: 0.9; }
              85% { transform: translate3d(680%, 55%, 0) scale(0.55); opacity: 0.8; }
              100% { transform: translate3d(850%, 70%, 0) scale(0.2); opacity: 0; }
            }
            @keyframes streamR0 {
              0% { transform: translate3d(0, 0, 0) scale(0.9); opacity: 0; }
              15% { opacity: 0.95; }
              60% { transform: translate3d(-360%, 25%, 0) scale(0.8); opacity: 0.9; }
              85% { transform: translate3d(-680%, 55%, 0) scale(0.55); opacity: 0.8; }
              100% { transform: translate3d(-850%, 70%, 0) scale(0.2); opacity: 0; }
            }
            @keyframes portalPulseFlow {
              0%, 100% { transform: translate(-50%, -50%) scale(0.9); opacity: 0.6; }
              50% { transform: translate(-50%, -50%) scale(1.18); opacity: 0.95; }
            }
            @keyframes cashDropFlow {
              0% { transform: translate3d(-50%, -50%, 0) scale(0.4) rotate(0deg); opacity: 0; }
              18% { opacity: 1; }
              75% { opacity: 0.9; }
              100% { transform: translate3d(calc(-50% + var(--dx, 0px)), calc(-50% + 140px), 0) scale(1.05) rotate(var(--rot, 0deg)); opacity: 0; }
            }
          `,
        }}
      />

      {/* 입체 다크 글래스 무대 컨테이너 */}
      <div
        ref={stageRef}
        role="img"
        aria-label={`${leftSourceLabel}와 ${rightSourceLabel}로부터 트래픽이 유입되어 중앙 시스템에서 처리 후 ${outputLabel}로 전환되는 시각화`}
        className="relative isolate aspect-[4/3] sm:aspect-square w-full overflow-hidden rounded-3xl border border-white/12 bg-[linear-gradient(155deg,#242c34_0%,#181f25_48%,#101418_100%)] shadow-[0_24px_50px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.12)] transform-gpu"
      >
        {/* 배경 앰비언트 글로우 */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#1c2633_0%,#10151b_65%,#090d10_100%)] opacity-75"
        />

        {/* 유입 소스 미니멀 라벨 */}
        <div className="absolute left-[4%] top-[10%] z-30 flex items-center gap-1.5 rounded-full border border-white/10 bg-[#111418]/90 px-3 py-1">
          <span className="h-2 w-2 rounded-full bg-[#03c75a] shadow-[0_0_6px_#03c75a]" />
          <span className="text-[11px] sm:text-[12px] font-bold text-white/80">{leftSourceLabel}</span>
        </div>
        <div className="absolute right-[4%] top-[10%] z-30 flex items-center gap-1.5 rounded-full border border-white/10 bg-[#111418]/90 px-3 py-1">
          <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
          <span className="text-[11px] sm:text-[12px] font-bold text-white/80">{rightSourceLabel}</span>
        </div>

        {/* 좌측 블로그 유입 파티클 스트림 */}
        {!shouldReduceMotion &&
          [0, 1, 2, 3].map((idx) => (
            <div
              key={`lp-${idx}`}
              style={{
                position: 'absolute',
                left: '5%',
                top: `${20 + idx * 8}%`,
                width: '6%',
                maxWidth: '28px',
                aspectRatio: '1/1',
                zIndex: 20,
                pointerEvents: 'none',
                opacity: 0,
                animationName: 'streamL0',
                animationDuration: `${1.3 + idx * 0.15}s`,
                animationTimingFunction: 'cubic-bezier(0.4, 0, 0.8, 0.4)',
                animationDelay: `${idx * 0.35}s`,
                animationIterationCount: 'infinite',
                animationPlayState: playState,
              }}
              className="rounded-lg bg-[#03c75a] p-1 shadow-[0_0_12px_rgba(3,199,90,0.4)] flex items-center justify-center text-white font-black text-[10px]"
            >
              N
            </div>
          ))}

        {/* 우측 스레드 유입 파티클 스트림 */}
        {!shouldReduceMotion &&
          [0, 1, 2, 3].map((idx) => (
            <div
              key={`rp-${idx}`}
              style={{
                position: 'absolute',
                right: '5%',
                top: `${20 + idx * 8}%`,
                width: '6%',
                maxWidth: '28px',
                aspectRatio: '1/1',
                zIndex: 20,
                pointerEvents: 'none',
                opacity: 0,
                animationName: 'streamR0',
                animationDuration: `${1.35 + idx * 0.15}s`,
                animationTimingFunction: 'cubic-bezier(0.4, 0, 0.8, 0.4)',
                animationDelay: `${idx * 0.38}s`,
                animationIterationCount: 'infinite',
                animationPlayState: playState,
              }}
              className="rounded-lg bg-[#08090a] border border-white/20 p-1 shadow-[0_0_12px_rgba(255,255,255,0.25)] flex items-center justify-center text-white font-bold text-[10px]"
            >
              @
            </div>
          ))}

        {/* 중앙 하드웨어 목업 (너비 ~48%, 접지 그림자 포함) */}
        <div className="pointer-events-none absolute left-1/2 top-[28%] -translate-x-1/2 w-[52%] max-w-[300px] z-25">
          {/* 베이스 접지 그림자 */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-[85%] left-1/2 -translate-x-1/2 -translate-y-1/2 h-3.5 w-[88%] rounded-full bg-black/90 blur-[4px]"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={centerHardwareSrc}
            alt="중앙 자동화 처리 엔진"
            className="relative z-10 h-auto w-full object-contain filter drop-shadow-[0_8px_22px_rgba(0,0,0,0.65)]"
          />
        </div>

        {/* 중앙 화면 수렴 포털 펄스 */}
        <div
          aria-hidden="true"
          style={{
            animationName: !shouldReduceMotion ? 'portalPulseFlow' : 'none',
            animationDuration: '2.4s',
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
            animationPlayState: playState,
          }}
          className="pointer-events-none absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 h-[14%] w-[20%] rounded-full bg-[radial-gradient(circle_at_center,rgba(217,255,63,0.45)_0%,rgba(56,189,248,0.2)_45%,transparent_75%)] blur-md z-26"
        />

        {/* 하단 아웃풋 분출 파티클 */}
        {!shouldReduceMotion &&
          [-80, -35, 0, 35, 80].map((dx, idx) => (
            <div
              key={`cd-${idx}`}
              style={{
                position: 'absolute',
                left: '50%',
                top: '52%',
                width: '8%',
                maxWidth: '42px',
                aspectRatio: '1/1',
                zIndex: 30,
                pointerEvents: 'none',
                opacity: 0,
                animationName: 'cashDropFlow',
                animationDuration: `${1.1 + idx * 0.12}s`,
                animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                animationDelay: `${0.6 + idx * 0.22}s`,
                animationIterationCount: 'infinite',
                animationPlayState: playState,
                ['--dx' as string]: `${dx}px`,
                ['--rot' as string]: `${dx * 0.2}deg`,
              }}
              className="rounded-full bg-[#d9ff3f]/90 border border-[#d9ff3f] shadow-[0_0_12px_rgba(217,255,63,0.5)] flex items-center justify-center text-[#171b1f] font-black text-[12px]"
            >
              ₩
            </div>
          ))}

        {/* 하단 전환 완료 라벨 */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#d9ff3f]/30 bg-[#111418]/90 px-4 py-1.5 text-[11px] sm:text-[13px] font-bold text-[#d9ff3f]">
            <span className="h-2 w-2 rounded-full bg-[#d9ff3f] animate-ping" />
            {outputLabel}
          </span>
        </div>
      </div>
    </div>
  );
}
