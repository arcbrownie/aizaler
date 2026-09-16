'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Sparkle, 
  ArrowRight, 
  CheckCircle, 
  CaretDown, 
  DownloadSimple,
  Crown,
  LightbulbFilament,
  Cpu,
  Target,
  RocketLaunch
} from '@phosphor-icons/react';

import LegoStackSimulator from '@/components/LegoStackSimulator';
import BuilderConsultantChat from '@/components/BuilderConsultantChat';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [emailInput, setEmailInput] = useState('');
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [userStage, setUserStage] = useState<'idea' | 'traffic' | 'product'>('idea');
  const [diagnosedStep, setDiagnosedStep] = useState<number | undefined>(undefined);

  const stageOptions = [
    { id: 'idea', label: '💡 아이디어 & BM 기획', short: '기획 단계' },
    { id: 'traffic', label: '🎯 트래픽 유입 & 퍼널', short: '퍼널 단계' },
    { id: 'product', label: '🚀 1인 상용 웹 런칭', short: '런칭 단계' },
  ] as const;

  const stageRecommendations = {
    idea: {
      badge: 'BM 기획 맞춤 가이드',
      title: '1인 창업 필수 비즈니스 용어집 & 고객 결핍 검증 체크리스트 (PDF)',
      desc: '자료는 넘쳐나는데 어디서부터 시작할지 막막할 때: 내 아이디어가 실제 돈 버는 모델이 되는지 검증하는 첫 번째 블록입니다.',
      buttonText: '기획 맞춤 가이드 무료 받기'
    },
    traffic: {
      badge: '전환 퍼널 맞춤 가이드',
      title: 'CVR 20% 고전환 퍼널 설계 & 메타 광고 매칭 가이드 (PDF)',
      desc: '조회수 거품 없이, 내 상품을 살 진성 고객을 모으고 이탈 없이 결제로 연결하는 실전 퍼널 체크리스트입니다.',
      buttonText: '퍼널 맞춤 가이드 무료 받기'
    },
    product: {
      badge: '1인 런칭 맞춤 가이드',
      title: '외주비 0원 1인 웹서비스 런칭 로드맵 & 인프라 체크리스트 (PDF)',
      desc: '코딩 문법을 외우지 않고 Cursor와 Supabase를 조립해 실제 결제창을 띄우는 상용 런칭 가이드입니다.',
      buttonText: '런칭 맞춤 가이드 무료 받기'
    }
  };

  const currentRec = stageRecommendations[userStage];

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setIsDownloaded(true);
  };

  const steps = [
    {
      track: 'TRACK 01',
      title: '시장 검증 & 비즈니스 모델 기획',
      summary: '코딩 문법을 외우기 전, 고객이 실제로 지갑을 여는 결핍과 현금 흐름 모델을 데이터로 검증합니다.',
      outcome: '검증된 BM 린 캔버스 1장 & 고객 결핍 검증표',
      tools: '1인 창업 필수 용어집 · 결핍 검증 체크리스트',
      tag: 'FOUNDATION',
      color: '#2563eb',
      bgLight: 'bg-blue-50/70 border-blue-200/60',
      icon: LightbulbFilament,
      actionText: '기획 트랙 무료 가이드 받기',
      actionLink: '#lead-magnet',
      isFree: true
    },
    {
      track: 'TRACK 02',
      title: '메타 고전환 퍼널 매칭',
      summary: '광고 카피와 랜딩페이지 첫 문장을 1:1로 일치시켜 클릭한 고객의 구매 결정을 완성합니다.',
      outcome: '광고 ↔ 랜딩 결속 CVR 20% 고전환 퍼널 시스템',
      tools: '후킹 카피 프레임워크 · 메타 알고리즘 역설계 가이드',
      tag: 'HOTPOINT',
      color: '#f04452',
      bgLight: 'bg-rose-50/70 border-rose-200/60',
      icon: Target,
      actionText: '퍼널 트랙 실전서 보기',
      actionLink: '/product/1'
    },
    {
      track: 'TRACK 03',
      title: '실리콘밸리 Claude Academy 정본 AI 지능',
      summary: '실리콘밸리 Anthropic 본사의 정본 엔지니어링 문서(SSOT)를 기반으로 고성능 AI 파이프라인을 장착합니다.',
      outcome: 'Anthropic 공식 XML 구조화 프롬프트 템플릿 & 지능 엔진',
      tools: 'Claude 공식 XML 프롬프트 · 3.5 Sonnet 최적화 템플릿',
      tag: 'INTELLIGENCE',
      color: '#7c3aed',
      bgLight: 'bg-purple-50/70 border-purple-200/60',
      icon: Cpu,
      actionText: 'AI 지능 실전 킷 보기',
      actionLink: '/product/aside-starter'
    },
    {
      track: 'TRACK 04',
      title: 'Aside 24h 자율 리서치 & 1인 풀스택 런칭',
      summary: 'Aside 브라우저로 시장 트렌드를 24시간 자율 감시하고, Next.js와 Supabase로 상용 결제 웹을 띄웁니다.',
      outcome: '24h 자율 시장 감시 봇 & 토스 실결제 풀스택 웹 1개 배포',
      tools: 'Aside 템플릿 · Next.js 14 · Supabase · 토스페이먼츠',
      tag: 'LAUNCH',
      color: '#9333ea',
      bgLight: 'bg-purple-50/70 border-purple-200/60',
      icon: RocketLaunch,
      actionText: '풀스택 런칭 트랙 보기',
      actionLink: '/product/5'
    },
    {
      track: 'TRACK 05',
      title: '1:1 VIP 프라이빗 비즈니스 전략 마스터리',
      summary: '야생에서 4개 프로덕트로 생존한 파운더가 50분간 1:1로 내 비즈니스의 생존율과 실행 우선순위를 설계합니다.',
      outcome: '사전 질의서 기반 90일 실행 Action Blueprint & 1:1 심층 처방',
      tools: '4개 서비스 생존 파운더 1:1 세션 (50분)',
      tag: 'SUMMIT MASTERY',
      color: '#191f28',
      bgLight: 'bg-slate-50 border-slate-200/80',
      icon: Crown,
      actionText: '1:1 전략 세션 신청하기',
      actionLink: '/career'
    }
  ];

  const faqs = [
    {
      q: '어릴 때 레고 좋아했던 사람을 위한 빌더 프로그램이란 무엇인가요?',
      a: '벽돌을 굽는 공식을 몰라도 레고 블록만 있으면 누구나 거대한 성을 지을 수 있었습니다. 복잡한 코딩을 처음부터 외우지 않고, 검증된 기획·지능·퍼널·인프라 블록을 조립해 내 상용 프로덕트와 현금 흐름을 만드는 1인 빌더 성장 트랙입니다.'
    },
    {
      q: 'aizaler가 제공하는 AI 지능의 차별점은 무엇인가요?',
      a: '실리콘밸리 Anthropic Claude Academy와 Google Gemini 공식 엔지니어링 문서(SSOT)를 분석해 실무에 바로 복붙 가능한 XML 구조화 템플릿과 Aside 브라우저 24시간 자율 리서치 환경을 제공합니다.'
    },
    {
      q: '비개발자도 직접 상용 제품을 런칭할 수 있나요?',
      a: '네. Cursor, Supabase, Cloudflare, 토스페이먼츠를 조립형 아키텍처로 조합해 외주비 없이 혼자서 결제 웹서비스를 띄우고 운영하는 실전 파이프라인을 전수합니다.'
    }
  ];

  return (
    <div className="space-y-12 sm:space-y-20 pt-4 sm:pt-8 pb-16">
      {/* ── 1. 히어로 섹션 (Lego Builder Core Narrative) ── */}
      <section className="toss-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
          {/* 좌측: 간결하고 당당한 우리만의 차별화 서사 */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f3ff] text-[#3182f6] text-xs font-bold">
              <Sparkle size={13} weight="fill" />
              <span>AI-NATIVE BUILDER STUDIO</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-[#191f28] leading-[1.25] tracking-tight">
              어릴 때 레고 좋아하셨나요?<br />
              <span className="text-[#3182f6]">AI 블록을 조립해</span> 내 제품을 띄우는 1인 빌더.
            </h1>

            <p className="text-sm sm:text-base text-[#4e5968] leading-relaxed max-w-xl font-normal">
              실리콘밸리 <b>공식 정본 프롬프트</b>와 <b>24시간 자율 에이전트</b>를 결합해, 내 아이디어를 실제 작동하는 상용 웹서비스로 조립해내는 1인 빌더의 길을 함께합니다.
            </p>

            {/* CTA 세트 */}
            <div className="space-y-3 pt-1">
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href="#ai-chat"
                  className="toss-button-primary px-6 py-3.5 text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-sm active:scale-95"
                >
                  <Sparkle size={15} weight="fill" />
                  <span>3초 AI 빌더 진단 시작하기</span>
                </a>
                <a
                  href="#roadmap"
                  className="px-5 py-3.5 rounded-2xl bg-white border border-black/[0.08] text-[#191f28] text-xs sm:text-sm font-bold hover:bg-gray-50 flex items-center gap-1.5 shadow-xs"
                >
                  <span>5대 성장 트랙 보기</span>
                  <ArrowRight size={14} weight="bold" />
                </a>
              </div>

              {/* 신뢰 지표 */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-[#8b95a1] pt-1">
                <span>✓ Meta 공인 전문가</span>
                <span>✓ Claude Academy 공식 정본</span>
                <span>✓ Aside 24h 자율 리서치</span>
                <span className="text-emerald-600 font-medium">✓ 4개 상용 서비스 운영</span>
              </div>
            </div>
          </div>

          {/* 우측: 3D 레고 빌더 시뮬레이터 (AI 진단과 실시간 연동) */}
          <div className="lg:col-span-5">
            <LegoStackSimulator externalStep={diagnosedStep} />
          </div>
        </div>
      </section>

      {/* ── 2. AI 빌더 실시간 진단 상담소 (Gemini Flash-Lite 획기적 대화형 UX) ── */}
      <section id="ai-chat" className="toss-container scroll-mt-14">
        <BuilderConsultantChat onStepDiagnosed={(step) => setDiagnosedStep(step)} />
      </section>

      {/* ── 3. 손에 잡히는 결과물 중심 5대 빌더 트랙 (Solopreneur 벤치마크) ── */}
      <section id="roadmap" className="toss-container space-y-6 scroll-mt-14 max-w-3xl mx-auto">
        <div className="text-center space-y-1.5">
          <span className="text-xs font-bold text-[#3182f6] uppercase tracking-wider">
            BUILDER GROWTH TRACKS
          </span>
          <h2 className="text-xl sm:text-3xl font-black text-[#191f28] tracking-tight">
            손에 잡히는 결과물 중심 5대 빌더 트랙
          </h2>
          <p className="text-xs sm:text-sm text-[#4e5968]">
            어릴 때 레고를 조립하듯, 내 손에 쥐어지는 명확한 결과물을 차례대로 완성해 나갑니다.
          </p>
        </div>

        {/* 5개 트랙 카드 리스트 */}
        <div className="space-y-3.5">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-black/[0.08] shadow-xs space-y-3 transition-all hover:border-[#3182f6]/40 hover:shadow-sm"
              >
                {/* 상단 헤더: 아이콘, 트랙 태그, 타이틀, 액션 버튼 */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-white shadow-xs"
                      style={{ backgroundColor: s.color }}
                    >
                      <Icon size={20} weight="bold" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-black text-[#8b95a1]">
                          {s.track}
                        </span>
                        <span
                          className="text-[9px] font-bold px-2 py-0.5 rounded-full"
                          style={{ color: s.color, backgroundColor: `${s.color}15` }}
                        >
                          {s.tag}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-black text-[#191f28] leading-snug">
                        {s.title}
                      </h3>
                    </div>
                  </div>

                  <Link
                    href={s.actionLink}
                    className="px-4 py-2 rounded-xl bg-[#f2f4f6] hover:bg-[#3182f6] hover:text-white text-[#191f28] text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-xs shrink-0 self-start sm:self-auto"
                  >
                    <span>{s.actionText}</span>
                    <ArrowRight size={13} weight="bold" />
                  </Link>
                </div>

                {/* 결과물 강조 박스 (Builder Josh ASC 벤치마크) */}
                <div className="p-3 rounded-xl bg-slate-50 border border-black/[0.04] space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#191f28]">
                    <span className="text-amber-500">🎯</span>
                    <span>완성 결과물:</span>
                    <span className="text-[#3182f6] font-black">{s.outcome}</span>
                  </div>
                  <p className="text-xs text-[#4e5968] leading-relaxed">
                    {s.summary}
                  </p>
                </div>

                {/* 하단 장착 도구 */}
                <div className="text-[11px] text-[#8b95a1] flex items-center gap-1">
                  <span>🛠️ 장착 무기:</span>
                  <span className="font-medium text-[#4e5968]">{s.tools}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 3. 상황 맞춤 추천 스타터 가이드 (무엇부터 할지 모를 때 맞춤 추천) ── */}
      <section id="lead-magnet" className="toss-container scroll-mt-14">
        <div className="p-6 sm:p-8 rounded-3xl bg-[#191f28] text-white max-w-3xl mx-auto shadow-xl space-y-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-white text-[11px] font-bold">
              <Sparkle size={13} weight="fill" className="text-amber-400" />
              <span>내 상황 맞춤 추천 · 100% 무료 가이드북</span>
            </div>

            <h2 className="text-lg sm:text-2xl font-black text-white leading-tight">
              무엇부터 어떻게 해야 할지 모를 때,<br className="hidden sm:inline" /> 지금 내 단계에 꼭 맞는 첫걸음을 짚어드립니다
            </h2>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl">
              자료는 넘쳐나지만 정작 지금 내 상황에 필요한 실행 순서를 찾기는 어렵습니다. 현재 가장 고민되는 단계를 선택하시면 꼭 맞는 핵심 가이드(PDF)를 즉시 전송해 드립니다.
            </p>
          </div>

          {/* 1-Click 상황 선택 칩 세트 */}
          <div className="space-y-1.5 pt-1">
            <div className="text-[11px] font-bold text-gray-400">
              현재 내 상황을 선택해 주세요:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {stageOptions.map((opt) => {
                const isSelected = userStage === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setUserStage(opt.id)}
                    className={`py-2.5 px-3 rounded-xl text-left text-xs font-bold transition-all border ${
                      isSelected
                        ? 'bg-[#3182f6] text-white border-[#3182f6] shadow-xs'
                        : 'bg-white/5 hover:bg-white/10 text-gray-300 border-white/10'
                    }`}
                  >
                    <span>{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 선택된 단계의 맞춤 가이드 설명 박스 */}
          <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
            <div className="text-[11px] font-bold text-blue-400">
              [추천] {currentRec.badge}
            </div>
            <div className="text-xs sm:text-sm font-black text-white">
              {currentRec.title}
            </div>
            <p className="text-[11px] text-gray-300 leading-relaxed">
              {currentRec.desc}
            </p>
          </div>

          {/* 이메일 입력 및 전송 폼 */}
          {isDownloaded ? (
            <div className="p-3.5 rounded-xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-bold flex items-center gap-2">
              <CheckCircle size={18} weight="fill" />
              <span>선택하신 맞춤 가이드북이 이메일로 전송되었습니다! (스팸함도 확인해 주세요)</span>
            </div>
          ) : (
            <form onSubmit={handleDownload} className="flex flex-col sm:flex-row gap-2 pt-1 max-w-md">
              <input
                type="email"
                required
                placeholder="가이드북을 받을 이메일 주소"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 text-xs sm:text-sm outline-none focus:border-[#3182f6] flex-1"
              />
              <button
                type="submit"
                className="toss-button-primary px-5 py-2.5 text-xs sm:text-sm font-bold shrink-0 flex items-center justify-center gap-1.5 shadow-sm"
              >
                <DownloadSimple size={14} weight="bold" />
                <span>{currentRec.buttonText}</span>
              </button>
            </form>
          )}

          <p className="text-[10px] text-gray-400">
            * 스팸 메일은 보내지 않으며 언제든 1클릭으로 구독 취소 가능합니다.
          </p>
        </div>
      </section>

      {/* ── 4. VIP 1:1 프라이빗 세션 (신뢰와 품격) ── */}
      <section id="vip-session" className="toss-container">
        <div className="p-6 sm:p-8 rounded-3xl bg-[#050A18] text-[#FAF6F0] max-w-3xl mx-auto border border-white/10 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div className="space-y-1.5 max-w-lg">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400">
              <Crown size={14} weight="fill" />
              <span>VIP 1:1 PRIVATE SESSION</span>
            </div>
            <h3 className="text-base sm:text-xl font-black text-white">
              혼자 조립하기 막막할 땐, 50분 1:1 맞춤 전략 세션
            </h3>
            <p className="text-xs sm:text-sm text-[#FAF6F0]/70 leading-relaxed">
              공기업과 해외 주재원을 나와 야생에서 4개 프로덕트로 생존한 파운더가, 사전 질의서를 바탕으로 내 비즈니스의 90일 실행 Action Blueprint를 처방합니다.
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

      {/* ── 5. 자주 묻는 질문 FAQ ── */}
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
                    <p className="pt-2 border-t border-black/[0.05] text-xs text-[#4e5968] leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="pt-2 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-1 text-xs font-bold text-[#3182f6] hover:underline"
          >
            aizaler 스튜디오 철학 & 파운더 소개 보기 <ArrowRight size={13} weight="bold" />
          </Link>
        </div>
      </section>
    </div>
  );
}
