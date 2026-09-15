'use client';

import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import { 
  TerminalWindow, 
  MagnifyingGlass, 
  ArrowUpRight, 
  Sparkle, 
  Flame, 
  ShieldCheck,
  Article,
  UsersThree
} from '@phosphor-icons/react';
import FloatingDock from '@/components/FloatingDock';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="bg-[#f2f4f6] text-[#191f28] min-h-screen flex flex-col antialiased">
        {/* 상단 띠배너 (토스 인포 바) */}
        <div className="bg-[#191f28] text-white text-xs py-2 px-4 text-center font-medium">
          <span className="text-[#3182f6] font-bold mr-2">✦ 2026 런칭 얼리버드</span>
          <span>지금 방문 시 <b>메타 추천 알고리즘 Two-Tower 진단 SQL 쿼리북</b> 무료 증정</span>
          <a href="#lead-magnet" className="inline-flex items-center ml-2 text-blue-400 font-bold hover:underline">
            다운받기 <ArrowUpRight size={12} weight="bold" className="ml-0.5" />
          </a>
        </div>

        {/* 메인 헤더 (토스 스타일 미니멀 & 클린) */}
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
            <nav className="hidden md:flex items-center gap-7 text-[14px] font-semibold text-[#4e5968]">
              <a href="#solutions" className="hover:text-[#3182f6] transition-colors">
                실전 솔루션
              </a>
              <a href="#lessons" className="hover:text-[#3182f6] transition-colors flex items-center gap-1 text-amber-600">
                <Flame size={16} weight="fill" className="text-amber-500" />
                실패 복기록
              </a>
              <a href="#proof" className="hover:text-[#3182f6] transition-colors">
                DB 실측 증명
              </a>
              <a href="#columns" className="hover:text-[#3182f6] transition-colors">
                엔지니어 칼럼
              </a>
              <a href="#reviews" className="hover:text-[#3182f6] transition-colors">
                빌더 후기
              </a>
            </nav>

            {/* 헤더 우측 액션 */}
            <div className="flex items-center gap-2.5 shrink-0">
              <a
                href="#lead-magnet"
                className="hidden sm:inline-flex text-xs font-bold px-3.5 py-2 rounded-xl bg-[#e8f3ff] text-[#3182f6] hover:bg-blue-100 transition-colors"
              >
                무료 4종 번들
              </a>
              <a
                href="#solutions"
                className="toss-button-primary text-xs sm:text-sm px-4 py-2 shadow-sm inline-flex items-center gap-1"
              >
                솔루션 보기
              </a>
            </div>
          </div>
        </header>

        {/* 메인 콘텐츠 */}
        <main className="flex-1">
          {children}
        </main>

        {/* 플로팅 글래스 독 바 (하단 고정) */}
        <FloatingDock />

        {/* 푸터 (토스 스타일 클린 & 투명한 안내) */}
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
                  aizaler는 이론만 말하는 강사가 아닙니다. 실제 1인 기업으로 프로덕트 4개를 직접 개발·운영하며 수십만 트래픽의 DB 로그와 추천 알고리즘을 까서 밝혀낸 실전 AI 오케스트레이션 지식 허브입니다.
                </p>
                <div className="text-[11px] text-[#8b95a1] space-y-1">
                  <p>운영사: 브라운임팩트랩스 (Brown Impact Labs) | 대표 포트폴리오: 라이브 프로덕트 A (운세·상담), B (빅데이터), C (어학)</p>
                  <p>본 사이트는 실제 프로덕트 DB 로그와 추천 알고리즘 수식을 기반으로 제작되었습니다.</p>
                </div>
              </div>

              {/* 공식 소셜 링크 */}
              <div className="space-y-2.5">
                <h4 className="text-[#191f28] font-bold text-xs">공식 소셜 채널</h4>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://threads.net/@aizaler.kr"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f2f4f6] text-[#4e5968] hover:text-[#3182f6] transition-colors text-xs font-semibold"
                  >
                    <span>Threads</span>
                    <ArrowUpRight size={12} weight="bold" />
                  </a>
                  <a
                    href="https://instagram.com/aizaler.kr"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f2f4f6] text-[#4e5968] hover:text-pink-600 transition-colors text-xs font-semibold"
                  >
                    <span>Instagram</span>
                    <ArrowUpRight size={12} weight="bold" />
                  </a>
                  <a
                    href="https://brownimpactlabs.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f2f4f6] text-[#4e5968] hover:text-[#191f28] transition-colors text-xs font-semibold"
                  >
                    <span>Brown Impact Labs HQ</span>
                    <ArrowUpRight size={12} weight="bold" />
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
      </body>
    </html>
  );
}
