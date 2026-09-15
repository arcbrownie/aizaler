'use client';

import React, { useState } from 'react';
import { 
  Target, 
  CheckCircle, 
  XCircle, 
  ArrowRight, 
  Sparkle, 
  Lightning, 
  DeviceMobile, 
  CursorClick, 
  CreditCard 
} from '@phosphor-icons/react';

interface AdAngle {
  id: string;
  name: string;
  badge: string;
  badgeBg: string;
  badgeText: string;
  inflow: number;
  signups: number;
  paidOrders: number;
  cvr: string;
  cvrColor: string;
  adHook: string;
  adCopy: string;
  landingHeadline: string;
  landingSubcopy: string;
  matchScore: string;
  analysis: string;
}

const ANGLES: AdAngle[] = [
  {
    id: 'evidence',
    name: '증거물 앵글 (keep_photo)',
    badge: '★ 실측 1위 (최고 결제 CVR)',
    badgeBg: '#e8f3ff',
    badgeText: '#3182f6',
    inflow: 58,
    signups: 13,
    paidOrders: 5,
    cvr: '8.6%',
    cvrColor: '#3182f6',
    adHook: '그 사진, 아직 안 지웠습니다.',
    adCopy: '다 정리했다면서 갤러리 깊숙한 곳 그 사진만 남겨뒀습니다. 귀찮아서인지, 못 지우는 마음인지.',
    landingHeadline: '지우지 못한 흔적이 습관인지 미련인지부터 갈라야 합니다.',
    landingSubcopy: '상대의 행동을 의심하기 전에, 지우지 못한 증거물이 가리키는 실제 심리 결부터 정밀 진단합니다.',
    matchScore: '100% (소오름 1:1 회수)',
    analysis: '광고에서 건드린 구체적 증거물(안 지운 사진)이 랜딩 첫 화면에서 1:1로 회수됨. 유저는 "내 마음을 어떻게 알았지?"라는 소오름을 느끼며 이탈 없이 결제까지 직행.'
  },
  {
    id: 'curiosity',
    name: '궁금증 앵글 (timing)',
    badge: '최대 유입 볼륨 (상단 퍼널)',
    badgeBg: '#fef3c7',
    badgeText: '#b45309',
    inflow: 377,
    signups: 303,
    paidOrders: 3,
    cvr: '0.8%',
    cvrColor: '#f59e0b',
    adHook: '그 사람과 언제 다시 연락이 닿을지',
    adCopy: '노력해서 되는 시기가 있고, 기다려야 풀리는 시기가 있습니다. 그 사람의 시계는 지금 몇 시일까요?',
    landingHeadline: '다시 연결되는 시기에는 분명한 전조 증상이 있습니다.',
    landingSubcopy: '막연히 기다리지 마세요. 두 사람의 기질이 맞물려 대화가 풀리는 최적의 시점을 확인하세요.',
    matchScore: '75% (호기심 기반)',
    analysis: '유입 모수(377명)는 압도적이나 결제 급성도가 낮아 결제 전환율은 0.8%에 그침. 신규 구매용보다는 리타게팅 모수를 쌓는 상단 퍼널로 운용해야 효율 극대화.'
  },
  {
    id: 'mismatch',
    name: '라우팅 누수 (content 없음)',
    badge: '광고비 누수 참사',
    badgeBg: '#fee2e2',
    badgeText: '#dc2626',
    inflow: 58,
    signups: 0,
    paidOrders: 0,
    cvr: '0.0%',
    cvrColor: '#dc2626',
    adHook: '사주로 알아보는 연애 운명',
    adCopy: '지금 당신의 인연 흐름을 점검해 보세요.',
    landingHeadline: '안녕하세요, 종합 운세 서비스입니다.',
    landingSubcopy: '다양한 운세와 궁합 풀이를 지금 바로 시작해 보세요.',
    matchScore: '0% (소오름 전멸)',
    analysis: '광고 소재의 앵글과 무관하게 일반 메인 홈으로 떨어진 경우. 유저는 자신이 클릭한 맥락이 사라지자마자 1초 만에 뒤로가기를 눌러 58명 전원 이탈, 결제 0건.'
  }
];

