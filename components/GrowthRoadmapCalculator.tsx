'use client';

import React, { useState } from 'react';
import { 
  RocketLaunch, 
  CheckCircle, 
  Sparkle, 
  ArrowRight, 
  Clock, 
  TrendUp, 
  Coins, 
  Lightning,
  UserGear,
  Target
} from '@phosphor-icons/react';

interface RoleProfile {
  id: string;
  name: string;
  badge: string;
  assistantRole: string;
  tasksToDelegate: string[];
  weeklyHoursSaved: number;
  monthlyValue: string;
  growthOutcome: string;
  growthKey: string;
}

const ROLES: RoleProfile[] = [
  {
    id: 'pm',
    name: '기획자 · PM',
    badge: '기획 병목 해소',
    assistantRole: '24시간 상주하는 시니어 역기획 & 시장조사 부사수',
    tasksToDelegate: [
      '경쟁사 서비스 10개 기능 매트릭스 역기획 및 벤치마킹',
      '사용자 여정 지도(User Journey) 및 엣지 케이스 QA 시나리오 도출',
      '경영진 및 개발팀 보고용 PRD(제품 요구사항 정의서) 초안 15분 완성'
    ],
    weeklyHoursSaved: 8.5,
    monthlyValue: '월 102만 원 상당 (34시간 회수)',
    growthOutcome: '단순 일정 관리자를 벗어나, 핵심 비즈니스 임팩트를 주도하는 CPO급 프로덕트 오너로 성장',
    growthKey: '야근 0시간 + 기획 퀄리티 3배 레버리지'
  },
  {
    id: 'marketer',
    name: '마케터 · 그로스',
    badge: '전환율 300% 폭발',
    assistantRole: '소비자 심리를 찌르는 고전환 카피라이터 & 데이터 분석관',
    tasksToDelegate: [
      '클릭률 12% 보장 숏폼 릴스/스레드 후킹 스크립트 20종 일괄 생성',
      '광고 소재 A/B 테스트 성과 데이터 SQL 및 코호트 리텐션 즉시 분석',
      '고객 인터뷰 및 리뷰 1,000건 감성 분석을 통한 킬러 소구점 발굴'
    ],
    weeklyHoursSaved: 9.0,
    monthlyValue: '월 108만 원 상당 (36시간 회수)',
    growthOutcome: '감에 의존하던 마케팅에서 벗어나, 1인이 대행사 1팀의 퍼포먼스를 내는 그로스 리더로 도약',
    growthKey: '광고비 0원으로 오가닉 트래픽 4배 스케일업'
  },
  {
    id: 'solopreneur',
    name: '1인 창업가 · 솔로프리너',
    badge: '1인 5역 완전체',
    assistantRole: '기획부터 코딩, 카피, 고객응대까지 전담하는 가상 팀원 4명',
    tasksToDelegate: [
      'Next.js 14 풀스택 상용 웹서비스 바이브코딩 & DB 연동 3일 컷',
      '1억 매출 상세페이지 심리 프레임워크 기반 랜딩페이지 카피 라이팅',
      'FAQ 챗봇 및 결제 완료 후 카카오 알림톡/웹훅 자동화 파이프라인'
    ],
    weeklyHoursSaved: 12.0,
    monthlyValue: '월 144만 원 상당 (48시간 회수)',
    growthOutcome: '외주 개발비 2,000만 원 한 푼 안 들이고, 1인이 월 500만 원 이상의 수익형 프로덕트를 직접 런칭',
    growthKey: '외주비 0원 + 1인 테크 스튜디오 자립'
  },
  {
    id: 'engineer',
    name: '개발자 · 엔지니어',
    badge: '에이전틱 코딩',
    assistantRole: '터미널에서 1초 만에 보일러플레이트와 디버깅을 끝내는 페어 프로그래머',
    tasksToDelegate: [
      'Claude Code / Cursor로 복잡한 정규식, SQL 쿼리, DTO 타입 자동 생성',
      '테스트 코드(Vitest/Jest) 작성 및 엣지 케이스 버그 사전 탐색',
      '서버리스 배포 파이프라인(Cloudflare + Neon DB) 10분 만에 셋업'
    ],
    weeklyHoursSaved: 7.5,
    monthlyValue: '월 90만 원 상당 (30시간 회수)',
    growthOutcome: '잡다한 단순 코딩에서 해방되어, 시스템 아키텍처와 제품 비즈니스 가치에 집중하는 10x 엔지니어',
    growthKey: '개발 속도 5배 + 사이드 프로덕트 주말 완성'
  }
];

