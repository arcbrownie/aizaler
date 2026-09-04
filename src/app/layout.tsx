import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const BASE_URL = 'https://aizaler.kr';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'AI잘러 (aizaler.kr) · 더 많은 사람이 AI로 일을 잘하게 되는 세상',
    template: '%s | AI잘러 (aizaler.kr)',
  },
  description:
    '비개발자 바이브코딩 실전 트러블슈팅, AI 음성(타입캐스트/ElevenLabs/Whisper) 도구 실무 비교, 그리고 무료 생존 용어집 치트시트.',
  keywords: [
    'AI잘러',
    'aizaler',
    '에잘러',
    '바이브코딩',
    '타입캐스트',
    'Typecast',
    'TTS',
    'STT',
    'AI음성더빙',
    'Next.js배포에러',
    'ClaudeCode',
    'Supabase',
    '트러블슈팅',
    'AI업무자동화',
  ],
  authors: [{ name: '에잘러 랩스 (AI-ZALER Labs)' }],
  creator: '에잘러 랩스',
  publisher: 'AI잘러 (aizaler.kr)',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚡</text></svg>',
  },
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': `${BASE_URL}/rss.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'AI잘러 (aizaler.kr) · 더 많은 사람이 AI로 일을 잘하게 되는 세상',
    description:
      '비개발자를 위한 실전 AI 트러블슈팅, 음성 AI 도구 비교, 바이브코딩 생존 치트시트.',
    url: BASE_URL,
    siteName: 'AI잘러 (aizaler.kr)',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI잘러 (aizaler.kr) · 실전 AI & 바이브코딩 지식 아카이브',
    description: '비개발자 바이브코딩 실전 트러블슈팅과 AI 도구 비교 가이드.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdWebsite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'AI잘러 (aizaler.kr)',
    url: BASE_URL,
    description: '더 많은 사람이 AI로 일을 잘하게 되는 세상. 비개발자 바이브코딩 및 AI 도구 실전 아카이브.',
    publisher: {
      '@type': 'Organization',
      name: '에잘러 랩스 (AI-ZALER Labs)',
      url: BASE_URL,
      logo: `${BASE_URL}/icon.png`,
    },
    inLanguage: 'ko-KR',
  };

  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FAFAFB] text-[#18181B] selection:bg-brand-100 selection:text-brand-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
