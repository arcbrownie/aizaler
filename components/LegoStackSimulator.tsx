'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Play, ArrowCounterClockwise, Plus, SpeakerHigh, SpeakerSlash, Eye, Cube } from '@phosphor-icons/react';

interface LegoBrick {
  id: number;
  name: string;
  desc: string;
  tag: string;
  badge: string;
  // 3D CSS Colors (Mature Architectural Palette)
  bgTop: string;
  bgFront: string;
  bgRight: string;
  studColor: string;
  width: number;
  x: number;
  y: number;
  studs: number;
  icon: string;
  // Hotspot coords on Studio Render (%)
  pinLeft: string;
  pinTop: string;
  accentColor: string;
}

const BRICKS: LegoBrick[] = [
  {
    id: 1,
    name: '01. 시장 검증 & 비즈니스 기획',
    desc: '무작정 코딩부터 하지 않습니다. 고객의 결핍과 현금 흐름 모델을 흑연 슬레이트 기저석으로 단단히 다집니다.',
    tag: 'FOUNDATION',
    badge: '기저석',
    bgTop: 'bg-[#334155]',
    bgFront: 'bg-[#1e293b]',
    bgRight: 'bg-[#0f172a]',
    studColor: 'bg-[#475569] border-[#334155]',
    width: 220,
    x: 0,
    y: 80,
    studs: 6,
    icon: '📐',
    pinLeft: '22%',
    pinTop: '70%',
    accentColor: '#1e293b'
  },
  {
    id: 2,
    name: '02. 클린 인프라 & 보일러플레이트',
    desc: '외주 개발사에 수천만 원 쓰지 않고, 검증된 세라믹 화이트 구조 블록(Cursor + Supabase)을 안정적으로 안착시킵니다.',
    tag: 'STRUCTURE',
    badge: '구조 설계',
    bgTop: 'bg-[#f8fafc]',
    bgFront: 'bg-[#e2e8f0]',
    bgRight: 'bg-[#cbd5e1]',
    studColor: 'bg-[#ffffff] border-[#cbd5e1]',
    width: 190,
    x: -15,
    y: 38,
    studs: 5,
    icon: '🏛️',
    pinLeft: '52%',
    pinTop: '68%',
    accentColor: '#64748b'
  },
  {
    id: 3,
    name: '03. Claude Academy 정본 지능',
    desc: '인스타 카더라 대신 실리콘밸리 본사의 XML 구조화 프롬프트 앰버 골드 블록으로 AI 뇌관을 장착합니다.',
    tag: 'INTELLIGENCE',
    badge: '지능 핵',
    bgTop: 'bg-[#f59e0b]',
    bgFront: 'bg-[#d97706]',
    bgRight: 'bg-[#b45309]',
    studColor: 'bg-[#fbbf24] border-[#f59e0b]',
    width: 160,
    x: 10,
    y: -4,
    studs: 4,
    icon: '⚡',
    pinLeft: '28%',
    pinTop: '56%',
    accentColor: '#d97706'
  },
  {
    id: 4,
    name: '04. Aside 브라우저 & 자율 전환 퍼널',
    desc: '24시간 시장 리서치와 광고 클릭을 이탈 없이 구매로 연결하는 토스 블루 시그니처 블록을 결합합니다.',
    tag: 'AUTONOMOUS',
    badge: '토스 블루',
    bgTop: 'bg-[#3b82f6]',
    bgFront: 'bg-[#2563eb]',
    bgRight: 'bg-[#1d4ed8]',
    studColor: 'bg-[#60a5fa] border-[#3b82f6]',
    width: 130,
    x: -20,
    y: -46,
    studs: 3,
    icon: '🌐',
    pinLeft: '62%',
    pinTop: '52%',
    accentColor: '#2563eb'
  },
  {
    id: 5,
    name: '05. 1인 결제 상용 프로덕트 런칭',
    desc: '단 하나의 조각도 낭비 없이 완벽하게 결합된 나만의 라이브 웹서비스. 자생적 현금 흐름을 여는 골드 크라운!',
    tag: 'LAUNCH',
    badge: '서밋 크라운',
    bgTop: 'bg-[#1e293b]',
    bgFront: 'bg-[#0f172a]',
    bgRight: 'bg-[#020617]',
    studColor: 'bg-[#f59e0b] border-[#d97706]',
    width: 90,
    x: -5,
    y: -88,
    studs: 2,
    icon: '👑',
    pinLeft: '48%',
    pinTop: '32%',
    accentColor: '#f59e0b'
  }
];

