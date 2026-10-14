'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Play, ArrowCounterClockwise, Plus, SpeakerHigh, SpeakerSlash, Cube } from '@phosphor-icons/react';

interface LegoBrick {
  id: number;
  name: string;
  desc: string;
  stageName: string;
  tier: 'DUPLO' | 'CLASSIC' | 'TECHNIC';
  tag: string;
  badge: string;
  bgTop: string;
  bgFront: string;
  bgRight: string;
  studColor: string;
  badgeClass: string;
  isGoldBlock?: boolean;
  width: number;
  x: number;
  y: number;
  studs: number;
  icon: string;
}

const BRICKS: LegoBrick[] = [
  // ── [1. DUPLO 기초: 나를 위한 작은 문제 발견 & AI 일꾼] ──
  {
    id: 1,
    name: '01. [DUPLO] 내 불편함에서 시작하는 첫 AI 블록',
    desc: '거창한 사업계획서 대신 "내가 매일 겪는 귀찮은 일"을 해결할 작은 AI 스킬(.skills)과 자동화 블록 하나를 먼저 끼웁니다.',
    stageName: 'DUPLO · 입문 조립',
    tier: 'DUPLO',
    tag: 'DUPLO 01',
    badge: '내 도구 조립',
    bgTop: 'bg-emerald-500',
    bgFront: 'bg-emerald-600',
    bgRight: 'bg-emerald-700',
    studColor: 'bg-emerald-400 border-emerald-300',
    badgeClass: 'badge-duplo',
    width: 200,
    x: 0,
    y: 70,
    studs: 6,
    icon: '🧱'
  },

  // ── [2. DUPLO 확장: 외주비 0원 나만의 미니 프로덕트 완성] ──
  {
    id: 2,
    name: '02. [DUPLO→CLASSIC] 나를 위한 도구를 프로덕트로 포장',
    desc: '내가 쓰려고 만든 도구에 Cursor + Supabase로 깔끔한 화면과 결제창을 달아 누군가도 쓸 수 있는 웹 프로덕트로 조립합니다.',
    stageName: 'CLASSIC · 프로덕트화',
    tier: 'CLASSIC',
    tag: 'CLASSIC 02',
    badge: '프로덕트 포장',
    bgTop: 'bg-cyan-500',
    bgFront: 'bg-cyan-600',
    bgRight: 'bg-cyan-700',
    studColor: 'bg-cyan-400 border-cyan-300',
    badgeClass: 'badge-classic',
    width: 172,
    x: -10,
    y: 35,
    studs: 5,
    icon: '⚡'
  },

  // ── [3. CLASSIC 핵심: 스레드 500만 뷰 알고리즘 엔진] ──
  {
    id: 3,
    name: '03. [CLASSIC 주력] 스레드 500만 뷰 진성 트래픽 엔진',
    desc: '만들기만 해선 0원입니다. 허수 조회수를 걷어내고 진짜 내 제품을 필요로 하는 타겟 고객을 모으는 스레드 알고리즘 블록을 장착합니다.',
    stageName: 'CLASSIC · 스레드 트래픽',
    tier: 'CLASSIC',
    tag: 'THREADS 5M',
    badge: '스레드 수익화',
    bgTop: 'bg-blue-500',
    bgFront: 'bg-blue-600',
    bgRight: 'bg-blue-700',
    studColor: 'bg-blue-400 border-blue-300',
    badgeClass: 'badge-classic',
    width: 145,
    x: 8,
    y: 0,
    studs: 4,
    icon: '🔥'
  },

  // ── [4. CLASSIC 피니시: 메타 광고 CVR 8.6% 고전환 퍼널] ──
  {
    id: 4,
    name: '04. [CLASSIC 주력] 메타 광고 CVR 8.6% 1:1 결제 퍼널',
    desc: '광고 첫 문장과 랜딩 첫 화면을 1:1로 맞물리게 설계해, 유입된 트래픽을 누수 없이 실제 카드 결제로 전환시킵니다.',
    stageName: 'CLASSIC · 메타 고전환',
    tier: 'CLASSIC',
    tag: 'META CVR 8.6%',
    badge: '메타 고전환',
    bgTop: 'bg-indigo-500',
    bgFront: 'bg-indigo-600',
    bgRight: 'bg-indigo-700',
    studColor: 'bg-indigo-400 border-indigo-300',
    badgeClass: 'badge-classic',
    width: 120,
    x: -12,
    y: -35,
    studs: 3,
    icon: '🎯'
  },

  // ── [5. TECHNIC 마스터리: 월 $42 멀티 프로덕트 & 1:1 의사결정] ──
  {
    id: 5,
    name: '05. [TECHNIC] 정밀 자동화 기어 & 솔로프리너 독립 완성',
    desc: '레고 테크닉의 기어처럼 4개 상용 서비스가 월 $42 인프라 위에서 맞물려 돌아가며 지속 가능한 1인 스튜디오 현금흐름을 완성합니다.',
    stageName: 'TECHNIC · 마스터리',
    tier: 'TECHNIC',
    tag: 'TECHNIC PRO',
    badge: '테크닉 완성',
    bgTop: 'bg-amber-400',
    bgFront: 'bg-amber-500',
    bgRight: 'bg-amber-600',
    studColor: 'bg-amber-300 border-amber-200',
    badgeClass: 'badge-technic',
    isGoldBlock: true,
    width: 96,
    x: 0,
    y: -70,
    studs: 2,
    icon: '⚙️'
  }
];

