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
  Users,
  X,
  PaperPlaneTilt,
  FlagCheckered,
  Timer
} from '@phosphor-icons/react';

import LegoStackSimulator from '@/components/LegoStackSimulator';
import BuilderConsultantChat from '@/components/BuilderConsultantChat';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedTrackId, setSelectedTrackId] = useState<'validate' | 'launch' | 'revenue'>('revenue');
  const [emailInput, setEmailInput] = useState('');
  const [isDownloaded, setIsDownloaded] = useState(false);

  // 1기 크루 참가 신청 모달 상태
  const [isCrewModalOpen, setIsCrewModalOpen] = useState(false);
  const [modalTrackId, setModalTrackId] = useState<'validate' | 'launch' | 'revenue' | 'vip'>('revenue');
  const [crewName, setCrewName] = useState('');
  const [crewContact, setCrewContact] = useState('');
  const [crewItemGoal, setCrewItemGoal] = useState('');
  const [crewSubmitted, setCrewSubmitted] = useState(false);

  // ── 3대 러닝 코스 (거리별 페이스 & 레이스 넘버) ──
  const COURSES = [
    {
      id: 'validate' as const,
      bib: 'BIB #5K',
      stepNum: 1,
      legoStep: 1,
      icon: LightbulbFilament,
      courseLabel: '5K COURSE',
      title: '기획 & 결핍 검증 코스',
      sub: '가장 가벼운 첫 랩타임: 고객 결핍 발굴과 BM 린 캔버스 1장 완주',
      price: '29,000원',
      originalPrice: '59,000원',
      badge: 'PACE 01 · FOUNDATION',
      color: '#3B82F6',
      badgeStyle: 'athletic-badge-blue',
      milestones: [
        'Week 01 Split: 고객 결핍 발굴 & PPF(Product-Person Fit) 분석',
        'Week 02 Split: Aside 24h 자율 브라우저로 경쟁사 데이터 자동 수집',
        'Week 03 Finish: 실제 돈 버는 모델이 담긴 BM 린 캔버스 1장 완주'
      ],
      deliverable: 'Aside 24h 시장 감시 봇 & 검증된 BM 린 캔버스 1장',
      guideTitle: '1인 창업 필수 용어집 & 고객 결핍 검증 린 캔버스 (PDF)',
      guideDesc: '내 아이디어가 실제 시장에서 돈이 되는지 30초 만에 판별하는 검증 체크리스트입니다.'
    },
    {
      id: 'launch' as const,
      bib: 'BIB #10K',
      stepNum: 2,
      legoStep: 3,
      icon: RocketLaunch,
      courseLabel: '10K COURSE',
      title: '외주비 0원 런칭 배포 코스',
      sub: '내 손으로 만드는 실전 자신감: Cursor + Supabase 상용 웹 라이브 배포',
      price: '59,000원',
      originalPrice: '119,000원',
      badge: 'PACE 02 · BUILD & DEPLOY',
      color: '#CCFF00',
      badgeStyle: 'athletic-badge-volt',
      milestones: [
        'Week 01 Split: Cursor + Supabase 조립 & 실시간 DB 아키텍처 셋업',
        'Week 02 Split: Next.js 14 기반 반응형 웹서비스 라이브 배포',
        'Week 03 Finish: PG 결제창 및 간편결제 모듈 100% 연동 완료'
      ],
      deliverable: '외주비 0원, 내 도메인으로 작동하는 실제 상용 결제 웹 1개 라이브 배포',
      guideTitle: '외주비 0원 1인 상용 웹 배포 아키텍처 로드맵 (PDF)',
      guideDesc: 'Cursor와 Supabase를 조립해 내 손으로 실제 결제창을 띄우는 가이드입니다.'
    },
    {
      id: 'revenue' as const,
      bib: 'BIB #HALF',
      stepNum: 3,
      legoStep: 4,
      icon: Target,
      courseLabel: 'HALF MARATHON',
      title: '메타 알고리즘 & 첫 결제 코스',
      sub: '페이스메이커와 함께 결승선 돌파: 스레드 500만 뷰 훅 & 첫 유료 결제',
      price: '89,000원',
      originalPrice: '179,000원',
      badge: 'PACE 03 · ★인기 코스',
      color: '#FF5500',
      badgeStyle: 'athletic-badge-orange',
      isPopular: true,
      milestones: [
        'Week 01 Split: 메타 추천 알고리즘(Sentence-BERT)과 체류 시간 10배 훅 설계',
        'Week 02 Split: 광고/피드 첫 문장과 상세페이지 1:1 결속 퍼널 완성',
        'Week 03 Finish: 첫 번째 실제 고객 유료 결제 알림 수신 (결승선 돌파)'
      ],
      deliverable: '스레드 500만 뷰 훅 구조도 & CVR 8.6%+ 고전환 결제 퍼널 & 첫 실제 결제',
      guideTitle: '‘훅 자료집’만 보셨나요? 왜 안 터지는지 그 구조를 알려드립니다 (PDF)',
      guideDesc: '시중 훅 100선 복붙 대신, 메타 추천 알고리즘의 체류 시간 10배 견인 구조 리포트입니다.'
    }
  ];

  const currentTrack = COURSES.find((t) => t.id === selectedTrackId) || COURSES[2];

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    setIsDownloaded(true);
  };

  const openCrewModal = (trackId: 'validate' | 'launch' | 'revenue' | 'vip') => {
    setModalTrackId(trackId);
    setCrewSubmitted(false);
    setIsCrewModalOpen(true);
  };

  const handleCrewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!crewName.trim() || !crewContact.trim()) return;
    setCrewSubmitted(true);
  };

  const proofTelemetry = [
    { value: '5,000,000+', label: '누적 뷰수 실측 데이터', sub: '스레드 2개 계정 실측 DB 로그' },
    { value: 'Meta Certified', label: '글로벌 공인 전문가', sub: 'Media Planning Professional' },
    { value: '월 $42', label: '초경량 인프라 비용', sub: '4개 상용 서비스 실운영 기준' },
    { value: '8.6%', label: '실측 구매 전환율 (CVR)', sub: '메타 광고 1:1 결속 퍼널' }
  ];

  const faqs = [
    {
      q: '어릴 때 레고 좋아했던 사람을 위한 AI 빌더 러닝크루란 무엇인가요?',
      a: '벽돌을 굽는 화학 공식을 몰라도 레고 블록만 있으면 거대한 성을 지을 수 있었습니다. 복잡한 코딩 문법을 밑바닥부터 외우지 않고, 검증된 기획·지능·퍼널·인프라 블록을 조립해 내 제품과 첫 현금 흐름을 만드는 온라인 빌더 러닝크루입니다. 혼자 뛰면 작심삼일이지만, 크루와 함께 달리면 3주 만에 첫 결승선을 넘습니다.'
    },
    {
      q: 'AI FOMO가 심한데, 비개발자도 정말 3주 만에 내 손으로 제품을 띄우고 자신감을 얻을 수 있나요?',
      a: '네. 수많은 AI 툴 소식에 불안해하며 툴만 모으는 상태에서 벗어나는 유일한 방법은 "내 손으로 끝까지 완주해보는 경험"입니다. Cursor, Supabase, Cloudflare, 간편결제 모듈을 조립형 파이프라인으로 연결해, 외주 개발비 0원으로 내 도메인에 결제창을 띄우는 압도적인 실전 자신감을 얻게 됩니다.'
    },
    {
      q: 'aizaler의 메타 알고리즘과 AI 지능은 시중 강의와 무엇이 다른가요?',
      a: '뜬구름 잡는 복붙 자료는 다루지 않습니다. Meta 공인 미디어 플래닝 전문가가 해부한 Sentence-BERT 텍스트 임베딩, 체류 시간(Dwell Time) 가중치 등 실제 알고리즘의 동작 구조를 역공학해 내 손으로 라이브 배포하고 첫 결제를 뚫는 실전만을 다룹니다.'
    }
  ];

  return (
    <div className="relative overflow-hidden space-y-20 sm:space-y-28 pt-8 sm:pt-14 pb-24 text-white">
      {/* ── Ambient Athletic Aura Grid ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] grid-track-bg pointer-events-none -z-10 opacity-30" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] sm:w-[950px] h-[550px] bg-gradient-to-tr from-blue-600/15 via-[#CCFF00]/10 to-orange-500/10 blur-[140px] rounded-full pointer-events-none -z-10 animate-apple-glow" />

      {/* ══════════════════════════════════════════════════════
          [HERO] AI FOMO 탈출 & 3주 결승선 완주 헤드라인
      ══════════════════════════════════════════════════════ */}
      <section className="toss-container text-center space-y-7 sm:space-y-9 max-w-4xl mx-auto">
        <div className="space-y-4 max-w-3xl mx-auto">
          {/* Running Crew Status Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono font-bold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
            <span className="text-[#CCFF00]">ONLINE AI BUILDER RUNNING CREW</span>
            <span className="text-gray-500">|</span>
            <span className="text-gray-300">1기 15명 한정 모집</span>
          </div>

          {/* Main Keynote Punchline */}
          <h1 className="text-3xl sm:text-5xl lg:text-[58px] font-black leading-[1.12] tracking-tighter text-white">
            AI FOMO에서 탈출해,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#CCFF00] to-emerald-400">
              3주 만에 첫 결승선
            </span>을 넘습니다.
          </h1>

          <p className="text-base sm:text-lg text-gray-300 font-medium leading-relaxed max-w-2xl mx-auto">
            남들의 AI 성공담에 불안해하며 툴만 모으던 시간은 끝났습니다.<br className="hidden sm:inline" />
            복잡한 코딩 대신 AI 블록을 조립해 <span className="text-white font-black underline decoration-[#CCFF00] decoration-2 underline-offset-4">내 손으로 직접 만드는 실전 자신감</span>을 얻고,
            런칭과 첫 결제까지 페이스메이커와 함께 완주하세요.
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#courses"
              className="athletic-btn-volt px-7 py-4 text-xs sm:text-sm font-black rounded-2xl flex items-center gap-2 shadow-lg active:scale-95 tracking-wide"
            >
              <FlagCheckered size={18} weight="bold" />
              <span>러닝 코스 선택하기 ↓</span>
            </a>
            <a
              href="#lab"
              className="px-6 py-4 rounded-2xl bg-white/[0.05] hover:bg-white/[0.09] text-white text-xs sm:text-sm font-bold border border-white/[0.1] flex items-center gap-2 transition-all shadow-xs"
            >
              <Timer size={18} weight="bold" className="text-[#CCFF00]" />
              <span>3D 트레이닝 랩 체험</span>
            </a>
          </div>
        </div>

        {/* Runner Telemetry Split HUD (Stat HUD) */}
        <div className="athletic-card rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto border border-white/[0.08] shadow-2xl relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
            {proofTelemetry.map((stat, idx) => (
              <div key={idx} className={`pt-3 sm:pt-0 ${idx > 0 ? 'sm:pl-4 lg:pl-6' : ''} text-center sm:text-left space-y-1`}>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight tabular-nums font-mono">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-gray-200">{stat.label}</div>
                <div className="text-[10px] font-mono text-gray-400">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          [STEP 1 / COURSE] 3대 러닝 코스 & 레이스 넘버(Bibs)
      ══════════════════════════════════════════════════════ */}
      <section id="courses" className="toss-container scroll-mt-24 space-y-8 max-w-4xl mx-auto">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-black athletic-badge-volt">
            <span>COURSE 01. SELECT YOUR PACE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            이번 3주, 당신이 결승선을 넘을 코스는?
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-lg mx-auto">
            원하는 코스를 탭하면 3주 페이싱 마일스톤과 3D 트레이닝 블록이 즉시 동기화됩니다.
          </p>
        </div>

        {/* 3대 레이스 빕 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
          {COURSES.map((t) => {
            const isSelected = selectedTrackId === t.id;
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setSelectedTrackId(t.id)}
                className={`p-6 rounded-3xl transition-all border flex flex-col justify-between gap-5 text-left relative overflow-hidden active:scale-[0.98] ${
                  isSelected
                    ? 'athletic-card-active'
                    : 'athletic-card hover:border-white/20'
                }`}
              >
                {/* Upper Bib Header */}
                <div className="flex items-center justify-between w-full">
                  <span className="text-[11px] font-mono font-black tracking-widest text-gray-400">
                    {t.bib}
                  </span>
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-sm"
                    style={{
                      backgroundColor: isSelected ? '#CCFF00' : 'rgba(255,255,255,0.06)',
                      color: isSelected ? '#080C14' : t.color
                    }}
                  >
                    <Icon size={20} weight="bold" />
                  </div>
                </div>

                {/* Course Title & Description */}
                <div className="space-y-1.5">
                  <div className="text-[10px] font-mono font-bold tracking-wider text-gray-400 uppercase">
                    {t.courseLabel}
                  </div>
                  <h3 className="text-lg font-black leading-snug text-white">
                    {t.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-gray-300">
                    {t.sub}
                  </p>
                </div>

                {/* Pricing & Earlybird Tag */}
                <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-gray-500 line-through mr-1 font-mono">
                      {t.originalPrice}
                    </span>
                    <span className={`text-base sm:text-lg font-black font-mono ${
                      isSelected ? 'text-[#CCFF00]' : 'text-white'
                    }`}>
                      {t.price}
                    </span>
                  </div>
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-[#CCFF00] text-[#080C14]' : 'bg-white/[0.08] text-gray-300'
                  }`}>
                    1기 얼리버드
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          [STEP 2 / PACING] 3주 페이싱 맵 & 피니셔 메달 쇼케이스
      ══════════════════════════════════════════════════════ */}
      <section id="pacing" className="toss-container scroll-mt-24 space-y-6 max-w-4xl mx-auto">
        <div className="athletic-card rounded-3xl p-6 sm:p-9 border border-white/[0.08] shadow-xl space-y-7 text-left relative overflow-hidden">
          {/* Subtle Top Glow Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] split-line-glow" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.08] pb-5">
            <div>
              <div className="text-xs font-mono font-bold text-[#CCFF00]">COURSE 02. 3-WEEK PACING MAP</div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                [{currentTrack.title}] 3주간 돌파하는 스플릿 구간
              </h3>
            </div>
            <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full athletic-badge-volt self-start sm:self-auto">
              참가비 {currentTrack.price}
            </span>
          </div>

          {/* 주차별 마일스톤 스플릿 타임 (Week 01 ~ 03) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            {currentTrack.milestones.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-1.5 hover:border-white/20 transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-black text-[#CCFF00]">
                    SPLIT 0{idx + 1}
                  </span>
                  <span className="text-[9px] font-mono text-gray-500 uppercase">
                    {idx === 2 ? 'FINISH LINE' : `WEEK 0${idx + 1}`}
                  </span>
                </div>
                <div className="text-xs font-bold text-gray-200 leading-snug">
                  {item.split(': ')[1] || item}
                </div>
              </div>
            ))}
          </div>

          {/* 최종 결과물 강조 바 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-950/60 via-slate-900 to-emerald-950/40 border border-white/[0.1] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-0.5">
              <div className="text-[10px] font-mono font-bold text-[#CCFF00]">
                🎯 결승선 통과 시 내 손에 쥐어지는 결과물:
              </div>
              <div className="text-xs sm:text-sm font-black text-white">
                {currentTrack.deliverable}
              </div>
            </div>
            <span className="text-[11px] font-mono text-emerald-400 shrink-0 font-bold">
              ✓ 100% 라이브 완주 보장
            </span>
          </div>

          {/* 👑 피니셔 메달 쇼케이스: 실물 화이트 서밋 크라운 브릭 */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-transparent border border-amber-400/30 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-300 to-amber-500 text-black flex items-center justify-center text-2xl shadow-lg shrink-0 font-black">
              👑
            </div>
            <div className="space-y-1 text-xs">
              <div className="font-black text-white text-sm flex items-center gap-2">
                <span>3주 완주 러너 특권: 실물 ‘화이트 서밋 크라운 브릭’ 피니셔 트로피</span>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40">
                  LIMITED TROPHY
                </span>
              </div>
              <div className="text-gray-300 leading-relaxed text-xs">
                마라톤 완주 메달처럼, 책상 위에 당당히 올려둘 수 있는 실물 세라믹 트로피와 고유 시리얼 넘버 뱃지를 자택으로 직배송해 드립니다.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          [STEP 3 / ACTION] 크루 합류 or 무료 스타터 킷
      ══════════════════════════════════════════════════════ */}
      <section id="action" className="toss-container scroll-mt-24 max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-black athletic-badge-volt">
            <span>COURSE 03. TAKE ACTION & CROSS THE LINE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            결승선을 향해 출발하는 두 가지 방법
          </h2>
          <p className="text-xs sm:text-sm text-gray-400">
            크루원들과 함께 달릴 수도 있고, 무료 스타터 리포트로 먼저 페이스를 가늠해볼 수도 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
          {/* 옵션 1: 1기 러닝크루 즉시 참가 */}
          <div className="athletic-card rounded-3xl p-7 border border-[#CCFF00]/40 shadow-xl flex flex-col justify-between space-y-6 bg-gradient-to-br from-[#121826] to-[#1a2337]">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full athletic-badge-volt text-[10px] font-mono font-black">
                <Users size={12} weight="fill" />
                <span>OPTION 01 · 1기 러닝크루 참가 (15명 한정)</span>
              </div>
              <h3 className="text-xl font-black text-white">
                1기 러닝크루 참가 신청 ({currentTrack.price})
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                3주간 매주 블록을 인증하고, 페이스메이커 가이드를 받으며 서로의 첫 고객이 되어주는 소수 정예(15명 한정) 빌더 러닝크루입니다.
              </p>
            </div>

            <button
              type="button"
              onClick={() => openCrewModal(currentTrack.id)}
              className="w-full py-4 rounded-xl athletic-btn-volt text-xs font-black transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95"
            >
              <span>{currentTrack.title} 크루 참가 신청 ({currentTrack.price})</span>
              <ArrowRight size={14} weight="bold" />
            </button>
          </div>

          {/* 옵션 2: 가이드북 무료 먼저 받기 */}
          <div className="athletic-card rounded-3xl p-7 border border-white/[0.08] shadow-lg flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] text-gray-300 text-[10px] font-mono font-bold">
                <DownloadSimple size={12} weight="bold" />
                <span>OPTION 02 · 러너 무료 스타터 킷</span>
              </div>
              <h3 className="text-xl font-black text-white">
                {currentTrack.id === 'revenue'
                  ? '‘훅 자료집’만 보셨나요? 구조 해부서 (PDF)'
                  : `${currentTrack.title} 가이드북 (PDF)`}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {currentTrack.guideDesc}
              </p>
            </div>

            {isDownloaded ? (
              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center justify-center gap-2 font-mono">
                <CheckCircle size={18} weight="fill" />
                <span>가이드북이 이메일로 즉시 발송되었습니다!</span>
              </div>
            ) : (
              <form onSubmit={handleDownload} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="이메일 주소 입력"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-xs text-white placeholder-gray-500 outline-none focus:border-[#CCFF00] flex-1 font-mono"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl bg-white text-[#080C14] hover:bg-gray-100 text-xs font-black shrink-0 transition-all active:scale-95"
                >
                  무료 받기
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 👑 VIP 1:1 페이서 세션 배너 */}
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#0E1526] via-[#151F38] to-[#0A0E1A] border border-amber-400/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <Crown size={22} weight="fill" className="text-amber-400 shrink-0" />
            <div>
              <span className="font-black text-amber-300 text-sm mr-2">VIP 1:1 파운더 페이스메이킹:</span>
              <span className="text-gray-300">
                Meta Certified 파운더와 50분간 1:1로 90일 실행 Action Blueprint를 직접 처방받고 싶다면
              </span>
            </div>
          </div>
          <Link
            href="/career"
            className="px-5 py-2.5 rounded-xl bg-amber-400 text-black hover:bg-amber-300 font-black shrink-0 text-center transition-colors"
          >
            VIP 세션 신청 →
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          [TRAINING LAB] 3D 레고 시뮬레이터 & AI 아키텍트 상담
      ══════════════════════════════════════════════════════ */}
      <section id="lab" className="toss-container scroll-mt-24 space-y-8 max-w-4xl mx-auto">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-black athletic-badge-volt">
            <span>BUILDER TRAINING LAB</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            3D 공간에서 직접 조립해 보세요
          </h2>
          <p className="text-xs sm:text-sm text-gray-400">
            복잡한 코딩을 암기하는 대신, 검증된 블록을 조립하는 방식을 시뮬레이션할 수 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-6">
            <LegoStackSimulator externalStep={currentTrack.legoStep} />
          </div>
          <div className="lg:col-span-6">
            <BuilderConsultantChat onStepDiagnosed={() => {}} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          [FAQ] 러닝크루 자주 묻는 질문
      ══════════════════════════════════════════════════════ */}
      <section id="faq" className="toss-container scroll-mt-24 space-y-6 max-w-3xl mx-auto">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-black text-[#CCFF00]">
            <span>RUNNER FAQ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">자주 묻는 질문</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="athletic-card rounded-2xl overflow-hidden border border-white/[0.08]">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 flex items-center justify-between text-left transition-colors hover:bg-white/[0.03]"
                >
                  <div className="flex items-start gap-3 pr-2">
                    <span className="text-xs font-mono font-black text-[#CCFF00]">Q.</span>
                    <span className="font-bold text-xs sm:text-sm text-white leading-snug">{faq.q}</span>
                  </div>
                  <CaretDown
                    size={16}
                    weight="bold"
                    className={`transition-transform duration-200 shrink-0 text-gray-400 ${isOpen ? 'rotate-180 text-[#CCFF00]' : ''}`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0">
                    <p className="pt-3 border-t border-white/[0.06] text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="pt-3 text-center">
          <Link href="/about" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#CCFF00] hover:underline">
            aizaler 스튜디오 철학 & 파운더 소개 보기 <ArrowRight size={13} weight="bold" />
          </Link>
        </div>
      </section>

      {/* ── 1기 러닝크루 참가 신청 모달 (Dark Athletic Style) ── */}
      {isCrewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="athletic-card rounded-3xl p-7 sm:p-9 max-w-lg w-full border border-white/[0.15] shadow-2xl relative space-y-6 bg-[#0E1422] text-white">
            <button
              onClick={() => setIsCrewModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/[0.1] text-gray-400 hover:text-white transition-colors"
            >
              <X size={18} weight="bold" />
            </button>

            <div className="space-y-1.5 text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full athletic-badge-volt text-[11px] font-mono font-black">
                <Users size={13} weight="fill" />
                <span>1ST BATCH RUNNING CREW</span>
              </div>
              <h3 className="text-xl font-black text-white">
                {COURSES.find((t) => t.id === modalTrackId)?.title || '1기 크루'} 참가 신청
              </h3>
              <p className="text-xs text-gray-300">
                함께 3주간 블록을 조립하고 완주할 소수 정예 러너에 합류하세요.
              </p>
            </div>

            {crewSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                <CheckCircle size={36} weight="fill" className="text-emerald-400 mx-auto" />
                <div className="text-base font-black text-white">
                  1기 크루 신청이 완료되었습니다!
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  24시간 이내에 입력해 주신 연락처/이메일로 온보딩 가이드와 비공개 크루 채널 초대 링크를 전송해 드립니다.
                </p>
                <button
                  onClick={() => setIsCrewModalOpen(false)}
                  className="mt-3 px-5 py-2.5 rounded-xl athletic-btn-volt text-xs font-black"
                >
                  확인 완료
                </button>
              </div>
            ) : (
              <form onSubmit={handleCrewSubmit} className="space-y-4 text-left">
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-between text-xs">
                  <span className="font-bold text-gray-300">선택 코스:</span>
                  <span className="font-black text-[#CCFF00] font-mono">
                    {COURSES.find((t) => t.id === modalTrackId)?.title} ({COURSES.find((t) => t.id === modalTrackId)?.price})
                  </span>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-200">성함 / 러너 닉네임</label>
                  <input
                    type="text"
                    required
                    placeholder="홍길동"
                    value={crewName}
                    onChange={(e) => setCrewName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-xs text-white placeholder-gray-500 outline-none focus:border-[#CCFF00]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-200">이메일 주소 (온보딩 및 비공개 크루 채널 초대장)</label>
                  <input
                    type="email"
                    required
                    placeholder="runner@example.com"
                    value={crewContact}
                    onChange={(e) => setCrewContact(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-xs text-white placeholder-gray-500 outline-none focus:border-[#CCFF00] font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-200">이번 3주 동안 만들고 싶은 아이템 / 목표 한 줄</label>
                  <input
                    type="text"
                    placeholder="예: 비개발자용 업무 자동화 템플릿 웹서비스 배포"
                    value={crewItemGoal}
                    onChange={(e) => setCrewItemGoal(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-xs text-white placeholder-gray-500 outline-none focus:border-[#CCFF00]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl athletic-btn-volt text-xs font-black transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95 mt-2"
                >
                  <PaperPlaneTilt size={16} weight="bold" />
                  <span>1기 러닝크루 참가 신청 완료하기</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
