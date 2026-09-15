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
  DownloadSimple,
  CreditCard,
  Calculator,
  Article,
  UsersThree,
  ArrowUpRight,
  Lightning,
  RocketLaunch,
  Target,
  FileText
} from '@phosphor-icons/react';

import { PRODUCTS } from '@/data/products';
import { LESSONS } from '@/data/lessons';
import { COLUMNS } from '@/data/columns';
import { REVIEWS } from '@/data/reviews';
import PromptDiffViewer from '@/components/PromptDiffViewer';
import GrowthRoadmapCalculator from '@/components/GrowthRoadmapCalculator';
import SubscriptionCalculator from '@/components/SubscriptionCalculator';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [emailInput, setEmailInput] = useState('');
  const [isDownloaded, setIsDownloaded] = useState(false);

  const categories = ['전체', '실전 전자책 & 템플릿', '무료 성장 워크북', '14일 액션 챌린지', '1:1 프라이빗 처방'];

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
      q: '챗GPT를 단순 챗봇이 아니라 "내 부사수"로 쓴다는 게 구체적으로 어떤 뜻인가요?',
      a: '대부분은 "이거 요약해줘", "영어 번역해줘" 같은 1회성 질문에 그칩니다. 하지만 aizaler 워크플로우는 AI에게 명확한 역할(예: YC 출신 시니어 PM), 제약 조건, 실무 산출물 포맷을 사전에 주입하여, 기획서 초안, 광고 카피 20종, 복잡한 데이터 분석까지 단 15초 만에 상사나 클라이언트에게 보고할 수 있는 실무급 산출물을 뽑아내도록 시스템화하는 것을 뜻합니다.'
    },
    {
      q: '비개발자나 마케터, 일반 사무직도 따라 할 수 있나요?',
      a: '100% 비개발자를 위해 설계되었습니다. 복잡한 코딩 지식 없이 웹 브라우저나 모바일 앱에서 그대로 복사해 붙여넣는 프롬프트 템플릿과 업무 자동화 파이프라인으로 구성되어 있습니다.'
    },
    {
      q: '무료 버전만 써도 충분한가요, 아니면 유료 플랜(Plus/Pro)이 필수인가요?',
      a: '무료 버전으로도 기본 워크플로우의 70% 이상을 즉시 실행할 수 있습니다. 이미 월 2~3만 원을 결제 중이시라면 그 돈의 1000% 본전을 뽑는 방법을, 결제하지 않으셨다면 무료 티어와 무료 API로 0원에 스마트하게 굴리는 법을 안내합니다.'
    },
    {
      q: '14일 챌린지는 직장 생활과 병행이 가능한가요?',
      a: '네, 하루 20분 액션으로 설계되었습니다. 주말이나 퇴근 후 20분 동안 주어진 1일 1미션을 따라 하다 보면, 14일 뒤 내 실제 업무 루틴 3개가 AI 자동화로 넘어가 있고 나만의 첫 웹서비스 랜딩페이지까지 완성됩니다.'
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pt-6 sm:pt-10">
      {/* ── 1. 히어로 섹션 (Asymmetric Split: 뽕뽑기 ➔ 초격차 성장) ── */}
      <section className="toss-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* 좌측: 강력한 성장 제안 (7열) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8f3ff] text-[#3182f6] text-xs font-bold">
              <RocketLaunch size={14} weight="duotone" />
              <span>AI LEVERAGE: 뽕뽑기 ➔ 초격차 성장</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black text-[#191f28] leading-[1.2] tracking-tight">
              월 2만 원 내고 번역·요약만 시키던 시절은 끝났습니다.<br />
              AI를 내 1등 부사수로 굴려,<br />
              <span className="text-[#3182f6] underline decoration-[#3182f6]/30">본업 초격차 성장</span>을 만드는 법.
            </h1>

            <p className="text-base sm:text-lg text-[#4e5968] leading-relaxed max-w-xl font-normal">
              단순 질문 챗봇으로 쓰면 월 2만 원도 아깝지만, <b>5명의 가상 팀원</b>으로 세팅하는 순간 주당 8.5시간이 회수되고 내 커리어 밸류가 10배로 뜁니다. 뜬구름 잡는 이론이 아닌, 1인 테크 스튜디오의 실측 워크플로우를 공개합니다.
            </p>

            {/* CTA 버튼 세트 */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#roadmap"
                className="toss-button-primary px-7 py-4 text-sm sm:text-base font-bold text-center flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
              >
                <Target size={20} weight="bold" />
                <span>내 직무 성장 로드맵 진단하기</span>
              </a>
              <a
                href="#diff-viewer"
                className="px-6 py-4 rounded-2xl bg-white border border-black/[0.08] text-[#191f28] text-sm sm:text-base font-bold text-center hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <span>프롬프트 DIFF 비교기 보기</span>
                <ArrowRight size={16} weight="bold" />
              </a>
            </div>

            {/* 신뢰 지표 3열 칩 (Double-Bezel) */}
            <div className="pt-4 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg border-t border-black/[0.05]">
              <div className="space-y-0.5">
                <div className="text-lg sm:text-2xl font-black text-[#3182f6] font-mono tabular-nums">
                  주 8.5시간
                </div>
                <div className="text-[11px] text-[#8b95a1] font-medium">실무 시간 회수</div>
              </div>
              <div className="space-y-0.5">
                <div className="text-lg sm:text-2xl font-black text-[#191f28] font-mono tabular-nums">
                  18배
                </div>
                <div className="text-[11px] text-[#8b95a1] font-medium">기획·카피 작성 가속</div>
              </div>
              <div className="space-y-0.5">
                <div className="text-lg sm:text-2xl font-black text-emerald-600 font-mono tabular-nums">
                  월 100만+
                </div>
                <div className="text-[11px] text-[#8b95a1] font-medium">회수 시간 가치 환산</div>
              </div>
            </div>
          </div>

          {/* 우측: 뽕뽑기 ➔ 성장 매트릭스 카드 (5열) */}
          <div className="lg:col-span-5">
            <div className="bezel-card-outer">
              <div className="bezel-card-inner space-y-4">
                <div className="flex items-center justify-between border-b border-black/[0.04] pb-3">
                  <span className="text-xs font-bold text-[#8b95a1] uppercase tracking-wider">
                    AI 활용의 차원이 다른 2가지 세상
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#3182f6]">
                    성장 매트릭스
                  </span>
                </div>

                {/* 1단계: 하수 세상 */}
                <div className="p-4 rounded-2xl bg-[#f9fafb] border border-black/[0.04] space-y-1.5">
                  <div className="text-xs font-bold text-[#8b95a1] flex items-center justify-between">
                    <span>99%의 활용 (제자리걸음)</span>
                    <span className="text-red-500 font-bold">1% 기능만 사용</span>
                  </div>
                  <div className="text-xs text-[#4e5968] leading-relaxed">
                    이메일 몇 줄 번역, 뉴스 요약, 단답형 질문에 그침 ➔ <b>월 2만 원 구독료 날림 & 업무 피로도 그대로</b>
                  </div>
                </div>

                {/* 2단계: aizaler 세상 */}
                <div className="p-4 rounded-2xl bg-[#e8f3ff]/70 border border-[#3182f6]/30 space-y-2 shadow-xs">
                  <div className="text-xs font-bold text-[#3182f6] flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Sparkle size={15} weight="duotone" /> aizaler 상위 1% 활용 (초격차 성장)
                    </span>
                    <span className="bg-[#3182f6] text-white px-2 py-0.5 rounded-full text-[10px]">
                      10배 레버리지
                    </span>
                  </div>
                  <div className="text-xs text-[#191f28] space-y-1">
                    <div className="font-bold">✓ 24시간 가상 부사수로 3대 귀찮은 업무 완전 위임</div>
                    <div className="text-emerald-700 font-semibold">✓ 주 8.5시간 확보 ➔ 연봉 협상 / 1인 사이드 런칭</div>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <a
                    href="#roadmap"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#3182f6] hover:underline"
                  >
                    내 직무별 로드맵 바로 확인하기 <ArrowRight size={14} weight="bold" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. 킬러 기능 1: AI 뽕뽑기 ➔ 초격차 성장 로드맵 진단기 ── */}
      <section id="roadmap" className="toss-container space-y-4">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <div className="text-xs font-bold text-[#3182f6] uppercase tracking-wider">
            GROWTH ROADMAP
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#191f28] tracking-tight">
            내 직무 전용 AI 뽕뽑기 ➔ 성장 로드맵
          </h2>
          <p className="text-[#4e5968] text-sm leading-relaxed">
            남들의 뻔한 팁이 아닌, 내 직무에 바로 꽂히는 3단계 레버리지 처방전을 확인해 보세요.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <GrowthRoadmapCalculator />
        </div>
      </section>

      {/* ── 3. 킬러 기능 2: 프롬프트 Before vs After 라이브 비교기 ── */}
      <section id="diff-viewer" className="toss-container space-y-4">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <div className="text-xs font-bold text-[#3182f6] uppercase tracking-wider">
            PROMPT REVOLUTION
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#191f28] tracking-tight">
            질문 하나 바꿨을 뿐인데, 결과는 100만 원짜리
          </h2>
          <p className="text-[#4e5968] text-sm leading-relaxed">
            프롬프트를 바꿨을 때 실제 산출물 퀄리티가 어떻게 급변하는지 직접 눈으로 비교해 보세요.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <PromptDiffViewer />
        </div>
      </section>

      {/* ── 4. 킬러 기능 3: AI 구독료 다이어트 계산기 ── */}
      <section id="calculator" className="toss-container space-y-4">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <div className="text-xs font-bold text-[#3182f6] uppercase tracking-wider">
            COST OPTIMIZATION
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#191f28] tracking-tight">
            불필요한 중복 구독 다이어트 계산기
          </h2>
          <p className="text-[#4e5968] text-sm leading-relaxed">
            중복 결제되던 툴을 정리하고, 딱 1개 메인 툴로 10배의 퍼포먼스를 내는 법.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <SubscriptionCalculator />
        </div>
      </section>

      {/* ── 5. 실전 솔루션 & 성장 가이드 라인업 ── */}
      <section id="solutions" className="toss-container space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs font-bold text-[#3182f6] uppercase tracking-wider">
              PRACTICAL OFFERS
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#191f28] tracking-tight">
              AI 뽕뽑기 ➔ 성장 실전 솔루션
            </h2>
            <p className="text-[#4e5968] text-sm">
              당장 오늘부터 내 실무 시간을 절반으로 줄이고 성과를 폭발시킬 검증된 가이드와 챌린지입니다.
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

      {/* ── 6. 실패 복기록 & 신뢰 엔지니어링 ── */}
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

      {/* ── 7. 무료 워크북 다운로드 리드마그넷 ── */}
      <section id="lead-magnet" className="toss-container">
        <div className="p-8 sm:p-12 rounded-[32px] bg-[#191f28] text-white relative overflow-hidden shadow-xl">
          <div className="max-w-2xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold">
              <DownloadSimple size={14} weight="bold" />
              100% 무료 즉시 발송
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
              'AI 뽕뽑기 ➔ 초격차 성장 로드맵 워크북'을 무료로 받으세요
            </h2>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              지금 이메일을 입력하시면, 직무별 10배 뽕뽑는 시스템 프롬프트 30선과 주간 업무 자동화 체크리스트(PDF)를 1분 이내로 보내드립니다.
            </p>

            {isDownloaded ? (
              <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-sm font-bold flex items-center gap-2">
                <CheckCircle size={20} weight="fill" />
                입력하신 이메일로 워크북 발송이 완료되었습니다! (스팸함도 확인해 주세요)
              </div>
            ) : (
              <form onSubmit={handleDownload} className="flex flex-col sm:flex-row gap-2 max-w-md">
                <input
                  type="email"
                  required
                  placeholder="워크북을 받을 이메일 주소"
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

      {/* ── 8. 자주 묻는 질문 FAQ ── */}
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
