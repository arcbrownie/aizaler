'use client';

import React from 'react';

import FoldShadowReviewCard, { ReviewItem } from './FoldShadowReviewCard';
import ClaimEvidenceBlock, { ClaimEvidenceItem } from './ClaimEvidenceBlock';
import MobileSingleLineClamp from './MobileSingleLineClamp';
import DualVideoPlayerLoop from './DualVideoPlayerLoop';
import SpotlightBeamStage from './SpotlightBeamStage';
import SceneDragInteraction from './SceneDragInteraction';
import SectionConnector from './SectionConnector';

/**
 * IntroducePageStarter — 모듈형 오픈 단일 컬럼 상세페이지 스타터
 *
 * ⚠️ [브랜드 구성 및 Product 6 참조 가이드]
 * - 본 스타터 템플릿은 테마(`theme`)와 브랜드 액센트 컬러(`accentColor`)를 자유롭게 구성할 수 있는 범용 템플릿입니다.
 * - 특정 제품의 고유 스타일(예: Product 6의 다크 배경 및 형광 라임)은 `theme="dark"`, `accentColor="#d9ff3f"`를
 *   명시적으로 설정하여 참조할 수 있으며, 하드코딩된 단일 기본값으로 강제하지 않습니다.
 * - 폴더(옐로우), 지폐, 메탈릭 하드웨어 등 자연 오브젝트(Natural Objects)의 고유 색상은 그대로 보존합니다.
 *
 * 조판 원칙:
 * - 중앙 정렬 기본 (CENTRAL TEXT-CENTER DEFAULT): 모든 헤드라인, 설명문, 리스트 아이템 중앙 정렬.
 * - 이미지 우선 위계 (IMAGE-FIRST HIERARCHY): 짧은 중앙 후크 -> 주 비주얼/실물 증빙 -> 최소 지지 카피.
 * - 선택적 수직 내러티브 커넥터 (SectionConnector): 모든 섹션 경계가 아닌, 서사 전환 2개소(히어로->파이프라인, 인터랙션->증빙)에만 선택 배치.
 * - 760px 오픈 단일 컬럼(Open Single Column) 레이아웃.
 * - 비디오, 쇼케이스, 매출 증빙, 리뷰: 데스크톱/모바일 모두 1행 1열 엄수 (다열 그리드 배제).
 * - 개별 수치·매출·타임라인 실물 이미지 증빙 엄수 (텍스트 전용 스탯 카드 전면 금지).
 * - 엄격한 작성 금기 준수: 영문 키커/아이브로우, 이모지, 조악한 화살표, 장식용 알약/뱃지 완전 배제.
 */
export interface IntroducePageStarterProps {
  /**
   * 브랜드 테마: 'light' | 'dark' (기본: 'dark' — 다크 모드 참조 가능, 'light' 설정 시 깔끔한 화이트/그레이 조판)
   */
  theme?: 'light' | 'dark';
  /**
   * 브랜드 액센트 컬러 (기본: '#fc1c49' — 범용 레드 기본, Product 6 참조 시 '#d9ff3f' 전달)
   */
  accentColor?: string;
  /**
   * 수직 유도선(SectionConnector)을 배치할 섹션 ID 목록
   * (기본값: 서사적 전환 2개 지점)
   * - 'section-01-hero': 히어로 후크 -> 단계별 파이프라인으로 연결
   * - 'section-03-interactive': 24시간 무인 인터랙션 시연 -> 실제 증빙/후기로 연결
   */
  connectorAfterSectionIds?: string[];
  /**
   * 실제 검증된 사용자 후기 목록 (기본값 빈 배열: 실제 증빙이 없을 경우 후기 섹션 렌더링 생략)
   */
  reviews?: ReviewItem[];
  /**
   * 실제 검증된 수치·매출·타임라인 실물 이미지 증빙 목록 (게이트 09 준수: 텍스트 전용 스탯 카드 배제)
   */
  claims?: ClaimEvidenceItem[];
  onCtaClick?: () => void;
}

