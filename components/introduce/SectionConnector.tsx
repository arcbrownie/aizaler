'use client';

import React from 'react';
import { useReducedMotion } from 'framer-motion';

export interface SectionConnectorProps {
  /**
   * 브랜드 액센트 컬러 (예: '#fc1c49', '#d9ff3f', 'rgba(...)', CSS 변수 등)
   * 지정 시 70% 알파(상단) 및 25% 알파(중간)를 자동 도출하여 그라데이션을 구성합니다.
   * (기본값: '#fc1c49' — 범용 레드 기본, Product 6 참조 시 명시적 '#d9ff3f' 전달 가능)
   */
  accentColor?: string;
  /**
   * 상단 그라데이션 시작 색상 (직접 지정 시 우선 적용)
   */
  fromColor?: string;
  /**
   * 중간 그라데이션 색상 (직접 지정 시 우선 적용)
   */
  viaColor?: string;
  /**
   * 하단 그라데이션 종료 색상 (기본: 'transparent')
   */
  toColor?: string;
  /**
   * 높이 스타일 클래스 (기본: 모바일 56px, 데스크톱 72px 'h-14 sm:h-18')
   */
  heightClass?: string;
  /**
   * 상하 마진 클래스 (기본: 'my-10 sm:my-14')
   */
  marginClass?: string;
  /**
   * 선 위를 천천히 타고 내려오는 미세 펄스 닷 활성화 여부 (기본: false)
   */
  showPulseDot?: boolean;
  className?: string;
}

/**
 * 16진수/RGB/CSS 색상 문자열로부터 정밀한 RGBA/color-mix 색상을 도출하는 헬퍼
 */
function deriveAlphaColor(color: string, alpha: number): string {
  if (!color) return `rgba(252, 28, 73, ${alpha})`;
  const trimmed = color.trim();
  if (trimmed.startsWith('#')) {
    let hex = trimmed.slice(1);
    if (hex.length === 3) {
      hex = hex.split('').map((c) => c + c).join('');
    }
    if (hex.length >= 6) {
      const r = parseInt(hex.slice(0, 2), 16);
      const g = parseInt(hex.slice(2, 4), 16);
      const b = parseInt(hex.slice(4, 6), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
  }
  if (trimmed.startsWith('rgb(')) {
    return trimmed.replace('rgb(', 'rgba(').replace(')', `, ${alpha})`);
  }
  if (trimmed.startsWith('rgba(')) {
    return trimmed.replace(/[\d.]+\)$/, `${alpha})`);
  }
  // CSS 변수(var(--...)) 또는 비표준 포맷 시 표준 CSS color-mix 사용
  return `color-mix(in srgb, ${trimmed} ${Math.round(alpha * 100)}%, transparent)`;
}

/**
 * SectionConnector — 섹션 간 서사 단절을 방지하는 정밀 수직 유도선 컴포넌트
 *
 * 정본 출처 고지 (Microscopic Provenance):
 * - Product 6 실전 구현 (`Product6StoryProofSection.tsx` 라인 509)의 원본 코드는 인라인 `<div>` 태그였습니다:
 *   `<div aria-hidden="true" className="mx-auto mt-10 h-14 w-px bg-gradient-to-b from-[#d9ff3f]/70 via-[#d9ff3f]/25 to-transparent sm:mt-14 sm:h-18" />`
 * - 본 `SectionConnector`는 위 원본 인라인 `<div>`를 독립적인 표준 패턴으로 추상화한 신규 재사용 템플릿(New Reusable Template)이며,
 *   원본 소스 파일의 컴포넌트명이 아닙니다.
 *
 * 조판 및 엔지니어링 원칙:
 * 1. 선택적 서사 전환: 모든 섹션 경계에 기계적으로 삽입하지 않고, 문제->해결책 등 서사적 단절이나 시선 전환이 필요한 지점에 선택적으로 배치.
 * 2. 브랜드 일관성: 범용 템플릿은 설정된 브랜드 액센트 컬러(기본: '#fc1c49')를 따르며, 하드코딩된 라임색은 명시적 Product 6 레퍼런스 외에 강제하지 않음.
 * 3. 폭은 정확히 1px (`w-px`), 중앙 정렬(`mx-auto`) 엄수.
 * 4. 조악한 유니코드 화살표(`▼`, `➔`)를 배제하고, 섬세한 1px 수직 그라데이션 페이드로 다음 섹션 시선 유도.
 * 5. 접근성: 스크린 리더 불필요 낭독 방지를 위해 `aria-hidden="true"` 기본 적용.
 */
export default function SectionConnector({
  accentColor = '#fc1c49',
  fromColor,
  viaColor,
  toColor = 'transparent',
  heightClass = 'h-14 sm:h-18',
  marginClass = 'mx-auto my-10 sm:my-14',
  showPulseDot = false,
  className = '',
}: SectionConnectorProps) {
  const shouldReduceMotion = useReducedMotion() ?? false;

  const effectiveFrom = fromColor || deriveAlphaColor(accentColor, 0.7);
  const effectiveVia = viaColor || deriveAlphaColor(accentColor, 0.25);

  return (
    <div
      aria-hidden="true"
      className={`relative w-px select-none pointer-events-none ${heightClass} ${marginClass} ${className}`.trim()}
      style={{
        background: `linear-gradient(to bottom, ${effectiveFrom}, ${effectiveVia}, ${toColor})`,
      }}
    >
      {showPulseDot && !shouldReduceMotion && (
        <span
          className="absolute left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)]"
          style={{
            animation: 'connectorDotMove 2.4s cubic-bezier(0.4, 0, 0.2, 1) infinite',
          }}
        />
      )}
      {showPulseDot && (
        <style>{`
          @keyframes connectorDotMove {
            0% { top: 0%; opacity: 0; transform: translate(-50%, 0) scale(0.6); }
            20% { opacity: 0.9; transform: translate(-50%, 0) scale(1); }
            80% { opacity: 0.7; }
            100% { top: 92%; opacity: 0; transform: translate(-50%, 0) scale(0.4); }
          }
        `}</style>
      )}
    </div>
  );
}
