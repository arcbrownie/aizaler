'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Sparkle, PaperPlaneTilt, ArrowRight, CheckCircle, LightbulbFilament, Target, Cpu, RocketLaunch, Crown } from '@phosphor-icons/react';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  step?: number;
  timestamp: string;
}

interface BuilderConsultantChatProps {
  onStepDiagnosed?: (step: number) => void;
}

const QUICK_PROMPTS = [
  { text: '💡 [Level 1] 아이디어는 있는데 시장성이 막막해요', step: 1, icon: LightbulbFilament },
  { text: '⚡️ [Level 2] AI를 검색창처럼만 써서 실무에 안 쓰여요', step: 2, icon: Cpu },
  { text: '🚀 [Level 3] 외주비 없이 직접 상용 웹을 띄우고 싶어요', step: 3, icon: RocketLaunch },
  { text: '🎯 [Level 4] 웹은 있는데 방문자가 없고 결제가 안 돼요', step: 4, icon: Target },
  { text: '👑 [Level 5] 퇴사/1인 기업 방향성을 1:1로 진단받고 싶어요', step: 5, icon: Crown },
];

const TRACK_DETAILS: Record<number, {
  name: string;
  deliverable: string;
  brickLabel: string;
  link: string;
  actionText: string;
}> = {
  1: {
    name: 'LEVEL 01. 시장 검증 & Aside 자율 리서치',
    deliverable: 'Aside 24h 시장 감시 봇 & 검증된 BM 린 캔버스 1장',
    brickLabel: '블루 기초 블록',
    link: '#lead-magnet',
    actionText: '1단계 기획 가이드 받기'
  },
  2: {
    name: 'LEVEL 02. 실리콘밸리 Claude 정본 AI 지능',
    deliverable: 'Anthropic 공식 XML 프롬프트 템플릿 & 실무 AI 파이프라인',
    brickLabel: '딥 퍼플 지능 블록',
    link: '/product/aside-starter',
    actionText: '2단계 AI 정본 킷 보기'
  },
  3: {
    name: 'LEVEL 03. 외주비 0원 1인 상용 웹 런칭',
    deliverable: '외주비 0원, 내 손으로 직접 띄운 상용 웹서비스 1개 배포',
    brickLabel: '퍼플➔화이트 런칭 블록',
    link: '/product/6',
    actionText: '3단계 풀스택 런칭 킷 보기'
  },
  4: {
    name: 'LEVEL 04. 메타 고전환 퍼널 & 소셜 트래픽',
    deliverable: '스레드 알고리즘 & CVR 20% 고전환 퍼널 시스템',
    brickLabel: '레드 핫포인트 블록',
    link: '/product/1',
    actionText: '4단계 퍼널 실전서 보기'
  },
  5: {
    name: 'LEVEL 05. 1인 비즈니스 마스터리 & 1:1 VIP',
    deliverable: '사전 질의서 기반 90일 실행 Action Blueprint',
    brickLabel: '순백 화이트 서밋 블록',
    link: '/career',
    actionText: '5단계 1:1 전략 세션 신청하기'
  }
};

