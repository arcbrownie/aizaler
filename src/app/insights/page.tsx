'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { INSIGHTS_ARTICLES } from '@/data/insightsData';
import { Clock, Search, BookOpen } from 'lucide-react';

const CATEGORIES = ['전체', '도구 비교 & 수익화', '트러블슈팅', 'AI & 바이브코딩', '비즈니스 & 기획'] as const;

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
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-brand-600">
          <BookOpen className="w-4 h-4" />
          <span>에잘러 실전 아카이브</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight">
          인사이트 (삽질 &amp; 에러 해결기)
        </h1>
        <p className="text-sm text-zinc-600 max-w-2xl leading-relaxed">
          스크린샷 노가다 없이, 실제 코딩과 서비스 운영 중 터진 문제점과 1분 만에 끝내는 복붙 해결 코드만 다룹니다.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="에러 메시지, 키워드, 기술 스택 검색 (예: Vercel, 사파리, 타입캐스트)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 bg-white text-xs sm:text-sm text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 shadow-sm transition-all"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {CATEGORIES.map((cat) => (
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

      {/* Articles Grid */}
      <div className="space-y-4">
        {filteredArticles.length === 0 ? (
          <div className="clean-card p-12 text-center space-y-2">
            <p className="text-sm font-bold text-zinc-700">검색 결과가 없습니다.</p>
            <p className="text-xs text-zinc-400">다른 키워드나 카테고리를 선택해 보세요.</p>
          </div>
        ) : (
          filteredArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="clean-card p-6 sm:p-7 block group hover:-translate-y-0.5 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-100">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-zinc-400 font-medium">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <span className="text-xs text-zinc-400 font-mono">{article.date}</span>
              </div>

              <h2 className="text-lg sm:text-xl font-bold text-zinc-900 group-hover:text-brand-600 transition-colors leading-snug mt-1">
                {article.title}
              </h2>

              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal mt-2 line-clamp-2">
                {article.summary}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-2 mt-4 pt-4 border-t border-zinc-100">
                <div className="flex flex-wrap gap-1.5">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium text-zinc-500 px-2 py-0.5 rounded bg-zinc-100 border border-zinc-200/60"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-bold text-brand-600 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                  해결 코드 보기 →
                </span>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
