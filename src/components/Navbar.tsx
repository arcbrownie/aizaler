'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BookOpen, Mic, Bookmark, GraduationCap, Menu, X, Info } from 'lucide-react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-zinc-200/90 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-white font-black text-sm shadow-2xs group-hover:bg-brand-600 transition-colors">
            AI
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold text-lg text-zinc-900 tracking-tight">AI잘러</span>
            <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-600 border border-zinc-200">
              Journal
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 text-xs font-semibold text-zinc-600">
          <Link
            href="/insights"
            className="px-3.5 py-2 rounded-lg hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
          >
            인사이트
          </Link>
          <Link
            href="/tools"
            className="px-3.5 py-2 rounded-lg hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
          >
            AI 도구 비교
          </Link>
          <Link
            href="/glossary"
            className="px-3.5 py-2 rounded-lg hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
          >
            용어집
          </Link>
          <Link
            href="/class"
            className="px-3.5 py-2 rounded-lg hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
          >
            부트캠프
          </Link>
          <Link
            href="/about"
            className="px-3.5 py-2 rounded-lg hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
          >
            소개
          </Link>
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/glossary"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-zinc-900 text-white text-xs font-bold hover:bg-zinc-800 transition-colors shadow-2xs"
          >
            <span>용어집 열람</span>
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
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            인사이트
          </Link>
          <Link
            href="/tools"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            AI 도구 비교
          </Link>
          <Link
            href="/glossary"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            용어집
          </Link>
          <Link
            href="/class"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            부트캠프
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            소개
          </Link>
        </div>
      )}
    </header>
  );
}
