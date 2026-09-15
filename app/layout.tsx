'use client';

import React from 'react';
import './globals.css';
import Link from 'next/link';
import { 
  TerminalWindow, 
  ArrowUpRight, 
  Sparkle, 
  Flame, 
  Calculator,
  Target,
  DownloadSimple
} from '@phosphor-icons/react';
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isCareerPage = pathname?.startsWith('/career');

  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <title>aizaler.kr | 1인 빌더의 메타 알고리즘 역공학 & 실전 그로스 엔지니어링</title>
        <meta 
          name="description" 
          content="공기업·해외주재원 퇴사 후 1인 개발 도전. 423만 뷰 695편 전수 DB 로그 분석, 메타 알고리즘(DLRM) 역공학과 메타 광고 실측 전환율 8.6% 소오름 매칭 공식 공개." 
        />
        <link 
          rel="stylesheet" 
          as="style" 
          crossOrigin="anonymous" 
          href="https://cdn.jsdelivr.net/npm/wanted-sans@1.0.3/fonts/webfonts/variable/complete/WantedSansVariable.min.css" 
        />
      </head>
      <body className={`${isCareerPage ? 'bg-[#050A18] text-[#FAF6F0]' : 'bg-[#f2f4f6] text-[#191f28]'} min-h-screen flex flex-col antialiased`}>
        {isCareerPage ? (
          children
        ) : (
          <>
            {/* 상단 띠배너 (토스 스타일 슬림 인포 바) */}
            <div className="bg-[#191f28] text-white text-xs py-2 px-4 text-center font-medium">
              <span className="text-[#3182f6] font-bold mr-2">✦ 2026 무료 배포</span>
              <span>423만 뷰 실측 DB! <b>'메타 Two-Tower 오염 진단 SQL 쿼리북'</b> 무료 증정</span>
              <a href="#lead-magnet" className="inline-flex items-center ml-2 text-blue-400 font-bold hover:underline">
                다운받기 <ArrowUpRight size={12} weight="bold" className="ml-0.5" />
              </a>
            </div>

        {/* 메인 헤더 (모던 미니멀 & 클린 GNB) */}
        <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-black/[0.04]">
          <div className="toss-container h-16 flex items-center justify-between gap-6">
            {/* 좌측 로고 */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
              <div className="w-8 h-8 rounded-xl bg-[#3182f6] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
                <TerminalWindow size={20} weight="duotone" className="text-white" />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-black tracking-tight text-[#191f28]">
                  aizaler<span className="text-[#3182f6]">.kr</span>
                </span>
                <span className="text-[11px] font-semibold text-[#8b95a1] hidden sm:inline">
                  AI 잘 쓰는 사람들
                </span>
              </div>
            </Link>

            {/* 네비게이션 */}
            <nav className="hidden lg:flex items-center gap-6 text-[14px] font-semibold text-[#4e5968]">
              <a href="#origin-story" className="hover:text-[#3182f6] transition-colors flex items-center gap-1 text-slate-800">
                <Sparkle size={15} weight="fill" className="text-amber-500" />
                창업자 스토리
              </a>
              <a href="#algorithm" className="hover:text-[#3182f6] transition-colors">
                알고리즘 역공학
              </a>
              <a href="#meta-ads" className="hover:text-[#3182f6] transition-colors">
                메타 광고 실측
              </a>
              <a href="#first-9" className="hover:text-[#3182f6] transition-colors">
                First 9 벡터
              </a>
              <Link href="/career" className="hover:text-[#3182f6] transition-colors flex items-center gap-1 text-[#3182f6] font-bold">
                커리어 전략
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[#e8f3ff] text-[#3182f6] font-mono">NEW</span>
              </Link>
              <a href="#solutions" className="hover:text-[#3182f6] transition-colors">
                실전 솔루션
              </a>
              <a href="#faq" className="hover:text-[#3182f6] transition-colors">
                FAQ
              </a>
            </nav>

            {/* 우측 무료 가이드 CTA */}
            <div className="flex items-center gap-3">
              <a
                href="#lead-magnet"
                className="toss-button-primary px-4 py-2 text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-sm"
              >
                <DownloadSimple size={16} weight="bold" />
                <span>무료 쿼리북 받기</span>
              </a>
            </div>
          </div>
        </header>

        {/* 메인 본문 */}
        <main className="flex-1 pb-20">
          {children}
        </main>

        {/* 신뢰 기반 푸터 */}
        <footer className="border-t border-black/[0.04] bg-white text-[#8b95a1] text-xs py-14">
          <div className="toss-container space-y-8">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div className="space-y-2.5 max-w-md">
                <div className="flex items-center gap-2">
                  <span className="text-base font-black text-[#191f28]">aizaler.kr</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#e8f3ff] text-[#3182f6]">
                    AI Native
                  </span>
                </div>
                <p className="text-[#4e5968] leading-relaxed text-xs">
                  aizaler는 이론만 말하는 강사가 아닙니다. 남들이 선망하던 공기업과 해외 주재원 생활을 마치고 1인 개발에 도전해 살아남은 솔로프리너의 실제 생존 기록이자, 423만 뷰 DB 로그와 실측 전환 데이터로 검증된 실전 그로스 엔지니어링 지식 허브입니다.
                </p>
                <div className="text-[11px] text-[#8b95a1] space-y-1">
                  <p>운영사: 브라운임팩트랩스 (Brown Impact Labs) | 대표 포트폴리오: 라이브 프로덕트 A, B, C 운영</p>
                  <p>본 사이트의 모든 수치는 실제 데이터베이스 로그와 실측 데이터를 기반으로 제작되었습니다.</p>
                </div>
              </div>

              {/* 공식 소셜 링크 */}
              <div className="space-y-2.5">
                <h4 className="text-[#191f28] font-bold text-xs">공식 채널</h4>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://threads.net/@aizaler.kr"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f2f4f6] text-[#4e5968] hover:text-[#3182f6] transition-colors text-xs font-semibold"
                  >
                    <span>Threads</span>
                    <ArrowUpRight size={12} />
                  </a>
                  <a
                    href="https://instagram.com/aizaler.kr"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f2f4f6] text-[#4e5968] hover:text-pink-600 transition-colors text-xs font-semibold"
                  >
                    <span>Instagram</span>
                    <ArrowUpRight size={12} />
                  </a>
                  <a
                    href="https://brownimpactlabs.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f2f4f6] text-[#4e5968] hover:text-[#191f28] transition-colors text-xs font-semibold"
                  >
                    <span>Brown Impact Labs HQ</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-black/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#8b95a1]">
              <p>© 2026 aizaler.kr. All rights reserved. Powered by Brown Impact Labs.</p>
              <div className="flex gap-4">
                <span className="hover:text-[#4e5968] cursor-pointer">개인정보처리방침</span>
                <span className="hover:text-[#4e5968] cursor-pointer">이용약관</span>
                <span className="hover:text-[#4e5968] cursor-pointer">환불규정</span>
              </div>
            </div>
          </div>
        </footer>
          </>
        )}
      </body>
    </html>
  );
}
