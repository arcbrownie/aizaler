'use client';

import React from 'react';
import { motion } from 'framer-motion';

const PHASES = [
  {
    phase: '01 · 공기업 & 해외 주재원',
    title: '안정된 조직에서 시작한 첫 번째 질문',
    desc: '공기업과 해외 주재원으로 일하며 안정적인 궤도에 있었지만, 조직의 타이틀 없이 내 손으로 만든 프로덕트로 시장의 선택을 받아보고 싶었습니다.',
    studColor: 'bg-gray-800 border-gray-900',
    cardClass: 'brick-card',
    textColor: 'text-gray-500',
  },
  {
    phase: '02 · Stage 1 · AI 도구화',
    title: '가장 확실한 첫 고객은 나 자신: 명사도 · 맹모인사이트 · 칠구영어',
    desc: '아이 이름을 짓기 위해 명사도를, 학군 데이터를 보려고 맹모인사이트를, 실전 영어 표현을 정리하려고 칠구영어를 만들었습니다. 내 문제를 해결한 도구가 타인의 지갑도 연다는 것을 확인했습니다.',
    studColor: 'bg-amber-400 border-amber-500',
    cardClass: 'brick-card-yellow',
    textColor: 'text-amber-600',
  },
  {
    phase: '03 · Stage 2 · 스레드 & 메타 수익화',
    title: '스레드 500만 뷰 역공학 DB와 메타 광고 전환율 8.6% 공식',
    desc: '20만 뷰에 결제 4건이던 초기 실패를 복기하며 500만 뷰 실측 데이터를 분석했고, Meta 공인 미디어 플래닝 자격을 바탕으로 광고와 랜딩페이지를 일치시켜 구매 전환율 8.6% 퍼널을 구축했습니다.',
    studColor: 'bg-emerald-500 border-emerald-600',
    cardClass: 'brick-card-green',
    textColor: 'text-emerald-600',
  },
  {
    phase: '04 · Stage 3 & 1:1 Consulting',
    title: '월 $42 1인 풀스택 운영과 1:1 커리어 컨설팅',
    desc: '외주비 0원·월 고정비 $42로 4개 상용 서비스를 운영하는 설계도를 교육 과정으로 만들고, 직장과 독립 사이에서 고민하는 분들과 1:1로 마주 앉아 90일 실행 로드맵을 설계합니다.',
    studColor: 'bg-blue-600 border-blue-700',
    cardClass: 'brick-card-blue',
    textColor: 'text-blue-600',
  },
];

export default function FounderNarrativeTimeline() {
  return (
    <div className="space-y-5">
      {PHASES.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: -20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 340,
            damping: 26,
            delay: idx * 0.08,
          }}
        >
          <div className="flex items-center gap-2.5 px-6 -mb-[2px] relative z-10">
            {Array.from({ length: 4 }).map((_, sIdx) => (
              <div
                key={sIdx}
                className={`h-2.5 w-7 rounded-t-[5px] border-t-2 border-x-2 ${item.studColor}`}
              />
            ))}
          </div>
          <div className={`${item.cardClass} p-6 sm:p-7`}>
            <div className={`text-xs font-extrabold ${item.textColor} mb-1`}>
              {item.phase}
            </div>
            <h3 className="text-base sm:text-lg font-black text-gray-950 mb-2 leading-snug">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
