'use client';

import React from 'react';
import { motion } from 'framer-motion';

const PHASES = [
  {
    phase: 'PHASE 01 · 공기업 & 해외 주재원 7년',
    title: '안정된 궤도 속에서 깨어난 빌더의 본능',
    desc: '어릴 때부터 설명서 없이 블록을 조립해 나만의 무언가를 만드는 걸 가장 좋아했습니다. 공기업과 해외 주재원 생활은 안정적이었지만, 거대한 조직의 톱니바퀴가 아니라 내 손으로 직접 만든 프로덕트로 시장의 선택을 받아보고 싶었습니다.',
    studColor: 'bg-gray-800 border-gray-900',
    cardClass: 'brick-card',
    textColor: 'text-gray-600',
  },
  {
    phase: 'PHASE 02 · STAGE 01 (나를 위한 도구 조립)',
    title: '가장 확실한 첫 고객은 나 자신이었다: 명사도 · 맹모인사이트 · 칠구영어',
    desc: '아이 이름을 짓기 위해 작명 AI(명사도)를 만들었고, 학군지와 부동산 데이터를 보려고 맹모인사이트를 조립했으며, 실전 영어 표현을 정리하려고 칠구영어를 만들었습니다. 내가 진짜 쓰려고 만든 도구가 타인의 지갑도 연다는 사실을 확인했습니다.',
    studColor: 'bg-amber-400 border-amber-500',
    cardClass: 'brick-card-yellow',
    textColor: 'text-amber-600',
  },
  {
    phase: 'PHASE 03 · STAGE 02 (스레드 500만 뷰 & 메타 광고 수익화)',
    title: '20만 뷰 결제 4건의 실패를 넘어, 500만 뷰 & CVR 8.6% 공식을 완성하다',
    desc: '초기엔 스레드 20만 뷰가 터져도 결제가 4건밖에 안 나오는 실패를 겪었습니다. 이후 2개 계정 500만 뷰 데이터를 역공학으로 DB화하고, Meta 공식 인증 미디어 플래닝 자격을 바탕으로 광고 소재와 랜딩페이지를 1:1로 동기화해 전환율 8.6% 퍼널을 완성했습니다.',
    studColor: 'bg-emerald-500 border-emerald-600',
    cardClass: 'brick-card-green',
    textColor: 'text-emerald-600',
  },
  {
    phase: 'PHASE 04 · STAGE 03 & CAREER 1:1',
    title: '월 $42 1인 풀스택 시스템과 1:1 커리어 의사결정 연구소',
    desc: '외주비 0원·월 고정비 $42로 4개의 상용 서비스를 운영하며 검증한 설계도를 나눕니다. 또한 과거의 저처럼 직장과 독립 사이에서 고민하는 분들과 1:1로 마주 앉아 90일 실행 로드맵을 함께 설계합니다.',
    studColor: 'bg-blue-600 border-blue-700',
    cardClass: 'brick-card-blue',
    textColor: 'text-blue-600',
  },
];

export default function FounderNarrativeTimeline() {
  return (
    <div className="space-y-6">
      {PHASES.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: -24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 320,
            damping: 24,
            delay: idx * 0.1,
          }}
        >
          <div className="flex items-center gap-3 px-6 -mb-[2px] relative z-10">
            {Array.from({ length: 4 }).map((_, sIdx) => (
              <div
                key={sIdx}
                className={`h-3 w-8 rounded-t-md border-t-2 border-x-2 ${item.studColor}`}
              />
            ))}
          </div>
          <div className={`${item.cardClass} p-6 sm:p-8`}>
            <div className={`text-xs font-mono font-extrabold ${item.textColor} mb-1.5`}>
              {item.phase}
            </div>
            <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-2.5 leading-snug">
              {item.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
