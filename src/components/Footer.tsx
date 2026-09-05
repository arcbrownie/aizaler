import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white py-12 px-4 sm:px-6 text-zinc-600 font-sans">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-zinc-100">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg text-zinc-900 tracking-tight">AI잘러 (aizaler.kr)</span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 font-semibold border border-zinc-200">
                기술 실무 저널
              </span>
            </div>
            <p className="text-xs text-zinc-500 max-w-md leading-relaxed">
              더 많은 사람이 AI로 일을 잘하게 되는 세상. 검증된 엔지니어링 트러블슈팅, AI 음성 도구(Typeless) 벤치마크, brownevents 실전 모객 케이스 스터디를 공유합니다.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-xs font-semibold text-zinc-600">
            <Link href="/insights" className="hover:text-zinc-900 transition-colors">
              인사이트
            </Link>
            <span className="text-zinc-300">·</span>
            <Link href="/tools" className="hover:text-zinc-900 transition-colors">
              AI 도구 비교
            </Link>
            <span className="text-zinc-300">·</span>
            <Link href="/glossary" className="hover:text-zinc-900 transition-colors">
              용어집
            </Link>
            <span className="text-zinc-300">·</span>
            <Link href="/class" className="hover:text-zinc-900 transition-colors">
              실전 부트캠프
            </Link>
          </div>
        </div>

        {/* AdSense Mandatory Legal & Trust Links */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-500 border-b border-zinc-100 pb-6">
          <div className="flex flex-wrap gap-4">
            <Link href="/about" className="hover:text-zinc-900 underline underline-offset-4 transition-colors">
              소개 (About)
            </Link>
            <Link href="/editorial" className="hover:text-zinc-900 underline underline-offset-4 transition-colors">
              편집 가이드라인 &amp; 제휴 공시
            </Link>
            <Link href="/privacy" className="hover:text-zinc-900 underline underline-offset-4 font-semibold text-zinc-800 transition-colors">
              개인정보처리방침
            </Link>
            <Link href="/terms" className="hover:text-zinc-900 underline underline-offset-4 transition-colors">
              이용약관
            </Link>
            <Link href="/contact" className="hover:text-zinc-900 underline underline-offset-4 transition-colors">
              문의 및 제보
            </Link>
          </div>

          <div className="flex items-center gap-3 text-zinc-400">
            <a href="/sitemap.xml" className="hover:text-zinc-600 transition-colors">
              사이트맵
            </a>
            <span>·</span>
            <a href="/rss.xml" className="hover:text-zinc-600 transition-colors">
              RSS Feed
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-400">
          <p>&copy; {new Date().getFullYear()} AI잘러 (aizaler.kr) · All rights reserved.</p>
          <p className="text-[11px] max-w-md leading-relaxed">
            AI잘러는 독립적인 테크 저널로, 특정 추천 링크(Typeless 등)에는 제휴 수수료가 포함될 수 있습니다. 
            모든 평가는 에디터 팀의 자체 실무 검증 기준(Editorial Policy)에 따라 객관적으로 작성됩니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
