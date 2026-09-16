'use client';

import React, { useState } from 'react';
import { 
  Briefcase, 
  RocketLaunch, 
  TrendUp, 
  UserGear,
  CheckCircle, 
  ArrowRight, 
  Sparkle, 
  Lightning, 
  Target, 
  TerminalWindow,
  DownloadSimple,
  WarningCircle
} from '@phosphor-icons/react';
import Link from 'next/link';

// 1. 내 현재 상황 (4가지 유형)
interface UserStage {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  tag: string;
}

const STAGES: UserStage[] = [
  {
    id: 'worker',
    title: '직장인 · 퇴사/부업 준비',
    subtitle: '시간과 기술이 부족해 어디서부터 시작할지 막막함',
    icon: Briefcase,
    tag: '준비 단계'
  },
  {
    id: 'solopreneur',
    title: '초기 1인 창업가 · 빌더',
    subtitle: '외주비 없이 3일 만에 상용 프로덕트를 띄우고 싶음',
    icon: RocketLaunch,
    tag: '실행 단계'
  },
  {
    id: 'creator',
    title: '스레드/SNS 크리에이터',
    subtitle: '조회수는 터지는데 유료 결제가 0건이라 답답함',
    icon: TrendUp,
    tag: '수익화 단계'
  },
  {
    id: 'specialist',
    title: '현업 기획·마케터·전문가',
    subtitle: '내 본업 전문성을 AI로 레버리지해 1인 5역을 해내고 싶음',
    icon: UserGear,
    tag: '레버리지 단계'
  }
];

// 2. 현재 가장 답답한 병목 (4가지 질문)
interface Bottleneck {
  id: string;
  label: string;
  description: string;
}

const BOTTLENECKS: Bottleneck[] = [
  {
    id: 'paralysis',
    label: '실행 마비 & 시간 부족',
    description: '자료는 많이 모았는데 오늘 당장 무엇을 해야 할지 모르겠음'
  },
  {
    id: 'zero_sales',
    label: '조회수는 나오나 결제 0건',
    description: '팔로워/뷰는 생기는데 실제 지갑을 여는 고객이 없음 (알고리즘 숙취)'
  },
  {
    id: 'tech_barrier',
    label: '비개발자의 기술 장벽',
    description: '외주 개발비 2,000만 원 없이 웹서비스와 결제창을 직접 못 만들겠음'
  },
  {
    id: 'career_dilemma',
    label: '퇴사 vs 존버 의사결정',
    description: '안락한 월급을 버리고 나갔을 때 생존할 수 있을지 손익 계산이 안 됨'
  }
];

// 3. 맞춤 처방 결과 데이터 인터페이스
interface PrescriptionResult {
  diagnosisName: string;
  severity: '긴급 조치' | '방향성 재설정' | '핵심 훈련' | '스케일업';
  severityColor: string;
  rootCause: string;
  actionRoutine: {
    title: string;
    duration: string;
    steps: string[];
    aiPromptSnippet: string;
  };
  recommendedKit: {
    title: string;
    desc: string;
    ctaLabel: string;
    ctaHref: string;
  };
}

