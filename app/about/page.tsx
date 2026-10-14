import React from 'react';
import FounderNarrativeTimeline from '../../components/FounderNarrativeTimeline';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: '파운더 | AIZALER',
  description:
    '공기업·해외 주재원을 거쳐 홀로 4개의 상용 서비스를 운영하며 검증한 AI 자동화·수익화·1인 풀스택 기록.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-14 md:py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <div className="text-xs font-extrabold text-emerald-600 mb-2">
            Founder & Consultant
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-950 leading-tight mb-4">
            내가 쓰려고 만든 작은 도구에서,
            <br />
            독립된 1인 프로덕트 스튜디오까지.
          </h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            공기업과 해외 주재원을 거쳐 홀로 4개의 상용 서비스를 런칭하고, 스레드 500만 뷰와 메타 광고로 수익화하며 검증한 실제 기록을 공유합니다.
          </p>
        </div>

        <FounderNarrativeTimeline />

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-black text-gray-950">
              나에게 맞는 단계부터 시작해 보세요
            </h3>
            <p className="text-xs text-gray-500">
              단계별 커리큘럼과 1:1 커리어 의사결정 세션이 준비되어 있습니다.
            </p>
          </div>
          <div className="flex gap-2.5 w-full sm:w-auto">
            <Link
              href="/#curriculum"
              className="flex-1 sm:flex-initial px-5 py-3 brick-btn-green text-xs sm:text-sm text-center"
            >
              커리큘럼 보기
            </Link>
            <Link
              href="/career"
              className="flex-1 sm:flex-initial px-5 py-3 brick-btn-blue text-xs sm:text-sm inline-flex items-center justify-center gap-1.5"
            >
              <span>1:1 컨설팅</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
