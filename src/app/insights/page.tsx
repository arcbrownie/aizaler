'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { INSIGHTS_ARTICLES } from '@/data/insightsData';
import { Clock, Search, BookOpen, ArrowRight, UserCheck } from 'lucide-react';

const CATEGORIES = ['전체', '생산성 & AI도구', '트러블슈팅', '바이브코딩', '비즈니스 & 기획'] as const;

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = INSIGHTS_ARTICLES.filter((article) => {
    const matchesCategory = selectedCategory === '전체' || article.category === selectedCategory;
    const matchesQuery =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5 text-zinc-700" />
          <span>Technical Journal &amp; Case Studies</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
          인사이트 &amp; 테크 리포트
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 max-w-2xl leading-relaxed">
          실제 프로덕션 환경에서 100시간 이상 직접 검증한 문제 해결 과정, 벤치마크 수치, 비즈니스 전환 데이터를 투명하게 기록합니다.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="기술 스택, 에러 키워드, 솔루션 검색 (예: Typeless, Vercel, brownevents, 메타광고)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 bg-white text-xs sm:text-sm text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 shadow-xs transition-all"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-zinc-900 text-white shadow-xs'
                  : 'bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles List */}
      <div className="divide-y divide-zinc-200/90 border-t border-b border-zinc-200/90">
        {filteredArticles.length === 0 ? (
          <div className="p-12 text-center space-y-2">
            <p className="text-sm font-bold text-zinc-700">검색 결과가 없습니다.</p>
            <p className="text-xs text-zinc-400">다른 키워드나 카테고리를 선택해 보세요.</p>
          </div>
        ) : (
          filteredArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="py-8 sm:py-9 block group transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5">
                <div className="flex items-center gap-2 text-xs">
                  <span className="font-semibold px-2.5 py-0.5 rounded bg-zinc-100 text-zinc-800 border border-zinc-200">
                    {article.category}
                  </span>
                  <span className="text-zinc-300">·</span>
                  <div className="flex items-center gap-1 text-zinc-500">
                    <Clock className="w-3 h-3 text-zinc-400" />
                    <span>{article.readTime}</span>
                  </div>
                  <span className="text-zinc-300">·</span>
                  <span className="text-zinc-500 font-mono">{article.date}</span>
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 group-hover:text-brand-600 transition-colors leading-snug">
                {article.title}
              </h2>

              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mt-2.5 font-normal line-clamp-2">
                {article.summary}
              </p>

              <div className="flex items-center justify-between pt-4">
                <div className="flex flex-wrap gap-1.5">
                  {article.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] text-zinc-500 px-2 py-0.5 rounded bg-zinc-50 border border-zinc-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <span className="text-xs font-semibold text-zinc-900 group-hover:text-brand-600 flex items-center gap-1">
                  <span>전문 읽기</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
