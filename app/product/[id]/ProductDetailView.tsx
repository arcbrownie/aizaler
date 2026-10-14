'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, X, Compass } from 'lucide-react';
import { PRODUCTS, Product, BrickStage } from '../../../data/products';

const STAGE_STYLE: Record<
  BrickStage,
  {
    studColor: string;
    cardClass: string;
    btnClass: string;
    accentText: string;
    lightBox: string;
  }
> = {
  STAGE_1: {
    studColor: 'bg-amber-400 border-amber-500',
    cardClass: 'brick-card-yellow',
    btnClass: 'brick-btn-yellow',
    accentText: 'text-amber-600',
    lightBox: 'bg-amber-50/70 border-amber-200',
  },
  STAGE_2: {
    studColor: 'bg-emerald-500 border-emerald-600',
    cardClass: 'brick-card-green',
    btnClass: 'brick-btn-green',
    accentText: 'text-emerald-600',
    lightBox: 'bg-emerald-50/70 border-emerald-200',
  },
  STAGE_3: {
    studColor: 'bg-rose-500 border-rose-600',
    cardClass: 'brick-card-red',
    btnClass: 'brick-btn-red',
    accentText: 'text-rose-600',
    lightBox: 'bg-rose-50/70 border-rose-200',
  },
  CAREER: {
    studColor: 'bg-blue-600 border-blue-700',
    cardClass: 'brick-card-blue',
    btnClass: 'brick-btn-blue',
    accentText: 'text-blue-600',
    lightBox: 'bg-blue-50/70 border-blue-200',
  },
};

export default function ProductDetailView({
  id,
  product: propProduct,
}: {
  id?: string;
  product?: Product;
}) {
  const product = propProduct || PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
  const style = STAGE_STYLE[product.brickStage];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buyerName, setBuyerName] = useState('');
  const [buyerContact, setBuyerContact] = useState('');
  const [buyerQuestion, setBuyerQuestion] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!buyerName.trim() || !buyerContact.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pb-28 pt-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Top Back Link */}
        <div className="mb-6">
          <Link
            href="/#stack-builder"
            className="inline-flex items-center gap-1.5 text-gray-500 hover:text-gray-900 font-bold text-xs sm:text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>블록 조립 스테이션으로 돌아가기</span>
          </Link>
        </div>

        {/* Main Tactile Block Card */}
        <motion.div
          initial={{ opacity: 0, y: -24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 320, damping: 24 }}
        >
          {/* Physical Top Studs */}
          <div className="flex items-center gap-3 px-6 -mb-[2px] relative z-10">
            {Array.from({ length: 5 }).map((_, idx) => (
              <div
                key={idx}
                className={`h-3.5 w-9 rounded-t-md border-t-2 border-x-2 ${style.studColor}`}
              />
            ))}
          </div>

          <div className={`${style.cardClass} p-6 sm:p-10 md:p-12`}>
            <div className={`text-xs font-extrabold ${style.accentText} mb-2`}>
              {product.brickStageLabel}
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-gray-900 leading-tight mb-4">
              {product.title}
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
              {product.tagline}
            </p>

            {/* Price & Action Box */}
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-10">
              <div>
                {product.originalPrice > 0 && (
                  <span className="text-xs text-gray-400 line-through block mb-0.5">
                    정가 {product.originalPrice.toLocaleString()}원
                  </span>
                )}
                <div className="text-3xl font-black text-gray-900 tabular-nums">
                  {product.salePrice === 0 ? '무료' : `${product.salePrice.toLocaleString()}원`}
                </div>
                <p className="text-xs text-gray-500 mt-1">{product.deliverableSummary}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5">
                {product.id === '4' && (
                  <Link
                    href="/career"
                    className="px-5 py-3.5 rounded-2xl bg-white hover:bg-gray-100 border border-gray-200 text-gray-800 font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5"
                  >
                    <Compass className="w-4 h-4 text-blue-600" />
                    <span>전용 안내 페이지</span>
                  </Link>
                )}
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className={`px-7 py-4 text-sm ${style.btnClass}`}
                >
                  이 블록 조립 신청하기
                </button>
              </div>
            </div>

            {/* Target Section */}
            <div className={`p-5 rounded-2xl border ${style.lightBox} mb-8`}>
              <div className="text-xs font-extrabold text-gray-500 mb-1">추천 대상</div>
              <p className="text-sm sm:text-base font-bold text-gray-900">{product.target}</p>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-lg font-black text-gray-900 mb-3">블록 설계 배경</h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed whitespace-pre-line">
                {product.description}
              </p>
            </div>

            {/* Curriculum / Features */}
            <div>
              <h2 className="text-lg font-black text-gray-900 mb-3">포함된 상세 조립 모듈</h2>
              <div className="space-y-2.5">
                {product.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80 flex items-start gap-3"
                  >
                    <Check className={`w-4 h-4 ${style.accentText} shrink-0 mt-0.5 stroke-[3]`} />
                    <span className="text-sm font-medium text-gray-800">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 border-2 border-gray-200 shadow-2xl relative"
          >
            <button
              type="button"
              onClick={() => {
                setIsModalOpen(false);
                setSubmitted(false);
              }}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h3 className="text-lg font-black text-gray-900">신청이 완료되었습니다!</h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  입력하신 연락처(<strong>{buyerContact}</strong>)로 안내 링크를 보내드립니다.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    setSubmitted(false);
                  }}
                  className={`px-6 py-3 text-xs sm:text-sm ${style.btnClass}`}
                >
                  확인
                </button>
              </div>
            ) : (
              <div>
                <div className={`text-xs font-extrabold ${style.accentText} mb-1`}>
                  {product.brickStageLabel}
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-1">{product.title}</h3>
                <p className="text-xs text-gray-500 mb-5">{product.deliverableSummary}</p>

                <form onSubmit={handleOrder} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">성함 / 닉네임</label>
                    <input
                      type="text"
                      required
                      value={buyerName}
                      onChange={(e) => setBuyerName(e.target.value)}
                      placeholder="홍길동"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">이메일 또는 연락처</label>
                    <input
                      type="text"
                      required
                      value={buyerContact}
                      onChange={(e) => setBuyerContact(e.target.value)}
                      placeholder="010-0000-0000 또는 이메일"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">목표 한 줄 (선택)</label>
                    <input
                      type="text"
                      value={buyerQuestion}
                      onChange={(e) => setBuyerQuestion(e.target.value)}
                      placeholder="예: 스레드와 메타 광고로 첫 수익을 만들고 싶습니다"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <button type="submit" className={`w-full py-4 text-sm mt-2 ${style.btnClass}`}>
                    {product.salePrice === 0
                      ? '무료 블록 신청하기'
                      : `${product.salePrice.toLocaleString()}원 조립 신청하기`}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}
