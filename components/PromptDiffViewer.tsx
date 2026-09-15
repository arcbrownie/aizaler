'use client';

import React, { useState } from 'react';
import { 
  Sparkle, 
  ArrowRight, 
  Lightning, 
  CheckCircle, 
  XCircle,
  FileText,
  MegaphoneSimple,
  ChartLineUp
} from '@phosphor-icons/react';

interface PromptCase {
  id: string;
  title: string;
  category: string;
  icon: React.ReactNode;
  beforePrompt: string;
  beforeResult: string;
  afterPrompt: string;
  afterResult: string;
  roiBadge: string;
}

const CASES: PromptCase[] = [
  {
    id: 'plan',
    title: '신규 비즈니스 역기획서',
    category: '기획 · PM',
    icon: <FileText size={18} weight="duotone" />,
    beforePrompt: '2030 직장인 대상 AI 일정 관리 서비스 기획서 하나 멋지게 써줘.',
    beforeResult: '1. 개요: 현대 직장인을 위한 스마트 캘린더입니다.\n2. 주요 기능: 일정 등록, 알림, 메모 기능이 있습니다.\n3. 기대 효과: 시간 관리를 효율적으로 할 수 있습니다.\n➔ 뻔하고 교과서적인 뜬구름 답변 (실무 활용 불가)',
    afterPrompt: '[역할: 실리콘밸리 YC 출신 B2B SaaS 프로덕트 리드]\n타겟: 3~7년 차 마케터의 주간 업무 병목 구간\n도출 형식:\n1) 핵심 JTBD (Jobs-to-be-Done) 3가지\n2) 2주 검증용 MVP 핵심 기능 매트릭스 (Effort vs Impact)\n3) 1차 활성 사용자(Aha-Moment) 도달 수치 정의 테이블',
    afterResult: '✓ 3개 코어 페르소나별 주당 4.2시간 낭비 구간 정밀 분해\n✓ 1인 개발 3일 컷 가능한 기능 우선순위 MoSCoW 표\n✓ 첫날 재방문율(D1 Retention) 45% 유도를 위한 온보딩 트리거 설계\n➔ 즉시 상사 보고 및 1인 런칭 가능한 실무 전략서 도출!',
    roiBadge: '기획 시간: 6시간 ➔ 20분 (18배 단축)'
  },
  {
    id: 'copy',
    title: '클릭률 3배 광고 카피',
    category: '마케팅 · 그로스',
    icon: <MegaphoneSimple size={18} weight="duotone" />,
    beforePrompt: 'AI 업무 툴 홍보하는 인스타그램 광고 카피 3개 추천해줘.',
    beforeResult: '"일이 편해지는 마법의 AI 도구!"\n"지금 시작하고 시간 절약하세요!"\n"누구나 쉽게 쓰는 스마트 업무 파트너!"\n➔ 클릭률 0.5% 미만의 밋밋하고 진부한 광고 카피',
    afterPrompt: '[원칙: 인간의 훈수 본능 + 유쾌한 찔림(Benign Masochism) 자극]\n상황: 매달 챗GPT 결제해놓고 메일 번역만 시키는 5년 차 대리의 죄책감\n형식: 릴스 3초 이탈 방지 훅 3종 + 본문 2줄 요약 + 행동 유도 CTA',
    afterResult: '"월 28,000원 내고 챗GPT한테 파파고 역할만 시키고 계신 대리님, 안 찔리십니까?"\n"도구가 부족한 게 아닙니다. 내 업무에 물리는 1가지 관점만 없었을 뿐."\n➔ 클릭률 12.4% 실측 달성한 고전환 후킹 카피 완성!',
    roiBadge: '광고 클릭률: 0.8% ➔ 4.2% (5.2배 상승)'
  },
  {
    id: 'data',
    title: '데이터 분석 & 병목 처방',
    category: '데이터 · 1인 창업',
    icon: <ChartLineUp size={18} weight="duotone" />,
    beforePrompt: '우리 웹사이트 방문자 데이터 요약하고 분석해줘.',
    beforeResult: '방문자가 20만 명이고 결제가 4건 있었습니다. 전환율이 낮으니 마케팅을 강화하고 웹사이트 디자인을 개선하는 것이 좋겠습니다.\n➔ 누구나 아는 당연한 소리 (실제 액션 불가능)',
    afterPrompt: '[PostgreSQL 결제 테이블 조인 로그 분석 전문가]\n입력값: 릴스 207,709뷰 / 결제 4건 (CVR 0.0019%)\n분석 요구:\n1) 메타 DLRM 추천 모델이 왜 비타겟 밈 군집으로 오염되었는지 수학적 설명\n2) 향후 7일간 First 9 피드 순도를 복구하기 위한 3단계 즉시 처방전',
    afterResult: '✓ DLRM 친밀도 점수가 저품질 밈 반응자로 클러스터링된 원인 규명\n✓ 7일 친밀도 반감기 기간 동안 코어 전문 텍스트 100% 강제 주입 전략\n✓ 2주 차 타겟 CVR 2.8%로 정상 반등 파이프라인 완성!',
    roiBadge: '외주 데이터 컨설팅 300만 원 대체'
  }
];

