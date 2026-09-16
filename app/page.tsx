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
  FileText,
  Package,
  UserCheck,
  TerminalWindow,
  Compass,
  Cpu,
  Globe,
  Crown
} from '@phosphor-icons/react';

import { PRODUCTS, Product } from '@/data/products';
import { LESSONS } from '@/data/lessons';
import AlgorithmHangoverSimulator from '@/components/AlgorithmHangoverSimulator';
import MetaAdsAngleMatrix from '@/components/MetaAdsAngleMatrix';
import First9VectorDiagnoser from '@/components/First9VectorDiagnoser';
import PromptDiffViewer from '@/components/PromptDiffViewer';
import AIPrescriptionTrainer from '@/components/AIPrescriptionTrainer';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedMode, setSelectedMode] = useState<'daily' | 'traffic' | 'build' | 'all'>('daily');
  const [emailInput, setEmailInput] = useState('');
  const [isDownloaded, setIsDownloaded] = useState(false);

  const modeOptions = [
    { id: 'daily', label: '1. Aside & 지능 레버리지', sub: 'Claude Academy 정본 & 리서치 자동화', icon: Globe },
    { id: 'traffic', label: '2. 트래픽 & 퍼널 성장', sub: '허수 탈출 & 검증된 고객 전환 퍼널', icon: TrendUp },
    { id: 'build', label: '3. 1인 제품 런칭', sub: '외주비 0원 상용 웹서비스 조립', icon: RocketLaunch },
    { id: 'all', label: '전체 솔루션', sub: 'aizaler 전체 툴킷 한눈에 보기', icon: Package },
  ] as const;

  const filteredProducts = selectedMode === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.mode === selectedMode || (selectedMode === 'daily' && p.badge === 'FREE'));

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setIsDownloaded(true);
  };

  const faqs = [
    {
      q: '어릴 때 레고 좋아했던 사람을 위한 빌더 프로그램이란 무엇인가요?',
      a: '벽돌 만드는 화학 공식을 몰라도 레고 블록만 있으면 누구나 거대한 성을 지을 수 있었습니다. 2026년의 AI 소프트웨어도 마찬가지입니다. 복잡한 코딩 문법이나 뜬구름 잡는 마케팅 이론을 0부터 외울 필요 없이, 검증된 AI 브릭(Aside 브라우저, 정본 프롬프트, 인프라 보일러플레이트)을 조립해 내 제품과 현금 흐름을 만드는 1인 창작자로 성장하도록 돕는 프로그램입니다.'
    },
    {
      q: '시중의 챗GPT 강의나 프롬프트 모음집과는 구체적으로 무엇이 다른가요?',
      a: '시중 강의는 2년 전 팁이나 얕은 인스타 카드뉴스를 짜깁기한 것이 대다수입니다. aizaler는 Anthropic 공식 Claude Academy와 Google Gemini 엔지니어링 정본(SSOT)을 직접 분석하여 실무에 바로 복붙 가능한 XML 구조화 템플릿을 제공하며, Aside 브라우저를 통한 24시간 자율 리서치 등 프로들이 실제로 쓰는 무기를 전수합니다.'
    },
    {
      q: '공기업과 해외 주재원을 퇴사하고 1인 개발을 시작하신 이유가 무엇인가요?',
      a: '정년과 급여가 보장되는 안락한 테두리였지만, 거대한 조직의 부품으로 남는 대신 오직 내 이름과 내 손으로 만든 제품으로 시장에서 가치를 증명하고 싶었습니다. 퇴사 후 야생에서 겪은 수많은 실패와 시행착오 끝에, 데이터와 엔지니어링으로 생존하는 1인 비즈니스 파이프라인을 완성했습니다.'
    },
    {
      q: '비개발자나 초보자도 1인 제품 런칭 트랙을 따라갈 수 있나요?',
      a: '네, 외주 개발사에 수천만 원을 쓰지 않아도 Cursor, Supabase, Cloudflare를 레고처럼 조합하면 누구나 1인 풀스택 시스템을 구축할 수 있습니다. aizaler의 가이드와 템플릿은 1인 테크 스튜디오가 실제 운영 중인 4개 라이브 서비스의 파이프라인 그대로 제공됩니다.'
    },
    {
      q: '1:1 프라이빗 전략 세션은 어떤 분들에게 적합한가요?',
      a: '자료를 보며 혼자 조립하기 막막하거나, 이직 vs 버티기 vs 1인 창업의 중대한 갈림길에서 손익 계산이 서지 않는 분들을 위한 VIP 세션입니다. 파운더가 사전에 서면 질의서를 직접 검토한 뒤, 50분간 1:1 화상으로 맞춤 실행 Blueprint를 처방해 드립니다.'
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pt-6 sm:pt-10">
      {/* ── 1. 히어로 섹션 (Lego Builder Growth Narrative) ── */}
      <section className="toss-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* 좌측: 레고 훅 & 1인 빌더 성장 서사 (7열) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8f3ff] text-[#3182f6] text-xs font-bold">
              <Sparkle size={14} weight="fill" />
              <span>AI-NATIVE BUILDER STUDIO · 어릴 적 레고 감성 그대로</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[46px] font-black text-[#191f28] leading-[1.2] tracking-tight">
              어릴 때 레고 좋아하셨나요?<br />
              코딩을 외우지 마세요.<br />
              <span className="text-[#3182f6] underline decoration-[#3182f6]/30">AI 블록을 조립해</span> 내 제품을 띄우는 1인 빌더.
            </h1>

            <p className="text-base sm:text-lg text-[#4e5968] leading-relaxed max-w-xl font-normal">
              남들이 만든 AI 툴에 월 구독료만 내며 단순 검색창이나 두드리는 '소비자'에 머물러 계신가요?<br />
              실리콘밸리 <b>Claude Academy 공식 정본</b>과 <b>Aside 브라우저 자율 에이전트</b>, 그리고 실측 검증된 퍼널을 결합해 내 아이디어를 실제 작동하는 상용 프로덕트로 조립해내는 1인 빌더의 길을 안내합니다.
            </p>

            {/* CTA 버튼 세트 */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#modes"
                className="toss-button-primary px-7 py-4 text-sm sm:text-base font-bold text-center flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
              >
                <Compass size={20} weight="bold" />
                <span>3대 빌더 모드 둘러보기</span>
              </a>
              <a
                href="#ai-prescription"
                className="px-6 py-4 rounded-2xl bg-white border border-black/[0.08] text-[#191f28] text-sm sm:text-base font-bold text-center hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <Lightning size={18} weight="fill" className="text-amber-500" />
                <span>내 빌더 레벨 1분 진단하기</span>
              </a>
            </div>

            {/* 신뢰 지표 4열 칩 */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 max-w-xl border-t border-black/[0.05]">
              <div className="space-y-0.5">
                <div className="text-sm sm:text-base font-black text-[#3182f6]">
                  Meta Certified
                </div>
                <div className="text-[11px] text-[#8b95a1] font-medium">공인 전문가 자격</div>
              </div>
              <div className="space-y-0.5">
                <div className="text-sm sm:text-base font-black text-[#191f28]">
                  Canonical Docs
                </div>
                <div className="text-[11px] text-[#8b95a1] font-medium">Claude Academy 정본</div>
              </div>
              <div className="space-y-0.5">
                <div className="text-sm sm:text-base font-black text-rose-600">
                  Aside Agent
                </div>
                <div className="text-[11px] text-[#8b95a1] font-medium">24h 자동화 리서치</div>
              </div>
              <div className="space-y-0.5">
                <div className="text-sm sm:text-base font-black text-emerald-600">
                  외주비 0원
                </div>
                <div className="text-[11px] text-[#8b95a1] font-medium">4개 프로덕트 라이브</div>
              </div>
            </div>
          </div>

          {/* 우측: 소비자 vs 빌더 패러다임 비교 카드 (5열) */}
          <div className="lg:col-span-5">
            <div className="bezel-card-outer">
              <div className="bezel-card-inner space-y-4">
                <div className="flex items-center justify-between border-b border-black/[0.04] pb-3">
                  <span className="text-xs font-bold text-[#8b95a1] uppercase tracking-wider">
                    AI 패러다임의 극적인 차이
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#3182f6]">
                    BUILDER MINDSET
                  </span>
                </div>

                {/* 1단계: 단순 소비자 */}
                <div className="p-4 rounded-2xl bg-[#f9fafb] border border-black/[0.04] space-y-1.5">
                  <div className="text-xs font-bold text-[#8b95a1] flex items-center justify-between">
                    <span>AI 단순 소비자 (Consumer)</span>
                    <span className="text-red-500 font-bold">비용과 시간 낭비</span>
                  </div>
                  <div className="text-xs text-[#4e5968] leading-relaxed">
                    매달 유료 구독료는 나가는데 단순 검색창으로만 방치 ➔ <b>결과물 없이 피로감만 누적</b>
                  </div>
                </div>

                {/* 2단계: aizaler 1인 빌더 */}
                <div className="p-4 rounded-2xl bg-[#e8f3ff]/70 border border-[#3182f6]/30 space-y-2 shadow-xs">
                  <div className="text-xs font-bold text-[#3182f6] flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Sparkle size={15} weight="duotone" /> aizaler 1인 빌더 (Builder)
                    </span>
                    <span className="bg-[#3182f6] text-white px-2 py-0.5 rounded-full text-[10px]">
                      자생적 현금 흐름
                    </span>
                  </div>
                  <div className="text-xs text-[#191f28] space-y-1.5">
                    <div className="font-bold text-[#191f28]">✓ 코딩 암기 대신 검증된 AI 블록을 조립하는 감각</div>
                    <div className="text-[#3182f6] font-bold">✓ Aside 브라우저로 24시간 리서치 & 정보 수집 자동화</div>
                    <div className="text-emerald-700 font-semibold">✓ 뜬구름 마케팅 대신 실제 구매 고객을 모으는 검증된 퍼널</div>
                    <div className="text-[#4e5968] font-semibold">✓ 외주비 0원으로 내 손으로 띄운 상용 웹서비스 소유</div>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#3182f6] hover:underline"
                  >
                    aizaler 스튜디오 철학 & 사이트 소개 보기 <ArrowRight size={14} weight="bold" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. 내 상황 맞춤 AI 빌더 레벨 진단 & 실전 처방 ── */}
      <section id="ai-prescription" className="toss-container">
        <AIPrescriptionTrainer />
      </section>

      {/* ── 3. 과부하 없는 GPT식 3대 빌더 모드 선택기 ── */}
      <section id="modes" className="toss-container space-y-8 scroll-mt-20">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f3ff] text-[#3182f6] text-xs font-bold">
            <Compass size={15} weight="fill" />
            BUILDER MODES · 정보 과부하 없는 단계별 조립 트랙
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#191f28] tracking-tight">
            내 단계에 꼭 맞는 <span className="text-[#3182f6]">3가지 빌더 모드</span>
          </h2>
          <p className="text-sm sm:text-base text-[#4e5968] leading-relaxed">
            한 메뉴판에 모든 지식을 쏟아내지 않습니다. ChatGPT가 모드를 나누듯, 내 현재 관심사에 집중해 단계별로 조립하세요.
          </p>
        </div>

        {/* 3대 모드 선택 탭 바 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-1.5 rounded-2xl bg-white border border-black/[0.06] shadow-xs max-w-4xl mx-auto">
          {modeOptions.map((m) => {
            const Icon = m.icon;
            const isSelected = selectedMode === m.id;
            return (
              <button
                key={m.id}
                onClick={() => setSelectedMode(m.id)}
                className={`p-3 sm:p-4 rounded-xl text-left transition-all flex flex-col justify-between gap-1.5 ${
                  isSelected
                    ? 'bg-[#191f28] text-white shadow-md'
                    : 'text-[#4e5968] hover:bg-gray-50 hover:text-[#191f28]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon size={18} weight={isSelected ? 'fill' : 'bold'} className={isSelected ? 'text-[#3182f6]' : 'text-[#8b95a1]'} />
                  <span className="font-bold text-xs sm:text-sm leading-none line-clamp-1">{m.label}</span>
                </div>
                <span className={`text-[11px] hidden sm:block ${isSelected ? 'text-gray-300' : 'text-[#8b95a1]'}`}>
                  {m.sub}
                </span>
              </button>
            );
          })}
        </div>

        {/* 선택된 모드 상세 안내 및 인터랙티브 블록 */}
        <div className="space-y-12">
          {/* Mode 1: Aside & Daily 지능 레버리지 */}
          {(selectedMode === 'daily' || selectedMode === 'all') && (
            <div className="space-y-6 pt-4">
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#f0f9ff] to-white border border-[#0ea5e9]/20 shadow-xs space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <span className="px-3 py-1 rounded-full bg-[#0ea5e9]/10 text-[#0284c7] text-xs font-black">
                      MODE 1 · Aside & 지능 레버리지
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#191f28]">
                      탭 50개 띄우는 검색 지옥 탈출: Aside 브라우저와 실리콘밸리 공식 정본
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4e5968] leading-relaxed max-w-3xl">
                      인터넷 카더라 팁 대신, 앤트로픽 Claude Academy와 Google Gemini 공식 문서 기반의 정밀 프롬프트 조립법을 전수합니다. Aside 브라우저로 24시간 리서치를 자동화하고 매일 아침 카카오 알림톡으로 핵심 브리핑을 받아보세요.
                    </p>
                  </div>
                </div>

                {/* 프롬프트 Before vs After 라이브 비교기 내장 */}
                <div className="pt-2">
                  <PromptDiffViewer />
                </div>
              </div>
            </div>
          )}

          {/* Mode 2: 트래픽 & 퍼널 성장 */}
          {(selectedMode === 'traffic' || selectedMode === 'all') && (
            <div className="space-y-6 pt-4">
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#eff6ff] to-white border border-[#3182f6]/20 shadow-xs space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <span className="px-3 py-1 rounded-full bg-[#3182f6]/10 text-[#3182f6] text-xs font-black">
                      MODE 2 · 트래픽 & 퍼널 성장
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#191f28]">
                      조회수만 터지는 허수 마케팅 탈출: 실제 결제 고객을 모으는 검증된 퍼널
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4e5968] leading-relaxed max-w-3xl">
                      단순 바이럴로 인해 계정 추천이 왜곡되는 현상을 막고, 광고 메시지와 랜딩페이지 첫 문장을 자연스럽게 연결해 이탈을 막는 고전환 퍼널 조립법입니다.
                    </p>
                  </div>
                </div>

                {/* 알고리즘 숙취 시뮬레이터 & 메타 광고 매트릭스 */}
                <div className="space-y-6 pt-2">
                  <AlgorithmHangoverSimulator />
                  <MetaAdsAngleMatrix />
                </div>
              </div>
            </div>
          )}

          {/* Mode 3: 1인 제품 런칭 */}
          {(selectedMode === 'build' || selectedMode === 'all') && (
            <div className="space-y-6 pt-4">
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#ecfeff] to-white border border-[#06b6d4]/20 shadow-xs space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <span className="px-3 py-1 rounded-full bg-[#06b6d4]/10 text-[#0891b2] text-xs font-black">
                      MODE 3 · 1인 제품 런칭
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#191f28]">
                      외주 개발비 2,000만 원 없이: Cursor + Supabase 3일 상용 런칭
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4e5968] leading-relaxed max-w-3xl">
                      개발자 한 명 없이 상용 결제 웹서비스를 직접 띄우고 무중단 운영하는 1인 풀스택 아키텍처입니다. 토스페이먼츠/카카오페이 결제창 연동부터 클라우드 배포까지 완성형 보일러플레이트로 조립합니다.
                    </p>
                  </div>
                </div>

                {/* 실패 복기록 & 교훈 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  {LESSONS.slice(0, 2).map((l) => (
                    <div key={l.id} className="bezel-card-outer">
                      <div className="bezel-card-inner space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-50 text-cyan-800">
                            {l.category}
                          </span>
                          <span className="text-[10px] text-[#8b95a1] font-mono">
                            {l.statBadge}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-[#191f28] leading-snug">
                          {l.title}
                        </h4>
                        <p className="text-xs text-[#4e5968] leading-relaxed">
                          [해결 원칙]: {l.solution}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ── 해당 모드의 추천 실전 툴킷 카드 그리드 ── */}
        <div className="space-y-4 pt-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg sm:text-xl font-black text-[#191f28]">
              {selectedMode === 'all' ? '전체 실전 빌더 툴킷' : `${modeOptions.find(m => m.id === selectedMode)?.label} 추천 킷`}
            </h3>
            <span className="text-xs text-[#8b95a1] font-medium">
              총 {filteredProducts.length}개 솔루션
            </span>
          </div>

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
                      <h4 className="text-lg font-black text-[#191f28] leading-snug">
                        {p.title}
                      </h4>
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
                      href={p.id === '4' ? '/career' : `/product/${p.id}`}
                      className={`w-full py-3 rounded-xl transition-all text-xs font-bold text-center block tactile-btn ${
                        p.id === '4'
                          ? 'bg-[#050A18] text-white hover:bg-[#3182f6]'
                          : 'bg-[#f2f4f6] text-[#191f28] hover:bg-[#3182f6] hover:text-white'
                      }`}
                    >
                      {p.id === '4' ? '전략 세션 상세 및 신청 (선착순)' : '상세 안내 & 신청하기'}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. VIP 하이엔드 백엔드: 1:1 프라이빗 커리어 & 사업 의사결정 연구소 ── */}
      <section id="vip-session" className="toss-container">
        <div className="relative overflow-hidden rounded-3xl bg-[#050A18] text-[#FAF6F0] p-8 sm:p-12 border border-white/10 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#60A5FA]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#60A5FA]/10 border border-[#60A5FA]/25 text-[#60A5FA] text-xs font-bold">
                <Crown size={14} weight="fill" className="text-amber-400" />
                <span>VIP 1:1 MENTORING · 공기업·주재원 퇴사 파운더 직강</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#FAF6F0] leading-tight tracking-tight">
                혼자 조립하기 막막할 땐,<br />
                나만의 맞춤 설계도를 처방받으세요.
              </h2>
              <p className="text-sm sm:text-base text-[#FAF6F0]/70 leading-relaxed font-normal">
                공기업과 해외 주재원이라는 황금 족쇄를 끊고 야생에서 4개 프로덕트를 직접 굴리며 생존한 파운더가, 당신의 경력 데이터와 비즈니스 환경을 직접 분석하여 50분간 철저한 손익과 90일 실행 Action Blueprint를 도출해 드립니다.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-[#FAF6F0]/60 pt-1 font-mono">
                <span className="flex items-center gap-1.5 font-medium text-emerald-400">✓ 50분 1:1 심층 화상 전략 세션</span>
                <span className="flex items-center gap-1.5 font-medium">✓ 90일 실행 Action Summary 제공</span>
                <span className="flex items-center gap-1.5 font-medium text-[#60A5FA]">✓ 매월 10팀 한정 예약제</span>
              </div>
            </div>

            <div className="shrink-0 flex flex-col items-start lg:items-end gap-3 w-full sm:w-auto">
              <Link
                href="/career"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-[#FAF6F0] text-[#050A18] hover:bg-white text-sm sm:text-base font-bold shadow-lg transition-all hover:scale-[1.02]"
              >
                <span>1:1 프라이빗 세션 신청하기</span>
                <ArrowRight size={18} weight="bold" />
              </Link>
              <span className="text-[11px] text-[#FAF6F0]/40">
                * 매월 한정 슬롯 소진 시 조기 마감됩니다
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. 무료 실전 가이드북 리드마그넷 ── */}
      <section id="lead-magnet" className="toss-container">
        <div className="p-8 sm:p-12 rounded-[32px] bg-[#191f28] text-white relative overflow-hidden shadow-xl">
          <div className="max-w-2xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold">
              <DownloadSimple size={14} weight="bold" />
              100% 무료 실전 가이드 즉시 발송
              100% 무료 실전 가이드북 즉시 발송
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
              스레드 500만 뷰 & 메타 광고 실전 비법<br className="hidden sm:inline" /> '무료 가이드'를 즉시 받으세요
              1인 창업 & AI 빌더 필수 마케팅 용어집 &<br className="hidden sm:inline" /> CVR 20% 퍼널 체크리스트를 무료로 받으세요
            </h2>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              어려운 IT 용어나 쿼리, 통계 몰라도 괜찮습니다. 지금 이메일만 입력하시면, 내 계정을 살리는 체크리스트와 실전 광고 세팅법 무료 가이드(PDF)를 1초 만에 바로 보내드립니다.
              CAC, LTV, CVR, 리드마그넷이 뭔지 헷갈리셨나요? 뜬구름 잡는 경영학 이론 대신, 오늘 당장 내 상품에 결제 버튼 붙이고 전환율 20% 만드는 실전 공식만 담은 100% 무료 가이드북(PDF)을 1초 만에 바로 보내드립니다.
            </p>

            {isDownloaded ? (
              <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-sm font-bold flex items-center gap-2">
                <CheckCircle size={20} weight="fill" />
                입력하신 이메일로 무료 가이드 발송이 완료되었습니다! (스팸함도 확인해 주세요)
                입력하신 이메일로 무료 가이드북 발송이 완료되었습니다! (스팸함도 확인해 주세요)
              </div>
            ) : (
              <form onSubmit={handleDownload} className="flex flex-col sm:flex-row gap-2 max-w-md">
                <input
                  type="email"
                  required
                  placeholder="무료 자료를 받을 이메일 주소"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm outline-none focus:border-[#3182f6] flex-1"
                />
                <button
                  type="submit"
                  className="toss-button-primary px-6 py-3.5 text-sm font-bold shadow-md shrink-0 flex items-center justify-center gap-1.5"
                >
                  <DownloadSimple size={16} weight="bold" />
                  무료 가이드 받기
                  무료 가이드북 받기
                </button>
              </form>
            )}

            <p className="text-[11px] text-gray-400">
              * 스팸 메일은 절대 보내지 않으며 언제든 1클릭으로 구독 취소 가능합니다.
            </p>
          </div>
        </div>
      </section>

      {/* ── 6. 파운더 스토리 배너 (About the Founder) ── */}
      <section id="about" className="toss-container">
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-black/[0.08] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2.5 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f3ff] text-[#3182f6] text-xs font-bold">
              <Sparkle size={14} weight="fill" />
              <span>ABOUT AIZALER · 사이트 및 스튜디오 소개</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#191f28] leading-snug">
              이론만 파는 강사 대신, 직접 제품과 데이터로 생존하는 1인 빌더 스튜디오
            </h3>
            <p className="text-xs sm:text-sm text-[#4e5968] leading-relaxed">
              정년과 급여가 보장되던 공기업·해외주재원을 나와 야생에서 4개 프로덕트를 직접 굴리기까지. aizaler 스튜디오의 실전 철학과 1인 테크 운영 방식을 확인해 보세요.
            </p>
          </div>
          <Link
            href="/about"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#191f28] text-white hover:bg-black font-bold text-xs sm:text-sm transition-all shadow-sm"
          >
            <span>사이트 소개 전문 보기</span>
            <ArrowRight size={16} weight="bold" />
          </Link>
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
                className={`rounded-2xl transition-all duration-200 overflow-hidden bg-white border ${
                  isOpen
                    ? 'border-[#3182f6]/40 shadow-sm ring-1 ring-[#3182f6]/10'
                    : 'border-black/[0.08] hover:border-black/[0.16] shadow-xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 flex items-center justify-between text-left focus:outline-none select-none transition-colors hover:bg-slate-50/50"
                >
                  <div className="flex items-start gap-3.5 pr-3">
                    <span
                      className={`w-6 h-6 rounded-lg text-xs font-black flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isOpen
                          ? 'bg-[#3182f6] text-white'
                          : 'bg-gray-100 text-[#8b95a1]'
                      }`}
                    >
                      Q
                    </span>
                    <span className="font-bold text-sm sm:text-base text-[#191f28] leading-snug">
                      {faq.q}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ml-2 transition-all duration-200 ${
                      isOpen
                        ? 'bg-blue-50 text-[#3182f6]'
                        : 'bg-gray-100 text-[#8b95a1]'
                    }`}
                  >
                    <CaretDown
                      size={16}
                      weight="bold"
                      className={`transition-transform duration-250 ease-out ${
                        isOpen ? 'rotate-180 text-[#3182f6]' : ''
                      }`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 animate-in fade-in duration-200">
                    <div className="pt-4 border-t border-black/[0.06] flex items-start gap-3.5">
                      <span className="w-6 h-6 rounded-lg bg-[#e8f3ff] text-[#3182f6] text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                        A
                      </span>
                      <p className="text-xs sm:text-sm text-[#4e5968] leading-relaxed pt-0.5">
                        {faq.a}
                      </p>
                    </div>
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
