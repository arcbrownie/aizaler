'use client';

import React from 'react';

interface SpotlightBeamStageProps {
  spotlightSrc?: string; // 천장 트랙 스포트라이트 컷아웃
  children?: React.ReactNode;
  className?: string;
}

/**
 * 천장 트랙 레일 및 원뿔형 투사 광선(Volumetric Beam) 조명 무대 컴포넌트
 * - 순수 CSS clip-path 및 방사형 그라데이션으로 구현된 하향 투사 원뿔 광선
 * - 에필로그, 명언, 브랜드 철학 강조 섹션의 몰입도 극대화
 */
export default function SpotlightBeamStage({
  spotlightSrc,
  children,
  className = '',
}: SpotlightBeamStageProps) {
  return (
    <div className={`relative isolate overflow-hidden bg-[#171b1f] pt-12 pb-16 text-center text-white sm:pt-16 sm:pb-20 ${className}`}>
      {/* 1. 상단 천장 트랙 레일 (Ceiling Track) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-8 top-[2px] h-[1px] bg-gradient-to-r from-transparent via-[#d9ff3f]/30 to-transparent"
      />

      {/* 2. 트랙 스포트라이트 조명 기구 (천장에 매달려 하향 투사) */}
      {spotlightSrc && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 z-10 w-[72px] sm:w-[96px] select-none"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={spotlightSrc}
            alt=""
            className="block h-auto w-full drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)]"
          />
        </div>
      )}

      {/* 3. 원뿔형 볼륨 광선 (Volumetric Beam) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[50px] left-1/2 -translate-x-1/2 z-0 h-[450px] w-[90%] max-w-[540px] opacity-40 mix-blend-screen select-none sm:top-[75px] sm:h-[540px]"
      >
        <div
          className="h-full w-full bg-[linear-gradient(180deg,rgba(217,255,63,0.35)_0%,rgba(217,255,63,0.1)_38%,rgba(217,255,63,0.02)_75%,transparent_100%)] blur-[14px]"
          style={{
            clipPath: 'polygon(46% 0%, 54% 0%, 96% 100%, 4% 100%)',
          }}
        />
      </div>

      {/* 4. 중앙 앰비언트 글로우 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-14 left-1/2 -translate-x-1/2 z-0 h-[360px] w-full max-w-[600px] bg-[radial-gradient(ellipse_75%_55%_at_50%_42%,rgba(217,255,63,0.12)_0%,rgba(217,255,63,0.03)_48%,transparent_74%)] blur-2xl select-none"
      />

      {/* 5. 전면 콘텐츠 슬롯 (z-20) */}
      <div className="relative z-20 mx-auto max-w-[620px] px-5">
        {children}
      </div>
    </div>
  );
}
