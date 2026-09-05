import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: '개인정보처리방침 (Privacy Policy) | AI잘러',
  description: 'AI잘러(aizaler.kr)의 개인정보 보호 및 구글 애드센스(Google AdSense) 쿠키 정책 안내.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10 font-sans text-zinc-800">
      <header className="space-y-3 border-b border-zinc-200 pb-6">
        <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Privacy Policy</span>
        <h1 className="text-3xl font-extrabold text-zinc-900 tracking-tight">개인정보처리방침</h1>
        <p className="text-xs text-zinc-500 font-mono">시행일자: 2026년 9월 5일</p>
      </header>

      <section className="space-y-3 text-sm leading-relaxed text-zinc-700">
        <p>
          AI잘러(aizaler.kr, 이하 &quot;당사&quot;)는 정보주체의 자유와 권리 보호를 위해 「개인정보 보호법」 및 관계 법령이 정한 바를 준수하며, 
          이용자의 개인정보를 안전하게 처리하고 있습니다.
        </p>
      </section>

      {/* 1. 수집하는 개인정보 항목 */}
      <section className="space-y-3">
        <h2 className="text-lg font-bold text-zinc-900">1. 수집하는 개인정보 항목 및 수집 방법</h2>
        <div className="text-xs sm:text-sm text-zinc-700 space-y-2 leading-relaxed">
          <p>당사는 서비스 제공 및 뉴스레터/부트캠프 알림 신청 시 다음 항목을 수집합니다:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>필수 항목:</strong> 이메일 주소, 이름(신청 시)</li>
            <li><strong>자동 생성 항목:</strong> IP 주소, 쿠키(Cookie), 서비스 이용 기록, 접속 로그, 기기 브라우저 정보</li>
          </ul>
        </div>
      </section>

      {/* 2. 구글 애드센스 및 제3자 광고 쿠키 정책 (AdSense 필수 조항) */}
      <section className="space-y-3 p-6 rounded-xl bg-zinc-50 border border-zinc-200">
        <h2 className="text-lg font-bold text-zinc-900">2. 구글 애드센스 및 제3자 광고 사업자 쿠키(Cookie) 고지</h2>
        <div className="text-xs sm:text-sm text-zinc-700 space-y-2 leading-relaxed">
          <p>
            당사는 사이트 운영 및 유지 관리를 위해 Google AdSense 등 제3자 광고 서비스를 이용하고 있습니다.
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              Google을 포함한 타사 공급업체는 사용자의 이전 웹사이트 방문 기록을 기반으로 맞춤형 광고를 게재하기 위해 <strong>쿠키(Cookie)</strong>를 사용합니다.
            </li>
            <li>
              Google의 광고 쿠키를 통해 Google 및 파트너는 인터넷의 다른 사이트 방문을 기반으로 사용자에게 적절한 광고를 제공할 수 있습니다.
            </li>
            <li>
              사용자는 <strong><a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-brand-600 underline font-semibold">Google 광고 설정(Google Ad Settings)</a></strong>을 방문하여 개인 맞춤 광고를 언제든지 선택 해제(Opt-out)할 수 있습니다.
            </li>
            <li>
              또한, <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-brand-600 underline">aboutads.info</a>를 방문하여 제3자 공급업체의 맞춤 광고 쿠키 사용을 전반적으로 차단하실 수 있습니다.
            </li>
          </ul>
        </div>
      </section>

      {/* 3. 구글 애널리틱스 */}
      <section className="space-y-3">
        <h2 className="text-lg font-bold text-zinc-900">3. 웹로그 분석 도구(Google Analytics) 사용 안내</h2>
        <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
          당사는 웹 트래픽 및 독자의 관심 분야를 파악하여 콘텐츠 품질을 향상하기 위해 Google Analytics(GA4)를 사용합니다. 
          GA4가 수집하는 데이터는 식별 불가능한 익명화 처리된 통계 데이터이며, 개인을 특정할 수 있는 정보는 포함되지 않습니다.
        </p>
      </section>

      {/* 4. 개인정보의 보유 및 파기 */}
      <section className="space-y-3">
        <h2 className="text-lg font-bold text-zinc-900">4. 개인정보의 보유 및 파기 절차</h2>
        <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
          수집된 이메일 정보는 뉴스레터 및 사전 알림 목적 달성 시 혹은 정보주체의 수신 거부 요청 즉시 지체 없이 영구 파기됩니다.
        </p>
      </section>

      {/* 5. 개인정보 보호책임자 */}
      <section className="space-y-3 border-t border-zinc-200 pt-6">
        <h2 className="text-lg font-bold text-zinc-900">5. 개인정보 보호책임자 및 문의처</h2>
        <div className="text-xs sm:text-sm text-zinc-600 space-y-1">
          <p>담당 부서: AI잘러 개인정보 보호팀</p>
          <p>이메일: contact@aizaler.kr</p>
          <p>웹사이트: <Link href="/" className="text-brand-600 underline">https://aizaler.kr</Link></p>
        </div>
      </section>
    </div>
  );
}
