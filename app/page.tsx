'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Sparkle, 
  ArrowRight, 
  CheckCircle, 
  Flame, 
  Database, 
  Clock, 
  BookOpenText, 
  Star, 
  DownloadSimple, 
  WarningCircle, 
  LightbulbFilament, 
  ShieldCheck, 
  Lightning, 
  UsersThree, 
  TerminalWindow, 
  Compass,
  RocketLaunch,
  FileCode,
  CaretDown,
  TrendUp,
  ChartLineUp
} from '@phosphor-icons/react';
import { PRODUCTS } from '@/data/products';
import { COLUMNS } from '@/data/columns';
import { REVIEWS } from '@/data/reviews';
import { LESSONS } from '@/data/lessons';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [activeHeroIndex, setActiveHeroIndex] = useState<number>(0);
  const [activeLessonIndex, setActiveLessonIndex] = useState<number>(0);
  const [emailInput, setEmailInput] = useState<string>('');
  const [isDownloaded, setIsDownloaded] = useState<boolean>(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const categories = [
    '전체', 
    '실전 챌린지', 
    '전자책 & 가이드', 
    '풀 소스코드', 
    '1:1 프라이빗',
    '바이브코딩 키트',
    '바이럴 에셋'
  ];

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
      q: '코딩을 전혀 모르는 문과 직장인도 21일 챌린지에 참여할 수 있나요?',
      a: '네, 100% 가능합니다. 본 챌린지는 C언어나 복잡한 알고리즘을 배우는 과정이 아닙니다. Claude와 Cursor 같은 최신 AI 에이전트에게 내 의도를 정확히 전달하고 에러를 스스로 수정하게 만드는 바이브코딩 오케스트레이션을 다루기 때문에 비개발자일수록 더 빠르고 유연하게 흡수합니다.',
    },
    {
      q: '직장 생활이나 본업과 병행할 수 있을까요?',
      a: '하루 30분~1시간 내외의 집중 액션 미션으로 설계되어 있습니다. 긴 강의를 지루하게 듣는 것이 아니라, 제공되는 완성형 템플릿과 프롬프트 키트를 바탕으로 하루에 하나씩 내 손으로 직접 조립해 나가는 방식입니다.',
    },
    {
      q: '풀 소스코드 구매 시 상업적 이용 및 재배포가 가능한가요?',
      a: '제공되는 모든 Next.js 풀스택 소스코드와 데이터베이스 스키마는 구매자 본인의 비즈니스 및 상업적 서비스 런칭에 제한 없이 무제한으로 사용하실 수 있습니다. (단, 소스코드 파일 자체를 재판매하는 행위는 금지됩니다).',
    },
    {
      q: '기업 단위(B2B) AX 컨설팅이나 사내 교육도 가능한가요?',
      a: '네, 스타트업 및 중견기업 팀 단위의 맞춤형 업무 자동화 파이프라인 구축 및 AX 워크숍 컨설팅을 별도 진행하고 있습니다. 하단 채널 또는 1:1 컨설팅을 통해 문의 주시면 기업 규모에 맞는 제안서를 전달해 드립니다.',
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-32">
      {/* ── 1. 토스 스타일 히어로 메인 섹션 ── */}
      <section className="toss-container pt-12 sm:pt-20 text-center space-y-6">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#e8f3ff] text-[#3182f6] text-xs sm:text-sm font-bold">
          <Sparkle size={15} weight="duotone" />
          AI Native Solopreneur & Career Leverage
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#191f28] tracking-tight leading-[1.25] break-keep">
          월 2만 원 내고 챗GPT에 <br />
          <span className="text-[#3182f6]">번역·메일 요약만</span> 시키고 계신가요?
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-xl text-[#4e5968] font-medium leading-relaxed break-keep">
          세상은 AI로 바뀐다는데 내 일은 그대로인 당신을 위해. <br />
          <b>자극적인 공포 마케팅이 아닌,</b> 1인 기업으로 프로덕트 4개를 직접 개발·운영하며 증명한 <br className="hidden sm:inline" />
          실전 AI 오케스트레이션과 커리어 레버리지의 모든 것을 공개합니다.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#solutions"
            className="w-full sm:w-auto toss-button-primary px-7 py-4 text-sm sm:text-base font-bold shadow-md shadow-blue-500/20 inline-flex items-center justify-center gap-2"
          >
            실전 솔루션 둘러보기 <ArrowRight size={18} weight="bold" />
          </a>
          <a
            href="#lessons"
            className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white hover:bg-gray-50 text-[#191f28] border border-black/[0.06] font-bold text-sm sm:text-base transition-all shadow-sm inline-flex items-center justify-center gap-2"
          >
            <Flame size={18} weight="fill" className="text-amber-500" />
            실패 복기록 보기
          </a>
        </div>

        {/* 4대 실측 지표 카드 (토스 스타일 부드러운 화이트 블록) */}
        <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
          <div className="p-5 rounded-2xl bg-white border border-black/[0.04] shadow-sm text-center">
            <div className="text-2xl sm:text-3xl font-black text-[#191f28] font-mono">4개</div>
            <div className="text-xs text-[#8b95a1] font-semibold mt-1">1인 라이브 프로덕트</div>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-black/[0.04] shadow-sm text-center">
            <div className="text-2xl sm:text-3xl font-black text-[#3182f6] font-mono">207,709</div>
            <div className="text-xs text-[#8b95a1] font-semibold mt-1">메타 바이럴 실측 뷰</div>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-black/[0.04] shadow-sm text-center">
            <div className="text-2xl sm:text-3xl font-black text-emerald-600 font-mono">$42</div>
            <div className="text-xs text-[#8b95a1] font-semibold mt-1">월 인프라 서버 비용</div>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-black/[0.04] shadow-sm text-center">
            <div className="text-2xl sm:text-3xl font-black text-purple-600 font-mono">100%</div>
            <div className="text-xs text-[#8b95a1] font-semibold mt-1">실측 DB 로그 기반</div>
          </div>
        </div>
      </section>

      {/* ── 2. 추천 배너 슬라이더 (토스 카드 & 탭 스타일) ── */}
      <section className="toss-container">
        <div className="rounded-3xl bg-white p-7 sm:p-12 border border-black/[0.04] shadow-sm space-y-6">
          {/* 슬라이드 탭 */}
          <div className="flex flex-wrap gap-2 pb-2 border-b border-black/[0.04]">
            {PRODUCTS.slice(0, 4).map((prod, idx) => (
              <button
                key={prod.id}
                onClick={() => setActiveHeroIndex(idx)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  activeHeroIndex === idx
                    ? 'bg-[#3182f6] text-white shadow-sm'
                    : 'bg-[#f2f4f6] text-[#4e5968] hover:bg-gray-200'
                }`}
              >
                {prod.badge} #{idx + 1} {prod.category}
              </button>
            ))}
          </div>

          {PRODUCTS[activeHeroIndex] && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#ffebee] text-[#f04452] text-xs font-bold">
                    {PRODUCTS[activeHeroIndex].badge} HOT
                  </span>
                  <span className="text-xs text-[#8b95a1] font-semibold">
                    {PRODUCTS[activeHeroIndex].target}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-black text-[#191f28] leading-snug break-keep">
                  {PRODUCTS[activeHeroIndex].title}
                </h2>

                <p className="text-sm sm:text-base text-[#4e5968] leading-relaxed break-keep">
                  {PRODUCTS[activeHeroIndex].description}
                </p>

                <div className="pt-2 flex items-baseline gap-3">
                  <span className="text-2xl sm:text-3xl font-black text-[#191f28] font-mono">
                    {PRODUCTS[activeHeroIndex].salePrice.toLocaleString()}원
                  </span>
                  <span className="text-sm text-[#8b95a1] line-through font-mono">
                    {PRODUCTS[activeHeroIndex].originalPrice.toLocaleString()}원
                  </span>
                  <span className="text-sm font-black text-[#f04452]">
                    {PRODUCTS[activeHeroIndex].discountRate}% OFF
                  </span>
                </div>

                <div className="pt-3">
                  <Link
                    href={`/product/${PRODUCTS[activeHeroIndex].id}`}
                    className="toss-button-primary inline-flex items-center gap-2 px-6 py-3.5 text-sm shadow-md"
                  >
                    상세보기 및 신청하기 <ArrowRight size={16} weight="bold" />
                  </Link>
                </div>
              </div>

              {/* 우측 패키지 요약 박스 */}
              <div className="lg:col-span-5 bg-[#f8f9fa] rounded-2xl p-6 border border-black/[0.04] space-y-3">
                <div className="text-xs font-bold text-[#3182f6] uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkle size={15} weight="duotone" />
                  포함된 실전 패키지 구성
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#333d4b]">
                  {PRODUCTS[activeHeroIndex].features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle size={18} weight="fill" className="text-[#3182f6] shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-3 border-t border-black/[0.04] flex items-center justify-between text-xs text-[#8b95a1]">
                  <span>실측 검증 완료</span>
                  <span className="font-mono text-[#3182f6] font-bold">{PRODUCTS[activeHeroIndex].highlightProof}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── 3. 전체 솔루션 마켓플레이스 그리드 (토스 카드 디자인) ── */}
      <section id="solutions" className="toss-container space-y-6">
        <div className="space-y-1">
          <div className="text-xs font-bold text-[#3182f6] uppercase tracking-wider">CURATED SOLUTIONS</div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#191f28] tracking-tight">
            가장 많은 빌더가 선택한 실전 솔루션
          </h2>
          <p className="text-[#4e5968] text-sm">
            이론만 말하는 강의가 아닌, 실제 프로덕트 4개를 띄우며 검증된 실전 솔루션 라인업입니다.
          </p>
        </div>

        {/* 카테고리 필터 */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-black/[0.04]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#191f28] text-white shadow-sm'
                  : 'bg-white text-[#4e5968] hover:bg-gray-100 border border-black/[0.04]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 토스 카드 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pt-2">
          {filteredProducts.map((prod) => (
            <Link
              key={prod.id}
              href={`/product/${prod.id}`}
              className="toss-card p-5 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* 상단 썸네일 박스 */}
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-4 flex flex-col justify-between relative overflow-hidden">
                  <div className="flex items-center justify-between z-10">
                    <span className="px-2 py-0.5 rounded-lg bg-black/60 text-white text-[11px] font-bold font-mono">
                      {prod.rank}위
                    </span>
                    <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                      prod.badge === 'BEST' ? 'bg-[#f04452] text-white' :
                      prod.badge === 'STEADY' ? 'bg-emerald-500 text-white' :
                      prod.badge === 'HOT' ? 'bg-purple-600 text-white' :
                      prod.badge === 'NEW' ? 'bg-[#3182f6] text-white' :
                      'bg-amber-500 text-white'
                    }`}>
                      {prod.badge}
                    </span>
                  </div>

                  {/* 중앙 Phosphor Duotone 아이콘 */}
                  <div className="text-center z-10">
                    <div className="w-12 h-12 mx-auto rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      {prod.rank === 1 ? <Flame size={24} weight="duotone" className="text-amber-400" /> :
                       prod.rank === 2 ? <BookOpenText size={24} weight="duotone" className="text-emerald-400" /> :
                       prod.rank === 3 ? <Database size={24} weight="duotone" className="text-blue-400" /> :
                       prod.rank === 4 ? <Compass size={24} weight="duotone" className="text-purple-400" /> :
                       <TerminalWindow size={24} weight="duotone" className="text-white" />}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-gray-300 z-10">
                    <span>100% 실측 검증</span>
                    <span className="px-2 py-0.5 rounded bg-black/40 font-medium">평생소장</span>
                  </div>
                </div>

                {/* 텍스트 정보 */}
                <div className="space-y-1.5">
                  <span className="text-[11.5px] font-bold text-[#3182f6]">
                    {prod.category}
                  </span>
                  <h3 className="text-[15px] font-bold text-[#191f28] leading-snug line-clamp-2 group-hover:text-[#3182f6] transition-colors">
                    {prod.title}
                  </h3>
                  <p className="text-xs text-[#4e5968] line-clamp-2 leading-relaxed">
                    {prod.description}
                  </p>
                </div>
              </div>

              {/* 하단 가격 */}
              <div className="pt-4 mt-4 border-t border-black/[0.04]">
                <div className="flex items-baseline gap-2">
                  <span className="text-base font-black text-[#f04452]">
                    {prod.discountRate}%
                  </span>
                  <span className="text-base font-black text-[#191f28] font-mono">
                    {prod.monthlyPrice ? prod.monthlyPrice.split(' ')[0] + ' ' + prod.monthlyPrice.split(' ')[1] : prod.salePrice.toLocaleString() + '원'}
                  </span>
                </div>
                <div className="text-[11px] text-[#8b95a1] font-mono line-through mt-0.5">
                  정가 {prod.originalPrice.toLocaleString()}원
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 4. 실패와 극복 복기록 (토스 화이트 카드 섹션) ── */}
      <section id="lessons" className="toss-container space-y-6">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 uppercase tracking-wider">
            <Flame size={16} weight="fill" className="text-amber-500" />
            REAL RETROSPECTIVES
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#191f28] tracking-tight">
            우리가 프로덕트 4개를 굴리며 직접 깨지고 배운 실전 복기록
          </h2>
          <p className="text-[#4e5968] text-sm">
            성공 스토리만 늘어놓는 허풍이 아닙니다. 20만 뷰 참사, 콜드 스타트 환상, 알고리즘 숙취를 직접 겪어내며 체득한 4대 생존 법칙을 공개합니다.
          </p>
        </div>

        {/* 탭 버튼 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {LESSONS.map((lesson, idx) => (
            <button
              key={lesson.id}
              onClick={() => setActiveLessonIndex(idx)}
              className={`p-4 rounded-2xl text-left transition-all border ${
                activeLessonIndex === idx
                  ? 'bg-white border-[#3182f6] shadow-sm ring-1 ring-[#3182f6]'
                  : 'bg-white/70 border-black/[0.04] hover:bg-white text-[#4e5968]'
              }`}
            >
              <div className="text-[11px] font-bold text-[#8b95a1] font-mono mb-1">LESSON 0{idx + 1}</div>
              <div className={`text-xs sm:text-sm font-bold leading-snug ${activeLessonIndex === idx ? 'text-[#3182f6]' : 'text-[#191f28]'}`}>
                {lesson.category}
              </div>
              <div className="text-[11px] text-[#8b95a1] mt-1 font-medium">
                {lesson.brand}
              </div>
            </button>
          ))}
        </div>

        {/* 활성화된 복기 카드 */}
        {LESSONS[activeLessonIndex] && (
          <div className="p-7 sm:p-10 rounded-3xl bg-white border border-black/[0.04] shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/[0.04] pb-4">
              <div>
                <span className="text-xs font-bold text-[#3182f6] mr-2">[{LESSONS[activeLessonIndex].brand}]</span>
                <span className="text-xs text-[#8b95a1] font-medium">{LESSONS[activeLessonIndex].category}</span>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#e8f3ff] text-[#3182f6]">
                {LESSONS[activeLessonIndex].statBadge}
              </span>
            </div>

            <div className="space-y-1.5">
              <h3 className="text-xl sm:text-2xl font-black text-[#191f28] leading-snug">
                {LESSONS[activeLessonIndex].title}
              </h3>
              <p className="text-sm text-[#4e5968] italic">
                "{LESSONS[activeLessonIndex].subtitle}"
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-[#ffebee]/60 border border-red-100 space-y-1.5">
                <div className="text-red-700 font-bold text-xs flex items-center gap-1.5">
                  <WarningCircle size={16} weight="bold" /> 1. 맞닥뜨린 참사
                </div>
                <p className="text-xs text-red-900 leading-relaxed">
                  {LESSONS[activeLessonIndex].problem}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-100 space-y-1.5">
                <div className="text-amber-800 font-bold text-xs flex items-center gap-1.5">
                  <LightbulbFilament size={16} weight="bold" /> 2. 냉혹한 실측 진실
                </div>
                <p className="text-xs text-amber-900 leading-relaxed">
                  {LESSONS[activeLessonIndex].realityCheck}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 space-y-1.5">
                <div className="text-emerald-800 font-bold text-xs flex items-center gap-1.5">
                  <CheckCircle size={16} weight="bold" /> 3. 극복 및 시스템화
                </div>
                <p className="text-xs text-emerald-900 leading-relaxed">
                  {LESSONS[activeLessonIndex].solution}
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#f2f4f6] text-xs text-[#191f28] font-bold flex items-center gap-2.5">
              <ShieldCheck size={18} weight="fill" className="text-[#3182f6] shrink-0" />
              <span>{LESSONS[activeLessonIndex].rule}</span>
            </div>
          </div>
        )}
      </section>

      {/* ── 5. 작업 증명 (DB 실측 쿼리 & 라이브 프로덕트 포트폴리오) ── */}
      <section id="proof" className="toss-container space-y-6">
        <div className="space-y-1">
          <div className="text-xs font-bold text-[#3182f6] uppercase tracking-wider">PROOF OF WORK</div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#191f28] tracking-tight">
            말뿐인 강사가 아닌, 실제 Neon DB 쿼리와 라이브 서비스
          </h2>
          <p className="text-[#4e5968] text-sm">
            우리는 20만 뷰 바이럴 이후의 DB 결제 전환율(0.0019%)을 까보고 추천 알고리즘의 오염을 극복했습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* 터미널 쿼리 창 */}
          <div className="lg:col-span-7 rounded-3xl bg-[#191f28] text-white font-mono text-xs overflow-hidden shadow-sm">
            <div className="flex items-center justify-between px-5 py-3.5 bg-[#252f3d]">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="text-gray-300 text-[11px] ml-2 font-sans font-medium">neon_orders_join.sql</span>
              </div>
              <span className="text-gray-400 text-[10px]">PostgreSQL 16</span>
            </div>
            <div className="p-5 space-y-2 text-gray-300 leading-relaxed overflow-x-auto">
              <p className="text-gray-500">-- 20만 뷰 바이럴 포스트의 결제 전환율(CVR) 실측</p>
              <p>
                <span className="text-[#3182f6]">SELECT</span> views, paid_orders, <br />
                &nbsp;&nbsp;<span className="text-[#3182f6]">ROUND</span>((paid_orders::numeric / views) * 100, 4) <span className="text-[#3182f6]">AS</span> cvr_pct <br />
                <span className="text-[#3182f6]">FROM</span> meta_posts_analytics <br />
                <span className="text-[#3182f6]">WHERE</span> post_id = <span className="text-emerald-400">'live_reels_sample_207k'</span>;
              </p>
              <div className="mt-3 pt-3 border-t border-gray-700 text-xs">
                <p className="text-gray-400">/* Result:</p>
                <p className="text-[#3182f6] font-bold">views: 207,709 | paid_orders: 4 | cvr: 0.0019%</p>
                <p className="text-gray-400">➔ 51,927뷰당 1건 결제. 잡탕 밈 대신 First 9 순도 100% 필수 */</p>
              </div>
            </div>
          </div>

          {/* 4대 라이브 서비스 포트폴리오 카드 */}
          <div className="lg:col-span-5 space-y-2.5">
            <div className="text-xs font-bold text-[#8b95a1] uppercase tracking-wider mb-1">실제 라이브 서비스 포트폴리오 (비공개 처리)</div>
            
            <div className="p-4 rounded-2xl bg-white border border-black/[0.04] shadow-sm flex items-center justify-between">
              <div>
                <div className="font-bold text-[#191f28] text-sm">라이브 프로덕트 A (AI 운세·상담 버티컬)</div>
                <div className="text-xs text-[#8b95a1]">정통 4대학파 AI 만세력 & 39,800원 정밀 리포트</div>
              </div>
              <span className="text-[11px] font-bold text-emerald-600 px-2 py-0.5 rounded-full bg-emerald-50">
                운영 중
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-black/[0.04] shadow-sm flex items-center justify-between">
              <div>
                <div className="font-bold text-[#191f28] text-sm">라이브 프로덕트 B (에듀테크 빅데이터 SaaS)</div>
                <div className="text-xs text-[#8b95a1]">대치·목동 등 수도권 430개 학원가 지리정보 AI 컨설턴트</div>
              </div>
              <span className="text-[11px] font-bold text-[#3182f6] px-2 py-0.5 rounded-full bg-[#e8f3ff]">
                운영 중
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-black/[0.04] shadow-sm flex items-center justify-between">
              <div>
                <div className="font-bold text-[#191f28] text-sm">라이브 프로덕트 C (글로벌 비즈니스 어학)</div>
                <div className="text-xs text-[#8b95a1]">외국인 앞 갑분싸 방지 실전 직관 비즈니스 영어</div>
              </div>
              <span className="text-[11px] font-bold text-purple-600 px-2 py-0.5 rounded-full bg-purple-50">
                운영 중
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-black/[0.04] shadow-sm flex items-center justify-between">
              <div>
                <div className="font-bold text-[#191f28] text-sm">브라운임팩트랩스 테크 스튜디오 HQ</div>
                <div className="text-xs text-[#8b95a1]">월 고정비 $42 초경량 1인 서버리스 인프라 시스템</div>
              </div>
              <span className="text-[11px] font-bold text-amber-600 px-2 py-0.5 rounded-full bg-amber-50">
                Studio
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. 실전 엔지니어링 칼럼 4열 그리드 ── */}
      <section id="columns" className="toss-container space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs font-bold text-[#3182f6] uppercase tracking-wider">INSIGHT COLUMNS</div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#191f28] tracking-tight">
              실전 AI & 소셜 그로스 엔지니어링 칼럼
            </h2>
            <p className="text-[#4e5968] text-sm">
              해외 아티클 번역이 아닌, 프로덕트를 굴리며 직접 확인한 실측 분석 칼럼입니다.
            </p>
          </div>
          <span className="text-xs text-[#8b95a1] font-medium">매주 화/금 정기 업데이트</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {COLUMNS.map((col) => (
            <div
              key={col.id}
              className="toss-card p-4 flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-3">
                <div className="aspect-[16/9] rounded-2xl bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-3 flex flex-col justify-between overflow-hidden">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-sm self-start">
                    {col.category}
                  </span>
                  <span className="text-[10px] font-mono text-[#3182f6] font-bold text-right">
                    {col.highlightTag}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-[#191f28] leading-snug line-clamp-2 group-hover:text-[#3182f6] transition-colors">
                    {col.title}
                  </h3>
                  <p className="text-xs text-[#4e5968] line-clamp-3 leading-relaxed">
                    {col.excerpt}
                  </p>
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-black/[0.04] flex items-center justify-between text-[11px] text-[#8b95a1]">
                <span>{col.date}</span>
                <span className="flex items-center gap-1 font-medium text-[#4e5968]">
                  <Clock size={12} weight="bold" /> {col.readTime}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 7. 실제 빌더 생생 후기 ── */}
      <section id="reviews" className="toss-container space-y-6">
        <div className="space-y-1">
          <div className="text-xs font-bold text-[#3182f6] uppercase tracking-wider">REAL REVIEWS</div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#191f28] tracking-tight">
            함께 성장하는 빌더들의 생생한 후기
          </h2>
          <p className="text-[#4e5968] text-sm">
            소외감과 두려움을 넘어, 본업에 AI 날개를 달고 프로덕트를 런칭한 분들의 이야기입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {REVIEWS.map((rev) => (
            <div key={rev.id} className="toss-card p-5 flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={14} weight="fill" className="text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-[#3182f6] px-2 py-0.5 rounded-full bg-[#e8f3ff]">
                    {rev.tag}
                  </span>
                </div>

                <h4 className="text-xs sm:text-sm font-bold text-[#191f28] leading-snug">
                  "{rev.highlight}"
                </h4>

                <p className="text-xs text-[#4e5968] leading-relaxed">
                  {rev.content}
                </p>
              </div>

              <div className="pt-3 border-t border-black/[0.04] flex items-center justify-between text-[11px] text-[#8b95a1]">
                <div>
                  <div className="font-bold text-[#191f28]">{rev.author}</div>
                  <div className="text-[10px] text-[#8b95a1]">{rev.role}</div>
                </div>
                <span>{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 8. 리드 마그넷 무료 번들 다운로드 ── */}
      <section id="lead-magnet" className="toss-container">
        <div className="rounded-3xl bg-white p-8 sm:p-12 border border-black/[0.04] shadow-sm text-center space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f3ff] text-[#3182f6] text-xs font-bold">
            <DownloadSimple size={15} weight="bold" />
            100% FREE STARTER BUNDLE
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#191f28] leading-tight">
            AI 빌더를 위한 4대 실전 무료 번들 세트
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto text-xs text-[#333d4b] text-left pt-2">
            <div className="p-3.5 rounded-2xl bg-[#f2f4f6]">
              <span className="font-bold text-[#3182f6] block mb-0.5">① 메타 쿼리북</span>
              Two-Tower 오염 진단 SQL
            </div>
            <div className="p-3.5 rounded-2xl bg-[#f2f4f6]">
              <span className="font-bold text-purple-600 block mb-0.5">② 후킹 프롬프트</span>
              클릭률 300% 글쓰기 4종
            </div>
            <div className="p-3.5 rounded-2xl bg-[#f2f4f6]">
              <span className="font-bold text-amber-600 block mb-0.5">③ First 9 체크북</span>
              Sentence-BERT 순도표
            </div>
            <div className="p-3.5 rounded-2xl bg-[#f2f4f6]">
              <span className="font-bold text-emerald-600 block mb-0.5">④ $42 인프라 맵</span>
              초경량 서버리스 아키텍처
            </div>
          </div>

          <p className="text-[#8b95a1] text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            이메일을 남겨주시면 4종 실전 패키지를 즉시 다운로드할 수 있는 링크를 발송해 드립니다.
          </p>

          {isDownloaded ? (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-bold flex items-center justify-center gap-2 max-w-md mx-auto">
              <CheckCircle size={18} weight="fill" className="text-emerald-600" />
              신청 완료! 입력하신 이메일로 4대 번들 다운로드 링크가 발송되었습니다.
            </div>
          ) : (
            <form onSubmit={handleDownload} className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto">
              <input
                type="email"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="자료를 받으실 이메일 주소 입력"
                className="flex-1 px-4 py-3.5 rounded-2xl bg-[#f2f4f6] text-[#191f28] placeholder-[#8b95a1] text-sm focus:outline-none focus:ring-2 focus:ring-[#3182f6]"
              />
              <button
                type="submit"
                className="toss-button-primary px-6 py-3.5 text-sm font-bold shadow-sm whitespace-nowrap"
              >
                무료 다운로드
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── 9. 자주 묻는 질문 (토스 아코디언 스타일) ── */}
      <section className="toss-container max-w-3xl space-y-4">
        <div className="text-center space-y-1">
          <h2 className="text-2xl sm:text-3xl font-black text-[#191f28]">
            자주 묻는 질문
          </h2>
          <p className="text-[#8b95a1] text-sm">궁금하신 점을 미리 정리했습니다.</p>
        </div>

        <div className="space-y-2.5 pt-2">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
              className="toss-card p-5 cursor-pointer"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm sm:text-base font-bold text-[#191f28]">
                  {faq.q}
                </span>
                <CaretDown
                  size={16}
                  weight="bold"
                  className={`text-[#8b95a1] shrink-0 transition-transform duration-200 ${
                    openFaqIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </div>
              {openFaqIndex === idx && (
                <p className="text-xs sm:text-sm text-[#4e5968] leading-relaxed pt-3 mt-3 border-t border-black/[0.04]">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