export default function MetaAdsAngleMatrix() {
  const [selectedAngle, setSelectedAngle] = useState<string>('evidence');
  const active = ANGLES.find((a) => a.id === selectedAngle) || ANGLES[0];

  return (
    <section id="meta-ads-matrix" className="toss-container space-y-8">
      {/* 섹션 상단 헤더 */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f3ff] text-[#3182f6] text-xs font-bold">
          <Target size={14} weight="duotone" />
          <span>PERFORMANCE ADS LAB</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-[#191f28] tracking-tight leading-tight">
          메타 광고 14일 실측:<br />
          궁금증(0.8%) vs 증거물(8.6%) 소오름 매칭
        </h2>
        <p className="text-[#4e5968] text-sm sm:text-base leading-relaxed">
          "궁금증은 유입을 만들고, 증거물은 결제를 만든다."<br />
          광고 장면 ↔ 랜딩 첫 카드의 1:1 회수가 만들어낸 결제 전환율 8.6%의 실측 엔지니어링입니다.
        </p>
      </div>

      {/* 3대 앵글 선택 탭 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-1 rounded-2xl bg-white border border-black/[0.06] shadow-xs">
        {ANGLES.map((angle) => {
          const isSelected = selectedAngle === angle.id;
          return (
            <button
              key={angle.id}
              onClick={() => setSelectedAngle(angle.id)}
              className={`p-3 sm:p-4 rounded-xl text-left transition-all tactile-btn flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#191f28] text-white shadow-sm'
                  : 'hover:bg-[#f2f4f6] text-[#4e5968]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-700'}`}>
                  {angle.badge}
                </span>
                <span className="text-xs font-mono font-bold" style={{ color: isSelected ? '#60A5FA' : angle.cvrColor }}>
                  CVR {angle.cvr}
                </span>
              </div>
              <div className={`text-xs sm:text-sm font-black ${isSelected ? 'text-white' : 'text-[#191f28]'}`}>
                {angle.name}
              </div>
            </button>
          );
        })}
      </div>

      {/* 실측 A/B 비교 & 라이브 목업 (Double-Bezel 카드) */}
      <div className="bezel-card-outer">
        <div className="bezel-card-inner space-y-8 p-6 sm:p-10 bg-white">
          {/* 상단 4대 실측 스탯 바 */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 border-b border-black/[0.05] pb-6">
            <div className="p-3.5 rounded-xl bg-[#f9fafb] border border-black/[0.04] space-y-1">
              <span className="text-xs text-[#8b95a1]">광고 클릭 유입</span>
              <div className="text-xl sm:text-2xl font-black text-[#191f28] font-mono tabular-nums">
                {active.inflow}명
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-[#f9fafb] border border-black/[0.04] space-y-1">
              <span className="text-xs text-[#8b95a1]">진입 전환수</span>
              <div className="text-xl sm:text-2xl font-black text-[#191f28] font-mono tabular-nums">
                {active.signups}명
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-[#f9fafb] border border-black/[0.04] space-y-1">
              <span className="text-xs text-[#8b95a1]">실제 결제 건수</span>
              <div className="text-xl sm:text-2xl font-black font-mono tabular-nums" style={{ color: active.cvrColor }}>
                {active.paidOrders}건
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-[#f9fafb] border border-black/[0.04] space-y-1">
              <span className="text-xs text-[#8b95a1]">유입 대비 결제율</span>
              <div className="text-xl sm:text-2xl font-black font-mono tabular-nums" style={{ color: active.cvrColor }}>
                {active.cvr}
              </div>
            </div>
          </div>

          {/* 소오름 매칭 라이브 인터랙티브 비교 뷰어 */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#191f28] uppercase tracking-wider flex items-center gap-1.5">
                <Lightning size={16} weight="fill" className="text-amber-500" />
                광고 크리에이티브(Meta Ad) ↔ 랜딩 첫 화면 1:1 회수 구조
              </span>
              <span className="text-xs font-mono font-bold text-[#3182f6]">
                일치도: {active.matchScore}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {/* 좌측: 인스타그램 메타 광고 카드 */}
              <div className="rounded-2xl bg-[#050A18] text-[#FAF6F0] p-6 border border-white/10 flex flex-col justify-between space-y-4 shadow-md">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-[#8b95a1] font-mono">
                    <span>INSTAGRAM SPONSORED AD</span>
                    <span className="text-[#60A5FA]">Meta Creative</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-2">
                    <div className="text-xs text-[#60A5FA] font-bold">
                      [광고 훅 대문구]
                    </div>
                    <div className="text-base sm:text-lg font-black text-white leading-snug">
                      "{active.adHook}"
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {active.adCopy}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-[#8b95a1]">
                  <span className="flex items-center gap-1"><CursorClick size={14} /> 더 알아보기 클릭</span>
                  <span className="text-white font-bold">UTM 태그 전송</span>
                </div>
              </div>

              {/* 우측: 랜딩페이지 첫 화면 회수 카드 */}
              <div className="rounded-2xl bg-[#f2f4f6] p-6 border border-black/[0.06] flex flex-col justify-between space-y-4 shadow-sm">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-[#8b95a1] font-mono">
                    <span>LANDING PAGE HERO CARD</span>
                    <span className="text-[#3182f6]">1:1 Re-engagement</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-black/[0.04] space-y-2 shadow-xs">
                    <div className="text-xs text-[#3182f6] font-bold">
                      [랜딩페이지 첫 카드 회수 문장]
                    </div>
                    <div className="text-base sm:text-lg font-black text-[#191f28] leading-snug">
                      "{active.landingHeadline}"
                    </div>
                    <p className="text-xs text-[#4e5968] leading-relaxed">
                      {active.landingSubcopy}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-black/[0.04] flex items-center justify-between text-xs text-[#8b95a1]">
                  <span className="flex items-center gap-1"><CreditCard size={14} /> 즉시 결제 유도</span>
                  <span className="text-[#191f28] font-bold">소오름 CVR {active.cvr}</span>
                </div>
              </div>
            </div>
          </div>

          {/* 하단 엔지니어링 분석 코멘트 */}
          <div className="p-4 rounded-2xl bg-[#f9fafb] border border-black/[0.04] text-xs text-[#4e5968] leading-relaxed space-y-1">
            <span className="font-bold text-[#191f28]">실측 엔지니어링 인사이트: </span>
            <span>{active.analysis}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
