'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Sparkle, 
  ArrowRight, 
  CheckCircle, 
  CaretDown, 
  DownloadSimple,
  Crown,
  LightbulbFilament,
  Cpu,
  Target,
  RocketLaunch,
  ShieldCheck,
  TrendUp,
  Cube,
  Medal,
  Play
} from '@phosphor-icons/react';

import LegoStackSimulator from '@/components/LegoStackSimulator';
import BuilderConsultantChat from '@/components/BuilderConsultantChat';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState<number>(1);
  const [emailInput, setEmailInput] = useState('');
  const [isDownloaded, setIsDownloaded] = useState(false);

  // 1-Tap Quick Diagnostic Options (Apple Intelligence Style)
  const diagnosticPills = [
    {
      step: 1,
      label: '💡 아이디어 검증이 막막해요',
      short: '기획 & 리서치',
      icon: LightbulbFilament,
      tag: 'LEVEL 01 · FOUNDATION',
      color: '#2563eb',
      bgTag: 'bg-blue-50 text-blue-700 border-blue-200',
      title: '시장 검증 & Aside 24h 자율 리서치',
      summary: '코딩을 시작하기 전, 고객 결핍을 검증하고 Aside 브라우저로 시장 데이터를 자동 수집합니다.',
      outcome: 'Aside 24h 시장 감시 봇 & 검증된 BM 린 캔버스 1장',
      tools: 'Aside 브라우저 · 1인 창업 용어집 · 결핍 검증 체크리스트'
    },
    {
      step: 2,
      label: '⚡️ 프롬프트 복붙 대신 에이전트 스킬',
      short: 'Git 에이전트 스킬',
      icon: Cpu,
      tag: 'LEVEL 02 · AGENT SKILLS',
      color: '#7c3aed',
      bgTag: 'bg-purple-50 text-purple-700 border-purple-200',
      title: 'Git 오픈소스 에이전트 스킬 & MCP 자율 실행',
      summary: '지겨운 프롬프트 암기 대신, Git에 검증된 에이전트 스킬(.skills)을 연동해 AI가 자율 실행하게 만듭니다.',
      outcome: 'Git 오픈소스 에이전트 스킬셋(.skills) & 자율 실행 파이프라인',
      tools: 'Git .skills 규격 · MCP 프로토콜 · Claude Code & Cursor Rules'
    },
    {
      step: 3,
      label: '🚀 외주비 0원으로 상용 웹 배포',
      short: '1인 상용 웹 런칭',
      icon: RocketLaunch,
      tag: 'LEVEL 03 · LAUNCH',
      color: '#9333ea',
      bgTag: 'bg-purple-50 text-purple-700 border-purple-200',
      title: '외주비 0원 1인 상용 웹 프로덕트 런칭',
      summary: 'Cursor와 Supabase를 조립해 코딩 문법 외우지 않고 3일 만에 실제 결제창을 라이브 배포합니다.',
      outcome: '외주비 0원, 내 도메인으로 작동하는 실제 상용 웹서비스 1개 배포',
      tools: 'Cursor · Claude Code · Next.js 14 · Supabase · Cloudflare'
    },
    {
      step: 4,
      label: '🎯 트래픽과 첫 결제 만들기',
      short: '퍼널 & 첫 결제',
      icon: Target,
      tag: 'LEVEL 04 · CONVERSION',
      color: '#f04452',
      bgTag: 'bg-rose-50 text-rose-700 border-rose-200',
      title: '메타 고전환 퍼널 & 소셜 트래픽',
      summary: '스레드 500만 뷰 알고리즘과 카피 1:1 결속 퍼널로 클릭을 이탈 없는 유료 결제로 전환합니다.',
      outcome: '스레드 알고리즘 & CVR 8.6%+ 고전환 퍼널 & 첫 유료 결제',
      tools: '후킹 카피 프레임워크 · 메타 알고리즘 역설계 가이드'
    },
  ];

  const currentDiagnostic = diagnosticPills.find((p) => p.step === activeStep) || diagnosticPills[0];

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    setIsDownloaded(true);
  };

  const sprintWeeks = [
    {
      week: 'WEEK 01',
      title: '시장 검증 & Git 에이전트 스킬',
      highlight: '아이디어에서 AI 자율 실행 환경까지',
      desc: '고객 결핍 검증과 Aside 24h 자율 리서치로 시장성을 증명하고, Git 오픈소스 에이전트 스킬(.skills)을 장착해 AI가 스스로 일하게 만듭니다.',
      deliverables: [
        'Aside 24h 시장 감시 봇',
        '검증된 BM 린 캔버스 1장',
        'Git 에이전트 스킬(.skills) 환경'
      ],
      tag: 'LEVEL 01 + 02',
      accent: '#2563eb',
      bgAccent: 'from-blue-500/10 via-blue-500/5 to-transparent'
    },
    {
      week: 'WEEK 02',
      title: '외주비 0원 상용 웹 프로덕트 런칭',
      highlight: '내 손으로 띄우는 실제 결제 웹',
      desc: 'Cursor, Claude Code, Supabase, Cloudflare를 레고처럼 조립해 코딩 문법 암기 없이 실제 결제가 연동된 상용 웹을 라이브 배포합니다.',
      deliverables: [
        '외주비 0원 상용 배포 웹 1개',
        'Supabase 실시간 DB 연동',
        'PG 결제창 및 회원 시스템'
      ],
      tag: 'LEVEL 03',
      accent: '#7c3aed',
      bgAccent: 'from-purple-500/10 via-purple-500/5 to-transparent'
    },
    {
      week: 'WEEK 03',
      title: '메타 고전환 퍼널 & 첫 유료 결제',
      highlight: '조회수 거품 없이 진짜 매출로 결속',
      desc: '스레드 500만 뷰 알고리즘으로 진성 타깃을 모으고, 광고 카피와 첫 문장을 1:1로 결속시켜 CVR 8.6%+ 고전환 퍼널과 첫 현금 흐름을 만듭니다.',
      deliverables: [
        '스레드 바이럴 카피 프레임워크',
        'CVR 8.6%+ 랜딩페이지 퍼널',
        '첫 번째 실제 유료 결제 발생'
      ],
      tag: 'LEVEL 04',
      accent: '#f04452',
      bgAccent: 'from-rose-500/10 via-rose-500/5 to-transparent'
    }
  ];

  const proofMetrics = [
    {
      value: '5,000,000+',
      label: '누적 뷰수 실측 데이터',
      sub: '스레드 2개 계정 실측 DB'
    },
    {
      value: 'Meta Certified',
      label: '글로벌 공인 전문가',
      sub: 'Media Planning Professional'
    },
    {
      value: '월 $42',
      label: '운영 인프라 비용',
      sub: '4개 상용 서비스 실운영 기준'
    },
    {
      value: '8.6%',
      label: '실측 구매 전환율',
      sub: '메타 광고 1:1 결속 퍼널'
    }
  ];

  const faqs = [
    {
      q: '어릴 때 레고 좋아했던 사람을 위한 빌더 프로그램이란 무엇인가요?',
      a: '벽돌을 굽는 화학 공식을 몰라도 레고 블록만 있으면 누구나 거대한 성을 지을 수 있었습니다. 복잡한 코딩 문법을 밑바닥부터 외우지 않고, 검증된 기획·지능·퍼널·인프라 블록을 조립해 내 상용 프로덕트와 현금 흐름을 만드는 1인 빌더 성장 트랙입니다.'
    },
    {
      q: 'aizaler가 제공하는 AI 지능은 시중 프롬프트 강의와 무엇이 다른가요?',
      a: '시중에 흔한 "프롬프트 잘 쓰는 법 50선" 같은 뜬구름 잡는 복붙 자료는 다루지 않습니다. Git에 이미 공개된 검증된 오픈소스 에이전트 스킬(.skills)과 MCP(Model Context Protocol)를 에디터와 터미널에 직접 연결해, AI가 사람 대신 자율적으로 도구를 쓰며 결과물을 만들어내는 최신 실행 환경을 전수합니다.'
    },
    {
      q: '비개발자도 정말 3주 만에 상용 제품을 런칭할 수 있나요?',
      a: '네. Cursor, Supabase, Cloudflare, 간편결제 모듈을 조립형 아키텍처로 조합해 외주비 없이 혼자서 결제 웹서비스를 띄우고 운영하는 실전 파이프라인을 1:1 눈높이로 전수합니다.'
    }
  ];

  return (
    <div className="relative overflow-hidden space-y-20 sm:space-y-32 pt-6 sm:pt-12 pb-24">
      {/* ── Ambient Apple Iridescent Glow Mesh ── */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[500px] bg-gradient-to-tr from-blue-400/15 via-purple-400/15 to-rose-400/10 blur-[130px] rounded-full pointer-events-none -z-10 animate-apple-glow" />
      <div className="absolute top-[800px] right-0 w-[500px] h-[500px] bg-purple-400/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* ── 1. Apple-Grade Hero Section (Spacious, Breathless & Interactive) ── */}
      <section className="toss-container text-center space-y-8 sm:space-y-12">
        {/* Confident Minimal Header */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full apple-glass text-[#191f28] text-xs font-bold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#3182f6] animate-pulse" />
            <span className="tracking-wide">1인 빌더를 위한 3주 완주 스프린트</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-[58px] font-black text-[#191f28] leading-[1.18] tracking-tight">
            조립하면, 시작됩니다.
          </h1>

          <p className="text-base sm:text-xl text-[#4e5968] font-medium leading-relaxed max-w-2xl mx-auto">
            코딩 문법을 외우지 마세요. AI 블록을 조립해<br className="hidden sm:inline" />
            <span className="text-[#191f28] font-bold"> 3주 만에 내 상용 제품을 띄우는 1인 빌더의 길.</span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="#hero-diagnostic"
              className="toss-button-primary px-6 py-3.5 text-xs sm:text-sm font-bold flex items-center gap-2 shadow-sm active:scale-95"
            >
              <Sparkle size={16} weight="fill" />
              <span>3초 맞춤 블록 진단하기</span>
            </a>
            <a
              href="#sprint"
              className="px-6 py-3.5 rounded-2xl bg-white/90 hover:bg-white text-[#191f28] text-xs sm:text-sm font-bold border border-black/[0.08] flex items-center gap-2 shadow-xs transition-all hover:border-black/20"
            >
              <span>3주 스프린트 여정 살펴보기</span>
              <ArrowRight size={14} weight="bold" />
            </a>
          </div>
        </div>

        {/* ── Interactive Centerpiece: Apple Intelligence Diagnostic Bar + Live 3D Link ── */}
        <div id="hero-diagnostic" className="scroll-mt-24 max-w-4xl mx-auto">
          <div className="apple-glass rounded-3xl p-5 sm:p-8 border border-white/80 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] space-y-6 text-left">
            {/* Capsule Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-black/[0.05] pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#3182f6] to-[#7c3aed] text-white flex items-center justify-center shadow-xs">
                  <Cube size={18} weight="bold" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-black text-[#191f28]">
                    지금 내 상황에 꼭 맞는 1개의 블록 찾기
                  </div>
                  <div className="text-[11px] text-[#8b95a1]">
                    고민되는 단계를 1-탭하면 해당 블록과 실시간 처방이 활성화됩니다.
                  </div>
                </div>
              </div>

              <span className="text-[11px] font-bold text-[#3182f6] bg-blue-50/80 px-2.5 py-1 rounded-full border border-blue-200/50 self-start sm:self-auto">
                실시간 3D 조립 연동 중
              </span>
            </div>

            {/* 1-Tap Silky Diagnostic Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {diagnosticPills.map((pill) => {
                const isSelected = activeStep === pill.step;
                const Icon = pill.icon;
                return (
                  <button
                    key={pill.step}
                    type="button"
                    onClick={() => setActiveStep(pill.step)}
                    className={`p-3 rounded-2xl text-left transition-all border flex flex-col justify-between gap-2.5 active:scale-[0.98] ${
                      isSelected
                        ? 'bg-[#191f28] text-white border-[#191f28] shadow-md -translate-y-0.5'
                        : 'bg-white/80 hover:bg-white text-[#4e5968] border-black/[0.06] hover:border-black/15'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-mono font-black ${isSelected ? 'text-gray-300' : 'text-[#8b95a1]'}`}>
                        0{pill.step}
                      </span>
                      <div
                        className="w-6 h-6 rounded-lg flex items-center justify-center text-xs"
                        style={{
                          backgroundColor: isSelected ? 'rgba(255,255,255,0.15)' : `${pill.color}15`,
                          color: isSelected ? '#ffffff' : pill.color
                        }}
                      >
                        <Icon size={14} weight="bold" />
                      </div>
                    </div>
                    <div className={`text-xs font-bold leading-snug ${isSelected ? 'text-white' : 'text-[#191f28]'}`}>
                      {pill.short}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Live Synchronized Prescription Card (Apple Glass Minimalist Surface) */}
            <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-white/90 to-gray-50/90 border border-black/[0.06] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-5 transition-all">
              <div className="space-y-2 max-w-xl">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full border ${currentDiagnostic.bgTag}`}>
                    {currentDiagnostic.tag}
                  </span>
                  <span className="text-[11px] text-[#8b95a1] font-medium">추천 블록</span>
                </div>

                <div className="text-base sm:text-lg font-black text-[#191f28]">
                  {currentDiagnostic.title}
                </div>

                <p className="text-xs sm:text-sm text-[#4e5968] leading-relaxed">
                  {currentDiagnostic.summary}
                </p>

                <div className="pt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
                  <div className="text-[#191f28] font-bold flex items-center gap-1.5">
                    <span className="text-amber-500">🎯</span>
                    <span>손에 쥐는 결과물:</span>
                    <span className="text-[#3182f6] font-black">{currentDiagnostic.outcome}</span>
                  </div>
                </div>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-2">
                <a
                  href="#sprint"
                  className="px-5 py-3 rounded-xl bg-[#3182f6] hover:bg-[#1b64da] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
                >
                  <span>3주 스프린트에서 확인</span>
                  <ArrowRight size={13} weight="bold" />
                </a>
                <a
                  href="#starter-kit"
                  className="px-4 py-2.5 rounded-xl bg-white hover:bg-gray-50 text-[#191f28] border border-black/[0.08] text-xs font-bold transition-all flex items-center justify-center gap-1.5 text-center shadow-xs"
                >
                  <DownloadSimple size={14} weight="bold" />
                  <span>스타터 킷 무료 받기</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Apple Keynote Stat Strip (Numbers that Speak for Themselves) ── */}
      <section className="toss-container">
        <div className="apple-glass rounded-3xl p-6 sm:p-8 border border-white/80 shadow-xs">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-black/[0.06]">
            {proofMetrics.map((stat, idx) => (
              <div key={idx} className={`pt-4 sm:pt-0 ${idx > 0 ? 'sm:pl-6 lg:pl-8' : ''} text-center sm:text-left space-y-1`}>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#191f28] tracking-tight tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#191f28]">
                  {stat.label}
                </div>
                <div className="text-[11px] text-[#8b95a1]">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. 3-Week Sprint Journey (Unified Progression, NOT a Sales Catalog!) ── */}
      <section id="sprint" className="toss-container scroll-mt-20 space-y-10 sm:space-y-14">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f3ff] text-[#3182f6] text-xs font-bold">
            <Sparkle size={13} weight="fill" />
            <span>3-WEEK SPRINT ARCHITECTURE</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#191f28] tracking-tight leading-tight">
            3주 만에 완성하는 1인 빌더 파이프라인.
          </h2>

          <p className="text-xs sm:text-base text-[#4e5968] leading-relaxed font-normal">
            무작정 수많은 강의를 듣지 마세요. 매주 1개의 동작하는 레고 블록을 직접 완성합니다.
          </p>
        </div>

        {/* 3-Week Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sprintWeeks.map((w, idx) => (
            <div
              key={idx}
              className="apple-glass rounded-3xl p-6 sm:p-7 border border-white/90 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-all group"
            >
              <div className="space-y-4">
                {/* Top Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-black tracking-wider text-[#8b95a1]">
                    {w.week}
                  </span>
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                    style={{ color: w.accent, backgroundColor: `${w.accent}15` }}
                  >
                    {w.tag}
                  </span>
                </div>

                {/* Title & Highlight */}
                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-black text-[#191f28] leading-snug group-hover:text-[#3182f6] transition-colors">
                    {w.title}
                  </h3>
                  <div className="text-xs font-bold text-[#8b95a1]">
                    {w.highlight}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#4e5968] leading-relaxed">
                  {w.desc}
                </p>
              </div>

              {/* Hand-held Deliverables Box */}
              <div className="pt-4 border-t border-black/[0.05] space-y-2">
                <div className="text-[11px] font-bold text-[#191f28] flex items-center gap-1.5">
                  <CheckCircle size={13} weight="fill" className="text-emerald-500" />
                  <span>손에 쥐는 마일스톤</span>
                </div>
                <div className="space-y-1">
                  {w.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="text-xs text-[#4e5968] flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-slate-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── 🏆 완주자 특별 리워드: 실물 화이트 서밋 브릭 & 기념품 (User's Core Idea!) ── */}
        <div className="rounded-3xl bg-gradient-to-br from-[#191f28] via-[#0f172a] to-[#020617] text-white p-6 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Light in Card */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-amber-400/15 via-blue-500/10 to-transparent blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-amber-300 text-xs font-bold shadow-xs">
                <Medal size={14} weight="fill" className="text-amber-400" />
                <span>SPRINT FINISHER REWARD</span>
              </div>

              <h3 className="text-xl sm:text-3xl font-black text-white leading-tight">
                3주 스프린트 완주자에게만 드리는<br className="hidden sm:inline" />
                책상 위 실물 트로피, <span className="text-amber-300">‘화이트 서밋 크라운 브릭’</span>
              </h3>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal max-w-2xl">
                끝까지 손으로 조립해낸 1인 빌더의 용기는 증명되어야 합니다. 3주 과정을 완주한 모든 빌더에게는 책상 위에 당당히 올려둘 수 있는 <b>실물 세라믹 화이트 브릭 트로피</b>와 <b>공식 시리얼 넘버 각인 인증 뱃지</b>, 그리고 <b>파운더와의 50분 1:1 전략 세션 권한</b>이 수여됩니다.
              </p>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-gray-300 pt-2">
                <span className="flex items-center gap-1.5 text-amber-200 font-bold">
                  ✓ 실물 화이트 브릭 수여
                </span>
                <span className="flex items-center gap-1.5 text-blue-200 font-bold">
                  ✓ 공식 빌더 인증 뱃지
                </span>
                <span className="flex items-center gap-1.5 text-emerald-200 font-bold">
                  ✓ 파운더 1:1 세션 특권
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 text-center space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-white via-slate-100 to-slate-300 text-[#191f28] flex items-center justify-center shadow-lg text-3xl font-black ring-4 ring-amber-400/30">
                👑
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest">
                  SERIAL NO. #AIZALER-001
                </div>
                <div className="text-sm font-black text-white mt-0.5">
                  White Summit Brick
                </div>
              </div>
              <div className="text-[11px] text-gray-400 leading-tight">
                자생적 현금 흐름을 여는 빌더의 증표
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Interactive Lab: 3D Lego Simulator & Live AI Architect Chat ── */}
      <section id="lab" className="toss-container scroll-mt-20 space-y-8">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-xs font-bold text-[#3182f6] uppercase tracking-wider">
            INTERACTIVE BUILDER LAB
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#191f28] tracking-tight">
            직접 눌러보고, 조립해 보세요.
          </h2>
          <p className="text-xs sm:text-sm text-[#4e5968]">
            3D 공간에서 레고 블록을 쌓아 올리거나, AI 아키텍트에게 내 현재 병목을 물어보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left: 3D Lego Stack Simulator */}
          <div className="lg:col-span-6">
            <LegoStackSimulator externalStep={activeStep} />
          </div>

          {/* Right: AI Builder Consultant Chat */}
          <div className="lg:col-span-6">
            <BuilderConsultantChat onStepDiagnosed={(step) => setActiveStep(step)} />
          </div>
        </div>
      </section>

      {/* ── 5. Single Focused Free Starter Kit (Decluttered & Clean) ── */}
      <section id="starter-kit" className="toss-container scroll-mt-20">
        <div className="apple-glass rounded-3xl p-6 sm:p-10 max-w-3xl mx-auto border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.04)] space-y-6">
          <div className="space-y-2 text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#3182f6] text-xs font-bold">
              <DownloadSimple size={13} weight="bold" />
              <span>100% 무료 스타터 킷</span>
            </div>

            <h2 className="text-xl sm:text-3xl font-black text-[#191f28] tracking-tight leading-tight">
              어디서부터 시작해야 할지 모를 때.
            </h2>

            <p className="text-xs sm:text-sm text-[#4e5968] leading-relaxed max-w-lg mx-auto">
              1인 창업 필수 비즈니스 용어집과 고객 결핍 검증 체크리스트(PDF)를 이메일로 즉시 받아보세요.
            </p>
          </div>

          {isDownloaded ? (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 text-center">
              <CheckCircle size={20} weight="fill" className="text-emerald-600 shrink-0" />
              <span>스타터 킷이 이메일로 발송되었습니다. (스팸 메일함도 확인해 주세요)</span>
            </div>
          ) : (
            <form onSubmit={handleDownload} className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="스타터 킷을 받을 이메일 주소"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="px-4 py-3 rounded-xl bg-white border border-black/[0.1] text-xs sm:text-sm text-[#191f28] placeholder-gray-400 outline-none focus:border-[#3182f6] flex-1 shadow-xs"
              />
              <button
                type="submit"
                className="toss-button-primary px-6 py-3 text-xs sm:text-sm font-bold shrink-0 flex items-center justify-center gap-1.5 shadow-xs"
              >
                <DownloadSimple size={15} weight="bold" />
                <span>무료로 받기</span>
              </button>
            </form>
          )}

          <p className="text-[11px] text-[#8b95a1] text-center">
            * 광고 스팸은 절대 보내지 않으며 언제든 1클릭으로 구독 해제할 수 있습니다.
          </p>
        </div>
      </section>

      {/* ── 6. VIP 1:1 Private Session (Quiet Luxury) ── */}
      <section className="toss-container">
        <div className="p-6 sm:p-8 rounded-3xl bg-[#050A18] text-[#FAF6F0] max-w-3xl mx-auto border border-white/10 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-lg">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400">
              <Crown size={14} weight="fill" />
              <span>VIP 1:1 PRIVATE STRATEGY SESSION</span>
            </div>
            <h3 className="text-base sm:text-xl font-black text-white">
              혼자 조립하기 막막할 땐, 50분 1:1 맞춤 전략 세션
            </h3>
            <p className="text-xs sm:text-sm text-[#FAF6F0]/70 leading-relaxed font-normal">
              공기업과 해외 주재원을 나와 야생에서 4개 프로덕트로 생존한 파운더가, 사전 질의서를 바탕으로 내 비즈니스의 90일 실행 Action Blueprint를 처방합니다.
            </p>
          </div>

          <Link
            href="/career"
            className="shrink-0 inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl bg-white text-[#050A18] hover:bg-gray-100 text-xs font-bold transition-all shadow-sm active:scale-95"
          >
            <span>세션 신청하기</span>
            <ArrowRight size={13} weight="bold" />
          </Link>
        </div>
      </section>

      {/* ── 7. Concise FAQ (Apple Clean Accordion) ── */}
      <section id="faq" className="toss-container scroll-mt-20 space-y-4 max-w-2xl mx-auto">
        <div className="text-center space-y-1">
          <span className="text-xs font-bold text-[#3182f6]">FAQ</span>
          <h2 className="text-lg sm:text-2xl font-black text-[#191f28]">자주 묻는 질문</h2>
        </div>

        <div className="space-y-2.5">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="apple-glass rounded-2xl overflow-hidden border border-black/[0.06]"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left transition-colors hover:bg-white/50"
                >
                  <div className="flex items-start gap-3 pr-2">
                    <span className="text-xs font-black text-[#3182f6]">Q.</span>
                    <span className="font-bold text-xs sm:text-sm text-[#191f28] leading-snug">
                      {faq.q}
                    </span>
                  </div>
                  <CaretDown
                    size={15}
                    weight="bold"
                    className={`transition-transform duration-200 shrink-0 text-[#8b95a1] ${
                      isOpen ? 'rotate-180 text-[#3182f6]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0">
                    <p className="pt-3 border-t border-black/[0.05] text-xs sm:text-sm text-[#4e5968] leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="pt-3 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3182f6] hover:underline"
          >
            aizaler 스튜디오 철학 & 파운더 소개 보기 <ArrowRight size={13} weight="bold" />
          </Link>
        </div>
      </section>
    </div>
  );
}
