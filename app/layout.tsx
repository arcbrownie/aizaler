'use client';

import React from 'react';
import './globals.css';
import Link from 'next/link';
import { ArrowUpRight } from '@phosphor-icons/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <title>AIZALER | AI 빌더 교육 & 1:1 커리어 컨설팅</title>
        <meta
          name="description"
          content="AI 업무 자동화부터 스레드 500만 뷰·메타 광고 수익화, 1인 풀스택 프로덕트 런칭, 그리고 1:1 커리어 의사결정 컨설팅."
        />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/npm/wanted-sans@1.0.3/fonts/webfonts/variable/complete/WantedSansVariable.min.css"
        />
      </head>
      <body className="bg-baseplate text-[#111827] min-h-screen flex flex-col antialiased selection:bg-[#10B981] selection:text-white">
        {/* 헤더 */}
        <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-gray-200/80">
          <div className="toss-container h-16 flex items-center justify-between gap-4">
            {/* 세련된 아키텍처 심볼 로고 + 워드마크 */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <div className="w-9 h-9 rounded-xl bg-[#0F172A] flex items-center justify-center shadow-[0_2px_0_#000] group-hover:translate-y-[-1px] transition-transform">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* 좌측 3단 적층 레이어 */}
                  <rect x="2.5" y="13.5" width="9.5" height="3.5" rx="1" fill="#F59E0B" />
                  <rect x="2.5" y="8.5" width="9.5" height="3.5" rx="1" fill="#10B981" />
                  <rect x="2.5" y="3.5" width="9.5" height="3.5" rx="1" fill="#F43F5E" />
                  {/* 우측 수직 필러 */}
                  <rect x="13.8" y="3.5" width="3.7" height="13.5" rx="1" fill="#3B82F6" />
                </svg>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-black tracking-tight text-gray-950">
                  AIZALER
                </span>
                <span className="hidden sm:inline-block text-[11px] font-bold text-gray-400 tracking-tight">
                  AI & Career Lab
                </span>
              </div>
            </Link>

            {/* 네비게이션 */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-gray-600">
              <Link href="/#curriculum" className="hover:text-gray-950 transition-colors">
                커리큘럼
              </Link>
              <Link href="/#stage-2" className="hover:text-emerald-600 transition-colors">
                스레드·메타 수익화
              </Link>
              <Link href="/career" className="hover:text-blue-600 transition-colors">
                1:1 컨설팅
              </Link>
              <Link href="/about" className="hover:text-gray-950 transition-colors">
                파운더
              </Link>
            </nav>

            {/* 우측 CTA */}
            <div className="flex items-center gap-2.5">
              <Link
                href="/career"
                className="brick-btn-blue px-4 py-2 text-xs sm:text-sm font-extrabold inline-flex items-center gap-1.5"
              >
                <span>1:1 컨설팅 신청</span>
              </Link>
            </div>
          </div>
        </header>

        {/* 본문 */}
        <main className="flex-1">{children}</main>

        {/* 푸터 */}
        <footer className="border-t border-gray-200 bg-white text-gray-500 text-xs py-12">
          <div className="toss-container">
            <div className="flex flex-col md:flex-row justify-between gap-8 pb-8 border-b border-gray-100">
              <div className="space-y-2 max-w-md">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-black tracking-tight text-gray-950">
                    AIZALER
                  </span>
                  <span className="text-gray-300">|</span>
                  <span className="text-xs font-bold text-gray-500">
                    Brown Impact Labs
                  </span>
                </div>
                <p className="text-gray-500 leading-relaxed text-xs">
                  공기업·해외 주재원을 거쳐 홀로 4개의 상용 웹서비스를 운영하는 파운더의 실전 AI 교육 & 1:1 커리어 컨설팅 스튜디오.
                </p>
              </div>

              <div className="flex gap-12">
                <div className="space-y-2">
                  <h4 className="text-gray-900 font-bold text-xs">프로그램</h4>
                  <ul className="space-y-1.5 text-xs text-gray-500">
                    <li>
                      <Link href="/product/aside-starter" className="hover:text-gray-900 transition-colors">
                        Git 에이전트 스킬 & 자동화
                      </Link>
                    </li>
                    <li>
                      <Link href="/product/1" className="hover:text-gray-900 transition-colors">
                        스레드 500만 뷰 수익화 바이블
                      </Link>
                    </li>
                    <li>
                      <Link href="/product/3" className="hover:text-gray-900 transition-colors">
                        메타 광고 CVR 8.6% 플레이북
                      </Link>
                    </li>
                    <li>
                      <Link href="/product/6" className="hover:text-gray-900 transition-colors">
                        1인 풀스택 웹서비스 아키텍처
                      </Link>
                    </li>
                    <li>
                      <Link href="/career" className="hover:text-blue-600 transition-colors">
                        1:1 커리어 & 빌더 컨설팅
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-gray-900 font-bold text-xs">운영 프로덕트</h4>
                  <ul className="space-y-1.5 text-xs text-gray-500">
                    <li>
                      <a
                        href="https://myeongsado.com"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-gray-900 inline-flex items-center gap-0.5"
                      >
                        명사도 <ArrowUpRight size={11} />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://maengmo.kr"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-gray-900 inline-flex items-center gap-0.5"
                      >
                        맹모인사이트 <ArrowUpRight size={11} />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://79english.com"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-gray-900 inline-flex items-center gap-0.5"
                      >
                        칠구영어 <ArrowUpRight size={11} />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://brownimpactlabs.com"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-gray-900 inline-flex items-center gap-0.5"
                      >
                        브라운임팩트랩스 <ArrowUpRight size={11} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-[11px] text-gray-400">
              <p>© 2026 Brown Impact Labs. All rights reserved.</p>
              <p>Meta Certified Media Planning Professional</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
