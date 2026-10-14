'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Check,
  RotateCcw,
  Download,
  X,
  Compass,
  TrendingUp,
  Wrench,
  Cpu,
} from 'lucide-react';
import { PRODUCTS, Product, BrickStage } from '../data/products';

const STAGE_META: Record<
  BrickStage,
  {
    code: string;
    name: string;
    shortTitle: string;
    desc: string;
    bgSolid: string;
    studColor: string;
    borderClass: string;
    btnClass: string;
    textAccent: string;
    lightBg: string;
  }
> = {
  STAGE_1: {
    code: 'STAGE 01',
    name: '나를 위한 첫 도구 조립',
    shortTitle: 'Stage 1 · 내 도구 조립',
    desc: '코딩 몰라도 내 반복 업무를 줄여줄 AI 일꾼(.skills)과 첫 도구를 만듭니다.',
    bgSolid: 'bg-amber-400 text-gray-950 border-amber-500 shadow-[0_6px_0_#d97706]',
    studColor: 'bg-amber-400 border-amber-500',
    borderClass: 'brick-card-yellow',
    btnClass: 'brick-btn-yellow',
    textAccent: 'text-amber-600',
    lightBg: 'bg-amber-50/70',
  },
  STAGE_2: {
    code: 'STAGE 02',
    name: '스레드 500만 뷰 & 메타 수익화',
    shortTitle: 'Stage 2 · 스레드·메타 수익화',
    desc: '만든 도구에 오가닉 트래픽(500만 뷰)과 고전환 메타 광고(CVR 8.6%)를 붙여 매출을 만듭니다.',
    bgSolid: 'bg-emerald-500 text-white border-emerald-600 shadow-[0_6px_0_#047857]',
    studColor: 'bg-emerald-500 border-emerald-600',
    borderClass: 'brick-card-green',
    btnClass: 'brick-btn-green',
    textAccent: 'text-emerald-600',
    lightBg: 'bg-emerald-50/70',
  },
  STAGE_3: {
    code: 'STAGE 03',
    name: '월 $42 풀스택 & 터미널 자동화',
    shortTitle: 'Stage 3 · 1인 풀스택 시스템',
    desc: '외주비 0원으로 결제창 달린 상용 웹서비스 4개를 직접 배포하고 자동화합니다.',
    bgSolid: 'bg-rose-500 text-white border-rose-600 shadow-[0_6px_0_#be123c]',
    studColor: 'bg-rose-500 border-rose-600',
    borderClass: 'brick-card-red',
    btnClass: 'brick-btn-red',
    textAccent: 'text-rose-600',
    lightBg: 'bg-rose-50/70',
  },
  CAREER: {
    code: 'CAREER 1:1',
    name: '1:1 커리어 & 빌더 의사결정',
    shortTitle: 'Career · 1:1 커리어 컨설팅',
    desc: '공기업·주재원 퇴사 파운더와 함께 퇴사·부업 손익 계산과 90일 로드맵을 설계합니다.',
    bgSolid: 'bg-blue-600 text-white border-blue-700 shadow-[0_6px_0_#1d4ed8]',
    studColor: 'bg-blue-600 border-blue-700',
    borderClass: 'brick-card-blue',
    btnClass: 'brick-btn-blue',
    textAccent: 'text-blue-600',
    lightBg: 'bg-blue-50/70',
  },
};

function BrickStuds({ colorClass, count = 4 }: { colorClass: string; count?: number }) {
  return (
    <div className="flex items-center gap-3 px-6 -mb-[2px] relative z-10 pointer-events-none">
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className={`h-3 w-8 rounded-t-md border-t-2 border-x-2 ${colorClass}`}
        />
      ))}
    </div>
  );
}

