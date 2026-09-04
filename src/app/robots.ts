import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      // Explicitly encourage GEO crawlers (Perplexity, ChatGPT, Claude, Google Gemini)
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'PerplexityBot', 'ClaudeBot', 'anthropic-ai', 'Google-Extended', 'Yeti'],
        allow: '/',
      },
    ],
    sitemap: 'https://aizaler.kr/sitemap.xml',
    host: 'https://aizaler.kr',
  };
}
