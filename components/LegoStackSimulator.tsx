'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Play, ArrowCounterClockwise, Plus, SpeakerHigh, SpeakerSlash, Sparkle, TrendUp, RocketLaunch } from '@phosphor-icons/react';

interface LegoBrick {
  id: number;
  name: string;
  desc: string;
  stageName: string;
  stageIcon: React.ElementType;
  tag: string;
  badge: string;
  // 3-Phase Vibrant Growth Colors (Blue -> Green -> Gold)
  bgTop: string;
  bgFront: string;
  bgRight: string;
  studColor: string;
  themeColor: string;
  textColor: string;
  badgeBg: string;
  width: number;
  x: number;
  y: number;
  studs: number;
  icon: string;
}

const BRICKS: LegoBrick[] = [
  // ── [1단계: Blue 계열 - 기획 & 지능 (시작)] ──
  {
    id: 1,
    name: '01. 아이디어 & BM 기획',
    desc: '무작정 코딩부터 하지 않습니다. 고객의 결핍과 현금 흐름 모델을 탄탄한 블루 기초 블록으로 먼저 다집니다.',
    stageName: '기획 & 지능',
    stageIcon: Sparkle,
    tag: 'FOUNDATION',
    badge: 'BM 기획',
    bgTop: 'bg-[#38bdf8]',
    bgFront: 'bg-[#0284c7]',
    bgRight: 'bg-[#0369a1]',
    studColor: 'bg-[#7dd3fc] border-[#38bdf8]',
    themeColor: '#0284c7',
    textColor: 'text-sky-700',
    badgeBg: 'bg-sky-50 text-sky-700 border-sky-200',
    width: 220,
    x: 0,
    y: 80,
    studs: 6,
    icon: '💡'
  },
  {
    id: 2,
    name: '02. Claude Academy 정본 프롬프트',
    desc: '인스타 카더라 대신 실리콘밸리 본사의 XML 구조화 프롬프트를 토스 로얄 블루 블록으로 단단히 얹습니다.',
    stageName: '기획 & 지능',
    stageIcon: Sparkle,
    tag: 'INTELLIGENCE',
    badge: '정본 프롬프트',
    bgTop: 'bg-[#60a5fa]',
    bgFront: 'bg-[#2563eb]',
    bgRight: 'bg-[#1d4ed8]',
    studColor: 'bg-[#93c5fd] border-[#60a5fa]',
    themeColor: '#2563eb',
    textColor: 'text-blue-700',
    badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
    width: 190,
    x: -15,
    y: 38,
    studs: 5,
    icon: '⚡'
  },

  // ── [2단계: Green 계열 - 트래픽 & 자동화 (성장)] ──
  {
    id: 3,
    name: '03. Aside 브라우저 자율 리서치',
    desc: '탭 50개 지옥 탈출: 24시간 인터넷을 돌아다니며 시장을 자동 감시하는 싱그러운 민트 에이전트 결합!',
    stageName: '트래픽 & 성장',
    stageIcon: TrendUp,
    tag: 'AUTOMATION',
    badge: 'Aside 24h',
    bgTop: 'bg-[#34d399]',
    bgFront: 'bg-[#059669]',
    bgRight: 'bg-[#047857]',
    studColor: 'bg-[#6ee7b7] border-[#34d399]',
    themeColor: '#059669',
    textColor: 'text-emerald-700',
    badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    width: 160,
    x: 10,
    y: -4,
    studs: 4,
    icon: '🌐'
  },
  {
    id: 4,
    name: '04. 메타 고전환 퍼널 매칭',
    desc: '광고 클릭을 이탈 없이 구매로 직결시키는 고전환 메시지 퍼널을 에메랄드 블록으로 견고하게 결속합니다.',
    stageName: '트래픽 & 성장',
    stageIcon: TrendUp,
    tag: 'CONVERSION',
    badge: '고전환 퍼널',
    bgTop: 'bg-[#2dd4bf]',
    bgFront: 'bg-[#0d9488]',
    bgRight: 'bg-[#0f766e]',
    studColor: 'bg-[#5eead4] border-[#2dd4bf]',
    themeColor: '#0d9488',
    textColor: 'text-teal-700',
    badgeBg: 'bg-teal-50 text-teal-700 border-teal-200',
    width: 130,
    x: -20,
    y: -46,
    studs: 3,
    icon: '🎯'
  },

  // ── [3단계: Gold 계열 - 1인 프로덕트 런칭 (결실)] ──
  {
    id: 5,
    name: '05. 1인 결제 프로덕트 완성!',
    desc: '외주비 0원으로 내 손으로 직접 띄운 실제 돈 버는 웹서비스. 자생적 현금 흐름을 여는 눈부신 골드 크라운 👑',
    stageName: '상용 런칭 결실',
    stageIcon: RocketLaunch,
    tag: 'LAUNCH',
    badge: '서밋 런칭',
    bgTop: 'bg-[#fbbf24]',
    bgFront: 'bg-[#d97706]',
    bgRight: 'bg-[#b45309]',
    studColor: 'bg-[#fde68a] border-[#fbbf24]',
    themeColor: '#d97706',
    textColor: 'text-amber-700',
    badgeBg: 'bg-amber-50 text-amber-800 border-amber-300',
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
      // Ascending pleasant chord frequencies
      const notes = [261.63, 329.63, 392.00, 523.25, 659.25]; // C4, E4, G4, C5, E5
      const freq = notes[Math.min(step - 1, notes.length - 1)] || 440;
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq * 1.5, audioCtxRef.current.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq, audioCtxRef.current.currentTime + 0.08);

      gain.gain.setValueAtTime(0.18, audioCtxRef.current.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtxRef.current.currentTime + 0.09);

      osc.connect(gain);
      gain.connect(audioCtxRef.current.destination);
      osc.start();
      osc.stop(audioCtxRef.current.currentTime + 0.09);
    } catch {
      // Audio context restricted before user interaction
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
  const StageIcon = activeBrick.stageIcon;

  return (
    <div className="rounded-3xl bg-white text-[#191f28] p-6 sm:p-7 border border-black/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.06)] space-y-5">
      {/* ── 1. 헤더: 레퍼런스 타이포그래피 & 성장 3단계 배지 ── */}
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

      {/* ── 2. 3단계 성장 로드맵 인디케이터 (Blue ➔ Green ➔ Gold) ── */}
      <div className="grid grid-cols-3 gap-2 text-xs">
        <div className="p-2 rounded-xl bg-blue-50/70 border border-blue-200/60 flex items-center justify-center gap-1.5 font-bold text-[#2563eb]">
          <span className="w-2 h-2 rounded-full bg-[#2563eb]" />
          <span>1. 기획 & 지능</span>
        </div>
        <div className="p-2 rounded-xl bg-emerald-50/70 border border-emerald-200/60 flex items-center justify-center gap-1.5 font-bold text-[#059669]">
          <span className="w-2 h-2 rounded-full bg-[#059669]" />
          <span>2. 트래픽 & 성장</span>
        </div>
        <div className="p-2 rounded-xl bg-amber-50/70 border border-amber-200/60 flex items-center justify-center gap-1.5 font-bold text-[#d97706]">
          <span className="w-2 h-2 rounded-full bg-[#d97706]" />
          <span>3. 런칭 & 결실</span>
        </div>
      </div>

      {/* ── 3. 밝고 화사한 스튜디오 3D 조립 스테이지 ── */}
      <div className="relative w-full h-[270px] sm:h-[290px] flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-[#f8faff] via-[#f0f5ff] to-[#e8f0fe] border border-blue-100/60">
        {/* 부드러운 스튜디오 접지 그림자 */}
        <div
          className="absolute w-[260px] h-[130px] rounded-full opacity-35 blur-lg pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse, #3b82f6 0%, #64748b 40%, transparent 75%)',
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
          {/* 안정적인 인터로킹 레고 블록들 */}
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
                  className={`absolute ${b.bgTop} rounded-[4px] flex items-center justify-around border-t border-l border-white/60 shadow-inner`}
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
                        className={`absolute rounded-full ${b.studColor} shadow-xs border border-white/40`}
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
                  className={`absolute ${b.bgFront} rounded-[4px] flex items-center justify-between px-3 text-[10px] font-black text-white border-t border-white/40 shadow-lg ${
                    isSelected ? 'ring-2 ring-white ring-offset-2 ring-offset-[#3182f6]' : ''
                  }`}
                  style={{
                    width: `${b.width}px`,
                    height: '36px',
                    transform: 'translateZ(26px)',
                  }}
                >
                  <span className="font-mono">#{b.id}</span>
                  <span className="truncate text-[9px] opacity-95 tracking-wide">{b.tag}</span>
                </div>

                {/* 우측면 (입체 음영) */}
                <div
                  className={`absolute ${b.bgRight} rounded-[4px] border-t border-white/20`}
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
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-blue-200/60 text-[11px] font-bold text-[#191f28] shadow-xs flex items-center gap-1.5">
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

      {/* ── 5. 현재 선택된 성장 단계 상세 카드 ── */}
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

      {/* ── 6. 조립 인터랙션 컨트롤 (자동 조립 / 다음 블록 / 리셋) ── */}
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
