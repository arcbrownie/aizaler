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
import FounderNarrativeTimeline from '@/components/FounderNarrativeTimeline';
import AlgorithmHangoverSimulator from '@/components/AlgorithmHangoverSimulator';
import MetaAdsAngleMatrix from '@/components/MetaAdsAngleMatrix';
import First9VectorDiagnoser from '@/components/First9VectorDiagnoser';
import PromptDiffViewer from '@/components/PromptDiffViewer';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [emailInput, setEmailInput] = useState('');
  const [isDownloaded, setIsDownloaded] = useState(false);

  const categories = ['전체', '실전 그로스 바이블', '무료 리포트 & SQL', '1:1 프라이빗 전략'];

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
      q: '공기업과 해외 주재원을 퇴사하고 1인 개발을 시작하신 이유가 무엇인가요?',
      a: '정년과 급여가 보장되는 안락한 테두리였지만, 거대한 조직의 톱니바퀴로 남는 대신 오직 내 이름과 내 손으로 만든 제품으로 시장에서 가치를 증명하고 싶었습니다. 퇴사 후 야생에서 겪은 수많은 실패와 시행착오 끝에, 데이터와 엔지니어링으로 생존하는 1인 비즈니스 파이프라인을 완성했습니다.'
    },
    {
      q: '20만 뷰가 터졌는데 왜 유료 결제는 4건뿐이었나요?',
      a: '대중적인 직장인 사이다 썰로 메타 DLRM 추천 엔진의 후보 풀이 비타겟 유저로 오염되었기 때문입니다. 다음 날 올린 진짜 프로덕트 칼럼을 그 20만 명이 0.5초 만에 스킵하면서 계정 품질 점수(Quality Score)가 강등되었고, 5일간 유입이 -92% 폭락했습니다. 이 "알고리즘 숙취"를 겪은 뒤, 1,000~3,000뷰의 고순도 타깃 글이 훨씬 더 높은 결제 전환율(CVR 4.49%)을 만든다는 사실을 증명했습니다.'
    },
    {
      q: '메타 광고에서 "소오름 매칭"이란 구체적으로 무엇인가요?',
      a: '광고 소재(Creative)에서 건드린 구체적인 장면(예: 지우지 못한 사진)이 랜딩페이지 첫 문장("지우지 못한 흔적이 미련인지부터 갈라야 합니다")에서 1:1로 정확히 회수되는 설계를 뜻합니다. 14일간의 실측 결과, 소재와 랜딩이 불일치하면 전환율이 0%로 추락하지만, 1:1로 회수되면 결제 전환율이 8.6%까지 폭등했습니다.'
    },
    {
      q: '비개발자나 1인 창업가도 월 $42 인프라를 구축할 수 있나요?',
      a: '네, 외주 개발사에 수천만 원을 주지 않아도 V0, Cursor, Supabase, Cloudflare Pages를 조합하면 누구나 1인 풀스택 시스템을 구축할 수 있습니다. aizaler의 가이드와 템플릿은 1인 테크 스튜디오가 실제 운영 중인 검증된 파이프라인 그대로 제공됩니다.'
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pt-6 sm:pt-10">
      {/* ── 1. 히어로 섹션 (공기업·주재원 ➔ 1인 개발 솔로프리너 오리진) ── */}
      <section className="toss-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* 좌측: 강력한 서사 & 실측 제안 (7열) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8f3ff] text-[#3182f6] text-xs font-bold">
              <RocketLaunch size={14} weight="duotone" />
              <span>FOUNDER STORY & GROWTH ENGINEERING</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-black text-[#191f28] leading-[1.2] tracking-tight">
              남들이 선망하던 공기업과 해외 주재원을 박차고 나와,<br />
              <span className="text-[#3182f6] underline decoration-[#3182f6]/30">1인 개발 솔로프리너</span>로<br />
              생존하기까지의 날것의 실측 기록.
            </h1>

            <p className="text-base sm:text-lg text-[#4e5968] leading-relaxed max-w-xl font-normal">
              퇴사 후 마주한 20만 뷰 4건 결제의 참사, 48회 셧다운의 절망을 넘어 — 실제 <b>423만 뷰 DB 결제 로그</b>와 메타 API를 뜯어내어 규명한 소셜 알고리즘 역공학, <b>결제 CVR 8.6% 소오름 매칭</b>, 그리고 <b>월 $42 1인 인프라 아키텍처</b>를 공개합니다.
            </p>

            {/* CTA 버튼 세트 */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#founder-story"
                className="toss-button-primary px-7 py-4 text-sm sm:text-base font-bold text-center flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
              >
                <Target size={20} weight="bold" />
                <span>창업자 생존 서사 타임라인 읽기</span>
              </a>
              <a
                href="#hangover-simulator"
                className="px-6 py-4 rounded-2xl bg-white border border-black/[0.08] text-[#191f28] text-sm sm:text-base font-bold text-center hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <span>20만 뷰 알고리즘 실측 보기</span>
                <ArrowRight size={16} weight="bold" />
              </a>
            </div>

            {/* 신뢰 지표 3열 칩 (Double-Bezel) */}
            <div className="pt-4 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg border-t border-black/[0.05]">
              <div className="space-y-0.5">
                <div className="text-lg sm:text-2xl font-black text-[#3182f6] font-mono tabular-nums">
                  4,230,000+
                </div>
                <div className="text-[11px] text-[#8b95a1] font-medium">소셜 뷰 전수 DB 로그</div>
              </div>
              <div className="space-y-0.5">
                <div className="text-lg sm:text-2xl font-black text-[#191f28] font-mono tabular-nums">
                  8.6%
                </div>
                <div className="text-[11px] text-[#8b95a1] font-medium">메타 광고 최고 결제율</div>
              </div>
              <div className="space-y-0.5">
                <div className="text-lg sm:text-2xl font-black text-emerald-600 font-mono tabular-nums">
                  월 $42
                </div>
                <div className="text-[11px] text-[#8b95a1] font-medium">4개 프로덕트 인프라</div>
              </div>
            </div>
          </div>

          {/* 우측: 흔한 강사 vs 현재 진행형 1인 창업가 비교 카드 (5열) */}
          <div className="lg:col-span-5">
            <div className="bezel-card-outer">
              <div className="bezel-card-inner space-y-4">
                <div className="flex items-center justify-between border-b border-black/[0.04] pb-3">
                  <span className="text-xs font-bold text-[#8b95a1] uppercase tracking-wider">
                    빌더의 차원이 다른 2가지 세상
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#3182f6]">
                    BUILDING IN PUBLIC
                  </span>
                </div>

                {/* 1단계: 뜬구름 잡는 강사 */}
                <div className="p-4 rounded-2xl bg-[#f9fafb] border border-black/[0.04] space-y-1.5">
                  <div className="text-xs font-bold text-[#8b95a1] flex items-center justify-between">
                    <span>인터넷 마케팅 강사</span>
                    <span className="text-red-500 font-bold">뜬구름 잡는 이론</span>
                  </div>
                  <div className="text-xs text-[#4e5968] leading-relaxed">
                    해외 아티클 짜깁기, "퇴사 후 AI로 월 천만 원" 허상 강의 ➔ <b>실제 내 돈 태워본 적 없는 훈계</b>
                  </div>
                </div>

                {/* 2단계: aizaler 현재 진행형 빌더 */}
                <div className="p-4 rounded-2xl bg-[#e8f3ff]/70 border border-[#3182f6]/30 space-y-2 shadow-xs">
                  <div className="text-xs font-bold text-[#3182f6] flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Sparkle size={15} weight="duotone" /> aizaler (현재 진행형 1인 창업가)
                    </span>
                    <span className="bg-[#3182f6] text-white px-2 py-0.5 rounded-full text-[10px]">
                      현역 빌더
                    </span>
                  </div>
                  <div className="text-xs text-[#191f28] space-y-1">
                    <div className="font-bold">✓ 공기업·주재원 퇴사 후 실제 겪은 실패·생존 복기록</div>
                    <div className="text-emerald-700 font-semibold">✓ PostgreSQL 결제 테이블 & 메타 Graph API 실측</div>
                    <div className="text-[#3182f6] font-semibold">✓ 오늘도 코드를 치고 광고비를 방어하는 오픈 랩</div>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <a
                    href="#founder-story"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#3182f6] hover:underline"
                  >
                    창업자의 4단계 서사 타임라인 바로보기 <ArrowRight size={14} weight="bold" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. 창업자 오리진 서사: 공기업·주재원에서 1인 개발 솔로프리너까지 ── */}
      <div id="founder-story">
        <FounderNarrativeTimeline />
      </div>

      {/* ── 3. 20만 뷰 바이럴 숙취 & 메타 DLRM 알고리즘 시뮬레이터 ── */}
      <AlgorithmHangoverSimulator />

      {/* ── 4. 메타 광고 14일 실측 & 소오름 매칭 뷰어 ── */}
      <MetaAdsAngleMatrix />

      {/* ── 5. First 9 텍스트 임베딩 순도 & 3초 프로필 진단기 ── */}
      <First9VectorDiagnoser />

      {/* ── 6. 프롬프트 Before vs After 라이브 비교기 ── */}
      <section id="diff-viewer" className="toss-container space-y-4">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <div className="text-xs font-bold text-[#3182f6] uppercase tracking-wider">
            PROMPT REVOLUTION
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#191f28] tracking-tight">
            질문 하나 바꿨을 뿐인데, 결과는 100만 원짜리
          </h2>
          <p className="text-[#4e5968] text-sm leading-relaxed">
            1인 테크 스튜디오 실무에서 실제 사용하는 Before vs After 프롬프트를 직접 비교해 보세요.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <PromptDiffViewer />
        </div>
      </section>

      {/* ── 4.5. 신규 런칭: aizaler 커리어 의사결정 연구소 배너 ── */}
      <section className="toss-container">
        <div className="relative overflow-hidden rounded-3xl bg-[#050A18] text-[#FAF6F0] p-8 sm:p-12 border border-white/10 shadow-2xl">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#60A5FA]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#60A5FA]/10 border border-[#60A5FA]/25 text-[#60A5FA] text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-[#60A5FA] animate-pulse" />
                <span>PILOT OPEN · 공기업·주재원 퇴사 파운더 직강</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#FAF6F0] leading-tight tracking-tight">
                이직할 것인가, 버틸 것인가,<br />
                아니면 내 일을 시작할 것인가.
              </h2>
              <p className="text-sm sm:text-base text-[#FAF6F0]/70 leading-relaxed font-normal">
                공기업·해외주재원의 황금 족쇄를 끊고 야생에 뛰어든 창업자의 실전 기회비용 계산 세션.<br className="hidden sm:inline" />
                감정적 위로를 걷어내고, 철저한 손익 계산과 90일 생존 Action Blueprint를 도출합니다.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-[#FAF6F0]/60 pt-1 font-mono">
                <span className="flex items-center gap-1.5 font-medium">✓ 50분 1:1 심층 화상 세션</span>
                <span className="flex items-center gap-1.5 font-medium">✓ 90일 실행 Action Summary 제공</span>
                <span className="flex items-center gap-1.5 font-medium text-[#60A5FA]">✓ 파일럿 혜택가 49,000원</span>
              </div>
            </div>

            <div className="shrink-0 flex flex-col items-start lg:items-end gap-3 w-full sm:w-auto">
              <Link
                href="/career"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-[#FAF6F0] text-[#050A18] hover:bg-white text-sm sm:text-base font-bold shadow-lg transition-all hover:scale-[1.02]"
              >
                <span>커리어 전략 세션 알아보기</span>
                <ArrowRight size={18} weight="bold" />
              </Link>
              <span className="text-[11px] text-[#FAF6F0]/40">
                * 파일럿 10세션 마감 후 79,000원으로 자동 전환됩니다
              </span>
            </div>
          </div>
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
              실전 그로스 & 엔지니어링 솔루션
            </h2>
            <p className="text-[#4e5968] text-sm">
              423만 뷰 DB 로그와 메타 광고 실측 데이터에서 검증된 실전 바이블과 시스템 가이드입니다.
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
              '메타 Two-Tower 오염 진단 SQL 쿼리북'을 무료로 받으세요
            </h2>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              지금 이메일을 입력하시면, 423만 뷰 로그를 분석한 'DLRM 알고리즘 숙취 진단 쿼리 10선'과 'First 9 벡터 정화 프로토콜 PDF'를 즉시 보내드립니다.
            </p>

            {isDownloaded ? (
              <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-sm font-bold flex items-center gap-2">
                <CheckCircle size={20} weight="fill" />
                입력하신 이메일로 SQL 쿼리북과 프로토콜 발송이 완료되었습니다! (스팸함도 확인해 주세요)
              </div>
            ) : (
              <form onSubmit={handleDownload} className="flex flex-col sm:flex-row gap-2 max-w-md">
                <input
                  type="email"
                  required
                  placeholder="쿼리북을 받을 이메일 주소"
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
