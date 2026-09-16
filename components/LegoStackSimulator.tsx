'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Play, ArrowCounterClockwise, Sparkle, Plus, SpeakerHigh, SpeakerSlash } from '@phosphor-icons/react';

interface LegoBrick {
  id: number;
  name: string;
  desc: string;
  tag: string;
  bgTop: string;
  bgFront: string;
  bgRight: string;
  studColor: string;
  textColor: string;
  width: number;
  x: number;
  y: number;
  studs: number;
  icon: string;
}

const BRICKS: LegoBrick[] = [
  {
    id: 1,
    name: '01. 아이디어 & 시장 기획',
    desc: '검증 안 된 코딩 대신, 고객의 결핍과 비즈니스 모델을 먼저 조립합니다.',
    tag: 'FOUNDATION',
    bgTop: 'bg-blue-600',
    bgFront: 'bg-blue-700',
    bgRight: 'bg-blue-800',
    studColor: 'bg-blue-500 border-blue-600',
    textColor: 'text-blue-200',
    width: 220,
    x: 0,
    y: 80,
    studs: 6,
    icon: '💡'
  },
  {
    id: 2,
    name: '02. Claude Academy 정본 프롬프트',
    desc: '인스타 카더라 대신 실리콘밸리 본사의 XML 구조화 프롬프트를 얹습니다.',
    tag: 'INTELLIGENCE',
    bgTop: 'bg-amber-500',
    bgFront: 'bg-amber-600',
    bgRight: 'bg-amber-700',
    studColor: 'bg-amber-400 border-amber-500',
    textColor: 'text-amber-100',
    width: 190,
    x: -15,
    y: 38,
    studs: 5,
    icon: '📜'
  },
  {
    id: 3,
    name: '03. Aside 브라우저 자율 리서치',
    desc: '탭 50개 지옥 탈출: 24시간 인터넷을 돌아다니며 시장을 자동 감시합니다.',
    tag: 'AUTOMATION',
    bgTop: 'bg-emerald-600',
    bgFront: 'bg-emerald-700',
    bgRight: 'bg-emerald-800',
    studColor: 'bg-emerald-500 border-emerald-600',
    textColor: 'text-emerald-100',
    width: 160,
    x: 10,
    y: -4,
    studs: 4,
    icon: '🌐'
  },
  {
    id: 4,
    name: '04. 메타 고전환 퍼널 매칭',
    desc: '광고 클릭을 이탈 없이 구매로 연결하는 1:1 메시지 퍼널을 결합합니다.',
    tag: 'CONVERSION',
    bgTop: 'bg-rose-600',
    bgFront: 'bg-rose-700',
    bgRight: 'bg-rose-800',
    studColor: 'bg-rose-500 border-rose-600',
    textColor: 'text-rose-100',
    width: 130,
    x: -20,
    y: -46,
    studs: 3,
    icon: '🎯'
  },
  {
    id: 5,
    name: '05. 1인 결제 프로덕트 완성!',
    desc: '외주비 0원으로 내 손으로 띄운 실제 돈 버는 라이브 웹서비스 런칭!',
    tag: 'LAUNCH',
    bgTop: 'bg-purple-600',
    bgFront: 'bg-purple-700',
    bgRight: 'bg-purple-800',
    studColor: 'bg-purple-500 border-purple-600',
    textColor: 'text-purple-100',
    width: 90,
    x: -5,
    y: -88,
    studs: 2,
    icon: '👑'
  }
];

