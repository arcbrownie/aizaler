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
  Lightning,
  RocketLaunch,
  Package,
  Compass,
  Globe,
  Crown,
  SlidersHorizontal,
  FileCode
} from '@phosphor-icons/react';

import { PRODUCTS } from '@/data/products';
import { LESSONS } from '@/data/lessons';
import AlgorithmHangoverSimulator from '@/components/AlgorithmHangoverSimulator';
import MetaAdsAngleMatrix from '@/components/MetaAdsAngleMatrix';
import PromptDiffViewer from '@/components/PromptDiffViewer';
import AIPrescriptionTrainer from '@/components/AIPrescriptionTrainer';
import LegoStackSimulator from '@/components/LegoStackSimulator';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedMode, setSelectedMode] = useState<'daily' | 'traffic' | 'build' | 'all'>('daily');
  const [emailInput, setEmailInput] = useState('');
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [showDiagnoser, setShowDiagnoser] = useState(false);
  const [showSimulator, setShowSimulator] = useState(false);

  const modeOptions = [
    { id: 'daily', label: '1. Aside & 지능', sub: 'Claude Academy 정본 & 24h 자동화', icon: Globe },
    { id: 'traffic', label: '2. 트래픽 & 퍼널', sub: '허수 탈출 & 고전환 퍼널 매칭', icon: TrendUp },
    { id: 'build', label: '3. 1인 제품 런칭', sub: '외주비 0원 상용 결제 웹 런칭', icon: RocketLaunch },
    { id: 'all', label: '전체 솔루션', sub: '전체 빌더 툴킷 한눈에 보기', icon: Package },
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
      a: '벽돌 만드는 화학 공식을 몰라도 레고 블록만 있으면 누구나 거대한 성을 지을 수 있었습니다. 2026년의 AI 소프트웨어도 마찬가지입니다. 복잡한 코딩 문법이나 뜬구름 잡는 마케팅 이론을 0부터 외울 필요 없이, 검증된 AI 블록(Aside 브라우저, 정본 프롬프트, 인프라 보일러플레이트)을 조립해 내 제품과 현금 흐름을 만드는 1인 창작자로 성장하도록 돕는 프로그램입니다.'
    },
    {
      q: '시중의 챗GPT 강의나 프롬프트 모음집과는 구체적으로 무엇이 다른가요?',
      a: '시중 강의는 얕은 인스타 카드뉴스를 짜깁기한 것이 대다수입니다. aizaler는 Anthropic 공식 Claude Academy와 Google Gemini 엔지니어링 정본(SSOT)을 직접 분석하여 실무에 바로 복붙 가능한 XML 구조화 템플릿을 제공하며, Aside 브라우저를 통한 24시간 자율 리서치 등 프로들이 실제로 쓰는 무기를 전수합니다.'
    },
    {
      q: '공기업과 해외 주재원을 퇴사하고 1인 개발을 시작하신 이유가 무엇인가요?',
      a: '정년과 급여가 보장되는 안락한 테두리였지만, 거대한 조직의 부품으로 남는 대신 오직 내 이름과 내 손으로 만든 제품으로 시장에서 가치를 증명하고 싶었습니다. 퇴사 후 야생에서 겪은 수많은 실패 끝에, 데이터와 엔지니어링으로 생존하는 1인 비즈니스 파이프라인을 완성했습니다.'
    },
    {
      q: '비개발자나 초보자도 1인 제품 런칭 트랙을 따라갈 수 있나요?',
      a: '네, 외주 개발사에 수천만 원을 쓰지 않아도 Cursor, Supabase, Cloudflare를 레고처럼 조합하면 누구나 1인 풀스택 시스템을 구축할 수 있습니다. aizaler의 가이드와 템플릿은 1인 테크 스튜디오가 실제 운영 중인 4개 라이브 서비스의 파이프라인 그대로 제공됩니다.'
    },
    {
      q: '1:1 프라이빗 전략 세션은 어떤 분들에게 적합한가요?',
      a: '혼자 조립하기 막막하거나, 이직 vs 버티기 vs 1인 창업의 중대한 갈림길에서 손익 계산이 서지 않는 분들을 위한 VIP 세션입니다. 파운더가 사전에 서면 질의서를 직접 검토한 뒤, 50분간 1:1 화상으로 맞춤 실행 Blueprint를 처방해 드립니다.'
    },
  ];

  return (
    <div className="space-y-12 sm:space-y-20 pt-4 sm:pt-8">
      {/* ── 1. 히어로 섹션 (Lego Builder Growth Narrative) ── */}
      <section className="toss-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
          {/* 좌측: 레고 훅 & 1인 빌더 성장 서사 (7열) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f3ff] text-[#3182f6] text-xs font-bold">
              <Sparkle size={14} weight="fill" />
              <span>AI-NATIVE BUILDER STUDIO · 레고처럼 조립하는 1인 비즈니스</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-black text-[#191f28] leading-[1.22] tracking-tight">
              어릴 때 레고 좋아하셨나요?<br />
              코딩을 외우지 마세요.<br />
              <span className="text-[#3182f6] underline decoration-[#3182f6]/30">AI 블록을 조립해</span> 내 제품을 띄우는 1인 빌더.
            </h1>

            <p className="text-sm sm:text-base text-[#4e5968] leading-relaxed max-w-xl font-normal">
              남들이 만든 AI 툴에 월 구독료만 내는 단순 소비자에 머물지 마세요.<br className="hidden sm:inline" />
              실리콘밸리 <b>Claude Academy 공식 정본</b>과 <b>Aside 24시간 자율 에이전트</b>로 실제 돈을 버는 내 상용 프로덕트를 직접 완성합니다.
            </p>

            {/* CTA 버튼 세트 */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-1">
              <a
                href="#modes"
                className="toss-button-primary px-6 py-3.5 text-sm sm:text-base font-bold text-center flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all"
              >
                <Compass size={18} weight="bold" />
                <span>3대 빌더 모드 둘러보기</span>
              </a>
              <a
                href="#ai-prescription"
                onClick={() => setShowDiagnoser(true)}
                className="px-5 py-3.5 rounded-2xl bg-white border border-black/[0.08] text-[#191f28] text-sm sm:text-base font-bold text-center hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <Lightning size={17} weight="fill" className="text-amber-500" />
                <span>내 빌더 레벨 1분 진단</span>
              </a>
            </div>

            {/* 신뢰 지표 4열 칩 (컴팩트) */}
            <div className="pt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 max-w-xl border-t border-black/[0.05]">
              <div className="space-y-0.5">
                <div className="text-xs sm:text-sm font-black text-[#3182f6]">Meta Certified</div>
                <div className="text-[10px] text-[#8b95a1]">공인 전문가 자격</div>
              </div>
              <div className="space-y-0.5">
                <div className="text-xs sm:text-sm font-black text-[#191f28]">Claude Academy</div>
                <div className="text-[10px] text-[#8b95a1]">실리콘밸리 정본</div>
              </div>
              <div className="space-y-0.5">
                <div className="text-xs sm:text-sm font-black text-rose-600">Aside Agent</div>
                <div className="text-[10px] text-[#8b95a1]">24h 자율 리서치</div>
              </div>
              <div className="space-y-0.5">
                <div className="text-xs sm:text-sm font-black text-emerald-600">외주비 0원</div>
                <div className="text-[10px] text-[#8b95a1]">4개 프로덕트 라이브</div>
              </div>
            </div>
          </div>

          {/* 우측: 컴팩트 3D 레고 빌더 시뮬레이터 (5열) */}
          <div className="lg:col-span-5">
            <LegoStackSimulator />
          </div>
        </div>
      </section>

      {/* ── 2. 스마트 접이식 1분 빌더 진단 (정보 과잉 차단) ── */}
      <section id="ai-prescription" className="toss-container scroll-mt-20">
        <div className="rounded-2xl sm:rounded-3xl bg-white border border-black/[0.08] p-5 sm:p-7 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-amber-600 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded-full">
                  소요 시간 1분 · 100% 무료
                </span>
                <span className="text-[11px] font-bold text-[#8b95a1]">9개 문항 맞춤 처방</span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-[#191f28] flex items-center gap-1.5">
                <Lightning size={20} weight="fill" className="text-amber-500" />
                내 현재 AI 빌더 레벨 & 맞춤 처방 진단하기
              </h2>
              <p className="text-xs sm:text-sm text-[#4e5968] leading-relaxed">
                어디서부터 시작해야 할지 막막하신가요? 내 비즈니스 병목을 1분 만에 체크하고 단계별 실행 처방전을 확인하세요.
              </p>
            </div>

            <button
              onClick={() => setShowDiagnoser(!showDiagnoser)}
              className="shrink-0 px-5 py-3 rounded-xl bg-[#191f28] hover:bg-[#3182f6] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-xs active:scale-95"
            >
              <span>{showDiagnoser ? '진단창 닫기' : '1분 진단 시작하기'}</span>
              <CaretDown size={14} weight="bold" className={`transition-transform duration-200 ${showDiagnoser ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* 확장 시 진단기 노출 */}
          {showDiagnoser && (
            <div className="pt-6 mt-6 border-t border-black/[0.06] animate-in fade-in duration-200">
              <AIPrescriptionTrainer />
            </div>
          )}
        </div>
      </section>

      {/* ── 3. 과부하 없는 3대 빌더 모드 선택기 ── */}
      <section id="modes" className="toss-container space-y-6 sm:space-y-8 scroll-mt-20">
        <div className="text-center space-y-1.5 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#e8f3ff] text-[#3182f6] text-xs font-bold">
            <Compass size={14} weight="fill" />
            <span>BUILDER MODES · 필요한 모드만 골라 조립하기</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#191f28] tracking-tight">
            내 단계에 꼭 맞는 <span className="text-[#3182f6]">3가지 빌더 모드</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#4e5968]">
            한꺼번에 다 배울 필요 없습니다. 지금 가장 필요한 관심사 모드를 탭해 보세요.
          </p>
        </div>

        {/* 모드 선택 탭 바 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 p-1 rounded-2xl bg-white border border-black/[0.06] shadow-xs max-w-3xl mx-auto">
          {modeOptions.map((m) => {
            const Icon = m.icon;
            const isSelected = selectedMode === m.id;
            return (
              <button
                key={m.id}
                onClick={() => {
                  setSelectedMode(m.id);
                  setShowSimulator(false);
                }}
                className={`p-2.5 sm:p-3 rounded-xl text-left transition-all flex flex-col justify-between gap-1 ${
                  isSelected
                    ? 'bg-[#191f28] text-white shadow-xs'
                    : 'text-[#4e5968] hover:bg-gray-50 hover:text-[#191f28]'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <Icon size={16} weight={isSelected ? 'fill' : 'bold'} className={isSelected ? 'text-[#3182f6]' : 'text-[#8b95a1]'} />
                  <span className="font-bold text-xs sm:text-sm truncate">{m.label}</span>
                </div>
                <span className={`text-[10px] hidden sm:block truncate ${isSelected ? 'text-gray-300' : 'text-[#8b95a1]'}`}>
                  {m.sub}
                </span>
              </button>
            );
          })}
        </div>

        {/* 모드별 핵심 브리핑 및 옵션 시뮬레이터 */}
        <div className="space-y-6">
          {/* Mode 1: Aside & 지능 */}
          {(selectedMode === 'daily' || selectedMode === 'all') && (
            <div className="p-5 sm:p-7 rounded-3xl bg-gradient-to-br from-[#f0f9ff] to-white border border-[#0ea5e9]/20 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#0ea5e9]/10 text-[#0284c7] text-[11px] font-bold">
                    MODE 1 · Aside & 지능 레버리지
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-[#191f28]">
                    탭 50개 검색 지옥 탈출: Aside 24h 자율 리서치 & Claude Academy 정본
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4e5968] leading-relaxed max-w-2xl">
                    얕은 인스타 팁 대신, 앤트로픽 실리콘밸리 공식 XML 구조화 프롬프트와 24시간 시장을 자동 감시하는 Aside 브라우저를 조합합니다.
                  </p>
                </div>
                <button
                  onClick={() => setShowSimulator(!showSimulator)}
                  className="shrink-0 px-4 py-2.5 rounded-xl bg-white border border-[#0ea5e9]/30 text-[#0284c7] text-xs font-bold hover:bg-[#0ea5e9]/10 transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <FileCode size={16} weight="bold" />
                  <span>{showSimulator ? '비교기 닫기' : '정본 프롬프트 Before/After 비교기 ▾'}</span>
                </button>
              </div>

              {showSimulator && (
                <div className="pt-3 border-t border-[#0ea5e9]/15 animate-in fade-in duration-200">
                  <PromptDiffViewer />
                </div>
              )}
            </div>
          )}

          {/* Mode 2: 트래픽 & 퍼널 */}
          {(selectedMode === 'traffic' || selectedMode === 'all') && (
            <div className="p-5 sm:p-7 rounded-3xl bg-gradient-to-br from-[#eff6ff] to-white border border-[#3182f6]/20 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#3182f6]/10 text-[#3182f6] text-[11px] font-bold">
                    MODE 2 · 트래픽 & 퍼널 성장
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-[#191f28]">
                    허수 바이럴 탈출: 실제 구매 고객을 모으는 검증된 고전환 퍼널 매칭
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4e5968] leading-relaxed max-w-2xl">
                    계정 추천을 망치는 단순 조회수 거품을 걷어내고, 광고 메시지와 랜딩 첫 문장을 1:1로 결합해 이탈률을 낮추는 실전 퍼널입니다.
                  </p>
                </div>
                <button
                  onClick={() => setShowSimulator(!showSimulator)}
                  className="shrink-0 px-4 py-2.5 rounded-xl bg-white border border-[#3182f6]/30 text-[#3182f6] text-xs font-bold hover:bg-[#3182f6]/10 transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <SlidersHorizontal size={16} weight="bold" />
                  <span>{showSimulator ? '시뮬레이터 닫기' : '알고리즘 숙취 시뮬레이터 열기 ▾'}</span>
                </button>
              </div>

              {showSimulator && (
                <div className="pt-3 border-t border-[#3182f6]/15 space-y-4 animate-in fade-in duration-200">
                  <AlgorithmHangoverSimulator />
                  <MetaAdsAngleMatrix />
                </div>
              )}
            </div>
          )}

          {/* Mode 3: 1인 제품 런칭 */}
          {(selectedMode === 'build' || selectedMode === 'all') && (
            <div className="p-5 sm:p-7 rounded-3xl bg-gradient-to-br from-[#ecfeff] to-white border border-[#06b6d4]/20 space-y-4">
              <div className="space-y-1">
                <span className="px-2.5 py-0.5 rounded-full bg-[#06b6d4]/10 text-[#0891b2] text-[11px] font-bold">
                  MODE 3 · 1인 제품 런칭
                </span>
                <h3 className="text-lg sm:text-xl font-black text-[#191f28]">
                  외주 개발비 2,000만 원 없이: Cursor + Supabase 상용 결제 웹 런칭
                </h3>
                <p className="text-xs sm:text-sm text-[#4e5968] leading-relaxed max-w-2xl">
                  개발자 한 명 없이 토스페이먼츠 결제창 연동부터 클라우드 배포까지 1인 풀스택 시스템을 완성합니다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                {LESSONS.slice(0, 2).map((l) => (
                  <div key={l.id} className="p-3.5 rounded-2xl bg-white/80 border border-black/[0.05] space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-50 text-cyan-800">
                        {l.category}
                      </span>
                      <span className="text-[10px] text-[#8b95a1] font-mono">{l.statBadge}</span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#191f28]">{l.title}</h4>
                    <p className="text-[11px] text-[#4e5968]">{l.solution}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ── 해당 모드의 실전 툴킷 카드 그리드 ── */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-black text-[#191f28]">
              {selectedMode === 'all' ? '전체 솔루션 킷' : `${modeOptions.find(m => m.id === selectedMode)?.label} 추천 킷`}
            </h3>
            <span className="text-xs text-[#8b95a1]">
              총 {filteredProducts.length}개 솔루션
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredProducts.map((p) => (
              <div key={p.id} className="bezel-card-outer flex flex-col justify-between">
                <div className="bezel-card-inner flex-1 flex flex-col justify-between space-y-4 p-5 sm:p-6">
                  <div className="space-y-3">
                    {/* 배지 및 카테고리 */}
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full ${
                          p.badge === 'BEST'
                            ? 'bg-[#ffebee] text-[#f04452]'
                            : p.badge === 'FREE'
                            ? 'bg-emerald-50 text-emerald-600'
                            : 'bg-[#e8f3ff] text-[#3182f6]'
                        }`}
                      >
                        {p.badge}
                      </span>
                      <span className="text-xs text-[#8b95a1]">{p.category}</span>
                    </div>

                    {/* 제목 및 카피 */}
                    <div className="space-y-1">
                      <h4 className="text-base sm:text-lg font-black text-[#191f28] leading-snug">
                        {p.title}
                      </h4>
                      <p className="text-xs text-[#4e5968] leading-relaxed line-clamp-2">
                        {p.tagline}
                      </p>
                    </div>

                    {/* 핵심 특징 3개 */}
                    <ul className="space-y-1.5 text-xs text-[#4e5968] pt-2 border-t border-black/[0.04]">
                      {p.features.slice(0, 3).map((feat, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle size={14} weight="fill" className="text-[#3182f6] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 가격 및 이동 버튼 */}
                  <div className="pt-3 border-t border-black/[0.04] space-y-2.5">
                    <div className="flex items-baseline justify-between">
                      {p.salePrice === 0 ? (
                        <span className="text-xl font-black text-emerald-600 font-mono">무료 배포</span>
                      ) : (
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-xl font-black text-[#191f28] font-mono tabular-nums">
                            {p.salePrice.toLocaleString()}원
                          </span>
                          <span className="text-xs text-[#8b95a1] line-through font-mono tabular-nums">
                            {p.originalPrice.toLocaleString()}원
                          </span>
                        </div>
                      )}
                      {p.discountRate > 0 && p.salePrice > 0 && (
                        <span className="text-xs font-bold text-[#f04452]">
                          {p.discountRate}% OFF
                        </span>
                      )}
                    </div>

                    <Link
                      href={p.id === '4' ? '/career' : `/product/${p.id}`}
                      className={`w-full py-2.5 rounded-xl transition-all text-xs font-bold text-center block ${
                        p.id === '4'
                          ? 'bg-[#050A18] text-white hover:bg-[#3182f6]'
                          : 'bg-[#f2f4f6] text-[#191f28] hover:bg-[#3182f6] hover:text-white'
                      }`}
                    >
                      {p.id === '4' ? '전략 세션 상세 보기 (선착순)' : '상세 안내 & 신청'}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. 무료 실전 가이드북 리드마그넷 (중복 문구 완벽 정돈) ── */}
      <section id="lead-magnet" className="toss-container">
        <div className="p-6 sm:p-10 rounded-3xl bg-[#191f28] text-white relative overflow-hidden shadow-xl">
          <div className="max-w-xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold">
              <DownloadSimple size={14} weight="bold" />
              <span>100% 무료 실전 가이드북 (PDF) 즉시 발송</span>
            </div>

            <h2 className="text-xl sm:text-3xl font-black text-white leading-tight">
              1인 창업 필수 마케팅 용어집 &<br />
              CVR 20% 퍼널 체크리스트를 무료로 받으세요
            </h2>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              CAC, LTV, CVR, 리드마그넷 개념이 헷갈리셨나요? 뜬구름 잡는 경영학 이론 대신, 오늘 당장 내 상품에 결제 버튼 붙이고 전환율 20% 만드는 실전 공식만 담은 가이드북을 1초 만에 바로 보내드립니다.
            </p>

            {isDownloaded ? (
              <div className="p-3.5 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-bold flex items-center gap-2">
                <CheckCircle size={18} weight="fill" />
                <span>입력하신 이메일로 무료 가이드북 발송이 완료되었습니다! (스팸함도 확인해 주세요)</span>
              </div>
            ) : (
              <form onSubmit={handleDownload} className="flex flex-col sm:flex-row gap-2 pt-1 max-w-md">
                <input
                  type="email"
                  required
                  placeholder="자료를 받을 이메일 주소 입력"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 text-xs sm:text-sm outline-none focus:border-[#3182f6] flex-1"
                />
                <button
                  type="submit"
                  className="toss-button-primary px-5 py-3 text-xs sm:text-sm font-bold shadow-md shrink-0 flex items-center justify-center gap-1.5"
                >
                  <DownloadSimple size={15} weight="bold" />
                  <span>무료 가이드북 받기</span>
                </button>
              </form>
            )}

            <p className="text-[10px] text-gray-400">
              * 스팸 메일은 절대 발송하지 않으며 언제든 1클릭으로 구독 취소 가능합니다.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. VIP 하이엔드 1:1 세션 ── */}
      <section id="vip-session" className="toss-container">
        <div className="relative overflow-hidden rounded-3xl bg-[#050A18] text-[#FAF6F0] p-6 sm:p-10 border border-white/10 shadow-xl">
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#60A5FA]/10 border border-[#60A5FA]/25 text-[#60A5FA] text-xs font-bold">
                <Crown size={14} weight="fill" className="text-amber-400" />
                <span>VIP 1:1 MENTORING · 공기업·주재원 퇴사 파운더 직강</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-extrabold text-[#FAF6F0] leading-tight">
                혼자 조립하기 막막할 땐,<br />
                나만의 맞춤 설계도를 처방받으세요.
              </h2>
              <p className="text-xs sm:text-sm text-[#FAF6F0]/70 leading-relaxed font-normal">
                공기업과 해외 주재원을 나와 야생에서 4개 프로덕트로 생존한 파운더가, 50분간 1:1로 철저한 손익과 90일 실행 Action Blueprint를 처방해 드립니다.
              </p>
              <div className="flex flex-wrap items-center gap-3 text-[11px] text-[#FAF6F0]/60 font-mono">
                <span className="text-emerald-400">✓ 50분 1:1 화상 전략</span>
                <span>✓ 90일 실행 Summary 제공</span>
                <span className="text-[#60A5FA]">✓ 매월 10팀 한정 예약제</span>
              </div>
            </div>

            <div className="shrink-0 w-full sm:w-auto">
              <Link
                href="/career"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FAF6F0] text-[#050A18] hover:bg-white text-xs sm:text-sm font-bold shadow-md transition-all"
              >
                <span>1:1 프라이빗 세션 신청하기</span>
                <ArrowRight size={15} weight="bold" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. 파운더 스토리 ── */}
      <section id="about" className="toss-container">
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.08] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-xl">
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#e8f3ff] text-[#3182f6] text-[11px] font-bold">
              <Sparkle size={13} weight="fill" />
              <span>ABOUT AIZALER</span>
            </div>
            <h3 className="text-base sm:text-xl font-black text-[#191f28]">
              이론만 파는 강사 대신, 직접 제품과 데이터로 생존하는 1인 스튜디오
            </h3>
            <p className="text-xs text-[#4e5968] leading-relaxed">
              공기업·해외주재원을 나와 야생에서 4개 프로덕트를 직접 굴리기까지. aizaler 스튜디오의 실전 철학을 확인해 보세요.
            </p>
          </div>
          <Link
            href="/about"
            className="shrink-0 inline-flex items-center gap-1.5 px-5 py-3 rounded-xl bg-[#191f28] text-white hover:bg-black font-bold text-xs transition-all shadow-xs"
          >
            <span>스튜디오 소개 보기</span>
            <ArrowRight size={14} weight="bold" />
          </Link>
        </div>
      </section>

      {/* ── 7. 자주 묻는 질문 FAQ ── */}
      <section id="faq" className="toss-container space-y-4">
        <div className="text-center space-y-1 max-w-xl mx-auto">
          <div className="text-xs font-bold text-[#3182f6] uppercase tracking-wider">FAQ</div>
          <h2 className="text-xl sm:text-2xl font-black text-[#191f28]">자주 묻는 질문</h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-2.5">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-200 overflow-hidden bg-white border ${
                  isOpen
                    ? 'border-[#3182f6]/40 shadow-xs ring-1 ring-[#3182f6]/10'
                    : 'border-black/[0.08] shadow-xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left focus:outline-none select-none transition-colors hover:bg-slate-50/50"
                >
                  <div className="flex items-start gap-3 pr-2">
                    <span
                      className={`w-5 h-5 rounded-md text-[11px] font-black flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isOpen ? 'bg-[#3182f6] text-white' : 'bg-gray-100 text-[#8b95a1]'
                      }`}
                    >
                      Q
                    </span>
                    <span className="font-bold text-xs sm:text-sm text-[#191f28] leading-snug">
                      {faq.q}
                    </span>
                  </div>
                  <CaretDown
                    size={15}
                    weight="bold"
                    className={`transition-transform duration-200 shrink-0 text-[#8b95a1] ${
                      isOpen ? 'rotate-180 text-[#3182f6]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 animate-in fade-in duration-150">
                    <div className="pt-3 border-t border-black/[0.05] flex items-start gap-3">
                      <span className="w-5 h-5 rounded-md bg-[#e8f3ff] text-[#3182f6] text-[11px] font-black flex items-center justify-center shrink-0 mt-0.5">
                        A
                      </span>
                      <p className="text-xs text-[#4e5968] leading-relaxed">
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
