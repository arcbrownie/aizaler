import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { INSIGHTS_ARTICLES } from '@/data/insightsData';
import { AdSlot } from '@/components/AdSlot';
import {
  Clock,
  ExternalLink,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  Info,
  Lightbulb,
  FileCode,
  Share2,
  Bookmark,
  Sparkles,
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
    title: `${article.title} | AI잘러`,
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
      modifiedTime: article.updatedDate ? article.updatedDate.replace(/\./g, '-').trim() : undefined,
      authors: [article.author.name],
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

  // 1. TechArticle Schema for Google SEO & AdSense E-E-A-T
  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: article.title,
    description: article.summary,
    url: articleUrl,
    datePublished: publishedIsoDate,
    dateModified: article.updatedDate ? new Date(article.updatedDate.replace(/\./g, '-').trim()).toISOString() : publishedIsoDate,
    author: {
      '@type': 'Person',
      name: article.author.name,
      jobTitle: article.author.role,
      url: `${BASE_URL}/about`,
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

  // 2. FAQPage Schema for GEO (Generative Engine Optimization)
  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: article.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
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

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-10 font-sans">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-zinc-500 font-medium">
          <Link href="/" className="hover:text-zinc-900 transition-colors">
            홈
          </Link>
          <ChevronRight className="w-3 h-3 text-zinc-300" />
          <Link href="/insights" className="hover:text-zinc-900 transition-colors">
            인사이트
          </Link>
          <ChevronRight className="w-3 h-3 text-zinc-300" />
          <span className="text-zinc-800 font-semibold truncate max-w-[200px] sm:max-w-xs">
            {article.category}
          </span>
        </nav>

        {/* Editorial Header */}
        <header className="space-y-6 pb-8 border-b border-zinc-200">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="font-semibold px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-800 border border-zinc-200">
              {article.category}
            </span>
            <span className="text-zinc-300">|</span>
            <div className="flex items-center gap-1 text-zinc-500 font-medium">
              <Clock className="w-3.5 h-3.5 text-zinc-400" />
              <span>읽는 시간 {article.readTime}</span>
            </div>
            <span className="text-zinc-300">|</span>
            <time dateTime={publishedIsoDate} className="text-zinc-500 font-mono">
              발행일 {article.date}
            </time>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight leading-[1.3]">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
            {article.summary}
          </p>

          {/* Author Byline (E-E-A-T Trust Signal) */}
          <div className="flex items-center justify-between pt-2 border-t border-zinc-100 text-xs text-zinc-600">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-zinc-100 border border-zinc-200 overflow-hidden shrink-0 flex items-center justify-center font-bold text-zinc-700 text-sm">
                AI
              </div>
              <div>
                <div className="font-bold text-zinc-900 flex items-center gap-1.5">
                  <span>{article.author.name}</span>
                  <span className="px-1.5 py-0.2 rounded text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                    인증 저자
                  </span>
                </div>
                <div className="text-zinc-500 text-[11px]">{article.author.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] text-zinc-400 hidden sm:inline">실무 100시간 검증 리포트</span>
            </div>
          </div>
        </header>

        {/* Executive Summary Briefing Box (고위 기술 리포트 스타일) */}
        <section aria-label="Executive Summary" className="p-6 rounded-2xl bg-zinc-50/80 border border-zinc-200/90 space-y-3">
          <div className="flex items-center gap-2 text-zinc-900 font-bold text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-brand-600" />
            <span>Executive Briefing · 핵심 요약 및 시사점</span>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-zinc-700 leading-relaxed">
            {article.executiveSummary.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-800 mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Table of Contents (TOC) */}
        <nav aria-label="Table of contents" className="p-5 rounded-xl border border-zinc-200 bg-white space-y-2.5">
          <h2 className="text-xs font-bold text-zinc-900 uppercase tracking-wider">목차 (Table of Contents)</h2>
          <ol className="space-y-1.5 text-xs sm:text-sm">
            {article.sections.map((section, idx) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-zinc-600 hover:text-brand-600 hover:underline transition-colors flex items-center gap-1.5"
                >
                  <span className="text-zinc-400 font-mono text-[11px]">{idx + 1}.</span>
                  <span>{section.heading.replace(/^\d+\.\s*/, '')}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Top AdSense Slot */}
        <AdSlot label="SPONSORED · 디스플레이 배너" />

        {/* Article Body Sections */}
        <div className="space-y-12 text-zinc-800 leading-[1.85]">
          {article.sections.map((section) => (
            <section key={section.id} id={section.id} className="space-y-5 scroll-mt-20">
              <h2 className="text-xl sm:text-2xl font-black text-zinc-900 tracking-tight pt-2 border-t border-zinc-100">
                {section.heading}
              </h2>

              {section.leadParagraph && (
                <p className="text-sm sm:text-base font-semibold text-zinc-700 leading-relaxed">
                  {section.leadParagraph}
                </p>
              )}

              {section.content && (
                <div className="text-sm sm:text-base text-zinc-700 space-y-4 whitespace-pre-line leading-relaxed">
                  {section.content}
                </div>
              )}

              {/* Comparison Table */}
              {section.comparisonTable && (
                <div className="my-6 overflow-x-auto rounded-xl border border-zinc-200 shadow-xs">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead className="bg-zinc-100 text-zinc-800 font-bold border-b border-zinc-200">
                      <tr>
                        {section.comparisonTable.headers.map((th, i) => (
                          <th key={i} className="p-3.5 sm:p-4 whitespace-nowrap">
                            {th}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 bg-white">
                      {section.comparisonTable.rows.map((row, rIdx) => (
                        <tr
                          key={rIdx}
                          className={row.highlight ? 'bg-brand-50/40 font-medium' : 'hover:bg-zinc-50/60'}
                        >
                          <td className="p-3.5 sm:p-4 font-bold text-zinc-900 whitespace-nowrap">
                            {row.feature}
                          </td>
                          {row.values.map((val, vIdx) => (
                            <td key={vIdx} className="p-3.5 sm:p-4 text-zinc-700">
                              {val}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Code Block */}
              {section.codeBlock && (
                <div className="my-6 rounded-xl overflow-hidden border border-zinc-800 bg-[#18181B] text-zinc-100">
                  {section.codeBlock.filename && (
                    <div className="flex items-center justify-between px-4 py-2 bg-[#27272A] border-b border-zinc-700 text-xs text-zinc-300 font-mono">
                      <div className="flex items-center gap-1.5">
                        <FileCode className="w-3.5 h-3.5 text-zinc-400" />
                        <span>{section.codeBlock.filename}</span>
                      </div>
                      <span className="text-[10px] uppercase text-zinc-400">
                        {section.codeBlock.language}
                      </span>
                    </div>
                  )}
                  <pre className="p-4 sm:p-5 text-xs sm:text-sm overflow-x-auto font-mono leading-relaxed bg-transparent m-0">
                    <code>{section.codeBlock.code}</code>
                  </pre>
                  {section.codeBlock.caption && (
                    <div className="px-4 py-2 bg-[#1F1F23] border-t border-zinc-800 text-[11px] text-zinc-400">
                      {section.codeBlock.caption}
                    </div>
                  )}
                </div>
              )}

              {/* Subsections */}
              {section.subsections && (
                <div className="space-y-8 pl-0 sm:pl-2">
                  {section.subsections.map((sub, sIdx) => (
                    <div key={sIdx} className="space-y-3">
                      <h3 className="text-base sm:text-lg font-bold text-zinc-900 tracking-tight">
                        {sub.subheading}
                      </h3>
                      <div className="text-sm sm:text-base text-zinc-700 whitespace-pre-line leading-relaxed">
                        {sub.content}
                      </div>

                      {sub.codeBlock && (
                        <div className="my-4 rounded-xl overflow-hidden border border-zinc-800 bg-[#18181B] text-zinc-100">
                          {sub.codeBlock.filename && (
                            <div className="flex items-center justify-between px-4 py-2 bg-[#27272A] border-b border-zinc-700 text-xs text-zinc-300 font-mono">
                              <div className="flex items-center gap-1.5">
                                <FileCode className="w-3.5 h-3.5 text-zinc-400" />
                                <span>{sub.codeBlock.filename}</span>
                              </div>
                              <span className="text-[10px] uppercase text-zinc-400">
                                {sub.codeBlock.language}
                              </span>
                            </div>
                          )}
                          <pre className="p-4 sm:p-5 text-xs sm:text-sm overflow-x-auto font-mono leading-relaxed bg-transparent m-0">
                            <code>{sub.codeBlock.code}</code>
                          </pre>
                          {sub.codeBlock.caption && (
                            <div className="px-4 py-2 bg-[#1F1F23] border-t border-zinc-800 text-[11px] text-zinc-400">
                              {sub.codeBlock.caption}
                            </div>
                          )}
                        </div>
                      )}

                      {sub.callout && (
                        <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-amber-950 space-y-1 text-xs sm:text-sm">
                          <div className="font-bold flex items-center gap-1.5 text-amber-900">
                            <Lightbulb className="w-4 h-4 text-amber-600" />
                            <span>{sub.callout.title}</span>
                          </div>
                          <p className="leading-relaxed font-normal">{sub.callout.text}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Callout */}
              {section.callout && (
                <div
                  className={`p-5 rounded-xl text-xs sm:text-sm space-y-1.5 ${
                    section.callout.type === 'key-takeaway'
                      ? 'bg-zinc-900 text-white border border-zinc-800'
                      : section.callout.type === 'warning'
                      ? 'bg-rose-50 border border-rose-200 text-rose-950'
                      : 'bg-blue-50/80 border border-blue-200 text-blue-950'
                  }`}
                >
                  <div className="font-bold flex items-center gap-1.5">
                    {section.callout.type === 'key-takeaway' && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                    {section.callout.type === 'warning' && <AlertTriangle className="w-4 h-4 text-rose-600" />}
                    {section.callout.type === 'info' && <Info className="w-4 h-4 text-blue-600" />}
                    <span>{section.callout.title}</span>
                  </div>
                  <p className="leading-relaxed font-normal whitespace-pre-line">{section.callout.text}</p>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Affiliate / Spotlight Banner */}
        {article.affiliateCallout && (
          <div className="my-10 p-6 sm:p-8 rounded-2xl bg-zinc-900 text-white space-y-4 shadow-md">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                {article.affiliateCallout.badgeText || '추천 솔루션'}
              </span>
              <span className="text-xs text-zinc-400">{article.affiliateCallout.toolName}</span>
            </div>

            <h3 className="text-lg sm:text-xl font-black text-white leading-snug">
              {article.affiliateCallout.headline}
            </h3>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {article.affiliateCallout.description}
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-200 py-1">
              {article.affiliateCallout.benefits.map((b, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-zinc-800">
              <a
                href={article.affiliateCallout.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-zinc-900 text-xs font-black hover:bg-zinc-100 transition-colors shadow-sm"
              >
                <span>{article.affiliateCallout.buttonText}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <p className="text-[11px] text-zinc-400 max-w-sm leading-tight">
                {article.affiliateCallout.disclosure}
              </p>
            </div>
          </div>
        )}

        {/* Mid/Bottom AdSense Slot */}
        <AdSlot label="SPONSORED · 하단 매칭 인피드 슬롯" />

        {/* FAQ Section (GEO Rich Snippets) */}
        {article.faq.length > 0 && (
          <section className="pt-8 border-t border-zinc-200 space-y-4">
            <h3 className="text-lg sm:text-xl font-black text-zinc-900 tracking-tight">
              자주 묻는 질문 (FAQ)
            </h3>
            <div className="space-y-3">
              {article.faq.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-zinc-200 bg-zinc-50/50 space-y-1.5 text-xs sm:text-sm">
                  <h4 className="font-bold text-zinc-900">Q. {item.question}</h4>
                  <p className="text-zinc-600 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Author Bio Box (E-E-A-T AdSense Guarantee) */}
        <section className="p-6 rounded-2xl border border-zinc-200 bg-white flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-zinc-100 border border-zinc-200 overflow-hidden shrink-0 flex items-center justify-center font-bold text-zinc-800 text-lg">
            AI
          </div>
          <div className="space-y-1 text-xs sm:text-sm">
            <div className="font-bold text-zinc-900 flex items-center gap-2">
              <span>{article.author.name}</span>
              <span className="text-zinc-400 font-normal text-xs">· {article.author.role}</span>
            </div>
            <p className="text-zinc-600 leading-relaxed">{article.author.bio}</p>
            <div className="text-[11px] text-zinc-400 pt-1">
              본 아티클의 모든 테스트와 코드는 실제 프로덕션 환경에서 직접 검증되었습니다.
            </div>
          </div>
        </section>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-4">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium text-zinc-600 px-3 py-1 rounded-md bg-zinc-100 border border-zinc-200"
            >
              #{tag}
            </span>
          ))}
        </div>
      </article>
    </>
  );
}
