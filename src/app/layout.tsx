import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'AI잘러 (aizaler.kr) · 더 많은 사람이 AI로 일을 잘하게 되는 세상',
  description:
    '비개발자 바이브코딩 실전 트러블슈팅, AI 음성(타입캐스트/ElevenLabs/Whisper) 도구 실무 비교, 그리고 무료 생존 용어집 치트시트.',
  keywords: [
    'AI잘러',
    'aizaler',
    '바이브코딩',
    '타입캐스트',
    'Typecast',
    'TTS',
    'STT',
    'AI업무자동화',
    'Next.js배포에러',
    'ClaudeCode',
    'Supabase',
  ],
  authors: [{ name: '에잘러 랩스' }],
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚡</text></svg>',
  },
  openGraph: {
    title: 'AI잘러 (aizaler.kr) · 더 많은 사람이 AI로 일을 잘하게 되는 세상',
    description:
      '비개발자를 위한 실전 AI 트러블슈팅, 음성 AI 도구 비교, 바이브코딩 생존 치트시트.',
    url: 'https://aizaler.kr',
    siteName: 'AI잘러 (aizaler.kr)',
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#FAFAFB] text-[#18181B] selection:bg-brand-100 selection:text-brand-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
