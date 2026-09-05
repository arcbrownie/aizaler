import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Target, Award, Users, BookOpen, ArrowRight } from 'lucide-react';

export const metadata = {
  title: '소개 (About) | AI잘러 (aizaler.kr)',
  description: '더 많은 사람이 AI로 일을 잘하게 되는 세상을 만드는 실전 테크 저널, AI잘러(AI-ZALER)의 설립 비전과 집필진 소개.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12 font-sans">
      {/* Header */}
      <header className="space-y-4 border-b border-zinc-200 pb-8">
        <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">About AI-ZALER</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
          AI로 일의 속도를 바꾸는 실무자들의 지식소
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
          AI잘러(aizaler.kr)는 &quot;더 많은 사람이 AI로 일을 잘하게 되는 세상&quot;을 꿈꾸며 만들어진 기술 저널이자 실전 프로덕트 아카이브입니다.
        </p>
      </header>

      {/* Mission & Values */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-zinc-900 tracking-tight">우리의 설립 취지</h2>
        <div className="text-sm sm:text-base text-zinc-700 leading-relaxed space-y-4">
          <p>
            인공지능의 발전으로 코딩을 몰라도 웹사이트를 만들고, 복잡한 업무를 자동화할 수 있는 시대가 되었습니다.
            그러나 인터넷에는 여전히 뜬구름 잡는 프롬프트 모음집이나, 교과서적인 1회성 튜토리얼이 넘쳐납니다.
          </p>
          <p>
            정작 실무자가 마주하는 것은 <strong>&quot;Vercel 배포 시 터지는 정적 분석 빌드 에러&quot;</strong>, 
            <strong>&quot;인스타그램 인앱 웹뷰에서 깨지는 3D 플립 애니메이션&quot;</strong>, 
            <strong>&quot;손목 건초염을 해결해 줄 AI 음성 받아쓰기 도구의 미묘한 한국어 오탈자&quot;</strong> 같은 날것의 현실적인 문제입니다.
          </p>
          <p>
            AI잘러는 이러한 현업의 갈증을 해소하기 위해 설립되었습니다. 모든 글은 <strong>최소 100시간 이상 실제 프로덕션에서 직접 겪고 해결한 검증된 데이터</strong>만을 다룹니다.
          </p>
        </div>
      </section>

      {/* 3 Core Editorial Principles */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-zinc-900 tracking-tight">AI잘러의 3대 집필 원칙 (E-E-A-T)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2">
            <span className="font-bold text-zinc-900 flex items-center gap-1.5 text-sm">
              <Award className="w-4 h-4 text-brand-600" />
              1. 경험 기반 (Experience)
            </span>
            <p className="text-xs text-zinc-600 leading-relaxed">
              직접 돈을 내고 써보지 않은 도구나 서비스는 리뷰하지 않습니다. 실제 외주비와 광고비, 결제 내역을 투명하게 공개합니다.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2">
            <span className="font-bold text-zinc-900 flex items-center gap-1.5 text-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              2. 전문적 검증 (Expertise)
            </span>
            <p className="text-xs text-zinc-600 leading-relaxed">
              단순 코드 복붙을 지양하고 Next.js 컴파일러 AST, Webkit GPU 가속 등 동작 원리를 분석하여 재발을 방지합니다.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2">
            <span className="font-bold text-zinc-900 flex items-center gap-1.5 text-sm">
              <Target className="w-4 h-4 text-amber-600" />
              3. 투명한 신뢰 (Trust)
            </span>
            <p className="text-xs text-zinc-600 leading-relaxed">
              제휴 마케팅 링크가 포함된 경우 독자에게 명확히 사전 고지하며, 단점과 과금 함정도 가감 없이 비판합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Team */}
      <section className="p-6 rounded-2xl border border-zinc-200 bg-white space-y-4">
        <h2 className="text-lg font-bold text-zinc-900 tracking-tight">집필진 (Editorial Team)</h2>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center font-bold text-zinc-800 shrink-0">
            AI
          </div>
          <div className="space-y-1 text-xs sm:text-sm text-zinc-700">
            <div className="font-bold text-zinc-900">에잘러 리서치 &amp; 엔지니어링 팀</div>
            <p className="text-zinc-600 leading-relaxed">
              10년 차 풀스택 소프트웨어 엔지니어, B2C 이벤트 기획자, 그로스 퍼포먼스 마케터들이 모여 결성한 실무 스터디 그룹입니다.
              기술의 대중화와 비개발자의 독립적 프로덕트 빌딩을 돕는 콘텐츠를 제작합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Links */}
      <div className="flex flex-wrap gap-4 pt-4 border-t border-zinc-200 text-xs font-semibold">
        <Link href="/editorial" className="text-zinc-600 hover:text-zinc-900 transition-colors">
          편집 가이드라인 &amp; 제휴 공시 →
        </Link>
        <Link href="/privacy" className="text-zinc-600 hover:text-zinc-900 transition-colors">
          개인정보처리방침 →
        </Link>
        <Link href="/contact" className="text-zinc-600 hover:text-zinc-900 transition-colors">
          문의하기 및 제보 →
        </Link>
      </div>
    </div>
  );
}
