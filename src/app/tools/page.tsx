import React from 'react';
import Link from 'next/link';
import { Mic, Volume2, FileText, Check, ExternalLink, Sparkles, Zap, ShieldCheck } from 'lucide-react';

export default function ToolsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold border border-brand-200">
          <Mic className="w-3.5 h-3.5" />
          <span>음성 AI &amp; 제휴 도구 실무 비교</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight">
          외주비 30만원 아끼는 AI 음성(TTS) &amp; 자막(STT) 추천
        </h1>
        <p className="text-sm text-zinc-600 max-w-2xl leading-relaxed">
          어색한 기계음 읽기 말고, 사람이 직접 녹음한 듯한 감정과 호흡을 구현하는 검증된 실무 도구들을 비교해 드립니다.
        </p>
      </div>

      {/* Main Recommended Tool: Typecast Card */}
      <div className="clean-card p-8 sm:p-10 border-brand-200 bg-gradient-to-br from-white via-brand-50/20 to-white shadow-md space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-100 pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase px-2.5 py-0.5 rounded bg-brand-600 text-white">
                BEST PICK #1
              </span>
              <h2 className="text-2xl font-black text-zinc-900">타입캐스트 (Typecast)</h2>
            </div>
            <p className="text-xs text-zinc-500">한국어 자연스러움 &amp; 감정 조절 원탑 AI 성우 플랫폼</p>
          </div>

          <a
            href="https://typecast.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-brand-600 text-white text-xs font-bold hover:bg-brand-700 transition-colors shadow-sm shrink-0 text-center justify-center"
          >
            <span>타입캐스트 공식 바로가기 (제휴)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-zinc-600">
          <div className="space-y-1.5 p-4 rounded-xl bg-white border border-zinc-200/80 shadow-xs">
            <span className="font-bold text-zinc-900 block flex items-center gap-1">
              <Volume2 className="w-3.5 h-3.5 text-brand-600" />
              400개 이상의 캐릭터
            </span>
            <p className="leading-relaxed">
              뉴스 지식 채널톤, 예능 유튜브 하이텐션, 감성 나레이션 등 영상 분위기에 맞는 캐릭터 즉시 선택.
            </p>
          </div>

          <div className="space-y-1.5 p-4 rounded-xl bg-white border border-zinc-200/80 shadow-xs">
            <span className="font-bold text-zinc-900 block flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              0.1초 쉼표 &amp; 감정 튜닝
            </span>
            <p className="leading-relaxed">
              기계음 티를 벗겨내는 핵심인 쉼표 길이, 말하는 속도(1.1x), 슬픔/분노/기쁨 감정 강도 미세 조절.
            </p>
          </div>

          <div className="space-y-1.5 p-4 rounded-xl bg-white border border-zinc-200/80 shadow-xs">
            <span className="font-bold text-zinc-900 block flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              외주 비용 90% 절감
            </span>
            <p className="leading-relaxed">
              성우 외주 시 건당 15~30만 원 들던 비용을 월 구독료 몇만 원으로 무제한 대본 생성 및 실시간 수정.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-700 space-y-1 leading-relaxed">
          <span className="font-bold text-zinc-900 block">💡 에잘러 실전 조합 꿀팁 (TTS + STT):</span>
          <p>
            타입캐스트에서 생성한 MP3 파일을 <strong>Vrew</strong>나 <strong>OpenAI Whisper</strong>에 던지면, 
            텍스트 자막과 오디오 타임라인이 1초 만에 100% 싱크로 맞춰집니다. 영상 편집 시간이 2시간에서 15분으로 단축됩니다.
          </p>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-zinc-900">주요 AI 음성 도구 비교 요약표</h3>
        <div className="clean-card overflow-x-auto">
          <table className="w-full text-left text-xs text-zinc-600">
            <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-800 font-bold uppercase text-[11px]">
              <tr>
                <th className="py-3 px-4">도구명</th>
                <th className="py-3 px-4">유형</th>
                <th className="py-3 px-4">한국어 품질</th>
                <th className="py-3 px-4">추천 대상</th>
                <th className="py-3 px-4">비고</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 font-normal">
              <tr>
                <td className="py-3 px-4 font-bold text-zinc-900">타입캐스트 (Typecast)</td>
                <td className="py-3 px-4">TTS (음성 생성)</td>
                <td className="py-3 px-4 text-brand-600 font-bold">★★★★★ (최상)</td>
                <td className="py-3 px-4">유튜브 쇼츠, 강의, 스토리텔링</td>
                <td className="py-3 px-4 text-emerald-600 font-bold">제휴 혜택 가능</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-zinc-900">ElevenLabs</td>
                <td className="py-3 px-4">TTS / 보이스 클로닝</td>
                <td className="py-3 px-4">★★★★☆ (양호)</td>
                <td className="py-3 px-4">글로벌 영문 영상, 내 목소리 복제</td>
                <td className="py-3 px-4">영문 특화</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-zinc-900">OpenAI Whisper / Vrew</td>
                <td className="py-3 px-4">STT (자막 추출)</td>
                <td className="py-3 px-4 text-brand-600 font-bold">★★★★★ (최상)</td>
                <td className="py-3 px-4">자동 자막 싱크, 회의록 요약</td>
                <td className="py-3 px-4">무료/오픈소스</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
