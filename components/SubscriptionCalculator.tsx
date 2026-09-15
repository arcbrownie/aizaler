'use client';

import React, { useState } from 'react';
import { 
  Calculator, 
  CheckCircle, 
  Sparkle, 
  ArrowRight, 
  Coins, 
  Clock, 
  TrendUp,
  ShieldCheck,
  WarningCircle
} from '@phosphor-icons/react';

interface ToolOption {
  id: string;
  name: string;
  usdMonthly: number;
  krwMonthly: number;
  description: string;
}

const COMMON_TOOLS: ToolOption[] = [
  { id: 'chatgpt', name: 'ChatGPT Plus', usdMonthly: 20, krwMonthly: 28000, description: '가장 대중적인 범용 챗봇' },
  { id: 'claude', name: 'Claude Pro', usdMonthly: 20, krwMonthly: 28000, description: '긴 문서 기획·코딩 특화' },
  { id: 'perplexity', name: 'Perplexity Pro', usdMonthly: 20, krwMonthly: 28000, description: '실시간 웹 검색 & 출처 인용' },
  { id: 'cursor', name: 'Cursor Pro', usdMonthly: 20, krwMonthly: 28000, description: 'AI 코드 에디터' },
  { id: 'midjourney', name: 'Midjourney', usdMonthly: 10, krwMonthly: 14000, description: '고화질 이미지 생성' },
  { id: 'notion', name: 'Notion AI', usdMonthly: 10, krwMonthly: 14000, description: '노션 내부 문서 요약·자동완성' },
];

export default function SubscriptionCalculator() {
  const [selectedIds, setSelectedIds] = useState<string[]>(['chatgpt', 'claude', 'perplexity']);

  const toggleTool = (id: string) => {
    setSelectedIds((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const currentMonthly = selectedIds.reduce((sum, id) => {
    const tool = COMMON_TOOLS.find((t) => t.id === id);
    return sum + (tool ? tool.krwMonthly : 0);
  }, 0);

  const currentAnnual = currentMonthly * 12;

  // aizaler 다이어트 플랜: 단일 메인 툴 (28,000원) + 무료 API/무료티어로 충분
  const optimizedMonthly = selectedIds.length > 0 ? 28000 : 0;
  const optimizedAnnual = optimizedMonthly * 12;
  const annualSavings = Math.max(0, currentAnnual - optimizedAnnual);

  return (
    <div className="bezel-card-outer">
      <div className="bezel-card-inner space-y-6">
        {/* 상단 라벨 */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-black/[0.04] pb-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#e8f3ff] text-[#3182f6] text-xs font-bold">
              <Calculator size={14} weight="duotone" />
              실시간 AI 구독료 다이어트 진단기
            </div>
            <h3 className="text-lg sm:text-xl font-black text-[#191f28]">
              현재 구독 중인 AI 서비스를 선택해 보세요
            </h3>
          </div>
          <span className="text-xs text-[#8b95a1] font-medium self-start sm:self-auto">
            클릭하여 다중 선택 가능
          </span>
        </div>

        {/* 툴 선택 그리드 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {COMMON_TOOLS.map((tool) => {
            const isSelected = selectedIds.includes(tool.id);
            return (
              <button
                key={tool.id}
                type="button"
                onClick={() => toggleTool(tool.id)}
                className={`p-3.5 rounded-2xl border text-left transition-all tactile-btn flex flex-col justify-between gap-2 ${
                  isSelected
                    ? 'border-[#3182f6] bg-[#e8f3ff]/40 shadow-xs'
                    : 'border-black/[0.06] bg-white hover:border-gray-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-bold text-[#191f28]">
                    {tool.name}
                  </span>
                  <CheckCircle
                    size={18}
                    weight={isSelected ? 'fill' : 'light'}
                    className={isSelected ? 'text-[#3182f6]' : 'text-gray-300'}
                  />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#4e5968] tabular-nums">
                    월 {tool.krwMonthly.toLocaleString()}원
                  </span>
                  <span className="block text-[10px] text-[#8b95a1] line-clamp-1">
                    {tool.description}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* 진단 결과 2열 비교 박스 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* 현재 지출액 카드 */}
          <div className="p-4 rounded-2xl bg-[#f9fafb] border border-black/[0.04] space-y-2">
            <div className="flex items-center justify-between text-xs text-[#8b95a1] font-medium">
              <span>현재 낭비 중인 지출</span>
              <span className="px-2 py-0.5 rounded-full bg-red-50 text-[#f04452] font-bold text-[10px]">
                중복 구독 의심
              </span>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-[#191f28] font-mono tabular-nums">
                월 {currentMonthly.toLocaleString()}원
              </div>
              <div className="text-xs text-[#8b95a1]">
                연간 약 <span className="font-mono font-bold text-[#191f28] tabular-nums">{currentAnnual.toLocaleString()}원</span>이 빠져나가는 중
              </div>
            </div>
          </div>

          {/* aizaler 다이어트 솔루션 카드 */}
          <div className="p-4 rounded-2xl bg-[#e8f3ff]/60 border border-[#3182f6]/20 space-y-2">
            <div className="flex items-center justify-between text-xs font-medium text-[#1b64da]">
              <span className="flex items-center gap-1">
                <Sparkle size={14} weight="duotone" /> aizaler 최적화 적용 시
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#3182f6] text-white font-bold text-[10px]">
                권장 플랜
              </span>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-[#3182f6] font-mono tabular-nums">
                월 {optimizedMonthly.toLocaleString()}원
              </div>
              <div className="text-xs text-[#3182f6] font-semibold">
                단 1개 메인 툴 + 무료 API 세팅으로 연간{' '}
                <span className="underline font-bold font-mono tabular-nums">
                  {annualSavings.toLocaleString()}원
                </span>{' '}
                즉시 절감!
              </div>
            </div>
          </div>
        </div>

        {/* 뽕뽑기 기대 효과 배너 */}
        <div className="p-4 rounded-2xl bg-white border border-emerald-100 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <TrendUp size={22} weight="duotone" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-[#191f28]">
                단순 비용 절감을 넘어, 2만 원으로 주 7.5시간 회수
              </div>
              <div className="text-[11px] text-[#4e5968]">
                시급 3만 원 기준 월 90만 원 상당의 업무 시간 단축 효과 (수강생 실측 평균)
              </div>
            </div>
          </div>
          <a
            href="#solutions"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#3182f6] text-white text-xs font-bold hover:bg-[#1b64da] transition-colors tactile-btn shrink-0"
          >
            뽕뽑기 솔루션 확인 <ArrowRight size={14} weight="bold" />
          </a>
        </div>
      </div>
    </div>
  );
}

