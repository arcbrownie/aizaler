'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  ArrowLeft,
  ShieldCheck,
  Zap,
  Sparkles,
  Award,
  Layers,
  Clock,
  HelpCircle,
  X,
  ArrowRight,
  Compass,
} from 'lucide-react';
import { PRODUCTS, Product, BrickStage } from '../../../data/products';

export default function ProductDetailView({
  id,
  product: propProduct,
}: {
  id?: string;
  product?: Product;
}) {
  const product = propProduct || PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buyerName, setBuyerName] = useState('');
  const [buyerContact, setBuyerContact] = useState('');
  const [buyerQuestion, setBuyerQuestion] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const getStageBadgeClass = (stage: BrickStage) => {
    if (stage === 'STAGE_1') return 'badge-stage1';
    if (stage === 'STAGE_2') return 'badge-stage2';
    if (stage === 'STAGE_3') return 'badge-stage3';
    return 'badge-career';
  };

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!buyerName.trim() || !buyerContact.trim()) return;
    setSubmitted(true);
  };

  const discountRate = product.discountRate ?? 0;

  return (
    <div className="min-h-screen bg-[#070B14] text-white pb-28">
      {/* Top Breadcrumb Bar */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-4 flex items-center justify-between">
        <Link
          href="/#catalog"
          className="inline-flex items-center space-x-2 text-slate-400 hover:text-amber-300 font-bold text-xs sm:text-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>전체 브릭 카탈로그로 돌아가기</span>
        </Link>
        <span className="text-xs font-mono text-slate-500">
          BRICK MODULE #0{product.rank}
        </span>
      </div>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="technic-card rounded-[32px] p-6 sm:p-10 md:p-12 border border-white/15 mb-8">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <span
              className={`text-xs font-mono font-bold px-3.5 py-1.5 rounded-lg ${getStageBadgeClass(
                product.brickStage
              )}`}
            >
              {product.brickStageLabel}
            </span>
            {product.badge && (
              <span className="px-3.5 py-1.5 rounded-lg bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-bold">
                {product.badge}
              </span>
            )}
            <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs font-mono">
              {product.category}
            </span>
          </div>

          {/* Title & Subtitle */}
          <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight mb-4">
            {product.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            {product.tagline}
          </p>

          {/* Price & Primary CTA Box */}
          <div className="p-6 sm:p-7 rounded-3xl bg-[#0B1222] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-1">
                {product.originalPrice > 0 && (
                  <span className="text-sm text-slate-500 line-through">
                    정가 {product.originalPrice.toLocaleString()}원
                  </span>
                )}
                {discountRate > 0 && (
                  <span className="text-xs font-mono font-bold text-rose-400 bg-rose-500/15 border border-rose-500/30 px-2 py-0.5 rounded">
                    -{discountRate}% 얼리버드 혜택
                  </span>
                )}
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white">
                {product.salePrice === 0 ? '무료 (0원)' : product.salePrice.toLocaleString()}
                {product.salePrice > 0 && (
                  <span className="text-base font-medium text-slate-400 ml-1">원</span>
                )}
              </div>
              {product.deliverableSummary && (
                <p className="text-xs text-amber-300/90 mt-2 font-medium">
                  📦 제공 구성: {product.deliverableSummary}
                </p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              {product.id === '4' && (
                <Link
                  href="/career"
                  className="px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all"
                >
                  <Compass className="w-4 h-4 text-amber-400" />
                  <span>전용 세션 안내 페이지 보기</span>
                </Link>
              )}
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 rounded-2xl btn-technic-gold text-sm sm:text-base flex items-center justify-center gap-2 shrink-0"
              >
                <Zap className="w-4 h-4" />
                <span>이 브릭 즉시 조립 신청하기</span>
              </button>
            </div>
          </div>

          {/* Target Problem Highlight */}
          {product.target && (
            <div className="p-6 rounded-2xl bg-amber-400/10 border border-amber-400/30 mb-10">
              <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-1.5">
                TARGET BOTTLENECK · 이런 분들을 위해 설계했습니다
              </div>
              <p className="text-base sm:text-lg font-bold text-white">
                {product.target}
              </p>
            </div>
          )}

          {/* Detailed Story / Description */}
          <div className="mb-10">
            <h2 className="text-lg sm:text-xl font-black text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>왜 이 브릭이 필요한가요?</span>
            </h2>
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-slate-200 text-sm sm:text-base leading-relaxed whitespace-pre-line">
              {product.description}
            </div>
          </div>

          {/* Curriculum / Features List */}
          <div className="mb-10">
            <h2 className="text-lg sm:text-xl font-black text-white mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-400" />
              <span>상세 조립 모듈 & 커리큘럼 구성</span>
            </h2>
            <div className="grid grid-cols-1 gap-3.5">
              {product.features?.map((feature, index) => (
                <div
                  key={index}
                  className="p-4 sm:p-5 rounded-2xl bg-[#0B101E] border border-white/10 flex items-start gap-3.5"
                >
                  <div className="w-6 h-6 rounded-lg bg-blue-500/20 border border-blue-400/40 text-blue-300 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    0{index + 1}
                  </div>
                  <span className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Guarantee & Trust Box */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex items-start gap-3">
              <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-white mb-1">100% 실전 검증 데이터</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  이론 짜깁기가 아닌 스레드 500만 뷰·메타 공식 인증 파운더의 실제 운영 에셋입니다.
                </p>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex items-start gap-3">
              <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-white mb-1">평생 소장 & 업데이트</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  한 번 조립한 브릭 노션/템플릿은 알고리즘 변화에 맞춰 지속 업데이트됩니다.
                </p>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-white mb-1">Builders Club 우대</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  개별 브릭 구매자분들께는 추후 오픈할 멤버십 창립 멤버 할인권이 자동 부여됩니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Purchase Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#070B14]/90 backdrop-blur-xl border-t border-white/15 p-4 z-40">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden sm:block">
            <span className="text-[11px] font-mono text-amber-400 block">
              {product.brickStageLabel}
            </span>
            <span className="text-sm font-bold text-white line-clamp-1">{product.title}</span>
          </div>
          <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4">
            <div className="text-left sm:text-right">
              {product.originalPrice > 0 && (
                <span className="text-xs text-slate-500 line-through mr-2">
                  {product.originalPrice.toLocaleString()}원
                </span>
              )}
              <span className="text-xl font-black text-amber-300">
                {product.salePrice === 0 ? '무료 (0원)' : `${product.salePrice.toLocaleString()}원`}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3.5 rounded-xl btn-technic-gold text-xs sm:text-sm font-black flex items-center gap-2 shrink-0"
            >
              <Zap className="w-4 h-4" />
              <span>지금 브릭 조립 신청</span>
            </button>
          </div>
        </div>
      </div>

      {/* Checkout / Application Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="technic-card rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-white/20 relative">
            <button
              type="button"
              onClick={() => {
                setIsModalOpen(false);
                setSubmitted(false);
              }}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-white">신청이 완료되었습니다!</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  입력하신 연락처(<strong className="text-amber-300">{buyerContact}</strong>)로{' '}
                  <strong>{product.title}</strong> 결제 및 노션 템플릿/일정 안내 링크를 즉시 발송해 드립니다.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    setSubmitted(false);
                  }}
                  className="px-6 py-3 rounded-xl btn-technic-gold text-xs sm:text-sm"
                >
                  확인 및 닫기
                </button>
              </div>
            ) : (
              <div>
                <span
                  className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-md inline-block mb-3 ${getStageBadgeClass(
                    product.brickStage
                  )}`}
                >
                  {product.brickStageLabel}
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white mb-1">{product.title}</h3>
                <p className="text-xs text-slate-400 mb-5">{product.deliverableSummary}</p>

                <form onSubmit={handleOrder} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">성함 (또는 닉네임)</label>
                    <input
                      type="text"
                      required
                      value={buyerName}
                      onChange={(e) => setBuyerName(e.target.value)}
                      placeholder="홍길동"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/15 text-white text-sm focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      이메일 또는 휴대폰 번호 (템플릿 발송용)
                    </label>
                    <input
                      type="text"
                      required
                      value={buyerContact}
                      onChange={(e) => setBuyerContact(e.target.value)}
                      placeholder="010-0000-0000 또는 이메일"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/15 text-white text-sm focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      이 브릭으로 해결하고 싶은 목표 (선택)
                    </label>
                    <input
                      type="text"
                      value={buyerQuestion}
                      onChange={(e) => setBuyerQuestion(e.target.value)}
                      placeholder="예: 내 도구를 스레드와 메타 광고로 월 300만 원 수익화하고 싶습니다"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/15 text-white text-sm focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <button type="submit" className="w-full py-4 rounded-xl btn-technic-gold text-sm mt-2">
                    {product.salePrice === 0 ? '무료(0원) 브릭 즉시 신청하기' : `${product.salePrice.toLocaleString()}원 조립 신청 접수하기`}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
