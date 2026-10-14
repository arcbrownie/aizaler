'use client';

import React from 'react';
import './globals.css';
import Link from 'next/link';
import { 
  Cube, 
  ArrowUpRight, 
  Sparkle, 
  Compass,
  Crown
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
        <title>aizaler.kr | 어릴 적 레고 좋아하던 빌더를 위한 AI 조립 & 수익화 스튜디오</title>
        <meta 
          name="description" 
          content="듀플로(기초 자동화)부터 클래식(스레드 500만 뷰·메타 광고 수익화), 테크닉(1인 풀스택 런칭 & 1:1 커리어 의사결정)까지. 나를 위해 만든 작은 블록을 내 첫 번째 수익원으로 바꾸는 실전 설계도." 
        />
        <link 
          rel="stylesheet" 
          as="style" 
          crossOrigin="anonymous" 
          href="https://cdn.jsdelivr.net/npm/wanted-sans@1.0.3/fonts/webfonts/variable/complete/WantedSansVariable.min.css" 
        />
      </head>
      <body className="bg-[#070B14] text-[#F8FAFC] min-h-screen flex flex-col antialiased selection:bg-[#F59E0B] selection:text-[#070B14]">
        {isCareerPage ? (
          children
        ) : (
          <>
            {/* 🧱 상단 띠배너: Duplo to Technic 빌더 스튜디오 & 1:1 재능기부 세션 알림 */}
            <div className="bg-[#0C1322] border-b border-white/[0.07] text-xs py-2.5 px-4 text-center font-medium text-gray-300 flex flex-wrap items-center justify-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black badge-technic">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                DUPLO → TECHNIC
              </span>
              <span className="text-gray-200">
                어릴 때 레고 좋아하셨나요? <b>스레드 500만 뷰 수익화 바이블</b> & <b>공기업·주재원 파운더 1:1 의사결정 세션(파일럿 특가)</b> 오픈
              </span>
              <Link href="/#career-spotlight" className="inline-flex items-center text-amber-400 font-bold hover:underline ml-1">
                1:1 세션 보기 <ArrowUpRight size={12} weight="bold" className="ml-0.5" />
              </Link>
            </div>

            {/* 메인 헤더: LEGO Technic Dark Studio GNB */}
            <header className="sticky top-0 z-40 bg-[#070B14]/85 backdrop-blur-xl border-b border-white/[0.08]">
              <div className="toss-container h-16 flex items-center justify-between gap-4">
                {/* 좌측 로고 */}
                <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-[#070B14] flex items-center justify-center font-black shadow-md group-hover:scale-105 transition-transform">
                    <Cube size={21} weight="fill" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-black tracking-tight text-white">
                      aizaler<span className="text-amber-400">.kr</span>
                    </span>
                    <span className="text-[10px] font-mono tracking-wider uppercase text-gray-400 hidden sm:inline px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]">
                      DUPLO TO TECHNIC STUDIO
                    </span>
                  </div>
                </Link>

                {/* 네비게이션: 듀플로 ➔ 클래식(스레드/메타) ➔ 테크닉(1:1 컨설팅) 플로우 */}
                <nav className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-gray-300">
                  <Link href="/#roadmap" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    성장 로드맵 (Duplo→Technic)
                  </Link>
                  <Link href="/#monetize" className="hover:text-blue-400 transition-colors flex items-center gap-1 text-blue-300 font-semibold">
                    스레드·메타 수익화
                    <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 font-mono">주력</span>
                  </Link>
                  <Link href="/#career-spotlight" className="hover:text-amber-300 transition-colors flex items-center gap-1 text-amber-300 font-semibold">
                    1:1 커리어·빌더 처방
                    <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 font-mono">재능기부</span>
                  </Link>
                  <Link href="/#catalog" className="hover:text-white transition-colors">
                    전체 브릭 설명서
                  </Link>
                  <Link href="/#lab" className="hover:text-white transition-colors">
                    3D 조립 랩
                  </Link>
                  <Link href="/about" className="hover:text-white text-gray-400 transition-colors">
                    파운더 스토리
                  </Link>
                </nav>

                {/* 우측 액션 CTA */}
                <div className="flex items-center gap-2.5">
                  <Link
                    href="/career"
                    className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-xs font-bold text-amber-300 transition-all"
                  >
                    <Compass size={15} weight="bold" />
                    <span>1:1 의사결정 연구소</span>
                  </Link>
                  <Link
                    href="/#catalog"
                    className="btn-technic-gold px-4 py-2 text-xs font-black rounded-xl flex items-center gap-1.5 shadow-sm active:scale-95"
                  >
                    <Sparkle size={14} weight="fill" />
                    <span>브릭 카탈로그</span>
                  </Link>
                </div>
              </div>
            </header>

            {/* 메인 본문 */}
            <main className="flex-1 pb-20">
              {children}
            </main>

            {/* 프리미엄 다크 빌더 스튜디오 푸터 */}
            <footer className="border-t border-white/[0.08] bg-[#04070D] text-gray-400 text-xs py-16">
              <div className="toss-container space-y-8">
                <div className="flex flex-col md:flex-row justify-between gap-8">
                  <div className="space-y-3 max-w-lg">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-base font-black text-white">aizaler.kr</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full badge-classic">
                        Meta Certified Pro
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full badge-technic">
                        DUPLO TO TECHNIC
                      </span>
                    </div>
                    <p className="text-gray-400 leading-relaxed text-xs">
                      어릴 적 레고 조립을 좋아하던 마음 그대로, 나를 위해 만든 작은 도구를 실제 수익원(Cashflow)으로 연결하는 1인 빌더 스튜디오입니다. 공기업·해외 주재원을 거쳐 홀로 4개의 상용 서비스를 띄우고, <b>Meta Certified Media Planning Professional</b>로서 스레드 500만 뷰 실측 DB와 메타 광고 퍼널로 검증한 설계도만 공유합니다.
                    </p>
                    <div className="text-[11px] text-gray-500 space-y-1 font-mono">
                      <p>운영 스튜디오: 브라운임팩트랩스 (Brown Impact Labs · Est. Aug 2025)</p>
                      <p>라이브 프로덕트: 명사도(myeongsado.com) · 맹모인사이트(maengmo.kr) · 칠구영어(79english.com)</p>
                    </div>
                  </div>

                  {/* 바로가기 & 소셜 링크 */}
                  <div className="flex flex-col sm:flex-row gap-8">
                    <div className="space-y-2.5">
                      <h4 className="text-white font-bold text-xs tracking-wider uppercase">Core Programs</h4>
                      <ul className="space-y-2 text-xs text-gray-400">
                        <li>
                          <Link href="/product/1" className="hover:text-blue-400 transition-colors">
                            스레드 500만 뷰 & 메타 수익화 바이블
                          </Link>
                        </li>
                        <li>
                          <Link href="/product/3" className="hover:text-blue-400 transition-colors">
                            메타 광고 CVR 8.6% 고전환 플레이북
                          </Link>
                        </li>
                        <li>
                          <Link href="/career" className="hover:text-amber-400 transition-colors text-amber-300/90 font-semibold">
                            1:1 커리어 & 빌더 의사결정 세션 (/career)
                          </Link>
                        </li>
                        <li>
                          <Link href="/about" className="hover:text-white transition-colors">
                            파운더 오리진 스토리 (/about)
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-2.5">
                      <h4 className="text-white font-bold text-xs tracking-wider uppercase">Official Channels</h4>
                      <div className="flex flex-col gap-2">
                        <a
                          href="https://threads.net/@aizaler.kr"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.05] border border-white/[0.1] text-gray-300 hover:text-amber-400 hover:border-amber-400/40 transition-colors text-xs font-semibold"
                        >
                          <span>Threads @aizaler.kr</span>
                          <ArrowUpRight size={12} />
                        </a>
                        <a
                          href="https://brownimpactlabs.com"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.05] border border-white/[0.1] text-gray-300 hover:text-blue-400 hover:border-blue-400/40 transition-colors text-xs font-semibold"
                        >
                          <span>Brown Impact Labs Studio</span>
                          <ArrowUpRight size={12} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-gray-500">
                  <p>© 2026 aizaler.kr · Powered by Brown Impact Labs. All rights reserved.</p>
                  <div className="flex gap-4">
                    <Link href="/about" className="hover:text-gray-300">스튜디오 소개</Link>
                    <Link href="/career" className="hover:text-gray-300">1:1 커리어 세션</Link>
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
