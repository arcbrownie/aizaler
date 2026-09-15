'use client';

import React from 'react';

interface SilhouetteAuraFrameProps {
  imageSrc: string;
  shadowSrc?: string; // 단색 실루엣 섀도우 에셋 (선택)
  alt: string;
  auraColor?: string; // 기본: #d9ff3f
  className?: string;
  imageClassName?: string;
}

/**
 * 인물 및 캐릭터 배면 실루엣 섀도우(백라이트 오라) 프레임 컴포넌트
 * - 투박한 박스 외곽선 대신 캐릭터 외곽 라인을 따라 5% 확대된 네온 백라이트 형성
 * - 단색 섀도우 컷아웃이 없을 경우 순수 CSS drop-shadow/radial-gradient로 부드러운 오라 폴백
 */
export default function SilhouetteAuraFrame({
  imageSrc,
  shadowSrc,
  alt,
  auraColor = '#d9ff3f',
  className = '',
  imageClassName = '',
}: SilhouetteAuraFrameProps) {
  return (
    <div className={`relative overflow-hidden rounded-[24px] border border-white/15 bg-[linear-gradient(160deg,#2a333c_0%,#1a2027_60%,#101418_100%)] p-2 shadow-[0_24px_50px_rgba(0,0,0,0.65)] sm:rounded-[30px] sm:p-2.5 ${className}`}>
      <div className="relative overflow-hidden rounded-[18px] bg-[#0c1013] sm:rounded-[22px]">
        {/* 1. 단색 실루엣 섀도우 컷아웃 (존재 시) */}
        {shadowSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={shadowSrc}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover select-none scale-105 translate-y-1.5 origin-center opacity-80"
          />
        ) : (
          /* 2. CSS 방사형 백라이트 오라 폴백 */
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
          >
            <div
              className="h-[75%] w-[75%] rounded-full opacity-40 blur-2xl"
              style={{ backgroundColor: auraColor }}
            />
          </div>
        )}

        {/* 전면 인물/캐릭터 본체 */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt={alt}
          className={`relative z-10 block h-auto w-full object-cover select-none ${imageClassName}`}
          loading="lazy"
        />
      </div>
    </div>
  );
}
