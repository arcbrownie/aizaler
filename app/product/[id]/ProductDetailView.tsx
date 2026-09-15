'use client';

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, 
  CheckCircle, 
  Sparkle, 
  ShieldCheck, 
  Lightning, 
  CreditCard
} from '@phosphor-icons/react';
import { PRODUCTS } from '@/data/products';
import SectionConnector from '@/components/introduce/SectionConnector';

interface Props {
  id: string;
}

export default function ProductDetailView({ id }: Props) {
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-[#f2f4f6] min-h-screen py-10 sm:py-16 pb-32">
      {/* 760px 오픈 단일 컬럼 메인 캔버스 */}
      <div className="max-w-[760px] mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
        
        {/* 상단 뒤로가기 */}
        <div>
          <Link
            href="/#solutions"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#8b95a1] hover:text-[#3182f6] transition-colors"
          >
            <ArrowLeft size={16} weight="bold" /> 전체 솔루션 목록으로 돌아가기
          </Link>
        </div>

        {/* ── 1. 히어로 섹션 (토스 스타일) ── */}
        <section className="text-center space-y-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f3ff] text-[#3182f6] text-xs font-bold">
            <Sparkle size={14} weight="duotone" />
            {product.category} · {product.rank}위
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-[#191f28] leading-tight break-keep">
            {product.title}
          </h1>

          <p className="text-sm sm:text-base text-[#4e5968] font-medium leading-relaxed break-keep">
            {product.tagline}
          </p>

          {/* 가격 카드 */}
          <div className="p-7 rounded-3xl bg-white border border-black/[0.04] text-center max-w-md mx-auto space-y-4 shadow-sm">
            <div className="flex items-baseline justify-center gap-3">
              <span className="text-3xl sm:text-4xl font-black text-[#191f28] font-mono">
                {product.salePrice.toLocaleString()}원
              </span>
              <span className="text-sm text-[#8b95a1] line-through font-mono">
                {product.originalPrice.toLocaleString()}원
              </span>
              <span className="text-xs font-extrabold px-2 py-0.5 rounded-full bg-[#ffebee] text-[#f04452]">
                {product.discountRate}% OFF
              </span>
            </div>

            {product.monthlyPrice && (
              <div className="text-xs text-[#8b95a1] font-mono">
                {product.monthlyPrice}
              </div>
            )}

            <button className="w-full toss-button-primary py-4 text-sm sm:text-base shadow-md flex items-center justify-center gap-2">
              <CreditCard size={18} weight="duotone" /> 지금 바로 신청하기
            </button>
            <p className="text-[11px] text-[#8b95a1]">
              * 안전결제 및 즉시 슬랙 초대 / 다운로드 링크 발송
            </p>
          </div>
        </section>

        {/* 프로님 1px 수직 서사 커넥터 (토스 블루) */}
        <SectionConnector accentColor="#3182f6" />

        {/* ── 2. 핵심 공감 & 문제 제기 ── */}
        <section className="text-center space-y-5">
          <div className="inline-block px-3 py-1 rounded-full bg-white text-xs font-bold text-[#8b95a1] border border-black/[0.04]">
            WHY THIS MATTERS
          </div>
          <h2 className="text-xl sm:text-3xl font-black text-[#191f28] tracking-tight break-keep">
            "세상은 AI로 바뀐다는데, 왜 내 일은 그대로일까요?"
          </h2>
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.04] shadow-sm text-left text-sm sm:text-base text-[#4e5968] space-y-3 leading-relaxed">
            <p>
              매일 새로운 AI 도구가 쏟아지고 유튜브에서는 월 천만 원 자동 수익이라는 자극적인 영상이 넘쳐납니다. 하지만 정작 월 2만 원 구독료를 내고 챗GPT를 켜면, 이메일 몇 줄 영작하거나 요약시키는 것 외엔 할 수 있는 게 없습니다.
            </p>
            <p className="text-[#191f28] font-bold">
              당신이 게으르거나 뒤처진 게 아닙니다. 도구를 내 '본업(직무와 커리어)'에 어떻게 연결해야 하는지, 그 실전 관점을 아무도 제대로 알려주지 않았기 때문입니다.
            </p>
            <p>
              aizaler는 이론만 늘어놓는 강사가 아닙니다. 실제 1인 기업으로 프로덕트 4개를 띄우고, DB와 추천 알고리즘을 굴리며 체득한 **가장 군더더기 없는 실전 워크플로우**만을 전달합니다.
            </p>
          </div>
        </section>

        {/* 프로님 1px 수직 서사 커넥터 */}
        <SectionConnector accentColor="#3182f6" />

        {/* ── 3. 상세 커리큘럼 & 구성 혜택 ── */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-block px-3 py-1 rounded-full bg-white text-xs font-bold text-[#8b95a1] border border-black/[0.04]">
              CURRICULUM & DELIVERABLES
            </div>
            <h2 className="text-xl sm:text-3xl font-black text-[#191f28] tracking-tight">
              포함된 핵심 구성 및 혜택
            </h2>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.04] shadow-sm space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-[#191f28] flex items-center gap-2">
              <Lightning size={20} weight="duotone" className="text-[#3182f6]" />
              {product.title} 제공 항목
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-[#333d4b]">
              {product.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle size={18} weight="fill" className="text-[#3182f6] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-[#e8f3ff] border border-blue-100 text-xs sm:text-sm text-[#1b64da] flex items-center gap-3">
            <ShieldCheck size={22} weight="fill" className="text-[#3182f6] shrink-0" />
            <div>
              <span className="font-bold">100% 만족 보장 & 평생 소장: </span>
              제공되는 모든 템플릿과 프롬프트, 소스코드는 상업적 사용이 가능하며 평생 업데이트를 지원합니다.
            </div>
          </div>
        </section>

        {/* ── 4. 추천 대상 ── */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-[#191f28]">
              이런 분들께 특히 추천합니다
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-5 rounded-2xl bg-white border border-black/[0.04] shadow-sm flex items-start gap-3">
              <CheckCircle size={18} weight="fill" className="text-[#3182f6] shrink-0 mt-0.5" />
              <span className="text-[#333d4b]">AI를 내 본업(마케팅/기획/디자인)에 꽂아 레버리지를 내고 싶은 직장인</span>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-black/[0.04] shadow-sm flex items-start gap-3">
              <CheckCircle size={18} weight="fill" className="text-[#3182f6] shrink-0 mt-0.5" />
              <span className="text-[#333d4b]">개발 외주비 2,000만 원 없이 내 손으로 웹서비스를 런칭하고 싶은 1인 창업가</span>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-black/[0.04] shadow-sm flex items-start gap-3">
              <CheckCircle size={18} weight="fill" className="text-[#3182f6] shrink-0 mt-0.5" />
              <span className="text-[#333d4b]">공포 마케팅이나 뜬구름 잡는 프롬프트 대신 진짜 검증된 시스템을 원하는 분</span>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-black/[0.04] shadow-sm flex items-start gap-3">
              <CheckCircle size={18} weight="fill" className="text-[#3182f6] shrink-0 mt-0.5" />
              <span className="text-[#333d4b]">향후 1인 비즈니스나 B2B AX(기업 AI 전환) 컨설팅으로 몸값을 높이고 싶은 리더</span>
            </div>
          </div>
        </section>

        {/* 하단 최종 신청 CTA */}
        <section className="pt-6 text-center space-y-4">
          <div className="p-8 rounded-3xl bg-[#191f28] text-white space-y-4 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              지금 바로 AI 레버리지를 시작하세요
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto">
              고민하는 시간에도 AI 도구는 발전하고 있습니다. 당신의 전문성에 가장 강력한 날개를 달아드립니다.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button className="w-full sm:w-auto toss-button-primary px-8 py-4 text-sm sm:text-base font-bold shadow-lg">
                {product.title} 즉시 신청하기 ({product.salePrice.toLocaleString()}원)
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
