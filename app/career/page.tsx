'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Compass } from 'lucide-react';
import CareerHero from '@/components/career/CareerHero';
import CareerBentoGrid from '@/components/career/CareerBentoGrid';
import CareerProtocolTimeline from '@/components/career/CareerProtocolTimeline';
import CareerActionReportMockup from '@/components/career/CareerActionReportMockup';
import CareerPilotPricingCard from '@/components/career/CareerPilotPricingCard';
import CareerBookingModal from '@/components/career/CareerBookingModal';

export default function CareerPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070B14] text-[#FAF6F0] relative overflow-x-hidden">
      {/* ── Clean Sub-Bar for Blue Career Track ── */}
      <div className="bg-[#0B1224] border-b border-white/10 px-4 sm:px-6 py-3">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>메인 스튜디오로</span>
            </Link>
            <span className="text-white/20">|</span>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400">
              <Compass className="w-3.5 h-3.5" />
              CAREER 1:1 · 커리어 & 빌더 의사결정 연구소
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsBookingOpen(true)}
            className="px-4 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all"
          >
            1:1 세션 일정 신청하기
          </button>
        </div>
      </div>

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
    </div>
  );
}
