'use client';

import React from 'react';
import Image from 'next/image';
import ClaimEvidenceBlock, { ClaimEvidenceItem } from './ClaimEvidenceBlock';
import SectionConnector from './SectionConnector';

/**
 * LongFormDetailPage — 오픈 단일 컬럼 한국어 설득형 상세페이지 기본 템플릿
 *
 * 조판 및 엔지니어링 원칙 (Product 6 정본 품질 매칭):
 * 1. 중앙 정렬 기본 (CENTRAL TEXT-CENTER DEFAULT):
 *    헤드라인, 리드문, 본문 마케팅 카피, 실물 증빙 캡션, CTA 버튼 모두 모바일과 데스크톱 공히
 *    `text-center mx-auto`를 기본값으로 엄수합니다.
 *    (실제 원본 스크린샷 내부 글자, 데이터 테이블, 코드/로그 블록을 제외하고 임의의 템플릿 좌측 정렬 배제)
 * 2. 이미지 우선 위계 (IMAGE-FIRST HIERARCHY):
 *    한 비트의 서사 구조: [짧은 중앙 후크 문구 (1~2줄)] -> [화면을 압도하는 맞춤형 비주얼/실물 증빙] -> [최소한의 지지 카피].
 *    메인 비주얼 이전에 지루하게 긴 설명 문단을 늘어놓지 않습니다.
 * 3. 선택적 수직 내러티브 커넥터 (OPTIONAL IN-CONTEXT SECTION CONNECTOR):
 *    모든 섹션 경계에 기계적으로 삽입하지 않고, 서사적 단절이나 시선 전환이 필요한 핵심 지점
 *    (기본 2개소: 문제 제기 후 패러다임 전환 지점, 솔루션 제시 후 실물 증빙 연결 지점)에만
 *    정밀한 1px 수직 유도선(SectionConnector)을 배치합니다. `connectorAfterSectionIds` prop으로 안정적 제어가 가능합니다.
 * 4. 브랜드 컬러 & 텍스트 대비 완전 보장:
 *    범용 상세페이지의 기본 테마는 라이트('light') 및 기본 액센트('#fc1c49')이며,
 *    라이트/다크 테마 전환 시 모든 마케팅 텍스트가 배경 대비 선명하게 가독성을 확보합니다 (화이트 텍스트 오버레이 버그 차단).
 *    기능적 버튼 텍스트(`text-white`) 및 원본 이미지 고유 색상만 온전히 보존합니다.
 * 5. 1행 1열 엄수 & 복합 일러스트레이션 무대 예외:
 *    비디오, 쇼케이스, 매출 증빙은 1행 1열 단독 배치합니다.
 * 6. 실제 GIF 기본 재생 & prefers-reduced-motion 스틸 폴백:
 *    모바일/데스크톱 모두 기본 GIF를 재생하며 모션 감축 환경에서만 정적 스틸 이미지로 우아하게 폴백합니다.
 * 7. 게이트 09 실물 증빙 계약:
 *    날조된 숫자나 텍스트 전용 스탯 카드를 일절 배치하지 않으며,
 *    실제 검증된 실물 이미지 증빙(ClaimEvidenceBlock)만을 1:1로 렌더링합니다.
 */

export interface LongFormDetailPageProps {
  productTitle?: string;
  tagline?: string;
  hookStillSrc?: string;
  hookGifSrc?: string;
  /**
   * 브랜드 테마: 'light' | 'dark' (기본값: 'light' — 범용 오픈 라이트 기본)
   */
  theme?: 'light' | 'dark';
  /**
   * 사용자 브랜드 액센트 컬러 (기본: '#fc1c49' — 범용 레드 기본)
   */
  accentColor?: string;
  /**
   * 1px 수직 유도선(SectionConnector)을 배치할 섹션 ID 목록
   * 기본값: 서사적 맥락 전환이 일어나는 2개 지점만 선택 배치
   * - 'section-02-problem': 수작업 마찰 공감 후 패러다임 전환(Insight)으로 연결
   * - 'section-04-solution': 구체적 솔루션 아키텍처 제시 후 실전 로드맵 및 실물 증빙(Workflow/Proof)으로 연결
   */
  connectorAfterSectionIds?: string[];
  /**
   * 1:1 실물 이미지 증빙 목록 (게이트 09 준수: 텍스트 전용 스탯 카드 금지, 날조 수치 금지)
   */
  claims?: ClaimEvidenceItem[];
  onCtaClick?: () => void;
}

