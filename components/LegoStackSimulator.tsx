'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Play, ArrowCounterClockwise, Plus, SpeakerHigh, SpeakerSlash, Sparkle, Target, Cpu, Globe, Crown } from '@phosphor-icons/react';

interface LegoBrick {
  id: number;
  name: string;
  desc: string;
  stageName: string;
  stageBadge: string;
  tag: string;
  badge: string;
  // Palette: Blue -> Red(Point) -> Purple -> White
  bgTop: string;
  bgFront: string;
  bgRight: string;
  studColor: string;
  themeColor: string;
  textColor: string;
  badgeBg: string;
  isWhiteBlock?: boolean;
  width: number;
  x: number;
  y: number;
  studs: number;
  icon: string;
}

const BRICKS: LegoBrick[] = [
  // ── [1. 블루 기저석 (Foundation)] ──
  {
    id: 1,
    name: '01. 아이디어 & BM 기획',
    desc: '무작정 코딩 대신 고객의 결핍과 현금 흐름 모델을 탄탄한 토스 블루 기초석으로 단단히 조립합니다.',
    stageName: '블루 기초',
    stageBadge: 'BLUE BASE',
    tag: 'FOUNDATION',
    badge: 'BM 기획',
    bgTop: 'bg-[#3b82f6]',
    bgFront: 'bg-[#2563eb]',
    bgRight: 'bg-[#1d4ed8]',
    studColor: 'bg-[#60a5fa] border-[#3b82f6]',
    themeColor: '#2563eb',
    textColor: 'text-blue-700',
    badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
    width: 220,
    x: 0,
    y: 80,
    studs: 6,
    icon: '💡'
  },

  // ── [2. 레드 핫포인트 (Conversion & Funnel)] ──
  {
    id: 2,
    name: '02. 메타 고전환 퍼널 매칭',
    desc: '광고 클릭을 이탈 없이 구매로 직결시키는 강렬한 토스 코랄 레드 핫포인트! 허수 유입을 차단하고 전환을 폭발시킵니다.',
    stageName: '레드 핫포인트',
    stageBadge: 'RED ACCENT',
    tag: 'CONVERSION',
    badge: '고전환 퍼널',
    bgTop: 'bg-[#ff6b7a]',
    bgFront: 'bg-[#f04452]',
    bgRight: 'bg-[#d6303f]',
    studColor: 'bg-[#ffa1ab] border-[#ff6b7a]',
    themeColor: '#f04452',
    textColor: 'text-rose-700',
    badgeBg: 'bg-rose-50 text-rose-700 border-rose-200',
    width: 190,
    x: -15,
    y: 38,
    studs: 5,
    icon: '🎯'
  },

  // ── [3. 딥 퍼플 AI 지능 (Deep Tech Intelligence)] ──
  {
    id: 3,
    name: '03. Claude Academy 정본 지능',
    desc: '인스타 카더라 대신 실리콘밸리 본사의 XML 구조화 프롬프트를 딥 퍼플 지능 핵으로 장착합니다.',
    stageName: '퍼플 지능',
    stageBadge: 'PURPLE AI',
    tag: 'INTELLIGENCE',
    badge: '정본 프롬프트',
    bgTop: 'bg-[#8b5cf6]',
    bgFront: 'bg-[#7c3aed]',
    bgRight: 'bg-[#6d28d9]',
    studColor: 'bg-[#a78bfa] border-[#8b5cf6]',
    themeColor: '#7c3aed',
    textColor: 'text-purple-700',
    badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
    width: 160,
    x: 10,
    y: -4,
    studs: 4,
    icon: '⚡'
  },

  // ── [4. 소프트 퍼플 자율 자동화 (Autonomous Flow)] ──
  {
    id: 4,
    name: '04. Aside 브라우저 자율 리서치',
    desc: '24시간 인터넷을 돌아다니며 시장을 감시하고 화이트 상용 런칭을 향해 데이터를 모으는 자율 에이전트 결합!',
    stageName: '퍼플 ➔ 화이트',
    stageBadge: 'FLOW',
    tag: 'AUTONOMOUS',
    badge: 'Aside 24h',
    bgTop: 'bg-[#a855f7]',
    bgFront: 'bg-[#9333ea]',
    bgRight: 'bg-[#7e22ce]',
    studColor: 'bg-[#c084fc] border-[#a855f7]',
    themeColor: '#9333ea',
    textColor: 'text-purple-700',
    badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
    width: 130,
    x: -20,
    y: -46,
    studs: 3,
    icon: '🌐'
  },

  // ── [5. 세라믹 퓨어 화이트 서밋 크라운 (White Launch)] ──
  {
    id: 5,
    name: '05. 1인 결제 프로덕트 완성!',
    desc: '외주비 0원으로 내 손으로 직접 띄운 순백의 상용 웹서비스. 군더더기 없이 자생적 현금 흐름을 여는 서밋 크라운 👑',
    stageName: '화이트 완성',
    stageBadge: 'WHITE SUMMIT',
    tag: 'LAUNCH',
    badge: '서밋 화이트',
    bgTop: 'bg-[#ffffff]',
    bgFront: 'bg-[#f8fafc]',
    bgRight: 'bg-[#e2e8f0]',
    studColor: 'bg-[#ffffff] border-[#cbd5e1]',
    themeColor: '#475569',
    textColor: 'text-slate-800',
    badgeBg: 'bg-white text-slate-900 border-slate-300 shadow-xs',
    isWhiteBlock: true,
    width: 95,
    x: -5,
    y: -88,
    studs: 2,
    icon: '👑'
  }
];

