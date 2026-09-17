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
      <body className={`${isCareerPage ? 'bg-[#050A18] text-[#FAF6F0]' : 'bg-[#080C14] text-[#F8FAFC]'} min-h-screen flex flex-col antialiased selection:bg-[#CCFF00] selection:text-[#080C14]`}>
        {isCareerPage ? (
          children
        ) : (
          <>
            {/* 🏃 상단 띠배너: 러닝크루 공식 알림 스트립 */}
            <div className="bg-[#0D1322] border-b border-white/[0.06] text-xs py-2 px-4 text-center font-medium text-gray-300 flex items-center justify-center gap-2">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-black athletic-badge-volt">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-ping" />
                CREW 01 RECRUITING
              </span>
              <span className="hidden sm:inline text-gray-400">|</span>
              <span className="text-gray-200">
                AI FOMO에서 탈출해, 3주 만에 내 제품의 첫 결승선을 넘는 <b>온라인 빌더 러닝크루 1기</b>
              </span>
              <a href="#courses" className="inline-flex items-center text-[#CCFF00] font-bold hover:underline ml-1">
                코스 확인 <ArrowUpRight size={12} weight="bold" className="ml-0.5" />
              </a>
            </div>

            {/* 메인 헤더: 다크 미니멀 & 에슬레틱 GNB */}
            <header className="sticky top-0 z-40 bg-[#080C14]/80 backdrop-blur-xl border-b border-white/[0.08]">
              <div className="toss-container h-16 flex items-center justify-between gap-6">
                {/* 좌측 로고 */}
                <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
                  <div className="w-8 h-8 rounded-xl bg-[#CCFF00] text-[#080C14] flex items-center justify-center font-black shadow-sm group-hover:scale-105 transition-transform">
                    <TerminalWindow size={20} weight="fill" />
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xl font-black tracking-tight text-white">
                      aizaler<span className="text-[#CCFF00]">.kr</span>
                    </span>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-gray-400 hidden sm:inline px-1.5 py-0.5 rounded bg-white/[0.05] border border-white/[0.08]">
                      BUILDER RUNNING CLUB
                    </span>
                  </div>
                </Link>

                {/* 네비게이션: 러닝크루 플로우 연동 */}
                <nav className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-gray-300">
                  <a href="#courses" className="hover:text-[#CCFF00] transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]" />
                    러닝 코스 (5K·10K·HALF)
                  </a>
                  <a href="#pacing" className="hover:text-[#CCFF00] transition-colors">
                    3주 페이싱 & 트로피
                  </a>
                  <a href="#action" className="hover:text-[#CCFF00] transition-colors">
                    크루 합류 (15명 한정)
                  </a>
                  <a href="#lab" className="hover:text-[#CCFF00] transition-colors">
                    트레이닝 랩
                  </a>
                  <Link href="/career" className="hover:text-[#CCFF00] transition-colors flex items-center gap-1 text-amber-300 font-semibold">
                    1:1 VIP 페이서
                    <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 font-mono">1:1</span>
                  </Link>
                  <Link href="/about" className="hover:text-gray-200 text-gray-400 transition-colors">
                    스튜디오 철학
                  </Link>
                </nav>

                {/* 우측 액션 CTA */}
                <div className="flex items-center gap-3">
                  <a
                    href="#courses"
                    className="athletic-btn-volt px-4 py-2 text-xs font-black rounded-xl flex items-center gap-1.5 shadow-sm active:scale-95"
                  >
                    <Sparkle size={14} weight="fill" />
                    <span>러닝 코스 선택</span>
                  </a>
                </div>
              </div>
            </header>

            {/* 메인 본문 */}
            <main className="flex-1 pb-20">
              {children}
            </main>

            {/* 신뢰 기반 프리미엄 다크 푸터 */}
            <footer className="border-t border-white/[0.08] bg-[#05080F] text-gray-400 text-xs py-16">
              <div className="toss-container space-y-8">
                <div className="flex flex-col md:flex-row justify-between gap-8">
                  <div className="space-y-3 max-w-md">
                    <div className="flex items-center gap-2">
                      <span className="text-base font-black text-white">aizaler.kr</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                        Meta Certified Pro
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full athletic-badge-volt">
                        RUNNING GUILD
                      </span>
                    </div>
                    <p className="text-gray-400 leading-relaxed text-xs">
                      aizaler는 이론만 읊는 흔한 인강 사이트가 아닙니다. 공기업·해외 주재원을 거쳐 1인 개발에 도전한 창업자이자, <b>Meta Certified Media Planning Professional(메타 공인 미디어 플래닝 전문가)</b>로서 스레드 2개 버티컬 계정 합산 500만 뷰 실측 로그와 실제 결제 데이터로 검증된 실전 솔루션만을 나눕니다.
                    </p>
                    <div className="text-[11px] text-gray-500 space-y-1 font-mono">
                      <p>운영사: 브라운임팩트랩스 (Brown Impact Labs) | 대표 포트폴리오: 라이브 프로덕트 운영</p>
                      <p>자격: Meta Certified Media Planning Professional 보유 | 실측 데이터베이스 기반</p>
                    </div>
                  </div>

                  {/* 공식 소셜 링크 */}
                  <div className="space-y-2.5">
                    <h4 className="text-white font-bold text-xs tracking-wider uppercase">Official Community</h4>
                    <div className="flex flex-wrap gap-2">
                      <a
                        href="https://threads.net/@aizaler.kr"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-gray-300 hover:text-[#CCFF00] hover:border-[#CCFF00]/40 transition-colors text-xs font-semibold"
                      >
                        <span>Threads @aizaler.kr</span>
                        <ArrowUpRight size={12} />
                      </a>
                      <a
                        href="https://instagram.com/aizaler.kr"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-gray-300 hover:text-pink-400 hover:border-pink-500/40 transition-colors text-xs font-semibold"
                      >
                        <span>Instagram @aizaler.kr</span>
                        <ArrowUpRight size={12} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-gray-500">
                  <p>© 2026 aizaler.kr. All rights reserved. Powered by Brown Impact Labs.</p>
                  <div className="flex gap-4">
                    <span className="hover:text-gray-300 cursor-pointer">개인정보처리방침</span>
                    <span className="hover:text-gray-300 cursor-pointer">이용약관</span>
                    <span className="hover:text-gray-300 cursor-pointer">환불규정</span>
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
