import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { INSIGHTS_ARTICLES } from '@/data/insightsData';
import { AdSlot } from '@/components/AdSlot';
import {
  ArrowLeft,
  Clock,
  AlertCircle,
  HelpCircle,
  Code2,
  CheckCircle,
  Sparkles,
  ExternalLink,
  Zap,
} from 'lucide-react';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const BASE_URL = 'https://aizaler.kr';

export async function generateStaticParams() {
  return INSIGHTS_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = INSIGHTS_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return { title: '아티클을 찾을 수 없습니다' };
  }

  const articleUrl = `${BASE_URL}/insights/${article.slug}`;

  return {
    title: article.title,
    description: article.summary,
    keywords: article.tags,
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
      title: `${article.title} | AI잘러`,
      description: article.summary,
      url: articleUrl,
      type: 'article',
      publishedTime: article.date.replace(/\./g, '-').trim(),
      authors: ['에잘러 랩스'],
      tags: article.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.summary,
    },
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = INSIGHTS_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const articleUrl = `${BASE_URL}/insights/${article.slug}`;
  const publishedIsoDate = new Date(article.date.replace(/\./g, '-').trim()).toISOString();

  // 1. TechArticle Schema (Google SEO)
  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: article.title,
    description: article.summary,
    url: articleUrl,
    datePublished: publishedIsoDate,
    dateModified: publishedIsoDate,
    author: {
      '@type': 'Person',
      name: '에잘러 (AI-ZALER)',
      jobTitle: 'AI 실무 프로덕트 엔지니어',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'AI잘러 (aizaler.kr)',
      url: BASE_URL,
      logo: `${BASE_URL}/icon.png`,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    keywords: article.tags.join(', '),
  };

  // 2. FAQPage Schema (GEO & Google Rich Snippets)
  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `${article.title}의 주요 발생 증상은 무엇인가요?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: article.sections.symptom,
        },
      },
      {
        '@type': 'Question',
        name: `이 문제가 발생하는 원인은 무엇인가요?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: article.sections.cause,
        },
      },
      {
        '@type': 'Question',
        name: `이 문제를 1분 만에 해결하는 방법은 무엇인가요?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: article.sections.solutionExplanation,
        },
      },
    ],
  };

  // 3. BreadcrumbList Schema
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: '홈',
        item: BASE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '인사이트',
        item: `${BASE_URL}/insights`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: articleUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-8">
        {/* Breadcrumb & Back Link */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-zinc-500 font-medium">
          <Link href="/" className="hover:text-zinc-900 transition-colors">
            홈
          </Link>
          <span className="text-zinc-300">/</span>
          <Link href="/insights" className="hover:text-zinc-900 transition-colors">
            인사이트
          </Link>
          <span className="text-zinc-300">/</span>
          <span className="text-zinc-800 font-bold truncate max-w-[200px] sm:max-w-xs">{article.category}</span>
        </nav>

        {/* Article Header */}
        <header className="space-y-4 pb-6 border-b border-zinc-200">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="font-bold px-2.5 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-200">
              {article.category}
            </span>
            <span className="text-zinc-400">·</span>
            <div className="flex items-center gap-1 text-zinc-500 font-medium">
              <Clock className="w-3.5 h-3.5" />
              <span>읽는 시간 {article.readTime}</span>
            </div>
            <span className="text-zinc-400">·</span>
            <time dateTime={publishedIsoDate} className="text-zinc-400 font-mono">
              {article.date}
            </time>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-zinc-900 tracking-tight leading-[1.25]">
            {article.title}
          </h1>

          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
            {article.summary}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium text-zinc-500 px-2.5 py-0.5 rounded-md bg-zinc-100 border border-zinc-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* 🌟 GEO Direct Answer Box (For AI Engines like Perplexity, ChatGPT Search, Gemini) */}
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-brand-50/80 via-white to-blue-50/40 border border-brand-200/80 shadow-xs space-y-2">
          <div className="flex items-center gap-2 text-brand-800 font-bold text-xs uppercase tracking-wider">
            <Zap className="w-4 h-4 text-brand-600 fill-brand-600" />
            <span>AI 및 바쁜 직장인을 위한 30초 핵심 결론 (Direct Answer)</span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed font-semibold">
            {article.sections.takeaway[0]} {article.sections.takeaway[1]}
          </p>
        </div>

        {/* Top AdSense Slot */}
        <AdSlot label="SPONSORED · 상단 디스플레이 슬롯" />

        {/* Core Article Body (4-Step Actionable Format) */}
        <article className="space-y-10 text-zinc-800 leading-relaxed">
          {/* Step 1: Symptom */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-rose-600 font-black text-lg">
              <AlertCircle className="w-5 h-5" />
              <h2>1. 발생 증상 (What Happened)</h2>
            </div>
            <div className="p-5 rounded-xl bg-rose-50/50 border border-rose-200/80 text-sm text-zinc-800 leading-relaxed">
              <p className="font-normal">{article.sections.symptom}</p>
            </div>
          </section>

          {/* Step 2: Cause */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-zinc-900 font-black text-lg">
              <HelpCircle className="w-5 h-5 text-amber-500" />
              <h2>2. 원인 분석 (Why)</h2>
            </div>
            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed pl-1">
              {article.sections.cause}
            </p>
          </section>

          {/* Mid-Article AdSense or Affiliate Spotlight */}
          {article.affiliateBanner ? (
            <div className="my-8 clean-card p-6 sm:p-7 bg-gradient-to-r from-brand-900 to-zinc-900 text-white rounded-2xl space-y-3 shadow-lg">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-amber-400 text-black">
                  제휴 추천
                </span>
                <span className="text-xs text-zinc-300 font-bold">{article.affiliateBanner.toolName}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white leading-snug">
                {article.affiliateBanner.headline}
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed max-w-xl">
                {article.affiliateBanner.description}
              </p>
              <div className="pt-2">
                <a
                  href={article.affiliateBanner.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white text-zinc-900 text-xs font-black hover:bg-brand-50 transition-colors shadow-sm"
                >
                  <span>{article.affiliateBanner.buttonText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ) : (
            <AdSlot label="SPONSORED · 본문 인피드 슬롯" />
          )}

          {/* Step 3: Solution Code & Method */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-emerald-600 font-black text-lg">
              <Code2 className="w-5 h-5" />
              <h2>3. 해결 코드 및 방법 (How to Fix)</h2>
            </div>
            <p className="text-sm text-zinc-600 pl-1 leading-relaxed">
              {article.sections.solutionExplanation}
            </p>
            <div className="rounded-xl overflow-hidden shadow-sm">
              <pre>
                <code>{article.sections.solutionCode}</code>
              </pre>
            </div>
          </section>

          {/* Step 4: 3-Line Takeaway */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-brand-700 font-black text-lg">
              <CheckCircle className="w-5 h-5" />
              <h2>4. 에잘러 3줄 요약 (Takeaway)</h2>
            </div>
            <div className="clean-card p-6 bg-zinc-50 border-zinc-200 space-y-2.5">
              {article.sections.takeaway.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-800">
                  <span className="font-bold text-brand-600 mt-0.5">{idx + 1}.</span>
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </section>
        </article>

        {/* Bottom AdSense Slot */}
        <AdSlot label="SPONSORED · 하단 일치형 광고 슬롯" />

        {/* Lead Magnet CTA Footer in Article */}
        <div className="clean-card p-6 sm:p-8 bg-brand-50/50 border-brand-200 space-y-3 text-center">
          <span className="text-xs font-black uppercase text-brand-700 px-2 py-0.5 bg-brand-100 rounded">
            FREE CHEAT-SHEET
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-zinc-900">
            비개발자가 AI로 일할 때 꼭 알아야 할 생존 용어집 30선
          </h3>
          <p className="text-xs text-zinc-600 max-w-md mx-auto leading-relaxed">
            바이브코딩, RLS 보안, 캐시버스팅, TTS/STT 핵심 용어를 3분 만에 마스터할 수 있는 PDF 치트시트를 무료로 열람해 보세요.
          </p>
          <div className="pt-2">
            <Link
              href="/glossary"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-zinc-900 text-white text-xs font-bold hover:bg-brand-600 transition-colors shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>용어집 무료 보러가기 →</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