interface LegoStackSimulatorProps {
  externalStep?: number | null;
}

export default function LegoStackSimulator({ externalStep }: LegoStackSimulatorProps) {
  const [visibleCount, setVisibleCount] = useState<number>(3);
  const [selectedStep, setSelectedStep] = useState<number>(2);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const playClickSound = (pitchIndex: number) => {
    if (!soundEnabled || typeof window === 'undefined') return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      const baseFreq = 260 + pitchIndex * 65;
      osc.frequency.setValueAtTime(baseFreq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.4, ctx.currentTime + 0.06);

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.07);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.075);
    } catch {
      // Ignore audio errors
    }
  };

  useEffect(() => {
    if (externalStep && externalStep >= 1 && externalStep <= BRICKS.length) {
      setVisibleCount(externalStep);
      setSelectedStep(externalStep - 1);
      setIsPlaying(false);
    }
  }, [externalStep]);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= BRICKS.length) {
          setIsPlaying(false);
          return BRICKS.length;
        }
        const nextVal = prev + 1;
        setSelectedStep(nextVal - 1);
        playClickSound(nextVal);
        return nextVal;
      });
    }, 950);
    return () => clearInterval(timer);
  }, [isPlaying, soundEnabled]);

  const handleNext = () => {
    setIsPlaying(false);
    if (visibleCount < BRICKS.length) {
      const next = visibleCount + 1;
      setVisibleCount(next);
      setSelectedStep(next - 1);
      playClickSound(next);
    } else {
      setVisibleCount(1);
      setSelectedStep(0);
      playClickSound(1);
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    setVisibleCount(1);
    setSelectedStep(0);
    playClickSound(1);
  };

  const activeBrick = BRICKS[selectedStep] || BRICKS[0];

  return (
    <div className="technic-card rounded-3xl p-5 sm:p-6 space-y-4 text-left border border-white/[0.09] shadow-2xl">
      {/* ── 1. 상단 컨트롤 헤더 ── */}
      <div className="flex items-center justify-between gap-2 border-b border-white/[0.07] pb-3.5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-400 flex items-center justify-center">
            <Cube size={18} weight="fill" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-black text-white">DUPLO → TECHNIC 3D 조립기</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full badge-technic">
                INTERACTIVE
              </span>
            </div>
            <p className="text-[11px] text-gray-400">
              블록을 직접 쌓으며 나를 위한 도구가 수익화되는 5단계를 확인하세요
            </p>
          </div>
        </div>

        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-gray-300 transition-colors"
          title={soundEnabled ? '조립 효과음 켜짐' : '조립 효과음 꺼짐'}
        >
          {soundEnabled ? <SpeakerHigh size={15} weight="bold" className="text-amber-400" /> : <SpeakerSlash size={15} />}
        </button>
      </div>

      {/* ── 2. 3D 아이소메트릭 레고 조립 뷰포트 ── */}
      <div className="relative h-[250px] sm:h-[270px] rounded-2xl bg-gradient-to-b from-[#0B101E] to-[#111A2E] border border-white/[0.08] overflow-hidden flex items-center justify-center select-none">
        {/* Blueprint Grid Background */}
        <div className="absolute inset-0 grid-track-bg opacity-45 pointer-events-none" />
        <div className="absolute w-52 h-52 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

        {/* 3D Stack Container */}
        <div
          className="relative w-full h-full"
          style={{
            perspective: '900px',
            transformStyle: 'preserve-3d',
          }}
        >
          {BRICKS.slice(0, visibleCount).map((b, idx) => {
            const isSelected = selectedStep === idx;
            const isLatest = idx === visibleCount - 1;
            const studSize = 14;
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
                {/* 상단면 (스터드 돌기) */}
                <div
                  className={`absolute ${b.bgTop} rounded-[3px] flex items-center justify-around border-t border-l border-white/50 shadow-inner`}
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
                        className={`absolute rounded-full ${b.studColor} shadow-xs border`}
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
                  className={`absolute ${b.bgFront} rounded-[3px] flex items-center justify-between px-2.5 text-[9px] font-black border-t shadow-lg ${
                    b.isGoldBlock
                      ? 'text-[#070B14] border-amber-200'
                      : 'text-white border-white/40'
                  } ${
                    isSelected ? 'ring-2 ring-amber-400 ring-offset-2 ring-offset-[#0B101E]' : ''
                  }`}
                  style={{
                    width: `${b.width}px`,
                    height: '32px',
                    transform: 'translateZ(23px)',
                  }}
                >
                  <span className="font-mono">0{b.id}</span>
                  <span className="truncate text-[8.5px] opacity-95 tracking-wide font-mono">
                    {b.tag}
                  </span>
                </div>

                {/* 우측면 */}
                <div
                  className={`absolute ${b.bgRight} rounded-[3px] border-t border-white/20`}
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

        {/* 좌상단 조립 진행도 뱃지 */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#070B14]/90 backdrop-blur-md border border-white/[0.12] text-[10px] font-mono font-bold text-gray-200 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span>BRICK {visibleCount} / {BRICKS.length}</span>
        </div>

        {/* 우상단 현재 등급 표시 */}
        <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-mono font-black ${activeBrick.badgeClass}`}>
          {activeBrick.tier} STAGE
        </div>
      </div>

      {/* ── 3. 블록별 탭 선택기 (01 ~ 05) ── */}
      <div className="grid grid-cols-5 gap-1.5">
        {BRICKS.map((b, idx) => {
          const isSelected = selectedStep === idx;
          const isBuilt = idx < visibleCount;
          return (
            <button
              key={b.id}
              type="button"
              onClick={() => {
                setSelectedStep(idx);
                if (idx >= visibleCount) {
                  setVisibleCount(idx + 1);
                }
                playClickSound(idx + 1);
              }}
              className={`py-2 px-1 rounded-xl text-center transition-all border ${
                isSelected
                  ? 'bg-amber-400 text-[#070B14] border-amber-300 shadow-md scale-[1.02]'
                  : isBuilt
                  ? 'bg-white/[0.06] hover:bg-white/[0.1] text-gray-200 border-white/[0.1]'
                  : 'bg-white/[0.02] text-gray-500 border-dashed border-white/[0.08] opacity-60'
              }`}
            >
              <div className="text-[9px] font-mono font-black">0{b.id}</div>
              <div className="text-[10px] font-extrabold truncate hidden sm:block mt-0.5">
                {b.badge}
              </div>
            </button>
          );
        })}
      </div>

      {/* ── 4. 선택된 블록 설명 카드 ── */}
      <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-between gap-3">
        <div className="space-y-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <span className={`text-[9px] font-mono font-black px-2 py-0.5 rounded-full uppercase ${activeBrick.badgeClass}`}>
              {activeBrick.stageName}
            </span>
          </div>
          <div className="text-xs sm:text-sm font-black text-white truncate">
            {activeBrick.name}
          </div>
          <p className="text-[11px] sm:text-xs text-gray-300 leading-relaxed">
            {activeBrick.desc}
          </p>
        </div>
        <div className="text-xl shrink-0 w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center">
          {activeBrick.icon}
        </div>
      </div>

      {/* ── 5. 조립 액션 컨트롤 ── */}
      <div className="flex items-center justify-between gap-2 pt-0.5">
        <div className="flex items-center gap-2">
          <button
            type="button"
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
            className="px-4 py-2 rounded-xl btn-technic-gold text-xs font-black transition-all flex items-center gap-1.5 active:scale-95"
          >
            <Play size={13} weight="fill" />
            <span>{isPlaying ? '일시 정지' : '자동 조립 재생'}</span>
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="px-3.5 py-2 rounded-xl bg-white/[0.07] hover:bg-white/[0.13] text-white text-xs font-bold transition-all border border-white/[0.1] flex items-center gap-1 active:scale-95"
          >
            <Plus size={13} weight="bold" />
            <span>블록 1개 더 쌓기</span>
          </button>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/[0.06] transition-colors text-xs flex items-center gap-1"
          title="처음부터 다시 조립"
        >
          <ArrowCounterClockwise size={14} />
          <span className="hidden sm:inline">초기화</span>
        </button>
      </div>
    </div>
  );
}
