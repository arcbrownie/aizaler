'use client';

import React, { useState } from 'react';
import { 
  Briefcase, 
  Flame, 
  TerminalWindow, 
  RocketLaunch, 
  CheckCircle, 
  ArrowRight,
  ShieldCheck,
  TrendUp
} from '@phosphor-icons/react';

interface TimelineStep {
  chapter: string;
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  quote: string;
  description: string;
  metrics: { label: string; value: string; note?: string }[];
  bulletPoints: string[];
  icon: React.ElementType;
}

const TIMELINE_STEPS: TimelineStep[] = [
  {
    chapter: 'CHAPTER 01',
    badge: '안정의 역설',
    badgeColor: '#3182f6',
    title: '선망받던 공기업과 해외 주재원, 황금 족쇄를 벗다',
    subtitle: '보장된 정년과 안락한 테두리 대신, 내 손으로 내 가치를 증명하기 위한 퇴사 결단',
    quote: '"조직의 이름표를 떼었을 때, 오직 내 기술과 제품만으로 시장에서 1원이라도 벌 수 있는가?"',
    description: '남들은 정년이 보장된 공기업 정규직과 해외 주재원 생활을 부러워했습니다. 하지만 거대한 관료 조직의 톱니바퀴로 남는 삶은 매일 나를 소모시켰습니다. 안락한 황금 족쇄를 벗어던지고, 오직 내 손으로 코드를 짜고 시장과 정면 승부하는 1인 개발자이자 솔로프리너의 야생으로 걸어 나왔습니다.',
    metrics: [
      { label: '전 직장', value: '공기업 정규직' },
      { label: '해외 경력', value: '글로벌 주재원' },
      { label: '퇴사 결단', value: '1인 개발 전환' }
    ],
    bulletPoints: [
      '타인의 시스템에 의존하지 않고 내 프로덕트로 생존하겠다는 결심',
      '기회비용과 손익 분기점을 냉정하게 계산한 퇴사 로드맵 설계',
      '누구에게도 빚지지 않는 1인 린 스타트업(Lean Solopreneur) 아키텍처 준비'
    ],
    icon: Briefcase
  },
  {
    chapter: 'CHAPTER 02',
    badge: '야생의 바닥',
    badgeColor: '#f04452',
    title: '퇴사 후 마주한 야생의 피: 조회수 20만의 저주와 계정 셧다운',
    subtitle: '"퇴사 후 AI로 월 천만 원" 허상 강의의 민낯, 내 돈을 태우며 겪은 뼈아픈 실패들',
    quote: '"조회수 20만이 터졌는데 통장에 찍힌 결제는 단 4건이었습니다."',
    description: '인터넷 강의에서 말하는 "AI로 자동 수익"은 거짓이었습니다. 직접 웹 서비스를 만들고, 매달 내 생돈으로 메타 광고비와 서버비를 태우며 쓰라린 실패를 연달아 맞았습니다. 20.7만 조회수 대박 글이 터졌으나 결제는 고작 4건(0.0019%)뿐이었고, 엉뚱한 구경꾼만 대거 유입되어 계정이 5일간 노출 -92%로 급락하는 역주행을 겪었습니다. 하루 10개 글을 난사했다가 계정이 48시간 셧다운당하기도 했습니다.',
    metrics: [
      { label: '바이럴 조회수', value: '207,709회' },
      { label: '실제 유료 결제', value: '단 4건 (0.0019%)' },
      { label: '계정 노출 추락', value: '-92% (5일 숙취)' }
    ],
    bulletPoints: [
      '구매 의도 없는 재미 위주 바이럴의 치명적인 계정 오염(역주행) 체감',
      '단순 글 수 늘리기 집착으로 계정 신뢰도 강등 및 노출 셧다운 경험',
      '광고 첫 화면과 랜딩페이지 불일치로 인한 광고비 누수 참사 복기'
    ],
    icon: Flame
  },
  {
    chapter: 'CHAPTER 03',
    badge: '공인 자격 & 반전',
    badgeColor: '#10b981',
    title: '감정적 좌절 대신, Meta 공인 자격 취득과 데이터 분석으로 길을 뚫다',
    subtitle: 'Meta Certified Media Planning Professional 취득, 423만 뷰 DB 분석과 광고 ↔ 랜딩 1:1 일치로 결제율 8.6% 달성',
    quote: '"실패에 울지 않고, 메타 공식 자격을 파고들고 코드를 뜯어고쳤습니다."',
    description: '실패에 좌절하는 대신, 메타 공식 자격인 "Meta Certified Media Planning Professional(메타 공인 미디어 플래닝 전문가)"을 취득하며 메타 광고 추천 시스템의 알고리즘을 바닥부터 파고들었습니다. 695편의 포스트와 423만 뷰 결제 데이터베이스를 전수 대조해 "진짜 결제 고객이 들어오는 1,000~3,000뷰의 황금 스위트 스팟"을 찾아냈고, 광고 장면과 랜딩 첫 카드를 1초 만에 1:1로 일치시키는 공식으로 결제 전환율 8.6%를 달성했습니다.',
    metrics: [
      { label: '메타 공식 자격', value: 'Media Planning Pro' },
      { label: '전수 분석 데이터', value: '423만 뷰 · 695편' },
      { label: '메타 광고 결제율', value: '8.6% (업계 8배)' }
    ],
    bulletPoints: [
      'Meta Certified Media Planning Professional 공식 자격 취득 및 전문성 입증',
      '광고 장면 ↔ 랜딩 첫 카드 1:1 일치(소오름 매칭)로 결제 전환율 8.6% 극대화',
      '월 $42 인프라 위에서 4개 상용 서비스를 1인으로 굴리는 파이프라인 완성'
    ],
    icon: TerminalWindow
  },
  {
    chapter: 'CHAPTER 04',
    badge: '현재 진행형',
    badgeColor: '#8b5cf6',
    title: '가르치는 은퇴자가 아닌, 오늘도 현역으로 생존하는 1인 빌더',
    subtitle: 'Building in Public: 매일 코드를 치고, 광고비를 태우며 생존과 성장을 증명하는 여정',
    quote: '"aizaler는 이론을 파는 학원이 아닙니다. 야생에서 매일 생존하는 동료 빌더의 오픈 랩입니다."',
    description: '저는 이미 은퇴해서 성공 비법을 훈계하는 강사가 아닙니다. 오늘도 IDE를 켜고 코드를 치며, 새로운 메타 광고 캠페인을 A/B 테스트하고, AI 에이전트를 프로덕션에 물려보며 매달 인프라 비용과 결제 매출을 직접 지켜내는 현역 솔로프리너입니다. 제가 겪은 모든 실패와 성공의 코드를 숨김없이 공개하는 이유입니다.',
    metrics: [
      { label: '운영 프로덕트', value: '4개 상용 서비스' },
      { label: '월 인프라 비용', value: '$42/월' },
      { label: '빌딩 모드', value: '100% In Public' }
    ],
    bulletPoints: [
      '실시간 프로덕션 배포와 실제 결제 데이터 기반의 실전 지식 공유',
      '동료 1인 창업가 및 직장인을 위한 현실적인 의사결정 전략 세션 (/career)',
      '실패를 두려워하지 않고 매일 가치를 빌딩하는 지속 가능한 솔로프리너십'
    ],
    icon: RocketLaunch
  }
];

