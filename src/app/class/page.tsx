'use client';

import React, { useState } from 'react';
import { GraduationCap, CheckCircle2, Clock, Users, ArrowRight, Sparkles, Check } from 'lucide-react';

export default function ClassPage() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12">
      {/* Header */}
      <div className="space-y-3 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold border border-brand-200">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>에잘러 실전 부트캠프</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight leading-tight">
          비개발자가 AI로 3일 만에 실서비스 런칭하는 바이브코딩 실전
        </h1>
        <p className="text-sm text-zinc-600 leading-relaxed font-normal">
          코딩 문법 암기는 그만! Claude Code와 Antigravity, Next.js, Supabase를 활용해 
          실제 결제와 모객이 일어나는 내 서비스를 처음부터 끝까지 직접 런칭해보는 1기 과정입니다.
        </p>
      </div>

      {/* Course Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="clean-card p-6 space-y-2">
          <span className="text-xs font-bold text-brand-600">STEP 1</span>
          <h3 className="text-base font-bold text-zinc-900">AI 에이전트 조련법</h3>
          <p className="text-xs text-zinc-600 leading-relaxed">
            프롬프트 룰셋과 Git 커밋 백업 전략으로 AI가 코드를 지우거나 망가뜨리지 않게 통제하는 실무 노하우.
          </p>
        </div>

        <div className="clean-card p-6 space-y-2">
          <span className="text-xs font-bold text-brand-600">STEP 2</span>
          <h3 className="text-base font-bold text-zinc-900">DB &amp; 결제/신청 폼 구축</h3>
          <p className="text-xs text-zinc-600 leading-relaxed">
            Supabase RLS 보안과 카카오톡 인앱 브라우저 최적화로 손님 개인정보를 안전하게 수집하고 대기자 큐 운영.
          </p>
        </div>

        <div className="clean-card p-6 space-y-2">
          <span className="text-xs font-bold text-brand-600">STEP 3</span>
          <h3 className="text-base font-bold text-zinc-900">Vercel 배포 &amp; 애드센스</h3>
          <p className="text-xs text-zinc-600 leading-relaxed">
            도메인 연결, 캐시 무효화, 3D CSS 사파리 버그 해결부터 고단가 구글 애드센스 승인받는 꿀팁까지.
          </p>
        </div>
      </div>

      {/* Early-Bird Lead Form */}
      <div className="clean-card p-8 sm:p-10 border-brand-200 bg-gradient-to-br from-white via-brand-50/20 to-white shadow-md space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-black uppercase text-brand-700 px-2 py-0.5 bg-brand-100 rounded">
            EARLY BIRD REGISTRATION
          </span>
          <h2 className="text-2xl font-black text-zinc-900 tracking-tight">
            에잘러 클래스 1기 사전 알림 신청
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 max-w-md mx-auto leading-relaxed">
            사전 신청자에게만 정식 오픈 시 <strong>최대 40% 얼리버드 수강 할인 쿠폰</strong>과 
            <strong>《비개발자 실전 바이브코딩 시크릿 치트시트 PDF》</strong>를 선물로 보내드립니다.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
            <Check className="w-8 h-8 text-emerald-600 mx-auto" />
            <h3 className="text-base font-bold text-emerald-900">사전 알림 등록이 완료되었습니다!</h3>
            <p className="text-xs text-emerald-700">1기 클래스 일정이 확정되는 즉시 가장 먼저 연락드리겠습니다.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3">
            <div>
              <label className="block text-xs font-bold text-zinc-700 mb-1">이메일 주소 <span className="text-red-500">*</span></label>
              <input
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 bg-white text-xs sm:text-sm text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:border-brand-500 shadow-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-zinc-700 mb-1">연락처 / 카카오톡 (선택)</label>
              <input
                type="text"
                placeholder="010-1234-5678"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 bg-white text-xs sm:text-sm text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:border-brand-500 shadow-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-5 rounded-xl bg-zinc-900 hover:bg-brand-600 text-white text-xs sm:text-sm font-bold transition-colors shadow-sm"
            >
              얼리버드 알림 및 혜택 신청하기 →
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
