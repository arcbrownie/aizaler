'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Check,
  RotateCcw,
  Download,
  X,
} from 'lucide-react';
import { PRODUCTS, Product, BrickStage } from '../data/products';

function BrickStuds({
  colorClass,
  count = 4,
  align = 'left',
  size = 'md',
}: {
  colorClass: string;
  count?: number;
  align?: 'left' | 'center' | 'spread';
  size?: 'sm' | 'md';
}) {
  const sizeClass =
    size === 'sm'
      ? 'h-2 w-5 rounded-t-[4px]'
      : 'h-2.5 w-7 rounded-t-[5px]';

  const alignClass =
    align === 'center'
      ? 'justify-center gap-2.5'
      : align === 'spread'
      ? 'justify-around px-6'
      : 'justify-start gap-2.5 px-6';

  return (
    <div className={`flex items-center ${alignClass} -mb-[2px] relative z-10 pointer-events-none`}>
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className={`${sizeClass} border-t-2 border-x-2 ${colorClass}`}
        />
      ))}
    </div>
  );
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'STAGE_1' | 'STAGE_2' | 'STAGE_3'>('ALL');
  const [replayKey, setReplayKey] = useState<number>(0);

  // 신청 모달 상태
  const [quickBuyProduct, setQuickBuyProduct] = useState<Product | null>(null);
  const [buyerName, setBuyerName] = useState('');
  const [buyerContact, setBuyerContact] = useState('');
  const [buyerNote, setBuyerNote] = useState('');
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  // 무료 가이드 PDF 폼
  const [freeKitEmail, setFreeKitEmail] = useState('');
  const [freeKitSent, setFreeKitSent] = useState(false);

  const stage1Products = PRODUCTS.filter((p) => p.brickStage === 'STAGE_1');
  const stage2Products = PRODUCTS.filter((p) => p.brickStage === 'STAGE_2');
  const stage3Products = PRODUCTS.filter((p) => p.brickStage === 'STAGE_3');
  const careerProduct = PRODUCTS.find((p) => p.brickStage === 'CAREER')!;

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

  const showStage1 = activeFilter === 'ALL' || activeFilter === 'STAGE_1';
  const showStage2 = activeFilter === 'ALL' || activeFilter === 'STAGE_2';
  const showStage3 = activeFilter === 'ALL' || activeFilter === 'STAGE_3';

  return (
    <div className="min-h-screen pb-24">
      {/* =========================================================
          1. HERO HEADER (군더더기 없이 핵심 메시지와 실증 지표만 전달)
         ========================================================= */}
      <section className="pt-12 pb-10 md:pt-16 md:pb-12 border-b border-gray-200/80 bg-white/60">
        <div className="toss-container">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-emerald-600">
                <span>AI Builder Education & 1:1 Career Consulting</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-950 leading-[1.15]">
                나를 위해 만든 작은 도구가,
                <br />
                가장 확실한 수익원이 됩니다.
              </h1>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                내 업무를 돕는 AI 자동화(Stage 1)부터 스레드·메타 광고 수익화(Stage 2), 1인 풀스택 런칭(Stage 3), 그리고 전 과정의 방향을 잡는 1:1 커리어 컨설팅까지 단계별로 제공합니다.
              </p>
            </div>

            {/* 핵심 실증 지표 4가지 */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4 shrink-0">
              <div className="bg-white rounded-2xl px-4 py-3.5 border border-gray-200/90 shadow-xs">
                <div className="text-lg sm:text-xl font-black text-gray-950 tabular-nums">500만+</div>
                <div className="text-[11px] font-medium text-gray-500 mt-0.5">스레드 실측 조회수</div>
              </div>
              <div className="bg-white rounded-2xl px-4 py-3.5 border border-gray-200/90 shadow-xs">
                <div className="text-lg sm:text-xl font-black text-emerald-600">Certified</div>
                <div className="text-[11px] font-medium text-gray-500 mt-0.5">Meta 공식 인증</div>
              </div>
              <div className="bg-white rounded-2xl px-4 py-3.5 border border-gray-200/90 shadow-xs">
                <div className="text-lg sm:text-xl font-black text-gray-950 tabular-nums">8.6%</div>
                <div className="text-[11px] font-medium text-gray-500 mt-0.5">메타 광고 구매전환율</div>
              </div>
              <div className="bg-white rounded-2xl px-4 py-3.5 border border-gray-200/90 shadow-xs">
                <div className="text-lg sm:text-xl font-black text-gray-950 tabular-nums">월 $42</div>
                <div className="text-[11px] font-medium text-gray-500 mt-0.5">4개 상용 서비스 운영</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. MAIN ARCHITECTURE (#curriculum)
             좌측 8열: Stage 1 (노랑) ➔ Stage 2 (초록) ➔ Stage 3 (빨강) 블록 적층
             우측 4열: 1:1 커리어 & 빌더 컨설팅 (파랑 수직 컬럼)
         ========================================================= */}
      <section id="curriculum" className="pt-10 md:pt-14">
        <div className="toss-container">
          {/* 상단 단계 필터 & 모션 컨트롤 */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveFilter('ALL')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all ${
                  activeFilter === 'ALL'
                    ? 'bg-gray-950 text-white shadow-[0_3px_0_#000]'
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                전체 과정 (Stage 1–3)
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('STAGE_1')}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-1.5 ${
                  activeFilter === 'STAGE_1'
                    ? 'bg-amber-400 text-gray-950 shadow-[0_3px_0_#b45309]'
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                <span className="w-2 h-2 rounded-xs bg-amber-400" />
                <span>Stage 1 · AI 도구화</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('STAGE_2')}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-1.5 ${
                  activeFilter === 'STAGE_2'
                    ? 'bg-emerald-500 text-white shadow-[0_3px_0_#047857]'
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                <span className="w-2 h-2 rounded-xs bg-emerald-500" />
                <span>Stage 2 · 수익화</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('STAGE_3')}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-1.5 ${
                  activeFilter === 'STAGE_3'
                    ? 'bg-rose-500 text-white shadow-[0_3px_0_#be123c]'
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                <span className="w-2 h-2 rounded-xs bg-rose-500" />
                <span>Stage 3 · 풀스택 런칭</span>
              </button>
            </div>

            <button
              type="button"
              onClick={() => {
                setActiveFilter('ALL');
                setReplayKey((prev) => prev + 1);
              }}
              className="px-3 py-2 rounded-xl bg-white hover:bg-gray-100 border border-gray-200 text-gray-600 text-xs font-bold inline-flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>모션 다시보기</span>
            </button>
          </div>

          {/* 12-Column Grid: 좌측 8열(Stage 1-2-3 적층) + 우측 4열(1:1 컨설팅 컬럼) */}
          <div key={replayKey} className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
            {/* =====================================================
                LEFT 8 COLUMNS: STAGE 1 ➔ STAGE 2 ➔ STAGE 3
               ===================================================== */}
            <div className="lg:col-span-8 flex flex-col">
              {/* ───────────────────────────────────────────────────
                  STAGE 01 (노란 블록) · 나를 위한 AI 자동화
                 ─────────────────────────────────────────────────── */}
              {showStage1 && (
                <motion.div
                  id="stage-1"
                  initial={{ opacity: 0, y: -28, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 360, damping: 24, delay: 0.04 }}
                  className="relative z-10"
                >
                  <BrickStuds colorClass="bg-amber-400 border-amber-500" count={5} />
                  <div className="brick-card-yellow p-5 sm:p-7 bg-white">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-gray-100">
                      <div className="flex items-center gap-2.5">
                        <span className="px-2.5 py-1 rounded-lg bg-amber-400 text-gray-950 text-xs font-black">
                          Stage 1
                        </span>
                        <h2 className="text-lg sm:text-xl font-black text-gray-950">
                          나를 위한 AI 도구 & 업무 자동화
                        </h2>
                      </div>
                      <span className="text-xs font-bold text-gray-400">
                        반복 업무를 대신하는 첫 AI 워크플로우 구축
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {stage1Products.map((product) => (
                        <div
                          key={product.id}
                          className="rounded-2xl border border-gray-200 bg-gray-50/60 hover:bg-white hover:border-amber-400 transition-all p-5 flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[11px] font-extrabold text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded-md">
                                {product.badge}
                              </span>
                              <span className="text-xs font-bold text-gray-400 line-through tabular-nums">
                                {product.originalPrice.toLocaleString()}원
                              </span>
                            </div>
                            <h3 className="text-base font-black text-gray-950 mb-1.5 leading-snug">
                              {product.title}
                            </h3>
                            <p className="text-xs text-gray-600 leading-relaxed mb-4">
                              {product.tagline}
                            </p>
                          </div>

                          <div className="pt-3.5 border-t border-gray-200/70 flex items-center justify-between gap-2">
                            <span className="text-lg font-black text-gray-950 tabular-nums">
                              {product.salePrice === 0
                                ? '무료'
                                : `${product.salePrice.toLocaleString()}원`}
                            </span>
                            <div className="flex items-center gap-1.5">
                              <Link
                                href={`/product/${product.id}`}
                                className="px-3 py-2 rounded-xl bg-white hover:bg-gray-100 border border-gray-200 text-gray-700 text-xs font-bold transition-colors"
                              >
                                자세히 보기
                              </Link>
                              <button
                                type="button"
                                onClick={() => setQuickBuyProduct(product)}
                                className="px-3.5 py-2 brick-btn-yellow text-xs"
                              >
                                신청하기
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ───────────────────────────────────────────────────
                  STAGE 02 (초록 블록) · 스레드 500만 뷰 & 메타 광고 수익화
                 ─────────────────────────────────────────────────── */}
              {showStage2 && (
                <motion.div
                  id="stage-2"
                  initial={{ opacity: 0, y: -32, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 360, damping: 24, delay: 0.14 }}
                  className={`relative z-20 ${showStage1 ? 'mt-4' : ''}`}
                >
                  <BrickStuds colorClass="bg-emerald-500 border-emerald-600" count={5} />
                  <div className="brick-card-green p-5 sm:p-7 bg-white">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-gray-100">
                      <div className="flex items-center gap-2.5">
                        <span className="px-2.5 py-1 rounded-lg bg-emerald-500 text-white text-xs font-black">
                          Stage 2
                        </span>
                        <h2 className="text-lg sm:text-xl font-black text-gray-950">
                          스레드 500만 뷰 & 메타 광고 수익화
                        </h2>
                      </div>
                      <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">
                        주력 수익화 과정
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {stage2Products.map((product) => (
                        <div
                          key={product.id}
                          className="rounded-2xl border border-emerald-200/90 bg-emerald-50/25 hover:bg-white hover:border-emerald-500 transition-all p-5 flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[11px] font-extrabold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-md">
                                {product.brickStageLabel.replace('Stage 2 · ', '')}
                              </span>
                              <span className="text-xs font-bold text-gray-400 line-through tabular-nums">
                                {product.originalPrice.toLocaleString()}원
                              </span>
                            </div>
                            <h3 className="text-base font-black text-gray-950 mb-1.5 leading-snug">
                              {product.title}
                            </h3>
                            <p className="text-xs text-gray-600 leading-relaxed mb-4">
                              {product.tagline}
                            </p>
                          </div>

                          <div className="pt-3.5 border-t border-emerald-200/60 flex items-center justify-between gap-2">
                            <span className="text-lg font-black text-gray-950 tabular-nums">
                              {product.salePrice.toLocaleString()}원
                            </span>
                            <div className="flex items-center gap-1.5">
                              <Link
                                href={`/product/${product.id}`}
                                className="px-3 py-2 rounded-xl bg-white hover:bg-gray-100 border border-gray-200 text-gray-700 text-xs font-bold transition-colors"
                              >
                                자세히 보기
                              </Link>
                              <button
                                type="button"
                                onClick={() => setQuickBuyProduct(product)}
                                className="px-3.5 py-2 brick-btn-green text-xs"
                              >
                                신청하기
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ───────────────────────────────────────────────────
                  STAGE 03 (빨간 블록) · 1인 풀스택 런칭 & 터미널 자동화
                 ─────────────────────────────────────────────────── */}
              {showStage3 && (
                <motion.div
                  id="stage-3"
                  initial={{ opacity: 0, y: -36, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 360, damping: 24, delay: 0.24 }}
                  className={`relative z-30 ${showStage1 || showStage2 ? 'mt-4' : ''}`}
                >
                  <BrickStuds colorClass="bg-rose-500 border-rose-600" count={5} />
                  <div className="brick-card-red p-5 sm:p-7 bg-white">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-gray-100">
                      <div className="flex items-center gap-2.5">
                        <span className="px-2.5 py-1 rounded-lg bg-rose-500 text-white text-xs font-black">
                          Stage 3
                        </span>
                        <h2 className="text-lg sm:text-xl font-black text-gray-950">
                          1인 풀스택 런칭 & 터미널 자동화
                        </h2>
                      </div>
                      <span className="text-xs font-bold text-gray-400">
                        외주 없이 상용 웹서비스 직접 구축·배포
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {stage3Products.map((product) => (
                        <div
                          key={product.id}
                          className="rounded-2xl border border-gray-200 bg-gray-50/60 hover:bg-white hover:border-rose-400 transition-all p-5 flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[11px] font-extrabold text-rose-700 bg-rose-100/80 px-2 py-0.5 rounded-md">
                                {product.badge}
                              </span>
                              <span className="text-xs font-bold text-gray-400 line-through tabular-nums">
                                {product.originalPrice.toLocaleString()}원
                              </span>
                            </div>
                            <h3 className="text-base font-black text-gray-950 mb-1.5 leading-snug">
                              {product.title}
                            </h3>
                            <p className="text-xs text-gray-600 leading-relaxed mb-4">
                              {product.tagline}
                            </p>
                          </div>

                          <div className="pt-3.5 border-t border-gray-200/70 flex items-center justify-between gap-2">
                            <span className="text-lg font-black text-gray-950 tabular-nums">
                              {product.salePrice.toLocaleString()}원
                            </span>
                            <div className="flex items-center gap-1.5">
                              <Link
                                href={`/product/${product.id}`}
                                className="px-3 py-2 rounded-xl bg-white hover:bg-gray-100 border border-gray-200 text-gray-700 text-xs font-bold transition-colors"
                              >
                                자세히 보기
                              </Link>
                              <button
                                type="button"
                                onClick={() => setQuickBuyProduct(product)}
                                className="px-3.5 py-2 brick-btn-red text-xs"
                              >
                                신청하기
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* =====================================================
                RIGHT 4 COLUMNS: 1:1 커리어 & 빌더 컨설팅 (수직 컬럼)
               ===================================================== */}
            <div className="lg:col-span-4 flex flex-col">
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring', stiffness: 340, damping: 26, delay: 0.2 }}
                className="lg:sticky lg:top-24 flex-1 flex flex-col"
              >
                <BrickStuds colorClass="bg-blue-600 border-blue-700" count={4} align="center" />
                <div className="brick-card-blue bg-white overflow-hidden flex-1 flex flex-col justify-between">
                  <div>
                    {/* 상단 블루 헤더 */}
                    <div className="bg-[#1E40AF] text-white p-6">
                      <div className="inline-block px-2.5 py-1 rounded-md bg-blue-500/30 text-blue-200 text-[11px] font-extrabold mb-3">
                        1:1 Consulting
                      </div>
                      <h2 className="text-xl sm:text-2xl font-black leading-snug mb-2">
                        1:1 커리어 &
                        <br />
                        빌더 의사결정 컨설팅
                      </h2>
                      <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                        공기업·해외 주재원 퇴사 후 홀로 4개 상용 서비스를 런칭한 파운더와 50분간 내 상황에 맞는 로드맵을 설계합니다.
                      </p>
                    </div>

                    {/* Stage 1·2·3 단계별 맞춤 진단 포인트 */}
                    <div className="p-6 space-y-5">
                      <div className="relative pl-5 border-l-2 border-blue-200 space-y-5">
                        <div className="relative">
                          <span className="absolute -left-[25px] top-1 w-3 h-3 rounded-xs bg-amber-400 ring-4 ring-white" />
                          <div className="text-xs font-black text-gray-900">
                            Stage 1 진단 · 수익화 아이템(PPF) 발굴
                          </div>
                          <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                            내 본업 경력과 성향에서 가장 확실하게 팔릴 첫 프로덕트 도출
                          </p>
                        </div>

                        <div className="relative">
                          <span className="absolute -left-[25px] top-1 w-3 h-3 rounded-xs bg-emerald-500 ring-4 ring-white" />
                          <div className="text-xs font-black text-gray-900">
                            Stage 2 진단 · 부업 현금흐름 & 퍼널 설계
                          </div>
                          <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                            재직 중 스레드·메타 광고로 첫 유료 결제를 검증하는 실행 루틴
                          </p>
                        </div>

                        <div className="relative">
                          <span className="absolute -left-[25px] top-1 w-3 h-3 rounded-xs bg-rose-500 ring-4 ring-white" />
                          <div className="text-xs font-black text-gray-900">
                            Stage 3 진단 · 퇴사·이직·독립 손익 계산
                          </div>
                          <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                            독립 전 확보해야 할 런웨이·기회비용 시뮬레이션 및 90일 로드맵
                          </p>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 text-xs text-gray-700 space-y-1">
                        <div className="font-black text-blue-900">
                          포함 내역
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          사전 진단지 분석 + 50분 1:1 화상 세션 + 맞춤형 90일 Action Blueprint 리포트
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 하단 가격 및 신청 버튼 */}
                  <div className="p-6 pt-4 border-t border-gray-100 bg-gray-50/40">
                    <div className="flex items-baseline justify-between mb-4">
                      <span className="text-xs font-bold text-gray-500">50분 1:1 세션 + 리포트</span>
                      <div>
                        <span className="text-xs text-gray-400 line-through mr-1.5 tabular-nums">
                          {careerProduct.originalPrice.toLocaleString()}원
                        </span>
                        <span className="text-2xl font-black text-blue-600 tabular-nums">
                          {careerProduct.salePrice.toLocaleString()}원
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Link
                        href="/career"
                        className="w-full py-3.5 px-4 brick-btn-blue text-xs sm:text-sm flex items-center justify-center gap-1.5"
                      >
                        <span>컨설팅 상세 안내</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <button
                        type="button"
                        onClick={() => setQuickBuyProduct(careerProduct)}
                        className="w-full py-3 px-4 rounded-xl bg-white hover:bg-gray-100 border border-gray-200 text-gray-800 text-xs font-extrabold transition-colors"
                      >
                        바로 일정 신청하기
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. 무료 입문 가이드 배너 (간결한 1줄 폼)
         ========================================================= */}
      <section className="pt-12">
        <div className="toss-container">
          <div className="brick-card p-6 sm:p-8 bg-white flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold text-amber-600">
                <span>무료 입문 가이드북 (PDF)</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-gray-950">
                스레드 500만 뷰 훅 구조도 & AI 빌더 첫걸음 체크리스트
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">
                이메일을 입력하시면 계정 자가진단 체크리스트와 훅 구조 해부서를 무료로 보내드립니다.
              </p>
            </div>

            {freeKitSent ? (
              <div className="px-5 py-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold flex items-center gap-2 shrink-0">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3]" />
                <span>{freeKitEmail} 로 발송이 접수되었습니다.</span>
              </div>
            ) : (
              <form
                onSubmit={handleFreeKitSubmit}
                className="flex flex-col sm:flex-row gap-2.5 w-full lg:w-auto lg:min-w-[420px]"
              >
                <input
                  type="email"
                  required
                  value={freeKitEmail}
                  onChange={(e) => setFreeKitEmail(e.target.value)}
                  placeholder="받을 이메일 주소 입력"
                  className="flex-1 px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-gray-900"
                />
                <button
                  type="submit"
                  className="px-5 py-3 brick-btn-yellow text-xs sm:text-sm flex items-center justify-center gap-1.5 shrink-0"
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
          신청 모달
         ========================================================= */}
      {quickBuyProduct && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 border border-gray-200 shadow-2xl relative"
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
                <h3 className="text-lg font-black text-gray-950">신청이 접수되었습니다</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  입력해주신 연락처(<strong>{buyerContact}</strong>)로 상세 안내를 보내드립니다.
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
                <h3 className="text-lg font-black text-gray-950 mb-1">{quickBuyProduct.title}</h3>
                <p className="text-xs text-gray-500 mb-5">{quickBuyProduct.deliverableSummary}</p>

                <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-between mb-5">
                  <span className="text-xs font-bold text-gray-600">수강 / 신청 금액</span>
                  <span className="text-lg font-black text-gray-950 tabular-nums">
                    {quickBuyProduct.salePrice === 0
                      ? '무료'
                      : `${quickBuyProduct.salePrice.toLocaleString()}원`}
                  </span>
                </div>

                <form onSubmit={handleQuickOrderSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">성함</label>
                    <input
                      type="text"
                      required
                      value={buyerName}
                      onChange={(e) => setBuyerName(e.target.value)}
                      placeholder="홍길동"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-gray-900"
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
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      메모 (선택)
                    </label>
                    <input
                      type="text"
                      value={buyerNote}
                      onChange={(e) => setBuyerNote(e.target.value)}
                      placeholder="궁금한 점이나 현재 고민을 남겨주세요"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-gray-900"
                    />
                  </div>

                  <button type="submit" className="w-full py-4 brick-btn-green text-sm mt-2">
                    신청 완료하기
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
