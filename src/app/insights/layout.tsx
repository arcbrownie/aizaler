import type { Metadata } from 'next';
import { INSIGHTS_ARTICLES } from '@/data/insightsData';

export const metadata: Metadata = {
  title: '인사이트 (실전 트러블슈팅 & 도구 비교)',
  description:
    '스크린샷 노가다 없이, 실제 코딩과 서비스 운영 중 터진 문제점과 1분 만에 끝내는 복붙 해결 코드 모음집.',
  alternates: {
    canonical: '/insights',
  },
  openGraph: {
    title: '인사이트 | AI잘러 (aizaler.kr)',
    description: '비개발자 바이브코딩 실전 트러블슈팅과 AI 도구 비교 아카이브.',
    url: 'https://aizaler.kr/insights',
  },
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdItemList = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: '인사이트 | AI잘러 (aizaler.kr)',
    description: '비개발자 바이브코딩 실전 트러블슈팅 및 도구 비교 아티클 모음',
    url: 'https://aizaler.kr/insights',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: INSIGHTS_ARTICLES.map((article, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `https://aizaler.kr/insights/${article.slug}`,
        name: article.title,
        description: article.summary,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdItemList) }}
      />
      {children}
    </>
  );
}
