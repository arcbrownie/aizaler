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
        <title>aizaler.kr | 나를 위한 작은 블록을 수익원으로 조립하는 빌더 스튜디오</title>
        <meta
          name="description"
          content="Stage 1(내 도구 조립) ➔ Stage 2(스레드 500만 뷰 & 메타 광고 수익화) ➔ Stage 3(1인 풀스택 시스템) 그리고 공기업·주재원 퇴사 파운더의 1:1 커리어 & 빌더 의사결정 세션."
        />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/npm/wanted-sans@1.0.3/fonts/webfonts/variable/complete/WantedSansVariable.min.css"
        />
      </head>
      <body className="bg-baseplate text-[#111827] min-h-screen flex flex-col antialiased selection:bg-[#10B981] selection:text-white">
        {/* 미니멀 브릭 스튜디오 헤더 (알약 배지·이모지 제거) */}
        <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-xl border-b border-gray-200/80">
          <div className="toss-container h-16 flex items-center justify-between gap-4">
            {/* 좌측 로고: 4컬러 미니 블록 그리드 */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
              <div className="grid grid-cols-2 gap-0.5 p-1.5 rounded-xl bg-gray-900 group-hover:scale-105 transition-transform">
                <span className="w-2.5 h-2.5 rounded-[3px] bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-[3px] bg-emerald-400" />
                <span className="w-2.5 h-2.5 rounded-[3px] bg-rose-500" />
                <span className="w-2.5 h-2.5 rounded-[3px] bg-blue-500" />
              </div>
              <span className="text-xl font-black tracking-tight text-gray-900">
                aizaler<span className="text-emerald-500">.kr</span>
              </span>
            </Link>

            {/* 깔끔한 텍스트 네비게이션 */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-bold text-gray-600">
              <Link href="/#stack-builder" className="hover:text-gray-900 transition-colors">
                블록 조립 스테이션
              </Link>
              <Link href="/#monetize" className="hover:text-emerald-600 transition-colors">
                스레드·메타 수익화
              </Link>
              <Link href="/#career" className="hover:text-blue-600 transition-colors">
                1:1 커리어·빌더 컨설팅
              </Link>
              <Link href="/about" className="hover:text-gray-900 transition-colors">
                파운더 소개
              </Link>
            </nav>

            {/* 우측 단일 액션 버튼 */}
            <div className="flex items-center gap-2.5">
              <Link
                href="/career"
                className="brick-btn-blue px-4 py-2 text-xs sm:text-sm font-extrabold inline-flex items-center gap-1.5"
              >
                <span>1:1 커리어 컨설팅</span>
              </Link>
            </div>
          </div>
        </header>

        {/* 메인 본문 */}
        <main className="flex-1">{children}</main>

        {/* 심플하고 정돈된 스튜디오 푸터 */}
        <footer className="border-t border-gray-200 bg-white text-gray-500 text-xs py-14">
          <div className="toss-container space-y-8">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div className="space-y-2.5 max-w-lg">
                <div className="text-base font-black text-gray-900">aizaler.kr</div>
                <p className="text-gray-500 leading-relaxed text-xs">
                  어릴 적 블록 조립을 좋아하던 마음 그대로, 나를 위해 만든 작은 도구를 실제 수익원으로 연결하는 1인 빌더 스튜디오입니다. 공기업·해외 주재원을 거쳐 홀로 4개의 상용 서비스를 띄우고, Meta Certified Media Planning Professional로서 스레드 500만 뷰 실측 DB와 메타 광고 퍼널로 검증한 설계도를 공유합니다.
                </p>
                <div className="text-[11px] text-gray-400 space-y-0.5 pt-1">
                  <p>운영 스튜디오: 브라운임팩트랩스 (Brown Impact Labs · Est. Aug 2025)</p>
                  <p>라이브 프로덕트: 명사도(myeongsado.com) · 맹모인사이트(maengmo.kr) · 칠구영어(79english.com)</p>
                </div>
              </div>

              <div className="flex gap-10">
                <div className="space-y-2">
                  <h4 className="text-gray-900 font-bold text-xs">블록 단계</h4>
                  <ul className="space-y-1.5 text-xs text-gray-500">
                    <li>
                      <Link href="/product/aside-starter" className="hover:text-amber-600 transition-colors">
                        Stage 1 · 나를 위한 AI 도구 조립
                      </Link>
                    </li>
                    <li>
                      <Link href="/product/1" className="hover:text-emerald-600 transition-colors">
                        Stage 2 · 스레드 500만 뷰 바이블
                      </Link>
                    </li>
                    <li>
                      <Link href="/product/3" className="hover:text-emerald-600 transition-colors">
                        Stage 2 · 메타 광고 고전환 플레이북
                      </Link>
                    </li>
                    <li>
                      <Link href="/product/6" className="hover:text-rose-600 transition-colors">
                        Stage 3 · 1인 풀스택 아키텍처
                      </Link>
                    </li>
                    <li>
                      <Link href="/career" className="hover:text-blue-600 transition-colors">
                        Career · 1:1 커리어 & 빌더 컨설팅
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-gray-900 font-bold text-xs">라이브 서비스</h4>
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

            <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-2 text-[11px] text-gray-400">
              <p>© 2026 Brown Impact Labs (aizaler.kr). All rights reserved.</p>
              <p>Stage 1 (Yellow) · Stage 2 (Green) · Stage 3 (Red) · Career (Blue)</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