export default function BuilderConsultantChat({ onStepDiagnosed }: BuilderConsultantChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: '반갑습니다! 1인 빌더 스튜디오 aizaler의 AI 아키텍트입니다. 🧱✨\n\n수많은 정보 속에서 "지금 당장 내가 무엇부터 시작해야 하는지" 막막하신가요? 아래 고민 칩을 탭하시거나 편하게 1줄로 적어주시면, 5단계 커리큘럼 중 지금 당장 조립해야 할 레벨 블록을 처방해 드립니다.',
      timestamp: '지금'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: '방금 전'
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: textToSend })
      });

      const data = await res.json();

      if (data.reply) {
        const aiMsg: Message = {
          id: `ai-${Date.now()}`,
          sender: 'ai',
          text: data.reply,
          step: data.step || 1,
          timestamp: '방금 전'
        };

        setMessages((prev) => [...prev, aiMsg]);

        // Trigger live 3D Lego linkage
        if (data.step && onStepDiagnosed) {
          onStepDiagnosed(data.step);
        }
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          id: `ai-err-${Date.now()}`,
          sender: 'ai',
          text: '잠시 네트워크 연결이 원활하지 않습니다. 아래 추천 로드맵에서 내 단계를 직접 확인해 보세요!',
          timestamp: '방금 전'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickPrompt = (promptText: string) => {
    handleSendMessage(promptText);
  };

  const latestAiMessageWithStep = [...messages].reverse().find((m) => m.sender === 'ai' && m.step);

  return (
    <div className="rounded-3xl bg-white border border-black/[0.08] shadow-[0_10px_35px_rgba(0,0,0,0.05)] p-5 sm:p-7 space-y-4 max-w-3xl mx-auto">
      {/* ── Chat Header ── */}
      <div className="flex items-center justify-between border-b border-black/[0.05] pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-[#3182f6] text-white flex items-center justify-center shadow-xs">
            <Sparkle size={16} weight="fill" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-black text-[#191f28]">AI 빌더 실시간 진단 상담소</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div className="text-[10px] text-[#8b95a1] font-medium">
              Gemini Flash-Lite 기반 0.3초 실시간 맞춤 처방
            </div>
          </div>
        </div>

        <span className="text-[11px] font-bold text-[#3182f6] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200/50">
          1:1 실시간 진단 중
        </span>
      </div>

      {/* ── Quick Prompt Chips (1-Tap Experience) ── */}
      <div className="space-y-1.5">
        <div className="text-[11px] font-bold text-[#8b95a1]">
          원클릭으로 내 고민 짚어보기:
        </div>
        <div className="flex flex-wrap gap-1.5">
          {QUICK_PROMPTS.map((p, idx) => {
            const Icon = p.icon;
            return (
              <button
                key={idx}
                onClick={() => handleQuickPrompt(p.text)}
                disabled={isLoading}
                className="px-2.5 py-1.5 rounded-xl bg-gray-50 hover:bg-[#e8f3ff] hover:text-[#3182f6] border border-black/[0.05] text-[11px] font-bold text-[#4e5968] transition-all flex items-center gap-1 active:scale-95 disabled:opacity-50 text-left"
              >
                <Icon size={13} weight="bold" className="text-[#3182f6] shrink-0" />
                <span>{p.text}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Message Stream Box ── */}
      <div className="h-[240px] sm:h-[280px] overflow-y-auto space-y-3 p-3 rounded-2xl bg-[#f8fafc] border border-black/[0.04] scroll-smooth">
        {messages.map((m) => {
          const isAi = m.sender === 'ai';
          return (
            <div
              key={m.id}
              className={`flex flex-col ${isAi ? 'items-start' : 'items-end'} animate-in fade-in duration-200`}
            >
              <div
                className={`max-w-[88%] sm:max-w-[80%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed shadow-xs ${
                  isAi
                    ? 'bg-white text-[#191f28] border border-black/[0.06] rounded-tl-sm'
                    : 'bg-[#191f28] text-white rounded-tr-sm'
                }`}
              >
                {/* Step indicator tag if present */}
                {m.step && (
                  <div className="mb-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#e8f3ff] text-[#3182f6] text-[10px] font-black border border-blue-200/50">
                    <Sparkle size={12} weight="fill" />
                    <span>진단 완료: TRACK 0{m.step} 추천</span>
                  </div>
                )}
                <div className="whitespace-pre-wrap">{m.text}</div>
              </div>
              <span className="text-[9px] text-[#8b95a1] px-1 mt-0.5">{m.timestamp}</span>
            </div>
          );
        })}

        {isLoading && (
          <div className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-black/[0.06] w-fit">
            <span className="w-2 h-2 rounded-full bg-[#3182f6] animate-bounce" />
            <span className="w-2 h-2 rounded-full bg-[#3182f6] animate-bounce [animation-delay:0.2s]" />
            <span className="w-2 h-2 rounded-full bg-[#3182f6] animate-bounce [animation-delay:0.4s]" />
            <span className="text-xs text-[#8b95a1] font-medium ml-1">AI가 비즈니스 트랙과 결과물을 처방 중입니다...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* ── Input Box ── */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage(inputValue);
        }}
        className="flex items-center gap-2"
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="내 비즈니스 고민을 직접 1줄로 적어보세요..."
          disabled={isLoading}
          className="flex-1 px-4 py-3 rounded-xl bg-gray-50 border border-black/[0.08] text-xs sm:text-sm text-[#191f28] placeholder-gray-400 outline-none focus:border-[#3182f6] focus:bg-white transition-all disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={isLoading || !inputValue.trim()}
          className="toss-button-primary px-4 py-3 rounded-xl flex items-center justify-center gap-1 shrink-0 disabled:opacity-50 shadow-xs active:scale-95"
          title="상담 질문 전송"
        >
          <PaperPlaneTilt size={16} weight="bold" />
          <span className="hidden sm:inline text-xs">상담하기</span>
        </button>
      </form>

      {/* ── Prescribed Step Direct Action Card ── */}
      {latestAiMessageWithStep && latestAiMessageWithStep.step && TRACK_DETAILS[latestAiMessageWithStep.step] && (
        <div className="p-4 sm:p-5 rounded-2xl bg-[#e8f3ff]/80 border border-[#3182f6]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-in fade-in duration-300">
          <div className="space-y-1 min-w-0">
            <div className="text-[11px] font-bold text-[#3182f6] flex items-center gap-1.5">
              <Sparkle size={13} weight="fill" />
              <span>진단 결과 처방: {TRACK_DETAILS[latestAiMessageWithStep.step].name} ({TRACK_DETAILS[latestAiMessageWithStep.step].brickLabel})</span>
            </div>
            <div className="text-xs sm:text-sm font-black text-[#191f28]">
              🎯 목표 결과물: {TRACK_DETAILS[latestAiMessageWithStep.step].deliverable}
            </div>
            <p className="text-[11px] text-[#4e5968]">
              상단 3D 레고 위젯에서 해당 블록이 활성화되었습니다. 지금 바로 손에 쥐어질 결과물을 확인해 보세요.
            </p>
          </div>

          <a
            href={TRACK_DETAILS[latestAiMessageWithStep.step].link}
            className="px-4 py-2.5 rounded-xl bg-[#3182f6] hover:bg-[#1b64da] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shrink-0 shadow-xs"
          >
            <span>{TRACK_DETAILS[latestAiMessageWithStep.step].actionText}</span>
            <ArrowRight size={13} weight="bold" />
          </a>
        </div>
      )}
    </div>
  );
}