export default function LongFormDetailPage({
  productTitle = 'SNS FULL AUTO SYSTEM',
  tagline = '4대 독립 자동화 패키지 구성 및 단계별 가이드',
  hookStillSrc = '/assets/hook/introduce-hook.png',
  hookGifSrc = '/assets/hook/introduce-hook.gif',
  theme = 'light',
  accentColor = '#fc1c49',
  connectorAfterSectionIds = ['section-02-problem', 'section-04-solution'],
  claims = [],
  onCtaClick,
}: LongFormDetailPageProps) {
  const isDark = theme === 'dark';

  // 특정 섹션 뒤에 SectionConnector를 선택적으로 렌더링하는 헬퍼
  const renderConnectorIf = (sectionId: string) => {
    if (!connectorAfterSectionIds.includes(sectionId)) return null;
    return <SectionConnector accentColor={accentColor} />;
  };

  return (
    <main
      className={`min-h-screen w-full antialiased ${
        isDark ? 'bg-[#171b1f] text-[#f7f8f5]' : 'bg-[#fafafa] text-[#18181b]'
      }`}
    >
      {/* 760px 오픈 단일 컬럼 메인 캔버스: 장식용 테두리 상자 배제, 넉넉한 여백 배치 */}
      <div className="mx-auto w-full max-w-[760px] px-5 sm:px-8 py-16 sm:py-24 space-y-16 sm:space-y-24 text-center">

        {/* ── SECTION 01: Hook & Question (IMAGE-FIRST: 짧은 훅 -> 압도적 비주얼 -> 지지 카피) ── */}
        <section id="section-01-hook" aria-label="문제 제기 및 후크" className="relative mx-auto text-center">
          <h1 className="sr-only">
            {productTitle} 상세 안내 — AI로 글은 쓰는데 왜 일은 그대로일까요?
          </h1>

          {/* 1. 짧은 중앙 정렬 리드 카피 */}
          <p
            className={`mx-auto text-[1.0625rem] sm:text-[1.375rem] font-bold tracking-tight ${
              isDark ? 'text-zinc-400' : 'text-zinc-600'
            }`}
          >
            AI 시대를 마주한 모두의 질문
          </p>

          <h2
            className={`mt-3 mx-auto max-w-[640px] text-[1.875rem] sm:text-[3.125rem] font-black leading-[1.28] tracking-[-0.035em] break-keep ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}
          >
            글은 AI가 쓰는데,{' '}
            <br className="hidden sm:inline" />
            <span style={{ color: accentColor }}>
              왜 일은 그대로일까요?
            </span>
          </h2>

          {/* 2. 주 비주얼 (1행 1열 단독 배치, 캔버스 최우선 전개) */}
          <div className="relative mx-auto mt-8 sm:mt-10 w-full max-w-[760px] overflow-hidden rounded-2xl shadow-2xl">
            <picture>
              <source srcSet={hookStillSrc} media="(prefers-reduced-motion: reduce)" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={hookGifSrc}
                alt="AI로 글은 쓰는데 왜 일은 그대로일까요? 시각 배너"
                className="block mx-auto h-auto w-full object-cover"
                loading="eager"
              />
            </picture>
          </div>

          {/* 3. 최소한의 중앙 정렬 지지 카피 */}
          <p
            className={`mx-auto mt-6 max-w-[580px] text-[1rem] sm:text-[1.25rem] font-medium tracking-tight break-keep leading-relaxed [overflow-wrap:anywhere] ${
              isDark ? 'text-zinc-300' : 'text-zinc-600'
            }`}
          >
            글 한 편을 올리기 위해,{' '}
            <br className="sm:hidden" />
            <span className="whitespace-nowrap">오늘도 화면 앞을</span> 지키고 계셨습니까?
          </p>
        </section>

        {/* 선택적 수직 서사 연결선 (기본 비활성) */}
        {renderConnectorIf('section-01-hook')}

        {/* ── SECTION 02: Empathy & Friction (수작업 마찰 공감) ── */}
        <section id="section-02-problem" aria-label="반복 작업의 마찰 현실 공감" className="relative mx-auto text-center">
          <p
            className={`mx-auto text-[1.0625rem] sm:text-[1.375rem] font-bold tracking-tight ${
              isDark ? 'text-zinc-400' : 'text-zinc-600'
            }`}
          >
            도구가 늘어날수록 커지는 피로
          </p>

          <h2
            className={`mt-3 mx-auto max-w-[640px] text-[1.875rem] sm:text-[3.125rem] font-black leading-[1.28] tracking-[-0.035em] break-keep ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}
          >
            복사하고, 옮기고, 붙여넣고.{' '}
            <br className="hidden sm:inline" />
            <span className="relative inline-block mt-1">
              <span className={`relative z-10 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                반복은 여전히 내 몫입니다.
              </span>
              <span
                aria-hidden="true"
                className="absolute bottom-1 left-[-4px] right-[-4px] h-[36%] rounded-xs -z-0 opacity-25"
                style={{ backgroundColor: accentColor }}
              />
            </span>
          </h2>

          {/* 주 비주얼: 노트북 앞에서 수동 작업을 반복하는 마스코트 3D 에셋 */}
          <div className="mx-auto mt-8 sm:mt-10 flex justify-center">
            <div className="relative w-[220px] sm:w-[280px] aspect-square">
              <Image
                src="/assets/mascot/mascot-laptop-work.webp"
                alt="노트북 앞에서 수동 작업을 반복하는 마스코트"
                fill
                sizes="(max-width: 640px) 220px, 280px"
                className="object-contain filter drop-shadow-[0_8px_24px_rgba(0,0,0,0.55)]"
              />
            </div>
          </div>

          <div
            className={`mx-auto mt-6 max-w-[600px] text-[1rem] sm:text-[1.375rem] font-medium leading-[1.65] break-keep [overflow-wrap:anywhere] ${
              isDark ? 'text-zinc-300' : 'text-zinc-700'
            }`}
          >
            <p className="space-y-1 text-center">
              <span className="block">
                프롬프트로 글을 뽑아도, 에디터 접속과 이미지 삽입, 서식 정리까지 이어집니다.
              </span>
              <span className="block mt-2 font-bold" style={{ color: accentColor }}>
                결국 사람이 화면 앞을 끝까지 지켜야 합니다.
              </span>
            </p>
          </div>
        </section>

        {/* ── 전환 1: 문제 공감 ↔ 해결 패러다임 전환 간 정밀 수직 유도선 (기본 활성) ── */}
        {renderConnectorIf('section-02-problem')}

        {/* ── SECTION 03: Insight & Shift (통찰 및 패러다임 전환) ── */}
        <section id="section-03-insight" aria-label="통찰 및 패러다임 전환" className="relative mx-auto text-center">
          <p
            className={`mx-auto text-[1.0625rem] sm:text-[1.375rem] font-bold tracking-tight ${
              isDark ? 'text-zinc-400' : 'text-zinc-600'
            }`}
          >
            단편적인 도구와 시스템의 차이
          </p>

          <h2
            className={`mt-3 mx-auto max-w-[640px] text-[1.875rem] sm:text-[3.125rem] font-black leading-[1.28] tracking-[-0.035em] break-keep ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}
          >
            글 한 편보다,{' '}
            <br className="hidden sm:inline" />
            <span style={{ color: accentColor }}>
              이어지는 흐름이 필요합니다.
            </span>
          </h2>

          {/* 중앙 집중 비교 블록 (text-center 기본 준수) */}
          <div className="mx-auto mt-8 sm:mt-10 max-w-[560px] py-4 text-center">
            <div className="space-y-4">
              <div
                className={`rounded-2xl border p-5 text-center ${
                  isDark ? 'border-white/10 bg-white/[0.03]' : 'border-zinc-200 bg-zinc-50 shadow-xs'
                }`}
              >
                <span className={`text-[0.9375rem] sm:text-[1.125rem] font-bold ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  파이프라인 없는 단순 생성
                </span>
                <p className={`mt-1 text-[1.75rem] sm:text-[2.25rem] font-black font-mono tracking-tight ${isDark ? 'text-white/40' : 'text-zinc-400'}`}>
                  0 × 100 = 0
                </p>
                <span className={`mt-1 inline-block text-[0.8125rem] sm:text-[0.9375rem] font-medium ${isDark ? 'text-white/40' : 'text-zinc-500'}`}>
                  매번 제자리에서 반복
                </span>
              </div>

              <div
                className={`rounded-2xl border p-5 text-center ${
                  isDark ? 'border-white/15 bg-white/[0.05]' : 'border-zinc-300 bg-zinc-50 shadow-xs'
                }`}
                style={{
                  borderColor: isDark ? 'rgba(252, 28, 73, 0.4)' : 'rgba(252, 28, 73, 0.25)',
                }}
              >
                <span className="text-[0.9375rem] sm:text-[1.125rem] font-bold" style={{ color: accentColor }}>
                  완성된 자동 발행 파이프라인
                </span>
                <p className="mt-1 text-[2rem] sm:text-[2.5rem] font-black font-mono tracking-tight" style={{ color: accentColor }}>
                  1 × 100 = 100
                </p>
                <span className="mt-1 inline-block text-[0.8125rem] sm:text-[0.9375rem] font-bold" style={{ color: accentColor }}>
                  자산으로 쌓이는 온전한 축적
                </span>
              </div>
            </div>

            <p
              className={`mt-6 text-center text-[0.9375rem] sm:text-[1.1875rem] font-medium leading-[1.65] break-keep [overflow-wrap:anywhere] ${
                isDark ? 'text-zinc-300' : 'text-zinc-700'
              }`}
            >
              콘텐츠를 아무리 많이 만들어도,{' '}
              <br className="sm:hidden" />
              전달하는 흐름이 없으면 일은 결코 줄어들지 않습니다.
            </p>
          </div>

          {/* 상징 에셋: 3D 코인 링 (내추럴 골드/오렌지 고유 색상 보존) */}
          <div className="mx-auto mt-8 flex justify-center">
            <div className="relative w-[150px] sm:w-[180px] aspect-square">
              <Image
                src="/assets/icons_3d/icon-3d-coin-ring.webp"
                alt="무한한 흐름으로 확장되는 3D 링 에셋"
                fill
                sizes="(max-width: 640px) 150px, 180px"
                className="object-contain filter drop-shadow-[0_8px_20px_rgba(0,0,0,0.6)]"
              />
            </div>
          </div>
        </section>

        {/* 선택적 수직 서사 연결선 (기본 비활성) */}
        {renderConnectorIf('section-03-insight')}

        {/* ── SECTION 04: Concrete Solution (구체적 솔루션) ── */}
        <section id="section-04-solution" aria-label="구체적 4대 파이프라인 솔루션" className="relative mx-auto text-center">
          <a id="solution" className="absolute -top-12 block h-0 w-0" aria-hidden="true" />

          <p
            className={`mx-auto text-[1.0625rem] sm:text-[1.375rem] font-bold tracking-tight ${
              isDark ? 'text-zinc-400' : 'text-zinc-600'
            }`}
          >
            해결의 핵심 구조
          </p>

          <h2
            className={`mt-3 mx-auto max-w-[640px] text-[1.875rem] sm:text-[3.125rem] font-black leading-[1.28] tracking-[-0.035em] break-keep ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}
          >
            글을 만드는 일에서,{' '}
            <br className="hidden sm:inline" />
            <span style={{ color: accentColor }}>
              발행하는 흐름까지.
            </span>
          </h2>

          <p
            className={`mx-auto mt-4 max-w-[600px] text-[1rem] sm:text-[1.375rem] font-medium leading-[1.6] break-keep [overflow-wrap:anywhere] ${
              isDark ? 'text-zinc-300' : 'text-zinc-700'
            }`}
          >
            따로 놀던 수작업을 하나의 파이프라인으로 매끄럽게 연결합니다.
          </p>

          {/* 중앙 맥북 프론트 목업 (1행 1열 단독 주 비주얼) */}
          <div className="mx-auto mt-8 sm:mt-12 flex justify-center max-w-[480px]">
            <div className="relative w-full aspect-[1536/1024]">
              {/* 접지 베이스 섀도우 */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-[85%] left-1/2 -translate-x-1/2 -translate-y-1/2 h-3.5 w-[86%] rounded-full bg-black/90 blur-[4px]"
              />
              <Image
                src="/assets/mockups/mockup-macbook-front.webp"
                alt="작업 흐름을 정리하는 노트북 화면"
                fill
                sizes="(max-width: 640px) 90vw, 480px"
                className="relative z-10 object-contain filter drop-shadow-[0_12px_28px_rgba(0,0,0,0.7)]"
              />
            </div>
          </div>

          {/* 4대 오픈 단일 컬럼 수직 블록: 중앙 정렬 기본 준수 */}
          <div
            className={`mx-auto mt-10 max-w-[560px] divide-y text-center ${
              isDark ? 'divide-white/10' : 'divide-zinc-200'
            }`}
          >
            {[
              {
                label: '블로그 자동화',
                desc: '주제 탐색부터 고품질 원고 및 썸네일 자동 조판.',
              },
              {
                label: '브라우저 직접 연동',
                desc: '기존 로그인 세션을 활용해 스마트에디터 ONE 안전 발행.',
              },
              {
                label: 'Threads 연계 확산',
                desc: '블로그 원고를 화두 숏훅과 요약 해설로 재가공하여 동시 발행.',
              },
              {
                label: '상세페이지 시스템',
                desc: '방문자를 고객으로 전환하는 설득형 롱폼 조판 체계 완비.',
              },
            ].map((item, idx) => (
              <div key={idx} className="py-6 first:pt-0 last:pb-0 text-center">
                <h3 className="text-[1.125rem] sm:text-[1.375rem] font-bold" style={{ color: accentColor }}>
                  {item.label}
                </h3>
                <p
                  className={`mt-2 text-[1rem] sm:text-[1.1875rem] font-medium leading-[1.6] break-keep [overflow-wrap:anywhere] ${
                    isDark ? 'text-zinc-300' : 'text-zinc-800'
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 전환 2: 솔루션 구조 제시 ↔ 실전 로드맵/증빙 연결 간 정밀 수직 유도선 (기본 활성) ── */}
        {renderConnectorIf('section-04-solution')}

        {/* ── SECTION 05: Tangible Workflow (4단계 실전 셋업 로드맵) ── */}
        <section id="section-05-workflow" aria-label="4단계 실전 셋업 로드맵" className="relative mx-auto text-center">
          <p
            className={`mx-auto text-[1.0625rem] sm:text-[1.375rem] font-bold tracking-tight ${
              isDark ? 'text-zinc-400' : 'text-zinc-600'
            }`}
          >
            내 작업에 맞춰, 한 단계씩
          </p>

          <h2
            className={`mt-3 mx-auto max-w-[640px] text-[1.875rem] sm:text-[3.125rem] font-black leading-[1.28] tracking-[-0.035em] break-keep ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}
          >
            시작은 작게.{' '}
            <br className="hidden sm:inline" />
            <span style={{ color: accentColor }}>
              흐름은 차근차근.
            </span>
          </h2>

          {/* 중앙 상징 에셋 */}
          <div className="mx-auto mt-8 sm:mt-10 flex justify-center">
            <div className="relative w-[140px] sm:w-[160px] aspect-square">
              <Image
                src="/assets/icons_3d/icon-3d-store-atm.webp"
                alt="단계별 흐름을 완성하는 상징 에셋"
                fill
                sizes="(max-width: 640px) 140px, 160px"
                className="object-contain filter drop-shadow-[0_8px_20px_rgba(0,0,0,0.6)]"
              />
            </div>
          </div>

          {/* 4단계 중앙 정렬 로드맵 */}
          <div
            className={`mx-auto mt-10 max-w-[560px] divide-y text-center ${
              isDark ? 'divide-white/10' : 'divide-zinc-200'
            }`}
          >
            {[
              {
                num: '1',
                title: '환경을 준비합니다',
                desc: '필요한 라이브러리와 계정 연결 상태를 사전에 확인합니다.',
              },
              {
                num: '2',
                title: '초안을 자동 조판합니다',
                desc: '주제와 품질 기준을 정하고 검증된 가이드에 따라 원고를 생성합니다.',
              },
              {
                num: '3',
                title: '내용을 검토합니다',
                desc: '문구, 이미지 배치, 채널별 포맷 적합성을 확인합니다.',
              },
              {
                num: '4',
                title: '발행하고 확장합니다',
                desc: '블로그와 스레드로 안전하게 동시 배포하며 24시간 파이프라인을 운영합니다.',
              },
            ].map((item) => (
              <div key={item.num} className="py-6 first:pt-0 last:pb-0 text-center">
                <span className="inline-block text-[0.875rem] sm:text-[1rem] font-bold" style={{ color: accentColor }}>
                  단계 {item.num}
                </span>
                <h3
                  className={`mt-1 text-[1.125rem] sm:text-[1.375rem] font-bold ${
                    isDark ? 'text-white' : 'text-zinc-900'
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`mt-2 text-[0.9375rem] sm:text-[1.125rem] font-medium leading-[1.6] break-keep [overflow-wrap:anywhere] ${
                    isDark ? 'text-zinc-300' : 'text-zinc-700'
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 선택적 수직 서사 연결선 (기본 비활성) */}
        {renderConnectorIf('section-05-workflow')}

        {/* ── SECTION 06: Objection Resolution (정직한 사전 확인 안내) ── */}
        <section id="section-06-objection" aria-label="솔직한 사전 확인 안내" className="relative mx-auto text-center">
          <p
            className={`mx-auto text-[1.0625rem] sm:text-[1.375rem] font-bold tracking-tight ${
              isDark ? 'text-zinc-400' : 'text-zinc-600'
            }`}
          >
            시작 전에,
          </p>

          <h2
            className={`mt-3 mx-auto max-w-[640px] text-[1.875rem] sm:text-[3.125rem] font-black leading-[1.28] tracking-[-0.035em] break-keep ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}
          >
            이것만 확인하세요.
          </h2>

          <div
            className={`mx-auto mt-10 max-w-[580px] divide-y text-center ${
              isDark ? 'divide-white/10' : 'divide-zinc-200'
            }`}
          >
            {[
              {
                q: '설치 즉시 바로 실행되나요?',
                a: '필요한 의존성 세팅과 소유 계정 설정이 선행되어야 안전하게 기동됩니다.',
              },
              {
                q: '사람 개입 없이 완전히 맡겨도 되나요?',
                a: '완전 무인 실행이 가능하나, 초기 셋업 단계에서는 초안 검토 모드를 권장합니다.',
              },
              {
                q: '내 제품이나 주제에도 적용할 수 있나요?',
                a: '템플릿과 가이드를 내 분야에 맞게 맞춤 정의하여 모든 비즈니스에 확장 가능합니다.',
              },
            ].map((item, i) => (
              <div key={i} className="py-6 first:pt-0 last:pb-0 text-center">
                <h3
                  className={`text-[1.125rem] sm:text-[1.375rem] font-bold leading-snug break-keep [overflow-wrap:anywhere] ${
                    isDark ? 'text-white' : 'text-zinc-900'
                  }`}
                >
                  <span className="mr-2 font-bold" style={{ color: accentColor }}>Q.</span>
                  {item.q}
                </h3>
                <p
                  className={`mt-2.5 mx-auto max-w-[520px] text-[0.9375rem] sm:text-[1.125rem] font-medium leading-[1.65] break-keep [overflow-wrap:anywhere] ${
                    isDark ? 'text-zinc-300' : 'text-zinc-700'
                  }`}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 선택적 수직 서사 연결선 (기본 비활성) */}
        {renderConnectorIf('section-06-objection')}

        {/* ── SECTION 07: Verified Real Evidence & Claims (게이트 09 엄수: 날조 숫자 일체 금지) ── */}
        {claims && claims.length > 0 && (
          <section id="section-07-evidence" aria-label="실제 검증된 실물 원본 증빙" className="relative mx-auto text-center">
            <p
              className={`mx-auto text-[1.0625rem] sm:text-[1.375rem] font-bold tracking-tight ${
                isDark ? 'text-zinc-400' : 'text-zinc-600'
              }`}
            >
              원천 증빙 100% 보존
            </p>

            <h2
              className={`mt-3 mx-auto max-w-[640px] text-[1.875rem] sm:text-[3.125rem] font-black leading-[1.28] tracking-[-0.035em] break-keep ${
                isDark ? 'text-white' : 'text-zinc-900'
              }`}
            >
              실제 검증된 실물 원본 증빙
            </h2>

            <p
              className={`mx-auto mt-4 max-w-[600px] text-[0.9375rem] sm:text-[1.125rem] font-medium leading-[1.6] break-keep [overflow-wrap:anywhere] ${
                isDark ? 'text-zinc-300' : 'text-zinc-600'
              }`}
            >
              임의로 지어낸 통계 카드 대신, 실제 원본 스크린샷과 정산 증빙으로 투명하게 대조합니다.
            </p>

            {/* 1행 1열 단독 증빙 배치 (중앙 정렬 ClaimEvidenceBlock) */}
            <div className="mt-8 space-y-8 text-center">
              {claims.map((claim, idx) => (
                <ClaimEvidenceBlock key={idx} claim={claim} theme={theme} accentColor={accentColor} />
              ))}
            </div>
          </section>
        )}

        {/* 선택적 수직 서사 연결선 (기본 비활성) */}
        {renderConnectorIf('section-07-evidence')}

        {/* ── SECTION 08: Restrained Close (절제된 마무리 에필로그 & CTA) ── */}
        <section id="section-08-close" aria-label="마무리 에필로그 및 안내" className="relative mx-auto text-center pb-8">
          <div className="mx-auto flex justify-center mb-4">
            <div className="relative w-[110px] sm:w-[130px] aspect-[1145/1374]">
              <Image
                src="/assets/vfx/vfx-track-spotlight.webp"
                alt="상단 조명"
                fill
                sizes="130px"
                className="object-contain opacity-85"
              />
            </div>
          </div>

          <h2
            className={`mt-4 mx-auto max-w-[640px] text-[1.875rem] sm:text-[3.125rem] font-black leading-[1.28] tracking-[-0.035em] break-keep ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}
          >
            반복에 쓰던 시간을,{' '}
            <br className="hidden sm:inline" />
            <span style={{ color: accentColor }}>
              다음 콘텐츠에.
            </span>
          </h2>

          <p
            className={`mx-auto mt-4 max-w-[600px] text-[1rem] sm:text-[1.375rem] font-medium leading-[1.65] break-keep [overflow-wrap:anywhere] ${
              isDark ? 'text-zinc-300' : 'text-zinc-700'
            }`}
          >
            흩어진 수작업을 시스템으로 정리하고,{' '}
            <br className="sm:hidden" />
            나만의 지속 가능한 흐름을 만들어 보세요.
          </p>

          <div className="mx-auto mt-8 sm:mt-10 flex justify-center">
            <div className="relative w-[180px] sm:w-[220px] aspect-square">
              <Image
                src="/assets/mascot/mascot-ai-cutout.webp"
                alt="작업 흐름을 완성하는 마스코트"
                fill
                sizes="(max-width: 640px) 180px, 220px"
                className="object-contain filter drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]"
              />
            </div>
          </div>

          {/* 절제된 안내 링크 (중복 결제 옵션/가격표 날조 배제) */}
          <div
            className={`mx-auto mt-12 max-w-[540px] pt-8 border-t text-center ${
              isDark ? 'border-white/10' : 'border-zinc-200'
            }`}
          >
            <h3
              className={`text-[1.25rem] sm:text-[1.5rem] font-bold ${
                isDark ? 'text-white' : 'text-zinc-900'
              }`}
            >
              {productTitle}
            </h3>
            <p
              className={`mt-2 text-[0.875rem] sm:text-[1rem] font-medium ${
                isDark ? 'text-zinc-400' : 'text-zinc-500'
              }`}
            >
              {tagline}
            </p>

            <a
              href="#solution"
              onClick={onCtaClick}
              className="mt-6 inline-block rounded-xl px-8 py-3.5 text-[1rem] sm:text-[1.125rem] font-black text-white text-center shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
              style={{ backgroundColor: accentColor }}
            >
              구성과 실행 안내 살펴보기
            </a>

            <p
              className={`mt-4 text-[0.75rem] sm:text-[0.8125rem] font-medium ${
                isDark ? 'text-zinc-500' : 'text-zinc-400'
              }`}
            >
              * 실제 구동 가능한 4대 독립 패키지와 단계별 실행 가이드가 포함되어 있습니다.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}
