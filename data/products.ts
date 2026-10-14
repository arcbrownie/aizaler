export type BrickStage = 'STAGE_1' | 'STAGE_2' | 'STAGE_3' | 'CAREER';

export interface Product {
  id: string;
  rank: number;
  brickStage: BrickStage;
  brickStageLabel: string;
  badge: '주력 대표' | 'BEST' | 'FREE' | 'HOT' | '재능기부 1:1' | 'NEW';
  category: '스레드 & 메타 수익화' | '1:1 커리어 & 빌더 처방' | '나를 위한 AI 자동화' | '1인 프로덕트 런칭';
  mode: 'daily' | 'traffic' | 'build' | 'vip';
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
  deliverableSummary: string;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    rank: 1,
    brickStage: 'STAGE_2',
    brickStageLabel: '🟢 STAGE 02 · 초록 브릭 (수익화 핵심)',
    badge: '주력 대표',
    category: '스레드 & 메타 수익화',
    mode: 'traffic',
    title: '스레드 500만 뷰 & 메타 알고리즘 수익화 바이블: 허수 조회수를 걷어내고 진짜 결제를 꽂는 법',
    tagline: '20만 뷰에 결제 4건이던 참사에서 500만 뷰 실측 DB 역공학으로 찾아낸 소셜 수익화 정본',
    description:
      '만들기만 하면 뭐합니까, 팔려야 내 것이 됩니다. 조회수만 터지고 실제 결제는 0원인 허수 바이럴의 함정에서 벗어나세요. Meta 공인 미디어 플래닝 전문가가 695편의 포스트와 500만 뷰 실측 DB를 대조해 밝혀낸 "진짜 지갑을 여는 고객이 들어오는 알고리즘 설계도"입니다.',
    originalPrice: 129000,
    discountRate: 62,
    salePrice: 49000,
    monthlyPrice: '실전 바이블 140p + 계정 건강 진단 스크립트 포함',
    deliverableSummary: '스레드 500만 뷰 역공학 플레이북 (140p) + 훅 구조 템플릿 + 계정 진단 도구',
    features: [
      '20만 뷰에 결제 4건(0.0019%) 참사 복기: 재미 위주 바이럴이 계정을 망치는 원리',
      '진짜 구매자가 결제를 일으키는 "1,000~3,000뷰 황금 타겟팅 구간" 설계 공식',
      '메타 알고리즘(Sentence-BERT) 체류 시간 10배 견인 첫 문장(Hook) 조립 프레임워크',
      '방문자를 잠재 고객과 유료 구매자로 바꾸는 프로필·고정피드·리드마그넷 배선도',
      '계정 건강도 및 노출 역주행 자가진단 체크리스트 & 스크립트 제공',
    ],
    target: '나만의 도구나 지식을 만들었지만 어떻게 사람들을 모으고 첫 유료 결제를 일으킬지 막막한 빌더·크리에이터',
    highlightProof: 'Meta Certified Media Planning Pro 자격 & 스레드 2개 계정 500만 뷰 실측 검증',
    accentColor: '#10b981',
  },
  {
    id: '3',
    rank: 2,
    brickStage: 'STAGE_2',
    brickStageLabel: '🟢 STAGE 02 · 초록 브릭 (고전환 퍼널)',
    badge: 'HOT',
    category: '스레드 & 메타 수익화',
    mode: 'traffic',
    title: '메타 광고(Meta Ads) CVR 8.6% 고전환 퍼널 플레이북: 소액 광고비로 즉각 현금흐름 만들기',
    tagline: '광고 첫 문장과 랜딩페이지 첫 화면을 1:1로 결속해 이탈 없이 구매로 꽂아 넣는 실전 공식',
    description:
      '오가닉 도달을 기다릴 시간이 없다면 소액 메타 광고가 가장 빠른 검증기입니다. 내 생돈을 태우며 깨달은 광고비 누수 원인을 차단하고, 광고 소재에서 약속한 가치가 랜딩페이지 1초 만에 회수되는 CVR 8.6% 고전환 퍼널 조립법을 공개합니다.',
    originalPrice: 159000,
    discountRate: 56,
    salePrice: 69000,
    monthlyPrice: '고전환 퍼널 가이드 + 캠페인 세팅 시트 & 카피 30선',
    deliverableSummary: 'CVR 8.6% 메타 광고 플레이북 + 1:1 랜딩 매칭 템플릿 + 고전환 카피 30선',
    features: [
      '단순 클릭 유도형 광고 vs 실제 신용카드를 꺼내게 만드는 구매 의도 광고의 결정적 차이',
      '광고 소재 첫 문장 ↔ 랜딩페이지 히어로 섹션 1:1 결속(Message Match) 설계 공식',
      '일 예산 1~2만 원으로 내 아이템의 시장 지불 의사(WTP)를 48시간 만에 판별하는 법',
      '누수 없는 픽셀 전환 이벤트 배선 및 신규 캠페인 즉시 투입용 카피 템플릿 30선',
    ],
    target: '내가 만든 프로덕트나 지식을 가장 빠르고 확실하게 유료 결제로 연결하고 싶은 1인 빌더·솔로프리너',
    highlightProof: '사내 라이브 프로덕트 실측 구매 전환율(CVR) 8.6% 달성 아키텍처',
    accentColor: '#10b981',
  },
  {
    id: '4',
    rank: 3,
    brickStage: 'CAREER',
    brickStageLabel: '🔵 CAREER TRACK · 파란 브릭 (1:1 밀착 처방)',
    badge: '재능기부 1:1',
    category: '1:1 커리어 & 빌더 처방',
    mode: 'vip',
    title: '공기업·주재원 퇴사 파운더의 1:1 커리어 & 1인 빌더 의사결정 세션 (50분 밀착 처방)',
    tagline: '안정된 조직 속에서 "내 것"을 만들고 싶어 갈증 느끼는 타고난 빌더를 위한 실전 손익 & 90일 로드맵',
    description:
      '멤버십을 본격적으로 열기 전, 과거의 저처럼 안정된 직장(공기업·주재원·대기업) 속에서 남몰래 내 것을 조립하고 싶어 갈증 느끼는 분들을 직접 만나 돕고 싶어 반쯤 재능기부 + 자아실현으로 운영하는 1:1 세션입니다. 뜬구름 잡는 위로 대신, 퇴사/부업/이직의 냉정한 손익 계산과 내 본업·성향에 맞는 첫 수익화 블록(PPF)을 50분간 함께 조립합니다.',
    originalPrice: 250000,
    discountRate: 68,
    salePrice: 79000,
    monthlyPrice: '월 10명 한정 · 사전 질문지 분석 + 90일 Action Blueprint 포함',
    deliverableSummary: '1:1 화상 세션 (50분) + 개인 맞춤 손익 매트릭스 + 90일 실행 Action Blueprint',
    features: [
      '사전 서면 진단지 기반 4대 갈림길(본업 유지 부업 vs 이직 vs 1인 독립 vs AI 전환) 정밀 검토',
      '50분 1:1 집중 온라인 세션: 내 경력·성향에서 뽑아내는 가장 확실한 첫 프로덕트(PPF) 도출',
      '조직의 울타리를 나오기 전 반드시 확보해야 할 런웨이·기회비용·손익분기점 시뮬레이션',
      '세션 직후 대표가 직접 조판해 전달하는 [나만의 90일 빌더 & 수익화 Action Blueprint]',
    ],
    target: '안정적인 직장에 다니고 있지만 언젠가 내 이름으로 된 프로덕트와 현금흐름을 만들고 싶은 5~20년차 직장인·예비 빌더',
    highlightProof: '공기업·해외 주재원 퇴사 후 4개 상용 프로덕트를 홀로 띄워 생존한 파운더 직접 진행',
    accentColor: '#3b82f6',
  },
  {
    id: '2',
    rank: 4,
    brickStage: 'STAGE_1',
    brickStageLabel: '🟡 STAGE 01 · 노란 브릭 (무료 입문)',
    badge: 'FREE',
    category: '나를 위한 AI 자동화',
    mode: 'daily',
    title: '[무료 스타터 브릭] 스레드 500만 뷰 훅 구조도 & 1인 빌더 첫 조립 가이드 (PDF)',
    tagline: '코딩 몰라도 오늘 밤 당장 써먹는 첫 번째 기초 블록! 계정 자가진단 & AI 빌더 입문서',
    description:
      '어려운 개발 용어나 복잡한 세팅 없이, 어릴 적 큼직한 기초 블록을 맞추듯 가볍게 시작해 보세요. 내 글이 왜 스킵당하는지 10분 만에 점검하는 스레드 훅 구조도와, 나를 위한 첫 AI 도구를 조립하는 입문 체크리스트를 100% 무료로 보내드립니다.',
    originalPrice: 39000,
    discountRate: 100,
    salePrice: 0,
    monthlyPrice: '이메일 입력 시 100% 무료 즉시 발송',
    deliverableSummary: '스레드 500만 뷰 훅 구조 해부서 + 계정 자가진단 체크리스트 (무료 PDF)',
    features: [
      '조회수 대비 결제 전환이 일어나는 스레드 첫 문장(Hook) 구조 해부도',
      '내 계정의 노출 역주행을 막는 10분 자가진단 체크리스트',
      '코딩 문법 암기 없이 나를 위한 작은 AI 도구부터 시작하는 Stage 1~3 로드맵',
      '방문자의 시선을 사로잡는 프로필 & 핀 고정 포스트 배치 템플릿',
    ],
    target: '부담 없이 첫 번째 AI & 수익화 블록을 조립해 보고 싶은 모든 입문 빌더',
    highlightProof: '이메일 입력 즉시 무료 스타터 가이드 발송',
    accentColor: '#f59e0b',
  },
  {
    id: 'aside-starter',
    rank: 5,
    brickStage: 'STAGE_1',
    brickStageLabel: '🟡 STAGE 01 · 노란 브릭 (나를 위한 AI 일꾼)',
    badge: 'BEST',
    category: '나를 위한 AI 자동화',
    mode: 'daily',
    title: '나를 위한 첫 AI 일꾼 조립: Git 에이전트 스킬(.skills) & Claude Code 자율 실행 킷',
    tagline: '지겨운 프롬프트 복붙은 그만: 내 문체와 업무를 기억하고 스스로 일하는 나만의 AI 비서 조립법',
    description:
      '타고난 빌더의 첫걸음은 "내가 매일 겪는 귀찮은 일을 대신해 줄 도구"를 직접 만드는 것입니다. 시중의 흔한 프롬프트 모음집 대신, Git 오픈소스 에이전트 스킬(.skills)과 MCP를 내 컴퓨터에 꽂아 내 톤앤매너로 글을 쓰고 리서치를 자동화하는 실전 조립 설명서입니다.',
    originalPrice: 79000,
    discountRate: 51,
    salePrice: 39000,
    monthlyPrice: '실전 조립 가이드 + 복붙용 .skills 템플릿 팩 포함',
    deliverableSummary: 'Git .skills 장착 가이드 + 내 문체 DNA 역공학 템플릿 + MCP 자동화 레시피',
    features: [
      '비개발자도 15분 만에 따라 하는 Git 오픈소스 에이전트 스킬(.skills) 장착 매뉴얼',
      '내 과거 글 3편으로 나만의 문체 DNA를 추출해 AI에 영구 이식하는 페르소나 프레임워크',
      'MCP(Model Context Protocol)로 내 로컬 폴더·노션·브라우저를 AI에 직결하는 법',
      '내가 쓰려고 만들었다가 하루 2시간을 아껴준 실전 업무/콘텐츠 자동화 레시피 10선',
    ],
    target: '매번 챗GPT/클로드에 똑같은 설명을 반복하는 게 지겹고, 나를 위한 전용 AI 자동화 도구를 먼저 만들어보고 싶은 빌더',
    highlightProof: '브라운임팩트랩스 사내 4개 서비스 콘텐츠·리서치 자동화에 실제 가동 중',
    accentColor: '#f59e0b',
  },
  {
    id: '6',
    rank: 6,
    brickStage: 'STAGE_3',
    brickStageLabel: '🔴 STAGE 03 · 빨간 브릭 (풀스택 런칭 설계도)',
    badge: 'NEW',
    category: '1인 프로덕트 런칭',
    mode: 'build',
    title: '1인 테크 스튜디오 풀스택 아키텍처: 외주비 0원·월 $42로 상용 웹서비스 4개 띄운 설계도',
    tagline: '개발자 한 명 없이 Cursor, Supabase, Cloudflare로 결제창 달린 내 서비스를 직접 배포하는 법',
    description:
      '나를 위해 만든 도구가 주변의 반응을 얻기 시작했다면, 이제 결제창을 달아 세상에 내놓을 차례입니다. 명사도·맹모인사이트·칠구영어를 외주비 0원으로 직접 조립해 띄우고, 월 $42의 초경량 인프라 비용으로 무중단 운영하는 정밀 풀스택 설계도를 그대로 전수합니다.',
    originalPrice: 150000,
    discountRate: 61,
    salePrice: 59000,
    monthlyPrice: '풀스택 아키텍처 블루프린트 + 결제/DB 보일러플레이트 포함',
    deliverableSummary: '월 $42 1인 풀스택 인프라 설계도 + Cursor·Supabase·결제 연동 가이드',
    features: [
      '4개 상용 서비스를 단돈 월 $42로 무중단 지탱하는 초경량 클라우드(Cloudflare + Vercel) 배선도',
      '코딩 문법 암기 대신 Cursor + Claude에게 설계도를 쥐여주고 풀스택 웹을 조립시키는 프롬프트 프로토콜',
      'Supabase 인증/DB 세팅부터 한국형 간편결제(PG) 모듈을 막힘없이 연결하는 실전 가이드',
      'API 토큰 비용 폭탄을 90% 차단하는 캐싱(Prompt Caching) 및 정적 생성 아키텍처',
    ],
    target: '외주 개발비 수천만 원 견적서에 좌절했거나, 내 손으로 직접 결제 가능한 웹 프로덕트를 세상에 띄우고 싶은 빌더',
    highlightProof: '명사도·맹모인사이트 등 4개 라이브 상용 서비스 실운영 아키텍처 100% 공개',
    accentColor: '#f43f5e',
  },
  {
    id: '7',
    rank: 7,
    brickStage: 'STAGE_3',
    brickStageLabel: '🔴 STAGE 03 · 빨간 브릭 (CLI 파워 빌더)',
    badge: 'NEW',
    category: '1인 프로덕트 런칭',
    mode: 'build',
    title: '클로드 코드(Claude Code) 터미널 조립 마스터리: 혼자서 10명분 일하는 1인 개발 치트키',
    tagline: '채팅창 복붙을 넘어 터미널 에이전트에게 리팩토링·데이터 가공·일괄 배포를 맡기는 법',
    description:
      '여러 개의 서비스를 혼자 운영하려면 손으로 코드를 고치는 시간을 줄여야 합니다. 터미널 한 줄 명령으로 수백 개 파일을 일괄 수정하고, 버그를 잡고, 배포까지 끝내는 1인 테크 스튜디오의 Claude Code 실전 운용 매뉴얼입니다.',
    originalPrice: 99000,
    discountRate: 60,
    salePrice: 39000,
    monthlyPrice: '터미널 워크플로우 매뉴얼 + 자동화 스크립트 팩',
    deliverableSummary: 'Claude Code 실전 커맨드 50선 + 1인 스튜디오 멀티 프로젝트 관리 스크립트',
    features: [
      'Claude Code 설치부터 CLAUDE.md 설계도 작성으로 프로젝트 규칙을 학습시키는 법',
      '대용량 데이터 크롤링·가공·콘텐츠 생성을 터미널 에이전트로 자동화하는 파이프라인',
      '토큰 소모량을 절반으로 줄이면서 정확도를 2배 높이는 컨텍스트 관리 노하우',
    ],
    target: '본격적으로 내 서비스를 직접 만들고 유지보수하며 1인 개발 생산성을 극한으로 끌어올리고 싶은 빌더',
    highlightProof: '브라운임팩트랩스 전 프로덕트 개발·배포에 매일 100% 실사용 중',
    accentColor: '#f43f5e',
  },
];
