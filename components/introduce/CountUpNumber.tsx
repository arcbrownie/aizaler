'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

export interface CountUpNumberProps {
  /**
   * 카운트업 목표 수치 (정수)
   */
  end: number;
  /**
   * 지속 시간 (초 단위, 기본: 1.6s — Product 6 표준)
   * 0 이하일 경우 rAF 애니메이션 없이 최종값을 즉시 정적으로 렌더링합니다.
   */
  duration?: number;
  /**
   * 접두사 (예: '+', '₩')
   */
  prefix?: string;
  /**
   * 접미사 (예: '명', '개', '원', '%')
   */
  suffix?: string;
  className?: string;
}

/**
 * CountUpNumber — 뷰포트 진입 시 목표 수치까지 부드럽게 상승하는 프로덕션 카운트업 컴포넌트
 *
 * 접근성 & CLS 방어 아키텍처:
 * 1. CLS 원천 방지 (Grid 동일 셀 중첩 기법):
 *    - `tabular-nums`는 글리프 간 고정 폭만 보장할 뿐, 자릿수가 늘어나는 과정(9 -> 10 -> 100 -> 1,000)에서
 *      글자 수 증가에 따른 컨테이너 가로 폭 확장(CLS)을 전혀 막지 못합니다.
 *    - 본 컴포넌트는 CSS Grid (`inline-grid`)의 동일 셀(`[grid-area:1/1]`)에
 *      [보이지 않는 최종 포맷 레이어 (공간 사전 예약)]와 [동적 시각 카운터 오버레이]를 중첩 배치합니다.
 *    - 이를 통해 0에서 1,000으로 올라가는 전 과정에서 컨테이너의 가로 폭이 최종 완성 폭으로 100% 고정 유지되어
 *      CLS를 물리적으로 원천 차단합니다.
 * 2. 정직하고 안정적인 접근성 (Single Stable Accessible Final Text):
 *    - DOM 텍스트가 빠르게 변하더라도 `aria-live` 속성이 부재하면 스크린 리더는 60fps로 매 프레임을 낭독하지 않습니다.
 *      (과거 문서의 "60fps 연발 낭독 차단" 주장은 사실과 다름).
 *    - 대신 애니메이션 중인 시각 엘리먼트는 `aria-hidden="true"`로 감추고,
 *      보조 공학(Screen Reader)에는 완성된 최종 포맷 수치(`sr-only`)를 정확히 1벌(One Copy)만 안정적으로 제공하여
 *      불완전한 중간값이나 불필요한 음성 교란 없이 명확한 정보만을 전달합니다. (`aria-live`는 의도적으로 추가하지 않음).
 * 3. 모션 감축 & 무지연 폴백:
 *    - `prefers-reduced-motion` 활성화 시 뷰포트 진입 여부(`isInView`)를 기다리지 않고 마운트 즉시 최종값을 표시합니다.
 *    - `duration <= 0`인 경우에도 즉각 최종값을 렌더링합니다.
 * 4. 렌더링 동기화:
 *    - `requestAnimationFrame`은 디스플레이 주사율에 동기화되어 동작하지만 환경이나 시스템 부하에 따라 60fps를 보장하지 않으므로,
 *      타임스탬프 기반 경과율(`progress = (timestamp - startTimestamp) / durationMs`)로 완화 곡선을 계산합니다.
 *
 * ⚠️ [게이트 09 준수 경고]
 * 텍스트 전용 스탯 카드로 매출/지표를 날조하지 않으며, 반드시 1:1 실물 이미지 증빙(ClaimEvidenceBlock 등)과 인접 배치합니다.
 */
export default function CountUpNumber({
  end,
  duration = 1.6,
  prefix = '',
  suffix = '',
  className = '',
}: CountUpNumberProps) {
  const shouldReduce = useReducedMotion() ?? false;
  const isImmediate = shouldReduce || duration <= 0;

  // reduced-motion 활성화 또는 duration <= 0인 경우 뷰포트 진입 전이라도 즉시 최종값 세팅
  const [count, setCount] = useState(() => (isImmediate ? end : 0));
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isImmediate) {
      setCount(end);
      return;
    }

    if (!isInView) return;

    let startTimestamp: number | null = null;
    let animationFrameId: number;
    const durationMs = duration * 1000;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / durationMs, 1);
      // easeOutCubic: 1 - (1 - progress)^3
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * end));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, end, duration, isImmediate]);

  const formattedFinal = `${prefix}${end.toLocaleString()}${suffix}`;

  return (
    <span className={`inline-grid tabular-nums ${className}`.trim()}>
      {/* 1. 보이지 않는 최종 포맷 레이어: 자릿수 변화(9->10->100->1,000)에도 최종 너비를 100% 예약하여 CLS 차단 */}
      <span
        aria-hidden="true"
        className="invisible select-none pointer-events-none [grid-area:1/1]"
      >
        {formattedFinal}
      </span>

      {/* 2. 화면 낭독기용 안정적인 최종 완성 텍스트 단 1벌 (aria-live 없이 안정적 낭독) */}
      <span className="sr-only">{formattedFinal}</span>

      {/* 3. 시각적 카운터 오버레이 (동일 그리드 셀 [grid-area:1/1]에 포개어져 rAF 애니메이션 표현) */}
      <span ref={ref} aria-hidden="true" className="[grid-area:1/1]">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </span>
    </span>
  );
}
