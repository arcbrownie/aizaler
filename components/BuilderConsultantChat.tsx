'use client'

import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, ArrowRight, Layers, Cpu } from 'lucide-react';
import Link from 'next/link';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  recommendedStep?: number;
  productLink?: {
    title: string;
    href: string;
    badge: string;
  };
}

interface BuilderConsultantChatProps {
  onStepDiagnosed?: (step: number) => void;
}

const QUICK_PROMPTS = [
  {
    label: '🟡 [Stage 1] 코딩은 모르지만 내 업무 도구를 만들고 싶어요',
    query: '코딩은 잘 모르지만 내 반복 업무를 줄여줄 AI 자동화 도구를 먼저 만들어보고 싶어요.',
  },
  {
    label: '🟢 [Stage 2] 스레드 조회수는 나오는데 결제가 안 일어나요',
    query: '스레드 팔로워와 조회수는 조금 나오는데 실제 수익화나 결제로 연결하는 방법을 모르겠어요.',
  },
  {
    label: '🟢 [Stage 2] 내 프로덕트에 메타 광고를 효율 있게 붙이고 싶어요',
    query: '만들어둔 프로덕트나 전자책이 있는데 메타 광고를 소액으로라도 효율 있게 돌리는 법이 궁금해요.',
  },
  {
    label: '🔴 [Stage 3] 외주비 0원으로 결제창 달린 내 웹서비스를 띄우고 싶어요',
    query: '외주 개발비 없이 직접 결제창 달린 풀스택 웹서비스를 배포하고 터미널 자동화를 구축하고 싶어요.',
  },
  {
    label: '🔵 [Career 1:1] 직장 다니면서 1인 빌더 독립·퇴사 타이밍이 고민돼요',
    query: '현재 직장에 재직 중인데 사이드 프로젝트 방향성과 퇴사/독립 타이밍을 어떻게 잡아야 할지 고민입니다.',
  },
];

