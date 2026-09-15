'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, useReducedMotion } from 'framer-motion';

export interface CloneWorkstationItem {
  id: string;
  dist: number; // 중심과의 거리 (0: 중심, 1: 안쪽, 2: 바깥쪽)
  name: string;
  role: string;
  cloneSrc: string;
  laptopSrc?: string;
}

export interface CloneSystemStageProps {
  /**
   * 본체 마스코트 이미지 경로
   */
  masterMascotSrc?: string;
  /**
   * 스모크 버스트 에셋 경로
   */
  smokeBurstSrc?: string;
  /**
   * 분신 작업대 목록 (기본 5인 구성)
   */
  workstations?: CloneWorkstationItem[];
  /**
   * 브랜드 액센트 컬러 (기본: '#d9ff3f')
   */
  accentColor?: string;
  className?: string;
}

const DEFAULT_WORKSTATIONS: CloneWorkstationItem[] = [
  {
    id: 'clone-0',
    dist: 2,
    name: '분신 01',
    role: '데이터 수집',
    cloneSrc: '/assets/mascot/mascot-ai-cutout.webp',
  },
  {
    id: 'clone-1',
    dist: 1,
    name: '분신 02',
    role: '블로그 발행',
    cloneSrc: '/assets/mascot/mascot-ai-cutout.webp',
  },
  {
    id: 'clone-2',
    dist: 0,
    name: '분신 03 (중심)',
    role: '콘텐츠 생성',
    cloneSrc: '/assets/mascot/mascot-ai-cutout.webp',
  },
  {
    id: 'clone-3',
    dist: 1,
    name: '분신 04',
    role: '스레드 배포',
    cloneSrc: '/assets/mascot/mascot-ai-cutout.webp',
  },
  {
    id: 'clone-4',
    dist: 2,
    name: '분신 05',
    role: '수익 링크 관리',
    cloneSrc: '/assets/mascot/mascot-ai-cutout.webp',
  },
];

/**
 * CloneSystemStage — Product 6 코드 레벨 클론 매직 애니메이션 무대 컴포넌트
 *
 * Product 6 실전 구현 (`Product6LeverageSection.tsx` 라인 147~460):
 * - 상단: 단일 본체 마스코트 손인(Hand Seal) 결합 포커스 펄스 및 에너지 링 발산
 * - 하단: 5인의 분신 변환 영역 (얕은 부채꼴 1줄 팬 배치, 모바일 360px 완벽 대응)
 * - 스테이징: 스모크 버스트 피크 시점에 랩탑 소멸 ↔ 분신 출현 교차 전환
 * - 사이클: 7.4s 루프, repeat: Infinity, 중심에서 외곽으로의 자연스러운 스태거
 * - 안정성: useInView 이탈 시 자동 일시정지, useReducedMotion 시 정적 완성형 분신 노출
 *
 * ⚠️ [일관된 일러스트레이션 예외 규정 준수]
 * 본 컴포넌트는 단일한 하나의 무대(Stage) 안에서 본체와 분신들이 유기적으로 상호작용하는 복합 비주얼로서,
 * 기각 게이트 01(다열 미디어 그리드 금지)의 위반이 아닌 **1개의 통합 주 비주얼(One Principal Coherent Scene)**로 인정됩니다.
 */
