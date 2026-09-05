'use client';

import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) {
      alert('이메일과 문의 내용을 입력해 주세요.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10 font-sans text-zinc-800">
      <header className="space-y-3 border-b border-zinc-200 pb-6">
        <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Contact Us</span>
        <h1 className="text-3xl font-extrabold text-zinc-900 tracking-tight">문의 및 제보하기</h1>
        <p className="text-sm text-zinc-600 leading-relaxed">
          기술 아티클 내용 오류 제보, 사실 정정 요청, 비즈니스 제휴 및 기고 문의는 아래 양식을 통해 보내주시면 24시간 이내에 답변드립니다.
        </p>
      </header>

      {/* Quick Direct Email Info */}
      <div className="p-5 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-between gap-4 text-xs sm:text-sm">
        <div className="flex items-center gap-2 text-zinc-700">
          <Mail className="w-4 h-4 text-brand-600 shrink-0" />
          <span>공식 문의 이메일:</span>
          <strong className="text-zinc-900 font-mono">contact@aizaler.kr</strong>
        </div>
        <span className="text-zinc-400 text-xs hidden sm:inline">영업일 기준 24시간 내 회신</span>
      </div>

      {submitted ? (
        <div className="p-8 rounded-2xl border border-emerald-200 bg-emerald-50 text-center space-y-3">
          <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
          <h3 className="text-lg font-bold text-zinc-900">문의가 정상 접수되었습니다.</h3>
          <p className="text-xs sm:text-sm text-zinc-600 max-w-md mx-auto">
            보내주신 소중한 의견과 제보는 담당 에디터가 검토 후 입력하신 이메일({email})로 신속히 답변드리겠습니다.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-zinc-700">이름 또는 기업명 *</label>
              <input
                type="text"
                placeholder="홍길동"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 text-xs sm:text-sm focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-zinc-700">회신받을 이메일 *</label>
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 text-xs sm:text-sm focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-zinc-700">문의 유형</label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 text-xs sm:text-sm bg-white focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500"
            >
              <option value="오류 제보 및 내용 정정 요청">오류 제보 및 내용 정정 요청</option>
              <option value="비즈니스 제휴 및 파트너십">비즈니스 제휴 및 파트너십</option>
              <option value="부트캠프 / 강의 단체 수강 문의">부트캠프 / 강의 단체 수강 문의</option>
              <option value="기타 일반 문의">기타 일반 문의</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-zinc-700">상세 내용 *</label>
            <textarea
              rows={5}
              placeholder="문의하시거나 제보하실 내용을 상세히 적어주세요."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full p-4 rounded-xl border border-zinc-200 text-xs sm:text-sm focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 leading-relaxed"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-zinc-900 text-white text-xs sm:text-sm font-bold hover:bg-zinc-800 transition-colors shadow-xs flex items-center justify-center gap-2"
          >
            <span>문의 전송하기</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      )}
    </div>
  );
}
