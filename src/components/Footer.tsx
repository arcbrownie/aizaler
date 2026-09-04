import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white py-12 px-4 sm:px-6 text-zinc-600">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-zinc-100">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg text-zinc-900 tracking-tight">AI잘러 (aizaler.kr)</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-brand-50 text-brand-700 font-bold border border-brand-200">
                에잘러 랩스
              </span>
            </div>
            <p className="text-xs text-zinc-500 max-w-md leading-relaxed">
              더 많은 사람이 AI로 일을 잘하게 되는 세상. 비개발자 바이브코딩 실전 트러블슈팅, AI 음성 도구 비교, 실무 꿀팁을 전합니다.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-xs font-semibold text-zinc-600">
            <Link href="/insights" className="hover:text-zinc-900 transition-colors">
              인사이트 전체보기
            </Link>
            <span className="text-zinc-300">·</span>
            <Link href="/tools" className="hover:text-zinc-900 transition-colors">
              타입캐스트 &amp; 음성 AI
            </Link>
            <span className="text-zinc-300">·</span>
            <Link href="/glossary" className="hover:text-zinc-900 transition-colors">
              무료 용어집 치트시트
            </Link>
            <span className="text-zinc-300">·</span>
            <Link href="/class" className="hover:text-zinc-900 transition-colors">
              에잘러 실전 클래스
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>&copy; {new Date().getFullYear()} AI잘러 (aizaler.kr) · All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span>본 사이트의 일부 추천 링크는 소정의 제휴 수수료를 제공받을 수 있습니다.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
