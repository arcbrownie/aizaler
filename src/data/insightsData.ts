export interface InsightArticle {
  slug: string;
  title: string;
  summary: string;
  category: '도구 비교 & 수익화' | '트러블슈팅' | 'AI & 바이브코딩' | '비즈니스 & 기획';
  tags: string[];
  readTime: string;
  date: string;
  isFeatured?: boolean;
  sections: {
    symptom: string; // 1. 증상 (What happened)
    cause: string;   // 2. 원인 (Why)
    solutionCode: string; // 3. 해결 코드 및 방법
    solutionExplanation: string;
    takeaway: string[]; // 4. 3줄 요약
  };
  affiliateBanner?: {
    toolName: string;
    headline: string;
    description: string;
    buttonText: string;
    linkUrl: string;
  };
}

export const INSIGHTS_ARTICLES: InsightArticle[] = [
  {
    slug: 'typecast-vs-elevenlabs-voice-ai-guide',
    title: '타입캐스트 vs ElevenLabs 실무 비교: 외주 성우비 30만원 아낀 AI 음성 더빙 & 자막 실전 워크플로우',
    summary: '유튜브 쇼츠, 릴스, 사내 교육 영상을 만들 때 외주 성우비 대신 타입캐스트(TTS)와 STT 자동 자막 도구를 결합해 3분 만에 영상을 완성하는 실전 파이프라인 정리.',
    category: '도구 비교 & 수익화',
    tags: ['타입캐스트', '음성AI', 'TTS', 'STT', '제휴마케팅'],
    readTime: '4분',
    date: '2026. 9. 4.',
    isFeatured: true,
    sections: {
      symptom: `유튜브 쇼츠나 강의 영상을 제작할 때 성우를 섭외하면 대본 한 장당 최소 15~30만 원이 깨지고, 수정 요청 한 번 할 때마다 2~3일씩 지연되는 병목 현상이 발생합니다. 반면 무료 기계음 TTS를 쓰면 로봇 같은 어색한 억양 때문에 시청자가 3초 만에 이탈합니다.`,
      cause: `일반적인 무료 TTS는 한국어의 미묘한 높낮이, 띄어쓰기 호흡, 감정 조절이 불가능합니다. 하지만 최신 한국어 특화 AI 음성 합성(타입캐스트)은 캐릭터별 감정(분노, 기쁨, 속삭임)과 0.1초 단위 호흡 쉼표를 제어할 수 있어 사람이 직접 녹음한 것과 구분이 안 될 정도의 퀄리티를 냅니다.`,
      solutionCode: `// 💡 에잘러의 3분 AI 음성 + 자막 완성 워크플로우:
1. 대본 작성: Claude / ChatGPT로 쇼츠 40초 대본 작성 (호흡 조절용 쉼표 삽입)
2. 음성 생성 (TTS): 타입캐스트(Typecast)에서 분위기에 맞는 성우 선택 (예: 차분한 지식채널톤 or 하이텐션 예능톤)
3. 속도/감정 튜닝: 기본 속도 1.1x, 쉼표 0.2초 설정 후 MP3 다운로드
4. 자막 추출 (STT): Vrew나 Whisper에 MP3를 던져서 1초 만에 싱크 맞춘 자막 자동 생성`,
      solutionExplanation: `이 파이프라인을 구축하면 대본만 던지면 3분 만에 오디오와 싱크 자막이 한 번에 완성됩니다. 외주 비용 0원에 당일 즉시 무제한 수정이 가능해집니다.`,
      takeaway: [
        '단순 설명보다 실제 쇼츠/강의 제작 시간과 외주 비용을 얼마나 아꼈는지가 핵심',
        '한국어 자연스러움과 감정 표현은 타입캐스트가 압도적 1티어',
        'MP3 추출 후 STT(Whisper/Vrew)와 결합하면 자막 타이핑 작업까지 완전히 자동화됨',
      ],
    },
    affiliateBanner: {
      toolName: 'Typecast (타입캐스트)',
      headline: '외주 성우 없이 400가지 고품질 AI 보이스 바로 쓰기',
      description: '에잘러 전용 링크로 가입하고 첫 영상 제작 시 무료 크레딧과 실무 할인 혜택을 받아보세요.',
      buttonText: '타입캐스트 무료 체험하기 →',
      linkUrl: 'https://typecast.ai',
    },
  },
  {
    slug: 'nextjs-15-vercel-force-dynamic-cache-trap',
    title: 'Next.js 15 App Router Vercel 배포 시 `force-dynamic` 에러와 캐시 지옥 탈출기',
    summary: '로컬에서는 멀쩡하던 API 라우트가 Vercel 배포만 하면 빌드 에러를 내거나, 코드를 고쳐서 푸시했는데 모바일 방문자에게 이전 화면이 그대로 뜨는 현상 해결법.',
    category: '트러블슈팅',
    tags: ['Nextjs', 'Vercel', 'AppRouter', '캐시버스팅'],
    readTime: '3분',
    date: '2026. 9. 3.',
    isFeatured: true,
    sections: {
      symptom: `Next.js 15 App Router 환경에서 API 설정 코드를 깔끔하게 정리하겠다고 다른 파일에서 export { dynamic } from ... 로 재내보내기(re-export)를 시도했더니, Vercel 빌드 시 "Export dynamic is not allowed" 에러가 터지며 배포가 전면 중단되는 현상.`,
      cause: `Next.js App Router의 Route Segment Config(dynamic, runtime, revalidate 등)는 빌드 타임에 Next.js 컴파일러가 파일 단위 정적 분석(AST)으로 직접 읽어 들입니다. 따라서 외부 모듈에서 변수로 re-export 하는 것을 문법적으로 엄격히 금지합니다.`,
      solutionCode: `// ❌ 틀린 방식 (공통 config 파일에서 import하여 re-export)
// src/app/api/example/route.ts
export { dynamic } from '@/lib/api-config'; // 🚨 Vercel 빌드 에러 발생!

// ✅ 올바른 해결책 (각 route.ts 파일 상단에 리터럴로 직접 선언)
// src/app/api/example/route.ts
export const dynamic = 'force-dynamic'; // ✅ 각 파일 맨 위에 직접 작성
export const revalidate = 0;`,
      solutionExplanation: `세그먼트 설정값은 반드시 각 route.ts 및 page.tsx 파일 맨 위에 리터럴 문자열로 직접 선언해야 합니다. 배포 후 모바일 캐시가 안 풀릴 때는 next.config.mjs에 캐시 컨트롤 헤더를 설정하거나 주소 뒤에 버전 파라미터(?v=2)를 붙여 강제 무효화합니다.`,
      takeaway: [
        'App Router 세그먼트 설정(dynamic, runtime)은 절대 re-export 하지 말고 파일마다 직접 선언할 것',
        'Vercel 배포 전 로컬에서 npm run build를 먼저 돌려보면 99% 사전에 잡아낼 수 있음',
        '모바일 캐시 고집 문제는 ?v=버전 캐시 버스팅 쿼리스트링으로 한 방에 해결',
      ],
    },
  },
  {
    slug: 'safari-ios-3d-flip-clock-animation-fix',
    title: '아이폰 사파리(iOS) 3D 플립 애니메이션 깨짐 버그와 하드웨어 가속 1분 해결법',
    summary: '데스크톱 크롬에서는 멋지게 뒤집히는 3D 카운트다운 숫자가 아이폰 사파리에서만 하얗게 사라지거나 버벅대는 고질적인 Webkit 렌더링 버그 해결 꿀팁.',
    category: '트러블슈팅',
    tags: ['사파리버그', 'CSS3D', '하드웨어가속', '모바일UX'],
    readTime: '3분',
    date: '2026. 9. 2.',
    isFeatured: true,
    sections: {
      symptom: `파티나 이벤트 랜딩페이지에 남은 시간을 시각화하는 3D 플립 카운트다운을 넣었는데, PC 크롬에서는 부드럽게 넘어가던 숫자가 아이폰(Safari/카카오톡 인앱 브라우저)으로 접속하면 숫자가 뒤로 숨어 투명해지거나 깜빡거리는 현상.`,
      cause: `모바일 사파리의 Webkit 렌더링 엔진은 3D 변형(transform) 요소에 대해 GPU 하드웨어 가속이 명시적으로 트리거되지 않으면, z-축 레이어 깊이(preserve-3d)를 평면으로 압축해 버려 뒷면 요소가 앞면을 가리거나 사라지는 버그가 있습니다.`,
      solutionCode: `/* ❌ 버그가 발생하는 기본 CSS */
.flip-card {
  transform: rotateX(180deg);
}

/* ✅ 사파리 3D 버그를 완벽히 해결하는 하드웨어 가속 강제 주입 */
.flip-card {
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  /* 💡 그래픽카드(GPU)를 강제로 깨우는 꼼수 */
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  will-change: transform;
}`,
      solutionExplanation: `아이폰 사파리에서는 -webkit- 프리픽스와 함께 transform: translateZ(0)을 주어 레이어를 독립 GPU 텍스처로 승격시켜야 3D z-index가 정확히 유지되고 부드러운 60fps 애니메이션이 보장됩니다.`,
      takeaway: [
        '아이폰 사파리는 3D 애니메이션 시 GPU 가속을 강제 트리거해야 깨지지 않음',
        'transform-style과 backface-visibility에 반드시 -webkit- 벤더 프리픽스 병기',
        '모바일 카카오톡 인앱 브라우저 테스트는 개발 필수 체크리스트',
      ],
    },
  },
  {
    slug: 'prevent-cherry-picker-llm-api-rate-limit',
    title: '무료 사주/운세 체리피커 유저 30연타 막고 LLM API 비용 방어한 레이트 리밋 노하우',
    summary: '무료 AI 분석 서비스를 오픈했더니 한 유저가 이름만 바꿔가며 36번씩 연타 분석하여 유료 토큰 비용만 털어먹는 체리피킹을 브라우저 핑거프린트와 레이트 리밋으로 방어한 실전기.',
    category: '비즈니스 & 기획',
    tags: ['LLM비용절감', '레이트리밋', '어뷰징방어', 'Supabase'],
    readTime: '4분',
    date: '2026. 8. 30.',
    sections: {
      symptom: `명사도 사주/커리어 AI 분석 서비스를 운영하던 중, 결제는 단 1원도 하지 않으면서 이름과 생년월일만 살짝씩 바꿔가며 무료 1차 분석을 혼자서 36회 이상 연속으로 호출하여 내 오픈AI/클로드 API 비용만 갉아먹는 어뷰저 발견.`,
      cause: `무료 체험 단계에서 단순 이름 기반 중복 체크만 걸어두면, 악성 유저는 이름을 변경하거나 시크릿 창을 열어 무제한으로 고가의 LLM 모델을 무료로 소비합니다.`,
      solutionCode: `// 💡 에잘러의 3중 체리피커 방어 레이트 리밋 로직:
// 1. 브라우저 핑거프린트 + IP 해시로 사용자 식별값 생성
const clientIdentifier = hash(ip + userAgent + screenResolution);

// 2. 최근 24시간 내 동일 기기 분석 횟수 카운트
const { count } = await supabase
  .from('analysis_logs')
  .select('*', { count: 'exact' })
  .eq('client_id', clientIdentifier)
  .gte('created_at', last24Hours);

// 3. 한도 초과 시 친절한 유료 결제 전환 팝업(Cliff) 노출
if (count >= 3) {
  return res.status(429).json({
    error: '무료 분석 한도(1일 3회)를 초과했습니다. 전체 심층 리포트는 유료 정식 버전에서 무제한으로 이용하실 수 있습니다.',
    action: 'SHOW_PURCHASE_MODAL'
  });
}`,
      solutionExplanation: `무료 제공은 철저히 3회 미만으로 제한하고, 한도 도달 시 단순 에러가 아니라 '전체 정식 리포트 유료 결제 앵커'로 전환시키는 구조를 만들어 API 비용 손실을 0원으로 만들고 유료 결제 전환을 유도했습니다.`,
      takeaway: [
        'AI 서비스를 오픈할 때는 런칭 첫날부터 무조건 레이트 리밋(Rate Limit)을 걸어둘 것',
        '이름이나 이메일 외에 IP와 브라우저 특성값을 결합한 식별값 필수',
        '한도 초과 팝업은 비용 차단 장치인 동시에 최고의 유료 결제 전환 깔때기',
      ],
    },
  },
  {
    slug: 'claude-code-antigravity-vibe-coding-rules',
    title: '비개발자가 AI 에이전트로 웹 만들 때 환각 줄이고 코드 품질 지키는 3대 정본 룰셋',
    summary: 'Claude Code나 Antigravity 같은 AI 코딩 에이전트와 대화가 길어질수록 멀쩡하던 코드를 지우거나 엉뚱한 라이브러리를 설치하는 문제를 뿌리 뽑는 실전 룰 설정법.',
    category: 'AI & 바이브코딩',
    tags: ['바이브코딩', 'ClaudeCode', 'Antigravity', '프롬프트룰'],
    readTime: '4분',
    date: '2026. 8. 28.',
    sections: {
      symptom: `처음엔 찰떡같이 알아듣던 AI가 1~2시간 대화가 길어지면 앞에 설정했던 디자인 규칙을 까먹고, 사소한 오타 하나 고쳐달랬더니 500줄짜리 핵심 컴포넌트를 빈 껍데기로 덮어써서 전체 사이트가 하얗게 뻗어버리는 참사 발생.`,
      cause: `LLM의 컨텍스트 윈도우가 가득 차면 오래된 지시사항부터 망각(Catastrophic Forgetting)합니다. 또한 전체 파일 덮어쓰기 명령을 허용하면 부분 수정 중 코드가 누락될 확률이 기하급수적으로 올라갑니다.`,
      solutionCode: `// 💡 프로젝트 루트에 두는 필수 규칙 파일 (.clauderc 또는 AGENT_RULES.md)
1. 단일 블록 부분 수정 원칙:
   - 전체 파일 덮어쓰기 금지. 오직 수정이 필요한 10~20줄 블록만 replace_file_content로 수정할 것.

2. 수정 전 반드시 Git 커밋:
   - 기능 하나가 정상 동작할 때마다 git commit으로 스냅샷을 남기고 다음 작업으로 진행할 것.

3. 정본(Ground Truth) 고정:
   - UI 컬러 팔레트, 도메인 주소, 주요 데이터 스키마는 data/ 폴더의 단일 상수에 정의하고 다른 곳에 하드코딩하지 말 것.`,
      solutionExplanation: `이 3대 룰을 에이전트 설정이나 시스템 프롬프트에 단단히 박아두면, 긴 개발 과정에서도 코드가 유실되지 않고 비개발자도 안전하게 프로덕션 배포까지 도달할 수 있습니다.`,
      takeaway: [
        'AI한테 파일 전체를 다시 쓰게 시키지 말고, 바꿀 부분만 정확히 타겟팅 시킬 것',
        'Git 커밋은 게임의 세이브 포인트 — 1기능 1커밋이 멘탈을 지켜줌',
        '중요한 비즈니스 규칙은 대화창이 아니라 고정된 룰 파일에 기록해 둘 것',
      ],
    },
  },
];
