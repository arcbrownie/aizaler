'use client';

import React from 'react';
import './globals.css';
import Link from 'next/link';
import { Cube, ArrowUpRight, Sparkle, Compass } from '@phosphor-icons/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <title>aizaler.kr | 어릴 적 블록 조립 좋아하던 빌더를 위한 AI 조립 & 수익화 스튜디오</title>
        <meta
          name="description"
          content="🟡 Stage 1(내 도구 조립)부터 🟢 Stage 2(스레드 500만 뷰·메타 광고 수익화), 🔴 Stage 3(1인 풀스택 시스템), 그리고 🔵 파운더 1:1 커리어 의사결정까지. 나를 위해 만든 작은 블록을 수익원으로 바꾸는 실전 설계도."
        />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/npm/wanted-sans@1.0.3/fonts/webfonts/variable/complete/WantedSansVariable.min.css"
        />
      </head>
      <body className="bg-[#070B14] text-[#F8FAFC] min-h-screen flex flex-col antialiased selection:bg-[#10B981] selection:text-[#070B14]">
        {/* 상단 띠배너: Stage 1·2·3 & 파란 트랙 1:1 커리어 세션 알림 */}
        <div className="bg-[#0C1322] border-b border-white/[0.07] text-xs py-2.5 px-4 text-center font-medium text-gray-300 flex flex-wrap items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-white/5 border border-white/10 text-slate-200">
            <span>🟡 S1</span>
            <span>➔</span>
            <span>🟢 S2</span>
            <span>➔</span>
            <span>🔴 S3</span>
            <span className="text-white/30">|</span>
            <span className="text-blue-400">🔵 CAREER</span>
          </span>
          <span className="text-gray-200">
            어릴 때 블록 조립 좋아하셨나요? <b className="text-emerald-300">스레드 500만 뷰·메타 수익화 바이블</b> &{' '}
            <b className="text-blue-300">공기업·주재원 파운더 1:1 커리어 세션</b> 오픈
          </span>
          <Link href="/career" className="inline-flex items-center text-blue-400 font-bold hover:underline ml-1">
            1:1 커리어 세션 보기 <ArrowUpRight size={12} weight="bold" className="ml-0.5" />
          </Link>
        </div>

        {/* 메인 헤더: Brick Architecture Dark Studio GNB */}
        <header className="sticky top-0 z-40 bg-[#070B14]/85 backdrop-blur-xl border-b border-white/[0.08]">
          <div className="toss-container h-16 flex items-center justify-between gap-4">
            {/* 좌측 로고 */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 via-emerald-400 to-rose-500 text-[#070B14] flex items-center justify-center font-black shadow-md group-hover:scale-105 transition-transform">
                <Cube size={21} weight="fill" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-black tracking-tight text-white">
                  aizaler<span className="text-emerald-400">.kr</span>
                </span>
                <span className="text-[10px] font-mono tracking-wider uppercase text-gray-400 hidden sm:inline px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]">
                  BRICK BUILDER STUDIO
                </span>
              </div>
            </Link>

            {/* 네비게이션: 🟡 Stage 1 ➔ 🟢 Stage 2(주력) ➔ 🔴 Stage 3 + 🔵 커리어 트랙 */}
            <nav className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-gray-300">
              <Link href="/#roadmap" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                3단계 성장 로드맵
              </Link>
              <Link
                href="/#monetize"
                className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 text-emerald-300 font-semibold"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                스레드·메타 수익화
                <span className="text-[9px] px-1.5 py-0.5 rounded-full badge-stage2 font-mono">STAGE 2 주력</span>
              </Link>
              <Link
                href="/#career-spotlight"
                className="hover:text-blue-300 transition-colors flex items-center gap-1.5 text-blue-300 font-semibold"
              >
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                1:1 커리어·빌더 컨설팅
                <span className="text-[9px] px-1.5 py-0.5 rounded-full badge-career font-mono">재능기부</span>
              </Link>
              <Link href="/#catalog" className="hover:text-white transition-colors">
                전체 브릭 카탈로그
              </Link>
              <Link href="/#lab" className="hover:text-white transition-colors">
                3D 조립 실험실
              </Link>
              <Link href="/about" className="hover:text-white text-gray-400 transition-colors">
                파운더 스토리
              </Link>
            </nav>

            {/* 우측 액션 CTA */}
            <div className="flex items-center gap-2.5">
              <Link
                href="/career"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl badge-career hover:bg-blue-500/25 text-xs font-bold transition-all"
              >
                <Compass size={15} weight="bold" />
                <span>🔵 1:1 커리어 연구소</span>
              </Link>
              <Link
                href="/#monetize"
                className="btn-stage2-green px-4 py-2 text-xs font-black rounded-xl flex items-center gap-1.5 shadow-sm active:scale-95"
              >
                <Sparkle size={14} weight="fill" />
                <span>🟢 수익화 엔진 보기</span>
              </Link>
            </div>
          </div>
        </header>

        {/* 메인 본문 */}
        <main className="flex-1 pb-20">{children}</main>

        {/* 프리미엄 다크 빌더 스튜디오 푸터 */}
        <footer className="border-t border-white/[0.08] bg-[#04070D] text-gray-400 text-xs py-16">
          <div className="toss-container space-y-8">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div className="space-y-3 max-w-lg">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-base font-black text-white">aizaler.kr</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full badge-stage2">
                    Meta Certified Pro
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    🟡 S1 · 🟢 S2 · 🔴 S3 · 🔵 CAREER
                  </span>
                </div>
                <p className="text-gray-400 leading-relaxed text-xs">
                  어릴 적 블록 조립을 좋아하던 마음 그대로, 나를 위해 만든 작은 도구를 실제 수익원(Cashflow)으로 연결하는 1인 빌더 스튜디오입니다. 공기업·해외 주재원을 거쳐 홀로 4개의 상용 서비스를 띄우고,{' '}
                  <b>Meta Certified Media Planning Professional</b>로서 스레드 500만 뷰 실측 DB와 메타 광고 퍼널로 검증한 설계도만 공유합니다.
                </p>
                <div className="text-[11px] text-gray-500 space-y-1 font-mono">
                  <p>운영 스튜디오: 브라운임팩트랩스 (Brown Impact Labs · Est. Aug 2025)</p>
                  <p>라이브 프로덕트: 명사도(myeongsado.com) · 맹모인사이트(maengmo.kr) · 칠구영어(79english.com)</p>
                </div>
              </div>

              {/* 바로가기 & 소셜 링크 */}
              <div className="flex flex-col sm:flex-row gap-8">
                <div className="space-y-2.5">
                  <h4 className="text-white font-bold text-xs tracking-wider uppercase">Stage & Track</h4>
                  <ul className="space-y-2 text-xs text-gray-400">
                    <li>
                      <Link href="/product/2" className="hover:text-amber-400 transition-colors">
                        🟡 Stage 1: 무료 스타터 브릭 & 내 도구 조립
                      </Link>
                    </li>
                    <li>
                      <Link href="/product/1" className="hover:text-emerald-400 transition-colors text-emerald-300 font-semibold">
                        🟢 Stage 2: 스레드 500만 뷰 수익화 바이블
                      </Link>
                    </li>
                    <li>
                      <Link href="/product/3" className="hover:text-emerald-400 transition-colors text-emerald-300 font-semibold">
                        🟢 Stage 2: 메타 광고 CVR 8.6% 플레이북
                      </Link>
                    </li>
                    <li>
                      <Link href="/product/6" className="hover:text-rose-400 transition-colors">
                        🔴 Stage 3: 월 $42 1인 풀스택 아키텍처
                      </Link>
                    </li>
                    <li>
                      <Link href="/career" className="hover:text-blue-400 transition-colors text-blue-300 font-semibold">
                        🔵 Career: 1:1 커리어 & 빌더 의사결정 세션
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2.5">
                  <h4 className="text-white font-bold text-xs tracking-wider uppercase">Live Products</h4>
                  <ul className="space-y-2 text-xs text-gray-400">
                    <li>
                      <a
                        href="https://myeongsado.com"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-white transition-colors inline-flex items-center gap-1"
                      >
                        명사도 (AI 작명소) <ArrowUpRight size={11} />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://maengmo.kr"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-white transition-colors inline-flex items-center gap-1"
                      >
                        맹모인사이트 (학군·부동산) <ArrowUpRight size={11} />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://79english.com"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-white transition-colors inline-flex items-center gap-1"
                      >
                        칠구영어 (비즈니스 영어) <ArrowUpRight size={11} />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://brownimpactlabs.com"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-white transition-colors inline-flex items-center gap-1"
                      >
                        브라운임팩트랩스 공식 홈 <ArrowUpRight size={11} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-gray-500">
              <p>© 2026 Brown Impact Labs (aizaler.kr). All rights reserved.</p>
              <p className="font-mono">
                🟡 STAGE 1 (STARTER) · 🟢 STAGE 2 (GROWTH) · 🔴 STAGE 3 (ENGINE) · 🔵 CAREER 1:1
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
