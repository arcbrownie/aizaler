export interface Product {
  id: string;
  rank: number;
  badge: 'BEST' | 'STEADY' | 'HOT' | '선착순' | 'B2B' | 'NEW';
  category: '실전 챌린지' | '전자책 & 가이드' | '풀 소스코드' | '1:1 프라이빗' | '바이브코딩 키트' | '바이럴 에셋';
  title: string;
  tagline: string;
  description: string;
  originalPrice: number;
  discountRate: number;
  salePrice: number;
  monthlyPrice?: string;
  features: string[];
  target: string;
  highlightProof: string;
  accentColor: string;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    rank: 1,
    badge: 'BEST',
    category: '실전 챌린지',
    title: 'AI 솔로프리너 21일 실전 빌딩 챌린지',
    tagline: '바이브코딩과 AI 에이전트로 21일 만에 내 웹서비스/랜딩페이지 런칭하기',
    description: '코딩을 몰라도 괜찮습니다. 기획부터 UI 디자인, 클라우드 DB 연동, 배포, 그리고 첫 결제 유치까지. AI 에이전트를 실무 팀원처럼 지휘하여 21일 동안 나만의 실전 수익형 프로덕트를 실제로 세상에 띄우는 100% 실행형 부트캠프입니다.',
    originalPrice: 490000,
    discountRate: 60,
    salePrice: 196000,
    monthlyPrice: '월 32,600원 (6개월)',
    features: [
      '21일간 매일 주어지는 단계별 AI 빌딩 액션 미션',
      '기획 ➔ Claude / Cursor 바이브코딩 ➔ Neon DB 연동 실전 템플릿',
      'Next.js 14/15 + Tailwind CSS 상용 프로덕트 보일러플레이트 제공',
      '대표님 & 동료 빌더들과 함께하는 비공개 슬랙/디스코드 커뮤니티',
      '완주 시 100% 환급 or 1:1 프로덕트 아키텍처 피드백 1회'
    ],
    target: 'AI로 내 프로덕트를 직접 만들어 런칭해보고 싶은 직장인, 예비 1인 창업가, 인디해커',
    highlightProof: '비개발자 참여자 87%가 21일 이내 실제 라이브 도메인 배포 완료',
    accentColor: '#3b82f6',
  },
  {
    id: '2',
    rank: 2,
    badge: 'STEADY',
    category: '전자책 & 가이드',
    title: '챗GPT 구독료 2만 원으로 연봉 2배 올리는 커리어 레버리지 가이드',
    tagline: '단순 번역·요약에서 벗어나 내 본업의 가치를 10배로 증폭시키는 AI 워크플로우',
    description: '세상은 AI로 바뀐다는데 정작 월 2만 원 구독료 내고 메일 몇 줄 요약하고 닫으시나요? 공포 마케팅이 아닙니다. 도구가 부족한 게 아니라 ‘내 직무와 연결하는 관점’을 몰랐을 뿐입니다. 기획, 마케팅, 데이터 분석, 보고서 작성까지 실전 업무를 오케스트레이션하는 비법을 공개합니다.',
    originalPrice: 180000,
    discountRate: 45,
    salePrice: 99000,
    monthlyPrice: '일시불 (전자책+프롬프트 키트)',
    features: [
      '120페이지 분량의 직무별 AI 커리어 레버리지 실전 전자책 (PDF)',
      '실전에서 즉시 복사해 쓰는 고순도 시스템 프롬프트 50선',
      '비개발자를 위한 업무 자동화 파이프라인 다이어그램',
      'AI 시대 대체 불가능한 핵심 인재로 브랜딩하는 이직/승진 치트키'
    ],
    target: 'AI 소외감과 불안감을 느끼지만, 어디서부터 내 업무에 적용해야 할지 막막한 3~10년 차 직장인',
    highlightProof: '독자 평균 주당 업무 시간 7.5시간 단축 & 이직 성공 사례 다수',
    accentColor: '#10b981',
  },
  {
    id: '3',
    rank: 3,
    badge: 'HOT',
    category: '풀 소스코드',
    title: '20만 뷰 실측 메타 추천 알고리즘 분석 & 풀스택 AI 스타터 키트',
    tagline: '실제 프로덕트 4개를 돌리며 DB 로그로 밝혀낸 실전 소셜 그로스 & 서비스 소스코드',
    description: '20만 뷰가 터졌는데 왜 유료 결제는 4건뿐이었을까요? 메타 DLRM 추천 모델의 알고리즘 숙취(The Hangover)를 직접 겪고 극복하며 완성한 Two-Tower 진단 SQL 쿼리북과, 결제·인증·DB가 완비된 Next.js 상용 풀스택 소스코드를 영구 소장 형태로 제공합니다.',
    originalPrice: 2400000,
    discountRate: 38,
    salePrice: 1488000,
    monthlyPrice: '월 124,000원 (12개월)',
    features: [
      'Next.js 14/15 + Tailwind + Neon DB + Cloudflare 프로덕션 풀 소스코드',
      '메타 Two-Tower 오염 방지 및 First 9 순도 진단 PostgreSQL 쿼리북',
      '실제 운영 중인 4대 브랜드 소셜 그로스 블루프린트 전체 문서 (Markdown)',
      '포트원 결제 연동 및 카카오 알림톡/웹훅 자동화 모듈',
      '평생 코드 업데이트 & 상업적 라이선스 무제한 제공'
    ],
    target: '검증된 아키텍처로 시간을 6개월 이상 아끼고 즉시 서비스 사업을 시작하고 싶은 개발자/빌더',
    highlightProof: '실측 207,709뷰 데이터 및 실제 Neon DB 결제 테이블 조인 로그 기반',
    accentColor: '#8b5cf6',
  },
  {
    id: '4',
    rank: 4,
    badge: '선착순',
    category: '1:1 프라이빗',
    title: '1:1 AI 커리어 리포지셔닝 & 업무 자동화 워크플로우 진단',
    tagline: '대표님이 직접 1:1로 업무 병목을 뜯어보고 맞춤형 AI 자동화 파이프라인을 설계해 드립니다',
    description: '월 20~30만 원씩 AI 인프라를 직접 결제하며 1인 기업으로 프로덕트 4개를 띄운 실전 빌더(대표님)가 60분간 1:1로 당신의 본업을 밀착 진단합니다. 당신의 직무에 맞는 최적의 AI 스택을 선별하고, 당장 내일부터 퇴근을 2시간 앞당겨줄 커스텀 워크플로우를 처방합니다.',
    originalPrice: 350000,
    discountRate: 35,
    salePrice: 227500,
    monthlyPrice: '월 5팀 선착순 한정 예약',
    features: [
      '사전 서면 진단: 현재 업무 프로세스 및 병목 구간 정밀 분석',
      '60분 프라이빗 1:1 온라인 심층 컨설팅 (Zoom)',
      '나만을 위해 커스텀 제작된 AI 에이전트 프롬프트 & 도구 맵 제공',
      '세션 종료 후 2주간 질의응답 및 실행 피드백 채널 제공',
      '향후 기업 AX(AI 전환) 프로젝트 연계 시 100% 크레딧 인정'
    ],
    target: '단순 강의가 아닌, 내 비즈니스/직무에 딱 맞춘 구체적 처방전이 필요한 기획자, 마케터, 팀장, 대표',
    highlightProof: '컨설팅 만족도 99.4%, 참가자 전원 업무 루틴 자동화 달성',
    accentColor: '#f59e0b',
  },
  {
    id: '5',
    rank: 5,
    badge: 'NEW',
    category: '바이브코딩 키트',
    title: '클로드 코드(Claude Code) 완전정복 & 파워 커맨드 실전 키트',
    tagline: '터미널에서 AI 에이전트를 지휘하여 16시간 만에 실제 소프트웨어를 뽑아내는 비법',
    description: 'Anthropic이 공개한 최신 터미널 AI 에이전트 Claude Code를 200% 다루는 실무 가이드입니다. 나만의 스킬(SKILL.md)을 만들고, 터미널 파워 커맨드로 파일 생성부터 Git 커밋, 디버깅까지 한 번에 끝내는 에이전틱 코딩의 정수를 담았습니다.',
    originalPrice: 120000,
    discountRate: 51,
    salePrice: 59000,
    monthlyPrice: '일시불 소장 (가이드북+명령어 사전)',
    features: [
      'Claude Code 설치부터 파워 커맨드 100선 완벽 정리집 (PDF)',
      '나만의 서브에이전트 & 커스텀 스킬(SKILL.md) 제작 템플릿 5종',
      '실제 16시간 만에 100만 원 매출 소스코드 개발한 실전 워크플로우',
      '터미널 에러 해결 및 컨텍스트 최적화 트러블슈팅 가이드'
    ],
    target: 'Cursor나 터미널 기반 AI 개발을 가장 빠른 속도로 마스터하고 싶은 빌더 및 기획자',
    highlightProof: '자체 스튜디오 4개 프로덕트 전 라인업 개발에 100% 실사용된 명령어 세트',
    accentColor: '#ec4899',
  },
  {
    id: '6',
    rank: 6,
    badge: 'NEW',
    category: '바이럴 에셋',
    title: '1억짜리 상세페이지 & 후킹 레퍼런스 370선 실전 키트',
    tagline: '클릭률 12% 썸네일 205종 + 스크롤을 멈추게 만드는 도입부 20종 + 숏폼 콘티 77종',
    description: '고객의 지갑을 열게 만드는 것은 화려한 디자인이 아니라 인간의 심리를 찌르는 카피 구조입니다. 실제 1억 이상의 매출을 기록한 68개 고전환율 상세페이지 구조와, 클릭률 12%를 넘긴 썸네일/도입부/숏폼 370선 실전 레퍼런스를 제공합니다.',
    originalPrice: 190000,
    discountRate: 58,
    salePrice: 79000,
    monthlyPrice: '일시불 소장 (디자인 연습키트 포함)',
    features: [
      '1억짜리 설득형 상세페이지 분석 레퍼런스 68개 (PDF)',
      '시선을 사로잡는 고전환 썸네일 레퍼런스 205개',
      '끝까지 읽게 만드는 마법의 도입부 카피 20개',
      '알고리즘 추천을 폭발시키는 숏폼 영상 콘티 77선',
      'AI 상세페이지 작성 프롬프트 4종 번들 포함'
    ],
    target: '상세페이지 이탈률이 높거나, 릴스/스레드 썸네일 클릭률이 안 나와 고민인 마케터·셀러',
    highlightProof: '스튜디오 라이브 프로덕트 기획에 전수 반영된 고전환 표준 모델',
    accentColor: '#06b6d4',
  },
  {
    id: '7',
    rank: 7,
    badge: 'B2B',
    category: '바이럴 에셋',
    title: '비나인 매조키즘(Benign Masochism) & 훈수 경제학 소셜 플레이북',
    tagline: '인간의 훈수 본능과 유쾌한 불쾌감을 자극하여 댓글 400%를 폭발시키는 바이럴 설계학',
    description: '왜 사람들은 불쾌한 사주 해석이나 콩글리시 지적에 분노하면서도 결제할까요? 심리학의 "비나인 매조키즘(안전한 위험 즐기기)"과 "한국인의 훈수 본능"을 접목하여, 자극적인 밈 없이도 추천 알고리즘의 체류 시간을 4배로 끌어올리는 극비 공식을 공개합니다.',
    originalPrice: 280000,
    discountRate: 47,
    salePrice: 149000,
    monthlyPrice: '일시불 소장 (공학 플레이북 전문)',
    features: [
      '비나인 매조키즘 바이럴 침투 플레이북 전문 (Markdown/PDF)',
      '댓글 100개 이상 유발하는 12대 훈수 유발 장치(Comment Trigger)',
      '체류 시간 400% 극대화 숏폼/스레드 구조 설계도',
      '자체 운영 라이브 프로덕트 실제 실측 적용 A/B 테스트 리포트'
    ],
    target: '광고비 없이 오가닉 소셜 바이럴로 폭발적인 트래픽과 댓글을 만들고 싶은 그로스 엔지니어',
    highlightProof: '스레드 계정 단 2개 포스트로 누적 댓글 110개 돌파 및 2.4만 뷰 실측 달성',
    accentColor: '#e11d48',
  },
];
