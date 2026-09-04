'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, BookOpen, Mic, Bookmark, GraduationCap, ArrowRight, Menu, X } from 'lucide-react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-zinc-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white font-black text-sm shadow-sm group-hover:bg-brand-700 transition-colors">
            AI
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg text-zinc-900 tracking-tight">AI잘러</span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-600 border border-zinc-200">
                aizaler.kr
              </span>
            </div>
            <span className="text-[10px] text-zinc-500 hidden sm:block">더 많은 사람이 AI로 일 잘하는 세상</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-semibold text-zinc-600">
          <Link
            href="/insights"
            className="px-3.5 py-2 rounded-lg hover:text-zinc-900 hover:bg-zinc-100/80 transition-colors flex items-center gap-1.5"
          >
            <BookOpen className="w-4 h-4 text-zinc-400" />
            <span>인사이트 (삽질기)</span>
          </Link>
          <Link
            href="/tools"
            className="px-3.5 py-2 rounded-lg hover:text-zinc-900 hover:bg-zinc-100/80 transition-colors flex items-center gap-1.5"
          >
            <Mic className="w-4 h-4 text-zinc-400" />
            <span>도구 비교 (음성 AI)</span>
          </Link>
          <Link
            href="/glossary"
            className="px-3.5 py-2 rounded-lg hover:text-zinc-900 hover:bg-zinc-100/80 transition-colors flex items-center gap-1.5"
          >
            <Bookmark className="w-4 h-4 text-zinc-400" />
            <span>용어집 (치트시트)</span>
          </Link>
          <Link
            href="/class"
            className="px-3.5 py-2 rounded-lg hover:text-zinc-900 hover:bg-zinc-100/80 transition-colors flex items-center gap-1.5"
          >
            <GraduationCap className="w-4 h-4 text-zinc-400" />
            <span>클래스</span>
          </Link>
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/glossary"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-zinc-900 text-white text-xs font-bold hover:bg-brand-600 transition-colors shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>[🎁 무료] 용어집 받기</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-zinc-600 hover:bg-zinc-100"
          aria-label="메뉴 열기"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-200 bg-white px-4 py-4 space-y-2 shadow-lg">
          <Link
            href="/insights"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            인사이트 (실전 삽질기)
          </Link>
          <Link
            href="/tools"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            도구 비교 (음성 AI &amp; TTS)
          </Link>
          <Link
            href="/glossary"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            용어집 (치트시트)
          </Link>
          <Link
            href="/class"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            에잘러 클래스
          </Link>
          <div className="pt-2 border-t border-zinc-100">
            <Link
              href="/glossary"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-2.5 px-4 text-center rounded-lg bg-zinc-900 text-white text-xs font-bold"
            >
              [🎁 무료] AI 실무 용어집 받기 →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
