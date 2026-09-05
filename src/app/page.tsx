import React from 'react';
import Link from 'next/link';
import { INSIGHTS_ARTICLES } from '@/data/insightsData';
import { Sparkles, ArrowRight, Clock, BookOpen, Mic, Layout, ShieldCheck, ChevronRight } from 'lucide-react';
import { AdSlot } from '@/components/AdSlot';

export default function HomePage() {
  const featuredArticles = INSIGHTS_ARTICLES.filter((a) => a.isFeatured);
  const recentArticles = INSIGHTS_ARTICLES.slice(0, 6);

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 font-sans">
      {/* 1. Refined Editorial Hero Section */}
      <section className="pt-12 sm:pt-20 px-4 sm:px-6 max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-semibold tracking-tight shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-zinc-700" />
          <span>AI 실무 엔지니어링 &amp; 비즈니스 테크 저널</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-zinc-900 tracking-tight leading-[1.2]">
          일잘러를 넘어, AI로 일의 속도를 바꾸는<br className="hidden sm:inline" />
          <span className="text-brand-600 underline decoration-brand-200 underline-offset-8">
            AI잘러 (AI-ZALER)
          </span>들의 실전 기록
        </h1>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
          단순한 프롬프트 나열이나 겉핥기 튜토리얼을 지양합니다. 실제 프로덕션에서 수백 시간 동안 부딪히며 검증한{' '}
          <strong>트러블슈팅 해결기</strong>, 손목 타이핑을 해방시킨 <strong>AI 음성 도구(Typeless) 벤치마크</strong>,{' '}
          그리고 <strong>brownevents 같은 실전 웹 사이트와 메타 광고 모객 노하우</strong>를 공유합니다.
        </p>

        {/* Quick Links / Pill Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs">
          <Link
            href="/insights/typeless-ai-voice-dictation-vs-wispr-flow"
            className="px-3 py-1.5 rounded-lg bg-white border border-zinc-200 text-zinc-700 hover:border-zinc-400 transition-colors shadow-2xs flex items-center gap-1.5"
          >
            <Mic className="w-3.5 h-3.5 text-brand-600" />
            <span>Typeless 실무 사용기</span>
          </Link>
          <Link
            href="/insights/brownevents-meta-ads-event-landing-page"
            className="px-3 py-1.5 rounded-lg bg-white border border-zinc-200 text-zinc-700 hover:border-zinc-400 transition-colors shadow-2xs flex items-center gap-1.5"
          >
            <Layout className="w-3.5 h-3.5 text-emerald-600" />
            <span>brownevents &amp; 메타 광고 모객</span>
          </Link>
          <Link
            href="/glossary"
            className="px-3 py-1.5 rounded-lg bg-white border border-zinc-200 text-zinc-700 hover:border-zinc-400 transition-colors shadow-2xs flex items-center gap-1.5"
          >
            <BookOpen className="w-3.5 h-3.5 text-zinc-600" />
            <span>AI 핵심 용어집</span>
          </Link>
        </div>
      </section>

      {/* 2. Lead Article / Hero Spotlight */}
      <section className="px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="rounded-2xl border border-zinc-300 bg-white p-6 sm:p-10 shadow-xs hover:border-zinc-400 transition-all">
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold">
                <span className="px-2.5 py-0.5 rounded bg-brand-50 text-brand-700 border border-brand-200">
                  Featured Case Study
                </span>
                <span className="text-zinc-400">·</span>
                <span className="text-zinc-500 font-mono">2026. 9. 5.</span>
              </div>

              <Link href="/insights/brownevents-meta-ads-event-landing-page" className="group block space-y-2">
                <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-900 group-hover:text-brand-600 transition-colors leading-snug">
                  비개발자가 AI로 티켓 예매 사이트(brownevents) 만들고 메타(인스타) 광고로 100명 모객한 실전 A to Z
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                  외주 개발비 800만 원을 아끼고 AI로 brownevents 같은 파티·이벤트 예약 랜딩페이지를 3일 만에 구축한 뒤, 일 예산 2만 원 인스타그램 메타 광고로 유료 티켓 100장을 완판시킨 실전 풀퍼널 가이드.
                </p>
              </Link>

              <div className="flex items-center gap-3 pt-2 text-xs text-zinc-500">
                <span>에잘러 비즈니스 랩</span>
                <span>·</span>
                <span>읽는 시간 8분</span>
              </div>
            </div>

            <div className="w-full lg:w-72 shrink-0 p-5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-3">
              <h3 className="text-xs font-bold text-zinc-900 uppercase tracking-wider">이 아티클의 핵심 성과</h3>
              <ul className="space-y-2 text-xs text-zinc-600">
                <li className="flex items-start gap-1.5">
                  <span className="font-bold text-zinc-900 shrink-0">외주비 절감:</span>
                  <span>800만 원 ➔ 0원 (자체 개발)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="font-bold text-zinc-900 shrink-0">광고 성과:</span>
                  <span>전환당 비용(CPA) 8,400원 달성</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="font-bold text-zinc-900 shrink-0">모객 결과:</span>
                  <span>오프라인 유료 참가자 100명 완판</span>
                </li>
              </ul>
              <Link
                href="/insights/brownevents-meta-ads-event-landing-page"
                className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-lg bg-zinc-900 text-white text-xs font-bold hover:bg-zinc-800 transition-colors shadow-2xs"
              >
                <span>케이스 스터디 읽기</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Infeed Display */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <AdSlot label="SPONSORED · 홈 피드 디스플레이" />
      </div>

      {/* 3. Featured Editorial Grid */}
      <section className="px-4 sm:px-6 max-w-5xl mx-auto space-y-8">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-zinc-900 tracking-tight">
              실무 딥다이브 리포트
            </h2>
            <p className="text-xs text-zinc-500 mt-1">현업에서 발생한 실제 에러와 벤치마크를 정밀 분석한 기술 보고서</p>
          </div>
          <Link
            href="/insights"
            className="text-xs font-bold text-zinc-700 hover:text-zinc-900 flex items-center gap-1"
          >
            <span>전체보기</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recentArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="p-6 rounded-2xl border border-zinc-200 bg-white flex flex-col justify-between group hover:border-zinc-400 transition-all shadow-2xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold px-2.5 py-0.5 rounded bg-zinc-100 text-zinc-800 border border-zinc-200">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-zinc-400 font-medium">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-zinc-900 group-hover:text-brand-600 transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal line-clamp-3">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-zinc-100 flex items-center justify-between text-xs">
                <span className="text-zinc-400 font-mono">{article.date}</span>
                <span className="font-semibold text-zinc-900 group-hover:text-brand-600 flex items-center gap-1">
                  <span>읽기</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Free Lead Magnet Box */}
      <section className="px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="p-8 sm:p-10 rounded-2xl bg-zinc-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 max-w-xl">
            <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
              FREE CHEAT SHEET
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              비개발자 필수 AI &amp; 웹 프로덕트 실무 용어집 30선
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              바이브코딩, RLS 보안, 캐시버스팅, STT 문맥 보정, 레이트 리밋 등 AI로 웹 서비스를 만들 때 반드시 알아야 할 핵심 개념을 쉽게 풀었습니다.
            </p>
          </div>
          <Link
            href="/glossary"
            className="inline-flex items-center justify-center gap-1.5 px-6 py-3.5 rounded-xl bg-white text-zinc-900 text-xs font-bold hover:bg-zinc-100 transition-colors shrink-0 shadow-sm"
          >
            <span>용어집 무료 열람</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
