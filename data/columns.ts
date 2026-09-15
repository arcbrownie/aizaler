export interface Column {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  readTime: string;
  date: string;
  category: string;
  views: number;
  highlightTag: string;
}

export const COLUMNS: Column[] = [
  {
    id: 'c1',
    slug: 'meta-algorithm-hangover-db-proof',
    title: '20만 뷰 터지고 결제 4건? 메타 추천 알고리즘의 ‘숙취’를 실측 퍼널로 증명함',
    excerpt: '조회수가 207,709뷰 터졌을 때 우리는 축배를 들지 못했습니다. 실측 결제는 단 4건. 그 후 5일간 찾아온 도달률 급감(The Hangover) 현상을 Meta 공인 미디어 플래닝 전문가의 시각에서 알고리즘 메커니즘과 퍼널 지표로 역공학했습니다.',
    readTime: '6분 읽기',
    date: '2026. 09. 11',
    category: '알고리즘 역공학',
    views: 14280,
    highlightTag: '실측 퍼널 로그',
  },
  {
    id: 'c2',
    slug: 'solopreneur-ai-orchestration-career',
    title: '월 2만 원 GPT로 1인 4개 서비스를 띄운 비개발자의 실전 AI 오케스트레이션',
    excerpt: '남들이 챗GPT에 영어 번역만 시킬 때, 기획·DB·UI·결제·배포까지 AI 에이전트를 실시간 팀원으로 다루는 1인 빌더의 사고방식. 코딩을 배우려 하지 마세요. 당신의 본업 전문성에 AI라는 지렛대를 거는 법이 훨씬 중요합니다.',
    readTime: '8분 읽기',
    date: '2026. 09. 13',
    category: '커리어 & 워크플로우',
    views: 9820,
    highlightTag: '빌딩 인 퍼블릭',
  },
  {
    id: 'c3',
    slug: 'first-9-vector-purity-mathematics',
    title: '당신의 첫 9개(First 9) 피드가 추천 알고리즘의 90%를 결정하는 텍스트 임베딩 수학',
    excerpt: '메타 Sentence-BERT와 LASER 모델은 계정 상단 9개 피드의 제목과 첫 3줄 텍스트로 계정의 카테고리 벡터를 강제 인덱싱합니다. 잡탕 피드가 왜 계정의 사형 선고인지, 그리고 벡터 순도를 100%로 유지하는 실전 공식을 공개합니다.',
    readTime: '7분 읽기',
    date: '2026. 09. 12',
    category: '메타 그로스 공학',
    views: 11450,
    highlightTag: 'Sentence-BERT',
  },
  {
    id: 'c4',
    slug: 'indie-hacker-ai-agent-infra-42dollars',
    title: 'AI 에이전트 3마리로 구축한 월 1인 SaaS 인프라 비용 $42의 비밀',
    excerpt: 'Cloudflare Pages + Neon Postgres + Vercel + Resend + Gemini 2.5 Flash API 조합으로 월 고정비 5만 원대에 트래픽 수십만 명을 감당하는 인디해커의 초경량 고효율 서버리스 아키텍처 다이어그램을 그대로 공개합니다.',
    readTime: '5분 읽기',
    date: '2026. 09. 14',
    category: '시스템 아키텍처',
    views: 8640,
    highlightTag: '초저비용 인프라',
  },
  {
    id: 'c5',
    slug: 'benign-masochism-viral-psychology',
    title: '비나인 매조키즘(Benign Masochism): 왜 인간은 불쾌한 사주·영어 지적에 기꺼이 돈을 쓰는가?',
    excerpt: '롤러코스터를 타고 매운 떡볶이를 먹듯, 인간은 "안전하게 위협받는 경험"에서 깊은 쾌락을 느낍니다. "당신 명식에 불이 너무 많아 돈이 샌다", "미국인 앞에서 그 표현 쓰면 갑분싸 난다"는 지적 카피가 어떻게 39,800원 결제로 이어지는지 심리 기전을 해부합니다.',
    readTime: '9분 읽기',
    date: '2026. 09. 10',
    category: '소셜 심리 공학',
    views: 13200,
    highlightTag: '바이럴 심리학',
  },
  {
    id: 'c6',
    slug: 'claude-code-custom-skill-guide',
    title: '클로드 코드(Claude Code)로 나만의 맞춤 에이전트 스킬(SKILL.md) 만드는 법',
    excerpt: '단순한 채팅창 인터페이스를 벗어나 터미널 환경에서 반복 업무를 0초 만에 수행하는 커스텀 에이전트 스킬 설계법. 코드 변경부터 테스트 실행, Git 푸시까지 한 줄의 명령어로 자동화하는 엔지니어링 팁을 공유합니다.',
    readTime: '6분 읽기',
    date: '2026. 09. 09',
    category: '에이전틱 엔지니어링',
    views: 7490,
    highlightTag: 'Claude Code',
  },
  {
    id: 'c7',
    slug: 'gis-academy-bigdata-pipeline',
    title: '대치·목동 등 서울/수도권 430개 학원가 빅데이터를 3일 만에 구축한 AI 스크래핑 아키텍처',
    excerpt: '네이버 지도와 공공데이터 API의 한계를 뚫고 카카오 로컬 REST API, Turf.js 공간 연산, 그리고 Gemini Flash를 파이프라인으로 연결하여 대규모 학군 지도 빅데이터를 1인이 단 3일 만에 인덱싱한 실전 파이프라인.',
    readTime: '7분 읽기',
    date: '2026. 09. 08',
    category: '데이터 엔지니어링',
    views: 6920,
    highlightTag: '학군 빅데이터 실측',
  },
  {
    id: 'c8',
    slug: 'jackson-chapman-comment-trigger-law',
    title: '릴스 떡상한 미국 청년 잭슨과 리센느가 증명한 ‘랜선 육성 시뮬레이션’ 공식',
    subtitle: '일방향 완벽한 전문가보다, 살짝 엉성한 언더독을 함께 키우는 독자의 효능감이 진짜 팬덤을 만든다',
    excerpt: '조회수 100만 뷰를 찍은 크리에이터들의 공통점은 "완벽함"이 아니라 "개입할 틈새"를 내어주었다는 점입니다. 독자가 댓글로 훈수를 두며 육성 게임처럼 크리에이터를 키워내는 메커니즘을 내 비즈니스 계정에 이식하는 3대 원칙.',
    readTime: '8분 읽기',
    date: '2026. 09. 07',
    category: '팬덤 빌딩 공학',
    views: 12100,
    highlightTag: '댓글 400% 증폭',
  },
];
