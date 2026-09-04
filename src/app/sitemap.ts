import { MetadataRoute } from 'next';
import { INSIGHTS_ARTICLES } from '@/data/insightsData';

const BASE_URL = 'https://aizaler.kr';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/insights`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/tools`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/glossary`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/class`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  const articleRoutes: MetadataRoute.Sitemap = INSIGHTS_ARTICLES.map((article) => ({
    url: `${BASE_URL}/insights/${article.slug}`,
    lastModified: new Date(article.date.replace(/\./g, '-').trim()),
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  return [...staticRoutes, ...articleRoutes];
}
