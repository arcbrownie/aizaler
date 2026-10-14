'use client'

import React from 'react';
import { Briefcase, Plane, Blocks, Flame, Compass, CheckCircle2 } from 'lucide-react';

interface TimelineEvent {
  year: string;
  stageBadge: string;
  title: string;
  subtitle: string;
  description: string;
  metrics: string[];
  icon: React.ElementType;
  accentClass: string;
}

const TIMELINE_DATA: TimelineEvent[] = [
  {
    year: 'PHASE 01 · 공기업 & 해외 주재원 7년',
    stageBadge: 'STABILITY vs THIRST',
    title: '누구나 부러워하던 안정된 궤도, 그러나 채워지지 않던 빌더의 갈증',
    subtitle: '국내 공기업 입사 및 해외 주재원 파견 근무',
    description:
      '어릴 때부터 설명서 없이 레고 블록을 조립해 내만의 장난감을 만드는 걸 가장 좋아했습니다. 안정적인 공기업과 해외 주재원 생활은 훌륭했지만, 거대한 조직의 톱니바퀴가 아니라 “내 손으로 직접 조립한 프로덕트로 시장의 선택을 받아보고 싶다”는 본능이 깨어났습니다.',
    metrics: ['공기업 및 해외 주재원 7년 경력', '조직 내 신사업·글로벌 프로젝트 리드', '퇴근 후 1인 빌더 실험 시작'],
    icon: Plane,
    accentClass: 'border-slate-500/40 text-slate-300',
  },
  {
    year: 'PHASE 02 · LEGO DUPLO (나를 위한 도구 조립)',
    stageBadge: '🟢 DUPLO STAGE',
    title: '가장 확실한 첫 고객은 나 자신이었다: 명사도 · 맹모인사이트 · 칠구영어',
    subtitle: '내 일상의 불편함을 해결하기 위해 주말마다 조립한 미니 프로덕트들',
    description:
      '처음부터 거창한 SaaS를 만든 게 아닙니다. 아이 이름을 직접 짓기 위해 작명 AI(명사도)를 만들었고, 학군지와 부동산 데이터를 한눈에 보려고 맹모인사이트를 조립했으며, 실전 영어 회화를 정리하려고 칠구영어를 만들었습니다. 내가 진짜 쓰려고 만든 도구는 반드시 같은 고민을 가진 타인의 지갑도 연다는 사실을 발견했습니다.',
    metrics: ['4개 라이브 웹 프로덕트 독자 구축', '월 서버·AI 통합 유지비 단 $42', '비개발자 친화적 AI 바이브 코딩 공정 확립'],
    icon: Blocks,
    accentClass: 'border-emerald-500/40 text-emerald-300',
  },
  {
    year: 'PHASE 03 · LEGO CLASSIC (스레드 500만 뷰 & 메타 광고 수익화)',
    stageBadge: '🔵 CLASSIC STAGE (주력 엔진 #1)',
    title: '20만 뷰 결제 4건의 참사를 넘어, 500만 뷰 & CVR 8.6% 수익화 공식을 완성하다',
    subtitle: '오가닉 바이럴(Threads)과 유료 퍼포먼스 마케팅(Meta Certified)의 결합',
    description:
      '초기엔 스레드 20만 뷰가 터져도 결제가 4건밖에 안 나오는 뼈아픈 실패를 겪었습니다. 이후 2개 계정을 동시에 운영하며 500만 뷰 이상의 터진 글 구조를 역공학으로 DB화했고, Meta 공식 인증(Media Planning Professional) 자격을 취득하며 스레드 카피와 메타 광고·랜딩페이지를 1:1로 동기화해 전환율 8.6%라는 고마진 파이프라인을 구축했습니다.',
    metrics: ['2개 스레드 계정 누적 500만+ 뷰 실증', 'Meta Certified Media Planning 공식 인증', '소액 메타 광고 ➔ 랜딩 결제 전환율 8.6%'],
    icon: Flame,
    accentClass: 'border-blue-500/50 text-blue-300',
  },
  {
    year: 'PHASE 04 · LEGO TECHNIC (1:1 의사결정 & 빌더스 클럽)',
    stageBadge: '🟡 TECHNIC STAGE (주력 엔진 #2)',
    title: '과거의 나처럼 밤잠 설치는 직장인·예비 빌더를 위한 1:1 나침반',
    subtitle: '모듈형 수익화 브릭 전수 & 1:1 커리어·빌더 의사결정 컨설팅',
    description:
      '이제 제가 직접 부딪히며 만든 듀플로·클래식·테크닉 블록을 하나씩 나누어 드립니다. 특히 본격적인 커뮤니티형 멤버십(aizaler Builders Club)을 열기 전, 약간의 재능기부와 자아실현의 마음으로 퇴사·이직·사이드 프로젝트 수익화 사이에서 고민하는 분들과 1:1로 마주 앉아 90일 실행 로드맵을 함께 설계하고 있습니다.',
    metrics: ['모듈형 브릭 플레이북 7종 오픈', '매월 5명 한정 1:1 커리어 & 빌더 컨설팅', 'aizaler Builders Club 창립 멤버 준비 중'],
    icon: Compass,
    accentClass: 'border-amber-400/50 text-amber-300',
  },
];

export default function FounderNarrativeTimeline() {
  return (
    <div className="py-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="px-3.5 py-1.5 bg-amber-400/10 text-amber-300 border border-amber-400/30 rounded-full text-xs font-mono font-bold tracking-wider uppercase mb-4 inline-block">
            FOUNDER CHRONICLES · DUPLO TO TECHNIC
          </span>
          <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight leading-tight">
            안정적인 궤도를 벗어나,
            <br />
            내 손으로 수익화 블록을 조립하기까지
          </h2>
        </div>

        <div className="relative border-l-2 border-white/15 ml-4 md:ml-8 pl-6 md:pl-10 space-y-10">
          {TIMELINE_DATA.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="relative group">
                {/* Timeline Node Icon */}
                <div className="absolute -left-[41px] md:-left-[57px] top-1 w-9 h-9 rounded-xl bg-[#0B101E] border-2 border-amber-400/60 flex items-center justify-center text-amber-400 shadow-lg">
                  <Icon className="w-4 h-4" />
                </div>

                {/* Card Content */}
                <div className="technic-card p-6 md:p-8 rounded-3xl border border-white/10 hover:border-amber-400/40 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-bold text-amber-400">{item.year}</span>
                    <span
                      className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-white/5 border ${item.accentClass}`}
                    >
                      {item.stageBadge}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-black text-white mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm font-semibold text-slate-400 mb-4">{item.subtitle}</p>
                  <p className="text-xs md:text-sm text-slate-200 leading-relaxed mb-6">{item.description}</p>

                  {/* Key Metrics */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                    {item.metrics.map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        className="inline-flex items-center space-x-1.5 bg-white/[0.04] px-3 py-1.5 rounded-xl border border-white/10 text-xs font-bold text-slate-200"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
