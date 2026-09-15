'use client';

import React from 'react';

/**
 * ClaimVerificationStatus — 검증 상태 구분
 *
 * 지원되는 유효한 검증 완료 상태 (게이트 09 통과):
 * - 'Verified Independent Receipt': 독립 영수증 검증
 * - 'Verified Store Screenshot': 스토어 관리자/정산 화면 검증
 * - 'Verified Customer Message Screenshot': 원본 고객 메시지(카카오톡 등) 대화 캡처 검증
 * - 'Verified Demonstrated Result Image': 실제 시연/작동 결과물(아웃풋/측정치) 이미지 검증
 *
 * 미검증 / 미발행 상태 (방문자 UI 렌더링 불가, Fail-Closed):
 * - 'Original Marketing Asset (Unverified Claim)': 마케팅 홍보 그래픽/슬라이드 (미검증 주장)
 * - 'Unpublished TODO': 증빙 미확보 또는 검수 대기
 */
export type ClaimVerificationStatus =
  | 'Verified Independent Receipt'
  | 'Verified Store Screenshot'
  | 'Verified Customer Message Screenshot'
  | 'Verified Demonstrated Result Image'
  | 'Original Marketing Asset (Unverified Claim)'
  | 'Unpublished TODO';

/**
 * ClaimImageReviewChecklist — 5대 실물 이미지 검수 체크리스트
 *
 * ⚠️ [게이트 09 감사 원칙]
 * - 단순 프로그래밍적 boolean 플래그나 문자열이 진실성을 마법처럼 보장하지 않습니다.
 * - 본 체크리스트는 에이전트(이미지 뷰어 도구 활용) 또는 인간 검수자가 실제 원본 에셋을 실측 검수한 기록입니다.
 * - 의무적인 수동 인간 승인을 요구하지 않으며, 추가적인 사용자 권한을 요구하지 않습니다.
 * - 이미지 검수는 기록된 출처 에셋과의 부합 여부를 확인하는 것이며, 출처를 넘어서는 절대적 진위를 인증하는 것은 아닙니다.
 * - 빌드 QA 파이프라인은 실제 디스크 상의 파일 존재를 물리적으로 확인할 책임이 있습니다.
 *   (단순 이미지 onerror 이벤트나 로딩 실패 여부만으로 역으로 검증 완료를 암시할 수 없습니다).
 */
export interface ClaimImageReviewChecklist {
  /** 1. 지정된 파일 경로에 실물 이미지 파일이 실제로 존재하는가? (부재 에셋 즉시 기각; 빌드 QA의 물리 파일 검증 책임) */
  assetFileExistsOnDisk: boolean;
  /** 2. 이미지 내부의 숫자/날짜/금액/지표가 주장 원문과 1:1 완벽히 일치하는가? (임의 추정/올림/변조 금지) */
  numbersMatchExact1to1: boolean;
  /**
   * 3. 실제 출처 증빙이 해당 지표를 직접 뒷받침하는가?
   * (영수증, 카카오톡 상담 캡처, 스토어 정산 화면, 실측 결과물 등 해당 지표 성격에 부합하는 원본이어야 하며,
   * 3일 후기 등 비금전/타임라인 주장에 무리하게 영수증을 강제하지 않음. 마케팅 슬라이드/홍보 문구 배제)
   */
  sourceEvidenceSupportsMetric: boolean;
  /** 하위 호환성을 위한 선택적 alias */
  isOriginalReceiptNotMarketingSlide?: boolean;
  /** 4. AI 생성 가짜 영수증이나 조작된 합성 이미지가 아닌 출처 기반 진본 캡처인가? */
  isAuthenticCaptureNotSynthetic: boolean;
  /** 5. 데스크톱과 모바일에서 클릭이나 확대 모달 없이(no click/zoom) 선명하게 판독 가능한 해상도인가? */
  isLegibleInlineWithoutClick: boolean;
  /** 검수 완료 일시 */
  reviewedAt?: string;
  /** 검수 주체 (에이전트 도구 검수 또는 인간 검수자 기록) */
  reviewer?: string;
  /** 검수자 메모 */
  notes?: string;
}

/**
 * ClaimEvidenceItem — 8대 청구 인벤토리 필드 및 실물 이미지 검수 완결 계약 모델
 *
 * ⚠️ [방문자 UI 노출 격리 원칙]
 * 모든 인벤토리 및 검수 메타데이터(metric, period, currency, originalAsset, placement,
 * verificationStatus, imageReviewChecklist 등)는 TypeScript 인터페이스 및 문서 수준에만 유지되며,
 * 방문자 화면(Visitor UI)에는 일절 렌더링되지 않습니다.
 */
export interface ClaimEvidenceItem {
  /** 원본에 표기된 수치 주장의 정확한 원문 그대로 (기간 단축/변조 금지, 의역 인용구 금지) */
  claimExactOriginalText: string;
  /** 지표 성격: 총매출(Gross Sales) / 순이익(Net Profit) / 부가세(VAT 포함/별도) 등 엄격 분리 */
  metric: string;
  /** 정산 및 측정 기간 */
  period: string;
  /** 통화 단위 (비금전 지표 또는 기간/타임라인 주장의 경우 비어있거나 생략 가능) */
  currency?: string;
  /** 원본 출처 에셋 파일 경로 (부재 에셋 절대 기각) */
  originalAsset: string;
  /** 실측 증빙 크롭 이미지 파일 경로 */
  evidenceCrop?: string;
  /** 상세페이지 내 인접 배치 섹션 및 위치 */
  placement: string;
  /** 검증 상태 */
  verificationStatus: ClaimVerificationStatus | string;
  /**
   * 5대 실물 이미지 검수 체크리스트 (기록된 검수 내역)
   * 부재 시 검증 미완료로 간주되어 방문자 UI 렌더링이 영구 차단됩니다.
   */
  imageReviewChecklist?: ClaimImageReviewChecklist;
  /** 방문자 화면에 노출 가능한 간결한 한국어 헤딩 (선택) */
  heading?: string;
  /** 방문자 화면에 노출 가능한 사실에 기반한 간결한 한국어 캡션 (선택) */
  caption?: string;
}

