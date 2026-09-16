'use client';

import React from 'react';
import './globals.css';
import Link from 'next/link';
import { 
  TerminalWindow, 
  ArrowUpRight, 
  Sparkle, 
  Flame, 
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
        <title>aizaler.kr | AI 블록을 조립하는 1인 빌더 성장 스튜디오</title>
        <meta 
          name="description" 
          content="코딩을 외우지 마세요. Claude Academy 정본과 Aside 브라우저 자율 에이전트, 검증된 퍼널을 레고처럼 조립해 나만의 프로덕트와 현금 흐름을 만드는 1인 AI 빌더 성장 프로그램." 
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
              <span className="text-[#3182f6] font-bold mr-2">✦ 어릴 때 레고 좋아하셨나요?</span>
              <span>코딩 없이 AI 블록을 조립해 내 제품을 띄우는 <b>1인 빌더 성장 프로그램</b></span>
              <a href="#ai-prescription" className="inline-flex items-center ml-2 text-blue-400 font-bold hover:underline">
                내 빌더 레벨 1분 진단하기 <ArrowUpRight size={12} weight="bold" className="ml-0.5" />
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
                      1인 AI 빌더 스튜디오
                    </span>
                  </div>
                </Link>

                {/* 네비게이션: 3대 모드 및 1:1 VIP 연동 */}
                <nav className="hidden lg:flex items-center gap-6 text-[14px] font-semibold text-[#4e5968]">
                  <a href="#ai-prescription" className="hover:text-[#3182f6] transition-colors text-[#3182f6] font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3182f6] animate-ping" />
                    빌더 진단
                  </a>
                  <a href="#modes" className="hover:text-[#3182f6] transition-colors">
                    3대 빌더 모드
                  </a>
                  <Link href="/career" className="hover:text-[#3182f6] transition-colors flex items-center gap-1 text-[#3182f6] font-bold">
                    1:1 프라이빗 세션
                    <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[#e8f3ff] text-[#3182f6] font-mono">VIP</span>
                  </Link>
                  <Link href="/about" className="hover:text-[#3182f6] transition-colors flex items-center gap-1">
                    사이트 소개
                  </Link>
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
                    <span>무료 가이드 받기</span>
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
                        Meta Certified Pro
                      </span>
                    </div>
                    <p className="text-[#4e5968] leading-relaxed text-xs">
                      aizaler는 이론만 말하는 학원이 아닙니다. 공기업·해외 주재원을 거쳐 1인 개발에 도전한 창업자이자, <b>Meta Certified Media Planning Professional(메타 공인 미디어 플래닝 전문가)</b>로서 스레드 2개 버티컬 계정 합산 500만 뷰 실측 DB 로그와 결제 데이터로 검증된 실전 솔루션만을 제공합니다.
                    </p>
                    <div className="text-[11px] text-[#8b95a1] space-y-1">
                      <p>운영사: 브라운임팩트랩스 (Brown Impact Labs) | 대표 포트폴리오: 라이브 프로덕트 A, B, C 운영</p>
                      <p>자격: Meta Certified Media Planning Professional 보유 | 실측 데이터베이스 기반</p>
                    </div>
                  </div>

                  {/* 공식 소셜 링크 (HQ 직접 링크 제거) */}
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