export default function FounderNarrativeTimeline() {
  const [activeChapter, setActiveChapter] = useState<number>(0);
  const current = TIMELINE_STEPS[activeChapter];
  const IconComponent = current.icon;

  return (
    <section id="origin-story" className="toss-container space-y-8 scroll-mt-24">
      {/* 섹션 상단 헤더 */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#191f28] text-white text-xs font-bold">
          <span className="w-2 h-2 rounded-full bg-[#3182f6] animate-pulse" />
          <span>FOUNDER ORIGIN STORY</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-[#191f28] tracking-tight leading-tight">
          공기업·해외 주재원에서<br />
          1인 개발 솔로프리너로 생존하기까지
        </h2>
        <p className="text-[#4e5968] text-sm sm:text-base leading-relaxed">
          남들이 선망하던 안정적인 울타리를 박차고 나와, 야생의 바닥에서 겪은 날것의 시행착오와 현재 진행형인 실전 엔지니어링 기록입니다.
        </p>
      </div>

      {/* 4단계 탭 컨트롤러 (Apple Keynote 스타일) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 p-1.5 rounded-2xl bg-white border border-black/[0.06] shadow-xs">
        {TIMELINE_STEPS.map((step, idx) => {
          const isActive = activeChapter === idx;
          const StepIcon = step.icon;
          return (
            <button
              key={step.chapter}
              onClick={() => setActiveChapter(idx)}
              className={`p-3 sm:p-4 rounded-xl text-left transition-all relative tactile-btn ${
                isActive
                  ? 'bg-[#050A18] text-white shadow-md'
                  : 'hover:bg-[#f2f4f6] text-[#4e5968]'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-[10px] font-mono font-bold tracking-wider ${isActive ? 'text-[#60A5FA]' : 'text-[#8b95a1]'}`}>
                  {step.chapter}
                </span>
                <StepIcon size={16} weight={isActive ? 'fill' : 'regular'} className={isActive ? 'text-[#60A5FA]' : 'text-[#8b95a1]'} />
              </div>
              <div className={`text-xs sm:text-sm font-black truncate ${isActive ? 'text-[#FAF6F0]' : 'text-[#191f28]'}`}>
                {step.badge}
              </div>
            </button>
          );
        })}
      </div>

      {/* 선택된 챕터 상세 카드 (Double-Bezel 대형 카드) */}
      <div className="bezel-card-outer">
        <div className="bezel-card-inner space-y-6 sm:space-y-8 p-6 sm:p-10 bg-white">
          {/* 상단 챕터 헤더 & 인용구 */}
          <div className="space-y-3 border-b border-black/[0.05] pb-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono font-extrabold px-2.5 py-0.5 rounded-full bg-[#e8f3ff] text-[#3182f6]">
                {current.chapter}
              </span>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#f2f4f6] text-[#4e5968]">
                {current.badge}
              </span>
            </div>

            <h3 className="text-xl sm:text-3xl font-black text-[#191f28] tracking-tight leading-snug">
              {current.title}
            </h3>
            <p className="text-sm sm:text-base text-[#3182f6] font-bold">
              {current.subtitle}
            </p>

            {/* 인용구 콜아웃 */}
            <div className="p-4 rounded-2xl bg-[#050A18] text-[#FAF6F0] border border-black/[0.04] text-xs sm:text-sm font-mono leading-relaxed">
              <p className="text-[#60A5FA] font-bold">{current.quote}</p>
            </div>
          </div>

          {/* 본문 서사 & 3대 실측 지표 박스 (Asymmetric Split) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            {/* 좌측 서사 본문 (7열) */}
            <div className="lg:col-span-7 space-y-5">
              <p className="text-sm sm:text-base text-[#4e5968] leading-relaxed break-keep">
                {current.description}
              </p>

              {/* 핵심 체크포인트 3개 */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold text-[#191f28] uppercase tracking-wider">
                  KEY LEARNINGS & PRINCIPLES
                </div>
                {current.bulletPoints.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#191f28]">
                    <CheckCircle size={17} weight="fill" className="text-[#3182f6] shrink-0 mt-0.5" />
                    <span className="break-keep">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 우측 3대 실측 지표 캡슐 (5열) */}
            <div className="lg:col-span-5 p-5 sm:p-6 rounded-2xl bg-[#f9fafb] border border-black/[0.05] space-y-4">
              <div className="text-xs font-bold text-[#8b95a1] uppercase tracking-wider flex items-center gap-1">
                <TrendUp size={14} weight="bold" />
                CHAPTER FACT SHEET
              </div>
              <div className="space-y-3">
                {current.metrics.map((m, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white border border-black/[0.04] flex items-center justify-between">
                    <span className="text-xs text-[#8b95a1] font-medium">{m.label}</span>
                    <span className="text-sm sm:text-base font-mono font-black text-[#191f28] tabular-nums">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <div className="text-[11px] text-[#8b95a1] leading-relaxed">
                  * 본 내용은 브라운임팩트랩스 사내 프로덕트 실제 운영 로그와 실측 데이터를 바탕으로 기록되었습니다.
                </div>
              </div>
            </div>
          </div>

          {/* 하단 챕터 네비게이션 */}
          <div className="pt-4 border-t border-black/[0.04] flex items-center justify-between">
            <span className="text-xs text-[#8b95a1]">
              총 4개 챕터 중 {activeChapter + 1}번째 이야기
            </span>
            <div className="flex items-center gap-2">
              {activeChapter > 0 && (
                <button
                  onClick={() => setActiveChapter(activeChapter - 1)}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-[#4e5968] bg-[#f2f4f6] hover:bg-[#e5e8eb] transition-colors"
                >
                  이전 챕터
                </button>
              )}
              {activeChapter < TIMELINE_STEPS.length - 1 ? (
                <button
                  onClick={() => setActiveChapter(activeChapter + 1)}
                  className="inline-flex items-center gap-1 px-4 py-1.5 rounded-xl text-xs font-bold text-white bg-[#3182f6] hover:bg-blue-600 transition-colors"
                >
                  <span>다음 챕터 읽기</span>
                  <ArrowRight size={14} weight="bold" />
                </button>
              ) : (
                <a
                  href="#algorithm"
                  className="inline-flex items-center gap-1 px-4 py-1.5 rounded-xl text-xs font-bold text-white bg-[#050A18] hover:bg-black transition-colors"
                >
                  <span>20만 뷰 실측 데이터 보러가기</span>
                  <ArrowRight size={14} weight="bold" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