export interface ClaimEvidenceBlockProps {
  key?: string | number;
  claim: ClaimEvidenceItem;
  className?: string;
  theme?: 'light' | 'dark';
  /**
   * 브랜드 액센트 컬러 (기본: '#fc1c49')
   */
  accentColor?: string;
  /**
   * 헤딩 오버라이드 (선택)
   */
  heading?: string;
  /**
   * 캡션 오버라이드 (선택)
   */
  caption?: string;
}

/**
 * ClaimEvidenceBlock — 게이트 09 준수 1:1 실물 이미지 증빙 블록 (중앙 정렬 기본)
 *
 * 조판 원칙 (게이트 01 & 09 엄수):
 * 1. 헤딩, 이미지, 캡션 모두 중앙 정렬(`text-center mx-auto`) 기본.
 * 2. 텍스트 전용 스탯 카드 전면 차단: 실물 이미지(영수증, 스토어 화면, 캡처) 없이 수치만 띄우는 행위 불가.
 * 3. 1행 1열 단독 배치: 다열 그리드나 카드 병렬 배치를 배제하고 760px 단일 컬럼에 당당히 1개씩 전개.
 * 4. 원본 스크린샷 내부 기호/텍스트는 온전히 보존하며, 외부 조판 레이블만 정갈한 한국어 중앙 정렬로 지지.
 * 5. 5대 검수 체크리스트 미충족 시 Fail-Closed(UI 렌더링 원천 차단: return null).
 */
export default function ClaimEvidenceBlock({
  claim,
  className = '',
  theme = 'light',
  accentColor = '#fc1c49',
  heading: propHeading,
  caption: propCaption,
}: ClaimEvidenceBlockProps) {
  // 1. 유효한 검증 완료 상태 확인 (Fail-Closed: 미인증/마케팅주장/TODO는 렌더링 차단)
  const validStatuses: ClaimVerificationStatus[] = [
    'Verified Independent Receipt',
    'Verified Store Screenshot',
    'Verified Customer Message Screenshot',
    'Verified Demonstrated Result Image',
  ];

  if (!validStatuses.includes(claim.verificationStatus as ClaimVerificationStatus)) {
    return null;
  }

  // 2. 실물 증빙 파일 경로 확인 (evidenceCrop 우선, 없으면 originalAsset)
  const assetPath = claim.evidenceCrop || claim.originalAsset;
  if (!assetPath || assetPath.trim() === '') {
    return null;
  }

  // 3. 체크리스트 부재 확인 (체크리스트가 없으면 즉시 null 반환 — 부재 통과 방지)
  const checklist = claim.imageReviewChecklist;
  if (!checklist) {
    return null;
  }

  // 4. 체크리스트 5대 항목 통과 확인 (하나라도 미충족 시 즉시 null 반환)
  const supportsMetric =
    checklist.sourceEvidenceSupportsMetric === true ||
    checklist.isOriginalReceiptNotMarketingSlide === true;

  const isAllChecksPassed =
    checklist.assetFileExistsOnDisk === true &&
    checklist.numbersMatchExact1to1 === true &&
    supportsMetric &&
    checklist.isAuthenticCaptureNotSynthetic === true &&
    checklist.isLegibleInlineWithoutClick === true;

  if (!isAllChecksPassed) {
    return null;
  }

  // 노출용 선택적 한국어 헤딩 및 캡션 (인벤토리 데이터는 렌더링하지 않음)
  const heading = (propHeading || claim.heading || '').trim();
  const caption = (propCaption || claim.caption || '').trim();
  const isDark = theme === 'dark';

  return (
    <figure className={`mx-auto my-8 w-full max-w-[640px] text-center ${className}`.trim()}>
      {heading && (
        <h4
          className={`mx-auto mb-3.5 text-[1.0625rem] sm:text-[1.25rem] font-bold tracking-tight break-keep ${
            isDark ? 'text-zinc-100' : 'text-zinc-900'
          }`}
        >
          {heading}
        </h4>
      )}

      {/* 실물 증빙 원본 스크린샷 (1행 1열 단독 배치, 원본 내부 텍스트/표는 그대로 보존) */}
      <div
        className={`relative mx-auto w-full overflow-hidden rounded-xl shadow-lg border ${
          isDark ? 'border-white/10' : 'border-zinc-200'
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetPath}
          alt={caption || heading || '실물 증빙 이미지'}
          className="block mx-auto w-full h-auto object-contain"
          loading="lazy"
        />
      </div>

      {caption && (
        <figcaption
          className={`mt-3.5 mx-auto flex items-center justify-center gap-2 text-[0.8125rem] sm:text-[0.875rem] font-medium leading-relaxed break-keep ${
            isDark ? 'text-zinc-400' : 'text-zinc-600'
          }`}
        >
          <span
            className="inline-block h-1.5 w-1.5 rounded-full opacity-80"
            style={{ backgroundColor: accentColor }}
          />
          <span>{caption}</span>
        </figcaption>
      )}
    </figure>
  );
}