function diagnoseInput(input: string): {
  reply: string;
  step: number;
  productLink: { title: string; href: string; badge: string };
} {
  const text = input.toLowerCase();

  if (
    text.includes('퇴사') ||
    text.includes('이직') ||
    text.includes('커리어') ||
    text.includes('직장') ||
    text.includes('주재원') ||
    text.includes('공기업') ||
    text.includes('독립') ||
    text.includes('고민') ||
    text.includes('컨설팅') ||
    text.includes('타이밍')
  ) {
    return {
      step: 5,
      reply:
        '직장이라는 안전장치 안에서 "언제, 어떤 무기를 들고 나와야 할지"가 가장 막막하실 시점입니다.\n\n저 역시 공기업 7년·해외 주재원을 거치며 똑같은 고민을 했고, 퇴사 전 반드시 검증해야 할 현금흐름 지표와 90일 실행 로드맵을 1:1 세션에서 가감 없이 설계해 드립니다. 왼쪽 3D 시뮬레이터를 [Step 05 · 🔵 CAREER 파란 브릭]으로 맞췄습니다.',
      productLink: {
        badge: '🔵 CAREER TRACK · 재능기부 & 자아실현 1:1',
        title: '공기업·주재원 파운더 1:1 커리어 & 빌더 의사결정 세션 보기',
        href: '/career',
      },
    };
  }

  if (
    text.includes('풀스택') ||
    text.includes('외주') ||
    text.includes('배포') ||
    text.includes('결제창') ||
    text.includes('터미널') ||
    text.includes('웹서비스') ||
    text.includes('supabase')
  ) {
    return {
      step: 4,
      reply:
        '나를 위해 만든 도구를 진짜 상용 서비스로 격상시킬 단계입니다.\n\n외주비 0원·월 고정비 $42로 4개의 상용 웹서비스를 무중단 운영하는 풀스택 설계도와 Claude Code 터미널 자동화로 혼자 10명분 생산성을 내보세요. 왼쪽 3D 블록을 [Step 04 · 🔴 STAGE 3 빨간 브릭]으로 연결했습니다.',
      productLink: {
        badge: '🔴 STAGE 3 · 빨간 브릭 (풀스택 런칭 설계도)',
        title: '1인 테크 스튜디오 풀스택 아키텍처 (월 $42 설계도) 보기',
        href: '/product/6',
      },
    };
  }

  if (
    text.includes('메타') ||
    text.includes('광고') ||
    text.includes('타겟') ||
    text.includes('전환') ||
    text.includes('cvr') ||
    text.includes('유료') ||
    text.includes('퍼널')
  ) {
    return {
      step: 3,
      reply:
        '오가닉 트래픽에만 의존하면 매달 매출이 롤러코스터를 탑니다.\n\nMeta 공식 인증(Media Planning Professional) 파운더가 일 예산 1~3만 원으로도 CVR 8.6%를 달성한 [소재 ➔ 랜딩 1:1 메시지 일치 공식]과 초기 픽셀 세팅법을 추천드립니다. 왼쪽 3D 블록을 [Step 03 · 🟢 STAGE 2 메타 광고 엔진]으로 연결했습니다.',
      productLink: {
        badge: '🟢 STAGE 2 주력 · Meta 공식 인증',
        title: '메타 광고 고전환 플레이북 (CVR 8.6%) 자세히 보기',
        href: '/product/3',
      },
    };
  }

  if (
    text.includes('스레드') ||
    text.includes('조회수') ||
    text.includes('팔로워') ||
    text.includes('마케팅') ||
    text.includes('수익화') ||
    text.includes('글쓰기') ||
    text.includes('바이럴') ||
    text.includes('결제')
  ) {
    return {
      step: 2,
      reply:
        '단순 어그로성 20만 뷰보다 "내 잠재고객의 지갑을 여는 1,000~3,000뷰"가 훨씬 강력합니다.\n\n2개 계정 누적 500만 뷰를 직접 터뜨리며 구축한 1줄 훅(Hook) 공식과 수익화 아키텍처를 조립해 보세요. 왼쪽 3D 블록을 [Step 02 · 🟢 STAGE 2 스레드 500만 뷰 엔진]으로 활성화했습니다.',
      productLink: {
        badge: '🟢 STAGE 2 주력 · 누적 500만 뷰 실증',
        title: '스레드 500만 뷰 알고리즘 & 수익화 바이블 보기',
        href: '/product/1',
      },
    };
  }

  return {
    step: 1,
    reply:
      '처음부터 거창한 SaaS를 만들 필요 없습니다! 어릴 적 기초 블록을 하나씩 끼우듯, "내가 매일 겪는 귀찮은 반복 업무 1개"를 AI로 해결하는 것부터 시작하세요.\n\n비개발자도 15분 만에 내 문체와 업무를 기억하는 AI 일꾼(.skills)을 조립할 수 있습니다. 왼쪽 3D 블록을 [Step 01 · 🟡 STAGE 1 노란 브릭]으로 맞췄습니다.',
    productLink: {
      badge: '🟡 STAGE 1 · 노란 브릭 (입문 베스트셀러)',
      title: '나를 위한 첫 AI 일꾼 조립 (.skills & 자율 실행 킷) 보기',
      href: '/product/aside-starter',
    },
  };
}

