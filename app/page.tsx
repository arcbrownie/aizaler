'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Sparkle, 
  ArrowRight, 
  CheckCircle, 
  ShieldCheck, 
  TrendUp, 
  Coins, 
  Clock, 
  Flame, 
  CaretDown, 
  LightbulbFilament, 
  BookOpenText, 
  Database, 
  Compass, 
  DownloadSimple,
  CreditCard,
  Calculator,
  Article,
  UsersThree,
  ArrowUpRight,
  Lightning,
  WarningCircle,
  XCircle
} from '@phosphor-icons/react';

import { PRODUCTS } from '@/data/products';
import { LESSONS } from '@/data/lessons';
import { COLUMNS } from '@/data/columns';
import { REVIEWS } from '@/data/reviews';
import SubscriptionCalculator from '@/components/SubscriptionCalculator';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [emailInput, setEmailInput] = useState('');
  const [isDownloaded, setIsDownloaded] = useState(false);

  const categories = ['전체', '실전 전자책 & 템플릿', '무료 진단 리포트', '14일 액션 챌린지', '1:1 프라이빗 처방'];

  const filteredProducts = selectedCategory === '전체'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategory);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setIsDownloaded(true);
  };

  const faqs = [
    {
      q: '챗GPT나 Claude 무료 버전만 써도 충분히 따라 할 수 있나요?',
      a: '네, 가능합니다. 본 가이드와 챌린지는 무조건 유료 구독을 권장하지 않습니다. 오히려 불필요한 중복 구독을 정리하고, 무료 티어와 무료 API를 활용해 월 비용을 0~1만 원대로 낮추는 다이어트 방법부터 상세히 안내합니다.'
    },
    {
      q: '비개발자나 일반 직장인도 실무에 바로 적용할 수 있나요?',
      a: '100% 비개발자를 위해 설계되었습니다. 복잡한 파이썬 코딩 없이 웹 브라우저에서 복사해서 바로 붙여넣는 실전 프롬프트와 업무 템플릿으로 구성되어 있어, 구매 당일부터 바로 본업 시간을 단축할 수 있습니다.'
    },
    {
      q: '이미 여러 AI 툴을 결제 중인데 무엇부터 정리해야 할까요?',
      a: '상단의 [실시간 AI 구독료 다이어트 진단기]를 활용해 보세요. ChatGPT, Claude, Perplexity 등 각 툴의 핵심 강점을 분석하여, 당신의 직무에 맞는 단 1개만 남기고 나머지를 안전하게 해지하는 체크리스트를 무료로 제공합니다.'
    },
    {
      q: '구매 후 자료는 어떻게 전달받나요?',
      a: '결제 즉시 등록하신 이메일과 마이페이지로 PDF 전자책 및 프롬프트 키트 다운로드 링크가 자동 발송됩니다. 평생 영구 소장 가능하며 향후 업데이트본도 무료로 지원됩니다.'
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pt-6 sm:pt-10">
      {/* ── 1. 히어로 섹션 (Asymmetric Split Hero & Double-Bezel) ── */}
      <section className="toss-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* 좌측: 핵심 가치 제안 (7열) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8f3ff] text-[#3182f6] text-xs font-bold">
              <Sparkle size={14} weight="duotone" />
              <span>AI SUBSCRIPTION COST REDUCTION & LEVERAGE</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black text-[#191f28] leading-[1.2] tracking-tight">
              매달 나가는 AI 구독료 10만 원,<br />
              정작 챗GPT에 <span className="text-[#3182f6] underline decoration-[#3182f6]/30">번역·메일 요약</span>만 시키고 계신가요?
            </h1>

            <p className="text-base sm:text-lg text-[#4e5968] leading-relaxed max-w-xl font-normal">
              도구가 부족한 게 아니라 내 업무와 연결하는 <b>'실전 관점'</b>이 없었을 뿐입니다. 불필요한 중복 구독은 과감히 끊고, 남은 2만 원으로 내 본업의 가치를 10배로 뽑아내는 실전 AI 레버리지.
            </p>

            {/* CTA 버튼 세트 (Double-Bezel Tactile) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#calculator"
                className="toss-button-primary px-7 py-4 text-sm sm:text-base font-bold text-center flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
              >
                <Calculator size={20} weight="bold" />
                <span>내 구독료 절감액 계산하기</span>
              </a>
              <a
                href="#solutions"
                className="px-6 py-4 rounded-2xl bg-white border border-black/[0.08] text-[#191f28] text-sm sm:text-base font-bold text-center hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <span>구독료 뽕뽑기 가이드 보기</span>
                <ArrowRight size={16} weight="bold" />
              </a>
            </div>

            {/* 신뢰 지표 3열 칩 (Double-Bezel Style) */}
            <div className="pt-4 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg border-t border-black/[0.05]">
              <div className="space-y-0.5">
                <div className="text-lg sm:text-2xl font-black text-[#191f28] font-mono tabular-nums">
                  연 84만 원
                </div>
                <div className="text-[11px] text-[#8b95a1] font-medium">평균 구독료 절감</div>
              </div>
              <div className="space-y-0.5">
                <div className="text-lg sm:text-2xl font-black text-[#3182f6] font-mono tabular-nums">
                  주 7.5시간
                </div>
                <div className="text-[11px] text-[#8b95a1] font-medium">실무 단축 시간</div>
              </div>
              <div className="space-y-0.5">
                <div className="text-lg sm:text-2xl font-black text-emerald-600 font-mono tabular-nums">
                  88%
                </div>
                <div className="text-[11px] text-[#8b95a1] font-medium">중복 구독 해지율</div>
              </div>
            </div>
          </div>

          {/* 우측: Before vs After 구독료 다이어트 비교 카드 (5열) */}
          <div className="lg:col-span-5">
            <div className="bezel-card-outer">
              <div className="bezel-card-inner space-y-4">
                <div className="flex items-center justify-between border-b border-black/[0.04] pb-3">
                  <span className="text-xs font-bold text-[#8b95a1] uppercase tracking-wider">
                    구독 구조 Before vs After
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#3182f6]">
                    실측 데이터
                  </span>
                </div>

                {/* Before: 낭비 중 */}
                <div className="p-4 rounded-2xl bg-red-50/50 border border-red-100/80 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-[#f04452]">
                    <span className="flex items-center gap-1.5">
                      <XCircle size={16} weight="fill" /> Before: 무분별한 중복 구독
                    </span>
                    <span className="font-mono tabular-nums">월 98,000원</span>
                  </div>
                  <div className="text-xs text-[#4e5968] space-y-1 pl-5">
                    <div>ChatGPT ($20) + Claude ($20) + Perplexity ($20)</div>
                    <div className="text-[#8b95a1] text-[11px]">
                      연간 117만 원 지출되지만 정작 단순 번역·질문으로 방치
                    </div>
                  </div>
                </div>

                {/* After: 슬림 & 뽕뽑기 */}
                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/70 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-emerald-700">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle size={16} weight="fill" /> After: aizaler 다이어트 & 뽕뽑기
                    </span>
                    <span className="font-mono tabular-nums">월 28,000원</span>
                  </div>
                  <div className="text-xs text-[#333d4b] space-y-1 pl-5">
                    <div>직무 맞춤 1개 툴 + 무료 API 세팅</div>
                    <div className="text-emerald-700 font-bold text-[11px]">
                      연간 84만 원 절감 + 주 7.5시간 실무 단축 효과
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <a
                    href="#calculator"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#3182f6] hover:underline"
                  >
                    직접 내 구독 서비스 체크해보기 <ArrowRight size={14} weight="bold" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. 인터랙티브 AI 구독료 다이어트 계산기 ── */}
      <section id="calculator" className="toss-container space-y-4">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <div className="text-xs font-bold text-[#3182f6] uppercase tracking-wider">
            SAVINGS CALCULATOR
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#191f28] tracking-tight">
            내 AI 구독료 다이어트 계산기
          </h2>
          <p className="text-[#4e5968] text-sm leading-relaxed">
            현재 유료로 결제 중인 AI 도구를 체크해보세요. 불필요한 지출을 걷어내고 얼마를 아낄 수 있는지 즉시 확인해 드립니다.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <SubscriptionCalculator />
        </div>
      </section>

      {/* ── 3. 구독료 뽕뽑기 4대 핵심 축 (Asymmetric Bento Grid) ── */}
      <section className="toss-container space-y-6">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <div className="text-xs font-bold text-[#3182f6] uppercase tracking-wider">
            CORE PRINCIPLES
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#191f28] tracking-tight">
            AI 구독료 뽕뽑는 4대 실전 공식
          </h2>
          <p className="text-[#4e5968] text-sm">
            단순히 돈만 아끼는 것이 아닙니다. 적은 비용으로 최대의 업무 레버리지를 내는 원칙입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1: 2열 너비 Bento */}
          <div className="md:col-span-2 bezel-card-outer">
            <div className="bezel-card-inner h-full flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#e8f3ff] text-[#3182f6] flex items-center justify-center">
                  <Coins size={22} weight="duotone" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#3182f6]">원칙 01 · 구독 다이어트</span>
                  <h3 className="text-lg sm:text-xl font-black text-[#191f28]">
                    직무별 딱 1개 메인 툴만 남기고 나머지는 과감히 해지하기
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4e5968] leading-relaxed">
                    기획자·마케터는 문서 맥락과 글쓰기에 능한 <b>Claude</b>, 최신 웹 리서치가 중요한 직무는 <b>Perplexity</b> 또는 <b>ChatGPT</b> 하나로 충분합니다. 툴을 4개 쓴다고 4배 똑똑해지지 않습니다. 1개를 깊게 세팅하는 것이 훨씬 강력합니다.
                  </p>
                </div>
              </div>
              <div className="pt-2 border-t border-black/[0.04] flex items-center justify-between text-xs text-[#8b95a1]">
                <span>연간 고정비 절감</span>
                <span className="font-mono font-bold text-[#191f28] tabular-nums">평균 840,000원 Save</span>
              </div>
            </div>
          </div>

          {/* Card 2: 1열 너비 Bento */}
          <div className="bezel-card-outer">
            <div className="bezel-card-inner h-full flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <Lightning size={22} weight="duotone" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-purple-600">원칙 02 · 프롬프트 뽕뽑기</span>
                  <h3 className="text-lg font-black text-[#191f28]">
                    "좋은 글 써줘" 금지: 외주급 산출물 도출
                  </h3>
                  <p className="text-xs text-[#4e5968] leading-relaxed">
                    단순 질문 대신 <b>[역할 부여 ➔ 제약 조건 ➔ 3단계 피드백 루프]</b>를 적용하면 100만 원짜리 외주 보고서 수준의 퀄리티를 15분 만에 뽑아냅니다.
                  </p>
                </div>
              </div>
              <div className="pt-2 border-t border-black/[0.04] text-xs text-[#8b95a1]">
                <span>실무 기획서 작성: 4시간 ➔ 15분</span>
              </div>
            </div>
          </div>

          {/* Card 3: 1열 너비 Bento */}
          <div className="bezel-card-outer">
            <div className="bezel-card-inner h-full flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Clock size={22} weight="duotone" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-emerald-600">원칙 03 · 0원 자동화</span>
                  <h3 className="text-lg font-black text-[#191f28]">
                    무료 API & 티어로 반복 업무 0원 처리
                  </h3>
                  <p className="text-xs text-[#4e5968] leading-relaxed">
                    매달 유료 구독을 추가하지 않아도 Gemini Flash 무료 티어나 간단한 웹훅으로 엑셀 정리, 뉴스 브리핑, 데이터 수집을 0원에 자동화할 수 있습니다.
                  </p>
                </div>
              </div>
              <div className="pt-2 border-t border-black/[0.04] text-xs text-[#8b95a1]">
                <span>추가 인프라 비용: 월 0원</span>
              </div>
            </div>
          </div>

          {/* Card 4: 2열 너비 Bento */}
          <div className="md:col-span-2 bezel-card-outer">
            <div className="bezel-card-inner h-full flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <TrendUp size={22} weight="duotone" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-amber-600">원칙 04 · 기회비용 ROI 회수</span>
                  <h3 className="text-lg sm:text-xl font-black text-[#191f28]">
                    월 2만 원 내고 주 7.5시간(월 30시간)을 돌려받는 시간 경제학
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4e5968] leading-relaxed">
                    AI 구독료의 본질은 비용이 아니라 시간 회수입니다. 단순 반복 업무를 AI에게 넘겨 야근을 없애고, 확보된 시간으로 내 본업의 핵심 기획과 커리어 가치를 높이는 실질적인 성장 구조를 만듭니다.
                  </p>
                </div>
              </div>
              <div className="pt-2 border-t border-black/[0.04] flex items-center justify-between text-xs text-[#8b95a1]">
                <span>시급 3만 원 기준 월 환산 가치</span>
                <span className="font-mono font-bold text-[#3182f6] tabular-nums">월 900,000원 회수 (45배 ROI)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. 실전 솔루션 라인업 (Double-Bezel & Tabular Numbers) ── */}
      <section id="solutions" className="toss-container space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs font-bold text-[#3182f6] uppercase tracking-wider">
              PRAGMATIC SOLUTIONS
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#191f28] tracking-tight">
              AI 구독료 뽕뽑기 실전 솔루션
            </h2>
            <p className="text-[#4e5968] text-sm">
              거창한 말 대신, 당장 오늘부터 내 업무 시간을 절반으로 줄여줄 검증된 가이드와 챌린지입니다.
            </p>
          </div>

          {/* 카테고리 필터 탭 */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl bg-white border border-black/[0.04] shadow-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all tactile-btn ${
                  selectedCategory === cat
                    ? 'bg-[#3182f6] text-white shadow-xs'
                    : 'text-[#4e5968] hover:text-[#191f28]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 솔루션 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((p) => (
            <div key={p.id} className="bezel-card-outer flex flex-col justify-between">
              <div className="bezel-card-inner flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* 배지 및 랭크 */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[11px] font-extrabold px-2.5 py-1 rounded-full ${
                        p.badge === 'BEST'
                          ? 'bg-[#ffebee] text-[#f04452]'
                          : p.badge === 'FREE'
                          ? 'bg-emerald-50 text-emerald-600'
                          : 'bg-[#e8f3ff] text-[#3182f6]'
                      }`}
                    >
                      {p.badge}
                    </span>
                    <span className="text-xs font-medium text-[#8b95a1]">
                      {p.category}
                    </span>
                  </div>

                  {/* 제목 및 한줄 카피 */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-black text-[#191f28] leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-xs text-[#4e5968] leading-relaxed">
                      {p.tagline}
                    </p>
                  </div>

                  {/* 핵심 혜택 3개 체크 */}
                  <ul className="space-y-2 text-xs text-[#4e5968] pt-2 border-t border-black/[0.04]">
                    {p.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle size={15} weight="fill" className="text-[#3182f6] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 가격 및 이동 버튼 */}
                <div className="pt-4 border-t border-black/[0.04] space-y-3">
                  <div className="flex items-baseline justify-between">
                    <div>
                      {p.salePrice === 0 ? (
                        <span className="text-2xl font-black text-emerald-600 font-mono">
                          무료 배포
                        </span>
                      ) : (
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-black text-[#191f28] font-mono tabular-nums">
                            {p.salePrice.toLocaleString()}원
                          </span>
                          <span className="text-xs text-[#8b95a1] line-through font-mono tabular-nums">
                            {p.originalPrice.toLocaleString()}원
                          </span>
                        </div>
                      )}
                    </div>
                    {p.discountRate > 0 && p.salePrice > 0 && (
                      <span className="text-xs font-extrabold text-[#f04452]">
                        {p.discountRate}% OFF
                      </span>
                    )}
                  </div>

                  <Link
                    href={`/product/${p.id}`}
                    className="w-full py-3 rounded-xl bg-[#f2f4f6] text-[#191f28] hover:bg-[#3182f6] hover:text-white transition-all text-xs font-bold text-center block tactile-btn"
                  >
                    상세 안내 & 신청하기
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. 실패 복기록 & 신뢰 엔지니어링 (maengmo/supanova 스타일) ── */}
      <section id="lessons" className="toss-container space-y-6">
        <div className="space-y-1">
          <div className="text-xs font-bold text-amber-600 uppercase tracking-wider flex items-center gap-1">
            <Flame size={16} weight="fill" />
            ENGINEERING POST-MORTEM
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#191f28] tracking-tight">
            월 $42로 4개 프로덕트를 굴리며 겪은 실패 복기록
          </h2>
          <p className="text-[#4e5968] text-sm">
            온갖 유료 툴을 결제해보고 낭비해본 끝에 정립한, 1인 테크 스튜디오의 날것 그대로의 교훈입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {LESSONS.map((l) => (
            <div key={l.id} className="bezel-card-outer">
              <div className="bezel-card-inner space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700">
                    {l.category}
                  </span>
                  <span className="text-[11px] text-[#8b95a1] font-mono">
                    {l.statBadge}
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#191f28] leading-snug">
                  {l.title}
                </h4>
                <div className="p-3 rounded-xl bg-[#f9fafb] border border-black/[0.03] space-y-1.5 text-xs">
                  <p className="text-[#f04452] font-semibold">
                    [문제]: {l.problem}
                  </p>
                  <p className="text-[#4e5968]">
                    [해결]: {l.solution}
                  </p>
                </div>
                <p className="text-xs font-bold text-[#3182f6]">
                  {l.rule}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 6. 무료 리드마그넷 다운로드 섹션 ── */}
      <section id="lead-magnet" className="toss-container">
        <div className="p-8 sm:p-12 rounded-[32px] bg-[#191f28] text-white relative overflow-hidden shadow-xl">
          <div className="max-w-2xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold">
              <DownloadSimple size={14} weight="bold" />
              100% 무료 즉시 발송
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
              'AI 구독료 다이어트 체크리스트 & 실무 뽕뽑기 프롬프트 20선'을 무료로 받으세요
            </h2>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              지금 이메일을 입력하시면, ChatGPT·Claude·Perplexity 비교 매트릭스와 즉시 업무에 복사해 쓰는 프롬프트 키트(PDF)를 1분 이내로 보내드립니다.
            </p>

            {isDownloaded ? (
              <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-sm font-bold flex items-center gap-2">
                <CheckCircle size={20} weight="fill" />
                입력하신 이메일로 가이드북 발송이 완료되었습니다! (스팸함도 확인해 주세요)
              </div>
            ) : (
              <form onSubmit={handleDownload} className="flex flex-col sm:flex-row gap-2 max-w-md">
                <input
                  type="email"
                  required
                  placeholder="가이드북을 받을 이메일 주소"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm outline-none focus:border-[#3182f6] flex-1"
                />
                <button
                  type="submit"
                  className="toss-button-primary px-6 py-3.5 text-sm font-bold shadow-md shrink-0 flex items-center justify-center gap-1.5"
                >
                  <DownloadSimple size={16} weight="bold" />
                  무료 받기
                </button>
              </form>
            )}

            <p className="text-[11px] text-gray-400">
              * 스팸 메일은 절대 보내지 않으며 언제든 1클릭으로 구독 취소 가능합니다.
            </p>
          </div>
        </div>
      </section>

      {/* ── 7. 자주 묻는 질문 FAQ ── */}
      <section id="faq" className="toss-container space-y-6">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <div className="text-xs font-bold text-[#3182f6] uppercase tracking-wider">
            FAQ
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#191f28]">
            자주 묻는 질문
          </h2>
          <p className="text-[#4e5968] text-sm">
            궁금하신 점을 빠르게 해결해 드립니다.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bezel-card-outer overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="bezel-card-inner w-full flex items-center justify-between text-left transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base text-[#191f28]">
                    {faq.q}
                  </span>
                  <CaretDown
                    size={18}
                    weight="bold"
                    className={`text-[#8b95a1] transition-transform duration-200 shrink-0 ml-4 ${
                      isOpen ? 'rotate-180 text-[#3182f6]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#4e5968] leading-relaxed border-t border-black/[0.03] bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
