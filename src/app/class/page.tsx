'use client';

import React, { useState } from 'react';
import { GraduationCap, CheckCircle2, Clock, Users, ArrowRight, Sparkles, Layout, Target, Zap } from 'lucide-react';

export default function ClassPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      alert('올바른 이메일을 입력해 주세요.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12 font-sans">
      {/* Header */}
      <div className="space-y-3 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-100 text-zinc-800 text-xs font-semibold border border-zinc-200">
          <GraduationCap className="w-3.5 h-3.5 text-zinc-700" />
          <span>실무 프로덕트 빌더 부트캠프</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
          AI로 brownevents 같은 티켓팅 예약 사이트 만들고, 메타(인스타) 광고로 첫 100명 모객하기
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
          외주 개발비 800만 원 들이지 마세요. AI 코딩 에이전트로 나만의 이벤트·예약 랜딩페이지를 직접 완성하고, 
          인스타그램 메타 광고로 실제 결제 고객 100명을 전환시키는 풀퍼널 3주 실전 과정입니다.
        </p>
      </div>

      {/* 3 Steps Curriculum */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl border border-zinc-200 bg-white space-y-3 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-zinc-400 font-mono">WEEK 01</span>
            <Layout className="w-4 h-4 text-zinc-700" />
          </div>
          <h3 className="text-base font-bold text-zinc-900">AI 예약 랜딩페이지 제작</h3>
          <p className="text-xs text-zinc-600 leading-relaxed">
            Next.js와 Claude Code/Antigravity를 조련해 brownevents 스타일의 3D 플립 타이머와 2-Step 모바일 예약 폼을 3일 만에 직접 구축합니다.
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-zinc-200 bg-white space-y-3 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-zinc-400 font-mono">WEEK 02</span>
            <Zap className="w-4 h-4 text-amber-600" />
          </div>
          <h3 className="text-base font-bold text-zinc-900">Vercel 배포 &amp; 결제 자동화</h3>
          <p className="text-xs text-zinc-600 leading-relaxed">
            무료 서버리스 Vercel 배포, 도메인 연결, 카카오톡 인앱 브라우저 최적화 및 토스페이/계좌이체 즉시 확인 알림톡 파이프라인을 연동합니다.
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-zinc-200 bg-white space-y-3 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-zinc-400 font-mono">WEEK 03</span>
            <Target className="w-4 h-4 text-emerald-600" />
          </div>
          <h3 className="text-base font-bold text-zinc-900">메타(인스타) 광고 첫 모객</h3>
          <p className="text-xs text-zinc-600 leading-relaxed">
            일 예산 2만 원으로 CTR 3.5%+ 숏폼 릴스 광고 소재를 기획하고, 메타 픽셀 전환 추적으로 첫 100명 유료 티켓 완판을 실습합니다.
          </p>
        </div>
      </div>

      {/* Trust & Guarantee Box */}
      <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8 space-y-4 text-xs sm:text-sm text-zinc-700">
        <h4 className="font-bold text-zinc-900 text-base">수강생에게 100% 무료 제공되는 실전 에셋</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>brownevents 실제 프로덕션 소스코드 원본</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>CTR 3.8% 뽑아낸 인스타 릴스 광고 템플릿</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>모바일 사파리 3D 플립 CSS &amp; 폼 템플릿</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>메타 픽셀 &amp; 전환 API 노코드 세팅 치트시트</span>
          </div>
        </div>
      </div>

      {/* Lead Capture Form */}
      <div className="p-8 rounded-2xl bg-zinc-900 text-white space-y-5">
        <div className="space-y-1.5">
          <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
            LIMITED TO 15 SEATS · 1기 사전 알림 신청
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            1기 오픈 알림 신청하고 얼리버드 40% 장학 혜택 받기
          </h3>
          <p className="text-xs sm:text-sm text-zinc-300">
            소수 정예(15명)로 1:1 코드 리뷰 및 광고 세팅 피드백이 진행됩니다.
          </p>
        </div>

        {submitted ? (
          <div className="p-4 rounded-xl bg-zinc-800 border border-zinc-700 text-emerald-400 text-xs font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>사전 알림 등록이 완료되었습니다! 1기 오픈 시 가장 먼저 메일로 안내해 드립니다.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="이름 (예: 홍길동)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white text-xs placeholder:text-zinc-500 focus:outline-none focus:border-zinc-500 w-full sm:w-44"
            />
            <input
              type="email"
              placeholder="알림받을 이메일 주소"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white text-xs placeholder:text-zinc-500 focus:outline-none focus:border-zinc-500 flex-1"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-white text-zinc-900 text-xs font-bold hover:bg-zinc-100 transition-colors shrink-0 shadow-xs"
            >
              사전 알림 신청하기
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