export default function BuilderConsultantChat({ onStepDiagnosed }: BuilderConsultantChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        '안녕하세요! aizaler 브릭 아키텍트입니다 🧱\n현재 어떤 단계에 계신가요? 아래 고민 버튼을 누르거나 직접 상황을 적어주시면, **🟡 Stage 1 ➔ 🟢 Stage 2 ➔ 🔴 Stage 3 & 🔵 Career** 중 지금 바로 조립해야 할 블록을 3D 시뮬레이터와 함께 진단해 드립니다.',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (messages.length > 1) {
      scrollToBottom();
    }
  }, [messages]);

  const handleSend = (customQuery?: string) => {
    const queryText = (customQuery ?? input).trim();
    if (!queryText || isLoading) return;

    if (!customQuery) setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: queryText }]);
    setIsLoading(true);

    setTimeout(() => {
      const result = diagnoseInput(queryText);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: result.reply,
          recommendedStep: result.step,
          productLink: result.productLink,
        },
      ]);
      if (onStepDiagnosed) {
        onStepDiagnosed(result.step);
      }
      setIsLoading(false);
    }, 350);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend();
  };

  return (
    <div className="w-full h-full flex flex-col technic-card rounded-[28px] overflow-hidden border border-white/10">
      {/* Header */}
      <div className="bg-[#0B101E] px-6 py-4 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 bg-emerald-500/15 border border-emerald-400/30 rounded-xl flex items-center justify-center text-emerald-400">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-white text-sm flex items-center gap-2">
              aizaler 브릭 단계 진단기
              <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">
                3D SYNC
              </span>
            </h4>
            <p className="text-xs text-slate-400">
              내 상황에 맞는 브릭 단계(🟡 Stage 1 · 🟢 Stage 2 · 🔴 Stage 3 · 🔵 Career) 즉시 매칭
            </p>
          </div>
        </div>
        <Sparkles className="w-4 h-4 text-emerald-400" />
      </div>

      {/* Quick Prompts */}
      <div className="px-5 py-3 bg-[#080C17] border-b border-white/5">
        <p className="text-[11px] font-mono text-slate-400 mb-2 uppercase tracking-wider">
          원클릭 고민 진단 (클릭 시 좌측 3D 블록 연동)
        </p>
        <div className="flex flex-wrap gap-1.5">
          {QUICK_PROMPTS.map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSend(item.query)}
              className="text-left text-xs bg-white/[0.04] hover:bg-white/[0.1] text-slate-200 border border-white/10 hover:border-emerald-400/40 px-3 py-1.5 rounded-lg transition-all"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-5 overflow-y-auto space-y-4 min-h-[290px] max-h-[380px] bg-[#070B14]/60">
        {messages.map((m, idx) => (
          <div key={idx} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
            <div className={`flex items-start max-w-[90%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-1 ${
                  m.role === 'user'
                    ? 'bg-emerald-600 text-white ml-2.5'
                    : 'bg-white/10 text-emerald-400 mr-2.5 border border-white/10'
                }`}
              >
                {m.role === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
              </div>

              <div className="space-y-2.5">
                <div
                  className={`p-3.5 rounded-2xl text-xs md:text-sm leading-relaxed whitespace-pre-wrap ${
                    m.role === 'user'
                      ? 'bg-emerald-600 text-white rounded-tr-none font-medium'
                      : 'bg-[#111827] border border-white/10 text-slate-200 rounded-tl-none'
                  }`}
                >
                  {m.content}
                </div>

                {m.recommendedStep && (
                  <div className="inline-flex items-center space-x-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 px-3 py-1 rounded-lg text-[11px] font-bold">
                    <Layers className="w-3.5 h-3.5" />
                    <span>좌측 3D 블록 Step 0{m.recommendedStep} 활성화됨</span>
                  </div>
                )}

                {m.productLink && (
                  <Link
                    href={m.productLink.href}
                    className="block p-3.5 rounded-xl bg-gradient-to-r from-emerald-600/20 to-blue-500/10 border border-emerald-400/30 hover:border-emerald-400/70 transition-all group"
                  >
                    <span className="text-[10px] font-mono font-bold text-emerald-300 block mb-1">
                      {m.productLink.badge}
                    </span>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs md:text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {m.productLink.title}
                      </span>
                      <ArrowRight className="w-4 h-4 text-emerald-400 shrink-0 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex items-center space-x-2 text-slate-400 text-xs pl-10">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" />
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-2 h-2 bg-rose-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            <span className="ml-2 font-mono">최적의 브릭 모듈 분석 중...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <form onSubmit={handleSubmit} className="p-3.5 bg-[#0B101E] border-t border-white/10 flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="예: 스레드 수익화가 막막해요 / 직장인 퇴사 전 무엇부터 만들까요?"
          className="flex-1 bg-white/[0.05] text-white placeholder-slate-500 text-xs md:text-sm px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-emerald-400 transition-all"
        />
        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="px-4 py-3 bg-emerald-400 text-slate-950 rounded-xl hover:bg-emerald-300 disabled:opacity-40 transition-all flex items-center justify-center shrink-0 font-bold text-xs gap-1.5"
        >
          <span>진단</span>
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}
