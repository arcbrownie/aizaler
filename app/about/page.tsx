'use client';

import React from 'react';
import Link from 'next/link';
import {
  Sparkle,
  ArrowLeft,
  CheckCircle,
  DownloadSimple,
  ShieldCheck,
  TrendUp,
  EnvelopeSimple,
  ArrowRight,
  UserCheck
} from '@phosphor-icons/react';
import FounderNarrativeTimeline from '@/components/FounderNarrativeTimeline';

export default function AboutPage() {
  return (
    <div className="space-y-16 sm:space-y-24 pt-8 sm:pt-14 pb-16">
      {/* ── 1. About 상단 히어로 헤더 ── */}
      <section className="toss-container">
        <div className="max-w-3xl mx-auto space-y-6 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4e5968] hover:text-[#3182f6] transition-colors mb-2"
          >
            <ArrowLeft size={14} weight="bold" /> 메인 홈으로 돌아가기
          </Link>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8f3ff] text-[#3182f6] text-xs font-bold mx-auto">
            <Sparkle size={16} weight="fill" />
            <span>ABOUT AIZALER · 사이트 및 스튜디오 소개</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#191f28] tracking-tight leading-tight">
            공기업과 해외 주재원을 나와,<br />
            1인 개발로 생존하기까지.
          </h1>

          <p className="text-sm sm:text-lg text-[#4e5968] leading-relaxed max-w-2xl mx-auto">
            정년과 급여가 보장되던 공기업, 남들이 선망하던 해외 주재원 생활을 마쳤습니다.<br className="hidden sm:inline" />
            거대한 조직의 부품으로 머무는 대신, 오직 내 이름과 손으로 만든 제품으로 시장에서 가치를 증명하고자 야생에 뛰어들었습니다.
          </p>

          {/* 핵심 자격 & 실측 데이터 뱃지 */}
          <div className="flex flex-wrap justify-center items-center gap-3 pt-2">
            <div className="px-3.5 py-2 rounded-xl bg-white border border-black/[0.08] shadow-xs text-xs font-bold text-[#191f28] flex items-center gap-1.5">
              <ShieldCheck size={16} weight="fill" className="text-[#3182f6]" />
              <span>Meta Certified Media Planning Professional</span>
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-white border border-black/[0.08] shadow-xs text-xs font-bold text-[#191f28] flex items-center gap-1.5">
              <TrendUp size={16} weight="bold" className="text-emerald-500" />
              <span>스레드 2개 계정 5,000,000+ 뷰 실측 분석</span>
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-white border border-black/[0.08] shadow-xs text-xs font-bold text-[#191f28] flex items-center gap-1.5">
              <Sparkle size={16} weight="fill" className="text-amber-500" />
              <span>월 $42 초경량 1인 인프라 운영</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. 4단계 창업자 오리진 서사 타임라인 ── */}
      <section className="toss-container">
        <FounderNarrativeTimeline />
      </section>

      {/* ── 3. 파운더의 3대 실전 철학 ── */}
      <section className="toss-container">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <div className="text-xs font-bold text-[#3182f6] uppercase tracking-wider">
              PHILOSOPHY & PRINCIPLES
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#191f28]">
              aizaler가 타협하지 않는 3대 실전 원칙
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-black/[0.08] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#e8f3ff] text-[#3182f6] flex items-center justify-center font-black text-lg">
                1
              </div>
              <h3 className="font-bold text-base text-[#191f28]">
                내 돈 태워 검증한 데이터만 말합니다
              </h3>
              <p className="text-xs sm:text-sm text-[#4e5968] leading-relaxed">
                해외 아티클을 번역해 "퇴사 후 AI로 월 1,000만 원"을 외치는 허상 강의를 거부합니다. 직접 사비로 메타 광고를 집행하고, 스레드 2개 계정(명사도 본계정 + 연애 계정) 합산 500만 뷰와 결제 퍼널을 대조해 증명된 실측 데이터만 공유합니다.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-black/[0.08] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#e8f3ff] text-[#3182f6] flex items-center justify-center font-black text-lg">
                2
              </div>
              <h3 className="font-bold text-base text-[#191f28]">
                코딩이 아니라 '내 전문성'이 본체입니다
              </h3>
              <p className="text-xs sm:text-sm text-[#4e5968] leading-relaxed">
                비개발자가 코딩 기초부터 배울 필요는 없습니다. AI 도구는 내 본업 전문성을 레버리지하는 강력한 팀원일 뿐입니다. 기획·카피·DB·배포까지 AI 오케스트레이션으로 3일 만에 띄우는 법을 안내합니다.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-black/[0.08] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#e8f3ff] text-[#3182f6] flex items-center justify-center font-black text-lg">
                3
              </div>
              <h3 className="font-bold text-base text-[#191f28]">
                외주비 0원, 월 $42 초경량 인프라로 생존합니다
              </h3>
              <p className="text-xs sm:text-sm text-[#4e5968] leading-relaxed">
                수천만 원의 외주 개발비나 고비용 서버는 1인 창업의 적입니다. Cloudflare Pages와 서버리스 아키텍처를 결합해 월 5만 원 안팎으로 수십만 트래픽을 방어하는 초경량 엔지니어링을 지향합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. 다음 행동 유도 (CTA) ── */}
      <section className="toss-container">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#191f28] text-white text-center space-y-6 max-w-3xl mx-auto shadow-xl">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              지금 바로 내 비즈니스에 실전 솔루션을 적용해 보세요
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl mx-auto">
              100% 무료 가이드북부터 메타 알고리즘 바이블, 1:1 심층 커리어 의사결정 세션까지 필요한 솔루션을 지금 확인하세요.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/#what-you-get"
              className="w-full sm:w-auto toss-button-primary px-6 py-3.5 text-sm font-bold shadow-md flex items-center justify-center gap-1.5"
            >
              <span>받을 수 있는 솔루션 전체보기</span>
              <ArrowRight size={16} weight="bold" />
            </Link>
            <Link
              href="/career"
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-sm font-bold transition-all flex items-center justify-center gap-1.5"
            >
              <span>커리어 의사결정 세션 알아보기</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

