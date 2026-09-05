import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Scale, FileText, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: '편집 가이드라인 및 제휴 공시 (Editorial Policy) | AI잘러',
  description: 'AI잘러(aizaler.kr)의 객관적인 기술 리뷰 기준, 사실 검증 절차, 그리고 제휴 마케팅(Affiliate) 수익 투명성 정책 안내.',
};

export default function EditorialPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12 font-sans">
      <header className="space-y-4 border-b border-zinc-200 pb-8">
        <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Editorial Standards</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
          편집 가이드라인 및 제휴 투명성 공시
        </h1>
        <p className="text-base text-zinc-600 leading-relaxed font-normal">
          AI잘러는 독자의 신뢰를 최우선 가치로 생각합니다. 본 페이지는 콘텐츠의 객관성을 유지하기 위한 당사의 편집 정책과 수익 구조를 투명하게 공개합니다.
        </p>
      </header>

      {/* Article Review Standard */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-zinc-900 tracking-tight">1. 도구 테스트 및 리뷰 기준</h2>
        <div className="text-sm sm:text-base text-zinc-700 leading-relaxed space-y-3">
          <p>
            AI잘러에서 다루는 모든 인공지능 도구(예: Typeless, Wispr Flow 등)와 개발 인프라(Vercel, Supabase 등)는 다음 3단계 검증 프로세스를 거쳐 작성됩니다:
          </p>
          <ul className="space-y-2 pl-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
              <span><strong>자체 비용 실구매 테스트:</strong> 기업의 협찬이나 대가성 원고료를 받지 않고, 에디터 팀이 직접 정기 구독 결제하여 최소 100시간 이상 실무 프로젝트에 적용해 봅니다.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
              <span><strong>장단점 균형 기술:</strong> 마케팅성 장점만을 열거하지 않으며, 치명적인 오인식 버그, 가격적 함정, 호환되지 않는 환경(OS/브라우저)을 솔직히 밝힙니다.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
              <span><strong>공식 스펙 및 벤치마크 교차 검증:</strong> 제조사 마케팅 주장을 맹신하지 않고, 표준 텍스트 스크립트와 타임스탬프를 기반으로 직접 계측한 수치만 인용합니다.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="space-y-4 p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
        <div className="flex items-center gap-2 text-zinc-900 font-bold text-base">
          <Scale className="w-5 h-5 text-zinc-800" />
          <h2>2. 제휴 마케팅(Affiliate) 투명성 고지</h2>
        </div>
        <div className="text-xs sm:text-sm text-zinc-700 leading-relaxed space-y-3">
          <p>
            공정거래위원회 「추천·보증 등에 관한 표시·광고 심사지침」 및 미국 FTC(Federal Trade Commission) 가이드라인을 엄격히 준수합니다.
          </p>
          <p>
            AI잘러 사이트 내의 특정 링크(예: Typeless 가입 링크 등)를 통해 유료 플랜을 결제하실 경우, 서비스 제공사로부터 소정의 수수료(커미션)가 당사에 지급될 수 있습니다.
          </p>
          <p>
            단, <strong>제휴 수수료 지급 여부가 당사의 제품 평가 순위나 추천 의견에 어떠한 영향도 미치지 않습니다.</strong> 성능이 떨어지거나 보안이 취약한 서비스는 제휴 프로그램 존재 여부와 무관하게 추천 목록에서 즉각 배제됩니다.
          </p>
          <p className="text-zinc-500 text-xs">
            수수료 수익은 전액 고품질의 무료 테크 아티클 발행 및 서버 유지 비용에 재투자됩니다.
          </p>
        </div>
      </section>

      {/* Fact-Checking and Corrections */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-zinc-900 tracking-tight">3. 사실 정정 및 피드백 정책</h2>
        <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
          기술 스택의 버전 업데이트나 도구의 정책 변경으로 인해 게시글의 내용이 최신 상태와 달라진 경우, 
          독자의 제보를 적극 수렴하여 24시간 이내에 수정하고 갱신 일자(Updated Date)를 명시합니다. 
          오류 제보는 언제든지 <Link href="/contact" className="text-brand-600 underline font-medium">문의하기</Link>를 통해 접수하실 수 있습니다.
        </p>
      </section>
    </div>
  );
}
