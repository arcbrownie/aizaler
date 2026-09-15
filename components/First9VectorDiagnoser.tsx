'use client';

import React, { useState } from 'react';
import { 
  GridFour, 
  CheckCircle, 
  WarningCircle, 
  ArrowRight, 
  Eye, 
  BookmarkSimple, 
  Sliders, 
  ShieldCheck, 
  Sparkle 
} from '@phosphor-icons/react';

export default function First9VectorDiagnoser() {
  const [activeTab, setActiveTab] = useState<'grid' | 'pumping'>('grid');

  const GRID_ITEMS = [
    { col: '1열 (대중 탐색)', title: '할리우드 영화 "CG 거의 안 썼대!"', note: '탐색 유입 4.6만 뷰 달성', tag: 'CGI 교정' },
    { col: '2열 (판교 실전)', title: '외국계 동료한테 "Wait" 했다가 갑분싸 된 썰', note: '판교 테크팀 락인', tag: '실전 오피스' },
    { col: '3열 (충격 교정)', title: '스벅에서 "One Plus One" 달라면 생기는 일', note: '저장률 3.5% 돌파', tag: 'BOGO 쿠폰' },
    { col: '1열 (대중 탐색)', title: '외국인한테 "Do you have SNS?" 물어보면 고장 남', note: '글로벌 밈 확장', tag: 'SNS 문화' },
    { col: '2열 (판교 실전)', title: '슬랙에서 일 칼차단하는 원어민의 3마디', note: '직장인 북마크 폭발', tag: '슬랙 허들' },
    { col: '3열 (충격 교정)', title: '해외 식당에서 서비스 받고 "Is this service?" 금지', note: '훈수 댓글 80개', tag: 'On the house' },
    { col: '1열 (대중 탐색)', title: '맛있는 거 먹고 "Delicious" 외치면 로봇인 이유', note: '도파민 자극', tag: '자연스러운 맛' },
    { col: '2열 (판교 실전)', title: '회의 끝날 때 "Are you understand?" 시비 털린 썰', note: '임상 관찰자 공감', tag: 'Does that make sense' },
    { col: '3열 (충격 교정)', title: '해외 바에서 "Show me ID" 했을 때 주민등록증 꺼냄', note: '흑역사 대나무숲', tag: 'Passport ID' }
  ];

  return (
    <section id="first9-diagnoser" className="toss-container space-y-8">
      {/* 섹션 상단 헤더 */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f3ff] text-[#3182f6] text-xs font-bold">
          <GridFour size={14} weight="duotone" />
          <span>ALGORITHM VECTOR ENGINE</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-[#191f28] tracking-tight leading-tight">
          First 9 텍스트 임베딩 순도와<br />
          3초 프로필 팔로우 전환 공식
        </h2>
        <p className="text-[#4e5968] text-sm sm:text-base leading-relaxed">
          Sentence-BERT 모델이 내 계정의 카테고리를 판정하는 첫 9개 피드의 벡터 순도와,<br className="hidden sm:inline" />
          피드가 오염되었을 때 10분 만에 좌표를 되돌리는 '관심 없음' 5연타 알고리즘 위세척 프로토콜입니다.
        </p>
      </div>

      {/* 2대 탭 컨트롤러 */}
      <div className="flex justify-center">
        <div className="inline-flex p-1 rounded-2xl bg-white border border-black/[0.06] shadow-xs">
          <button
            onClick={() => setActiveTab('grid')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all tactile-btn flex items-center gap-2 ${
              activeTab === 'grid'
                ? 'bg-[#3182f6] text-white shadow-xs'
                : 'text-[#4e5968] hover:text-[#191f28]'
            }`}
          >
            <GridFour size={16} weight="bold" />
            <span>3초 팔로우 3-Pillar 그리드 공식</span>
          </button>
          <button
            onClick={() => setActiveTab('pumping')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all tactile-btn flex items-center gap-2 ${
              activeTab === 'pumping'
                ? 'bg-[#050A18] text-white shadow-xs'
                : 'text-[#4e5968] hover:text-[#191f28]'
            }`}
          >
            <Sliders size={16} weight="bold" />
            <span>'관심 없음' 5연타 알고리즘 위세척</span>
          </button>
        </div>
      </div>

      {/* 메인 뷰어 (Double-Bezel 카드) */}
      <div className="bezel-card-outer">
        <div className="bezel-card-inner p-6 sm:p-10 bg-white space-y-6">
          {activeTab === 'grid' ? (
            /* 3-Pillar Grid View */
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-black/[0.05] pb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-[#191f28]">
                    Sentence-BERT 고정 인덱싱을 위한 3×3 완벽 배치도
                  </h3>
                  <p className="text-xs text-[#4e5968] mt-1">
                    방문자가 3초 만에 프로필을 스크롤할 때 "이 계정은 내 본업의 치트키다"라고 확신하게 만드는 구조입니다.
                  </p>
                </div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#e8f3ff] text-[#3182f6]">
                  팔로우 CVR 25%+ 검증
                </span>
              </div>

              {/* 3×3 그리드 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                {GRID_ITEMS.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#f9fafb] border border-black/[0.04] space-y-2.5 hover:border-[#3182f6]/40 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-[#8b95a1]">
                          {item.col}
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#3182f6]">
                          {item.tag}
                        </span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#191f28] leading-snug">
                        {item.title}
                      </h4>
                    </div>
                    <div className="pt-2 border-t border-black/[0.03] text-[11px] text-[#3182f6] font-medium flex items-center justify-between">
                      <span>{item.note}</span>
                      <BookmarkSimple size={14} weight="bold" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-[#f2f4f6] text-xs text-[#4e5968] leading-relaxed">
                <span className="font-bold text-[#191f28]">3초 프로필 법칙: </span>
                방문자는 프로필을 3초 이상 보지 않습니다. 최근 9개 피드의 텍스트 임베딩 순도가 100% 일치할 때, 메타 Two-Tower 추천 모델은 계정을 고관여 전문 클러스터에 즉시 강제 인덱싱하며 팔로우 전환율이 폭증합니다.
              </div>
            </div>
          ) : (
            /* Stomach Pumping Manual View */
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-black/[0.05] pb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-[#191f28]">
                    피드가 오염되었을 때 10분 만에 끝내는 알고리즘 위세척 (Stomach Pumping)
                  </h3>
                  <p className="text-xs text-[#4e5968] mt-1">
                    "지금 내 피드에 뜨는 글들이 곧 내 글이 배포되고 있는 사람들의 얼굴입니다."
                  </p>
                </div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#ffebee] text-[#f04452]">
                  -5.0점 핵폭탄 거절 신호
                </span>
              </div>

              {/* 위세척 4단계 절차 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[#f9fafb] border border-black/[0.04] space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#f04452] text-white flex items-center justify-center text-xs font-bold font-mono">1</span>
                    <h4 className="text-sm font-black text-[#191f28]">추천 피드 자가진단 (미러링의 법칙)</h4>
                  </div>
                  <p className="text-xs text-[#4e5968] leading-relaxed">
                    내 계정 피드에 직장인 한탄, 자극적 짤방이 가득하다면 메타 AI가 내 계정을 밈 계정으로 인식하고 있다는 위험 신호입니다. 내 글도 비타겟에게 살포되어 0.5초 스킵당하고 있습니다.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#f9fafb] border border-black/[0.04] space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#3182f6] text-white flex items-center justify-center text-xs font-bold font-mono">2</span>
                    <h4 className="text-sm font-black text-[#191f28]">'관심 없음' 5~10연타 클릭</h4>
                  </div>
                  <p className="text-xs text-[#4e5968] leading-relaxed">
                    엉뚱한 글 우측 상단 [···]을 누르고 [관심 없음]을 가차 없이 누릅니다. 단순 스킵(-0.3점)과 달리 '관심 없음'은 알고리즘에게 <strong>-5.0점짜리 극단적 거절 신호</strong>로 작용합니다.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#f9fafb] border border-black/[0.04] space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#10b981] text-white flex items-center justify-center text-xs font-bold font-mono">3</span>
                    <h4 className="text-sm font-black text-[#191f28]">1티어 전문가 계정 5곳 인터랙션</h4>
                  </div>
                  <p className="text-xs text-[#4e5968] leading-relaxed">
                    내가 벤치마킹할 업계 상위 1% 계정 5곳을 직접 검색해 들어가 칼럼에 좋아요와 저장을 누릅니다. 메타 추천 엔진은 계정의 벡터 좌표를 즉시 전문 지식 클러스터로 재조정합니다.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#f9fafb] border border-black/[0.04] space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#8b5cf6] text-white flex items-center justify-center text-xs font-bold font-mono">4</span>
                    <h4 className="text-sm font-black text-[#191f28]">정화 국면 실탄 보존 (1일 1편 절제)</h4>
                  </div>
                  <p className="text-xs text-[#4e5968] leading-relaxed">
                    계정이 회복되는 3일 동안은 조급하게 글을 난사하지 말고, 하루 1~2편의 고순도 버티컬 글만 투입합니다. 적은 조회수 속에서도 참여율(Engagement Rate) 1~3%를 찍으면 알고리즘 배포 밸브가 다시 열립니다.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#050A18] text-[#FAF6F0] text-xs font-mono flex items-center justify-between">
                <span>계정 건강 상태 자동 진단: `npx tsx scripts/threads-health.ts`</span>
                <span className="text-[#60A5FA] font-bold">Auto Audit Ready</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
