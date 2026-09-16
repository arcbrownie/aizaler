'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Play, ArrowCounterClockwise, Plus, SpeakerHigh, SpeakerSlash } from '@phosphor-icons/react';

interface LegoBrick {
  id: number;
  name: string;
  desc: string;
  stageName: string;
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
  // ── [1. 블루 기저석] ──
  {
    id: 1,
    name: '01. 아이디어 & BM 기획',
    desc: '무작정 코딩 대신 고객의 결핍과 현금 흐름 모델을 탄탄한 토스 블루 기초석으로 조립합니다.',
    stageName: '블루 기초',
    tag: 'FOUNDATION',
    badge: 'BM 기획',
    bgTop: 'bg-[#3b82f6]',
    bgFront: 'bg-[#2563eb]',
    bgRight: 'bg-[#1d4ed8]',
    studColor: 'bg-[#60a5fa] border-[#3b82f6]',
    themeColor: '#2563eb',
    textColor: 'text-blue-700',
    badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
    width: 200,
    x: 0,
    y: 70,
    studs: 6,
    icon: '💡'
  },

  // ── [2. 레드 핫포인트] ──
  {
    id: 2,
    name: '02. 메타 고전환 퍼널 매칭',
    desc: '광고 클릭을 이탈 없이 구매로 직결시키는 강렬한 토스 코랄 레드 핫포인트! 이탈을 막고 전환을 극대화합니다.',
    stageName: '레드 핫포인트',
    tag: 'CONVERSION',
    badge: '고전환 퍼널',
    bgTop: 'bg-[#ff6b7a]',
    bgFront: 'bg-[#f04452]',
    bgRight: 'bg-[#d6303f]',
    studColor: 'bg-[#ffa1ab] border-[#ff6b7a]',
    themeColor: '#f04452',
    textColor: 'text-rose-700',
    badgeBg: 'bg-rose-50 text-rose-700 border-rose-200',
    width: 170,
    x: -12,
    y: 35,
    studs: 5,
    icon: '🎯'
  },

  // ── [3. 딥 퍼플 AI 지능] ──
  {
    id: 3,
    name: '03. Claude Academy 정본 지능',
    desc: '실리콘밸리 Anthropic 본사의 정본 XML 구조화 프롬프트를 딥 퍼플 지능 핵으로 장착합니다.',
    stageName: '퍼플 지능',
    tag: 'INTELLIGENCE',
    badge: '정본 프롬프트',
    bgTop: 'bg-[#8b5cf6]',
    bgFront: 'bg-[#7c3aed]',
    bgRight: 'bg-[#6d28d9]',
    studColor: 'bg-[#a78bfa] border-[#8b5cf6]',
    themeColor: '#7c3aed',
    textColor: 'text-purple-700',
    badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
    width: 140,
    x: 8,
    y: 0,
    studs: 4,
    icon: '⚡'
  },

  // ── [4. 소프트 퍼플 자율 자동화] ──
  {
    id: 4,
    name: '04. Aside 브라우저 자율 리서치',
    desc: '24시간 웹을 자동 탐색하며 시장 정보를 수집해 순백의 런칭으로 연결하는 에이전트 결합!',
    stageName: '퍼플 ➔ 화이트',
    tag: 'AUTONOMOUS',
    badge: 'Aside 24h',
    bgTop: 'bg-[#a855f7]',
    bgFront: 'bg-[#9333ea]',
    bgRight: 'bg-[#7e22ce]',
    studColor: 'bg-[#c084fc] border-[#a855f7]',
    themeColor: '#9333ea',
    textColor: 'text-purple-700',
    badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
    width: 115,
    x: -15,
    y: -35,
    studs: 3,
    icon: '🌐'
  },

  // ── [5. 세라믹 퓨어 화이트 서밋 크라운] ──
  {
    id: 5,
    name: '05. 1인 결제 프로덕트 완성!',
    desc: '외주비 0원으로 내 손으로 직접 띄운 순백의 상용 웹서비스. 군더더기 없이 자생적 현금 흐름을 여는 서밋 크라운 👑',
    stageName: '화이트 완성',
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
    width: 85,
    x: -4,
    y: -70,
    studs: 2,
    icon: '👑'
  }
];

