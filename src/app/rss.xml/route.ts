import { NextResponse } from 'next/server';
import { INSIGHTS_ARTICLES } from '@/data/insightsData';

const BASE_URL = 'https://aizaler.kr';

export async function GET() {
  const feedItems = INSIGHTS_ARTICLES.map((article) => `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${BASE_URL}/insights/${article.slug}</link>
      <guid isPermaLink="true">${BASE_URL}/insights/${article.slug}</guid>
      <description><![CDATA[${article.summary}]]></description>
      <category><![CDATA[${article.category}]]></category>
      <pubDate>${new Date(article.date.replace(/\./g, '-').trim()).toUTCString()}</pubDate>
    </item>
  `).join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>AI잘러 (aizaler.kr) - 실전 AI &amp; 바이브코딩 인사이트</title>
    <link>${BASE_URL}</link>
    <description>더 많은 사람이 AI로 일을 잘하게 되는 세상. 비개발자 바이브코딩 트러블슈팅, 음성 AI 도구 비교.</description>
    <language>ko-KR</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    ${feedItems}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
