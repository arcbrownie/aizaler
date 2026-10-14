import React from 'react';
import FounderNarrativeTimeline from '../../components/FounderNarrativeTimeline';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: '파운더 소개 | aizaler.kr',
  description:
    '어릴 때 블록 조립을 좋아하던 빌더가 공기업·해외 주재원을 거쳐 나를 위한 AI 도구를 조립하고, 스레드 500만 뷰와 메타 광고로 홀로서기까지의 실제 기록.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <p className="text-sm font-extrabold text-emerald-600 mb-2">
            ABOUT THE ARCHITECT · BROWN IMPACT LABS
          </p>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 leading-[1.16] mb-5">
            어릴 적 블록을 조립하던 설렘 그대로,
            <br />
            나를 위한 도구를 만들고 수익화합니다.
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            화려한 투자 유치나 수십 명의 팀원 없이도 괜찮습니다.
            내 일상의 문제를 해결하는 작은 도구(Stage 1)에서 출발해, 스레드 500만 뷰와 메타 광고(Stage 2)로 현금흐름을 만들고, 1인 풀스택 시스템(Stage 3)으로 독립한 모든 시행착오를 투명하게 공개합니다.
          </p>
        </div>

        <FounderNarrativeTimeline />

        <div className="mt-14 pt-10 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-black text-gray-900">
              당신의 첫 번째 블록을 지금 조립해 보세요
            </h3>
            <p className="text-xs sm:text-sm text-gray-500">
              스레드·메타 수익화 바이블부터 1:1 커리어 의사결정 세션까지 준비되어 있습니다.
            </p>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <Link
              href="/#stack-builder"
              className="flex-1 sm:flex-initial px-6 py-3.5 brick-btn-green text-xs sm:text-sm text-center"
            >
              블록 조립 스테이션
            </Link>
            <Link
              href="/career"
              className="flex-1 sm:flex-initial px-6 py-3.5 brick-btn-blue text-xs sm:text-sm inline-flex items-center justify-center gap-1.5"
            >
              <span>1:1 커리어 세션</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