export default function GrowthRoadmapCalculator() {
  const [selectedRoleId, setSelectedRoleId] = useState<string>('solopreneur');

  const role = ROLES.find((r) => r.id === selectedRoleId) || ROLES[0];

  return (
    <div className="bezel-card-outer">
      <div className="bezel-card-inner space-y-6">
        {/* 상단 타이틀 */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-black/[0.05] pb-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#e8f3ff] text-[#3182f6] text-xs font-bold">
              <RocketLaunch size={14} weight="duotone" />
              <span>실시간 AI 뽕뽑기 ➔ 초격차 성장 로드맵 진단</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-[#191f28]">
              당신의 직무를 선택하면 '10배 뽕뽑는 성장 로드맵'을 처방해 드립니다
            </h3>
          </div>
          <span className="text-xs text-[#8b95a1] font-medium self-start sm:self-auto">
            직무 클릭 시 즉시 변경
          </span>
        </div>

        {/* 직무 선택 탭 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {ROLES.map((r) => {
            const isSelected = selectedRoleId === r.id;
            return (
              <button
                key={r.id}
                type="button"
                onClick={() => setSelectedRoleId(r.id)}
                className={`p-3 rounded-2xl border text-center transition-all tactile-btn space-y-1 ${
                  isSelected
                    ? 'border-[#3182f6] bg-[#3182f6] text-white shadow-sm'
                    : 'border-black/[0.06] bg-white text-[#4e5968] hover:border-gray-300'
                }`}
              >
                <div className="text-xs sm:text-sm font-bold">{r.name}</div>
                <div className={`text-[10px] ${isSelected ? 'text-blue-100' : 'text-[#8b95a1]'}`}>
                  {r.badge}
                </div>
              </button>
            );
          })}
        </div>

        {/* 3단계 로드맵 카드 그리드 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-2">
          {/* STEP 1: 뽕뽑기 */}
          <div className="p-5 rounded-2xl bg-[#f9fafb] border border-black/[0.04] flex flex-col justify-between space-y-3">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-[#3182f6]">STEP 01</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#3182f6]">
                  구독료 뽕뽑기
                </span>
              </div>
              <h4 className="text-sm font-bold text-[#191f28]">
                {role.assistantRole}
              </h4>
              <p className="text-xs text-[#8b95a1]">
                월 2만 원 챗GPT에게 당장 내일부터 넘길 업무:
              </p>
              <ul className="space-y-2 text-xs text-[#4e5968]">
                {role.tasksToDelegate.map((t, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle size={15} weight="fill" className="text-[#3182f6] shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-3 border-t border-black/[0.04] text-[11px] font-bold text-[#3182f6]">
              ➔ 단순 챗봇에서 내 1등 부사수로 세팅
            </div>
          </div>

          {/* STEP 2: 시간 회수 */}
          <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200/60 flex flex-col justify-between space-y-3">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-amber-700">STEP 02</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                  시간 회수 & 여유
                </span>
              </div>
              <h4 className="text-sm font-bold text-[#191f28]">
                매주 {role.weeklyHoursSaved}시간 순수 업무 시간 회수
              </h4>
              <div className="p-4 rounded-xl bg-white border border-amber-100 space-y-1.5">
                <div className="text-2xl font-black text-[#191f28] font-mono tabular-nums">
                  주 {role.weeklyHoursSaved}시간 SAVE
                </div>
                <div className="text-xs font-bold text-amber-700">
                  {role.monthlyValue}
                </div>
              </div>
              <p className="text-xs text-[#4e5968] leading-relaxed">
                반복 업무에 허덕이며 야근하던 시간 대신, 매달 30~48시간의 고농도 자유 시간이 내 손에 쥐어집니다.
              </p>
            </div>
            <div className="pt-3 border-t border-amber-100 text-[11px] font-bold text-amber-700">
              ➔ 번아웃 탈출 & 핵심 전략 집중
            </div>
          </div>

          {/* STEP 3: 초격차 성장 */}
          <div className="p-5 rounded-2xl bg-[#e8f3ff]/70 border border-[#3182f6]/30 flex flex-col justify-between space-y-3 shadow-xs">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-[#3182f6]">STEP 03</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#3182f6] text-white">
                  초격차 성장 & 밸류
                </span>
              </div>
              <h4 className="text-sm font-bold text-[#191f28]">
                {role.growthKey}
              </h4>
              <div className="p-4 rounded-xl bg-white border border-blue-100 text-xs text-[#191f28] leading-relaxed font-medium">
                {role.growthOutcome}
              </div>
              <p className="text-xs text-[#4e5968] leading-relaxed">
                남들이 챗GPT에 메일 요약만 시킬 때, 당신은 회수한 시간으로 연봉 2배 협상 또는 1인 비즈니스를 실제로 띄웁니다.
              </p>
            </div>
            <div className="pt-3 border-t border-blue-100 text-[11px] font-bold text-[#3182f6]">
              ➔ 대체 불가능한 상위 1% AI 인재 도약
            </div>
          </div>
        </div>

        {/* 하단 CTA */}
        <div className="p-4 rounded-2xl bg-[#191f28] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-0.5 text-center sm:text-left">
            <div className="text-sm font-bold text-white flex items-center justify-center sm:justify-start gap-1.5">
              <Target size={18} weight="duotone" className="text-[#3182f6]" />
              <span>{role.name} 전용 AI 뽕뽑기 & 성장 실전 가이드</span>
            </div>
            <div className="text-xs text-gray-300">
              당신의 직무에 최적화된 프롬프트 50선과 업무 파이프라인이 준비되어 있습니다.
            </div>
          </div>
          <a
            href="#solutions"
            className="w-full sm:w-auto toss-button-primary px-6 py-3 text-xs sm:text-sm font-bold shrink-0 flex items-center justify-center gap-1.5 shadow-md"
          >
            <span>가이드 확인하기</span>
            <ArrowRight size={14} weight="bold" />
          </a>
        </div>
      </div>
    </div>
  );
}

