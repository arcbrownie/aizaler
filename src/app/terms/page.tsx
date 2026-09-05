import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: '이용약관 (Terms of Service) | AI잘러',
  description: 'AI잘러(aizaler.kr) 서비스 이용에 관한 권리, 의무 및 책임사항 안내.',
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10 font-sans text-zinc-800">
      <header className="space-y-3 border-b border-zinc-200 pb-6">
        <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Terms of Service</span>
        <h1 className="text-3xl font-extrabold text-zinc-900 tracking-tight">서비스 이용약관</h1>
        <p className="text-xs text-zinc-500 font-mono">시행일자: 2026년 9월 5일</p>
      </header>

      {/* 제1조 목적 */}
      <section className="space-y-2 text-xs sm:text-sm text-zinc-700 leading-relaxed">
        <h2 className="text-base font-bold text-zinc-900">제1조 (목적)</h2>
        <p>
          본 약관은 AI잘러(이하 &quot;사이트&quot;)가 제공하는 정보 제공 서비스 및 제반 콘텐츠의 이용과 관련하여, 사이트와 이용자 간의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.
        </p>
      </section>

      {/* 제2조 저작권 */}
      <section className="space-y-2 text-xs sm:text-sm text-zinc-700 leading-relaxed">
        <h2 className="text-base font-bold text-zinc-900">제2조 (저작권 및 지식재산권의 귀속)</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>사이트 내에 게시된 모든 아티클, 벤치마크 데이터, 텍스트, 그래픽에 대한 저작권은 AI잘러에 귀속됩니다.</li>
          <li>이용자는 사이트의 콘텐츠를 출처 명시(링크 포함) 하에 인용할 수 있으나, 영리 목적의 무단 전재, 크롤링을 통한 상업적 복제 및 재배포는 엄격히 금지됩니다.</li>
          <li>제공되는 오픈소스 코드 스니펫은 별도의 라이선스 표기가 없는 한 MIT 라이선스를 따르며, 자유롭게 상업적 프로젝트에 복사하여 사용하실 수 있습니다.</li>
        </ul>
      </section>

      {/* 제3조 면책조항 */}
      <section className="space-y-2 text-xs sm:text-sm text-zinc-700 leading-relaxed p-5 rounded-xl bg-zinc-50 border border-zinc-200">
        <h2 className="text-base font-bold text-zinc-900">제3조 (책임의 한계 및 면책 고지)</h2>
        <p>
          사이트에서 제공하는 기술 가이드, 코드 스니펫, 광고 세팅 노하우는 작성 시점의 테스트 결과에 기반합니다.
          소프트웨어 버전 변경, API 사양 변경, 서드파티 서비스의 정책 변경으로 인한 부작용이나 데이터 손실에 대해 사이트는 법적 책임을 지지 않습니다.
          프로덕션 배포 전 반드시 로컬 스테이징 환경에서 충분한 자체 테스트를 거치실 것을 권장합니다.
        </p>
      </section>

      {/* 제4조 준거법 */}
      <section className="space-y-2 text-xs sm:text-sm text-zinc-700 leading-relaxed">
        <h2 className="text-base font-bold text-zinc-900">제4조 (준거법 및 재판관할)</h2>
        <p>
          본 약관의 해석 및 이용자와 사이트 간의 분쟁에 관하여는 대한민국 법을 적용합니다.
        </p>
      </section>
    </div>
  );
}