export default function AIPrescriptionTrainer() {
  const [selectedStage, setSelectedStage] = useState<string>('worker');
  const [selectedBottleneck, setSelectedBottleneck] = useState<string>('zero_sales');

  // 복합 처방 로직 계산
  const getPrescription = (stage: string, bottleneck: string): PrescriptionResult => {
    // 1. 조회수 대비 결제 0건
    if (bottleneck === 'zero_sales') {
      return {
        diagnosisName: '알고리즘 숙취 및 결제 퍼널 단절 상태',
        severity: '긴급 조치',
        severityColor: 'bg-rose-50 text-rose-600 border-rose-200',
        rootCause: '대중적인 밈이나 자극적인 썰로 유입된 구경꾼 20만 명이 내 진짜 제품 글을 0.5초 만에 넘기면서, 메타 추천 엔진이 계정 품질 점수를 깎아 유입이 -92% 추락한 전형적인 증상입니다. 광고 소재와 랜딩 첫 카드의 1:1 소오름 매칭이 완전히 부재한 상태입니다.',
        actionRoutine: {
          title: '30분 AI 퍼널 심폐소생 훈련',
          duration: '30분 / 즉시 실행',
          steps: [
            '1단계: 상단 프로필 피드 9개를 [전문성 30% + 고객 결핍 50% + 행동 유도 20%] 공식으로 재배치',
            '2단계: AI에게 "내 랜딩 첫 문장과 1:1로 일치하는 메타 광고 후킹 장면 3종" 도출 지시',
            '3단계: 조회수 10만짜리 밈 포스팅 중단하고 1,000~3,000뷰 고순도 결제 타깃 글 1편 발행'
          ],
          aiPromptSnippet: '"너는 Meta Certified 미디어 플래닝 전문가야. 내 타깃 고객이 겪는 3대 결핍을 정의하고, 인스타그램/스레드에서 1,000뷰만 나와도 결제 전환율 4.49%를 뽑아내는 첫 줄 후킹 카피 5종을 작성해줘."'
        },
        recommendedKit: {
          title: '스레드 500만 뷰 계정 정상화 & 메타 광고 실전 무료 자료집',
          desc: '10분 정상화 체크리스트와 결제율 8.6% 소오름 매칭 세팅 매뉴얼(PDF)',
          ctaLabel: '내 맞춤 처방 자료 무료 받기',
          ctaHref: '#lead-magnet'
        }
      };
    }

    // 2. 비개발자의 기술 장벽
    if (bottleneck === 'tech_barrier') {
      return {
        diagnosisName: '외주 의존형 기술 공포 증후군',
        severity: '핵심 훈련',
        severityColor: 'bg-blue-50 text-[#3182f6] border-blue-200',
        rootCause: '외주 개발사에 2,000만 원을 주거나 1년간 코딩 기초를 배워야 서비스를 만들 수 있다는 것은 낡은 상식입니다. 현대 웹 생태계에서는 AI 코딩 도구(Cursor/Claude Code)와 Cloudflare Pages, 서버리스 DB를 연결하면 비개발자도 3일 만에 상용 결제 웹서비스를 직접 띄울 수 있습니다.',
        actionRoutine: {
          title: '3일 완성 월 $42 1인 풀스택 셋업 훈련',
          duration: '1일 1시간 / 3일 코스',
          steps: [
            '1일차: Claude Code를 활용해 Next.js 14 미니멀 랜딩페이지 UI 생성 (1시간)',
            '2일차: Cloudflare Pages 무료 정적 배포 파이프라인 연결 및 도메인 바인딩 (30분)',
            '3일차: 간편결제 모듈 및 이메일 자동 발송 웹훅 연결 (1.5시간)'
          ],
          aiPromptSnippet: '"Next.js 14 App Router 기반으로, 1인 창업가가 월 $42 이하로 운영할 수 있는 서버리스 결제 완료 웹훅 처리 보일러플레이트 코드를 작성해줘."'
        },
        recommendedKit: {
          title: '월 $42 1인 풀스택 완성형 보일러플레이트 & 템플릿',
          desc: 'Next.js 14 + Cloudflare + 결제 연동 검증된 상용 소스코드 툴킷',
          ctaLabel: '1인 인프라 템플릿 확인하기',
          ctaHref: '#solutions'
        }
      };
    }

    // 3. 실행 마비 & 시간 부족
    if (bottleneck === 'paralysis') {
      return {
        diagnosisName: '자료 과부하형 실행 지체 증후군',
        severity: '방향성 재설정',
        severityColor: 'bg-amber-50 text-amber-700 border-amber-200',
        rootCause: '수많은 무료 PDF, 유튜브 강의, 프롬프트를 폴더에 쌓아두기만 하고 정작 "내 본체 프로덕트"를 1줄도 만들지 못하는 전형적인 증상입니다. 정보가 부족한 게 아니라, 내 눈높이에 맞는 1일 1과제 훈련 루틴이 없기 때문입니다.',
        actionRoutine: {
          title: '하루 20분 AI 오케스트레이션 스프린트',
          duration: '매일 20분 / 7일 챌린지',
          steps: [
            '1일차: 기획서 작성 대신, AI에게 내 전문성 기반 1페이지 오퍼(Offer) 카피 1장 추출 지시',
            '2일차: 시장 검증용 무료 가이드북 1페이지 요약본 작성 및 배포 폼 세팅',
            '3일차: 스레드에 내 실패 복기 썰 1편 올리고 댓글 반응 및 사전 예약자 모객'
          ],
          aiPromptSnippet: '"내 현재 경력은 [내 본업/전문성]이야. 시장에서 3일 안에 팔아볼 수 있는 가장 가벼운 1인 디지털 프로덕트 아이디어 3개와 각각의 타깃 결핍을 1줄로 정리해줘."'
        },
        recommendedKit: {
          title: '14일 액션 챌린지: 1인 프로덕트 런칭 파이프라인',
          desc: '기획부터 첫 결제 발생까지 매일 1개 과제만 끝내는 강제 실행 루틴',
          ctaLabel: '실전 솔루션 라인업 보기',
          ctaHref: '#solutions'
        }
      };
    }

    // 4. 퇴사 vs 존버 의사결정
    return {
      diagnosisName: '손익 불투명형 커리어 진로 방황',
      severity: '스케일업',
      severityColor: 'bg-purple-50 text-purple-700 border-purple-200',
      rootCause: '공기업이나 대기업의 안락한 월급 테두리를 벗어나는 것은 용기가 필요하지만, 감정적으로 무작정 퇴사하면 야생에서 피를 흘리게 됩니다. 월 고정비, 생존 자금(Runway), 1인 비즈니스의 손익분기점(BEP)을 엑셀로 한 치의 오차 없이 시뮬레이션해야 안전한 전환이 가능합니다.',
      actionRoutine: {
        title: '90일 퇴사 안전마진 손익 계산 훈련',
        duration: '1시간 심층 시뮬레이션',
        steps: [
          '1단계: 월 최소 생존 생활비 및 12개월 Runway 비상금 계좌 분리',
          '2단계: 회사 다니면서 월 $42 인프라 위에서 첫 1원 유료 결제 파이프라인 사전 구축',
          '3단계: 퇴사 후 90일간 주차별 핵심 마일스톤(Action Blueprint) 확정'
        ],
        aiPromptSnippet: '"공기업/대기업 퇴사 후 1인 창업으로 생존하기 위한 12개월 손익분기점 계산 시뮬레이션 템플릿을 만들어줘. 월 고정비와 초기 3개월 매출 0원 시나리오를 반영해줘."'
      },
      recommendedKit: {
        title: 'aizaler 1:1 커리어 의사결정 연구소 (50분 화상 세션)',
        desc: '공기업·주재원 퇴사 파운더와 1:1로 만나 냉정하게 계산하는 90일 실행 블루프린트',
        ctaLabel: '커리어 세션 알아보기',
        ctaHref: '/career'
      }
    };
  };

  const prescription = getPrescription(selectedStage, selectedBottleneck);

  return (
    <div className="rounded-3xl bg-white border border-black/[0.08] shadow-sm p-6 sm:p-10 space-y-8">
      {/* ── 헤더: 진단기 취지 ── */}
      <div className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f3ff] text-[#3182f6] text-xs font-bold">
          <Sparkle size={15} weight="fill" />
          AI 맞춤 진단 & 실전 처방 훈련기
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#191f28] tracking-tight leading-snug">
          "무료 자료는 많은데, 내 상황엔 무엇을 어떻게 해야 할까?"<br className="hidden sm:inline" />
          <span className="text-[#3182f6]"> 1분 만에 진단하고 오늘 당장 실행할 처방을 받으세요.</span>
        </h2>
        <p className="text-xs sm:text-sm text-[#4e5968] leading-relaxed">
          다운받아 폴더에 묵혀두는 무의미한 자료는 이제 그만. 당신의 현재 단계와 가장 답답한 병목을 선택하면,
          Meta 공인 전문가의 실측 데이터에 기반한 <b>맞춤 진단과 오늘 당장 실행할 30분 AI 훈련 루틴</b>을 처방합니다.
        </p>
      </div>

      {/* ── 선택 영역 ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
        {/* 1단계: 내 현재 상황 선택 (6열) */}
        <div className="lg:col-span-6 space-y-3">
          <label className="text-xs font-bold text-[#191f28] uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-5 h-5 rounded-full bg-[#191f28] text-white text-[11px] font-bold flex items-center justify-center">1</span>
            내 현재 상황을 선택하세요
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {STAGES.map((s) => {
              const Icon = s.icon;
              const isSelected = selectedStage === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setSelectedStage(s.id)}
                  className={`p-3.5 rounded-2xl border text-left transition-all tactile-btn flex flex-col justify-between space-y-2 ${
                    isSelected
                      ? 'bg-[#e8f3ff] border-[#3182f6] shadow-xs ring-1 ring-[#3182f6]'
                      : 'bg-[#f9fafb] border-black/[0.06] hover:bg-white hover:border-black/[0.12]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${isSelected ? 'bg-[#3182f6] text-white' : 'bg-white text-[#4e5968] border border-black/[0.04]'}`}>
                      <Icon size={18} weight="duotone" />
                    </div>
                    <span className="text-[10px] font-bold text-[#8b95a1]">{s.tag}</span>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-[#191f28]">{s.title}</div>
                    <div className="text-[11px] text-[#8b95a1] line-clamp-1 leading-normal">{s.subtitle}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2단계: 가장 답답한 병목 선택 (6열) */}
        <div className="lg:col-span-6 space-y-3">
          <label className="text-xs font-bold text-[#191f28] uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-5 h-5 rounded-full bg-[#191f28] text-white text-[11px] font-bold flex items-center justify-center">2</span>
            지금 가장 해결하고 싶은 병목은?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {BOTTLENECKS.map((b) => {
              const isSelected = selectedBottleneck === b.id;
              return (
                <button
                  key={b.id}
                  onClick={() => setSelectedBottleneck(b.id)}
                  className={`p-3.5 rounded-2xl border text-left transition-all tactile-btn flex flex-col justify-between space-y-2 ${
                    isSelected
                      ? 'bg-[#e8f3ff] border-[#3182f6] shadow-xs ring-1 ring-[#3182f6]'
                      : 'bg-[#f9fafb] border-black/[0.06] hover:bg-white hover:border-black/[0.12]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <Target size={18} weight={isSelected ? 'fill' : 'regular'} className={isSelected ? 'text-[#3182f6]' : 'text-[#8b95a1]'} />
                    {isSelected && <CheckCircle size={16} weight="fill" className="text-[#3182f6]" />}
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-[#191f28]">{b.label}</div>
                    <div className="text-[11px] text-[#8b95a1] line-clamp-2 leading-normal">{b.description}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── 3단계: 맞춤 진단 & 처방 결과 리포트 (Card) ── */}
      <div className="rounded-2xl bg-[#f9fafb] border border-black/[0.06] p-6 sm:p-8 space-y-6">
        {/* 진단 타이틀 바 */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-black/[0.06]">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${prescription.severityColor}`}>
                {prescription.severity}
              </span>
              <span className="text-xs font-bold text-[#8b95a1] uppercase tracking-wider">
                1:1 맞춤 정밀 처방
              </span>
            </div>
            <h3 className="text-lg sm:text-2xl font-black text-[#191f28]">
              {prescription.diagnosisName}
            </h3>
          </div>
          <div className="text-xs font-mono font-bold text-[#3182f6] shrink-0">
            실시간 진단 완료 ➔ 처방전 발행
          </div>
        </div>

        {/* 원인 분석 */}
        <div className="space-y-2">
          <div className="text-xs font-bold text-[#191f28] flex items-center gap-1.5">
            <WarningCircle size={16} weight="fill" className="text-rose-500" />
            왜 이런 문제가 발생하고 있을까요? (원인 분석)
          </div>
          <p className="text-xs sm:text-sm text-[#4e5968] leading-relaxed bg-white p-4 rounded-xl border border-black/[0.04]">
            {prescription.rootCause}
          </p>
        </div>

        {/* 처방 1: 오늘 당장 실행할 AI 실전 훈련 루틴 */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="text-xs font-bold text-[#191f28] flex items-center gap-1.5">
              <Lightning size={16} weight="fill" className="text-amber-500" />
              오늘 당장 실행할 AI 실전 훈련 루틴: {prescription.actionRoutine.title}
            </div>
            <span className="text-[11px] font-bold text-[#3182f6] px-2 py-0.5 rounded-full bg-[#e8f3ff]">
              {prescription.actionRoutine.duration}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* 스텝 리스트 (7열) */}
            <div className="md:col-span-7 bg-white p-4 sm:p-5 rounded-xl border border-black/[0.04] space-y-2.5">
              <div className="text-xs font-bold text-[#8b95a1] uppercase">실행 3단계 프로토콜</div>
              {prescription.actionRoutine.steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#191f28] font-medium leading-relaxed">
                  <CheckCircle size={16} weight="fill" className="text-[#3182f6] shrink-0 mt-0.5" />
                  <span>{step}</span>
                </div>
              ))}
            </div>

            {/* AI 즉시 실행 프롬프트 스니펫 (5열) */}
            <div className="md:col-span-5 bg-[#191f28] text-white p-4 sm:p-5 rounded-xl space-y-2 flex flex-col justify-between">
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs text-[#8b95a1] font-mono">
                  <span className="flex items-center gap-1 text-gray-300">
                    <TerminalWindow size={14} /> 복사해서 쓸 프롬프트
                  </span>
                  <span className="text-[10px] text-blue-400">Claude / ChatGPT</span>
                </div>
                <div className="text-xs font-mono text-gray-300 bg-white/5 p-3 rounded-lg border border-white/10 leading-relaxed max-h-32 overflow-y-auto">
                  {prescription.actionRoutine.aiPromptSnippet}
                </div>
              </div>
              <div className="text-[10px] text-gray-400 pt-1">
                * 프롬프트에 내 상황만 채워 넣어 바로 실행하세요.
              </div>
            </div>
          </div>
        </div>

        {/* 처방 2 & 3: 내 상황 맞춤 무료 키트 및 심화 솔루션 연결 */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#e8f3ff] to-blue-50 border border-[#bfdbfe] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#3182f6] px-2 py-0.5 rounded-full bg-white border border-[#bfdbfe]">
              내 상황 맞춤 솔루션
            </span>
            <h4 className="text-sm sm:text-base font-black text-[#191f28]">
              {prescription.recommendedKit.title}
            </h4>
            <p className="text-xs text-[#4e5968]">
              {prescription.recommendedKit.desc}
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2 w-full sm:w-auto">
            {prescription.recommendedKit.ctaHref.startsWith('/') ? (
              <Link
                href={prescription.recommendedKit.ctaHref}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#3182f6] hover:bg-[#1b64da] text-white font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-1.5 transition-colors shadow-xs"
              >
                <span>{prescription.recommendedKit.ctaLabel}</span>
                <ArrowRight size={14} weight="bold" />
              </Link>
            ) : (
              <a
                href={prescription.recommendedKit.ctaHref}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#3182f6] hover:bg-[#1b64da] text-white font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-1.5 transition-colors shadow-xs"
              >
                <DownloadSimple size={15} weight="bold" />
                <span>{prescription.recommendedKit.ctaLabel}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
