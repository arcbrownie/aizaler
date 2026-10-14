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
  Plus,
  Layers,
  Compass,
} from 'lucide-react';
import { PRODUCTS, Product, BrickStage } from '../data/products';

/**
 * 상단 블록 돌기(Studs) 컴포넌트
 * 실제 블록이 위아래로 맞물려 끼워지는 느낌을 주기 위해 사용
 */
function BrickStuds({
  colorClass,
  count = 4,
  align = 'left',
  size = 'md',
}: {
  colorClass: string;
  count?: number;
  align?: 'left' | 'center' | 'spread';
  size?: 'sm' | 'md' | 'lg';
}) {
  const sizeClass =
    size === 'sm'
      ? 'h-2.5 w-6 rounded-t-[5px]'
      : size === 'lg'
      ? 'h-4 w-10 rounded-t-lg'
      : 'h-3 w-8 rounded-t-md';

  const alignClass =
    align === 'center'
      ? 'justify-center gap-3'
      : align === 'spread'
      ? 'justify-around px-4'
      : 'justify-start gap-3 px-6';

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

/**
 * 단계와 단계 사이가 물리적으로 조립·결합되는 커넥터 블록
 */
function StageConnector({
  fromLabel,
  toLabel,
  studColor,
}: {
  fromLabel: string;
  toLabel: string;
  studColor: string;
}) {
  return (
    <div className="flex flex-col items-center py-2 select-none">
      <div className="w-1 h-4 bg-gray-300 rounded-full" />
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-white border-2 border-gray-300 shadow-[0_3px_0_#d1d5db] text-xs font-extrabold text-gray-700">
        <span className="text-gray-400">{fromLabel}</span>
        <span>➔</span>
        <span className="text-gray-900">{toLabel} 조립 결합</span>
      </div>
      <div className="w-1 h-4 bg-gray-300 rounded-full" />
      <BrickStuds colorClass={studColor} count={6} align="center" size="md" />
    </div>
  );
}

export default function Home() {
  // 히어로 조립 시뮬레이터 상태: 1(Stage1만) -> 2(Stage1+2) -> 3(Stage1+2+3+Career 세로축 완성)
  const [assembledLevel, setAssembledLevel] = useState<number>(3);
  const [stackReplayKey, setStackReplayKey] = useState<number>(0);
  const [highlightedStage, setHighlightedStage] = useState<BrickStage | null>(null);

  // 빠른 신청 모달
  const [quickBuyProduct, setQuickBuyProduct] = useState<Product | null>(null);
  const [buyerName, setBuyerName] = useState('');
  const [buyerContact, setBuyerContact] = useState('');
  const [buyerNote, setBuyerNote] = useState('');
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  // 무료 스타터 PDF 폼
  const [freeKitEmail, setFreeKitEmail] = useState('');
  const [freeKitSent, setFreeKitSent] = useState(false);

  // 단계별 상품 분리
  const stage1Products = PRODUCTS.filter((p) => p.brickStage === 'STAGE_1');
  const stage2Products = PRODUCTS.filter((p) => p.brickStage === 'STAGE_2');
  const stage3Products = PRODUCTS.filter((p) => p.brickStage === 'STAGE_3');
  const careerProduct = PRODUCTS.find((p) => p.brickStage === 'CAREER')!;

  const handleStepAssembly = () => {
    if (assembledLevel < 3) {
      setAssembledLevel((prev) => prev + 1);
    } else {
      setAssembledLevel(1);
      setStackReplayKey((prev) => prev + 1);
    }
  };

  const handleReplayFullStack = () => {
    setAssembledLevel(3);
    setStackReplayKey((prev) => prev + 1);
  };

  const scrollToStageSection = (sectionId: string, stage: BrickStage) => {
    setHighlightedStage(stage);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    setTimeout(() => setHighlightedStage(null), 1800);
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
          1. HERO SECTION
             좌측: 핵심 메시지
             우측: [가로 1·2·3단 블록 적층] + [우측 세로 축 Career 기둥] 조립 보드
         ========================================================= */}
      <section className="pt-10 pb-16 md:pt-16 md:pb-24 border-b border-gray-200/80">
        <div className="toss-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* 좌측 카피 영역 (5칸) */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <p className="text-sm sm:text-base font-extrabold text-emerald-600 tracking-tight">
                어릴 때 블록 조립하는 거 좋아하셨나요?
              </p>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 leading-[1.15]">
                나를 위해 만든 작은 블록이,
                <br />
                내 첫 번째 수익원이 됩니다.
              </h1>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                처음부터 거창한 창업을 할 필요 없습니다.
                <strong className="text-gray-900"> 1단(내 도구 조립)</strong> 위에{' '}
                <strong className="text-gray-900">2단(스레드 500만 뷰·메타 수익화)</strong>을 끼우고,{' '}
                <strong className="text-gray-900">3단(1인 풀스택 시스템)</strong>으로 확장하세요.
                전 과정을 관통하는 <strong className="text-blue-600">1:1 커리어 의사결정 축</strong>이 옆에서 흔들림 없이 잡아줍니다.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <a
                  href="#stack-builder"
                  className="brick-btn-green px-6 py-4 text-sm sm:text-base inline-flex items-center justify-center gap-2"
                >
                  <span>1·2·3단 블록 설계도 보기</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/career"
                  className="brick-btn-blue px-6 py-4 text-sm sm:text-base inline-flex items-center justify-center gap-2"
                >
                  <span>1:1 커리어 세로축 상담</span>
                </Link>
              </div>

              {/* 심플 실증 지표 */}
              <div className="grid grid-cols-4 gap-3 pt-5 border-t border-gray-200">
                <div>
                  <div className="text-lg sm:text-xl font-black text-gray-900 tabular-nums">500만+</div>
                  <div className="text-[11px] text-gray-500">스레드 실측 뷰</div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-black text-emerald-600">Certified</div>
                  <div className="text-[11px] text-gray-500">Meta 공식 인증</div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-black text-gray-900 tabular-nums">8.6%</div>
                  <div className="text-[11px] text-gray-500">메타 광고 전환율</div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-black text-gray-900 tabular-nums">월 $42</div>
                  <div className="text-[11px] text-gray-500">4개 서비스 운영</div>
                </div>
              </div>
            </div>

            {/* 우측 인터랙티브 블록 조립 보드 (7칸):
                좌측 8열은 Stage 1 -> 2 -> 3 가로 블록이 빈틈없이 맞물려 쌓이고,
                우측 4열은 파란색 Career 블록이 세로 기둥(Vertical Axis)으로 결합됨 */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[32px] p-5 sm:p-7 border-2 border-gray-200 shadow-[0_8px_0_#e5e7eb]">
                {/* 상단 조립 컨트롤 바 */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-5 mb-5 border-b border-gray-100">
                  <div>
                    <div className="text-xs font-mono font-black text-gray-400 uppercase">
                      INTERACTIVE BLOCK ARCHITECTURE
                    </div>
                    <h2 className="text-sm sm:text-base font-black text-gray-900">
                      가로 3단 성장 블록 + 세로 커리어 축 조립도
                    </h2>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleStepAssembly}
                      className="px-3.5 py-2 rounded-xl bg-gray-900 hover:bg-gray-800 text-white text-xs font-extrabold inline-flex items-center gap-1.5 shadow-[0_3px_0_#000] active:translate-y-0.5 transition-all"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>
                        {assembledLevel < 3
                          ? `${assembledLevel + 1}단 블록 끼우기 (${assembledLevel}/3)`
                          : '1단부터 직접 쌓아보기'}
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={handleReplayFullStack}
                      className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                      title="전체 조립 모션 다시 재생"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* 조립 스테이지 캔버스: 가로 3단 적층(좌) + 세로 커리어 기둥(우) */}
                <div
                  key={stackReplayKey}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-stretch bg-[#F5F6F8] p-4 sm:p-6 rounded-2xl border-2 border-gray-200/80"
                >
                  {/* 좌측(8칸): 아래(1단 노랑)에서 위(2단 초록 -> 3단 빨강)로 실제 맞물려 쌓이는 타워 */}
                  <div className="sm:col-span-8 flex flex-col justify-end">
                    {/* ── 3층: STAGE 03 (빨간 블록) ── */}
                    <div className="min-h-[92px] flex flex-col justify-end">
                      <AnimatePresence>
                        {assembledLevel >= 3 && (
                          <motion.div
                            key="hero-stage-3"
                            initial={{ opacity: 0, y: -55, scale: 0.92 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -30, scale: 0.9 }}
                            transition={{
                              type: 'spring',
                              stiffness: 380,
                              damping: 22,
                              delay: stackReplayKey > 0 && assembledLevel === 3 ? 0.34 : 0,
                            }}
                            whileHover={{ scale: 1.01 }}
                            onClick={() => scrollToStageSection('stage-3-layer', 'STAGE_3')}
                            className="cursor-pointer relative z-30"
                          >
                            <BrickStuds colorClass="bg-rose-500 border-rose-600" count={4} align="spread" />
                            <div className="rounded-t-2xl rounded-b-lg border-2 border-rose-600 bg-rose-500 text-white p-4 shadow-[0_5px_0_#be123c]">
                              <div className="flex items-center justify-between text-[11px] font-mono font-black opacity-90 mb-0.5">
                                <span>3층 · STAGE 03 (풀스택 확장)</span>
                                <span>클릭하여 이동 ↓</span>
                              </div>
                              <div className="text-sm sm:text-base font-black">
                                외주비 0원·월 $42 1인 풀스택 & 터미널 자동화
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* ── 2층: STAGE 02 (초록 블록 · 주력 수익화 엔진) - 3층 아래에 빈틈없이 맞물림 ── */}
                    <div className="min-h-[104px] flex flex-col justify-end -mt-1">
                      <AnimatePresence>
                        {assembledLevel >= 2 && (
                          <motion.div
                            key="hero-stage-2"
                            initial={{ opacity: 0, y: -50, scale: 0.92 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -25, scale: 0.9 }}
                            transition={{
                              type: 'spring',
                              stiffness: 380,
                              damping: 22,
                              delay: stackReplayKey > 0 && assembledLevel === 3 ? 0.17 : 0,
                            }}
                            whileHover={{ scale: 1.01 }}
                            onClick={() => scrollToStageSection('stage-2-layer', 'STAGE_2')}
                            className="cursor-pointer relative z-20"
                          >
                            <BrickStuds
                              colorClass="bg-emerald-500 border-emerald-600"
                              count={5}
                              align="spread"
                            />
                            <div className="rounded-xl border-2 border-emerald-600 bg-emerald-500 text-white p-4 sm:p-5 shadow-[0_6px_0_#047857]">
                              <div className="flex items-center justify-between text-[11px] font-mono font-black mb-0.5">
                                <span>2층 · STAGE 02 (주력 수익화 엔진)</span>
                                <span>클릭하여 이동 ↓</span>
                              </div>
                              <div className="text-base sm:text-lg font-black">
                                스레드 500만 뷰 & 메타 광고 CVR 8.6% 퍼널
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* ── 1층: STAGE 01 (노란 기초 블록) - 바닥 베이스플레이트에 단단히 고정 ── */}
                    <div className="-mt-1">
                      <motion.div
                        key="hero-stage-1"
                        initial={{ opacity: 0, y: -40, scale: 0.94 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ type: 'spring', stiffness: 380, damping: 22 }}
                        whileHover={{ scale: 1.01 }}
                        onClick={() => scrollToStageSection('stage-1-layer', 'STAGE_1')}
                        className="cursor-pointer relative z-10"
                      >
                        <BrickStuds colorClass="bg-amber-400 border-amber-500" count={6} align="spread" />
                        <div className="rounded-b-2xl rounded-t-lg border-2 border-amber-500 bg-amber-400 text-gray-950 p-4 sm:p-5 shadow-[0_6px_0_#d97706]">
                          <div className="flex items-center justify-between text-[11px] font-mono font-black opacity-80 mb-0.5">
                            <span>1층 · STAGE 01 (기초 조립)</span>
                            <span>클릭하여 이동 ↓</span>
                          </div>
                          <div className="text-base sm:text-lg font-black">
                            나를 위한 첫 AI 도구(.skills) & 업무 자동화
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* 우측(4칸): 1~3층 전체를 세로로 관통하며 지지하는 파란색 커리어 기둥 블록 (Vertical Axis) */}
                  <motion.div
                    initial={{ opacity: 0, x: 35, scale: 0.94 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 24, delay: 0.45 }}
                    whileHover={{ scale: 1.015, y: -2 }}
                    onClick={() => scrollToStageSection('career-axis-pillar', 'CAREER')}
                    className="sm:col-span-4 flex flex-col cursor-pointer"
                  >
                    <BrickStuds colorClass="bg-blue-600 border-blue-700" count={2} align="center" />
                    <div className="flex-1 rounded-2xl border-2 border-blue-700 bg-blue-600 text-white p-4 sm:p-5 shadow-[0_6px_0_#1d4ed8] flex flex-col justify-between relative overflow-hidden">
                      {/* 세로 눈금선 디테일 (1층·2층·3층 연결 표시) */}
                      <div className="space-y-2">
                        <div className="text-[10px] font-mono font-black tracking-wider uppercase text-blue-200">
                          VERTICAL AXIS · 세로 축
                        </div>
                        <div className="text-base sm:text-lg font-black leading-snug">
                          1:1 커리어 &
                          <br />
                          빌더 의사결정
                        </div>
                        <p className="text-xs text-blue-100 leading-relaxed">
                          공기업·주재원 퇴사 파운더가 1~3단계 전 과정의 방향성과 손익을 함께 잡습니다.
                        </p>
                      </div>

                      <div className="space-y-1.5 my-4 pt-3 border-t border-blue-400/30 text-[11px] font-bold text-blue-100">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-xs bg-rose-400 shrink-0" />
                          <span>3단: 독립·법인 전환 시점</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-xs bg-emerald-400 shrink-0" />
                          <span>2단: 부업 현금흐름 검증</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-xs bg-amber-300 shrink-0" />
                          <span>1단: 내 경력 상품화(PPF)</span>
                        </div>
                      </div>

                      <div className="pt-2 flex items-center justify-between text-xs font-black text-white">
                        <span>세로축 상세 보기</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* 하단 베이스플레이트 안내 */}
                <div className="mt-3 flex items-center justify-between text-[11px] font-bold text-gray-400 px-1">
                  <span>BASEPLATE: 노란 블록(1층) 위에 초록(2층)·빨강(3층)을 쌓고, 파란 기둥(세로축)으로 고정</span>
                  <span className="text-gray-600">현재 조립: {assembledLevel}단 / 3단</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. MAIN ARCHITECTURAL BLUEPRINT (#stack-builder)
             좌측(8칸): Stage 01 ➔ Stage 02 ➔ Stage 03 단계별 블록 조립 층
             우측(4칸): 1~3단계를 세로로 관통하는 Sticky 파란색 커리어 기둥(Axis)
         ========================================================= */}
      <section id="stack-builder" className="py-20 md:py-28">
        <div className="toss-container">
          {/* 섹션 타이틀 */}
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-mono font-black text-gray-500 uppercase tracking-wider mb-2">
              STEP-BY-STEP BLOCK ASSEMBLY
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight">
              1단부터 3단까지 순서대로 쌓거나,
              <br />
              우측 세로축(1:1 커리어)으로 전체 설계도를 먼저 잡으세요
            </h2>
          </div>

          {/* ── 좌측 8칸 (1·2·3단계 가로 층 적층) + 우측 4칸 (세로 커리어 기둥) ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* =====================================================
                LEFT 8 COLUMNS: STAGE 1 ➔ STAGE 2 ➔ STAGE 3 STACK
               ===================================================== */}
            <div className="lg:col-span-8 space-y-0">
              {/* ───────────────────────────────────────────────────
                  [STAGE 01 · 노란 블록 층] 나를 위한 첫 AI 도구 조립
                 ─────────────────────────────────────────────────── */}
              <motion.div
                id="stage-1-layer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className={`transition-all duration-300 ${
                  highlightedStage === 'STAGE_1' ? 'scale-[1.01]' : ''
                }`}
              >
                <BrickStuds colorClass="bg-amber-400 border-amber-500" count={6} />
                <div className="brick-card-yellow p-6 sm:p-8 bg-white">
                  {/* Stage 1 Header Beam */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-amber-400 text-gray-950 border-2 border-amber-500 shadow-[0_4px_0_#d97706] mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <div className="text-xs font-mono font-black opacity-80">
                        STAGE 01 · FOUNDATION BLOCK (1단 기초)
                      </div>
                      <h3 className="text-lg sm:text-2xl font-black">
                        나를 위한 첫 AI 도구 & 업무 자동화 조립
                      </h3>
                    </div>
                    <span className="text-xs font-extrabold bg-white/90 px-3 py-1.5 rounded-xl self-start sm:self-auto shrink-0">
                      입문 · 자가 해결
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                    가장 확실한 첫 번째 고객은 ‘어제의 나 자신’입니다. 제가 아이 이름을 지으려고 <strong>명사도</strong>를 만들고, 학군을 보려고 <strong>맹모인사이트</strong>를 만들었듯, 코딩을 몰라도 내 반복 업무를 대신해 줄 작은 AI 일꾼 블록부터 조립합니다.
                  </p>

                  {/* Stage 1 Sub-Blocks (2개 블록이 나란히 결합) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {stage1Products.map((product) => (
                      <div key={product.id} className="flex flex-col">
                        <BrickStuds colorClass="bg-amber-300 border-amber-400" count={3} size="sm" />
                        <div className="rounded-2xl border-2 border-amber-300 bg-amber-50/40 p-5 flex-1 flex flex-col justify-between shadow-[0_4px_0_#fcd34d]">
                          <div>
                            <div className="flex items-center justify-between text-xs font-extrabold text-amber-700 mb-2">
                              <span>{product.brickStageLabel}</span>
                              <span>{product.badge}</span>
                            </div>
                            <h4 className="text-base sm:text-lg font-black text-gray-900 mb-2 leading-snug">
                              {product.title}
                            </h4>
                            <p className="text-xs text-gray-600 leading-relaxed mb-4">
                              {product.tagline}
                            </p>
                          </div>

                          <div className="pt-4 border-t border-amber-200/70">
                            <div className="flex items-baseline justify-between mb-3">
                              <span className="text-xs text-gray-400 line-through">
                                {product.originalPrice.toLocaleString()}원
                              </span>
                              <span className="text-xl font-black text-gray-900">
                                {product.salePrice === 0
                                  ? '무료 (0원)'
                                  : `${product.salePrice.toLocaleString()}원`}
                              </span>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              <Link
                                href={`/product/${product.id}`}
                                className="py-2.5 px-3 rounded-xl bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 text-xs font-extrabold text-center"
                              >
                                상세 설명서
                              </Link>
                              <button
                                type="button"
                                onClick={() => setQuickBuyProduct(product)}
                                className="py-2.5 px-3 brick-btn-yellow text-xs"
                              >
                                블록 조립
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* ── 1단 ➔ 2단 물리 조립 커넥터 ── */}
              <StageConnector
                fromLabel="STAGE 01 (내 도구 완성)"
                toLabel="STAGE 02 (트래픽·수익화 엔진)"
                studColor="bg-emerald-500 border-emerald-600"
              />

              {/* ───────────────────────────────────────────────────
                  [STAGE 02 · 초록 블록 층] 스레드 500만 뷰 & 메타 광고 수익화 (주력)
                 ─────────────────────────────────────────────────── */}
              <motion.div
                id="stage-2-layer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className={`transition-all duration-300 ${
                  highlightedStage === 'STAGE_2' ? 'scale-[1.01]' : ''
                }`}
              >
                <div id="monetize" className="brick-card-green p-6 sm:p-8 bg-white">
                  {/* Stage 2 Header Beam */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-emerald-500 text-white border-2 border-emerald-600 shadow-[0_4px_0_#047857] mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <div className="text-xs font-mono font-black opacity-90">
                        STAGE 02 · MONETIZATION BLOCK (2단 주력 수익화)
                      </div>
                      <h3 className="text-lg sm:text-2xl font-black">
                        스레드 500만 뷰 & 메타 광고 고전환 수익화 엔진
                      </h3>
                    </div>
                    <span className="text-xs font-extrabold bg-gray-900 text-emerald-300 px-3 py-1.5 rounded-xl self-start sm:self-auto shrink-0">
                      파운더 주력 무기
                    </span>
                  </div>

                  {/* 실전 역공학 요약 바 */}
                  <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 mb-6 text-xs sm:text-sm text-gray-700 leading-relaxed">
                    <strong className="text-emerald-800 block mb-1">
                      “스레드 20만 뷰에 결제 4건이던 실패를 500만 뷰 역공학 DB와 메타 CVR 8.6% 퍼널로 뒤집었습니다.”
                    </strong>
                    1단에서 만든 도구나 노하우가 아무리 좋아도, 사람이 모이지 않고 결제 버튼이 눌리지 않으면 0원입니다. 오가닉(스레드)과 유료 광고(Meta Certified) 두 개의 초록 블록을 결합해 즉각적인 현금흐름을 만듭니다.
                  </div>

                  {/* Stage 2 Sub-Blocks (스레드 바이블 + 메타 광고 플레이북) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {stage2Products.map((product) => (
                      <div key={product.id} className="flex flex-col">
                        <BrickStuds
                          colorClass="bg-emerald-400 border-emerald-500"
                          count={3}
                          size="sm"
                        />
                        <div className="rounded-2xl border-2 border-emerald-400 bg-emerald-50/30 p-5 flex-1 flex flex-col justify-between shadow-[0_4px_0_#34d399]">
                          <div>
                            <div className="flex items-center justify-between text-xs font-extrabold text-emerald-700 mb-2">
                              <span>{product.brickStageLabel}</span>
                              <span>{product.badge}</span>
                            </div>
                            <h4 className="text-base sm:text-lg font-black text-gray-900 mb-2 leading-snug">
                              {product.title}
                            </h4>
                            <p className="text-xs text-gray-600 leading-relaxed mb-4">
                              {product.tagline}
                            </p>
                            <ul className="space-y-1.5 mb-5">
                              {product.features.slice(0, 3).map((feat, fIdx) => (
                                <li
                                  key={fIdx}
                                  className="flex items-start gap-2 text-xs text-gray-700"
                                >
                                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5 stroke-[3]" />
                                  <span>{feat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="pt-4 border-t border-emerald-200/70">
                            <div className="flex items-baseline justify-between mb-3">
                              <span className="text-xs text-gray-400 line-through">
                                {product.originalPrice.toLocaleString()}원
                              </span>
                              <span className="text-xl font-black text-gray-900">
                                {product.salePrice.toLocaleString()}원
                              </span>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              <Link
                                href={`/product/${product.id}`}
                                className="py-2.5 px-3 rounded-xl bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 text-xs font-extrabold text-center"
                              >
                                상세 설명서
                              </Link>
                              <button
                                type="button"
                                onClick={() => setQuickBuyProduct(product)}
                                className="py-2.5 px-3 brick-btn-green text-xs"
                              >
                                블록 조립
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* ── 2단 ➔ 3단 물리 조립 커넥터 ── */}
              <StageConnector
                fromLabel="STAGE 02 (첫 매출 발생)"
                toLabel="STAGE 03 (1인 풀스택 시스템화)"
                studColor="bg-rose-500 border-rose-600"
              />

              {/* ───────────────────────────────────────────────────
                  [STAGE 03 · 빨간 블록 층] 월 $42 1인 풀스택 & 터미널 자동화
                 ─────────────────────────────────────────────────── */}
              <motion.div
                id="stage-3-layer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className={`transition-all duration-300 ${
                  highlightedStage === 'STAGE_3' ? 'scale-[1.01]' : ''
                }`}
              >
                <div className="brick-card-red p-6 sm:p-8 bg-white">
                  {/* Stage 3 Header Beam */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-rose-500 text-white border-2 border-rose-600 shadow-[0_4px_0_#be123c] mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <div className="text-xs font-mono font-black opacity-90">
                        STAGE 03 · SYSTEM BLOCK (3단 풀스택 & 스케일업)
                      </div>
                      <h3 className="text-lg sm:text-2xl font-black">
                        외주비 0원·월 $42 풀스택 배포 & 터미널 자동화
                      </h3>
                    </div>
                    <span className="text-xs font-extrabold bg-white/20 px-3 py-1.5 rounded-xl self-start sm:self-auto shrink-0">
                      심화 · 1인 기업화
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                    수익성이 검증된 블록에 실제 결제창과 데이터베이스를 달아 상용 웹서비스로 격상시킬 단계입니다. 개발자 외주비 수천만 원을 쓰는 대신, <strong>월 $42 고정비로 4개 서비스를 운영하는 풀스택 아키텍처</strong>와 <strong>Claude Code 터미널 자동화</strong>로 1인 스튜디오를 완성합니다.
                  </p>

                  {/* Stage 3 Sub-Blocks */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {stage3Products.map((product) => (
                      <div key={product.id} className="flex flex-col">
                        <BrickStuds colorClass="bg-rose-400 border-rose-500" count={3} size="sm" />
                        <div className="rounded-2xl border-2 border-rose-300 bg-rose-50/30 p-5 flex-1 flex flex-col justify-between shadow-[0_4px_0_#fda4af]">
                          <div>
                            <div className="flex items-center justify-between text-xs font-extrabold text-rose-600 mb-2">
                              <span>{product.brickStageLabel}</span>
                              <span>{product.badge}</span>
                            </div>
                            <h4 className="text-base sm:text-lg font-black text-gray-900 mb-2 leading-snug">
                              {product.title}
                            </h4>
                            <p className="text-xs text-gray-600 leading-relaxed mb-4">
                              {product.tagline}
                            </p>
                          </div>

                          <div className="pt-4 border-t border-rose-200/70">
                            <div className="flex items-baseline justify-between mb-3">
                              <span className="text-xs text-gray-400 line-through">
                                {product.originalPrice.toLocaleString()}원
                              </span>
                              <span className="text-xl font-black text-gray-900">
                                {product.salePrice.toLocaleString()}원
                              </span>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              <Link
                                href={`/product/${product.id}`}
                                className="py-2.5 px-3 rounded-xl bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 text-xs font-extrabold text-center"
                              >
                                상세 설명서
                              </Link>
                              <button
                                type="button"
                                onClick={() => setQuickBuyProduct(product)}
                                className="py-2.5 px-3 brick-btn-red text-xs"
                              >
                                블록 조립
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* =====================================================
                RIGHT 4 COLUMNS: VERTICAL CAREER PILLAR (세로 축)
                스크롤을 따라오며 Stage 1·2·3 전 과정을 옆에서 지지하는 기둥
               ===================================================== */}
            <div id="career" className="lg:col-span-4 lg:sticky lg:top-24">
              <motion.div
                id="career-axis-pillar"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className={`transition-all duration-300 ${
                  highlightedStage === 'CAREER' ? 'scale-[1.02]' : ''
                }`}
              >
                <BrickStuds colorClass="bg-blue-600 border-blue-700" count={4} align="center" />
                <div className="brick-card-blue overflow-hidden bg-white">
                  {/* Top Blue Vertical Pillar Header */}
                  <div className="bg-blue-600 text-white p-6 border-b-2 border-blue-700">
                    <div className="flex items-center justify-between text-xs font-mono font-black text-blue-200 mb-2">
                      <span>VERTICAL AXIS · 세로 축</span>
                      <span>1:1 CONSULTING</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black leading-snug mb-2">
                      공기업·주재원 퇴사 파운더의
                      <br />
                      1:1 커리어 & 빌더 의사결정
                    </h3>
                    <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                      본격적인 멤버십 오픈 전 주력으로 진행하는 1:1 전략 세션입니다. 좌측 1·2·3단계를 내 직무와 상황에 어떻게 맞물려 조립할지 50분간 직접 설계해 드립니다.
                    </p>
                  </div>

                  {/* Vertical Spine Connecting Stage 1, 2, 3 */}
                  <div className="p-6 space-y-5">
                    <div className="text-xs font-extrabold text-gray-500">
                      세로축이 잡아주는 단계별 핵심 의사결정
                    </div>

                    <div className="relative pl-6 border-l-4 border-blue-600 space-y-5">
                      {/* Aligns with Stage 1 */}
                      <div className="relative">
                        <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-sm bg-amber-400 border-2 border-amber-600" />
                        <div className="text-xs font-black text-amber-600">
                          1단 연결 · 내 경험의 아이템화 (PPF)
                        </div>
                        <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                          내 본업 경력과 성향에서 가장 확실하게 돈이 될 첫 번째 도구/아이템 발굴
                        </p>
                      </div>

                      {/* Aligns with Stage 2 */}
                      <div className="relative">
                        <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-sm bg-emerald-500 border-2 border-emerald-700" />
                        <div className="text-xs font-black text-emerald-600">
                          2단 연결 · 부업 현금흐름 & 퍼널 진단
                        </div>
                        <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                          월급을 받으며 스레드·메타 광고로 첫 유료 결제를 검증하는 현실적 루틴 설계
                        </p>
                      </div>

                      {/* Aligns with Stage 3 */}
                      <div className="relative">
                        <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-sm bg-rose-500 border-2 border-rose-700" />
                        <div className="text-xs font-black text-rose-600">
                          3단 연결 · 퇴사/이직/독립 손익 계산
                        </div>
                        <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                          조직을 나오기 전 반드시 확보해야 할 런웨이·기회비용 시뮬레이션 및 90일 로드맵
                        </p>
                      </div>
                    </div>

                    {/* Deliverable Box */}
                    <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-1.5">
                      <div className="text-xs font-black text-blue-800">
                        세션 산출물: [나만의 90일 Action Blueprint]
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        사전 질문지 분석 + 50분 1:1 화상 세션 직후, 파운더가 직접 조판한 맞춤 실행 설계도를 전달합니다.
                      </p>
                    </div>

                    {/* Price & CTAs */}
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-baseline justify-between mb-4">
                        <span className="text-xs font-bold text-gray-500">50분 밀착 처방 + 리포트</span>
                        <div>
                          <span className="text-xs text-gray-400 line-through mr-1.5">
                            {careerProduct.originalPrice.toLocaleString()}원
                          </span>
                          <span className="text-2xl font-black text-blue-600 tabular-nums">
                            {careerProduct.salePrice.toLocaleString()}원
                          </span>
                        </div>
                      </div>

                      <div className="space-y-2.5">
                        <Link
                          href="/career"
                          className="w-full py-4 px-4 brick-btn-blue text-xs sm:text-sm flex items-center justify-center gap-1.5"
                        >
                          <Compass className="w-4 h-4" />
                          <span>1:1 커리어 연구소 상세 페이지</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                        <button
                          type="button"
                          onClick={() => setQuickBuyProduct(careerProduct)}
                          className="w-full py-3 px-4 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-extrabold transition-colors"
                        >
                          여기서 바로 일정 신청하기
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. FREE STAGE 1 STARTER BLOCK (하단 무료 입문 블록)
         ========================================================= */}
      <section className="pt-8">
        <div className="toss-container max-w-3xl">
          <BrickStuds colorClass="bg-amber-400 border-amber-500" count={4} />
          <div className="brick-card-yellow p-7 sm:p-9 bg-white">
            <div className="text-xs font-mono font-black text-amber-600 uppercase tracking-wider mb-1">
              START WITH BLOCK #01
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2">
              첫 번째 노란 블록(무료 설계도 PDF)부터 받아보세요
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-6 leading-relaxed">
              이메일을 입력하시면 <strong>[스레드 500만 뷰 훅 구조 해부서 & 1인 빌더 첫 조립 체크리스트 (PDF)]</strong>를 무료로 보내드립니다.
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