export default function LegoStackSimulator() {
  const [viewMode, setViewMode] = useState<'studio' | '3d'>('studio');
  const [visibleCount, setVisibleCount] = useState<number>(5);
  const [selectedStep, setSelectedStep] = useState<number>(4); // index 0..4 (defaults to step 5: Launch)
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
      const freq = 440 + step * 85;
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, audioCtxRef.current.currentTime);
      osc.frequency.exponentialRampToValueAtTime(140, audioCtxRef.current.currentTime + 0.07);

      gain.gain.setValueAtTime(0.2, audioCtxRef.current.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtxRef.current.currentTime + 0.07);

      osc.connect(gain);
      gain.connect(audioCtxRef.current.destination);
      osc.start();
      osc.stop(audioCtxRef.current.currentTime + 0.07);
    } catch {
      // Audio context may be restricted before interaction
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setTimeout(() => {
        if (viewMode === '3d') {
          if (visibleCount < BRICKS.length) {
            setVisibleCount((prev) => {
              const next = prev + 1;
              setSelectedStep(next - 1);
              playClickSound(next);
              return next;
            });
          } else {
            setIsPlaying(false);
          }
        } else {
          // In studio mode, cycle through hotspots
          setSelectedStep((prev) => {
            const next = (prev + 1) % BRICKS.length;
            playClickSound(next + 1);
            if (next === BRICKS.length - 1) {
              setIsPlaying(false);
            }
            return next;
          });
        }
      }, 950);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, visibleCount, viewMode]);

  const handleNext = () => {
    setIsPlaying(false);
    if (viewMode === '3d') {
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
    } else {
      const next = (selectedStep + 1) % BRICKS.length;
      setSelectedStep(next);
      playClickSound(next + 1);
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    if (viewMode === '3d') {
      setVisibleCount(1);
      setSelectedStep(0);
    } else {
      setSelectedStep(0);
    }
  };

  const activeBrick = BRICKS[selectedStep];

  return (
    <div className="rounded-3xl bg-white text-[#191f28] p-6 sm:p-7 border border-black/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.06)] space-y-5">
      {/* ── Header: Reference Typography & View Controls ── */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-3xl sm:text-4xl font-black text-[#191f28] tracking-tight leading-none">
            programming
          </h3>
          <div className="text-[11px] sm:text-xs font-mono font-bold text-[#8b95a1] uppercase tracking-[0.18em] mt-1.5">
            IS LIKE BUILDING LEGO BLOCKS...
          </div>
        </div>

        {/* View Mode & Sound Switcher */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center bg-[#f2f4f6] p-1 rounded-xl text-xs font-bold text-[#4e5968]">
            <button
              onClick={() => {
                setViewMode('studio');
                setIsPlaying(false);
              }}
              className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 ${
                viewMode === 'studio'
                  ? 'bg-white text-[#3182f6] shadow-xs'
                  : 'hover:text-[#191f28]'
              }`}
              title="8K 스튜디오 뷰"
            >
              <Eye size={14} weight="bold" />
              <span className="hidden sm:inline">스튜디오</span>
            </button>
            <button
              onClick={() => {
                setViewMode('3d');
                setIsPlaying(false);
              }}
              className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 ${
                viewMode === '3d'
                  ? 'bg-white text-[#3182f6] shadow-xs'
                  : 'hover:text-[#191f28]'
              }`}
              title="3D 조립 시뮬레이터"
            >
              <Cube size={14} weight="bold" />
              <span className="hidden sm:inline">3D 조립</span>
            </button>
          </div>

          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-2 rounded-xl bg-[#f2f4f6] hover:bg-gray-200 text-[#8b95a1] hover:text-[#191f28] transition-colors"
            title={soundEnabled ? '효과음 끄기' : '효과음 켜기'}
          >
            {soundEnabled ? <SpeakerHigh size={16} /> : <SpeakerSlash size={16} />}
          </button>
        </div>
      </div>

      {/* ── Main Stage Area (Studio Photo Hotspot vs CSS 3D Stage) ── */}
      <div className="relative w-full h-[280px] sm:h-[300px] flex items-center justify-center overflow-hidden rounded-2xl bg-[#fbfcfd] border border-black/[0.06]">
        {viewMode === 'studio' ? (
          /* Studio High-End 3D Render with Interactive Hotspots */
          <div className="relative w-full h-full flex items-center justify-center p-2">
            <div className="relative w-full h-full max-w-[340px] max-h-[280px]">
              <Image
                src="/assets/lego-designer-studio.jpg"
                alt="Architectural Lego Builder Studio"
                fill
                className="object-contain drop-shadow-sm select-none"
                priority
              />

              {/* Interactive Hotspot Pins */}
              {BRICKS.map((b, idx) => {
                const isSelected = selectedStep === idx;
                return (
                  <button
                    key={b.id}
                    onClick={() => {
                      setSelectedStep(idx);
                      playClickSound(idx + 1);
                    }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group z-10`}
                    style={{ left: b.pinLeft, top: b.pinTop }}
                  >
                    <span className="relative flex items-center justify-center">
                      {/* Pulsing ring for active */}
                      {isSelected && (
                        <span
                          className="absolute w-8 h-8 rounded-full animate-ping opacity-60"
                          style={{ backgroundColor: b.accentColor }}
                        />
                      )}
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black shadow-md border-2 transition-transform ${
                          isSelected
                            ? 'scale-125 text-white border-white'
                            : 'text-white/90 border-white/80 hover:scale-110'
                        }`}
                        style={{ backgroundColor: b.accentColor }}
                      >
                        {b.id}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Hint Badge */}
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-black/[0.06] text-[10px] font-bold text-[#4e5968] shadow-xs flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3182f6] animate-pulse" />
              <span>각 블록의 번호 핀을 눌러보세요</span>
            </div>
          </div>
        ) : (
          /* Interactive CSS 3D Isometric Drop Stage */
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            {/* Studio Floor Radial Shadow */}
            <div
              className="absolute w-[240px] h-[120px] rounded-full opacity-20 blur-md pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse, #1e293b 0%, transparent 70%)',
                transform: 'translateY(80px)',
              }}
            />

            {/* 3D Scene */}
            <div
              className="relative w-[240px] h-[180px] flex items-center justify-center"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'rotateX(24deg) rotateY(-28deg)',
              }}
            >
              {/* Stacking Bricks */}
              {BRICKS.slice(0, visibleCount).map((b, idx) => {
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
                      height: '36px',
                      left: `calc(50% + ${b.x}px - ${b.width / 2}px)`,
                      top: `calc(50% + ${b.y}px - 18px)`,
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {/* Top Face with studs */}
                    <div
                      className={`absolute ${b.bgTop} rounded-[3px] flex items-center justify-around border-t border-l border-white/30 shadow-inner`}
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
                            className={`absolute rounded-full ${b.studColor} shadow-sm border`}
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

                    {/* Front Face */}
                    <div
                      className={`absolute ${b.bgFront} rounded-[3px] flex items-center justify-between px-3 text-[10px] font-black text-white/90 border-t border-white/20 shadow-md`}
                      style={{
                        width: `${b.width}px`,
                        height: '36px',
                        transform: 'translateZ(26px)',
                      }}
                    >
                      <span className="font-mono">#{b.id}</span>
                      <span className="truncate text-[9px] opacity-90">{b.tag}</span>
                    </div>

                    {/* Right Face (Side Shading) */}
                    <div
                      className={`absolute ${b.bgRight} rounded-[3px] border-t border-white/10`}
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

            {/* Live Progress Tag */}
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-black/[0.06] text-[11px] font-mono text-[#4e5968] shadow-xs flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>조립 단계 {visibleCount} / {BRICKS.length}</span>
            </div>
          </div>
        )}
      </div>

      {/* ── Step Selector Pills (01 ~ 05) ── */}
      <div className="grid grid-cols-5 gap-1.5">
        {BRICKS.map((b, idx) => {
          const isSelected = selectedStep === idx;
          return (
            <button
              key={b.id}
              onClick={() => {
                setSelectedStep(idx);
                if (viewMode === '3d') {
                  setVisibleCount(Math.max(visibleCount, idx + 1));
                }
                playClickSound(idx + 1);
              }}
              className={`py-2 px-1 rounded-xl text-center transition-all border ${
                isSelected
                  ? 'bg-[#191f28] text-white border-[#191f28] shadow-xs scale-[1.02]'
                  : 'bg-[#f9fafb] hover:bg-gray-100 text-[#8b95a1] border-black/[0.04]'
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

      {/* ── Active Step Description Card (Toss Card Architecture) ── */}
      <div className="p-4 rounded-2xl bg-[#f9fafb] border border-black/[0.05] flex items-center justify-between gap-4 transition-all">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span
              className="text-[10px] font-black px-2 py-0.5 rounded-full text-white uppercase tracking-wider"
              style={{ backgroundColor: activeBrick.accentColor }}
            >
              STEP 0{activeBrick.id} · {activeBrick.tag}
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

      {/* ── Controls (Auto Play / Step Next / Reset) ── */}
      <div className="flex items-center justify-between gap-3 pt-1">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="px-4 py-2.5 rounded-xl bg-[#3182f6] hover:bg-[#1b64da] text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 active:scale-95"
          >
            <Play size={14} weight="fill" />
            <span>{isPlaying ? '일시 정지' : '▶ 순서대로 보기'}</span>
          </button>
          <button
            onClick={handleNext}
            className="px-3.5 py-2.5 rounded-xl bg-[#f2f4f6] hover:bg-[#e5e8eb] text-[#191f28] text-xs font-bold transition-all border border-black/[0.04] flex items-center gap-1 active:scale-95"
          >
            <Plus size={14} weight="bold" />
            <span>다음 블록</span>
          </button>
        </div>

        <button
          onClick={handleReset}
          className="p-2 rounded-xl text-[#8b95a1] hover:text-[#191f28] hover:bg-gray-100 transition-colors text-xs flex items-center gap-1"
          title="처음으로"
        >
          <ArrowCounterClockwise size={15} />
          <span className="hidden sm:inline">처음으로</span>
        </button>
      </div>
    </div>
  );
}
