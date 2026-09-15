'use client';

import React, { useRef, useState, useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';

interface SceneDragInteractionProps {
  folderSrc: string;
  targetLogoSrc: string;
  handCursorSrc: string;
  moneySrc: string;
  className?: string;
}

const DESIGN_W = 760;
const DESIGN_H = 460;
const LOOP = 4.2;

/**
 * 드래그 앤 드롭 시뮬레이션 인터랙션 코드 애니메이션 컴포넌트
 * - 폴더를 손 커서로 드래그하여 중앙 엔진에 연결하면 지폐 폭죽이 피어오르는 연출
 * - CSS transform scale로 360px 모바일 폭에 맞춰 완벽한 반응형 캔버스 자동 리사이징
 * - useReducedMotion 대응으로 동작 줄이기 활성화 시 정적 다이어그램으로 전환
 * - SSR 안전한 useEffect 기반 클라이언트 마운트
 */
export default function SceneDragInteraction({
  folderSrc,
  targetLogoSrc,
  handCursorSrc,
  moneySrc,
  className = '',
}: SceneDragInteractionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const shouldReduce = useReducedMotion() ?? false;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / DESIGN_W);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      role="img"
      aria-label="작업 폴더를 연결하면 24시간 자동으로 수익화 파이프라인이 기동되는 시뮬레이션 애니메이션"
      className={`relative w-full overflow-hidden bg-[#171b1f] ${className}`}
      style={{ height: Math.round(DESIGN_H * scale) }}
    >
      <style>{`
        @keyframes scene-spin { to { transform: rotate(360deg); } }
        @keyframes scene-spin-rev { to { transform: rotate(-360deg); } }
        @keyframes scene-hand-drag {
          0%, 15% { transform: translate(190px, 260px); opacity: 0; }
          20% { transform: translate(190px, 240px); opacity: 1; }
          30% { transform: translate(190px, 240px); }
          55% { transform: translate(540px, 240px); opacity: 1; }
          60% { transform: translate(540px, 240px); opacity: 0; }
          100% { transform: translate(540px, 240px); opacity: 0; }
        }
        @keyframes scene-folder-move {
          0%, 30% { transform: translate(170px, 210px) scale(1); }
          55% { transform: translate(520px, 210px) scale(0.9); opacity: 1; }
          60% { transform: translate(520px, 210px) scale(0.4); opacity: 0; }
          100% { transform: translate(170px, 210px) scale(1); opacity: 0; }
        }
        @keyframes scene-money-burst {
          0%, 58% { transform: translate(530px, 230px) scale(0); opacity: 0; }
          65% { transform: translate(530px, 140px) scale(1.1); opacity: 1; }
          85% { transform: translate(530px, 130px) scale(1); opacity: 1; }
          100% { transform: translate(530px, 110px) scale(0.9); opacity: 0; }
        }
      `}</style>

      {/* 디자인 캔버스 스케일 래퍼 */}
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{
          width: DESIGN_W,
          height: DESIGN_H,
          transform: `scale(${scale})`,
        }}
      >
        {/* 중앙 자동화 타깃 엔진 */}
        <div className="absolute left-[540px] top-[230px] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          {/* 외곽 회전 궤도 링 */}
          <div
            className="absolute h-36 w-36 rounded-full border border-dashed border-[#d9ff3f]/30"
            style={{ animation: shouldReduce ? 'none' : 'scene-spin 12s linear infinite' }}
          />
          <div
            className="absolute h-48 w-48 rounded-full border border-white/10"
            style={{ animation: shouldReduce ? 'none' : 'scene-spin-rev 18s linear infinite' }}
          />

          {/* 중앙 엔진 타일 */}
          <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-white/20 bg-[#12161b] p-4 shadow-[0_0_30px_rgba(217,255,63,0.18)] backdrop-blur-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={targetLogoSrc} alt="" className="h-full w-full object-contain" />
          </div>
          <span className="absolute -bottom-8 whitespace-nowrap text-[13px] font-black tracking-tight text-white/80">
            자동화 엔진 기동
          </span>
        </div>

        {/* 폴더 소스 */}
        <div
          className="absolute left-0 top-0 w-16"
          style={
            shouldReduce
              ? { transform: 'translate(520px, 210px) scale(0.9)', opacity: 1 }
              : { animation: `scene-folder-move ${LOOP}s cubic-bezier(0.25, 1, 0.5, 1) infinite` }
          }
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={folderSrc} alt="" className="block w-full drop-shadow-md" />
        </div>

        {/* 손 커서 (모션 감축 시 숨김) */}
        {!shouldReduce && (
          <div
            className="pointer-events-none absolute left-0 top-0 w-12 select-none z-20"
            style={{ animation: `scene-hand-drag ${LOOP}s cubic-bezier(0.25, 1, 0.5, 1) infinite` }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={handCursorSrc} alt="" className="block w-full drop-shadow-xl" />
          </div>
        )}

        {/* 드롭 후 솟아오르는 지폐 에셋 */}
        <div
          className="absolute left-0 top-0 w-28 -translate-x-1/2 -translate-y-1/2 z-10 select-none pointer-events-none"
          style={
            shouldReduce
              ? { transform: 'translate(530px, 130px) scale(1)', opacity: 1 }
              : { animation: `scene-money-burst ${LOOP}s cubic-bezier(0.16, 1, 0.3, 1) infinite` }
          }
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={moneySrc} alt="" className="block w-full drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]" />
        </div>
      </div>
    </div>
  );
}
