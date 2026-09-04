import React from 'react';
import Link from 'next/link';
import { INSIGHTS_ARTICLES } from '@/data/insightsData';
import { GLOSSARY_TERMS } from '@/data/glossaryData';
import { Sparkles, ArrowRight, Clock, Mic, ShieldAlert, Cpu, CheckCircle2, BookmarkCheck } from 'lucide-react';

export default function HomePage() {
  const featuredArticles = INSIGHTS_ARTICLES.filter((a) => a.isFeatured);
  const recentArticles = INSIGHTS_ARTICLES.slice(0, 6);

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* 1. Hero Section */}
      <section className="pt-12 sm:pt-20 px-4 sm:px-6 max-w-5xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-brand-600" />
          <span>더 많은 사람이 AI로 일을 잘하게 되는 세상</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-zinc-900 tracking-tight leading-[1.15]">
          일잘러를 넘어, AI로 일 잘하는<br />
          <span className="text-brand-600 underline decoration-brand-200 underline-offset-8">
            에잘러(AI-ZALER)
          </span>들의 실전 지식소
        </h1>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
          교과서 같은 뻔한 튜토리얼은 가라! 직접 부딪히며 겪은 <strong>피눈물 트러블슈팅 해결기</strong>, 
          외주비 30만 원 아끼는 <strong>음성 AI(TTS/STT) 도구 비교</strong>, 비개발자를 위한 <strong>바이브코딩 생존 팁</strong>만 모았습니다.
        </p>

        {/* 2. Lead Magnet Card (Hero Callout) */}
        <div className="mt-8 max-w-2xl mx-auto clean-card p-6 sm:p-8 bg-gradient-to-br from-white via-brand-50/30 to-blue-50/20 border-brand-200/80 relative overflow-hidden text-left shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-brand-700 px-2 py-0.5 bg-brand-100 rounded">
                FREE LEAD MAGNET 🎁
              </span>
              <h3 className="text-lg sm:text-xl font-black text-zinc-900">
                비개발자 필수 AI &amp; 바이브코딩 용어집 30선
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                바이브코딩, RLS 보안, 캐시버스팅, TTS/STT, 레이트리밋까지 3분 만에 마스터하는 치트시트.
              </p>
            </div>
            <Link
              href="/glossary"
              className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl bg-brand-600 text-white text-xs font-bold hover:bg-brand-700 transition-colors shrink-0 shadow-sm"
            >
              <span>용어집 무료 열람 →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Featured Showcase Grid */}
      <section className="px-4 sm:px-6 max-w-6xl mx-auto space-y-8">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-zinc-900 tracking-tight">
              🔥 에잘러 필독 실전 인사이트
            </h2>
            <p className="text-xs text-zinc-500 mt-0.5">실제 서비스 운영 중 겪은 문제와 즉시 복붙 가능한 해결책</p>
          </div>
          <Link
            href="/insights"
            className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1"
          >
            <span>전체보기</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="clean-card p-6 flex flex-col justify-between group hover:-translate-y-1 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-100">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-zinc-400 font-medium">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-zinc-900 group-hover:text-brand-600 transition-colors leading-snug line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-xs text-zinc-600 leading-relaxed line-clamp-3 font-normal">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-400">
                <span>{article.date}</span>
                <span className="font-bold text-brand-600 group-hover:translate-x-0.5 transition-transform">
                  읽기 →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Tools Affiliate Spotlight (Typecast & Voice AI) */}
      <section className="px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="clean-card p-8 sm:p-10 bg-gradient-to-r from-zinc-900 to-zinc-800 text-white rounded-2xl relative overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold border border-white/10">
                <Mic className="w-3.5 h-3.5" />
                <span>에잘러 추천 제휴 도구</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
                외주 성우비 30만원 대신, 3분 만에 고품질 더빙 끝내는 법
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal max-w-2xl">
                쇼츠, 강의, 오디오북을 만들 때 어색한 기계음 대신 사람이 직접 녹음한 듯한 감정과 호흡을 구현하는 
                <strong>타입캐스트(Typecast)</strong>와 자막 자동 생성 <strong>STT(Whisper/Vrew)</strong>의 실전 결합 파이프라인.
              </p>
              <div className="flex flex-wrap gap-2 pt-2 text-[11px] text-zinc-300">
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">✓ 400개 이상 한국어 특화 AI 캐릭터</span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">✓ 0.1초 쉼표 &amp; 감정 조절</span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">✓ 제휴 특별 할인 링크 제공</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                href="/tools"
                className="py-3.5 px-6 rounded-xl bg-white text-zinc-900 text-xs font-black hover:bg-zinc-100 transition-all text-center shadow-md"
              >
                음성 AI 도구 비교 분석 보기 →
              </Link>
              <a
                href="https://typecast.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-white/10 text-zinc-200 hover:text-white hover:bg-white/15 border border-white/20 text-xs font-bold text-center transition-all"
              >
                타입캐스트 바로가기 (제휴) ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Glossary Preview Bar */}
      <section className="px-4 sm:px-6 max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-zinc-900 tracking-tight">
              📖 에잘러 실전 용어 사전 (맛보기)
            </h2>
            <p className="text-xs text-zinc-500 mt-0.5">비개발자가 AI 에이전트로 일할 때 꼭 알아야 할 핵심 개념</p>
          </div>
          <Link
            href="/glossary"
            className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1"
          >
            <span>30개 전체보기</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GLOSSARY_TERMS.slice(0, 6).map((item) => (
            <div key={item.id} className="clean-card p-5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-zinc-400 uppercase">{item.category}</span>
                <BookmarkCheck className="w-3.5 h-3.5 text-brand-600" />
              </div>
              <h4 className="text-sm font-bold text-zinc-900">{item.term}</h4>
              <p className="text-xs text-zinc-600 leading-relaxed">{item.simpleDef}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Class Teaser Banner */}
      <section className="px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="clean-card p-8 sm:p-10 border-brand-200 text-center space-y-4 bg-brand-50/40">
          <span className="text-xs font-black uppercase tracking-wider text-brand-700 px-2.5 py-1 bg-brand-100 rounded-full">
            COMING SOON CLASS 🎓
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight">
            비개발자가 AI로 3일 만에 실서비스 런칭하는 바이브코딩 실전
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 max-w-lg mx-auto leading-relaxed">
            이론 강의는 그만! 실제 Next.js, Supabase, Vercel로 모임/서비스 사이트를 만들고 
            결제/모객까지 끝내는 에잘러 실전 부트캠프. 1기 오픈 시 얼리버드 알림을 받아보세요.
          </p>
          <div className="pt-2">
            <Link
              href="/class"
              className="inline-flex items-center gap-1.5 px-6 py-3 rounded-xl bg-zinc-900 text-white text-xs font-bold hover:bg-brand-600 transition-colors shadow-sm"
            >
              <span>클래스 커리큘럼 &amp; 사전 알림 신청 →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