export default function Home() {
  const [activeStage, setActiveStage] = useState<'ALL' | BrickStage>('ALL');
  const [stackKey, setStackKey] = useState<number>(0);

  // Quick Order Modal State
  const [quickBuyProduct, setQuickBuyProduct] = useState<Product | null>(null);
  const [buyerName, setBuyerName] = useState('');
  const [buyerContact, setBuyerContact] = useState('');
  const [buyerNote, setBuyerNote] = useState('');
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  // Free Starter Kit State
  const [freeKitEmail, setFreeKitEmail] = useState('');
  const [freeKitSent, setFreeKitSent] = useState(false);

  const visibleProducts =
    activeStage === 'ALL'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.brickStage === activeStage);

  const threadsProduct = PRODUCTS.find((p) => p.id === '1')!;
  const metaProduct = PRODUCTS.find((p) => p.id === '3')!;
  const careerProduct = PRODUCTS.find((p) => p.id === '4')!;

  const replayStackAnimation = () => {
    setStackKey((prev) => prev + 1);
  };

  const handleStageSelect = (stage: BrickStage) => {
    setActiveStage(stage);
    const el = document.getElementById('stack-builder');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

  return (
    <div className="min-h-screen pb-24">
      {/* =========================================================
          1. HERO SECTION: 심플한 타이포그래피 + 실제 블록이 쌓이는 스프링 모션
         ========================================================= */}
      <section className="pt-12 pb-20 md:pt-20 md:pb-28 border-b border-gray-200/80">
        <div className="toss-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Clean Narrative */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <p className="text-sm sm:text-base font-extrabold text-emerald-600 tracking-tight">
                어릴 때 블록 조립하는 거 좋아하셨나요?
              </p>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 leading-[1.16]">
                나를 위해 만든 작은 블록이,
                <br />
                내 첫 번째 수익원이 됩니다.
              </h1>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                거창한 창업이나 외주 개발부터 시작하지 마세요.
                내 일상의 불편함을 해결하는 <strong className="text-gray-900">작은 도구(Stage 1)</strong>를 만들고,{' '}
                <strong className="text-gray-900">스레드 500만 뷰와 메타 광고(Stage 2)</strong>로 수익화한 뒤,{' '}
                <strong className="text-gray-900">1인 풀스택 시스템(Stage 3)</strong>으로 쌓아 올리는 실전 조립 설명서입니다.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="#monetize"
                  className="brick-btn-green px-7 py-4 text-sm sm:text-base inline-flex items-center justify-center gap-2"
                >
                  <span>스레드 500만 뷰 · 메타 수익화 보기</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/career"
                  className="brick-btn-blue px-7 py-4 text-sm sm:text-base inline-flex items-center justify-center gap-2"
                >
                  <span>1:1 커리어 & 빌더 컨설팅</span>
                </Link>
              </div>

              {/* Clean Minimal Proof Numbers */}
              <div className="grid grid-cols-4 gap-4 pt-6 border-t border-gray-200">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-gray-900 tabular-nums">500만+</div>
                  <div className="text-xs text-gray-500 mt-0.5">스레드 실측 조회수</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-emerald-600">Certified</div>
                  <div className="text-xs text-gray-500 mt-0.5">Meta 공식 인증</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-gray-900 tabular-nums">8.6%</div>
                  <div className="text-xs text-gray-500 mt-0.5">메타 광고 전환율</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-gray-900 tabular-nums">월 $42</div>
                  <div className="text-xs text-gray-500 mt-0.5">4개 웹서비스 유지비</div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Tactile Block Stacker with Spring Physics */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-[32px] p-6 sm:p-8 border-2 border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-sm font-black text-gray-900">실전 빌더 블록 조립도</h2>
                    <p className="text-xs text-gray-500">블록을 클릭하면 해당 단계 설계도로 이동합니다</p>
                  </div>
                  <button
                    type="button"
                    onClick={replayStackAnimation}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>다시 쌓기</span>
                  </button>
                </div>

                {/* Animated Block Stack (Top to Bottom: Stage 3 Red -> Stage 2 Green -> Stage 1 Yellow) */}
                <div key={stackKey} className="space-y-3">
                  {/* Stage 3: Red Block (Drops 3rd) */}
                  <motion.div
                    initial={{ opacity: 0, y: -60, scale: 0.94 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 22, delay: 0.36 }}
                    whileHover={{ scale: 1.015, y: -2 }}
                    whileTap={{ scale: 0.985, y: 2 }}
                    onClick={() => handleStageSelect('STAGE_3')}
                    className="cursor-pointer"
                  >
                    <BrickStuds colorClass="bg-rose-500 border-rose-600" count={3} />
                    <div className="rounded-2xl border-2 p-4 sm:p-5 bg-rose-500 text-white border-rose-600 shadow-[0_6px_0_#be123c] flex items-center justify-between gap-4">
                      <div>
                        <div className="text-[11px] font-mono font-black opacity-90">STAGE 03 · SYSTEM</div>
                        <div className="text-base sm:text-lg font-black">
                          외주비 0원·월 $42 1인 풀스택 & 자동화
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 shrink-0 opacity-90" />
                    </div>
                  </motion.div>

                  {/* Stage 2: Green Block (Drops 2nd - Core Flagship) */}
                  <motion.div
                    initial={{ opacity: 0, y: -50, scale: 0.94 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 22, delay: 0.18 }}
                    whileHover={{ scale: 1.015, y: -2 }}
                    whileTap={{ scale: 0.985, y: 2 }}
                    onClick={() => handleStageSelect('STAGE_2')}
                    className="cursor-pointer"
                  >
                    <BrickStuds colorClass="bg-emerald-500 border-emerald-600" count={4} />
                    <div className="rounded-2xl border-2 p-4 sm:p-5 bg-emerald-500 text-white border-emerald-600 shadow-[0_6px_0_#047857] flex items-center justify-between gap-4">
                      <div>
                        <div className="text-[11px] font-mono font-black opacity-95">
                          STAGE 02 · GROWTH (주력 수익화 엔진)
                        </div>
                        <div className="text-base sm:text-lg font-black">
                          스레드 500만 뷰 & 메타 광고 수익화
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 shrink-0" />
                    </div>
                  </motion.div>

                  {/* Stage 1: Yellow Block (Drops 1st - Base Foundation) */}
                  <motion.div
                    initial={{ opacity: 0, y: -40, scale: 0.94 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 22, delay: 0.02 }}
                    whileHover={{ scale: 1.015, y: -2 }}
                    whileTap={{ scale: 0.985, y: 2 }}
                    onClick={() => handleStageSelect('STAGE_1')}
                    className="cursor-pointer"
                  >
                    <BrickStuds colorClass="bg-amber-400 border-amber-500" count={5} />
                    <div className="rounded-2xl border-2 p-4 sm:p-5 bg-amber-400 text-gray-950 border-amber-500 shadow-[0_6px_0_#d97706] flex items-center justify-between gap-4">
                      <div>
                        <div className="text-[11px] font-mono font-black opacity-80">STAGE 01 · STARTER</div>
                        <div className="text-base sm:text-lg font-black">
                          나를 위한 첫 AI 도구 & 자동화 조립
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 shrink-0" />
                    </div>
                  </motion.div>

                  {/* Separate Blue Block: 1:1 Career & Builder Consulting */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 24, delay: 0.52 }}
                    whileHover={{ scale: 1.015, y: -2 }}
                    whileTap={{ scale: 0.985, y: 2 }}
                    onClick={() => handleStageSelect('CAREER')}
                    className="pt-3 cursor-pointer"
                  >
                    <BrickStuds colorClass="bg-blue-600 border-blue-700" count={4} />
                    <div className="rounded-2xl border-2 p-4 sm:p-5 bg-blue-600 text-white border-blue-700 shadow-[0_6px_0_#1d4ed8] flex items-center justify-between gap-4">
                      <div>
                        <div className="text-[11px] font-mono font-black opacity-90">
                          SEPARATE TRACK · 1:1 CONSULTING
                        </div>
                        <div className="text-base sm:text-lg font-black">
                          공기업·주재원 퇴사 파운더 1:1 커리어 & 빌더 세션
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 shrink-0" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. INTERACTIVE BLOCK STATION (#stack-builder)
             클릭하면 해당 색상의 블록들이 딸깍거리며 조립되는 모션 카탈로그
         ========================================================= */}
      <section id="stack-builder" className="py-20 md:py-24 border-b border-gray-200/80">
        <div className="toss-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <h2 className="text-2xl sm:text-4xl font-black text-gray-900 tracking-tight">
                지금 내 단계에 필요한 블록만 골라 끼우세요
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                처음부터 다 살 필요 없습니다. 아래 단계 블록을 누르면 해당 설계도가 조립됩니다.
              </p>
            </div>

            {/* Clean Tactile Block Tabs */}
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setActiveStage('ALL')}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all border-2 ${
                  activeStage === 'ALL'
                    ? 'bg-gray-900 text-white border-gray-900 shadow-[0_4px_0_#000]'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                }`}
              >
                전체 블록 ({PRODUCTS.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveStage('STAGE_1')}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all border-2 ${
                  activeStage === 'STAGE_1'
                    ? 'bg-amber-400 text-gray-950 border-amber-500 shadow-[0_4px_0_#d97706]'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-amber-400'
                }`}
              >
                Stage 1 · 내 도구 조립
              </button>
              <button
                type="button"
                onClick={() => setActiveStage('STAGE_2')}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all border-2 ${
                  activeStage === 'STAGE_2'
                    ? 'bg-emerald-500 text-white border-emerald-600 shadow-[0_4px_0_#047857]'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-emerald-500'
                }`}
              >
                Stage 2 · 스레드·메타 수익화
              </button>
              <button
                type="button"
                onClick={() => setActiveStage('STAGE_3')}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all border-2 ${
                  activeStage === 'STAGE_3'
                    ? 'bg-rose-500 text-white border-rose-600 shadow-[0_4px_0_#be123c]'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-rose-500'
                }`}
              >
                Stage 3 · 풀스택 시스템
              </button>
              <button
                type="button"
                onClick={() => setActiveStage('CAREER')}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all border-2 ${
                  activeStage === 'CAREER'
                    ? 'bg-blue-600 text-white border-blue-700 shadow-[0_4px_0_#1d4ed8]'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-blue-500'
                }`}
              >
                Career · 1:1 컨설팅
              </button>
            </div>
          </div>

          {/* Animated Block Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            <AnimatePresence mode="popLayout">
              {visibleProducts.map((product, idx) => {
                const meta = STAGE_META[product.brickStage];
                return (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: -28, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{
                      type: 'spring',
                      stiffness: 340,
                      damping: 25,
                      delay: idx * 0.05,
                    }}
                    className="flex flex-col"
                  >
                    {/* Physical Top Studs */}
                    <BrickStuds colorClass={meta.studColor} count={4} />

                    {/* Block Card Body */}
                    <div className={`${meta.borderClass} p-6 sm:p-7 flex-1 flex flex-col justify-between`}>
                      <div>
                        <div className="flex items-center justify-between text-xs font-extrabold mb-3">
                          <span className={meta.textAccent}>{product.brickStageLabel}</span>
                          <span className="text-gray-400 font-mono">0{product.rank}</span>
                        </div>

                        <h3 className="text-lg sm:text-xl font-black text-gray-900 leading-snug mb-2.5">
                          {product.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5">
                          {product.tagline}
                        </p>

                        <div className={`p-3.5 rounded-2xl ${meta.lightBg} mb-5`}>
                          <div className="text-[11px] font-bold text-gray-500 mb-0.5">제공 구성</div>
                          <div className="text-xs font-extrabold text-gray-900">
                            {product.deliverableSummary}
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-100">
                        <div className="flex items-baseline justify-between mb-4">
                          <div>
                            {product.originalPrice > 0 && (
                              <span className="text-xs text-gray-400 line-through mr-2">
                                {product.originalPrice.toLocaleString()}원
                              </span>
                            )}
                            <span className="text-2xl font-black text-gray-900 tabular-nums">
                              {product.salePrice === 0
                                ? '무료'
                                : `${product.salePrice.toLocaleString()}원`}
                            </span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2.5">
                          <Link
                            href={product.id === '4' ? '/career' : `/product/${product.id}`}
                            className="py-3 px-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-extrabold text-center transition-colors flex items-center justify-center gap-1"
                          >
                            <span>상세 설명서</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                          <button
                            type="button"
                            onClick={() => setQuickBuyProduct(product)}
                            className={`py-3 px-3 text-xs ${meta.btnClass}`}
                          >
                            블록 조립하기
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          3. STAGE 02 DEEP-DIVE (#monetize): 스레드 500만 뷰 & 메타 광고 수익화
         ========================================================= */}
      <section id="monetize" className="py-20 md:py-24 border-b border-gray-200/80 bg-white">
        <div className="toss-container">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono font-black text-emerald-600 uppercase tracking-wider mb-2">
              STAGE 02 · GREEN BLOCK ENGINE
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-gray-900 leading-tight mb-4">
              왜 많은 빌더들이 도구를 만들어 놓고도
              <br />
              첫 결제를 못 만들까요?
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              저 역시 스레드에서 20만 뷰가 터졌는데도 실제 결제는 단 4건에 그쳤던 뼈아픈 시행착오가 있었습니다.
              이후 2개 계정에서 누적 500만 뷰를 만든 포스트들을 역공학해 <strong>구매로 직결되는 첫 문장(Hook) 구조</strong>를 찾았고, 여기에 <strong>Meta 공식 인증(Media Planning Pro) 1:1 메시지 일치 광고 퍼널</strong>을 붙여 전환율 8.6%를 달성했습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[threadsProduct, metaProduct].map((product) => (
              <div key={product.id} className="flex flex-col">
                <BrickStuds colorClass="bg-emerald-500 border-emerald-600" count={5} />
                <div className="brick-card-green p-7 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-extrabold text-emerald-600 mb-2">
                      {product.brickStageLabel}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-3 leading-snug">
                      {product.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-6 leading-relaxed">{product.tagline}</p>

                    <ul className="space-y-2.5 mb-7">
                      {product.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[3]" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-5 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-xs text-gray-400 line-through block">
                        정가 {product.originalPrice.toLocaleString()}원
                      </span>
                      <span className="text-2xl font-black text-gray-900">
                        {product.salePrice.toLocaleString()}원
                      </span>
                    </div>
                    <div className="flex gap-2.5">
                      <Link
                        href={`/product/${product.id}`}
                        className="px-5 py-3.5 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs sm:text-sm font-extrabold transition-colors"
                      >
                        상세 보기
                      </Link>
                      <button
                        type="button"
                        onClick={() => setQuickBuyProduct(product)}
                        className="px-6 py-3.5 brick-btn-green text-xs sm:text-sm"
                      >
                        즉시 조립하기
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          4. SEPARATE BLUE BLOCK (#career): 1:1 커리어 & 빌더 의사결정 세션
         ========================================================= */}
      <section id="career" className="py-20 md:py-24 border-b border-gray-200/80">
        <div className="toss-container">
          <BrickStuds colorClass="bg-blue-600 border-blue-700" count={6} />
          <div className="brick-card-blue p-7 sm:p-10 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="text-xs font-mono font-black text-blue-600 uppercase tracking-wider">
                  BLUE BLOCK · 1:1 CAREER & BUILDER STRATEGY
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-gray-900 leading-tight">
                  공기업·해외 주재원 퇴사 파운더의
                  <br />
                  1:1 커리어 & 1인 빌더 의사결정 세션
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  안정된 조직에 몸담고 있지만 언젠가 내 이름으로 된 프로덕트와 현금흐름을 만들고 싶은 직장인·예비 빌더를 위한 1:1 집중 세션입니다.
                  본격적인 빌더 멤버십을 열기 전, 과거의 저처럼 갈림길에 서 계신 분들과 직접 마주 앉아 <strong>퇴사·부업·이직의 냉정한 손익 계산</strong>과 <strong>90일 실행 로드맵</strong>을 함께 설계합니다.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100">
                    <div className="text-xs font-black text-blue-700 mb-1">01. 퇴사·독립 손익 시뮬레이션</div>
                    <p className="text-xs text-gray-600">
                      월급을 유지하며 독립 전까지 반드시 확보해야 할 런웨이와 최소 현금흐름 지표 설정
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100">
                    <div className="text-xs font-black text-blue-700 mb-1">02. 내 본업·경험의 프로덕트화</div>
                    <p className="text-xs text-gray-600">
                      내 경력과 문제의식에서 가장 빠르게 유료 결제를 만들 첫 블록(PPF) 도출
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-gray-50 rounded-3xl p-6 sm:p-8 border border-gray-200 space-y-5">
                <div>
                  <div className="text-xs font-bold text-blue-600 mb-1">50분 1:1 심층 진단 + 90일 로드맵 문서</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs text-gray-400 line-through">250,000원</span>
                    <span className="text-3xl font-black text-gray-900">
                      {careerProduct.salePrice.toLocaleString()}원
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-600 shrink-0 stroke-[3]" />
                    <span>사전 질문지 기반 4대 갈림길 정밀 분석</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-600 shrink-0 stroke-[3]" />
                    <span>50분 1:1 파운더 온라인 집중 코칭</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-600 shrink-0 stroke-[3]" />
                    <span>세션 직후 [나만의 90일 Action Blueprint] 전달</span>
                  </li>
                </ul>

                <div className="space-y-2.5 pt-2">
                  <Link
                    href="/career"
                    className="w-full py-4 px-5 brick-btn-blue text-sm flex items-center justify-center gap-2"
                  >
                    <span>1:1 커리어 연구소 상세 보기</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setQuickBuyProduct(careerProduct)}
                    className="w-full py-3 px-4 rounded-2xl bg-white hover:bg-gray-100 border border-gray-200 text-xs font-bold text-gray-700 transition-colors"
                  >
                    바로 일정 신청하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          5. FREE STARTER BLOCK: 무료 기초 설계도 PDF 받기
         ========================================================= */}
      <section className="pt-16">
        <div className="toss-container max-w-3xl">
          <BrickStuds colorClass="bg-amber-400 border-amber-500" count={4} />
          <div className="brick-card-yellow p-7 sm:p-9">
            <div className="text-xs font-mono font-black text-amber-600 uppercase tracking-wider mb-1.5">
              FREE STAGE 01 STARTER BLOCK
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2">
              무료 기초 블록부터 가볍게 조립해 보세요
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-6 leading-relaxed">
              이메일을 입력하시면 <strong>[스레드 500만 뷰 훅 구조 해부서 & 1인 빌더 첫 조립 체크리스트 (PDF)]</strong>를 무료로 즉시 보내드립니다.
            </p>

            {freeKitSent ? (
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold flex items-center gap-2">
                <Check className="w-5 h-5 text-amber-600 shrink-0 stroke-[3]" />
                <span>{freeKitEmail} 로 무료 기초 설계도 발송이 접수되었습니다!</span>
              </div>
            ) : (
              <form onSubmit={handleFreeKitSubmit} className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  required
                  value={freeKitEmail}
                  onChange={(e) => setFreeKitEmail(e.target.value)}
                  placeholder="설계도를 받을 이메일 주소"
                  className="flex-1 px-4 py-3.5 rounded-xl bg-gray-50 border-2 border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-amber-500"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 brick-btn-yellow text-xs sm:text-sm flex items-center justify-center gap-1.5 shrink-0"
                >
                  <Download className="w-4 h-4" />
                  <span>무료 PDF 받기</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          QUICK ORDER MODAL
         ========================================================= */}
      {quickBuyProduct && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 border-2 border-gray-200 shadow-2xl relative"
          >
            <button
              type="button"
              onClick={closeQuickBuyModal}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>

            {orderSubmitted ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h3 className="text-lg font-black text-gray-900">신청이 접수되었습니다!</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  입력해주신 연락처(<strong>{buyerContact}</strong>)로 안내 링크를 보내드립니다.
                </p>
                <button
                  type="button"
                  onClick={closeQuickBuyModal}
                  className="px-6 py-3 brick-btn-green text-xs sm:text-sm"
                >
                  확인
                </button>
              </div>
            ) : (
              <div>
                <div className="text-xs font-extrabold text-emerald-600 mb-1">
                  {quickBuyProduct.brickStageLabel}
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-1">{quickBuyProduct.title}</h3>
                <p className="text-xs text-gray-500 mb-5">{quickBuyProduct.deliverableSummary}</p>

                <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-between mb-5">
                  <span className="text-xs font-bold text-gray-600">얼리버드 혜택가</span>
                  <span className="text-lg font-black text-gray-900">
                    {quickBuyProduct.salePrice === 0
                      ? '무료 (0원)'
                      : `${quickBuyProduct.salePrice.toLocaleString()}원`}
                  </span>
                </div>

                <form onSubmit={handleQuickOrderSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">성함 / 닉네임</label>
                    <input
                      type="text"
                      required
                      value={buyerName}
                      onChange={(e) => setBuyerName(e.target.value)}
                      placeholder="홍길동"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">이메일 또는 연락처</label>
                    <input
                      type="text"
                      required
                      value={buyerContact}
                      onChange={(e) => setBuyerContact(e.target.value)}
                      placeholder="010-0000-0000 또는 이메일"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      해결하고 싶은 고민 한 줄 (선택)
                    </label>
                    <input
                      type="text"
                      value={buyerNote}
                      onChange={(e) => setBuyerNote(e.target.value)}
                      placeholder="예: 스레드 수익화 퍼널을 만들고 싶어요"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <button type="submit" className="w-full py-4 brick-btn-green text-sm mt-2">
                    조립 신청 완료하기
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}
