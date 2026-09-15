'use client';

import React, { useState } from 'react';
import { 
  TrendDown, 
  TrendUp, 
  WarningCircle, 
  CheckCircle, 
  Database, 
  Flame,
  ArrowRight,
  Sparkle
} from '@phosphor-icons/react';

export default function AlgorithmHangoverSimulator() {
  const [selectedCase, setSelectedCase] = useState<'hangover' | 'sweetspot'>('hangover');

  const c = selectedCase === 'hangover' ? {
    badge: '대중 밈 바이럴 (알고리즘 숙취)',
    badgeColor: '#f04452',
    postTitle: '〈같이 일해보면 석 달 안에 밑천 드러나는 사람 3가지〉',
    views: '207,709',
    likes: '105 (0.05%)',
    paidOrders: '4건',
    cvr: '0.0019%',
    cvrNote: '51,927뷰당 1건 결제',
    decayData: [
      { day: '9/4 (바이럴 당일)', visitors: 397, barPct: 100, label: '397명 (허수 유입)' },
      { day: '9/5 (1일차 숙취)', visitors: 254, barPct: 64, label: '254명' },
      { day: '9/6 (2일차 숙취)', visitors: 234, barPct: 59, label: '234명' },
      { day: '9/7 (3일차 숙취)', visitors: 171, barPct: 43, label: '171명' },
      { day: '9/8 (4일차 숙취)', visitors: 148, barPct: 37, label: '148명' },
      { day: '9/9 (5일차 숙취)', visitors: 104, barPct: 26, label: '104명' },
      { day: '9/10 (절대 바닥)', visitors: 32, barPct: 8, label: '32명 (-92% 폭락)' }
    ],
    funnelMetrics: [
      { step: '1. 콘텐츠 노출 (Impressions)', value: '207,709회', sub: '대중 밈 바이럴 확산' },
      { step: '2. 링크 클릭 (Link Clicks)', value: '1,842회', sub: '클릭률(CTR) 0.88%' },
      { step: '3. 상세 랜딩 유입 (Landing Views)', value: '1,210회', sub: '유입 이탈률 34.3%' },
      { step: '4. 장바구니 담기 (Add to Cart)', value: '12건', sub: '담기율 0.99% (극저조)' },
      { step: '5. 최종 유료 결제 (Purchases)', value: '단 4건', sub: '최종 결제 전환율 0.0019%' }
    ],
    proDiagnosis: [
      { label: '타겟 군집 오염', desc: '구매력 없는 단순 짤방 소비층이 대거 몰리며 추천 알고리즘의 타겟 좌표가 훼손됨' },
      { label: '머신러닝 학습 오류', desc: '메타 AI가 "단순 좋아요 누르는 구경꾼"을 핵심 타겟으로 오인하여 결제 고객과 분리됨' },
      { label: '알고리즘 역주행 급락', desc: '다음 날 올린 핵심 서비스 글이 0.5초 만에 스킵당하며 5일간 노출 -92% 추락' }
    ],
    verdict: '재미 위주의 밈으로 조회수는 폭발했지만, 내 상품을 살 사람이 아닌 단순 구경꾼만 대거 유입되었습니다. 알고리즘이 계정의 타겟을 엉뚱한 군집으로 오판하여 다음 날 올린 핵심 글이 외면당했고, 5일간 노출이 -92% 급락하는 알고리즘 역주행(숙취 현상)이 발생했습니다.'
  } : {
    badge: '고순도 버티컬 글 (황금 스위트 스팟)',
    badgeColor: '#10b981',
    postTitle: '〈외국계 회사에서 I hate 썼다가 분위기 갑분싸 된 썰 (원어민 인지 설계도)〉',
    views: '1,895',
    likes: '85 (4.48%)',
    paidOrders: '85건 (누적 241건 중)',
    cvr: '4.49%',
    cvrNote: '22뷰당 1건 고순도 결제',
    decayData: [
      { day: '발행 당일', visitors: 180, barPct: 60, label: '180명 (고관여 진성 독자)' },
      { day: '1일차 지속', visitors: 220, barPct: 75, label: '220명 (북마크/저장 유입)' },
      { day: '2일차 누적', visitors: 260, barPct: 88, label: '260명 (공유 확산)' },
      { day: '3일차 유지', visitors: 290, barPct: 100, label: '290명 (정상 우상향)' },
      { day: '4일차 안정', visitors: 275, barPct: 94, label: '275명' },
      { day: '5일차 안정', visitors: 280, barPct: 96, label: '280명' },
      { day: '6일차 안정', visitors: 285, barPct: 98, label: '285명 (안정적 베이스라인)' }
    ],
    funnelMetrics: [
      { step: '1. 콘텐츠 노출 (Impressions)', value: '1,895회', sub: '초정밀 타겟 오디언스' },
      { step: '2. 링크 클릭 (Link Clicks)', value: '248회', sub: '클릭률(CTR) 13.08% (14.8배)' },
      { step: '3. 상세 랜딩 유입 (Landing Views)', value: '232회', sub: '유입 이탈률 6.4% (극최소)' },
      { step: '4. 장바구니 담기 (Add to Cart)', value: '142건', sub: '담기율 61.2% (폭발적)' },
      { step: '5. 최종 유료 결제 (Purchases)', value: '85건', sub: '최종 결제 전환율 4.49%' }
    ],
    proDiagnosis: [
      { label: '고관여 코어 타겟 매칭', desc: '실무 고민을 가진 3040 직장인/전문직 군집에만 메타 알고리즘이 집중 배포' },
      { label: '소오름 매칭 100% 회수', desc: '글에서 건드린 결핍 ↔ 랜딩페이지 솔루션이 완벽히 일치하여 망설임 없이 결제' },
      { label: '계정 품질 점수 최상위', desc: '높은 체류 시간과 저장률(4.48%) 덕분에 지속적인 유기적 노출 선순환 달성' }
    ],
    verdict: '내 상품이 꼭 필요한 타겟 독자의 결핍을 정확히 자극한 고순도 글입니다. 알고리즘이 [구매 의도가 높은 전문직] 군집에 계정을 정확히 매칭하여, 1,895뷰만으로도 85건의 유료 결제가 안정적으로 발생했습니다.'
  };

  return (
    <section id="algorithm" className="toss-container space-y-8 scroll-mt-24">
      {/* 상단 헤더 */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f3ff] text-[#3182f6] text-xs font-bold">
          <Database size={14} weight="duotone" />
          <span>DATABASE REVERSE ENGINEERING</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-[#191f28] tracking-tight leading-tight">
          조회수 20만 터져도 결제 0건인 이유와<br />
          알고리즘 역주행 실측 시뮬레이터
        </h2>
        <p className="text-[#4e5968] text-sm sm:text-base leading-relaxed">
          "조회수는 착시이고, 진짜 내 고객의 결제만이 진실입니다."<br />
          실제 스레드 2개 계정(명사도 본계정 + 연애 계정) 합산 500만 뷰 695편의 결제 로그를 분석해, 대중 밈 바이럴이 왜 계정을 망가뜨리고 소수 고순도 유입이 폭발적 매출을 만드는지 비교해 보세요.
        </p>
      </div>

      {/* 2대 케이스 토글 버튼 */}
      <div className="flex justify-center">
        <div className="inline-flex p-1 rounded-2xl bg-white border border-black/[0.06] shadow-xs">
          <button
            onClick={() => setSelectedCase('hangover')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all tactile-btn flex items-center gap-2 ${
              selectedCase === 'hangover'
                ? 'bg-[#f04452] text-white shadow-xs'
                : 'text-[#4e5968] hover:text-[#191f28]'
            }`}
          >
            <Flame size={16} weight="fill" />
            <span>20.7만 뷰 직장 썰 (재미 위주 대중 밈 참사)</span>
          </button>
          <button
            onClick={() => setSelectedCase('sweetspot')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all tactile-btn flex items-center gap-2 ${
              selectedCase === 'sweetspot'
                ? 'bg-[#10b981] text-white shadow-xs'
                : 'text-[#4e5968] hover:text-[#191f28]'
            }`}
          >
            <Sparkle size={16} weight="duotone" />
            <span>1,895뷰 고순도 글 (진짜 고객 도달 스위트스팟)</span>
          </button>
        </div>
      </div>

      {/* 메인 비대칭 벤토 그리드 박스 */}
      <div className="bezel-card-outer">
        <div className="bezel-card-inner space-y-8 p-6 sm:p-10 bg-white">
          {/* 상단 4대 핵심 지표 매트릭스 */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/[0.05] pb-4">
              <div>
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full text-white" style={{ backgroundColor: c.badgeColor }}>
                  {c.badge}
                </span>
                <h3 className="text-lg sm:text-2xl font-black text-[#191f28] mt-2">
                  {c.postTitle}
                </h3>
              </div>
              <div className="text-xs text-[#8b95a1] font-mono">
                Meta Ads Manager & Commerce Attribution Data
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              <div className="p-4 rounded-2xl bg-[#f9fafb] border border-black/[0.04] space-y-1">
                <span className="text-xs text-[#8b95a1] font-medium">총 조회수</span>
                <div className="text-xl sm:text-2xl font-black text-[#191f28] font-mono tabular-nums">
                  {c.views}
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-[#f9fafb] border border-black/[0.04] space-y-1">
                <span className="text-xs text-[#8b95a1] font-medium">좋아요 및 반응</span>
                <div className="text-xl sm:text-2xl font-black text-[#191f28] font-mono tabular-nums">
                  {c.likes}
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-[#f9fafb] border border-black/[0.04] space-y-1">
                <span className="text-xs text-[#8b95a1] font-medium">실제 유료 결제</span>
                <div className="text-xl sm:text-2xl font-black font-mono tabular-nums" style={{ color: c.badgeColor }}>
                  {c.paidOrders}
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-[#f9fafb] border border-black/[0.04] space-y-1">
                <span className="text-xs text-[#8b95a1] font-medium">실질 결제 전환율 (CVR)</span>
                <div className="text-xl sm:text-2xl font-black font-mono tabular-nums" style={{ color: c.badgeColor }}>
                  {c.cvr}
                </div>
                <span className="text-[10px] text-[#8b95a1] block">{c.cvrNote}</span>
              </div>
            </div>
          </div>

          {/* 중간: 시계열 유입 추락/유지 차트 vs 메타 광고 관리자 실측 퍼널 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            {/* 좌측: 시계열 데이터 차트 (6열) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#191f28] uppercase tracking-wider flex items-center gap-1.5">
                  <TrendDown size={16} className="text-[#f04452]" />
                  일별 사이트 유입자 수 변화 (Traffic Decay Chart)
                </span>
                <span className="text-[11px] text-[#8b95a1] font-mono">Real Analytics</span>
              </div>

              <div className="space-y-2.5 p-4 rounded-2xl bg-[#f9fafb] border border-black/[0.04]">
                {c.decayData.map((d, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-[#4e5968] font-medium">{d.day}</span>
                      <span className="font-bold text-[#191f28]">{d.label}</span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-gray-200 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${d.barPct}%`,
                          backgroundColor: selectedCase === 'hangover' 
                            ? (idx === 0 ? '#f04452' : '#f87171')
                            : '#10b981'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-[#fff1f2] border border-[#fecdd3] text-xs text-[#9f1239] leading-relaxed">
                <div className="font-bold mb-1 flex items-center gap-1">
                  <WarningCircle size={15} weight="bold" />
                  알고리즘 숙취(The Hangover) 메커니즘
                </div>
                {c.verdict}
              </div>
            </div>

            {/* 우측: 메타 광고 관리자 & 커머스 실측 퍼널 데이터 (6열) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#191f28] uppercase tracking-wider flex items-center gap-1.5">
                  <TrendUp size={16} weight="bold" className="text-[#3182f6]" />
                  메타 광고 관리자 & 퍼널 실측 데이터
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-50 text-[#3182f6] font-bold">
                  META REAL FUNNEL
                </span>
              </div>

              {/* 5단계 퍼널 전환 카드 */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#050A18] text-[#FAF6F0] border border-white/10 shadow-lg space-y-3 font-mono">
                <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px] text-slate-400">
                  <span>단계별 퍼널 (Funnel Stage)</span>
                  <span>도달수 / 전환율</span>
                </div>
                <div className="space-y-2.5">
                  {c.funnelMetrics.map((f, i) => (
                    <div key={i} className="flex items-center justify-between text-xs p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="space-y-0.5">
                        <span className="text-slate-300 font-sans font-medium">{f.step}</span>
                        <div className="text-[10px] text-slate-400 font-sans">{f.sub}</div>
                      </div>
                      <span className="text-sm font-bold text-white font-mono">{f.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Meta Certified 전문가 정밀 진단 */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-black/[0.06] shadow-xs space-y-3">
                <div className="text-xs font-bold text-[#191f28] flex items-center gap-1.5">
                  <CheckCircle size={15} weight="fill" className="text-[#3182f6]" />
                  <span>Meta Certified 전문가 원인 진단</span>
                </div>
                <div className="space-y-2">
                  {c.proDiagnosis.map((item, i) => (
                    <div key={i} className="text-xs space-y-0.5">
                      <div className="font-bold text-[#191f28] flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3182f6]" />
                        <span>{item.label}</span>
                      </div>
                      <p className="text-[#4e5968] pl-2.5 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#f2f4f6] text-xs text-[#4e5968] leading-relaxed">
                <span className="font-bold text-[#191f28]">1인 창업가를 위한 실전 불문율: </span>
                조회수 1만 이상의 단순 대중 밈 글은 구경꾼 비중이 90%를 넘어가 전환율이 추락합니다. 진짜 돈을 벌어다 주는 구간은 내 상품의 타겟 결핍을 정밀 타격한 1,000~3,000뷰 고순도 글(CVR 4.49%)입니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
