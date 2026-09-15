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
  UserCheck
} from '@phosphor-icons/react';

import { PRODUCTS } from '@/data/products';
import { LESSONS } from '@/data/lessons';
import AlgorithmHangoverSimulator from '@/components/AlgorithmHangoverSimulator';
import MetaAdsAngleMatrix from '@/components/MetaAdsAngleMatrix';
import First9VectorDiagnoser from '@/components/First9VectorDiagnoser';
import PromptDiffViewer from '@/components/PromptDiffViewer';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [emailInput, setEmailInput] = useState('');
  const [isDownloaded, setIsDownloaded] = useState(false);

  const categories = ['전체', '실전 그로스 바이블', '무료 리포트 & 가이드', '1:1 프라이빗 전략'];

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
      q: '시중의 마케팅 강의나 AI 강의와는 구체적으로 무엇이 다른가요?',
      a: '다른 강의는 "조회수를 터뜨려라", "프롬프트를 복사해라" 같은 표면적인 팁만 이야기합니다. 하지만 aizaler는 대중 밈으로 조회수 20만이 터졌을 때 왜 계정 품질 점수가 강등되어 유입이 -92% 폭락하는지(알고리즘 숙취), 왜 광고 소재와 랜딩페이지 첫 문장이 1:1로 일치해야만 결제율 8.6%가 나오는지 등 "다른 곳에서는 절대 알려주지 않는 423만 뷰 실측 데이터와 실전 금기"를 낱낱이 공개합니다.'
    },
    {
      q: '공기업과 해외 주재원을 퇴사하고 1인 개발을 시작하신 이유가 무엇인가요?',
      a: '정년과 급여가 보장되는 안락한 테두리였지만, 거대한 조직의 톱니바퀴로 남는 대신 오직 내 이름과 내 손으로 만든 제품으로 시장에서 가치를 증명하고 싶었습니다. 퇴사 후 야생에서 겪은 수많은 실패와 시행착오 끝에, 데이터와 엔지니어링으로 생존하는 1인 비즈니스 파이프라인을 완성했습니다.'
    },
    {
      q: '20만 뷰가 터졌는데 왜 유료 결제는 4건뿐이었나요?',
      a: '대중적인 직장인 사이다 썰로 인스타그램 추천 머신러닝의 타겟 풀이 비구매 구경꾼 군집으로 왜곡되었기 때문입니다. 다음 날 올린 진짜 프로덕트 칼럼을 그 20만 명이 0.5초 만에 스킵하면서 계정 품질 점수(Quality Score)가 강등되었고, 5일간 유입이 -92% 폭락했습니다. 이 "알고리즘 숙취"를 겪은 뒤, 1,000~3,000뷰의 고순도 타깃 글이 훨씬 더 높은 결제 전환율(CVR 4.49%)을 만든다는 사실을 증명했습니다.'
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8f3ff] text-[#3182f6] text-xs font-bold">
              <RocketLaunch size={14} weight="duotone" />
              <span>다른 곳에서는 절대 알려주지 않는 실측 데이터 · META CERTIFIED MEDIA PLANNING PRO</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[48px] font-black text-[#191f28] leading-[1.2] tracking-tight">
              시중 강의에서는 절대 알려주지 않는,<br />
              <span className="text-[#3182f6] underline decoration-[#3182f6]/30">진짜 돈이 되는</span> 메타 알고리즘과 1인 창업의 진실.
            </h1>

            <p className="text-base sm:text-lg text-[#4e5968] leading-relaxed max-w-xl font-normal">
              유튜브나 마케팅 강의는 "조회수만 터뜨리면 돈 번다"고 말하지만, 왜 조회수 20만이 터져도 결제는 4건뿐이고 5일간 계정 노출이 -92% 폭락하는지는 <b>절대 알려주지 않습니다.</b><br />
              이론만 파는 강사 대신, <b>직접 내 돈 태워 423만 뷰를 까보고 검증한 Meta 공인 미디어 플래닝 전문가</b>가 감춰진 알고리즘 메커니즘과 <b>결제율 8.6% 실전 솔루션</b>을 가감 없이 공개합니다.
            </p>

            {/* CTA 버튼 세트 */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#what-you-get"
                className="toss-button-primary px-7 py-4 text-sm sm:text-base font-bold text-center flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
              >
                <Package size={20} weight="bold" />
                <span>내가 받을 수 있는 솔루션 보기</span>
              </a>
              <a
                href="#untold-truth"
                className="px-6 py-4 rounded-2xl bg-white border border-black/[0.08] text-[#191f28] text-sm sm:text-base font-bold text-center hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <span>다른 데선 안 알려주는 4가지 진실 보기</span>
                <ArrowRight size={16} weight="bold" />
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
                <div className="text-lg sm:text-2xl font-black text-[#191f28] font-mono tabular-nums">
                  4,230,000+
                </div>
                <div className="text-[11px] text-[#8b95a1] font-medium">실측 분석 데이터</div>
              </div>
              <div className="space-y-0.5">
                <div className="text-lg sm:text-2xl font-black text-rose-600 font-mono tabular-nums">
                  8.6%
                </div>
                <div className="text-[11px] text-[#8b95a1] font-medium">메타 광고 실측 결제율</div>
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
                  <div className="text-xs text-[#191f28] space-y-1.5">
                    <div className="font-bold text-[#191f28]">✓ 공기업·주재원 퇴사 후 야생에서 생존한 1인 창업가</div>
                    <div className="text-[#3182f6] font-bold">✓ Meta Certified Media Planning Professional (공인 자격)</div>
                    <div className="text-emerald-700 font-semibold">✓ 423만 뷰 퍼널 데이터 전수 분석 & 광고 결제율 8.6% 달성</div>
                    <div className="text-[#4e5968] font-semibold">✓ 오늘도 직접 코딩하고 서비스를 굴리는 현역 빌더</div>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#3182f6] hover:underline"
                  >
                    공기업·주재원 퇴사 및 1인 개발 생존 서사 전문 읽기 <ArrowRight size={14} weight="bold" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. 다른 곳에서는 절대 알려주지 않는 4가지 실전 금기와 진실 ── */}
      <section id="untold-truth" className="toss-container space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffebee] text-[#f04452] text-xs font-bold">
            <Flame size={15} weight="fill" />
            THE UNTOLD TRUTH · 대행사도 강사도 숨기는 진실
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#191f28] tracking-tight">
            시중 강의 100개를 들어도<br className="sm:hidden" />
            <span className="text-[#3182f6]"> 다른 곳에서는 절대 알려주지 않는 것들</span>
          </h2>
          <p className="text-sm sm:text-base text-[#4e5968] leading-relaxed">
            "조회수만 터뜨려라", "광고비 태워라" 같은 무책임한 훈계는 이제 그만 들으세요.<br className="hidden sm:inline" />
            직접 사비로 메타 광고를 태우고 423만 뷰 결제 퍼널을 까보고서야 밝혀낸 날것 그대로의 실측 진실입니다.
          </p>
        </div>

        {/* 4대 금기 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 금기 1: 20만 뷰 바이럴의 거짓말 */}
          <div className="rounded-3xl bg-white border border-black/[0.08] p-6 sm:p-8 shadow-xs hover:border-[#f04452]/40 hover:shadow-md transition-all duration-200 space-y-5">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-full bg-rose-50 text-[#f04452] text-xs font-black">
                실전 금기 01 · 알고리즘의 진실
              </span>
              <span className="text-xs font-mono font-bold text-rose-600">CVR 0.0019%의 참사</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-[#191f28] leading-snug">
              "조회수 20만 터지면 대박 난다"는 거짓말
            </h3>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-2xl bg-[#fff1f2] border border-[#fecdd3] text-[#9f1239] space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-xs">
                  <span>❌ 시중 강의가 하는 말:</span>
                </div>
                <p className="leading-relaxed">
                  "일단 대중적인 밈이나 직장인 사이다 썰로 10만, 20만 뷰 무조건 터뜨리세요. 노출만 되면 돈은 저절로 벌립니다!"
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#e8f3ff] border border-[#bfdbfe] text-[#1e40af] space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-xs text-[#3182f6]">
                  <span>⭕ 다른 데서 절대 안 알려주는 실측 진실:</span>
                </div>
                <p className="leading-relaxed">
                  구매 의도 0%인 구경꾼 20만 명이 유입되면, 다음 날 올린 진짜 제품 글을 0.5초 만에 넘겨버립니다. 메타 추천 엔진은 계정 품질 점수(Quality Score)를 강등시키고 <b>5일간 유입이 -92% 폭락하는 잔혹한 '알고리즘 숙취'</b>를 남깁니다. 진짜 결제가 터지는 구간은 1,000~3,000뷰의 고순도 타깃 글(결제율 4.49%)입니다.
                </p>
              </div>
            </div>
          </div>

          {/* 금기 2: 메타 광고 클릭률(CTR)의 함정 */}
          <div className="rounded-3xl bg-white border border-black/[0.08] p-6 sm:p-8 shadow-xs hover:border-[#3182f6]/40 hover:shadow-md transition-all duration-200 space-y-5">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-full bg-blue-50 text-[#3182f6] text-xs font-black">
                실전 금기 02 · 메타 광고의 진실
              </span>
              <span className="text-xs font-mono font-bold text-[#3182f6]">실측 결제율 8.6%</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-[#191f28] leading-snug">
              대행사도 쉬쉬하는 '클릭률(CTR)의 배신'
            </h3>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-2xl bg-[#fff1f2] border border-[#fecdd3] text-[#9f1239] space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-xs">
                  <span>❌ 마케팅 대행사가 하는 말:</span>
                </div>
                <p className="leading-relaxed">
                  "광고 클릭률(CTR)이 4% 넘었으니 소재 대박 났습니다! 예산 증액해서 더 밀어붙이시죠!"
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#e8f3ff] border border-[#bfdbfe] text-[#1e40af] space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-xs text-[#3182f6]">
                  <span>⭕ 다른 데서 절대 안 알려주는 실측 진실:</span>
                </div>
                <p className="leading-relaxed">
                  광고 소재(Creative)의 첫 장면이 랜딩페이지 첫 문장에서 1:1로 정확히 회수되지 않으면, 유저는 호기심만 채우고 1초 만에 이탈합니다. 광고와 랜딩페이지가 토씨 하나 틀리지 않고 맞아떨어지는 <b>'소오름 매칭'을 완성해야만 결제 전환율 8.6%</b>가 나옵니다.
                </p>
              </div>
            </div>
          </div>

          {/* 금기 3: 외주 개발비 2,000만 원의 허상 */}
          <div className="rounded-3xl bg-white border border-black/[0.08] p-6 sm:p-8 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all duration-200 space-y-5">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-black">
                실전 금기 03 · 1인 테크의 진실
              </span>
              <span className="text-xs font-mono font-bold text-emerald-600">외주비 0원 / 월 $42</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-[#191f28] leading-snug">
              "앱 만들려면 개발자 외주 맡겨라"는 착각
            </h3>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-2xl bg-[#fff1f2] border border-[#fecdd3] text-[#9f1239] space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-xs">
                  <span>❌ 외주 개발사 & 학원이 하는 말:</span>
                </div>
                <p className="leading-relaxed">
                  "제대로 된 결제 웹서비스 만들려면 외주비 최소 2,000만 원 들거나, 코딩 기초부터 1년 배워야 합니다."
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#e8f3ff] border border-[#bfdbfe] text-[#1e40af] space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-xs text-[#3182f6]">
                  <span>⭕ 다른 데서 절대 안 알려주는 실측 진실:</span>
                </div>
                <p className="leading-relaxed">
                  비개발자도 AI 코딩 도구(Cursor/Claude Code)와 Cloudflare Pages, 서버리스 DB를 결합하면 <b>3일 만에 상용 결제 웹서비스를 직접 런칭</b>할 수 있습니다. 수백만 원 서버비 없이 <b>월 $42(약 5만 원)로 수십만 트래픽</b>을 감당하는 1인 풀스택 아키텍처가 실존합니다.
                </p>
              </div>
            </div>
          </div>

          {/* 금기 4: 1일 1포스팅의 함정 */}
          <div className="rounded-3xl bg-white border border-black/[0.08] p-6 sm:p-8 shadow-xs hover:border-amber-500/40 hover:shadow-md transition-all duration-200 space-y-5">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-black">
                실전 금기 04 · 계정 성장의 진실
              </span>
              <span className="text-xs font-mono font-bold text-amber-600">3초 팔로우 공식</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-[#191f28] leading-snug">
              '매일 1일 1포스팅'이 오히려 계정을 죽이는 이유
            </h3>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-2xl bg-[#fff1f2] border border-[#fecdd3] text-[#9f1239] space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-xs">
                  <span>❌ SNS 인플루언서들이 하는 말:</span>
                </div>
                <p className="leading-relaxed">
                  "포기하지 말고 매일 1일 1포스팅 올리세요! 꾸준함이 답이고 언젠가 알고리즘의 간택을 받습니다!"
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#e8f3ff] border border-[#bfdbfe] text-[#1e40af] space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-xs text-[#3182f6]">
                  <span>⭕ 다른 데서 절대 안 알려주는 실측 진실:</span>
                </div>
                <p className="leading-relaxed">
                  프로필을 누른 방문자가 3초 만에 머무는 <b>상단 First 9개의 3대 기둥(전문성 증명 30% + 타깃 결핍 50% + 행동 유도 20%)</b> 공식이 없으면, 포스팅을 300개 올려도 방문자는 3초 만에 이탈합니다. 무의미한 양치기 포스팅은 계정 품질 점수만 깎아먹습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. 내가 받을 수 있는 것 (WHAT YOU GET) ── */}
      <section id="what-you-get" className="toss-container space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f3ff] text-[#3182f6] text-xs font-bold">
            <Package size={15} weight="fill" />
            WHAT YOU GET · 실전 산출물 & 혜택
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#191f28] tracking-tight">
            지금 즉시 가져가실 수 있는 3가지 실전 솔루션
          </h2>
          <p className="text-sm sm:text-base text-[#4e5968] leading-relaxed">
            뜬구름 잡는 이론 강의가 아닙니다. 내 비즈니스에 오늘 당장 꽂아서 매출과 전환율을 바꾸는 검증된 산출물입니다.
          </p>
        </div>

        {/* 3대 핵심 산출물 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1. 100% 무료 즉시 발송 가이드 */}
          <div className="rounded-3xl bg-white border border-black/[0.08] p-6 sm:p-7 shadow-xs hover:border-[#3182f6]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-black">
                  100% 무료 다운로드
                </span>
                <span className="text-[11px] text-[#8b95a1] font-mono">PDF 즉시 발송</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#191f28] leading-snug">
                알고리즘 역주행 자가진단 & 고전환 메타 광고 가이드북
              </h3>
              <p className="text-xs sm:text-sm text-[#4e5968] leading-relaxed">
                조회수는 터지는데 결제가 0건인 이유를 10분 만에 진단하고, 계정 품질 점수(Quality Score)를 되살리는 실전 체크리스트를 무료로 드립니다.
              </p>
              <ul className="space-y-2 text-xs text-[#4e5968] pt-2 border-t border-black/[0.04]">
                <li className="flex items-start gap-2">
                  <CheckCircle size={15} weight="fill" className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>알고리즘 역주행 방지 10분 정상화 매뉴얼</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={15} weight="fill" className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>프로필 3초 팔로우 First 9 피드 공식 템플릿</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={15} weight="fill" className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>메타 광고 ↔ 랜딩 1:1 일치(소오름 매칭) 성과표</span>
                </li>
              </ul>
            </div>
            <a
              href="#lead-magnet"
              className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-1.5 transition-colors shadow-xs"
            >
              <DownloadSimple size={16} weight="bold" />
              <span>무료 가이드북 즉시 받기</span>
            </a>
          </div>

          {/* 2. 검증된 실전 바이블 & 인프라 템플릿 */}
          <div className="rounded-3xl bg-white border border-[#3182f6]/30 p-6 sm:p-7 shadow-xs hover:border-[#3182f6] hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 px-3 py-1 bg-[#3182f6] text-white text-[10px] font-bold rounded-bl-xl">
              BEST SELLER
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full bg-[#e8f3ff] text-[#3182f6] text-xs font-black">
                  실전 그로스 바이블
                </span>
                <span className="text-[11px] text-[#8b95a1] font-mono">Meta 공인 전문가 검증</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#191f28] leading-snug">
                메타 알고리즘 바이블 & 월 $42 1인 풀스택 템플릿
              </h3>
              <p className="text-xs sm:text-sm text-[#4e5968] leading-relaxed">
                423만 뷰 결제 퍼널 전수 분석으로 증명된 소오름 매칭 공식(결제율 8.6%)과 외주 개발비 2,000만 원을 아끼는 서버리스 소스코드를 제공합니다.
              </p>
              <ul className="space-y-2 text-xs text-[#4e5968] pt-2 border-t border-black/[0.04]">
                <li className="flex items-start gap-2">
                  <CheckCircle size={15} weight="fill" className="text-[#3182f6] shrink-0 mt-0.5" />
                  <span>광고 소재 ↔ 랜딩페이지 1:1 일치 소오름 매칭 공식</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={15} weight="fill" className="text-[#3182f6] shrink-0 mt-0.5" />
                  <span>Next.js 14 + Cloudflare + 결제 연동 완성형 보일러플레이트</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={15} weight="fill" className="text-[#3182f6] shrink-0 mt-0.5" />
                  <span>100만 원 외주 대체 실전 프롬프트 10종 파이프라인</span>
                </li>
              </ul>
            </div>
            <a
              href="#solutions"
              className="w-full py-3.5 rounded-xl bg-[#3182f6] hover:bg-[#1b64da] text-white font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-1.5 transition-colors shadow-xs"
            >
              <Package size={16} weight="bold" />
              <span>실전 솔루션 라인업 보기</span>
            </a>
          </div>

          {/* 3. 1:1 커리어 의사결정 전략 세션 */}
          <div className="rounded-3xl bg-[#050A18] text-white border border-white/10 p-6 sm:p-7 shadow-xs hover:border-[#60A5FA]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full bg-[#60A5FA]/20 text-[#60A5FA] text-xs font-black">
                  1:1 프라이빗 세션
                </span>
                <span className="text-[11px] text-gray-400 font-mono">선착순 10명 파일럿</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                aizaler 커리어 의사결정 연구소 (50분 화상 세션)
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                공기업·해외주재원을 퇴사하고 1인 개발로 생존한 파운더와 1:1로 만나, 이직 vs 버티기 vs 1인 창업의 손익을 철저히 계산합니다.
              </p>
              <ul className="space-y-2 text-xs text-gray-300 pt-2 border-t border-white/10">
                <li className="flex items-start gap-2">
                  <CheckCircle size={15} weight="fill" className="text-[#60A5FA] shrink-0 mt-0.5" />
                  <span>50분 1:1 심층 화상 전략 컨설팅</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={15} weight="fill" className="text-[#60A5FA] shrink-0 mt-0.5" />
                  <span>90일 실행 Action Summary Blueprint 제공</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={15} weight="fill" className="text-[#60A5FA] shrink-0 mt-0.5" />
                  <span>파일럿 한정 49,000원 특별가 (마감 임박)</span>
                </li>
              </ul>
            </div>
            <Link
              href="/career"
              className="w-full py-3.5 rounded-xl bg-white text-[#050A18] hover:bg-gray-100 font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-1.5 transition-colors shadow-xs"
            >
              <span>커리어 세션 알아보기</span>
              <ArrowRight size={16} weight="bold" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3. 실전 솔루션 & 성장 가이드 라인업 ── */}
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
              Meta 공인 미디어 플래닝 전문가가 423만 뷰 실측 데이터로 검증한 실전 가이드와 1인 인프라 툴킷입니다.
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

      {/* ── 3. 20만 뷰 바이럴 숙취 & 메타 알고리즘 퍼널 시뮬레이터 ── */}
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
              '알고리즘 역주행 방지 & 고전환 메타 광고 가이드북'을 무료로 받으세요
            </h2>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              지금 이메일을 입력하시면, Meta 공인 전문가가 423만 뷰 실측 로그를 분석해 만든 '알고리즘 정상화 10분 체크리스트'와 '고전환 광고 세팅 템플릿(PDF)'을 즉시 보내드립니다.
            </p>

            {isDownloaded ? (
              <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-sm font-bold flex items-center gap-2">
                <CheckCircle size={20} weight="fill" />
                입력하신 이메일로 무료 가이드북과 체크리스트 발송이 완료되었습니다! (스팸함도 확인해 주세요)
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

      {/* ── 8. 파운더 스토리 배너 (About the Founder) ── */}
      <section id="about" className="toss-container">
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-black/[0.08] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2.5 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f3ff] text-[#3182f6] text-xs font-bold">
              <UserCheck size={14} weight="fill" />
              <span>ABOUT THE FOUNDER · 파운더의 실전 기록</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#191f28] leading-snug">
              공기업과 해외 주재원을 나와, 1인 개발로 생존하기까지
            </h3>
            <p className="text-xs sm:text-sm text-[#4e5968] leading-relaxed">
              정년과 급여가 보장되던 안락한 테두리를 떠나 야생에서 수많은 실패와 시행착오 끝에, Meta Certified Media Planning Professional 공인 자격을 취득하고 4개 프로덕트를 직접 굴리기까지의 4단계 서사를 확인해 보세요.
            </p>
          </div>
          <Link
            href="/about"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#191f28] text-white hover:bg-black font-bold text-xs sm:text-sm transition-all shadow-sm"
          >
            <span>창업자 4단계 서사 전문 읽기</span>
            <ArrowRight size={16} weight="bold" />
          </Link>
        </div>
      </section>

      {/* ── 9. 자주 묻는 질문 FAQ ── */}
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
