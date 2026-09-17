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
  Target,
  RocketLaunch,
  Medal,
  Users,
  Check,
  X,
  PaperPlaneTilt
} from '@phosphor-icons/react';

import LegoStackSimulator from '@/components/LegoStackSimulator';
import BuilderConsultantChat from '@/components/BuilderConsultantChat';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedGoalId, setSelectedGoalId] = useState<'launch' | 'revenue' | 'validate'>('revenue');
  const [emailInput, setEmailInput] = useState('');
  const [isDownloaded, setIsDownloaded] = useState(false);

  // 1기 크루 참가 신청 모달 상태
  const [isCrewModalOpen, setIsCrewModalOpen] = useState(false);
  const [crewTrackId, setCrewTrackId] = useState<'launch' | 'revenue' | 'validate' | 'vip'>('revenue');
  const [crewName, setCrewName] = useState('');
  const [crewContact, setCrewContact] = useState('');
  const [crewItemGoal, setCrewItemGoal] = useState('');
  const [crewSubmitted, setCrewSubmitted] = useState(false);

  // ── 3대 트랙별 차등화된 목표 & 크루 참가비 ──
  const GOALS = [
    {
      id: 'validate' as const,
      emoji: '💡',
      icon: LightbulbFilament,
      step: 1, // Links to Lego Level 1
      title: '내 아이디어의 시장 결핍 & BM 검증',
      short: '기획 & 검증 트랙',
      badge: 'TRACK 01 · 기획 트랙',
      price: '29,000원',
      originalPrice: '59,000원',
      cohortLabel: '1기 얼리버드 50% 할인',
      tagline: '무작정 만들기 전에, Aside 24h 자율 감시 봇으로 결핍과 돈 버는 모델을 증명합니다.',
      targetWho: '아이디어는 넘치는데 어디서부터 시작해야 할지 막막한 예비 창업자',
      deliverable: 'Aside 24h 시장 감시 봇 & 검증된 BM 린 캔버스 1장',
      tools: 'Aside 24h 자율 브라우저 · 1인 창업 필수 용어집 · 결핍 검증 체크리스트',
      accentColor: '#2563eb',
      bgTag: 'bg-blue-50 text-blue-700 border-blue-200',
      weeks: [
        { week: '1주차', action: '고객 결핍 발굴 및 PPF(Product-Person Fit) 분석' },
        { week: '2주차', action: 'Aside 24h 브라우저로 경쟁사 데이터 자동 수집' },
        { week: '3주차', action: '실제 돈 버는 모델이 담긴 린 캔버스 1장 완성' }
      ],
      leadMagnetTitle: '1인 창업 필수 용어집 & 고객 결핍 검증 린 캔버스 (PDF)',
      leadMagnetDesc: '내 아이디어가 실제 시장에서 돈이 되는지 검증하는 첫 번째 비즈니스 체크리스트입니다.',
      buttonText: '기획 & 검증 가이드 무료 받기'
    },
    {
      id: 'launch' as const,
      emoji: '🚀',
      icon: RocketLaunch,
      step: 3, // Links to Lego Level 3
      title: '외주비 0원으로 내 상용 웹 띄우기',
      short: '외주비 0원 런칭',
      badge: 'TRACK 02 · 런칭 트랙',
      price: '59,000원',
      originalPrice: '119,000원',
      cohortLabel: '1기 얼리버드 50% 할인',
      tagline: '외주 견적 수천만 원 대신, 내 손으로 직접 결제되는 상용 웹서비스를 배포합니다.',
      targetWho: '비개발자, 아이디어는 있지만 개발 외주비에 가로막힌 1인 빌더',
      deliverable: '외주비 0원, 내 도메인으로 작동하는 실제 상용 결제 웹서비스 1개 라이브 배포',
      tools: 'Cursor · Claude Code · Next.js 14 · Supabase · Cloudflare',
      accentColor: '#9333ea',
      bgTag: 'bg-purple-50 text-purple-700 border-purple-200',
      weeks: [
        { week: '1주차', action: 'Cursor + Supabase 조립 및 DB 아키텍처 셋업' },
        { week: '2주차', action: 'Next.js 14 기반 반응형 상용 웹서비스 라이브 배포' },
        { week: '3주차', action: 'PG 결제창 및 간편결제 모듈 100% 연동 완료' }
      ],
      leadMagnetTitle: '외주비 0원 1인 상용 웹 배포 아키텍처 로드맵 (PDF)',
      leadMagnetDesc: '코딩 문법을 외우지 않고 Cursor와 Supabase를 조립해 내 손으로 실제 결제창을 띄우는 상용 런칭 가이드입니다.',
      buttonText: '외주비 0원 런칭 가이드 무료 받기'
    },
    {
      id: 'revenue' as const,
      emoji: '🎯',
      icon: Target,
      step: 4, // Links to Lego Level 4
      title: '메타 알고리즘의 이해 & 첫 유료 결제',
      short: '메타 알고리즘 & 수익 트랙',
      badge: 'TRACK 03 · 수익 트랙 ★인기',
      price: '89,000원',
      originalPrice: '179,000원',
      cohortLabel: '1기 얼리버드 50% 할인',
      tagline: '‘훅 자료집’ 복붙은 끝. 메타 추천 알고리즘의 작동 원리를 이해하고 첫 유료 결제를 뚫습니다.',
      targetWho: '제품/아이템은 있지만 트래픽이 없거나 결제로 안 이어지는 빌더',
      deliverable: '스레드 500만 뷰 훅 구조도 & CVR 8.6%+ 고전환 결제 퍼널 & 첫 실제 유료 결제',
      tools: '3단계 체류 시간 구조도 · 첫 문장 1:1 결속 프레임워크 · 메타 역공학 가이드',
      accentColor: '#f04452',
      bgTag: 'bg-rose-50 text-rose-700 border-rose-200',
      weeks: [
        { week: '1주차', action: '메타 추천 알고리즘(Sentence-BERT)과 체류 시간 10배 훅 설계' },
        { week: '2주차', action: '광고/피드 첫 문장과 상세페이지 1:1 결속 퍼널 완성' },
        { week: '3주차', action: '첫 번째 실제 고객 유료 결제 알림 수신' }
      ],
      leadMagnetTitle: '‘훅 자료집’만 보셨나요? 왜 안 터지는지 그 구조를 알려드립니다 (PDF)',
      leadMagnetDesc: '시중에 굴러다니는 훅 100선 복붙 대신, 메타 추천 알고리즘의 체류 시간 10배 견인 구조 리포트입니다.',
      buttonText: '스레드 훅 구조 해부서 무료 받기'
    }
  ];

  const currentGoal = GOALS.find((g) => g.id === selectedGoalId) || GOALS[1];

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    setIsDownloaded(true);
  };

  const handleCrewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!crewName.trim() || !crewContact.trim()) return;
    setCrewSubmitted(true);
  };

  const openCrewModal = (trackId: 'launch' | 'revenue' | 'validate' | 'vip') => {
    setCrewTrackId(trackId);
    setCrewSubmitted(false);
    setIsCrewModalOpen(true);
  };

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
      q: 'aizaler의 AI 지능 및 메타 알고리즘은 시중 강의와 무엇이 다른가요?',
      a: '뜬구름 잡는 복붙 자료는 다루지 않습니다. Git 오픈소스 에이전트 스킬(.skills)과 메타 Sentence-BERT 텍스트 임베딩, 체류 시간(Dwell Time) 가중치 등 실제 알고리즘의 동작 구조를 역공학해 내 손으로 라이브 배포하고 첫 결제를 뚫는 실전만을 다룹니다.'
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

      {/* ── 1. Apple Hero: "이번 3주, 당신이 달성할 단 하나의 목표는?" ── */}
      <section className="toss-container text-center space-y-8 sm:space-y-12">
        <div className="space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full apple-glass text-[#191f28] text-xs font-bold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#3182f6] animate-pulse" />
            <span className="tracking-wide">함께 성장하는 3주 빌더 크루 1기 모집</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-black text-[#191f28] leading-[1.18] tracking-tight">
            이번 3주, 당신이 달성할<br className="hidden sm:inline" /> 단 하나의 목표는?
          </h1>

          <p className="text-base sm:text-xl text-[#4e5968] font-medium leading-relaxed max-w-2xl mx-auto">
            강의만 듣고 끝나는 외로운 공부는 그만두세요.<br className="hidden sm:inline" />
            <span className="text-[#191f28] font-bold">목표를 정하면, 3주간 동료들과 함께 만들어냅니다.</span>
          </p>
        </div>

        {/* ── Interactive Goal Selector (Visitor Selects Their Goal) ── */}
        <div id="hero-goal" className="scroll-mt-24 max-w-4xl mx-auto space-y-6">
          <span id="hero-diagnostic" className="scroll-mt-24 block" />
          <div className="text-center space-y-1">
            <div className="text-xs font-mono font-black text-[#8b95a1] uppercase tracking-wider">
              STEP 01. 달성할 목표와 참가 트랙을 선택하세요
            </div>
          </div>

          {/* 3대 핵심 목표 선택 카드 세트 (가격 차등화 반영) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-left">
            {GOALS.map((goal) => {
              const isSelected = selectedGoalId === goal.id;
              const Icon = goal.icon;
              return (
                <button
                  key={goal.id}
                  type="button"
                  onClick={() => setSelectedGoalId(goal.id)}
                  className={`p-5 rounded-3xl transition-all border flex flex-col justify-between gap-4 text-left active:scale-[0.98] ${
                    isSelected
                      ? 'bg-[#191f28] text-white border-[#191f28] shadow-xl -translate-y-1 ring-2 ring-[#3182f6]/50'
                      : 'apple-glass hover:bg-white text-[#4e5968] border-white/80 hover:border-black/15 shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className={`text-[10px] font-mono font-black tracking-wider ${isSelected ? 'text-gray-400' : 'text-[#8b95a1]'}`}>
                      {goal.badge}
                    </span>
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center text-sm shadow-xs"
                      style={{
                        backgroundColor: isSelected ? 'rgba(255,255,255,0.15)' : `${goal.accentColor}15`,
                        color: isSelected ? '#ffffff' : goal.accentColor
                      }}
                    >
                      <Icon size={18} weight="bold" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className={`text-base sm:text-lg font-black leading-snug ${isSelected ? 'text-white' : 'text-[#191f28]'}`}>
                      {goal.title}
                    </h3>
                    <p className={`text-xs leading-relaxed ${isSelected ? 'text-gray-300' : 'text-[#4e5968]'}`}>
                      {goal.tagline}
                    </p>
                  </div>

                  {/* 가격 및 얼리버드 뱃지 */}
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-gray-400 line-through">
                        {goal.originalPrice}
                      </div>
                      <div className={`text-sm sm:text-base font-black ${isSelected ? 'text-amber-300' : 'text-[#191f28]'}`}>
                        {goal.price}
                      </div>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isSelected ? 'bg-white/15 text-white' : 'bg-rose-50 text-[#f04452]'
                    }`}>
                      {goal.cohortLabel}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* ── 선택된 목표 맞춤형 처방 보드 (Apple Glass Interactive Surface) ── */}
          <div className="apple-glass rounded-3xl p-6 sm:p-8 border border-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.05)] text-left space-y-6 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-black/[0.05] pb-4">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">{currentGoal.emoji}</span>
                <div>
                  <div className="text-xs font-mono font-bold text-[#3182f6]">
                    선택하신 목표 맞춤 3주 플랜
                  </div>
                  <h2 className="text-base sm:text-xl font-black text-[#191f28]">
                    {currentGoal.title} (참가비 {currentGoal.price})
                  </h2>
                </div>
              </div>

              <span className={`text-[11px] font-black px-3 py-1 rounded-full border self-start sm:self-auto ${currentGoal.bgTag}`}>
                {currentGoal.badge}
              </span>
            </div>

            {/* 3주간의 액션 마일스톤 단계 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {currentGoal.weeks.map((w, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/80 border border-black/[0.05] space-y-1">
                  <div className="text-[10px] font-mono font-black text-[#3182f6]">
                    {w.week}
                  </div>
                  <div className="text-xs font-bold text-[#191f28] leading-snug">
                    {w.action}
                  </div>
                </div>
              ))}
            </div>

            {/* 최종 결과물 강조 & 즉각 액션 버튼 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-[11px] font-bold text-amber-300 flex items-center gap-1.5">
                  <Sparkle size={13} weight="fill" />
                  <span>3주 완주 후 손에 쥐어지는 단 하나의 결과물</span>
                </div>
                <div className="text-sm sm:text-base font-black text-white">
                  🎯 {currentGoal.deliverable}
                </div>
              </div>

              <div className="shrink-0 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => openCrewModal(currentGoal.id)}
                  className="px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-[#191f28] text-xs font-black transition-all flex items-center gap-1.5 shadow-sm active:scale-95 text-center"
                >
                  <Users size={15} weight="bold" />
                  <span>1기 크루 신청하기 ({currentGoal.price})</span>
                </button>
                <a
                  href="#starter-kit"
                  className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all border border-white/20 text-center"
                >
                  <span>가이드 무료 받기</span>
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

      {/* ── 3. 3-Week Sprint Architecture & Community ── */}
      <section id="sprint" className="toss-container scroll-mt-20 space-y-10 sm:space-y-14">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f3ff] text-[#3182f6] text-xs font-bold">
            <Sparkle size={13} weight="fill" />
            <span>3-WEEK SPRINT ARCHITECTURE</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#191f28] tracking-tight leading-tight">
            어떤 목표를 선택해도,<br className="hidden sm:inline" /> 3주 만에 블록을 완성합니다.
          </h2>

          <p className="text-xs sm:text-base text-[#4e5968] leading-relaxed font-normal">
            장황한 코딩 강의 대신, 매주 1개의 동작하는 블록을 내 손으로 직접 쌓아 올립니다.
          </p>
        </div>

        {/* 3-Week Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="apple-glass rounded-3xl p-6 sm:p-7 border border-white/90 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-all group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-black tracking-wider text-[#8b95a1]">WEEK 01</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">기획 & 에이전트</span>
              </div>
              <div className="space-y-1">
                <h3 className="text-lg sm:text-xl font-black text-[#191f28] group-hover:text-[#3182f6] transition-colors">
                  시장 검증 & Git 에이전트 스킬
                </h3>
                <div className="text-xs font-bold text-[#8b95a1]">아이디어에서 AI 자율 실행 환경까지</div>
              </div>
              <p className="text-xs sm:text-sm text-[#4e5968] leading-relaxed">
                고객 결핍 검증과 Aside 24h 자율 리서치로 시장성을 증명하고, Git 오픈소스 에이전트 스킬(.skills)을 장착해 AI가 스스로 일하게 만듭니다.
              </p>
            </div>
            <div className="pt-4 border-t border-black/[0.05] space-y-1 text-xs text-[#4e5968]">
              <div className="text-[11px] font-bold text-[#191f28] mb-1.5 flex items-center gap-1.5">
                <CheckCircle size={13} weight="fill" className="text-emerald-500" /> 손에 쥐는 마일스톤
              </div>
              <div>• Aside 24h 시장 감시 봇</div>
              <div>• 검증된 BM 린 캔버스 1장</div>
              <div>• Git 에이전트 스킬(.skills) 환경</div>
            </div>
          </div>

          <div className="apple-glass rounded-3xl p-6 sm:p-7 border border-white/90 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-all group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-black tracking-wider text-[#8b95a1]">WEEK 02</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-50 text-purple-700">상용 웹 런칭</span>
              </div>
              <div className="space-y-1">
                <h3 className="text-lg sm:text-xl font-black text-[#191f28] group-hover:text-[#3182f6] transition-colors">
                  외주비 0원 상용 웹 프로덕트 런칭
                </h3>
                <div className="text-xs font-bold text-[#8b95a1]">내 손으로 띄우는 실제 결제 웹</div>
              </div>
              <p className="text-xs sm:text-sm text-[#4e5968] leading-relaxed">
                Cursor, Claude Code, Supabase, Cloudflare를 레고처럼 조립해 코딩 문법 암기 없이 실제 결제가 연동된 상용 웹을 라이브 배포합니다.
              </p>
            </div>
            <div className="pt-4 border-t border-black/[0.05] space-y-1 text-xs text-[#4e5968]">
              <div className="text-[11px] font-bold text-[#191f28] mb-1.5 flex items-center gap-1.5">
                <CheckCircle size={13} weight="fill" className="text-emerald-500" /> 손에 쥐는 마일스톤
              </div>
              <div>• 외주비 0원 상용 배포 웹 1개</div>
              <div>• Supabase 실시간 DB 연동</div>
              <div>• PG 결제창 및 회원 시스템</div>
            </div>
          </div>

          <div className="apple-glass rounded-3xl p-6 sm:p-7 border border-white/90 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-all group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-black tracking-wider text-[#8b95a1]">WEEK 03</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-50 text-rose-700">메타 알고리즘</span>
              </div>
              <div className="space-y-1">
                <h3 className="text-lg sm:text-xl font-black text-[#191f28] group-hover:text-[#3182f6] transition-colors">
                  메타 알고리즘의 이해 & 첫 유료 결제
                </h3>
                <div className="text-xs font-bold text-[#8b95a1]">‘훅 자료집’ 복붙 대신 체류 시간 구조 설계</div>
              </div>
              <p className="text-xs sm:text-sm text-[#4e5968] leading-relaxed">
                ‘훅 자료집’만 모아두고 써봤자 알고리즘은 소음으로 거릅니다. 메타 추천 알고리즘의 작동 원리를 이해하고 첫 결제를 완성합니다.
              </p>
            </div>
            <div className="pt-4 border-t border-black/[0.05] space-y-1 text-xs text-[#4e5968]">
              <div className="text-[11px] font-bold text-[#191f28] mb-1.5 flex items-center gap-1.5">
                <CheckCircle size={13} weight="fill" className="text-emerald-500" /> 손에 쥐는 마일스톤
              </div>
              <div>• 메타 Sentence-BERT 역공학 리포트</div>
              <div>• 스레드 3단계 체류 시간 구조도</div>
              <div>• 첫 번째 실제 유료 결제 발생</div>
            </div>
          </div>
        </div>

        {/* ── 🏆 완주자 특별 리워드: 실물 화이트 서밋 브릭 & 기념품 ── */}
        <div className="rounded-3xl bg-gradient-to-br from-[#191f28] via-[#0f172a] to-[#020617] text-white p-6 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
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
                어떤 트랙을 선택했든, 3주 과정을 완주한 모든 빌더에게는 책상 위에 당당히 올려둘 수 있는 <b>실물 세라믹 화이트 브릭 트로피</b>와 <b>공식 시리얼 넘버 각인 인증 뱃지</b>, 그리고 <b>파운더와의 50분 1:1 전략 세션 권한</b>이 수여됩니다.
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

      {/* ── 4. ✦ 함께 성장할 3주 스프린트 1기 빌더 크루 모집 (트랙별 차등 가격) ── */}
      <section id="cohort" className="toss-container scroll-mt-20 space-y-10 sm:space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-bold">
            <Users size={14} weight="fill" className="text-amber-600" />
            <span>함께 성장하는 3주 빌더 코호트</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#191f28] tracking-tight leading-tight">
            강의를 파는 곳이 아닙니다.<br />
            3주간 함께 만들고 성장할 동료를 모읍니다.
          </h2>

          <p className="text-xs sm:text-base text-[#4e5968] leading-relaxed">
            혼자 책상에 앉아 끙끙 앓지 마세요. 서로의 프로덕트 첫 고객이 되어주고, 매주 1개의 블록을 인증하며, 첫 유료 결제를 함께 축하하는 소수 정예 빌더 커뮤니티입니다.
          </p>
        </div>

        {/* 3대 트랙별 차등 가격 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {GOALS.map((track) => (
            <div
              key={track.id}
              className={`apple-glass rounded-3xl p-6 sm:p-7 border flex flex-col justify-between space-y-6 transition-all ${
                track.id === 'revenue'
                  ? 'ring-2 ring-[#f04452]/50 shadow-lg relative'
                  : 'border-white/80 shadow-sm hover:shadow-md'
              }`}
            >
              {track.id === 'revenue' && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#f04452] text-white text-[10px] font-black tracking-wider uppercase shadow-xs">
                  ★ MOST POPULAR 크루
                </div>
              )}

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full border ${track.bgTag}`}>
                    {track.badge}
                  </span>
                  <span className="text-xs font-mono font-bold text-gray-400">
                    정원 15명 한정
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-black text-[#191f28]">
                    {track.title}
                  </h3>
                  <p className="text-xs text-[#4e5968] leading-relaxed">
                    {track.tagline}
                  </p>
                </div>

                {/* 가격 표시 */}
                <div className="pt-2 border-t border-black/[0.05]">
                  <div className="text-[11px] text-gray-400 line-through">
                    정가 {track.originalPrice}
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl sm:text-3xl font-black text-[#191f28]">
                      {track.price}
                    </span>
                    <span className="text-[11px] font-bold text-[#f04452]">
                      (1기 얼리버드)
                    </span>
                  </div>
                </div>

                {/* 포함 내역 체크리스트 */}
                <div className="space-y-2 pt-2 border-t border-black/[0.05] text-xs text-[#4e5968]">
                  <div className="font-bold text-[#191f28] flex items-center gap-1.5 text-[11px]">
                    <CheckCircle size={13} weight="fill" className="text-emerald-500" />
                    크루 제공 혜택:
                  </div>
                  <div className="space-y-1 text-[11px]">
                    <div className="flex items-center gap-1.5">
                      <Check size={12} weight="bold" className="text-[#3182f6]" />
                      <span>{track.deliverable.split('&')[0]}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check size={12} weight="bold" className="text-[#3182f6]" />
                      <span>3주 비공개 빌더 피어 리뷰 & QA</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check size={12} weight="bold" className="text-[#3182f6]" />
                      <span>완주 시 실물 화이트 서밋 브릭 수여</span>
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => openCrewModal(track.id)}
                className={`w-full py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 active:scale-95 shadow-xs ${
                  track.id === 'revenue'
                    ? 'bg-[#f04452] hover:bg-[#d6303f] text-white'
                    : 'bg-[#191f28] hover:bg-black text-white'
                }`}
              >
                <span>{track.short} 크루 참가하기</span>
                <ArrowRight size={13} weight="bold" />
              </button>
            </div>
          ))}
        </div>

        {/* 👑 VIP All-in-One 코호트 옵션 */}
        <div className="apple-glass rounded-3xl p-6 sm:p-8 max-w-5xl mx-auto border border-amber-300/40 bg-gradient-to-r from-amber-50/40 via-white to-orange-50/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1.5 text-left">
            <div className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700">
              <Crown size={14} weight="fill" className="text-amber-500" />
              <span>ALL-IN-ONE VIP 크루 · 파운더 1:1 직강 포함</span>
            </div>
            <h3 className="text-base sm:text-xl font-black text-[#191f28]">
              3개 트랙 전체 수강 + 파운더 50분 1:1 심층 전략 세션
            </h3>
            <p className="text-xs text-[#4e5968] leading-relaxed max-w-xl">
              기획부터 외주비 0원 런칭, 메타 알고리즘 퍼널까지 전체를 아우르고 파운더와 1:1로 내 비즈니스의 90일 실행 Action Blueprint를 완성합니다.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row md:flex-col items-center gap-3">
            <div className="text-right">
              <div className="text-[10px] text-gray-400 line-through">정가 350,000원</div>
              <div className="text-2xl font-black text-[#191f28]">189,000원</div>
            </div>
            <button
              type="button"
              onClick={() => openCrewModal('vip')}
              className="px-6 py-3 rounded-xl bg-[#050A18] hover:bg-black text-white text-xs font-black transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
            >
              <Crown size={13} weight="fill" className="text-amber-400" />
              <span>VIP 크루 신청하기</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── 5. Interactive Lab: 3D Lego Simulator & Live AI Architect Chat ── */}
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
          <div className="lg:col-span-6">
            <LegoStackSimulator externalStep={currentGoal.step} />
          </div>

          <div className="lg:col-span-6">
            <BuilderConsultantChat onStepDiagnosed={() => {}} />
          </div>
        </div>
      </section>

      {/* ── 6. 선택된 목표 맞춤 무료 가이드북 / 스타터 킷 ── */}
      <section id="starter-kit" className="toss-container scroll-mt-20">
        <div className="apple-glass rounded-3xl p-6 sm:p-10 max-w-3xl mx-auto border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.04)] space-y-7">
          <div className="space-y-3 text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-[#f04452] text-xs font-bold border border-rose-200/60">
              <Sparkle size={13} weight="fill" />
              <span>100% 무료 배포 · {currentGoal.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-[#191f28] tracking-tight leading-tight">
              {currentGoal.id === 'revenue' ? (
                <>
                  ‘훅 자료집’만 보셨나요?<br />
                  <span className="text-[#3182f6]">왜 안 터지는지, 그 숨겨진 구조</span>를 알려드립니다.
                </>
              ) : (
                <>
                  {currentGoal.title},<br />
                  <span className="text-[#3182f6]">시작할 준비가 되셨나요?</span>
                </>
              )}
            </h2>

            <p className="text-xs sm:text-sm text-[#4e5968] leading-relaxed max-w-xl mx-auto">
              {currentGoal.leadMagnetDesc}
            </p>
          </div>

          {/* 스레드 훅 목표일 경우 직관 비교 카드 노출 */}
          {currentGoal.id === 'revenue' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
              <div className="p-4 rounded-2xl bg-gray-50/90 border border-black/[0.05] space-y-1.5">
                <div className="text-[11px] font-bold text-gray-500 flex items-center gap-1.5">
                  <span>❌</span>
                  <span>단순 훅 복붙 (왜 안 터지는가)</span>
                </div>
                <p className="text-xs text-[#4e5968] leading-relaxed">
                  인터넷에서 긁어온 자극적인 첫 문장 ➔ 본문 들어가자마자 뻔한 교과서 내용 ➔ <b>체류 시간 1.8초 이탈</b> ➔ 알고리즘 추천 피드 노출 중단
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200/60 space-y-1.5">
                <div className="text-[11px] font-bold text-[#3182f6] flex items-center gap-1.5">
                  <span>💎</span>
                  <span>메타 알고리즘의 이해 (왜 터지는가)</span>
                </div>
                <p className="text-xs text-[#191f28] leading-relaxed">
                  Sentence-BERT 인지 부조화 첫 문장 ➔ 스크롤을 멈추는 실측 데이터 ➔ 논쟁적 댓글 결속 ➔ <b>체류 시간 18.4초 (10배 견인)</b> ➔ 메타 추천 피드 폭발
                </p>
              </div>
            </div>
          )}

          {isDownloaded ? (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 text-center">
              <CheckCircle size={20} weight="fill" className="text-emerald-600 shrink-0" />
              <span>[{currentGoal.leadMagnetTitle}]이 이메일로 발송되었습니다. (스팸 메일함도 확인해 주세요)</span>
            </div>
          ) : (
            <form onSubmit={handleDownload} className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="가이드북을 받을 이메일 주소"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="px-4 py-3 rounded-xl bg-white border border-black/[0.1] text-xs sm:text-sm text-[#191f28] placeholder-gray-400 outline-none focus:border-[#3182f6] flex-1 shadow-xs"
              />
              <button
                type="submit"
                className="toss-button-primary px-6 py-3 text-xs sm:text-sm font-bold shrink-0 flex items-center justify-center gap-1.5 shadow-xs"
              >
                <DownloadSimple size={15} weight="bold" />
                <span>무료 가이드 받기</span>
              </button>
            </form>
          )}

          <p className="text-[11px] text-[#8b95a1] text-center">
            * 광고 스팸은 절대 보내지 않으며 언제든 1클릭으로 구독 해제할 수 있습니다.
          </p>
        </div>
      </section>

      {/* ── 7. VIP 1:1 Private Session (Quiet Luxury) ── */}
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

      {/* ── 8. Concise FAQ (Apple Clean Accordion) ── */}
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

      {/* ── 1기 빌더 크루 참가 신청 모달 ── */}
      {isCrewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="apple-glass rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-white/80 shadow-2xl relative space-y-5 bg-white">
            <button
              onClick={() => setIsCrewModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-[#191f28] transition-colors"
            >
              <X size={18} weight="bold" />
            </button>

            <div className="space-y-1.5 text-left">
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 text-[11px] font-bold">
                <Users size={13} weight="fill" className="text-amber-600" />
                <span>3주 빌더 스프린트 1기 크루</span>
              </div>
              <h3 className="text-xl font-black text-[#191f28]">
                {crewTrackId === 'vip'
                  ? 'ALL-IN-ONE VIP 크루 참가 신청'
                  : `${GOALS.find((g) => g.id === crewTrackId)?.title} 참가 신청`}
              </h3>
              <p className="text-xs text-[#4e5968]">
                함께 3주간 블록을 조립하고 완주할 소수 정예 크루에 합류하세요.
              </p>
            </div>

            {crewSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <CheckCircle size={36} weight="fill" className="text-emerald-600 mx-auto" />
                <div className="text-base font-black text-emerald-900">
                  1기 크루 신청이 완료되었습니다!
                </div>
                <p className="text-xs text-emerald-700 leading-relaxed">
                  24시간 이내에 입력해 주신 연락처/이메일로 <b>온보딩 가이드와 비공개 크루 채널 초대 링크</b>를 전송해 드립니다.
                </p>
                <button
                  onClick={() => setIsCrewModalOpen(false)}
                  className="mt-3 px-5 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold"
                >
                  확인 완료
                </button>
              </div>
            ) : (
              <form onSubmit={handleCrewSubmit} className="space-y-3.5 text-left">
                {/* 선택된 트랙 확인 박스 */}
                <div className="p-3.5 rounded-2xl bg-gray-50 border border-black/[0.05] flex items-center justify-between text-xs">
                  <span className="font-bold text-[#191f28]">신청 트랙:</span>
                  <span className="font-black text-[#3182f6]">
                    {crewTrackId === 'vip'
                      ? 'ALL-IN-ONE VIP (189,000원)'
                      : `${GOALS.find((g) => g.id === crewTrackId)?.short} (${GOALS.find((g) => g.id === crewTrackId)?.price})`}
                  </span>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#191f28]">성함 / 닉네임</label>
                  <input
                    type="text"
                    required
                    placeholder="홍길동"
                    value={crewName}
                    onChange={(e) => setCrewName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-black/[0.1] text-xs text-[#191f28] placeholder-gray-400 outline-none focus:border-[#3182f6]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#191f28]">이메일 주소 (온보딩 및 채널 초대장 수신)</label>
                  <input
                    type="email"
                    required
                    placeholder="example@gmail.com"
                    value={crewContact}
                    onChange={(e) => setCrewContact(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-black/[0.1] text-xs text-[#191f28] placeholder-gray-400 outline-none focus:border-[#3182f6]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#191f28]">이번 3주 동안 만들고 싶은 아이템 / 제품 한 줄 소개</label>
                  <input
                    type="text"
                    placeholder="예: 비개발자용 업무 자동화 템플릿 웹서비스"
                    value={crewItemGoal}
                    onChange={(e) => setCrewItemGoal(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-black/[0.1] text-xs text-[#191f28] placeholder-gray-400 outline-none focus:border-[#3182f6]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#3182f6] hover:bg-[#1b64da] text-white text-xs font-black transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95 mt-2"
                >
                  <PaperPlaneTilt size={15} weight="bold" />
                  <span>1기 크루 참가 신청 완료하기</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
