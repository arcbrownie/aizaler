'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Compass, HeartHandshake, Zap } from 'lucide-react';
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
      {/* ── Sub-Bar for 1:1 Career & Builder Decision Session ── */}
      <div className="bg-[#0B1120] border-b border-amber-400/20 px-4 sm:px-6 py-3">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-amber-300 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>전체 브릭 스튜디오로</span>
            </Link>
            <span className="text-white/20">|</span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-300">
              <Compass className="w-3.5 h-3.5" />
              STAGE 03 · LEGO TECHNIC (1:1 커리어 & 빌더 의사결정)
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-[11px] font-mono bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
              <HeartHandshake className="w-3 h-3" />
              재능기부 + 자아실현 세션
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsBookingOpen(true)}
            className="px-4 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs flex items-center gap-1.5 transition-all"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>1:1 세션 일정 신청하기 (잔여 3석)</span>
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
