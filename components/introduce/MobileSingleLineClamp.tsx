'use client';

import React from 'react';

interface MobileSingleLineClampProps {
  children: React.ReactNode;
  maxPx?: number; // 데스크톱 폰트 상한 (기본: 36)
  vwFactor?: number; // 뷰포트 계수 (기본: 5.2)
  singleLine?: boolean; // 10~12자 이내 짧은 구문에 한해 강제 1행 유지 여부 (기본: false)
  className?: string;
}

/**
 * 모바일 반응형 타이포그래피 & 클램프 컴포넌트
 * - 기본값(singleLine=false): 접근성 OS 대형 폰트 및 320px/360px 뷰포트에서 자연스럽게 줄바꿈(reflow)을 허용.
 *   clamp(1.125rem, kvw, Fpx) 기반으로 텍스트가 극단적으로 축소되지 않고 어절 단위(break-keep)로 흐름 유지.
 * - singleLine=true 명시 시: 10~12자 내외의 짧은 핵심 강조 키워드에만 whitespace-nowrap 적용.
 *   긴 문장에 대한 강제 nowrap 남용을 방지하여 가로 스크롤(오버플로)을 원천 차단.
 */
export default function MobileSingleLineClamp({
  children,
  maxPx = 36,
  vwFactor = 5.2,
  singleLine = false,
  className = '',
}: MobileSingleLineClampProps) {
  // 단일 문자열이고 길이가 14자 초과이면 단일행 강제를 자동 해제하여 오버플로 방지
  const isTooLongForSingleLine = typeof children === 'string' && children.trim().length > 14;
  const shouldNowrap = singleLine && !isTooLongForSingleLine;

  return (
    <span
      className={`block font-black tracking-[-0.03em] text-white leading-[1.35] ${
        shouldNowrap ? 'whitespace-nowrap' : 'break-keep [overflow-wrap:anywhere]'
      } ${className}`}
      style={{
        fontSize: `clamp(1.125rem, ${vwFactor}vw, ${maxPx}px)`,
      }}
    >
      {children}
    </span>
  );
}

/**
 * 텍스트 하이라이트 마크 컴포넌트
 * - 네온 라임 마커 효과
 */
export function LimeHighlight({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <mark
      className={`rounded-[3px] bg-[#d9ff3f] px-1.5 py-0.5 font-extrabold text-[#171b1f] ${className}`}
    >
      {children}
    </mark>
  );
}