export default function IntroducePageStarter({
  theme = 'dark',
  accentColor = '#fc1c49',
  connectorAfterSectionIds = ['section-01-hero', 'section-03-interactive'],
  reviews = [],
  claims = [],
  onCtaClick,
}: IntroducePageStarterProps) {
  const isDark = theme === 'dark';

  const renderConnectorIf = (sectionId: string) => {
    if (!connectorAfterSectionIds.includes(sectionId)) return null;
    return <SectionConnector accentColor={accentColor} />;
  };

  return (
    <main
      className={`min-h-screen antialiased ${
        isDark ? 'bg-[#171b1f] text-white' : 'bg-[#fafafa] text-[#18181b]'
      }`}
    >
      {/* 760px 오픈 단일 컬럼 메인 캔버스 */}
      <div className="mx-auto w-full max-w-[760px] px-5 sm:px-8 py-16 sm:py-24 space-y-16 sm:space-y-24 text-center">

        {/* ── 1. 히어로 섹션 (IMAGE-FIRST) ── */}
        <section id="section-01-hero" className="relative isolate text-center">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 h-64 w-[90%] rounded-full opacity-15 blur-3xl"
            style={{
              background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)`,
            }}
          />

          <h1>
            <MobileSingleLineClamp maxPx={44} vwFactor={6.2}>
              콘텐츠에 집중하세요.
            </MobileSingleLineClamp>
            <span
              className="mt-2 block break-keep [overflow-wrap:anywhere] text-[clamp(1.35rem,5.2vw,36px)] font-black leading-[1.3]"
              style={{ color: accentColor }}
            >
              반복 작업은 자동화로.
            </span>
          </h1>

          <p
            className={`mx-auto mt-4 max-w-[560px] text-[15px] sm:text-[18px] font-medium leading-relaxed break-keep ${
              isDark ? 'text-white/75' : 'text-zinc-600'
            }`}
          >
            기획과 핵심 메시지에만 몰입하도록, <br className="hidden sm:inline" />{' '}
            블로그 분석·발행부터 SNS 채널 확산까지 시스템이 실행합니다.
          </p>

          {/* 히어로 쇼케이스 미디어 (1행 1열 단독 배치) */}
          <div
            className={`mx-auto mt-8 sm:mt-10 w-full max-w-[720px] overflow-hidden rounded-2xl shadow-2xl ${
              isDark ? 'bg-[#12161b]' : 'bg-zinc-100 border border-zinc-200'
            }`}
          >
            <picture>
              <source srcSet="/output/introduce-preview/introduce-hero.gif" type="image/gif" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/output/introduce-preview/introduce-hero.png"
                alt="SNS 무인 자동화 시스템 히어로 쇼케이스"
                className="h-auto w-full object-cover"
                width={1080}
                height={608}
                loading="eager"
              />
            </picture>
          </div>
        </section>

        {/* ── 전환 1: 히어로 -> 단계별 파이프라인 수직 유도선 (기본 활성) ── */}
        {renderConnectorIf('section-01-hero')}

        {/* ── 2. 단계별 연계 파이프라인 (중앙 정렬 오픈 리스트) ── */}
        <section id="section-02-pipeline" className="relative isolate text-center">
          <h2
            className={`text-[24px] sm:text-[34px] font-black break-keep ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}
          >
            반복 업무를 줄이는 단계별 자동화
          </h2>
          <p className={`mt-3 text-[15px] sm:text-[17px] ${isDark ? 'text-white/65' : 'text-zinc-600'}`}>
            하나의 흐름으로 연결되어 사람의 개입을 최소화합니다.
          </p>

          {/* 중앙 정렬 1행 1열 오픈 리스트 전개 */}
          <div
            className={`mt-8 sm:mt-10 max-w-[580px] mx-auto divide-y text-center ${
              isDark ? 'divide-white/10' : 'divide-zinc-200'
            }`}
          >
            {[
              {
                step: '1단계',
                title: '주제 및 데이터 탐색',
                desc: '실시간 경제 지표 및 맞춤 템플릿 기반으로 당일 최적 발행 키워드를 탐색합니다.',
              },
              {
                step: '2단계',
                title: '콘텐츠 생성 및 검증',
                desc: '사전 승인된 가이드와 품질 게이트를 통과한 고품질 포스트 본문을 자동 조판합니다.',
              },
              {
                step: '3단계',
                title: '멀티 채널 자동 배포',
                desc: '스마트에디터 ONE 발행 후 스레드 채널까지 사람 개입 없이 연계 배포합니다.',
              },
            ].map((item, idx) => (
              <div key={idx} className="py-6 first:pt-0 last:pb-0 text-center">
                <span className="inline-block text-[13px] sm:text-[14px] font-bold" style={{ color: accentColor }}>
                  {item.step}
                </span>
                <h3
                  className={`mt-1 text-[18px] sm:text-[22px] font-bold ${
                    isDark ? 'text-white' : 'text-zinc-900'
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`mt-2 text-[15px] sm:text-[17px] leading-relaxed break-keep ${
                    isDark ? 'text-white/70' : 'text-zinc-700'
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 선택적 수직 서사 연결선 (기본 비활성) */}
        {renderConnectorIf('section-02-pipeline')}

        {/* ── 3. 드래그 앤 드롭 시뮬레이션 인터랙션 (내추럴 폴더 옐로우 보존) ── */}
        <section id="section-03-interactive" className="relative text-center">
          <h2
            className={`text-[24px] sm:text-[32px] font-black break-keep ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}
          >
            폴더를 연결해 놓기만 하면,
          </h2>
          <p className="mt-2 text-[15px] sm:text-[18px] font-medium" style={{ color: accentColor }}>
            수익화 시스템이 24시간 무인으로 동작합니다.
          </p>
          <div
            className={`mt-8 overflow-hidden rounded-2xl shadow-2xl ${
              isDark ? 'bg-[#12161b]' : 'bg-zinc-100 border border-zinc-200'
            }`}
          >
            <SceneDragInteraction
              folderSrc="/assets/interactive/interactive-folder.webp"
              targetLogoSrc="/assets/logos/logo-codex-white.webp"
              handCursorSrc="/assets/interactive/interactive-cursor-hand.webp"
              moneySrc="/assets/interactive/interactive-cash-bill.webp"
            />
          </div>
        </section>

        {/* ── 전환 2: 인터랙션 시연 -> 실제 증빙/후기 연결 수직 유도선 (기본 활성) ── */}
        {renderConnectorIf('section-03-interactive')}

        {/* ── 4. 검증된 사용자 실제 후기 (1행 1열 단독 배치) ── */}
        {reviews && reviews.length > 0 && (
          <section id="section-04-reviews" className="relative text-center">
            <h2
              className={`text-[24px] sm:text-[34px] font-black break-keep ${
                isDark ? 'text-white' : 'text-zinc-900'
              }`}
            >
              먼저 경험한 분들의 실제 이야기
            </h2>
            {/* 가로 적층 없이 1행 1열 순차 배치 */}
            <div className="mt-8 sm:mt-10 space-y-8">
              {reviews.map((rev, idx) => (
                <FoldShadowReviewCard key={rev.id} review={rev} index={idx} />
              ))}
            </div>
          </section>
        )}

        {/* 선택적 수직 서사 연결선 (기본 비활성) */}
        {renderConnectorIf('section-04-reviews')}

        {/* ── 5. 검증된 실물 증빙 및 수치 주장 (게이트 09 준수: 텍스트 전용 스탯 카드 배제) ── */}
        {claims && claims.length > 0 && (
          <section id="section-05-claims" className="relative text-center">
            <h2
              className={`text-[24px] sm:text-[34px] font-black break-keep ${
                isDark ? 'text-white' : 'text-zinc-900'
              }`}
            >
              실제 검증된 실적과 타임라인
            </h2>
            <p className={`mt-2 text-[14px] sm:text-[16px] ${isDark ? 'text-white/60' : 'text-zinc-600'}`}>
              화려한 숫자 카드 대신, 실제 원본 스크린샷과 정산 내역으로 투명하게 공개합니다.
            </p>
            <div className="mt-8 space-y-8">
              {claims.map((claim, idx) => (
                <ClaimEvidenceBlock key={idx} claim={claim} theme={theme} accentColor={accentColor} />
              ))}
            </div>
          </section>
        )}

        {/* 선택적 수직 서사 연결선 (기본 비활성) */}
        {renderConnectorIf('section-05-claims')}

        {/* ── 6. 파이프라인 구성 안내 (중앙 정렬 오픈 리스트) ── */}
        <section id="section-06-flows" className="relative text-center">
          <h2
            className={`text-[24px] sm:text-[34px] font-black break-keep ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}
          >
            시스템 하나로 연결되는 <span style={{ color: accentColor }}>4가지 자동화 흐름</span>
          </h2>

          <div
            className={`mt-8 sm:mt-10 max-w-[580px] mx-auto divide-y text-center ${
              isDark ? 'divide-white/10' : 'divide-zinc-200'
            }`}
          >
            {[
              {
                title: '블로그 콘텐츠 발행',
                desc: 'AI가 매일 고품질 포스팅을 작성하고 발행 단계까지 정직하게 이어갑니다.',
              },
              {
                title: '콘텐츠 및 지식 자산 연동',
                desc: '한 번 정돈해 둔 핵심 프롬프트와 문서가 자산으로 축적됩니다.',
              },
              {
                title: '스레드 바이럴 채널 확산',
                desc: '핵심 숏훅과 순차 해설 댓글을 통해 채널 신뢰도를 구축합니다.',
              },
              {
                title: '자동 웹 서비스 쇼케이스',
                desc: '사주, 타로, 계산기 등 실용 웹 서비스를 단독 흐름으로 운영합니다.',
              },
            ].map((item, idx) => (
              <div key={idx} className="py-6 first:pt-0 last:pb-0 text-center">
                <h3
                  className={`text-[18px] sm:text-[22px] font-bold ${
                    isDark ? 'text-white' : 'text-zinc-900'
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`mt-2 text-[15px] sm:text-[17px] leading-relaxed break-keep ${
                    isDark ? 'text-white/70' : 'text-zinc-700'
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 선택적 수직 서사 연결선 (기본 비활성) */}
        {renderConnectorIf('section-06-flows')}

        {/* ── 7. 모바일 웹 비디오 쇼케이스 (1행 1열 무컨트롤 심리스 루프) ── */}
        <section id="section-07-video" className="relative text-center">
          <h2
            className={`text-[24px] sm:text-[34px] font-black break-keep ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}
          >
            실제 구동되는 서비스 화면
          </h2>
          <p className={`mt-2 text-[14px] sm:text-[16px] ${isDark ? 'text-white/60' : 'text-zinc-600'}`}>
            버튼 조작 없이 자동으로 시연되는 실제 웹뷰 화면입니다.
          </p>
          <div className="mt-8 sm:mt-10">
            <DualVideoPlayerLoop
              videoSrc="/assets/video/demo-service-showcase.mp4"
              posterSrc="/assets/video/demo-service-poster.webp"
            />
          </div>
        </section>

        {/* ── 8. 하단 스포트라이트 스테이지 & CTA ── */}
        <section id="section-08-close" className="relative text-center pb-8">
          <SpotlightBeamStage spotlightSrc="/assets/vfx/vfx-track-spotlight.webp">
            <h2
              className={`text-[24px] sm:text-[34px] font-black break-keep ${
                isDark ? 'text-white' : 'text-zinc-900'
              }`}
            >
              반복에 쓰던 시간을, 다음 콘텐츠에.
            </h2>
            <p className={`mt-3 text-[15px] sm:text-[18px] font-medium ${isDark ? 'text-white/70' : 'text-zinc-600'}`}>
              지금 바로 나만의 24시간 무인 SNS 자동화 시스템을 구축해 보세요.
            </p>
            <button
              type="button"
              onClick={onCtaClick}
              className="mt-6 inline-block rounded-xl px-8 py-3.5 text-[1rem] sm:text-[1.125rem] font-black text-white text-center shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
              style={{ backgroundColor: accentColor }}
            >
              구성과 실행 안내 살펴보기
            </button>
          </SpotlightBeamStage>
        </section>

      </div>
    </main>
  );
}