export default function LegoStackSimulator() {
  const [visibleCount, setVisibleCount] = useState<number>(5);
  const [selectedStep, setSelectedStep] = useState<number>(4);
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
      const notes = [261.63, 329.63, 392.00, 523.25, 659.25];
      const freq = notes[Math.min(step - 1, notes.length - 1)] || 440;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq * 1.3, audioCtxRef.current.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq, audioCtxRef.current.currentTime + 0.07);

      gain.gain.setValueAtTime(0.18, audioCtxRef.current.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtxRef.current.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(audioCtxRef.current.destination);
      osc.start();
      osc.stop(audioCtxRef.current.currentTime + 0.08);
    } catch {
      // Audio context restricted before gesture
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
        }, 850);
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
    <div className="rounded-2xl sm:rounded-3xl bg-white text-[#191f28] p-4 sm:p-6 border border-black/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.05)] space-y-3.5 sm:space-y-4">
      {/* ── 1. 헤더: 컴팩트 타이포그래피 & 사운드 토글 ── */}
      <div className="flex items-center justify-between gap-3">
        <div>
          <h3 className="text-2xl sm:text-3xl font-black text-[#191f28] tracking-tight leading-none">
            programming
          </h3>
          <div className="text-[10px] sm:text-xs font-mono font-bold text-[#8b95a1] uppercase tracking-[0.16em] mt-1">
            IS LIKE BUILDING LEGO BLOCKS...
          </div>
        </div>

        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="p-1.5 sm:p-2 rounded-xl bg-[#f2f4f6] hover:bg-gray-200 text-[#8b95a1] hover:text-[#191f28] transition-colors text-xs flex items-center gap-1"
          title={soundEnabled ? '효과음 끄기' : '효과음 켜기'}
        >
          {soundEnabled ? <SpeakerHigh size={15} /> : <SpeakerSlash size={15} />}
          <span className="text-[10px] hidden sm:inline">{soundEnabled ? '소리 ON' : '소리 OFF'}</span>
        </button>
      </div>

      {/* ── 2. 성장 컬러 인디케이터 (모바일 컴팩트) ── */}
      <div className="grid grid-cols-3 gap-1.5 text-[10px] sm:text-xs">
        <div className="py-1.5 px-2 rounded-lg bg-blue-50/70 border border-blue-200/60 flex items-center justify-center gap-1 font-bold text-[#2563eb]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
          <span>1. 블루 기저</span>
        </div>
        <div className="py-1.5 px-2 rounded-lg bg-rose-50/70 border border-rose-200/60 flex items-center justify-center gap-1 font-bold text-[#f04452]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f04452] animate-pulse" />
          <span>2. 레드 핫포인트</span>
        </div>
        <div className="py-1.5 px-2 rounded-lg bg-gradient-to-r from-purple-50 to-gray-50 border border-purple-200/60 flex items-center justify-center gap-1 font-bold text-[#7c3aed]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed]" />
          <span>3. 화이트 런칭</span>
        </div>
      </div>

      {/* ── 3. 3D 조립 스테이지 (모바일 높이 축소: 200px) ── */}
      <div className="relative w-full h-[190px] sm:h-[240px] flex items-center justify-center overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] border border-black/[0.05]">
        {/* 접지 그림자 */}
        <div
          className="absolute w-[220px] h-[100px] rounded-full opacity-25 blur-md pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse, #475569 0%, transparent 70%)',
            transform: 'translateY(70px)',
          }}
        />

        {/* 3D Scene (모바일 스케일 0.85) */}
        <div
          className="relative w-[210px] h-[160px] flex items-center justify-center scale-[0.85] sm:scale-100 transition-transform"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateX(24deg) rotateY(-28deg)',
          }}
        >
          {BRICKS.slice(0, visibleCount).map((b, idx) => {
            const isLatest = idx === visibleCount - 1;
            const isSelected = selectedStep === idx;
            const studSize = 13;
            const spacing = b.width / b.studs;

            return (
              <div
                key={b.id}
                onClick={() => {
                  setSelectedStep(idx);
                  playClickSound(idx + 1);
                }}
                className={`absolute transition-all duration-500 ease-out cursor-pointer ${
                  isLatest ? 'animate-in fade-in zoom-in-95 duration-300' : ''
                }`}
                style={{
                  width: `${b.width}px`,
                  height: '32px',
                  left: `calc(50% + ${b.x}px - ${b.width / 2}px)`,
                  top: `calc(50% + ${b.y}px - 16px)`,
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* 상단면 (돌기 스터드 장착) */}
                <div
                  className={`absolute ${b.bgTop} rounded-[3px] flex items-center justify-around border-t border-l ${
                    b.isWhiteBlock ? 'border-gray-200 shadow-sm' : 'border-white/60 shadow-inner'
                  }`}
                  style={{
                    width: `${b.width}px`,
                    height: '46px',
                    transform: 'rotateX(90deg) translateZ(23px)',
                  }}
                >
                  {Array.from({ length: b.studs }).map((_, sIdx) => {
                    const left = sIdx * spacing + (spacing - studSize) / 2;
                    return (
                      <div
                        key={sIdx}
                        className={`absolute rounded-full ${b.studColor} ${
                          b.isWhiteBlock ? 'shadow-xs border border-gray-300' : 'shadow-xs border border-white/40'
                        }`}
                        style={{
                          width: `${studSize}px`,
                          height: `${studSize}px`,
                          left: `${left}px`,
                          top: '16px',
                          transform: 'translateZ(7px)',
                        }}
                      />
                    );
                  })}
                </div>

                {/* 정면 */}
                <div
                  className={`absolute ${b.bgFront} rounded-[3px] flex items-center justify-between px-2.5 text-[9px] font-black border-t shadow-md ${
                    b.isWhiteBlock
                      ? 'text-[#191f28] border-gray-200 ring-1 ring-black/[0.08]'
                      : 'text-white border-white/40'
                  } ${
                    isSelected ? 'ring-2 ring-white ring-offset-2 ring-offset-[#3182f6]' : ''
                  }`}
                  style={{
                    width: `${b.width}px`,
                    height: '32px',
                    transform: 'translateZ(23px)',
                  }}
                >
                  <span className="font-mono">#{b.id}</span>
                  <span className="truncate text-[8.5px] opacity-95 tracking-wide">
                    {b.tag}
                  </span>
                </div>

                {/* 우측면 */}
                <div
                  className={`absolute ${b.bgRight} rounded-[3px] border-t ${
                    b.isWhiteBlock ? 'border-gray-300' : 'border-white/20'
                  }`}
                  style={{
                    width: '46px',
                    height: '32px',
                    left: `${b.width - 23}px`,
                    transform: 'rotateY(90deg) translateZ(0)',
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* 조립 단계 칩 */}
        <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md border border-black/[0.08] text-[10px] font-bold text-[#191f28] shadow-xs flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3182f6] animate-pulse" />
          <span>조립 {visibleCount} / {BRICKS.length}</span>
        </div>
      </div>

      {/* ── 4. 블록별 탭 선택기 (01 ~ 05) ── */}
      <div className="grid grid-cols-5 gap-1">
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
              className={`py-1.5 px-1 rounded-lg text-center transition-all border ${
                isSelected
                  ? 'bg-[#191f28] text-white border-[#191f28] shadow-xs scale-[1.02]'
                  : isBuilt
                  ? 'bg-white hover:bg-gray-50 text-[#4e5968] border-black/[0.08]'
                  : 'bg-gray-50 text-[#8b95a1] border-dashed border-gray-200 opacity-60'
              }`}
            >
              <div className="text-[9px] font-mono font-bold">0{b.id}</div>
              <div className="text-[10px] font-black truncate hidden sm:block mt-0.5">
                {b.badge}
              </div>
            </button>
          );
        })}
      </div>

      {/* ── 5. 현재 선택된 단계 상세 카드 ── */}
      <div className="p-3 sm:p-3.5 rounded-xl bg-[#f9fafb] border border-black/[0.05] flex items-center justify-between gap-3 transition-all">
        <div className="space-y-0.5 min-w-0">
          <div className="flex items-center gap-1.5">
            <span className={`text-[9px] font-black px-2 py-0.5 rounded-full border uppercase tracking-wider ${activeBrick.badgeBg}`}>
              STEP 0{activeBrick.id} · {activeBrick.stageName}
            </span>
          </div>
          <div className="text-xs sm:text-sm font-black text-[#191f28] truncate">
            {activeBrick.name}
          </div>
          <p className="text-[11px] sm:text-xs text-[#4e5968] leading-tight line-clamp-2">
            {activeBrick.desc}
          </p>
        </div>
        <div className="text-xl shrink-0 w-9 h-9 rounded-xl bg-white border border-black/[0.06] shadow-xs flex items-center justify-center">
          {activeBrick.icon}
        </div>
      </div>

      {/* ── 6. 인터랙션 컨트롤 (자동 조립 / 다음 블록 / 리셋) ── */}
      <div className="flex items-center justify-between gap-2 pt-0.5">
        <div className="flex items-center gap-1.5">
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
            className="px-3.5 py-2 rounded-xl bg-[#3182f6] hover:bg-[#1b64da] text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1 active:scale-95"
          >
            <Play size={13} weight="fill" />
            <span>{isPlaying ? '일시 정지' : '▶ 자동 조립'}</span>
          </button>
          <button
            onClick={handleNext}
            className="px-3 py-2 rounded-xl bg-[#f2f4f6] hover:bg-[#e5e8eb] text-[#191f28] text-xs font-bold transition-all border border-black/[0.04] flex items-center gap-1 active:scale-95"
          >
            <Plus size={13} weight="bold" />
            <span>+ 블록 쌓기</span>
          </button>
        </div>

        <button
          onClick={handleReset}
          className="p-2 rounded-xl text-[#8b95a1] hover:text-[#191f28] hover:bg-gray-100 transition-colors text-xs flex items-center gap-1"
          title="처음부터 다시 조립"
        >
          <ArrowCounterClockwise size={14} />
          <span className="hidden sm:inline">다시 조립</span>
        </button>
      </div>
    </div>
  );
}
