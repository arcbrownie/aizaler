'use client';

import React, { useState } from 'react';
import { GLOSSARY_TERMS } from '@/data/glossaryData';
import { Bookmark, Search, Check, Sparkles, Download, Mail } from 'lucide-react';

export default function GlossaryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const categories = ['전체', 'AI & 바이브코딩', '웹 & 배포', '비즈니스 & 수익화', '데이터 & 보안'];

  const filteredTerms = GLOSSARY_TERMS.filter((term) => {
    const matchesCategory = selectedCategory === '전체' || term.category === selectedCategory;
    const matchesQuery =
      term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      term.simpleDef.toLowerCase().includes(searchQuery.toLowerCase()) ||
      term.detail.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      alert('올바른 이메일 주소를 입력해 주세요.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12">
      {/* Header */}
      <div className="space-y-3 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold border border-brand-200">
          <Bookmark className="w-3.5 h-3.5" />
          <span>에잘러 공식 리드마그넷 치트시트</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight">
          비개발자 AI &amp; 바이브코딩 실무 용어집 30선
        </h1>
        <p className="text-sm text-zinc-600 leading-relaxed font-normal">
          어려운 컴퓨터 공학 교과서 용어는 잊으세요! 비개발자가 AI 에이전트로 웹 만들고 수익화할 때 꼭 알아야 할 실무 언어만 모았습니다.
        </p>
      </div>

      {/* PDF Download Lead Magnet Box */}
      <div className="clean-card p-6 sm:p-8 bg-gradient-to-r from-zinc-900 to-zinc-800 text-white rounded-2xl shadow-lg space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded bg-amber-400 text-black">
              PDF CHEAT-SHEET
            </span>
            <h3 className="text-xl font-black text-white">
              에잘러 필수 생존 용어집 PDF 전체본 무료 소장하기
            </h3>
            <p className="text-xs text-zinc-300 max-w-lg leading-relaxed font-normal">
              이메일 주소만 입력하시면 매주 업데이트되는 실전 AI 트러블슈팅 케이스와 최신 용어집 PDF 링크를 즉시 발송해 드립니다.
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            {submitted ? (
              <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>성공적으로 신청되었습니다! (이메일을 확인해 주세요)</span>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="이메일 주소 입력"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="py-2.5 px-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-zinc-400 text-xs focus:outline-none focus:border-white text-left w-full sm:w-60"
                  required
                />
                <button
                  type="submit"
                  className="py-2.5 px-4 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold transition-colors whitespace-nowrap shadow-sm"
                >
                  PDF 무료 다운로드 →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Filter & Search */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="용어 검색 (예: 바이브코딩, RLS, 캐시버스팅, Vercel, E-E-A-T)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 bg-white text-xs sm:text-sm text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:border-brand-500 shadow-sm"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-zinc-900 text-white shadow-sm'
                  : 'bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Terms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTerms.map((term) => (
          <div key={term.id} className="clean-card p-6 sm:p-7 space-y-3.5 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-zinc-100 text-zinc-500 border border-zinc-200">
                  {term.category}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-black text-zinc-900 tracking-tight">
                {term.term}
              </h3>

              <p className="text-xs sm:text-sm font-semibold text-brand-700 bg-brand-50/70 p-3 rounded-lg border border-brand-100 leading-relaxed">
                💡 {term.simpleDef}
              </p>

              <p className="text-xs text-zinc-600 leading-relaxed font-normal pt-1">
                {term.detail}
              </p>
            </div>

            <div className="pt-3 border-t border-zinc-100 text-[11px] text-zinc-500 leading-relaxed">
              <strong className="text-zinc-800 font-semibold block mb-0.5">실무 적용 꿀팁:</strong>
              {term.practicalTip}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