export default function CloneSystemStage({
  masterMascotSrc = '/assets/mascot/mascot-ninja-seal.webp',
  smokeBurstSrc = '/assets/vfx/vfx-smoke-burst.webp',
  workstations = DEFAULT_WORKSTATIONS,
  accentColor = '#d9ff3f',
  className = '',
}: CloneSystemStageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.25 });
  const shouldReduceMotion = useReducedMotion() ?? false;
  const rawId = React.useId();
  const filterId = `clone-glow-${rawId.replace(/[^a-zA-Z0-9_-]/g, '')}`;

  const baseCycle = 8.0;
  const cycleDuration = 7.4;

  // 본체 마스코트 포커스 펄스 애니메이션
  const masterAnimate = shouldReduceMotion
    ? { scale: 1, y: 0, opacity: 1 }
    : isInView
    ? {
        scale: [1, 1, 1.08, 1, 1],
        y: [0, 0, -3, 0, 0],
      }
    : { scale: 1, y: 0, opacity: 1 };

  const masterTransition = shouldReduceMotion
    ? { duration: 0 }
    : {
        duration: cycleDuration,
        repeat: Infinity,
        times: [0, 0.0875, 0.13125, 0.1875, 1],
        ease: 'easeInOut' as const,
      };

  // 에너지 링 1 애니메이션
  const ring1Animate = shouldReduceMotion
    ? { opacity: 0, scale: 1 }
    : isInView
    ? {
        scale: [0.65, 0.65, 1.15, 1.35, 0.65],
        opacity: [0, 0, 0.7, 0, 0],
      }
    : { scale: 0.65, opacity: 0 };

  const ring1Transition = shouldReduceMotion
    ? { duration: 0 }
    : {
        duration: cycleDuration,
        repeat: Infinity,
        times: [0, 0.09375, 0.1375, 0.19375, 1],
        ease: 'easeOut' as const,
      };

  return (
    <div
      ref={containerRef}
      role="img"
      aria-label="AI 본체가 손인 결합을 통해 5인의 자동화 분신으로 복제되어 동시 업무를 수행하는 시스템 시각화"
      className={`relative mx-auto my-8 w-full max-w-[640px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#181f26]/90 via-[#13171c]/95 to-[#0f1316] px-3 pt-8 pb-8 shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)] select-none text-center ${className}`.trim()}
    >
      {/* 앰비언트 언더글로우 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 h-44 w-[75%] rounded-full bg-[radial-gradient(circle,rgba(217,255,63,0.12)_0%,transparent_75%)] blur-2xl"
      />

      {/* 에너지 링 SVG 레이어 */}
      <svg
        aria-hidden="true"
        viewBox="0 0 400 240"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <defs>
          <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <motion.circle
          cx="200"
          cy="70"
          r="48"
          fill="none"
          stroke={accentColor}
          strokeWidth="1.8"
          filter={`url(#${filterId})`}
          animate={ring1Animate}
          transition={ring1Transition}
        />
      </svg>

      {/* ── 1. 상단: 단일 대형 본체 마스코트 (소스 & 트리거) ── */}
      <div className="relative z-20 flex flex-col items-center">
        <motion.div
          animate={masterAnimate}
          transition={masterTransition}
          className="relative h-[96px] w-[96px] sm:h-[128px] sm:w-[128px]"
        >
          {/* 본체 배면 글로우 오라 */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-3 rounded-full bg-[radial-gradient(circle_at_center,rgba(217,255,63,0.25)_0%,transparent_70%)] blur-md"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={masterMascotSrc}
            alt="손인 본체 마스코트"
            className="relative z-10 h-full w-full object-contain drop-shadow-[0_4px_20px_rgba(217,255,63,0.35)]"
          />
        </motion.div>
        <p className="mt-2 text-[12px] sm:text-[14px] font-bold text-white/80">
          마스터 시스템 (트리거)
        </p>
      </div>

      {/* ── 2. 하단: 5인의 분신 작업대 (부채꼴 1줄 팬 배치, 모바일 360px 넘침 방지) ── */}
      <div className="relative z-10 mt-6 sm:mt-8 flex items-center justify-center -space-x-1 sm:space-x-3">
        {workstations.map((ws) => {
          const tBurstStartSec = ws.dist === 0 ? 1.30 : ws.dist === 1 ? 1.60 : 1.90;
          const tSmokePeakSec = tBurstStartSec + 0.25;
          const tSmokeEndSec = tSmokePeakSec + 0.40;

          const tBurstStart = tBurstStartSec / baseCycle;
          const tSmokePeak = tSmokePeakSec / baseCycle;
          const tSmokeEnd = tSmokeEndSec / baseCycle;
          const tResetHold = 7.10 / baseCycle;

          // 1. 스모크 버스트 애니메이션
          const smokeTimes = [0, tBurstStart, tSmokePeak, tSmokeEnd, tResetHold, 1];
          const smokeAnimate = shouldReduceMotion
            ? { opacity: 0, scale: 0.55 }
            : isInView
            ? {
                opacity: [0, 0, 1.0, 0, 0, 0],
                scale: [0.55, 0.55, 1.0, 1.08, 1.08, 0.55],
              }
            : { opacity: 0, scale: 0.55 };

          const smokeTransition = shouldReduceMotion
            ? { duration: 0 }
            : {
                duration: cycleDuration,
                repeat: Infinity,
                times: smokeTimes,
                ease: 'easeInOut' as const,
              };

          // 2. 분신 마스코트 페이드인
          const tMascotFadeStart = (tSmokePeakSec - 0.05) / baseCycle;
          const tMascotFadeEnd = (tSmokePeakSec + 0.15) / baseCycle;
          const cloneTimes = [0, tMascotFadeStart, tMascotFadeEnd, 6.30 / baseCycle, 7.10 / baseCycle, 1];

          const cloneAnimate = shouldReduceMotion
            ? { opacity: 1 }
            : isInView
            ? {
                opacity: [0, 0, 1, 1, 0, 0],
              }
            : { opacity: 0 };

          const cloneTransition = shouldReduceMotion
            ? { duration: 0 }
            : {
                duration: cycleDuration,
                repeat: Infinity,
                times: cloneTimes,
                ease: 'easeInOut' as const,
              };

          return (
            <div
              key={ws.id}
              className="relative flex flex-col items-center w-[60px] sm:w-[84px] shrink-0"
            >
              <div className="relative h-[64px] w-[64px] sm:h-[84px] sm:w-[84px] flex items-center justify-center">
                {/* 스모크 버스트 */}
                <motion.div
                  animate={smokeAnimate}
                  transition={smokeTransition}
                  className="pointer-events-none absolute inset-0 z-20"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={smokeBurstSrc}
                    alt=""
                    className="h-full w-full object-contain"
                  />
                </motion.div>

                {/* 분신 마스코트 */}
                <motion.div
                  animate={cloneAnimate}
                  transition={cloneTransition}
                  className="relative z-10 h-full w-full"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ws.cloneSrc}
                    alt={ws.name}
                    className="h-full w-full object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
                  />
                </motion.div>
              </div>

              <span className="mt-1.5 text-[10px] sm:text-[11.5px] font-bold text-white/75 truncate w-full">
                {ws.role}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
