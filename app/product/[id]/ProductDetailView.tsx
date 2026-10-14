'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, X } from 'lucide-react';
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
        <div className="mb-6">
          <Link
            href="/#curriculum"
            className="inline-flex items-center gap-1.5 text-gray-500 hover:text-gray-900 font-bold text-xs sm:text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>전체 커리큘럼으로 돌아가기</span>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 340, damping: 26 }}
        >
          <div className="flex items-center gap-2.5 px-6 -mb-[2px] relative z-10">
            {Array.from({ length: 5 }).map((_, idx) => (
              <div
                key={idx}
                className={`h-2.5 w-7 rounded-t-[5px] border-t-2 border-x-2 ${style.studColor}`}
              />
            ))}
          </div>

          <div className={`${style.cardClass} p-6 sm:p-10 md:p-12`}>
            <div className={`text-xs font-extrabold ${style.accentText} mb-2`}>
              {product.brickStageLabel}
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-gray-950 leading-tight mb-3">
              {product.title}
            </h1>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
              {product.tagline}
            </p>

            {/* 가격 및 신청 바 */}
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-8">
              <div>
                {product.originalPrice > 0 && (
                  <span className="text-xs text-gray-400 line-through block mb-0.5 tabular-nums">
                    정가 {product.originalPrice.toLocaleString()}원
                  </span>
                )}
                <div className="text-3xl font-black text-gray-950 tabular-nums">
                  {product.salePrice === 0 ? '무료' : `${product.salePrice.toLocaleString()}원`}
                </div>
                <p className="text-xs text-gray-500 mt-1">{product.deliverableSummary}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5">
                {product.id === '4' && (
                  <Link
                    href="/career"
                    className="px-5 py-3.5 rounded-2xl bg-white hover:bg-gray-100 border border-gray-200 text-gray-800 font-bold text-xs sm:text-sm flex items-center justify-center"
                  >
                    컨설팅 상세 안내
                  </Link>
                )}
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className={`px-7 py-4 text-sm ${style.btnClass}`}
                >
                  신청하기
                </button>
              </div>
            </div>

            {/* 추천 대상 */}
            <div className={`p-5 rounded-2xl border ${style.lightBox} mb-8`}>
              <div className="text-xs font-extrabold text-gray-500 mb-1">추천 대상</div>
              <p className="text-sm sm:text-base font-bold text-gray-900">{product.target}</p>
            </div>

            {/* 과정 소개 */}
            <div className="mb-8">
              <h2 className="text-base sm:text-lg font-black text-gray-950 mb-2.5">과정 소개</h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed whitespace-pre-line">
                {product.description}
              </p>
            </div>

            {/* 상세 커리큘럼 */}
            <div>
              <h2 className="text-base sm:text-lg font-black text-gray-950 mb-3">핵심 커리큘럼</h2>
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

      {/* 신청 모달 */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 border border-gray-200 shadow-2xl relative"
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
                <h3 className="text-lg font-black text-gray-950">신청이 접수되었습니다</h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  입력하신 연락처(<strong>{buyerContact}</strong>)로 안내를 보내드립니다.
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
                <h3 className="text-lg font-black text-gray-950 mb-1">{product.title}</h3>
                <p className="text-xs text-gray-500 mb-5">{product.deliverableSummary}</p>

                <form onSubmit={handleOrder} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">성함</label>
                    <input
                      type="text"
                      required
                      value={buyerName}
                      onChange={(e) => setBuyerName(e.target.value)}
                      placeholder="홍길동"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-gray-900"
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
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">메모 (선택)</label>
                    <input
                      type="text"
                      value={buyerQuestion}
                      onChange={(e) => setBuyerQuestion(e.target.value)}
                      placeholder="궁금한 점이나 목표를 남겨주세요"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-gray-900"
                    />
                  </div>

                  <button type="submit" className={`w-full py-4 text-sm mt-2 ${style.btnClass}`}>
                    {product.salePrice === 0
                      ? '무료 신청하기'
                      : `${product.salePrice.toLocaleString()}원 신청하기`}
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
