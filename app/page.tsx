'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Blocks,
  Sparkles,
  Flame,
  Compass,
  CheckCircle2,
  ArrowRight,
  Layers,
  Download,
  Users,
  X,
  Zap,
  HeartHandshake,
  Cpu,
} from 'lucide-react';
import { PRODUCTS, Product, BrickStage } from '../data/products';
import LegoStackSimulator from '../components/LegoStackSimulator';
import BuilderConsultantChat from '../components/BuilderConsultantChat';

export default function Home() {
  const [activeBrickStep, setActiveBrickStep] = useState<number>(2);
  const [selectedStageFilter, setSelectedStageFilter] = useState<'ALL' | BrickStage>('ALL');

  // Quick Checkout / Waitlist / Free Kit Modals
  const [quickBuyProduct, setQuickBuyProduct] = useState<Product | null>(null);
  const [buyerName, setBuyerName] = useState('');
  const [buyerContact, setBuyerContact] = useState('');
  const [buyerNote, setBuyerNote] = useState('');
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const [freeKitEmail, setFreeKitEmail] = useState('');
  const [freeKitSent, setFreeKitSent] = useState(false);

  const [clubEmail, setClubEmail] = useState('');
  const [clubJoined, setClubJoined] = useState(false);

  const filteredProducts =
    selectedStageFilter === 'ALL'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.brickStage === selectedStageFilter);

  const threadsProduct = PRODUCTS.find((p) => p.id === '1')!;
  const metaProduct = PRODUCTS.find((p) => p.id === '3')!;
  const careerProduct = PRODUCTS.find((p) => p.id === '4')!;

  const handleQuickOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!buyerName.trim() || !buyerContact.trim()) return;
    setOrderSubmitted(true);
  };

  const closeQuickBuyModal = () => {
    setQuickBuyProduct(null);
    setOrderSubmitted(false);
    setBuyerName('');
    setBuyerContact('');
    setBuyerNote('');
  };

  const handleFreeKitSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!freeKitEmail.trim()) return;
    setFreeKitSent(true);
  };

  const handleClubSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clubEmail.trim()) return;
    setClubJoined(true);
  };

  const getStageBadgeClass = (stage: BrickStage) => {
    if (stage === 'STAGE_1') return 'badge-stage1';
    if (stage === 'STAGE_2') return 'badge-stage2';
    if (stage === 'STAGE_3') return 'badge-stage3';
    return 'badge-career';
  };

  const getStageBorderClass = (stage: BrickStage) => {
    if (stage === 'STAGE_1') return 'border-amber-400/35 hover:border-amber-400';
    if (stage === 'STAGE_2') return 'border-emerald-500/40 hover:border-emerald-400';
    if (stage === 'STAGE_3') return 'border-rose-500/35 hover:border-rose-400';
    return 'border-blue-500/45 hover:border-blue-400';
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-white selection:bg-emerald-400 selection:text-slate-950">
      {/* =========================================================
          1. HERO SECTION: 어릴 때 블록 조립하는 거 좋아하셨나요?
             (🟡 Stage 1 ➔ 🟢 Stage 2 ➔ 🔴 Stage 3 | 🔵 Career 1:1)
         ========================================================= */}
      <section className="relative pt-14 pb-24 md:pt-24 md:pb-32 px-4 sm:px-6 overflow-hidden border-b border-white/10">
        {/* Background Studio Glow & Brick Grid */}
        <div className="absolute inset-0 bg-brick-grid opacity-35 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[420px] bg-gradient-to-tr from-amber-500/15 via-emerald-500/15 to-blue-600/15 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Top Story Badge */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-7">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs md:text-sm font-bold">
              <Blocks className="w-4 h-4 text-amber-400" />
              어릴 때 블록 조립하는 거 좋아하셨나요?
            </span>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-200 text-xs font-mono">
              <span>🟡 STAGE 1</span>
              <span>➔</span>
              <span>🟢 STAGE 2</span>
              <span>➔</span>
              <span>🔴 STAGE 3</span>
              <span className="text-white/30">|</span>
              <span className="text-blue-400">🔵 CAREER 1:1</span>
            </span>
          </div>

          {/* Main Headline */}
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.15] mb-6 text-white">
              나를 위해 조립한 작은 블록이,
              <br />
              <span className="text-gradient-green">내 첫 번째 수익원</span>이 됩니다.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
              거창한 창업이나 외주 개발부터 시작하지 마세요.
              <br className="hidden sm:inline" />
              내 일상의 불편함을 해결하는 <strong className="text-amber-300 font-semibold">🟡 기초 도구(Stage 1)</strong>를 만들고,{' '}
              <strong className="text-emerald-300 font-semibold">🟢 스레드 500만 뷰 & 메타 광고(Stage 2)</strong>로 수익화한 뒤,{' '}
              <strong className="text-rose-300 font-semibold">🔴 1인 풀스택 시스템(Stage 3)</strong>으로 확장하는 실전 조립 설명서입니다.
            </p>
          </div>

          {/* 3 Stages + 1 Separate Career Track Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-10">
            {/* 🟡 Stage 1: Yellow */}
            <a
              href="#catalog"
              onClick={() => setSelectedStageFilter('STAGE_1')}
              className="technic-card rounded-2xl p-5 border border-amber-400/35 hover:border-amber-400 transition-all group"
            >
              <div className="flex items-center justify-between mb-2.5">
                <span className="badge-stage1 text-[11px] font-mono font-bold px-2.5 py-1 rounded-md">
                  🟡 STAGE 01 · 노란 브릭
                </span>
                <span className="text-xs font-mono text-amber-300">입문 조립 →</span>
              </div>
              <h3 className="text-base font-bold text-white mb-1">나를 위한 첫 AI 도구 조립</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                코딩 몰라도 내 반복 업무를 자동화하고 첫 번째 AI 비서(.skills)를 내 컴퓨터에 장착합니다.
              </p>
            </a>

            {/* 🟢 Stage 2: Green (Main Flagship) */}
            <a
              href="#monetize"
              className="technic-card rounded-2xl p-5 border-2 border-emerald-500/60 bg-gradient-to-b from-emerald-950/40 to-[#0E1526] hover:border-emerald-400 transition-all group relative"
            >
              <div className="absolute -top-2.5 right-4 bg-emerald-400 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                파운더 주력 무기
              </div>
              <div className="flex items-center justify-between mb-2.5">
                <span className="badge-stage2 text-[11px] font-mono font-bold px-2.5 py-1 rounded-md">
                  🟢 STAGE 02 · 초록 브릭
                </span>
                <span className="text-xs font-mono text-emerald-300">수익화 엔진 →</span>
              </div>
              <h3 className="text-base font-bold text-white mb-1">스레드 500만 뷰 & 메타 수익화</h3>
              <p className="text-xs text-slate-200 leading-relaxed">
                만든 도구에 오가닉 트래픽(500만 뷰)과 메타 고전환 광고(CVR 8.6%)를 붙여 매출을 만듭니다.
              </p>
            </a>

            {/* 🔴 Stage 3: Red */}
            <a
              href="#catalog"
              onClick={() => setSelectedStageFilter('STAGE_3')}
              className="technic-card rounded-2xl p-5 border border-rose-500/35 hover:border-rose-400 transition-all group"
            >
              <div className="flex items-center justify-between mb-2.5">
                <span className="badge-stage3 text-[11px] font-mono font-bold px-2.5 py-1 rounded-md">
                  🔴 STAGE 03 · 빨간 브릭
                </span>
                <span className="text-xs font-mono text-rose-300">풀스택 시스템 →</span>
              </div>
              <h3 className="text-base font-bold text-white mb-1">월 $42 풀스택 & 터미널 자동화</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                외주비 0원으로 결제창 달린 웹서비스 4개를 직접 배포하고 터미널로 10명분 생산성을 냅니다.
              </p>
            </a>

            {/* 🔵 Career Track: Blue (Separate Special Track) */}
            <a
              href="#career-spotlight"
              className="technic-card rounded-2xl p-5 border-2 border-blue-500/60 bg-gradient-to-b from-blue-950/40 to-[#0E1526] hover:border-blue-400 transition-all group relative"
            >
              <div className="absolute -top-2.5 right-4 bg-blue-500 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                별도 스페셜 트랙
              </div>
              <div className="flex items-center justify-between mb-2.5">
                <span className="badge-career text-[11px] font-mono font-bold px-2.5 py-1 rounded-md">
                  🔵 CAREER · 파란 트랙
                </span>
                <span className="text-xs font-mono text-blue-300">1:1 의사결정 →</span>
              </div>
              <h3 className="text-base font-bold text-white mb-1">1:1 커리어 & 빌더 의사결정</h3>
              <p className="text-xs text-slate-200 leading-relaxed">
                공기업·주재원 퇴사 파운더와 함께 퇴사·부업 손익과 90일 수익화 로드맵을 1:1로 설계합니다.
              </p>
            </a>
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href="#monetize"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl btn-stage2-green text-sm md:text-base flex items-center justify-center gap-2.5"
            >
              <Flame className="w-5 h-5" />
              <span>🟢 스레드 500만 뷰 · 메타 수익화 공략집 보기</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/career"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl btn-career-blue text-sm md:text-base flex items-center justify-center gap-2.5"
            >
              <Compass className="w-5 h-5" />
              <span>🔵 1:1 커리어 & 빌더 의사결정 세션 (잔여 3석)</span>
            </Link>
          </div>

          {/* Real Telemetry Proof HUD */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 md:p-5 text-center">
              <div className="text-2xl md:text-3xl font-black font-mono text-emerald-400 mb-1">5,000,000+</div>
              <div className="text-xs text-slate-400">2개 계정 스레드 실측 누적 조회수</div>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 md:p-5 text-center">
              <div className="text-xl md:text-2xl font-black font-mono text-emerald-300 mb-1">Meta Certified</div>
              <div className="text-xs text-slate-400">메타 공식 인증 미디어 플래닝 프로페셔널</div>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 md:p-5 text-center">
              <div className="text-2xl md:text-3xl font-black font-mono text-amber-400 mb-1">CVR 8.6%</div>
              <div className="text-xs text-slate-400">소액 메타 광고 ➔ 랜딩 결제 전환율</div>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 md:p-5 text-center">
              <div className="text-2xl md:text-3xl font-black font-mono text-rose-400 mb-1">월 $42</div>
              <div className="text-xs text-slate-400">4개 라이브 프로덕트 통합 서버·AI 유지비</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. FOUNDER STORY & 3-STAGE BRICK ROADMAP (#roadmap)
         ========================================================= */}
      <section id="roadmap" className="py-20 md:py-28 px-4 sm:px-6 border-b border-white/10 bg-[#080D1A]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400 block mb-3">
              WHY MODULAR BRICK ARCHITECTURE?
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight mb-5">
              “내가 쓰려고 만든 작은 도구들이 모이면,
              <br />
              퇴사 후 나를 지켜주는 가장 단단한 성(Castle)이 됩니다.”
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              공기업과 해외 주재원으로 7년을 일하며 늘 ‘내 것’에 대한 갈증이 있었습니다. 처음부터 대단한 스타트업을 차린 게 아닙니다.
              아이 이름을 지으려고 <strong className="text-white">명사도(Baby Naming AI)</strong>를 조립했고, 학군지를 비교하려고{' '}
              <strong className="text-white">맹모인사이트(Edu-Estate Map)</strong>를 만들었으며, 영어 표현을 정리하려고{' '}
              <strong className="text-white">칠구영어</strong>를 만들었습니다. 그리고 그 도구들을{' '}
              <strong className="text-emerald-300">스레드와 메타 광고</strong>로 세상에 알리자 월급 외 현금흐름이 만들어졌습니다.
            </p>
          </div>

          {/* 3-Stage Progression Cards (🟡 Stage 1 -> 🟢 Stage 2 -> 🔴 Stage 3) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* 🟡 Stage 1: Yellow */}
            <div className="technic-card rounded-3xl p-7 border border-amber-400/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="badge-stage1 text-xs font-mono font-bold px-3 py-1 rounded-lg">
                    🟡 STAGE 01 · 노란 브릭
                  </span>
                  <span className="text-xs font-mono text-amber-300 font-bold">입문 · 내 도구 조립</span>
                </div>
                <h3 className="text-xl font-black text-white mb-3">
                  나를 위한 작은 도구 조립
                  <span className="block text-sm font-medium text-amber-300 mt-1">
                    “가장 확실한 첫 고객은 어제의 나 자신입니다”
                  </span>
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  비개발자라도 괜찮습니다. 손에 잡히는 기초 블록을 맞추듯, 내 문체와 업무를 기억하는 AI 에이전트 스킬(.skills)을 장착해 매일 겪는 반복 업무부터 자동화합니다.
                </p>
                <ul className="space-y-2.5 text-xs text-slate-300 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>[무료] 스레드 500만 뷰 훅 구조도 & 첫 조립 입문서</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>나를 위한 첫 AI 일꾼(.skills) & 자율 실행 킷</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-400">기초 자동화 & 입문 블록</span>
                <a
                  href="#catalog"
                  onClick={() => setSelectedStageFilter('STAGE_1')}
                  className="text-amber-400 font-bold hover:underline"
                >
                  🟡 Stage 1 블록 보기 →
                </a>
              </div>
            </div>

            {/* 🟢 Stage 2: Green (Main Monetization Engine) */}
            <div className="technic-card rounded-3xl p-7 border-2 border-emerald-500/60 bg-gradient-to-b from-emerald-950/35 to-[#0E1526] flex flex-col justify-between relative">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="badge-stage2 text-xs font-mono font-bold px-3 py-1 rounded-lg">
                    🟢 STAGE 02 · 초록 브릭
                  </span>
                  <span className="text-xs font-mono text-emerald-300 font-bold">핵심 · 트래픽 & 수익화</span>
                </div>
                <h3 className="text-xl font-black text-white mb-3">
                  스레드 500만 뷰 & 메타 광고 엔진
                  <span className="block text-sm font-medium text-emerald-300 mt-1">
                    “아무리 좋은 도구도 발견되지 않으면 0원입니다”
                  </span>
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed mb-6">
                  제가 가장 자신 있는 실전 수익화 영역입니다. 광고비 0원으로 터뜨리는 <strong>스레드 500만 뷰 오가닉 퍼널</strong>과, 일 1만 원으로 결제 전환율 8.6%를 뽑아내는 <strong>Meta 공식 인증 퍼포먼스 광고</strong>를 결합합니다.
                </p>
                <ul className="space-y-2.5 text-xs text-slate-200 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>스레드 500만 뷰 역공학 DB & 1줄 훅(Hook) 템플릿</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Meta Certified 전문가의 CVR 8.6% 고전환 광고 세팅</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-emerald-200 font-semibold">현재 가장 많이 찾는 주력 라인업</span>
                <a href="#monetize" className="text-emerald-300 font-bold hover:underline">
                  🟢 Stage 2 집중 분석 →
                </a>
              </div>
            </div>

            {/* 🔴 Stage 3: Red (Fullstack & CLI System) */}
            <div className="technic-card rounded-3xl p-7 border border-rose-500/35 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="badge-stage3 text-xs font-mono font-bold px-3 py-1 rounded-lg">
                    🔴 STAGE 03 · 빨간 브릭
                  </span>
                  <span className="text-xs font-mono text-rose-300 font-bold">심화 · 1인 풀스택 시스템</span>
                </div>
                <h3 className="text-xl font-black text-white mb-3">
                  월 $42 풀스택 & 터미널 자동화
                  <span className="block text-sm font-medium text-rose-300 mt-1">
                    “정밀한 기어가 맞물려 돌아가는 1인 기업 시스템”
                  </span>
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed mb-6">
                  외주 개발비 수천만 원을 아끼고, <strong>월 고정비 $42로 4개 상용 웹서비스를 무중단 운영</strong>하는 풀스택 아키텍처와 <strong>Claude Code 터미널 자동화</strong>로 혼자서 10명분 생산성을 완성합니다.
                </p>
                <ul className="space-y-2.5 text-xs text-slate-200 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>외주비 0원·월 $42 상용 웹서비스 4개 풀스택 설계도</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>Claude Code 터미널 조립 & 멀티 프로젝트 자동화</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-rose-200/90">고마진 1인 테크 스튜디오 설계도</span>
                <a
                  href="#catalog"
                  onClick={() => setSelectedStageFilter('STAGE_3')}
                  className="text-rose-300 font-bold hover:underline"
                >
                  🔴 Stage 3 블록 보기 →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. 🟢 STAGE 2 SPOTLIGHT: 스레드 500만 뷰 & 메타 광고 수익화 (#monetize)
         ========================================================= */}
      <section id="monetize" className="py-20 md:py-28 px-4 sm:px-6 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-emerald-600/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-stage2 text-xs font-mono font-bold mb-4">
                <Flame className="w-3.5 h-3.5" />
                🟢 STAGE 02 · THREADS 5M & META ADS MONETIZATION
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                스레드 500만 뷰 오가닉 트래픽에
                <br />
                <span className="text-gradient-green">Meta 공식 인증 고전환 퍼널</span>을 직결하세요
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              단순히 조회수만 높고 결제는 0건인 ‘가짜 바이럴’은 시간 낭비입니다.
              직접 깨지며 검증한 <strong className="text-white">오가닉(스레드) + 페이드(메타 광고) 양날개 수익화 공식</strong>을 그대로 이식해 드립니다.
            </p>
          </div>

          {/* Failure vs Breakthrough Comparison Banner */}
          <div className="technic-card rounded-3xl p-6 md:p-8 mb-10 border border-emerald-500/30 bg-[#0A131E]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-5 p-5 rounded-2xl bg-rose-500/10 border border-rose-500/25">
                <span className="text-[11px] font-mono font-bold text-rose-300 uppercase tracking-wider block mb-1.5">
                  PAST FAILURE · 제가 직접 겪은 참사
                </span>
                <h4 className="text-base md:text-lg font-bold text-white mb-2">
                  “스레드 20만 뷰가 터졌는데, 실제 결제는 단 4건(11만 원)이었습니다.”
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  호기심만 자극하는 글은 구경꾼만 모을 뿐 지갑을 열지 못합니다. 게다가 메타 광고 관리자에서 아무 타겟이나 잡았다가 초반 예산만 날렸던 뼈아픈 시행착오가 있었습니다.
                </p>
              </div>

              <div className="lg:col-span-2 flex justify-center">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 font-mono font-black text-sm">
                  역공학
                </div>
              </div>

              <div className="lg:col-span-5 p-5 rounded-2xl bg-emerald-500/15 border border-emerald-400/40">
                <span className="text-[11px] font-mono font-bold text-emerald-300 uppercase tracking-wider block mb-1.5">
                  PROVEN SYSTEM · 현재 aizaler의 수익화 공식
                </span>
                <h4 className="text-base md:text-lg font-bold text-white mb-2">
                  “2개 계정 500만 뷰 DB화 + 메타 광고 CVR 8.6% 퍼널 완성”
                </h4>
                <p className="text-xs text-slate-200 leading-relaxed">
                  스레드에서 반응이 터진 문장을 그대로 메타 광고 소재와 랜딩페이지 첫 화면에 1:1로 매칭하여, 일 예산 1~3만 원으로도 매일 결제가 찍히는 구조를 만들었습니다.
                </p>
              </div>
            </div>
          </div>

          {/* 2 Flagship Monetization Cards (🟢 Stage 2 Green) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[threadsProduct, metaProduct].map((product) => (
              <div
                key={product.id}
                className="technic-card rounded-3xl p-7 md:p-8 border-2 border-emerald-500/45 hover:border-emerald-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                    <span className="badge-stage2 text-xs font-mono font-bold px-3 py-1 rounded-lg">
                      {product.brickStageLabel}
                    </span>
                    <span className="text-xs font-mono font-bold text-amber-300 bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full">
                      {product.badge}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-black text-white mb-2 leading-snug">
                    {product.title}
                  </h3>
                  <p className="text-sm text-emerald-200/90 font-medium mb-5">{product.tagline}</p>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 mb-6">
                    <div className="text-[11px] font-mono text-slate-400 mb-1">핵심 제공 모듈 (Deliverables)</div>
                    <div className="text-xs md:text-sm font-bold text-white">{product.deliverableSummary}</div>
                  </div>

                  <div className="space-y-2.5 mb-7">
                    {product.features?.slice(0, 4).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-white/10">
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <span className="text-xs text-slate-500 line-through block">
                        정가 {product.originalPrice?.toLocaleString()}원
                      </span>
                      <div className="text-2xl md:text-3xl font-black text-white">
                        {product.salePrice.toLocaleString()}
                        <span className="text-sm font-normal text-slate-400 ml-1">원 (평생 소장)</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-md font-bold">
                      즉시 열람 가능
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      href={`/product/${product.id}`}
                      className="py-3.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold text-xs md:text-sm text-center transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>상세 커리큘럼 보기</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <button
                      type="button"
                      onClick={() => setQuickBuyProduct(product)}
                      className="py-3.5 px-4 rounded-xl btn-stage2-green text-xs md:text-sm flex items-center justify-center gap-1.5"
                    >
                      <Zap className="w-4 h-4" />
                      <span>바이블 즉시 조립</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          4. 🔵 SEPARATE CAREER TRACK: 1:1 커리어 & 빌더 의사결정 세션 (#career-spotlight)
         ========================================================= */}
      <section
        id="career-spotlight"
        className="py-20 md:py-28 px-4 sm:px-6 border-b border-white/10 bg-gradient-to-b from-[#081022] to-[#070B14] relative overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-500/12 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="technic-card rounded-[32px] p-7 sm:p-10 md:p-12 border-2 border-blue-500/50 bg-gradient-to-br from-blue-950/30 via-[#0B1325] to-[#070B14]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-center">
              {/* Left Narrative Column */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="badge-career text-xs font-mono font-bold px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5" />
                    🔵 SPECIAL CAREER TRACK · 1:1 DECISION LAB
                  </span>
                  <span className="text-xs font-mono font-bold text-sky-200 bg-blue-500/15 border border-blue-400/30 px-3 py-1 rounded-full flex items-center gap-1">
                    <HeartHandshake className="w-3.5 h-3.5" />
                    재능기부 + 자아실현 프로젝트
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                  공기업·해외 주재원 퇴사 파운더의
                  <br />
                  <span className="text-gradient-blue">1:1 커리어 & 1인 빌더 의사결정 세션</span>
                </h2>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  단계별 브릭(Stage 1·2·3)과는 별도로, 추후 커뮤니티형 멤버십(Builders Club)을 열기 전 제가 가장 애정을 갖고 주력으로 운영하는 <strong>독립된 파란색(Blue) 1:1 트랙</strong>입니다.
                  과거의 저처럼 <strong className="text-blue-300">“안정적인 직장 안에서의 정체감”</strong>과{' '}
                  <strong className="text-blue-300">“내 프로덕트로 홀로서기”</strong> 사이에서 밤잠 설치는 분들과 마주 앉아, 뜬구름 잡는 위로 대신 가장 현실적인 <strong>90일 실행 로드맵과 수익화 구조</strong>를 함께 조립합니다.
                </p>

                {/* 4 Crossroads Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-4 rounded-2xl bg-[#070B14]/80 border border-blue-500/20">
                    <div className="text-xs font-mono font-bold text-blue-400 mb-1">CASE 01 · 퇴사/독립 타이밍</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      월급을 유지하며 퇴사 전까지 반드시 만들어야 할 안전마진과 최소 현금흐름 지표 설정
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#070B14]/80 border border-blue-500/20">
                    <div className="text-xs font-mono font-bold text-blue-400 mb-1">CASE 02 · 내 경험의 상품화</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      내 직무 경험과 관심사를 어떤 AI 도구(Stage 1)와 수익화 엔진(Stage 2)으로 쪼개어 팔지 기획
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#070B14]/80 border border-blue-500/20">
                    <div className="text-xs font-mono font-bold text-blue-400 mb-1">CASE 03 · 스레드·메타 퍼널 진단</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      현재 운영 중인 계정이나 사이드 프로젝트의 전환 병목을 찾고 즉석에서 카피·퍼널 교정
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#070B14]/80 border border-blue-500/20">
                    <div className="text-xs font-mono font-bold text-blue-400 mb-1">CASE 04 · 공기업/대기업 커리어 피벗</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      물경력 불안을 깨고 시장에서 몸값을 높이는 실전 AI·그로스 포트폴리오 구축 전략
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Booking Card (Blue Theme) */}
              <div className="lg:col-span-5 bg-[#070B14] rounded-3xl p-6 sm:p-8 border border-blue-400/40 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                    <div>
                      <span className="text-xs font-mono text-blue-400 font-bold block">🔵 1:1 DEEP-DIVE SESSION</span>
                      <h3 className="text-lg font-black text-white">50분 밀착 진단 + 90일 로드맵</h3>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold">
                      이번 달 잔여 3석
                    </span>
                  </div>

                  <ul className="space-y-3 text-xs sm:text-sm text-slate-200 mb-6">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>
                        사전 질문지 기반 <strong>맞춤형 시장·수익화 구조 사전 분석</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>
                        <strong>50분 1:1 온라인 집중 세션</strong> 파운더 직강 심층 코칭
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>
                        세션 종료 후 <strong>[나만의 90일 Action Blueprint]</strong> 문서 제공
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>
                        추후 <strong>aizaler Builders Club 멤버십 런칭 시 VIP 우선권</strong> 부여
                      </span>
                    </li>
                  </ul>

                  <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-400/30 mb-6">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-xs text-slate-400 line-through block">정가 250,000원</span>
                        <span className="text-2xl sm:text-3xl font-black text-blue-300">
                          {careerProduct.salePrice.toLocaleString()}원
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-blue-200">멤버십 오픈 전 파일럿 특가</span>
                    </div>
                    <p className="text-[11px] text-slate-300 mt-1.5">
                      * 밀도 높은 피드백을 위해 매월 소수 인원만 선착순으로 진행합니다.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link
                    href="/career"
                    className="w-full py-4 px-5 rounded-xl btn-career-blue text-sm flex items-center justify-center gap-2"
                  >
                    <span>🔵 1:1 커리어 & 빌더 컨설팅 상세 페이지로 이동</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setQuickBuyProduct(careerProduct)}
                    className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-bold text-slate-200 transition-all"
                  >
                    여기서 바로 일정 신청하기 (간편 접수)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          5. FULL MODULAR BRICK CATALOG (#catalog)
         ========================================================= */}
      <section id="catalog" className="py-20 md:py-28 px-4 sm:px-6 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 block mb-2">
                MODULAR BRICK CATALOG
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                내 단계에 필요한 브릭만 골라 조립하세요
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-2">
                종합선물세트처럼 다 사지 않아도 됩니다. 지금 내 병목을 뚫어줄 블록 1개부터 시작하세요.
              </p>
            </div>

            {/* Filter Tabs: ALL / 🟡 Stage 1 / 🟢 Stage 2 / 🔴 Stage 3 / 🔵 Career */}
            <div className="flex flex-wrap gap-2">
              {[
                { key: 'ALL', label: `전체 (${PRODUCTS.length})` },
                { key: 'STAGE_1', label: '🟡 Stage 1 (내 도구·입문)' },
                { key: 'STAGE_2', label: '🟢 Stage 2 (스레드·메타 수익화)' },
                { key: 'STAGE_3', label: '🔴 Stage 3 (풀스택·자동화)' },
                { key: 'CAREER', label: '🔵 Career (1:1 커리어 컨설팅)' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setSelectedStageFilter(tab.key as 'ALL' | BrickStage)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                    selectedStageFilter === tab.key
                      ? 'bg-white text-slate-950 border-white shadow-lg'
                      : 'bg-white/[0.04] text-slate-300 border-white/10 hover:bg-white/[0.08]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className={`technic-card rounded-3xl p-6 flex flex-col justify-between transition-all ${getStageBorderClass(
                  product.brickStage
                )}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-md ${getStageBadgeClass(
                        product.brickStage
                      )}`}
                    >
                      {product.brickStageLabel}
                    </span>
                    {product.badge && (
                      <span className="text-[11px] font-mono text-slate-300 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full truncate max-w-[140px]">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-black text-white mb-2 leading-snug">{product.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">{product.tagline}</p>

                  {product.target && (
                    <div className="p-3 rounded-xl bg-[#070B14] border border-white/10 mb-4">
                      <span className="text-[10px] font-mono text-slate-400 block mb-0.5">추천 대상 & 해결 과제</span>
                      <p className="text-xs text-slate-200 font-medium">{product.target}</p>
                    </div>
                  )}

                  {product.deliverableSummary && (
                    <div className="text-[11px] text-slate-400 mb-5 flex items-start gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{product.deliverableSummary}</span>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      {product.originalPrice > 0 && (
                        <span className="text-[11px] text-slate-500 line-through block">
                          {product.originalPrice.toLocaleString()}원
                        </span>
                      )}
                      <span className="text-xl font-black text-white">
                        {product.salePrice === 0 ? '무료 (0원)' : `${product.salePrice.toLocaleString()}원`}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">{product.category}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <Link
                      href={product.id === '4' ? '/career' : `/product/${product.id}`}
                      className="py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-slate-200 text-center transition-all flex items-center justify-center gap-1"
                    >
                      <span>상세 보기</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <button
                      type="button"
                      onClick={() => setQuickBuyProduct(product)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-black transition-all ${
                        product.brickStage === 'CAREER'
                          ? 'btn-career-blue'
                          : product.brickStage === 'STAGE_2'
                          ? 'btn-stage2-green'
                          : product.brickStage === 'STAGE_3'
                          ? 'btn-stage3-red'
                          : 'btn-stage1-yellow'
                      }`}
                    >
                      블록 조립 신청
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          6. INTERACTIVE 3D BRICK SIMULATOR & AI DIAGNOSTIC (#lab)
         ========================================================= */}
      <section id="lab" className="py-20 md:py-28 px-4 sm:px-6 border-b border-white/10 bg-[#080D1A]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full badge-stage2 text-xs font-mono font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              INTERACTIVE 3D BRICK STUDIO
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white mb-3">
              어느 블록부터 조립해야 할지 고민되시나요?
            </h2>
            <p className="text-xs sm:text-base text-slate-300">
              우측 진단기에서 현재 고민을 클릭하거나 입력하면, 좌측 3D 브릭 타워가 지금 필요한 단계(🟡 Stage 1 · 🟢 Stage 2 · 🔴 Stage 3 · 🔵 Career)를 즉시 하이라이트합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-6">
              <LegoStackSimulator externalStep={activeBrickStep} />
            </div>
            <div className="lg:col-span-6">
              <BuilderConsultantChat onStepDiagnosed={(step) => setActiveBrickStep(step)} />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          7. FREE STAGE 1 STARTER KIT & BUILDERS CLUB WAITLIST (#membership)
         ========================================================= */}
      <section id="membership" className="py-20 md:py-28 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Card: 🟡 Free Stage 1 Starter Brick */}
            <div className="technic-card rounded-3xl p-7 sm:p-9 border border-amber-400/35 flex flex-col justify-between">
              <div>
                <span className="badge-stage1 text-xs font-mono font-bold px-3 py-1 rounded-lg inline-block mb-4">
                  🟡 FREE STAGE 1 BRICK · 0원 스타터 팩
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
                  아직 결제가 망설여진다면,
                  <br />
                  무료 기초 설계도(PDF)부터 받아보세요
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  공기업 퇴사 전 주말마다 조립했던 <strong>[1인 빌더의 AI 툴스택 리스트 & 스레드 첫 1만 뷰 체크리스트]</strong> 요약본을 이메일로 즉시 보내드립니다.
                </p>
              </div>

              {freeKitSent ? (
                <div className="p-4 rounded-2xl bg-amber-400/15 border border-amber-400/40 text-amber-200 text-xs sm:text-sm font-bold flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>{freeKitEmail} 로 무료 Stage 1 설계도 발송 예약이 완료되었습니다!</span>
                </div>
              ) : (
                <form onSubmit={handleFreeKitSubmit} className="flex flex-col sm:flex-row gap-2.5">
                  <input
                    type="email"
                    required
                    value={freeKitEmail}
                    onChange={(e) => setFreeKitEmail(e.target.value)}
                    placeholder="설계도를 받을 이메일 주소 입력"
                    className="flex-1 px-4 py-3.5 rounded-xl bg-white/[0.05] border border-white/15 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-amber-400"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3.5 rounded-xl btn-stage1-yellow text-xs sm:text-sm flex items-center justify-center gap-1.5 shrink-0 transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>무료 설계도 받기</span>
                  </button>
                </form>
              )}
            </div>

            {/* Right Card: Future Builders Club Membership Waitlist */}
            <div className="technic-card rounded-3xl p-7 sm:p-9 border border-emerald-500/35 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="badge-stage2 text-xs font-mono font-bold px-3 py-1 rounded-lg">
                    COMING NEXT · aizaler BUILDERS CLUB
                  </span>
                  <span className="text-xs font-mono text-emerald-300">창립 멤버 대기자 모집</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
                  혼자 조립하기 지칠 때 함께 달릴
                  <br />
                  <span className="text-gradient-green">‘aizaler 빌더스 클럽(멤버십)’</span> 사전 알림
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  현재는 단계별 브릭 플레이북(🟡·🟢·🔴)과 🔵 1:1 커리어 컨설팅에 집중하고 있습니다. 곧 오픈할 <strong>월간 빌더 멤버십(스레드·메타 품앗이 피드백 + 매월 신규 AI 도구 템플릿 제공)</strong>의 창립 멤버 대기자로 등록해 두시면 <strong>평생 얼리버드 50% 혜택</strong>을 드립니다.
                </p>
              </div>

              {clubJoined ? (
                <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm font-bold flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>빌더스 클럽 창립 멤버 대기자 명단({clubEmail})에 등록되었습니다!</span>
                </div>
              ) : (
                <form onSubmit={handleClubSubmit} className="space-y-2.5">
                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <input
                      type="email"
                      required
                      value={clubEmail}
                      onChange={(e) => setClubEmail(e.target.value)}
                      placeholder="대기자 알림을 받을 이메일 주소"
                      className="flex-1 px-4 py-3.5 rounded-xl bg-white/[0.05] border border-white/15 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-emerald-400"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3.5 rounded-xl btn-stage2-green text-xs sm:text-sm flex items-center justify-center gap-1.5 shrink-0"
                    >
                      <Users className="w-4 h-4" />
                      <span>창립 멤버 대기 등록</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          QUICK ORDER / CONSULTATION MODAL
         ========================================================= */}
      {quickBuyProduct && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="technic-card rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-white/20 relative">
            <button
              type="button"
              onClick={closeQuickBuyModal}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300"
            >
              <X className="w-4 h-4" />
            </button>

            {orderSubmitted ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-white">
                  [{quickBuyProduct.title}] 신청이 접수되었습니다!
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  입력해주신 연락처(<strong className="text-emerald-300">{buyerContact}</strong>)로 결제 안내 및 즉시 열람/일정 조율 링크를 발송해 드립니다.
                </p>
                <div className="pt-3 flex flex-col sm:flex-row gap-2.5 justify-center">
                  <button
                    type="button"
                    onClick={closeQuickBuyModal}
                    className="px-6 py-3 rounded-xl btn-stage2-green text-xs sm:text-sm"
                  >
                    확인 및 닫기
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <span
                  className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-md inline-block mb-3 ${getStageBadgeClass(
                    quickBuyProduct.brickStage
                  )}`}
                >
                  {quickBuyProduct.brickStageLabel}
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white mb-1">{quickBuyProduct.title}</h3>
                <p className="text-xs text-slate-400 mb-5">{quickBuyProduct.deliverableSummary}</p>

                <div className="p-3.5 rounded-2xl bg-[#070B14] border border-white/10 flex items-center justify-between mb-5">
                  <span className="text-xs text-slate-400">멤버십 오픈 전 얼리버드 혜택가</span>
                  <span className="text-lg font-black text-emerald-300">
                    {quickBuyProduct.salePrice === 0
                      ? '무료 (0원)'
                      : `${quickBuyProduct.salePrice.toLocaleString()}원`}
                  </span>
                </div>

                <form onSubmit={handleQuickOrderSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">성함 (또는 닉네임)</label>
                    <input
                      type="text"
                      required
                      value={buyerName}
                      onChange={(e) => setBuyerName(e.target.value)}
                      placeholder="홍길동"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/15 text-white text-sm focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      이메일 또는 연락처 (자료 발송 및 안내용)
                    </label>
                    <input
                      type="text"
                      required
                      value={buyerContact}
                      onChange={(e) => setBuyerContact(e.target.value)}
                      placeholder="010-0000-0000 또는 이메일"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/15 text-white text-sm focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      현재 가장 해결하고 싶은 고민 한 줄 (선택)
                    </label>
                    <input
                      type="text"
                      value={buyerNote}
                      onChange={(e) => setBuyerNote(e.target.value)}
                      placeholder="예: 스레드 팔로워는 있는데 수익화 연결이 어렵습니다"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/15 text-white text-sm focus:outline-none focus:border-emerald-400"
                    />
                  </div>

                  <button type="submit" className="w-full py-4 rounded-xl btn-stage2-green text-sm mt-2">
                    즉시 조립 신청 완료하기
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
