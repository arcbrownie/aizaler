'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Sparkle, 
  ArrowRight, 
  CheckCircle, 
  TrendUp, 
  CaretDown, 
  DownloadSimple,
  RocketLaunch,
  Globe,
  Crown
} from '@phosphor-icons/react';

import { PRODUCTS } from '@/data/products';
import LegoStackSimulator from '@/components/LegoStackSimulator';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedMode, setSelectedMode] = useState<'daily' | 'traffic' | 'build'>('daily');
  const [emailInput, setEmailInput] = useState('');
  const [isDownloaded, setIsDownloaded] = useState(false);

  const modeOptions = [
    { 
      id: 'daily', 
      label: '1. Aside & 지능', 
      desc: '탭 50개 검색 지옥 탈출: Claude Academy 정본 프롬프트 & 24h 자율 리서치', 
      icon: Globe 
    },
    { 
      id: 'traffic', 
      label: '2. 트래픽 & 퍼널', 
      desc: '허수 조회수 탈출: 광고 클릭을 이탈 없이 구매로 결속시키는 고전환 퍼널', 
      icon: TrendUp 
    },
    { 
      id: 'build', 
      label: '3. 1인 제품 런칭', 
      desc: '외주비 0원: Cursor + Supabase 기반 실결제 상용 웹서비스 런칭', 
      icon: RocketLaunch 
    },
  ] as const;

  const modeProducts = PRODUCTS.filter((p) => p.mode === selectedMode);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setIsDownloaded(true);
  };

  const faqs = [
    {
      q: '어릴 때 레고 좋아했던 사람을 위한 빌더 프로그램이란 무엇인가요?',
      a: '벽돌 만드는 화학 공식을 몰라도 레고 블록만 있으면 거대한 성을 지을 수 있었습니다. 2026년의 AI 소프트웨어도 마찬가지입니다. 복잡한 코딩 문법이나 뜬구름 마케팅 이론을 0부터 외울 필요 없이, 검증된 AI 블록(Aside 브라우저, 정본 프롬프트, 인프라 보일러플레이트)을 조립해 내 제품과 현금 흐름을 만드는 1인 창작자로 성장하도록 돕는 프로그램입니다.'
    },
    {
      q: '시중의 챗GPT 강의나 프롬프트 모음집과는 구체적으로 무엇이 다른가요?',
      a: '시중 강의는 얕은 인스타 카드뉴스를 짜깁기한 것이 대다수입니다. aizaler는 Anthropic 공식 Claude Academy와 Google Gemini 엔지니어링 정본(SSOT)을 직접 분석하여 실무에 바로 복붙 가능한 XML 구조화 템플릿과 Aside 24시간 자율 리서치 등 프로들의 실전 무기를 전수합니다.'
    },
    {
      q: '비개발자나 초보자도 1인 제품 런칭 트랙을 따라갈 수 있나요?',
      a: '네, 외주 개발사에 수천만 원을 쓰지 않아도 Cursor, Supabase, Cloudflare를 레고처럼 조합하면 누구나 1인 풀스택 시스템을 구축할 수 있습니다. aizaler의 가이드와 템플릿은 실제 라이브 중인 상용 서비스 파이프라인 그대로 제공됩니다.'
    },
  ];

  return (
    <div className="space-y-10 sm:space-y-16 pt-3 sm:pt-6 pb-12">
      {/* ── 1. 히어로 섹션 (Lego Builder Narrative) ── */}
      <section className="toss-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
          {/* 좌측: 레고 훅 & 1인 빌더 서사 */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f3ff] text-[#3182f6] text-xs font-bold">
              <Sparkle size={13} weight="fill" />
              <span>레고처럼 조립하는 1인 AI 비즈니스</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-[#191f28] leading-[1.25] tracking-tight">
              어릴 때 레고 좋아하셨나요?<br />
              코딩 대신 <span className="text-[#3182f6] underline decoration-[#3182f6]/30">AI 블록을 조립하는</span> 1인 빌더.
            </h1>

            <p className="text-xs sm:text-base text-[#4e5968] leading-relaxed max-w-xl font-normal">
              남들이 만든 AI 툴에 구독료만 내는 단순 소비자는 그만.<br className="hidden sm:inline" />
              실리콘밸리 <b>Claude 정본 프롬프트</b>와 <b>Aside 24시간 자율 에이전트</b>를 조립해 외주비 0원으로 내 프로덕트를 직접 완성하세요.
            </p>

            {/* CTA 버튼 & 신뢰 텍스트 */}
            <div className="space-y-3 pt-1">
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href="#modes"
                  className="toss-button-primary px-6 py-3.5 text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-sm active:scale-95"
                >
                  <span>3대 빌더 모드 보기</span>
                  <ArrowRight size={14} weight="bold" />
                </a>
                <a
                  href="#lead-magnet"
                  className="px-5 py-3.5 rounded-xl bg-white border border-black/[0.08] text-[#191f28] text-xs sm:text-sm font-bold hover:bg-gray-50 flex items-center gap-1.5 shadow-xs"
                >
                  <DownloadSimple size={15} weight="bold" className="text-[#3182f6]" />
                  <span>무료 가이드북 받기</span>
                </a>
              </div>

              {/* 신뢰 지표 한줄 */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-[#8b95a1] pt-1">
                <span>✓ Meta 공인 전문가</span>
                <span>✓ Claude Academy 정본</span>
                <span>✓ Aside 24h 리서치</span>
                <span className="text-emerald-600 font-medium">✓ 외주비 0원 4개 라이브</span>
              </div>
            </div>
          </div>

          {/* 우측: 컴팩트 3D 레고 빌더 시뮬레이터 */}
          <div className="lg:col-span-5">
            <LegoStackSimulator />
          </div>
        </div>
      </section>

      {/* ── 2. 3대 빌더 모드 & 핵심 솔루션 (스압 제로) ── */}
      <section id="modes" className="toss-container space-y-4 sm:space-y-6 scroll-mt-14">
        {/* 모드 선택 세그먼트 버튼 (3개) */}
        <div className="grid grid-cols-3 gap-1.5 p-1 rounded-2xl bg-white border border-black/[0.06] shadow-xs max-w-xl mx-auto">
          {modeOptions.map((m) => {
            const Icon = m.icon;
            const isSelected = selectedMode === m.id;
            return (
              <button
                key={m.id}
                onClick={() => setSelectedMode(m.id)}
                className={`py-2.5 px-2 rounded-xl text-center transition-all flex items-center justify-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#191f28] text-white shadow-xs'
                    : 'text-[#4e5968] hover:bg-gray-50 hover:text-[#191f28]'
                }`}
              >
                <Icon size={15} weight={isSelected ? 'fill' : 'bold'} className={isSelected ? 'text-[#3182f6]' : 'text-[#8b95a1]'} />
                <span className="font-bold text-xs sm:text-sm truncate">{m.label}</span>
              </button>
            );
          })}
        </div>

        {/* 선택된 모드 1줄 요약 배너 */}
        <div className="p-3.5 sm:p-4 rounded-2xl bg-[#e8f3ff]/60 border border-[#3182f6]/20 text-center max-w-xl mx-auto">
          <p className="text-xs sm:text-sm font-bold text-[#191f28]">
            {modeOptions.find((m) => m.id === selectedMode)?.desc}
          </p>
        </div>

        {/* 해당 모드 추천 솔루션 카드 그리드 (간결) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto">
          {modeProducts.map((p) => (
            <div key={p.id} className="bezel-card-outer flex flex-col justify-between">
              <div className="bezel-card-inner flex-1 flex flex-col justify-between p-4 sm:p-5 space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-[#e8f3ff] text-[#3182f6]">
                      {p.badge}
                    </span>
                    <span className="text-[11px] text-[#8b95a1] font-medium">{p.category}</span>
                  </div>

                  <h3 className="text-sm sm:text-base font-black text-[#191f28] leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#4e5968] leading-relaxed line-clamp-2">
                    {p.tagline}
                  </p>
                </div>

                <div className="pt-2 border-t border-black/[0.04] flex items-center justify-between gap-3">
                  <div>
                    <span className="text-base sm:text-lg font-black text-[#191f28] font-mono">
                      {p.salePrice.toLocaleString()}원
                    </span>
                    {p.discountRate > 0 && (
                      <span className="text-[11px] font-bold text-[#f04452] ml-1.5">
                        {p.discountRate}% OFF
                      </span>
                    )}
                  </div>

                  <Link
                    href={`/product/${p.id}`}
                    className="px-4 py-2 rounded-xl bg-[#f2f4f6] hover:bg-[#3182f6] hover:text-white text-[#191f28] text-xs font-bold transition-all shrink-0"
                  >
                    상세보기
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. 1초 무료 가이드북 리드마그넷 (초단순) ── */}
      <section id="lead-magnet" className="toss-container">
        <div className="p-5 sm:p-8 rounded-3xl bg-[#191f28] text-white max-w-3xl mx-auto shadow-lg">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-white text-[11px] font-bold">
              <DownloadSimple size={13} weight="bold" />
              <span>100% 무료 실전 가이드북 (PDF)</span>
            </div>

            <h2 className="text-base sm:text-xl font-black text-white leading-tight">
              1인 창업 필수 마케팅 용어집 & CVR 20% 퍼널 체크리스트
            </h2>

            <p className="text-xs text-gray-300 leading-relaxed">
              CAC, LTV, CVR 등 뜬구름 잡는 이론 대신, 내 상품에 결제 버튼 붙이고 전환율 20% 만드는 실전 공식만 담아 즉시 발송해 드립니다.
            </p>

            {isDownloaded ? (
              <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold flex items-center gap-1.5">
                <CheckCircle size={16} weight="fill" />
                <span>입력하신 이메일로 가이드북이 발송되었습니다! (스팸함도 확인해 주세요)</span>
              </div>
            ) : (
              <form onSubmit={handleDownload} className="flex flex-col sm:flex-row gap-2 pt-1">
                <input
                  type="email"
                  required
                  placeholder="무료 PDF를 받을 이메일 주소"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 text-xs outline-none focus:border-[#3182f6] flex-1"
                />
                <button
                  type="submit"
                  className="toss-button-primary px-4 py-2.5 text-xs font-bold shrink-0 flex items-center justify-center gap-1 shadow-sm"
                >
                  <DownloadSimple size={14} weight="bold" />
                  <span>1초 만에 무료 받기</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── 4. VIP 1:1 프라이빗 세션 (컴팩트 카드) ── */}
      <section id="vip-session" className="toss-container">
        <div className="p-5 sm:p-7 rounded-3xl bg-[#050A18] text-[#FAF6F0] max-w-3xl mx-auto border border-white/10 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-400">
              <Crown size={14} weight="fill" />
              <span>VIP 1:1 MENTORING</span>
            </div>
            <h3 className="text-base sm:text-lg font-black text-white">
              혼자 조립하기 막막할 땐, 50분 1:1 맞춤 전략 세션
            </h3>
            <p className="text-xs text-[#FAF6F0]/70">
              공기업·주재원 퇴사 파운더 직강 · 내 상황 맞춤 90일 실행 Action Blueprint 처방
            </p>
          </div>

          <Link
            href="/career"
            className="shrink-0 inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl bg-white text-[#050A18] hover:bg-gray-100 text-xs font-bold transition-all shadow-sm"
          >
            <span>세션 신청하기</span>
            <ArrowRight size={13} weight="bold" />
          </Link>
        </div>
      </section>

      {/* ── 5. 자주 묻는 질문 FAQ (핵심 3개) ── */}
      <section id="faq" className="toss-container space-y-3 max-w-2xl mx-auto">
        <div className="text-center space-y-1">
          <span className="text-[11px] font-bold text-[#3182f6]">FAQ</span>
          <h2 className="text-lg sm:text-xl font-black text-[#191f28]">자주 묻는 질문</h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-xl overflow-hidden bg-white border border-black/[0.08]"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-3.5 sm:p-4 flex items-center justify-between text-left transition-colors hover:bg-slate-50/50"
                >
                  <div className="flex items-start gap-2.5 pr-2">
                    <span className="text-xs font-black text-[#3182f6]">Q.</span>
                    <span className="font-bold text-xs sm:text-sm text-[#191f28] leading-snug">
                      {faq.q}
                    </span>
                  </div>
                  <CaretDown
                    size={14}
                    weight="bold"
                    className={`transition-transform duration-200 shrink-0 text-[#8b95a1] ${
                      isOpen ? 'rotate-180 text-[#3182f6]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-3.5 pb-3.5 sm:px-4 sm:pb-4 pt-0">
                    <p className="pt-2 border-t border-black/[0.04] text-xs text-[#4e5968] leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 파운더 소개 링크 */}
        <div className="pt-2 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-1 text-xs font-bold text-[#3182f6] hover:underline"
          >
            aizaler 스튜디오 철학 & 파운더 이야기 보기 <ArrowRight size={13} weight="bold" />
          </Link>
        </div>
      </section>
    </div>
  );
}