export default function LegoStackSimulator() {
  const [visibleCount, setVisibleCount] = useState<number>(1);
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
      const freq = 420 + step * 100;
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, audioCtxRef.current.currentTime);
      osc.frequency.exponentialRampToValueAtTime(160, audioCtxRef.current.currentTime + 0.08);

      gain.gain.setValueAtTime(0.25, audioCtxRef.current.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtxRef.current.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(audioCtxRef.current.destination);
      osc.start();
      osc.stop(audioCtxRef.current.currentTime + 0.08);
    } catch {
      // Audio context may be restricted before user gesture
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      if (visibleCount < BRICKS.length) {
        timer = setTimeout(() => {
          setVisibleCount((prev) => {
            const next = prev + 1;
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
      playClickSound(1);
    } else {
      const next = visibleCount + 1;
      setVisibleCount(next);
      playClickSound(next);
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    setVisibleCount(1);
  };

  const activeBrick = BRICKS[Math.min(visibleCount - 1, BRICKS.length - 1)];

  return (
    <div className="rounded-3xl bg-[#0b1120] text-white p-6 sm:p-8 border border-white/10 shadow-2xl space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#3182f6] animate-ping" />
          <span className="text-xs font-black tracking-wider text-blue-400 uppercase">
            3D LEGO BUILDER SIMULATOR
          </span>
        </div>
        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors text-xs flex items-center gap-1"
          title="사운드 켜기/끄기"
        >
          {soundEnabled ? <SpeakerHigh size={16} /> : <SpeakerSlash size={16} />}
          <span className="text-[10px] hidden sm:inline">{soundEnabled ? '소리 ON' : '소리 OFF'}</span>
        </button>
      </div>

      <div>
        <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
          programming <span className="text-xs sm:text-sm font-mono text-gray-400 font-normal block sm:inline">IS LIKE BUILDING LEGO BLOCKS...</span>
        </h3>
        <p className="text-xs text-gray-400 mt-1">
          복잡한 코딩을 외우지 마세요. 검증된 블록을 딱딱 끼워 맞춰 내 제품을 완성합니다.
        </p>
      </div>

      {/* 3D Isometric View Stage */}
      <div className="relative w-full h-[240px] flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-[#070b14] to-[#0f172a] border border-white/10">
        {/* Subtle grid lines */}
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px] opacity-15" />

        {/* 3D Scene */}
        <div 
          className="relative w-[240px] h-[180px] flex items-center justify-center"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateX(24deg) rotateY(-28deg)',
          }}
        >
          {/* Ground Radial Shadow */}
          <div 
            className="absolute w-[240px] h-[140px] rounded-full opacity-40 blur-md pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse, #000000 0%, transparent 70%)',
              transform: 'rotateX(90deg) translateZ(-40px)',
            }}
          />

          {/* Stacking Bricks */}
          {BRICKS.slice(0, visibleCount).map((b, idx) => {
            const isLatest = idx === visibleCount - 1;
            const studSize = 14;
            const spacing = b.width / b.studs;

            return (
              <div
                key={b.id}
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
                {/* Top face with studs */}
                <div
                  className={`absolute ${b.bgTop} rounded-sm flex items-center justify-around shadow-inner`}
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
                        className={`absolute rounded-full ${b.studColor} shadow-md`}
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
                  className={`absolute ${b.bgFront} rounded-sm flex items-center justify-between px-3 text-[10px] font-black text-white/90 border-t border-white/20`}
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
                  className={`absolute ${b.bgRight} rounded-sm border-t border-white/10`}
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
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-gray-300 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>조립 단계 {visibleCount} / {BRICKS.length}</span>
        </div>
      </div>

      {/* Active Step Description Card */}
      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="text-[10px] font-bold uppercase tracking-wider text-blue-400">
            {activeBrick.tag} · STEP 0{activeBrick.id}
          </div>
          <div className="text-sm font-black text-white">
            {activeBrick.name}
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            {activeBrick.desc}
          </p>
        </div>
        <div className="text-2xl shrink-0 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
          {activeBrick.icon}
        </div>
      </div>

      {/* Interactive Controls */}
      <div className="flex items-center justify-between gap-3 pt-1">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="px-4 py-2.5 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs font-bold transition-all shadow-md flex items-center gap-1.5 active:scale-95"
          >
            <Play size={14} weight="fill" />
            <span>{isPlaying ? '일시 정지' : '▶ 자동 조립 보기'}</span>
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all border border-white/10 flex items-center gap-1.5 active:scale-95"
          >
            <Plus size={14} weight="bold" />
            <span>블록 하나 더 쌓기</span>
          </button>
        </div>

        <button
          onClick={handleReset}
          className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors text-xs flex items-center gap-1"
          title="처음부터 다시 조립"
        >
          <ArrowCounterClockwise size={15} />
          <span className="hidden sm:inline">다시 조립</span>
        </button>
      </div>
    </div>
  );
}
