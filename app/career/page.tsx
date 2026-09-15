'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Terminal, ArrowLeft, ArrowUpRight, ShieldCheck } from 'lucide-react';
import CareerHero from '@/components/career/CareerHero';
import CareerBentoGrid from '@/components/career/CareerBentoGrid';
import CareerProtocolTimeline from '@/components/career/CareerProtocolTimeline';
import CareerActionReportMockup from '@/components/career/CareerActionReportMockup';
import CareerPilotPricingCard from '@/components/career/CareerPilotPricingCard';
import CareerBookingModal from '@/components/career/CareerBookingModal';

const BG = '#050A18';
const CREAM = '#FAF6F0';
const MUTED = 'rgba(250, 246, 240, 0.4)';

export default function CareerPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div
      style={{
        background: BG,
        minHeight: '100vh',
        color: CREAM,
        fontFamily: "'Wanted Sans Variable', 'Wanted Sans', -apple-system, BlinkMacSystemFont, sans-serif",
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      {/* ── Top Header Navigation ── */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 40,
          background: 'rgba(5, 10, 24, 0.85)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div
          style={{
            maxWidth: '1080px',
            margin: '0 auto',
            height: '64px',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Brand Logo */}
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              color: CREAM,
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '10px',
                background: '#3182f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
              }}
            >
              <Terminal size={18} />
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
              <span style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '-0.02em' }}>
                aizaler<span style={{ color: '#60A5FA' }}>.kr</span>
              </span>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  color: 'rgba(250, 246, 240, 0.5)',
                  paddingLeft: '6px',
                  borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                커리어 의사결정 연구소
              </span>
            </div>
          </Link>

          {/* Nav Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '13px',
                fontWeight: 600,
                color: 'rgba(250, 246, 240, 0.7)',
                textDecoration: 'none',
                transition: 'color 0.15s ease',
              }}
            >
              <ArrowLeft size={15} /> 메인 홈으로
            </Link>
            <button
              onClick={() => setIsBookingOpen(true)}
              style={{
                background: '#3182f6',
                color: '#ffffff',
                border: 'none',
                padding: '8px 18px',
                borderRadius: '12px',
                fontSize: '13px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'transform 0.15s ease, background-color 0.15s ease',
              }}
              onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.98)')}
              onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              세션 신청 (선착순 10명)
            </button>
          </div>
        </div>
      </header>

      {/* ── 1. Keynote Hero Section ── */}
      <CareerHero onOpenBooking={() => setIsBookingOpen(true)} />

      {/* ── 2. Bento Grid: 4대 갈림길 (이직 / 승진 / 1인 독립 / AI 레버리지) ── */}
      <CareerBentoGrid />

      {/* ── 3. 50분 의사결정 프로토콜 타임라인 ── */}
      <CareerProtocolTimeline />

      {/* ── 4. 산출물: 90일 실행 Action Summary 뷰어 ── */}
      <CareerActionReportMockup />

      {/* ── 5. 파일럿 특별가 & 신청 카드 ── */}
      <CareerPilotPricingCard onOpenBooking={() => setIsBookingOpen(true)} />

      {/* ── 6. 인터랙티브 예약 모달 ── */}
      <CareerBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* ── Footer ── */}
      <footer
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '48px 24px',
          textAlign: 'center',
          fontSize: '12px',
          color: MUTED,
          background: 'rgba(5, 10, 24, 0.95)',
        }}
      >
        <div style={{ maxWidth: '640px', margin: '0 auto', lineHeight: 1.7 }}>
          <p style={{ margin: '0 0 8px', fontWeight: 700, color: 'rgba(250, 246, 240, 0.85)' }}>
            aizaler 커리어 전략 연구소 (aizaler Career Decision Lab)
          </p>
          <p style={{ margin: '0 0 16px' }}>
            본 세션은 막연한 위로 대신, 개인의 경력 데이터와 AI 레버리지 시장 변수를 분석하여 의사결정 손익을 계산하는 정밀 전략 컨설팅입니다.
          </p>
          <p style={{ margin: 0, fontSize: '11px', color: 'rgba(250, 246, 240, 0.4)' }}>
            운영사: 브라운임팩트랩스 (Brown Impact Labs) | © 2026 aizaler.kr. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
