import React from 'react';
import FounderNarrativeTimeline from '../../components/FounderNarrativeTimeline';
import Link from 'next/link';
import { ArrowRight, Blocks, Compass, Flame, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: '파운더 서사 | aizaler (에이잘러) — Duplo to Technic',
  description:
    '어릴 때 레고 좋아하던 빌더가 공기업·해외 주재원을 거쳐 나를 위한 AI 도구를 조립하고, 스레드 500만 뷰와 메타 광고로 홀로서기까지의 실제 기록.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#070B14] text-white py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Top Hero Intro */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-400/10 border border-amber-400/30 text-amber-300 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-5">
            <Blocks className="w-4 h-4" />
            ABOUT THE ARCHITECT · BROWN IMPACT LABS
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-[1.18] mb-6">
            “어릴 적 레고를 조립하던 설렘 그대로,
            <br />
            <span className="text-gradient-gold">나를 위한 도구를 만들고 수익화합니다.”</span>
          </h1>
          <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            화려한 투자 유치나 수십 명의 팀원 없이도 괜찮습니다.
            <br className="hidden sm:inline" />
            내 일상의 문제를 해결하는 작은 블록(Duplo)에서 출발해, 스레드 500만 뷰와 메타 광고(Classic)로 현금흐름을 만들고, 1인 기업 시스템(Technic)으로 독립한 모든 시행착오를 투명하게 공개합니다.
          </p>
        </div>

        {/* 3 Core Principles Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="technic-card rounded-2xl p-5 border border-emerald-500/30">
            <div className="text-xs font-mono font-bold text-emerald-400 mb-1">01 · BUILD FOR SELF</div>
            <h3 className="text-sm font-black text-white mb-1">나를 위한 도구에서 시작</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              명사도·맹모인사이트·칠구영어 모두 파운더 본인의 실제 필요를 해결하기 위해 조립한 프로덕트입니다.
            </p>
          </div>
          <div className="technic-card rounded-2xl p-5 border border-blue-500/30">
            <div className="text-xs font-mono font-bold text-blue-400 mb-1">02 · PROVEN GROWTH</div>
            <h3 className="text-sm font-black text-white mb-1">스레드 500만 뷰 & 메타 인증</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              이론이 아닌 500만 뷰 실측 데이터와 Meta 공식 인증 미디어 플래닝 자격으로 검증된 퍼널만 다룹니다.
            </p>
          </div>
          <div className="technic-card rounded-2xl p-5 border border-amber-400/30">
            <div className="text-xs font-mono font-bold text-amber-400 mb-1">03 · PAY IT FORWARD</div>
            <h3 className="text-sm font-black text-white mb-1">재능기부 + 자아실현 1:1 세션</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              과거의 저처럼 퇴사와 홀로서기 사이에서 고민하는 직장인·빌더분들과 1:1로 진솔하게 로드맵을 짭니다.
            </p>
          </div>
        </div>

        {/* Timeline Component */}
        <FounderNarrativeTimeline />

        {/* Bottom CTA Card */}
        <div className="mt-12 technic-card technic-card-gold rounded-[32px] p-8 sm:p-12 text-center border-2 border-amber-400/40">
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
            이제 당신만의 첫 번째 브릭을 올릴 차례입니다
          </h3>
          <p className="text-slate-300 text-xs sm:text-base mb-8 max-w-xl mx-auto leading-relaxed">
            스레드·메타 광고 수익화 공략집부터 공기업·주재원 퇴사 파운더와의 1:1 커리어 & 빌더 의사결정 세션까지, 지금 내 단계에 맞는 블록을 선택하세요.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/#monetize"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl btn-classic-blue text-xs sm:text-sm flex items-center justify-center gap-2"
            >
              <Flame className="w-4 h-4" />
              <span>스레드 500만 뷰 · 메타 수익화 브릭 보기</span>
            </Link>
            <Link
              href="/career"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl btn-technic-gold text-xs sm:text-sm flex items-center justify-center gap-2"
            >
              <Compass className="w-4 h-4" />
              <span>1:1 커리어 & 빌더 의사결정 세션 신청</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