export default function LegoStackSimulator() {
  const [visibleCount, setVisibleCount] = useState<number>(5);
  const [selectedStep, setSelectedStep] = useState<number>(4); // default to step 5 (Crown)
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const playClickSound = (step: number) => {
    if (!soundEnabled) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      const osc = audioCtxRef.current.createOscillator();
      const gain = audioCtxRef.current.createGain();
      // Ascending musical progression
      const notes = [261.63, 329.63, 392.00, 523.25, 659.25];
      const freq = notes[Math.min(step - 1, notes.length - 1)] || 440;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq * 1.4, audioCtxRef.current.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq, audioCtxRef.current.currentTime + 0.08);

      gain.gain.setValueAtTime(0.2, audioCtxRef.current.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtxRef.current.currentTime + 0.09);

      osc.connect(gain);
      gain.connect(audioCtxRef.current.destination);
      osc.start();
      osc.stop(audioCtxRef.current.currentTime + 0.09);
    } catch {
      // Audio context may require user interaction
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      if (visibleCount < BRICKS.length) {
        timer = setTimeout(() => {
          setVisibleCount((prev) => {
            const next = prev + 1;
            setSelectedStep(next - 1);
            playClickSound(next);
            return next;
          });
        }, 900);
      } else {
        setIsPlaying(false);
      }
    }
    return () => clearTimeout(timer);
  }, [isPlaying, visibleCount]);

  const handleNext = () => {
    setIsPlaying(false);
    if (visibleCount >= BRICKS.length) {
      setVisibleCount(1);
      setSelectedStep(0);
      playClickSound(1);
    } else {
      const next = visibleCount + 1;
      setVisibleCount(next);
      setSelectedStep(next - 1);
      playClickSound(next);
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    setVisibleCount(1);
    setSelectedStep(0);
    playClickSound(1);
  };

  const activeBrick = BRICKS[selectedStep];

  return (
    <div className="rounded-3xl bg-white text-[#191f28] p-6 sm:p-7 border border-black/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.06)] space-y-5">
      {/* ── 1. 헤더: 레퍼런스 타이포그래피 & 사운드 토글 ── */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-3xl sm:text-4xl font-black text-[#191f28] tracking-tight leading-none">
            programming
          </h3>
          <div className="text-[11px] sm:text-xs font-mono font-bold text-[#8b95a1] uppercase tracking-[0.18em] mt-1.5">
            IS LIKE BUILDING LEGO BLOCKS...
          </div>
        </div>

        {/* 사운드 토글 */}
        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="p-2 rounded-xl bg-[#f2f4f6] hover:bg-gray-200 text-[#8b95a1] hover:text-[#191f28] transition-colors"
          title={soundEnabled ? '효과음 끄기' : '효과음 켜기'}
        >
          {soundEnabled ? <SpeakerHigh size={16} /> : <SpeakerSlash size={16} />}
        </button>
      </div>

      {/* ── 2. 성장 컬러 인디케이터: [블루 기저] ➔ [레드 포인트] ➔ [퍼플 ➔ 화이트 런칭] ── */}
      <div className="grid grid-cols-3 gap-2 text-xs">
        <div className="p-2 rounded-xl bg-blue-50/70 border border-blue-200/60 flex items-center justify-center gap-1.5 font-bold text-[#2563eb]">
          <span className="w-2 h-2 rounded-full bg-[#2563eb]" />
          <span>1. 블루 기저석</span>
        </div>
        <div className="p-2 rounded-xl bg-rose-50/70 border border-rose-200/60 flex items-center justify-center gap-1.5 font-bold text-[#f04452]">
          <span className="w-2 h-2 rounded-full bg-[#f04452] animate-pulse" />
          <span>2. 레드 핫포인트</span>
        </div>
        <div className="p-2 rounded-xl bg-gradient-to-r from-purple-50 to-gray-50 border border-purple-200/60 flex items-center justify-center gap-1.5 font-bold text-[#7c3aed]">
          <span className="w-2 h-2 rounded-full bg-[#7c3aed]" />
          <span>3. 퍼플 ➔ 화이트 런칭</span>
        </div>
      </div>

      {/* ── 3. 화사한 스튜디오 3D 조립 스테이지 ── */}
      <div className="relative w-full h-[270px] sm:h-[290px] flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] border border-black/[0.06]">
        {/* 접지 그림자 */}
        <div
          className="absolute w-[260px] h-[130px] rounded-full opacity-30 blur-lg pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse, #475569 0%, transparent 70%)',
            transform: 'translateY(85px)',
          }}
        />

        {/* 3D Scene */}
        <div
          className="relative w-[240px] h-[190px] flex items-center justify-center"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateX(24deg) rotateY(-28deg)',
          }}
        >
          {/* 차례로 결합되는 블록들 */}
          {BRICKS.slice(0, visibleCount).map((b, idx) => {
            const isLatest = idx === visibleCount - 1;
            const isSelected = selectedStep === idx;
            const studSize = 14;
            const spacing = b.width / b.studs;

            return (
              <div
                key={b.id}
                onClick={() => {
                  setSelectedStep(idx);
                  playClickSound(idx + 1);
                }}
                className={`absolute transition-all duration-500 ease-out cursor-pointer group ${
                  isLatest ? 'animate-in fade-in zoom-in-95 duration-300' : ''
                }`}
                style={{
                  width: `${b.width}px`,
                  height: '36px',
                  left: `calc(50% + ${b.x}px - ${b.width / 2}px)`,
                  top: `calc(50% + ${b.y}px - 18px)`,
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* 상단면 (돌기 스터드 장착) */}
                <div
                  className={`absolute ${b.bgTop} rounded-[4px] flex items-center justify-around border-t border-l ${
                    b.isWhiteBlock ? 'border-gray-200 shadow-md' : 'border-white/60 shadow-inner'
                  }`}
                  style={{
                    width: `${b.width}px`,
                    height: '52px',
                    transform: 'rotateX(90deg) translateZ(26px)',
                  }}
                >
                  {Array.from({ length: b.studs }).map((_, sIdx) => {
                    const left = sIdx * spacing + (spacing - studSize) / 2;
                    return (
                      <div
                        key={sIdx}
                        className={`absolute rounded-full ${b.studColor} ${
                          b.isWhiteBlock ? 'shadow-sm border border-gray-300' : 'shadow-xs border border-white/40'
                        }`}
                        style={{
                          width: `${studSize}px`,
                          height: `${studSize}px`,
                          left: `${left}px`,
                          top: '18px',
                          transform: 'translateZ(8px)',
                        }}
                      />
                    );
                  })}
                </div>

                {/* 정면 */}
                <div
                  className={`absolute ${b.bgFront} rounded-[4px] flex items-center justify-between px-3 text-[10px] font-black border-t shadow-lg ${
                    b.isWhiteBlock
                      ? 'text-[#191f28] border-gray-200 ring-1 ring-black/[0.08]'
                      : 'text-white border-white/40'
                  } ${
                    isSelected ? 'ring-2 ring-white ring-offset-2 ring-offset-[#3182f6]' : ''
                  }`}
                  style={{
                    width: `${b.width}px`,
                    height: '36px',
                    transform: 'translateZ(26px)',
                  }}
                >
                  <span className="font-mono">#{b.id}</span>
                  <span className="truncate text-[9px] opacity-95 tracking-wide">
                    {b.tag}
                  </span>
                </div>

                {/* 우측면 (입체 음영) */}
                <div
                  className={`absolute ${b.bgRight} rounded-[4px] border-t ${
                    b.isWhiteBlock ? 'border-gray-300' : 'border-white/20'
                  }`}
                  style={{
                    width: '52px',
                    height: '36px',
                    left: `${b.width - 26}px`,
                    transform: 'rotateY(90deg) translateZ(0)',
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* 조립 단계 칩 */}
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-black/[0.08] text-[11px] font-bold text-[#191f28] shadow-xs flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#3182f6] animate-pulse" />
          <span>성장 조립 {visibleCount} / {BRICKS.length}</span>
        </div>
      </div>

      {/* ── 4. 블록별 탭 선택기 (01 ~ 05) ── */}
      <div className="grid grid-cols-5 gap-1.5">
        {BRICKS.map((b, idx) => {
          const isSelected = selectedStep === idx;
          const isBuilt = idx < visibleCount;
          return (
            <button
              key={b.id}
              onClick={() => {
                setSelectedStep(idx);
                if (idx >= visibleCount) {
                  setVisibleCount(idx + 1);
                }
                playClickSound(idx + 1);
              }}
              className={`py-2 px-1 rounded-xl text-center transition-all border ${
                isSelected
                  ? 'bg-[#191f28] text-white border-[#191f28] shadow-xs scale-[1.02]'
                  : isBuilt
                  ? 'bg-white hover:bg-gray-50 text-[#4e5968] border-black/[0.08]'
                  : 'bg-gray-50 text-[#8b95a1] border-dashed border-gray-200 opacity-60'
              }`}
            >
              <div className="text-[10px] font-mono font-bold">0{b.id}</div>
              <div className="text-[11px] font-black truncate hidden sm:block mt-0.5">
                {b.badge}
              </div>
            </button>
          );
        })}
      </div>

      {/* ── 5. 현재 선택된 단계 상세 카드 (Toss Card Architecture) ── */}
      <div className="p-4 rounded-2xl bg-[#f9fafb] border border-black/[0.06] flex items-center justify-between gap-4 transition-all">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full border uppercase tracking-wider ${activeBrick.badgeBg}`}>
              {activeBrick.stageName} · STEP 0{activeBrick.id}
            </span>
          </div>
          <div className="text-sm sm:text-base font-black text-[#191f28]">
            {activeBrick.name}
          </div>
          <p className="text-xs text-[#4e5968] leading-relaxed">
            {activeBrick.desc}
          </p>
        </div>
        <div className="text-2xl shrink-0 w-11 h-11 rounded-2xl bg-white border border-black/[0.06] shadow-xs flex items-center justify-center">
          {activeBrick.icon}
        </div>
      </div>

      {/* ── 6. 컨트롤 (자동 조립 / 다음 블록 / 리셋) ── */}
      <div className="flex items-center justify-between gap-3 pt-1">
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              if (visibleCount >= BRICKS.length) {
                setVisibleCount(1);
                setSelectedStep(0);
                setIsPlaying(true);
                playClickSound(1);
              } else {
                setIsPlaying(!isPlaying);
              }
            }}
            className="px-4 py-2.5 rounded-xl bg-[#3182f6] hover:bg-[#1b64da] text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 active:scale-95"
          >
            <Play size={14} weight="fill" />
            <span>{isPlaying ? '일시 정지' : '▶ 성장 과정 자동 조립'}</span>
          </button>
          <button
            onClick={handleNext}
            className="px-3.5 py-2.5 rounded-xl bg-[#f2f4f6] hover:bg-[#e5e8eb] text-[#191f28] text-xs font-bold transition-all border border-black/[0.04] flex items-center gap-1 active:scale-95"
          >
            <Plus size={14} weight="bold" />
            <span>블록 하나 더 쌓기</span>
          </button>
        </div>

        <button
          onClick={handleReset}
          className="p-2 rounded-xl text-[#8b95a1] hover:text-[#191f28] hover:bg-gray-100 transition-colors text-xs flex items-center gap-1"
          title="처음부터 다시 조립"
        >
          <ArrowCounterClockwise size={15} />
          <span className="hidden sm:inline">다시 조립</span>
        </button>
      </div>
    </div>
  );
}
