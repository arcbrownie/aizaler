'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Sparkle, 
  ArrowRight, 
  CheckCircle, 
  CaretDown, 
  DownloadSimple,
  Crown,
  LightbulbFilament,
  Target,
  RocketLaunch,
  Medal,
  Users,
  Check,
  X,
  PaperPlaneTilt
} from '@phosphor-icons/react';

import LegoStackSimulator from '@/components/LegoStackSimulator';
import BuilderConsultantChat from '@/components/BuilderConsultantChat';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedTrackId, setSelectedTrackId] = useState<'validate' | 'launch' | 'revenue'>('revenue');
  const [emailInput, setEmailInput] = useState('');
  const [isDownloaded, setIsDownloaded] = useState(false);

  // 1기 크루 참가 신청 모달 상태
  const [isCrewModalOpen, setIsCrewModalOpen] = useState(false);
  const [modalTrackId, setModalTrackId] = useState<'validate' | 'launch' | 'revenue' | 'vip'>('revenue');
  const [crewName, setCrewName] = useState('');
  const [crewContact, setCrewContact] = useState('');
  const [crewItemGoal, setCrewItemGoal] = useState('');
  const [crewSubmitted, setCrewSubmitted] = useState(false);

  // ── 3대 트랙별 명확한 목표 & 차등 가격 (군더더기 없는 압축 정의) ──
  const TRACKS = [
    {
      id: 'validate' as const,
      stepNum: 1,
      legoStep: 1,
      icon: LightbulbFilament,
      title: '기획 & BM 검증 트랙',
      sub: '아이디어의 시장 결핍을 증명하고 린 캔버스 완성',
      price: '29,000원',
      originalPrice: '59,000원',
      badge: 'TRACK 01',
      tag: 'FOUNDATION',
      color: '#2563eb',
      bgTag: 'bg-blue-50 text-blue-700 border-blue-200',
      milestones: [
        '1주차: 고객 결핍 발굴 & PPF(Product-Person Fit) 분석',
        '2주차: Aside 24h 자율 브라우저로 경쟁사 데이터 자동 수집',
        '3주차: 실제 돈 버는 모델이 담긴 BM 린 캔버스 1장 완성'
      ],
      deliverable: 'Aside 24h 시장 감시 봇 & 검증된 BM 린 캔버스 1장',
      guideTitle: '1인 창업 필수 용어집 & 고객 결핍 검증 린 캔버스 (PDF)',
      guideDesc: '내 아이디어가 실제 시장에서 돈이 되는지 검증하는 체크리스트입니다.'
    },
    {
      id: 'launch' as const,
      stepNum: 2,
      legoStep: 3,
      icon: RocketLaunch,
      title: '외주비 0원 런칭 트랙',
      sub: '코딩 문법 암기 없이 내 손으로 실제 상용 웹 배포',
      price: '59,000원',
      originalPrice: '119,000원',
      badge: 'TRACK 02',
      tag: 'LAUNCH',
      color: '#9333ea',
      bgTag: 'bg-purple-50 text-purple-700 border-purple-200',
      milestones: [
        '1주차: Cursor + Supabase 조립 & 실시간 DB 아키텍처 셋업',
        '2주차: Next.js 14 기반 반응형 웹서비스 라이브 배포',
        '3주차: PG 결제창 및 간편결제 모듈 100% 연동 완료'
      ],
      deliverable: '외주비 0원, 내 도메인으로 작동하는 실제 상용 결제 웹 1개 라이브 배포',
      guideTitle: '외주비 0원 1인 상용 웹 배포 아키텍처 로드맵 (PDF)',
      guideDesc: 'Cursor와 Supabase를 조립해 내 손으로 실제 결제창을 띄우는 가이드입니다.'
    },
    {
      id: 'revenue' as const,
      stepNum: 3,
      legoStep: 4,
      icon: Target,
      title: '메타 알고리즘 & 첫 결제 트랙',
      sub: '메타 추천 알고리즘의 이해와 첫 유료 결제 발생',
      price: '89,000원',
      originalPrice: '179,000원',
      badge: 'TRACK 03 ★인기',
      tag: 'CONVERSION',
      color: '#f04452',
      bgTag: 'bg-rose-50 text-rose-700 border-rose-200',
      isPopular: true,
      milestones: [
        '1주차: 메타 추천 알고리즘(Sentence-BERT)과 체류 시간 10배 훅 설계',
        '2주차: 광고/피드 첫 문장과 상세페이지 1:1 결속 퍼널 완성',
        '3주차: 첫 번째 실제 고객 유료 결제 알림 수신'
      ],
      deliverable: '스레드 500만 뷰 훅 구조도 & CVR 8.6%+ 고전환 결제 퍼널 & 첫 실제 결제',
      guideTitle: '‘훅 자료집’만 보셨나요? 왜 안 터지는지 그 구조를 알려드립니다 (PDF)',
      guideDesc: '시중 훅 100선 복붙 대신, 메타 추천 알고리즘의 체류 시간 10배 견인 구조 리포트입니다.'
    }
  ];

  const currentTrack = TRACKS.find((t) => t.id === selectedTrackId) || TRACKS[2];

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    setIsDownloaded(true);
  };

  const openCrewModal = (trackId: 'validate' | 'launch' | 'revenue' | 'vip') => {
    setModalTrackId(trackId);
    setCrewSubmitted(false);
    setIsCrewModalOpen(true);
  };

  const handleCrewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!crewName.trim() || !crewContact.trim()) return;
    setCrewSubmitted(true);
  };

  const proofMetrics = [
    { value: '5,000,000+', label: '누적 뷰수 실측 데이터', sub: '스레드 2개 계정 실측 DB' },
    { value: 'Meta Certified', label: '글로벌 공인 전문가', sub: 'Media Planning Professional' },
    { value: '월 $42', label: '운영 인프라 비용', sub: '4개 상용 서비스 실운영 기준' },
    { value: '8.6%', label: '실측 구매 전환율', sub: '메타 광고 1:1 결속 퍼널' }
  ];

  const faqs = [
    {
      q: '어릴 때 레고 좋아했던 사람을 위한 빌더 프로그램이란 무엇인가요?',
      a: '벽돌을 굽는 화학 공식을 몰라도 레고 블록만 있으면 거대한 성을 지을 수 있었습니다. 복잡한 코딩을 처음부터 외우지 않고, 검증된 기획·지능·퍼널·인프라 블록을 조립해 내 상용 프로덕트와 현금 흐름을 만드는 1인 빌더 성장 트랙입니다.'
    },
    {
      q: 'aizaler의 메타 알고리즘과 AI 지능은 시중 강의와 무엇이 다른가요?',
      a: '뜬구름 잡는 복붙 자료는 다루지 않습니다. Meta 공인 미디어 플래닝 전문가가 해부한 Sentence-BERT 텍스트 임베딩, 체류 시간(Dwell Time) 가중치 등 실제 알고리즘의 동작 구조를 역공학해 내 손으로 라이브 배포하고 첫 결제를 뚫는 실전만을 다룹니다.'
    },
    {
      q: '비개발자도 정말 3주 만에 상용 제품을 런칭할 수 있나요?',
      a: '네. Cursor, Supabase, Cloudflare, 간편결제 모듈을 조립형 아키텍처로 조합해 외주비 없이 혼자서 결제 웹서비스를 띄우고 운영하는 실전 파이프라인을 1:1 눈높이로 전수합니다.'
    }
  ];

  return (
    <div className="relative overflow-hidden space-y-16 sm:space-y-24 pt-6 sm:pt-10 pb-20">
      {/* ── Ambient Background Mesh ── */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[500px] bg-gradient-to-tr from-blue-400/15 via-purple-400/15 to-rose-400/10 blur-[130px] rounded-full pointer-events-none -z-10 animate-apple-glow" />

      {/* ══════════════════════════════════════════════════════
          [HERO] 임팩트 있는 메인 헤드라인 & 키노트 실측 지표
      ══════════════════════════════════════════════════════ */}
      <section className="toss-container text-center space-y-6 sm:space-y-8">
        <div className="space-y-3.5 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full apple-glass text-[#191f28] text-xs font-bold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#3182f6] animate-pulse" />
            <span>함께 성장하는 3주 빌더 크루 1기 모집</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-[#191f28] leading-[1.18] tracking-tight">
            조립하면, 3주 만에<br className="hidden sm:inline" /> 내 제품이 뜹니다.
          </h1>

          <p className="text-base sm:text-lg text-[#4e5968] font-medium leading-relaxed max-w-xl mx-auto">
            외로운 강의 공부는 끝났습니다. 목표를 정하면,<br className="hidden sm:inline" />
            <span className="text-[#191f28] font-bold">동료들과 함께 만들고 첫 유료 결제까지 완주합니다.</span>
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#step-1"
              className="toss-button-primary px-6 py-3.5 text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-sm active:scale-95"
            >
              <span>목표 트랙 선택하기 ↓</span>
            </a>
            <a
              href="#lab"
              className="px-5 py-3.5 rounded-2xl bg-white text-[#191f28] text-xs sm:text-sm font-bold border border-black/[0.08] hover:bg-gray-50 flex items-center gap-1.5 shadow-xs"
            >
              <span>3D 레고 랩 체험</span>
            </a>
          </div>
        </div>

        {/* Apple Keynote Stat Strip */}
        <div className="apple-glass rounded-3xl p-5 sm:p-7 max-w-4xl mx-auto border border-white/80 shadow-xs">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-black/[0.06]">
            {proofMetrics.map((stat, idx) => (
              <div key={idx} className={`pt-3 sm:pt-0 ${idx > 0 ? 'sm:pl-4 lg:pl-6' : ''} text-center sm:text-left space-y-0.5`}>
                <div className="text-2xl sm:text-3xl font-black text-[#191f28] tracking-tight tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-[#191f28]">{stat.label}</div>
                <div className="text-[10px] text-[#8b95a1]">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          [STEP 1] 나의 목표와 트랙을 1-탭으로 선택
      ══════════════════════════════════════════════════════ */}
      <section id="step-1" className="toss-container scroll-mt-20 space-y-6 max-w-4xl mx-auto">
        <div className="text-center space-y-1.5">
          <div className="text-xs font-mono font-black text-[#3182f6] uppercase tracking-wider">
            STEP 01. GOAL & TRACK
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#191f28] tracking-tight">
            이번 3주, 당신이 달성할 목표는?
          </h2>
          <p className="text-xs sm:text-sm text-[#4e5968]">
            트랙을 탭하면 맞춤 3주 액션 플랜과 3D 레고 블록이 활성화됩니다.
          </p>
        </div>

        {/* 3대 트랙 선택 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-left">
          {TRACKS.map((t) => {
            const isSelected = selectedTrackId === t.id;
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setSelectedTrackId(t.id)}
                className={`p-5 rounded-3xl transition-all border flex flex-col justify-between gap-4 text-left active:scale-[0.98] ${
                  isSelected
                    ? 'bg-[#191f28] text-white border-[#191f28] shadow-xl -translate-y-1 ring-2 ring-[#3182f6]/60'
                    : 'apple-glass hover:bg-white text-[#4e5968] border-white/80 hover:border-black/15 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`text-[10px] font-mono font-black tracking-wider ${isSelected ? 'text-gray-400' : 'text-[#8b95a1]'}`}>
                    {t.badge}
                  </span>
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center text-sm"
                    style={{
                      backgroundColor: isSelected ? 'rgba(255,255,255,0.15)' : `${t.color}15`,
                      color: isSelected ? '#ffffff' : t.color
                    }}
                  >
                    <Icon size={18} weight="bold" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className={`text-base font-black leading-snug ${isSelected ? 'text-white' : 'text-[#191f28]'}`}>
                    {t.title}
                  </h3>
                  <p className={`text-xs leading-relaxed ${isSelected ? 'text-gray-300' : 'text-[#4e5968]'}`}>
                    {t.sub}
                  </p>
                </div>

                {/* 가격 표시 */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 line-through mr-1">{t.originalPrice}</span>
                    <span className={`text-sm sm:text-base font-black ${isSelected ? 'text-amber-300' : 'text-[#191f28]'}`}>
                      {t.price}
                    </span>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-white/15 text-white' : 'bg-rose-50 text-[#f04452]'
                  }`}>
                    1기 얼리버드
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          [STEP 2] 선택된 목표의 3주 완주 여정 + 완주 트로피
      ══════════════════════════════════════════════════════ */}
      <section id="step-2" className="toss-container scroll-mt-20 space-y-6 max-w-4xl mx-auto">
        <div className="apple-glass rounded-3xl p-6 sm:p-8 border border-white/90 shadow-sm space-y-6 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-black/[0.05] pb-4">
            <div>
              <div className="text-xs font-mono font-bold text-[#3182f6]">STEP 02. 3-WEEK JOURNEY</div>
              <h3 className="text-lg sm:text-xl font-black text-[#191f28]">
                [{currentTrack.title}] 3주간 완성하는 블록
              </h3>
            </div>
            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border self-start sm:self-auto ${currentTrack.bgTag}`}>
              참가비 {currentTrack.price}
            </span>
          </div>

          {/* 주차별 마일스톤 3단계 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {currentTrack.milestones.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white/80 border border-black/[0.05] space-y-1">
                <div className="text-[10px] font-mono font-black text-[#3182f6]">
                  WEEK 0{idx + 1}
                </div>
                <div className="text-xs font-bold text-[#191f28] leading-snug">
                  {item.split(': ')[1] || item}
                </div>
              </div>
            ))}
          </div>

          {/* 최종 결과물 강조 바 */}
          <div className="p-4 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-0.5">
              <div className="text-[10px] font-bold text-amber-300">🎯 3주 완주 후 내 손에 쥐어지는 결과물:</div>
              <div className="text-xs sm:text-sm font-black text-white">{currentTrack.deliverable}</div>
            </div>
            <span className="text-[11px] font-mono text-emerald-400 shrink-0">✓ 100% 라이브 배포 보장</span>
          </div>

          {/* 완주 트로피 미니 카드 */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-300/40 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white text-[#191f28] flex items-center justify-center text-xl shadow-xs shrink-0 ring-2 ring-amber-400/30">
              👑
            </div>
            <div className="space-y-0.5 text-xs">
              <div className="font-black text-[#191f28]">3주 완주 크루 특권: 실물 ‘화이트 서밋 크라운 브릭’ 수여</div>
              <div className="text-[#4e5968] text-[11px]">책상 위에 당당히 올려둘 수 있는 실물 세라믹 트로피와 시리얼 뱃지를 드립니다.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          [STEP 3] 지금 바로 시작하기: 크루 신청 or 무료 가이드
      ══════════════════════════════════════════════════════ */}
      <section id="step-3" className="toss-container scroll-mt-20 max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-1.5">
          <div className="text-xs font-mono font-black text-[#3182f6] uppercase tracking-wider">
            STEP 03. TAKE ACTION
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#191f28] tracking-tight">
            지금 시작하는 두 가지 방법
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          {/* 옵션 A: 1기 크루 즉시 참가 */}
          <div className="apple-glass rounded-3xl p-6 border border-[#3182f6]/40 shadow-sm flex flex-col justify-between space-y-5 bg-gradient-to-br from-white to-blue-50/40">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-[#3182f6] text-[10px] font-black">
                <Users size={12} weight="fill" />
                <span>옵션 1 · 함께 완주하기</span>
              </div>
              <h3 className="text-lg font-black text-[#191f28]">
                1기 크루 참가 신청 ({currentTrack.price})
              </h3>
              <p className="text-xs text-[#4e5968] leading-relaxed">
                3주간 매주 블록을 인증하고, 서로의 첫 고객이 되어주며 완주하는 소수 정예(15명 한정) 크루입니다.
              </p>
            </div>

            <button
              type="button"
              onClick={() => openCrewModal(currentTrack.id)}
              className="w-full py-3.5 rounded-xl bg-[#3182f6] hover:bg-[#1b64da] text-white text-xs font-black transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
            >
              <span>{currentTrack.title} 크루 신청 ({currentTrack.price})</span>
              <ArrowRight size={13} weight="bold" />
            </button>
          </div>

          {/* 옵션 B: 가이드북 무료 먼저 받기 */}
          <div className="apple-glass rounded-3xl p-6 border border-white/80 shadow-sm flex flex-col justify-between space-y-5">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gray-100 text-[#4e5968] text-[10px] font-black">
                <DownloadSimple size={12} weight="bold" />
                <span>옵션 2 · 무료 스타터 킷</span>
              </div>
              <h3 className="text-lg font-black text-[#191f28]">
                {currentTrack.id === 'revenue'
                  ? '‘훅 자료집’만 보셨나요? 구조 해부서 (PDF)'
                  : `${currentTrack.title} 가이드북 (PDF)`}
              </h3>
              <p className="text-xs text-[#4e5968] leading-relaxed">
                {currentTrack.guideDesc}
              </p>
            </div>

            {isDownloaded ? (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center justify-center gap-1.5">
                <CheckCircle size={16} weight="fill" className="text-emerald-600" />
                <span>가이드북이 이메일로 발송되었습니다!</span>
              </div>
            ) : (
              <form onSubmit={handleDownload} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="이메일 주소 입력"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="px-3 py-2.5 rounded-xl bg-white border border-black/[0.1] text-xs text-[#191f28] placeholder-gray-400 outline-none focus:border-[#3182f6] flex-1"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-[#191f28] hover:bg-black text-white text-xs font-bold shrink-0 transition-all"
                >
                  무료 받기
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 👑 VIP 1:1 세션 미니 배너 */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#050A18] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5">
            <Crown size={18} weight="fill" className="text-amber-400 shrink-0" />
            <div>
              <span className="font-bold text-amber-300 mr-2">VIP 1:1 세션:</span>
              <span className="text-gray-300">파운더와 50분간 90일 실행 Action Blueprint를 처방받고 싶다면</span>
            </div>
          </div>
          <Link
            href="/career"
            className="px-4 py-2 rounded-xl bg-white text-[#050A18] hover:bg-gray-100 font-bold shrink-0 text-center"
          >
            VIP 세션 보기 →
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          [인터랙티브 랩] 3D 레고 시뮬레이터 & AI 아키텍트 상담
      ══════════════════════════════════════════════════════ */}
      <section id="lab" className="toss-container scroll-mt-20 space-y-6 max-w-4xl mx-auto">
        <div className="text-center space-y-1">
          <span className="text-xs font-bold text-[#3182f6] uppercase tracking-wider">
            INTERACTIVE BUILDER LAB
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-[#191f28]">
            3D 공간에서 직접 조립해 보세요
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-6">
            <LegoStackSimulator externalStep={currentTrack.legoStep} />
          </div>
          <div className="lg:col-span-6">
            <BuilderConsultantChat onStepDiagnosed={() => {}} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          [FAQ] 자주 묻는 질문
      ══════════════════════════════════════════════════════ */}
      <section id="faq" className="toss-container scroll-mt-20 space-y-4 max-w-2xl mx-auto">
        <div className="text-center space-y-1">
          <span className="text-xs font-bold text-[#3182f6]">FAQ</span>
          <h2 className="text-lg sm:text-2xl font-black text-[#191f28]">자주 묻는 질문</h2>
        </div>

        <div className="space-y-2.5">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="apple-glass rounded-2xl overflow-hidden border border-black/[0.06]">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left transition-colors hover:bg-white/50"
                >
                  <div className="flex items-start gap-3 pr-2">
                    <span className="text-xs font-black text-[#3182f6]">Q.</span>
                    <span className="font-bold text-xs sm:text-sm text-[#191f28] leading-snug">{faq.q}</span>
                  </div>
                  <CaretDown
                    size={15}
                    weight="bold"
                    className={`transition-transform duration-200 shrink-0 text-[#8b95a1] ${isOpen ? 'rotate-180 text-[#3182f6]' : ''}`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0">
                    <p className="pt-3 border-t border-black/[0.05] text-xs sm:text-sm text-[#4e5968] leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="pt-2 text-center">
          <Link href="/about" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3182f6] hover:underline">
            aizaler 스튜디오 철학 & 파운더 소개 보기 <ArrowRight size={13} weight="bold" />
          </Link>
        </div>
      </section>

      {/* ── 1기 크루 참가 신청 모달 ── */}
      {isCrewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="apple-glass rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-white/80 shadow-2xl relative space-y-5 bg-white">
            <button
              onClick={() => setIsCrewModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-[#191f28] transition-colors"
            >
              <X size={18} weight="bold" />
            </button>

            <div className="space-y-1.5 text-left">
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 text-[11px] font-bold">
                <Users size={13} weight="fill" className="text-amber-600" />
                <span>3주 빌더 스프린트 1기 크루</span>
              </div>
              <h3 className="text-xl font-black text-[#191f28]">
                {TRACKS.find((t) => t.id === modalTrackId)?.title || '1기 크루'} 참가 신청
              </h3>
              <p className="text-xs text-[#4e5968]">
                함께 3주간 블록을 조립하고 완주할 소수 정예 크루에 합류하세요.
              </p>
            </div>

            {crewSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <CheckCircle size={36} weight="fill" className="text-emerald-600 mx-auto" />
                <div className="text-base font-black text-emerald-900">
                  1기 크루 신청이 완료되었습니다!
                </div>
                <p className="text-xs text-emerald-700 leading-relaxed">
                  24시간 이내에 입력해 주신 연락처/이메일로 온보딩 가이드와 비공개 크루 채널 초대 링크를 전송해 드립니다.
                </p>
                <button
                  onClick={() => setIsCrewModalOpen(false)}
                  className="mt-3 px-5 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold"
                >
                  확인 완료
                </button>
              </div>
            ) : (
              <form onSubmit={handleCrewSubmit} className="space-y-3.5 text-left">
                <div className="p-3.5 rounded-2xl bg-gray-50 border border-black/[0.05] flex items-center justify-between text-xs">
                  <span className="font-bold text-[#191f28]">신청 트랙:</span>
                  <span className="font-black text-[#3182f6]">
                    {TRACKS.find((t) => t.id === modalTrackId)?.title} ({TRACKS.find((t) => t.id === modalTrackId)?.price})
                  </span>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#191f28]">성함 / 닉네임</label>
                  <input
                    type="text"
                    required
                    placeholder="홍길동"
                    value={crewName}
                    onChange={(e) => setCrewName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-black/[0.1] text-xs text-[#191f28] placeholder-gray-400 outline-none focus:border-[#3182f6]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#191f28]">이메일 주소 (온보딩 및 채널 초대장 수신)</label>
                  <input
                    type="email"
                    required
                    placeholder="example@gmail.com"
                    value={crewContact}
                    onChange={(e) => setCrewContact(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-black/[0.1] text-xs text-[#191f28] placeholder-gray-400 outline-none focus:border-[#3182f6]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#191f28]">이번 3주 동안 만들고 싶은 아이템 / 제품 한 줄 소개</label>
                  <input
                    type="text"
                    placeholder="예: 비개발자용 업무 자동화 템플릿 웹서비스"
                    value={crewItemGoal}
                    onChange={(e) => setCrewItemGoal(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-black/[0.1] text-xs text-[#191f28] placeholder-gray-400 outline-none focus:border-[#3182f6]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#3182f6] hover:bg-[#1b64da] text-white text-xs font-black transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95 mt-2"
                >
                  <PaperPlaneTilt size={15} weight="bold" />
                  <span>1기 크루 참가 신청 완료하기</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