export default function PromptDiffViewer() {
  const [activeTab, setActiveTab] = useState<string>('plan');

  const currentCase = CASES.find((c) => c.id === activeTab) || CASES[0];

  return (
    <div className="bezel-card-outer">
      <div className="bezel-card-inner space-y-6">
        {/* 상단 헤더 & 탭 */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/[0.05] pb-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#e8f3ff] text-[#3182f6] text-xs font-bold">
              <Sparkle size={14} weight="duotone" />
              <span>라이브 프롬프트 DIFF 비교기</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-[#191f28]">
              99%의 '1% 챗봇 질문' vs aizaler '10배 뽕뽑는 시스템 프롬프트'
            </h3>
          </div>

          {/* 직무 탭 버튼 */}
          <div className="flex gap-1.5 p-1 rounded-2xl bg-[#f2f4f6] shrink-0">
            {CASES.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveTab(c.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all tactile-btn flex items-center gap-1.5 ${
                  activeTab === c.id
                    ? 'bg-white text-[#3182f6] shadow-xs'
                    : 'text-[#4e5968] hover:text-[#191f28]'
                }`}
              >
                {c.icon}
                <span>{c.category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 2열 비교 박스 (Before vs After) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Before: 월 2만 원 버리는 질문 */}
          <div className="rounded-2xl border border-red-100 bg-red-50/40 p-5 space-y-3.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#f04452] flex items-center gap-1.5">
                <XCircle size={18} weight="fill" />
                99%가 쓰는 1%짜리 질문 (구독료 낭비)
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-100/70 text-[#f04452]">
                하수
              </span>
            </div>

            <div className="space-y-1.5">
              <div className="text-[11px] font-bold text-[#8b95a1]">입력한 프롬프트:</div>
              <div className="p-3 rounded-xl bg-white border border-red-100 text-xs font-mono text-[#333d4b] leading-relaxed">
                "{currentCase.beforePrompt}"
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="text-[11px] font-bold text-[#8b95a1]">AI의 실제 산출물:</div>
              <div className="p-3 rounded-xl bg-white/70 border border-red-100/50 text-xs text-gray-500 whitespace-pre-line leading-relaxed">
                {currentCase.beforeResult}
              </div>
            </div>
          </div>

          {/* After: 10배 뽕뽑는 시스템 프롬프트 */}
          <div className="rounded-2xl border border-[#3182f6]/20 bg-[#e8f3ff]/40 p-5 space-y-3.5 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#3182f6] flex items-center gap-1.5">
                <CheckCircle size={18} weight="fill" />
                aizaler 10배 뽕뽑기 시스템 프롬프트 (초격차 성장)
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#3182f6] text-white">
                고수
              </span>
            </div>

            <div className="space-y-1.5">
              <div className="text-[11px] font-bold text-[#3182f6]">입력한 시스템 프롬프트:</div>
              <div className="p-3 rounded-xl bg-white border border-[#3182f6]/20 text-xs font-mono text-[#191f28] leading-relaxed whitespace-pre-line">
                {currentCase.afterPrompt}
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="text-[11px] font-bold text-[#3182f6]">실제 15초 만에 나온 결과:</div>
              <div className="p-3 rounded-xl bg-white border border-[#3182f6]/20 text-xs text-[#191f28] font-medium whitespace-pre-line leading-relaxed">
                {currentCase.afterResult}
              </div>
            </div>
          </div>
        </div>

        {/* 하단 성과 배지 */}
        <div className="p-3.5 rounded-xl bg-white border border-black/[0.04] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 font-bold text-[#191f28]">
            <Lightning size={18} weight="duotone" className="text-amber-500" />
            <span>실무 레버리지 검증: {currentCase.roiBadge}</span>
          </div>
          <span className="text-[#8b95a1] text-[11px]">
            * aizaler 실전 가이드북 수록 표준 템플릿 실측치
          </span>
        </div>
      </div>
    </div>
  );
}

