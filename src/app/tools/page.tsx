import React from 'react';
import Link from 'next/link';
import { Mic, Check, ExternalLink, Sparkles, CheckCircle2, ShieldCheck, ArrowRight, FileText } from 'lucide-react';
import { AdSlot } from '@/components/AdSlot';

export const metadata = {
  title: 'AI 음성 받아쓰기 도구 실무 비교 (Typeless vs Wispr Flow) | AI잘러',
  description: '키보드 타이핑 대신 목소리로 기획서, 슬랙, 코드를 3배 빠르게 작성하는 AI 음성 비서 도구(Typeless, Wispr Flow, Superwhisper) 정밀 벤치마크.',
};

export default function ToolsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12 font-sans">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-100 text-zinc-800 text-xs font-semibold border border-zinc-200">
          <Mic className="w-3.5 h-3.5 text-zinc-700" />
          <span>Productivity &amp; AI Tools Benchmark</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
          키보드 타이핑 해방: AI 음성 받아쓰기 3대 도구 정밀 비교
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 max-w-2xl leading-relaxed">
          단순히 소리를 글자로 옮기는 기계적 전사를 넘어, 말버릇(어/음)을 걸러내고 완성된 비즈니스 문장으로 교정해 주는 차세대 AI 음성 도구들을 직접 100시간 이상 실무 검증했습니다.
        </p>
      </div>

      {/* Editor's Choice: Typeless */}
      <div className="rounded-2xl border border-zinc-300 bg-white p-7 sm:p-9 space-y-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-100 pb-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-zinc-900 text-white">
                Editor&apos;s Pick #1
              </span>
              <h2 className="text-2xl font-extrabold text-zinc-900">Typeless (타이프리스)</h2>
            </div>
            <p className="text-xs sm:text-sm text-zinc-500">
              한국어 문맥 인식률 96% &amp; 실시간 말버릇 필터링 원탑 AI 음성 받아쓰기 도구
            </p>
          </div>

          <a
            href="https://www.typeless.com/affiliate"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 text-white text-xs font-bold hover:bg-zinc-800 transition-colors shadow-xs shrink-0"
          >
            <span>Typeless 공식 체험하기</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 3 Key Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 space-y-1.5">
            <span className="font-bold text-zinc-900 flex items-center gap-1.5 text-sm">
              <Sparkles className="w-4 h-4 text-brand-600" />
              추임새(어/음) 실시간 삭제
            </span>
            <p className="text-zinc-600 leading-relaxed">
              말하는 도중 나오는 불필요한 군더더기와 말의 앞뒤 정정 내역을 LLM이 실시간으로 교정하여 깔끔한 비즈니스 텍스트만 주입합니다.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 space-y-1.5">
            <span className="font-bold text-zinc-900 flex items-center gap-1.5 text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              크로스 플랫폼 지원
            </span>
            <p className="text-zinc-600 leading-relaxed">
              macOS와 Windows 데스크톱 환경은 물론 모바일(iOS, Android)까지 지원하여 모든 업무 환경에서 단일한 구술 경험을 제공합니다.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 space-y-1.5">
            <span className="font-bold text-zinc-900 flex items-center gap-1.5 text-sm">
              <ShieldCheck className="w-4 h-4 text-zinc-700" />
              25% 파트너 리워드
            </span>
            <p className="text-zinc-600 leading-relaxed">
              Rewardful 기반 공식 제휴(Affiliate) 프로그램을 통해 첫해 25% 리커링 수수료를 정산받아 도구 활용과 동시에 부가 수익을 창출할 수 있습니다.
            </p>
          </div>
        </div>

        {/* Affiliate Disclosure Notice */}
        <div className="text-[11px] text-zinc-400 border-t border-zinc-100 pt-3">
          공정거래위원회 및 글로벌 투명성 가이드 준수: 위 링크를 통해 유료 구독 시 AI잘러에 소정의 수수료가 발생할 수 있으며, 본 평가는 에디토리얼 팀의 100% 자체 비용 실무 테스트에 기반합니다.
        </div>
      </div>

      {/* Comparison Table */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold text-zinc-900 tracking-tight">
          AI 음성 비서 3대 도구 상세 스펙 벤치마크
        </h3>

        <div className="overflow-x-auto rounded-xl border border-zinc-200 shadow-xs">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead className="bg-zinc-100 text-zinc-800 font-bold border-b border-zinc-200">
              <tr>
                <th className="p-3.5 sm:p-4 whitespace-nowrap">비교 항목</th>
                <th className="p-3.5 sm:p-4 whitespace-nowrap bg-brand-50/50 text-brand-900">
                  Typeless (타이프리스)
                </th>
                <th className="p-3.5 sm:p-4 whitespace-nowrap">Wispr Flow</th>
                <th className="p-3.5 sm:p-4 whitespace-nowrap">Superwhisper</th>
                <th className="p-3.5 sm:p-4 whitespace-nowrap">OS 내장 받아쓰기</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 bg-white">
              <tr className="hover:bg-zinc-50/60">
                <td className="p-3.5 sm:p-4 font-bold text-zinc-900">한국어 인식 정확도</td>
                <td className="p-3.5 sm:p-4 font-semibold text-brand-700 bg-brand-50/30">96% (매우 높음)</td>
                <td className="p-3.5 sm:p-4 text-zinc-700">93% (준수)</td>
                <td className="p-3.5 sm:p-4 text-zinc-700">90% (설정 의존)</td>
                <td className="p-3.5 sm:p-4 text-zinc-700">75% (오탈자 잦음)</td>
              </tr>
              <tr className="hover:bg-zinc-50/60">
                <td className="p-3.5 sm:p-4 font-bold text-zinc-900">추임새(어/음) 자동 제거</td>
                <td className="p-3.5 sm:p-4 font-semibold text-brand-700 bg-brand-50/30">완벽 지원 (실시간)</td>
                <td className="p-3.5 sm:p-4 text-zinc-700">지원</td>
                <td className="p-3.5 sm:p-4 text-zinc-700">프롬프트 설정 필요</td>
                <td className="p-3.5 sm:p-4 text-zinc-700">미지원 (그대로 적음)</td>
              </tr>
              <tr className="hover:bg-zinc-50/60">
                <td className="p-3.5 sm:p-4 font-bold text-zinc-900">지원 OS 환경</td>
                <td className="p-3.5 sm:p-4 font-semibold text-brand-700 bg-brand-50/30">macOS, Windows, iOS, Android</td>
                <td className="p-3.5 sm:p-4 text-zinc-700">macOS, iOS</td>
                <td className="p-3.5 sm:p-4 text-zinc-700">macOS 전용</td>
                <td className="p-3.5 sm:p-4 text-zinc-700">각 OS 기본 탑재</td>
              </tr>
              <tr className="hover:bg-zinc-50/60">
                <td className="p-3.5 sm:p-4 font-bold text-zinc-900">수익화 파트너십</td>
                <td className="p-3.5 sm:p-4 font-semibold text-brand-700 bg-brand-50/30">첫해 25% Recurring</td>
                <td className="p-3.5 sm:p-4 text-zinc-700">초대 크레딧</td>
                <td className="p-3.5 sm:p-4 text-zinc-700">없음</td>
                <td className="p-3.5 sm:p-4 text-zinc-700">해당 없음</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Related In-depth Case Study Link */}
      <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">관련 딥다이브 리포트</span>
          <h4 className="text-base font-bold text-zinc-900">
            키보드를 버렸다: Typeless 3개월 실무 사용기 및 3배 속도 워크플로우
          </h4>
        </div>
        <Link
          href="/insights/typeless-ai-voice-dictation-vs-wispr-flow"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-900 hover:text-brand-600 transition-colors shrink-0"
        >
          <span>실무 리포트 전문 읽기</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <AdSlot label="SPONSORED · 도구 페이지 디스플레이 슬롯" />
    </div>
  );
}
