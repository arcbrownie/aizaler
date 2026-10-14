export type BrickStage = 'STAGE_1' | 'STAGE_2' | 'STAGE_3' | 'CAREER';

export interface Product {
  id: string;
  rank: number;
  brickStage: BrickStage;
  brickStageLabel: string;
  badge: string;
  category: '스레드 & 메타 수익화' | '1:1 커리어 & 빌더 컨설팅' | '나를 위한 AI 자동화' | '1인 프로덕트 런칭';
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
    brickStageLabel: 'Stage 2 · 오가닉 수익화',
    badge: '주력',
    category: '스레드 & 메타 수익화',
    mode: 'traffic',
    title: '스레드 500만 뷰 & 알고리즘 수익화 바이블',
    tagline: '695편 포스트·500만 뷰 실측 DB로 검증한 구매 전환형 계정 설계 공식',
    description:
      '조회수만 높고 결제는 0원인 허수 바이럴에서 벗어나야 합니다. Meta 공인 미디어 플래닝 전문가가 2개 계정 500만 뷰 실측 데이터를 역공학해 도출한 첫 문장(Hook) 설계와 프로필 전환 배선도를 다룹니다.',
    originalPrice: 129000,
    discountRate: 62,
    salePrice: 49000,
    monthlyPrice: '플레이북 140p + 계정 진단 스크립트',
    deliverableSummary: '스레드 수익화 플레이북 (140p) + 훅 템플릿 + 계정 진단 도구',
    features: [
      '20만 뷰 결제 4건 실패 복기: 허수 바이럴이 계정을 망치는 원리',
      '실제 결제가 일어나는 1,000~3,000뷰 진성 타겟팅 구간 설계법',
      '메타 알고리즘 체류 시간을 늘리는 첫 문장(Hook) 프레임워크',
      '방문자를 유료 고객으로 전환하는 프로필·고정피드·리드마그넷 구조',
      '계정 건강도 및 노출 자가진단 체크리스트 포함',
    ],
    target: '나만의 도구나 콘텐츠를 만들었지만 어떻게 트래픽을 모으고 유료 결제로 연결할지 막막한 분',
    highlightProof: 'Meta Certified Media Planning Pro · 스레드 500만 뷰 실측 검증',
    accentColor: '#10b981',
  },
  {
    id: '3',
    rank: 2,
    brickStage: 'STAGE_2',
    brickStageLabel: 'Stage 2 · 유료 광고 퍼널',
    badge: '주력',
    category: '스레드 & 메타 수익화',
    mode: 'traffic',
    title: '메타 광고(Meta Ads) CVR 8.6% 고전환 플레이북',
    tagline: '소액 예산으로 48시간 내 시장 수요를 검증하고 결제를 만드는 퍼널 공식',
    description:
      '오가닉 도달을 기다릴 시간이 없다면 소액 메타 광고가 가장 빠른 검증 수단입니다. 광고 첫 문장과 랜딩페이지 첫 화면을 1:1로 일치시켜 전환율(CVR) 8.6%를 달성한 캠페인 세팅과 카피 공식을 공개합니다.',
    originalPrice: 159000,
    discountRate: 56,
    salePrice: 69000,
    monthlyPrice: '퍼널 가이드 + 캠페인 시트 & 카피 30선',
    deliverableSummary: 'CVR 8.6% 메타 광고 플레이북 + 랜딩 매칭 템플릿 + 카피 30선',
    features: [
      '단순 클릭 유도 광고와 실제 구매 전환 광고의 구조적 차이',
      '광고 소재 첫 문장 ↔ 랜딩페이지 히어로 1:1 매칭(Message Match) 공식',
      '일 예산 1~2만 원으로 48시간 만에 시장 지불 의사(WTP)를 판별하는 법',
      '픽셀 전환 이벤트 세팅 및 즉시 투입 가능한 광고 카피 템플릿 30선',
    ],
    target: '내가 만든 프로덕트나 지식을 가장 빠르고 확실하게 유료 결제로 검증하고 싶은 분',
    highlightProof: '사내 라이브 프로덕트 실측 구매 전환율(CVR) 8.6% 달성',
    accentColor: '#10b981',
  },
  {
    id: '4',
    rank: 3,
    brickStage: 'CAREER',
    brickStageLabel: '1:1 Consulting',
    badge: '1:1 세션',
    category: '1:1 커리어 & 빌더 컨설팅',
    mode: 'vip',
    title: '1:1 커리어 & 빌더 의사결정 컨설팅',
    tagline: '공기업·주재원 퇴사 후 4개 서비스를 홀로 런칭한 파운더와의 50분 맞춤 전략 세션',
    description:
      '안정된 조직에 몸담고 있지만 언젠가 내 이름으로 된 프로덕트와 현금흐름을 만들고 싶은 분을 위한 1:1 세션입니다. 퇴사·부업·이직의 냉정한 손익 계산부터 내 경력에서 뽑아내는 첫 수익화 아이템(PPF)까지 50분간 함께 설계합니다.',
    originalPrice: 250000,
    discountRate: 68,
    salePrice: 79000,
    monthlyPrice: '사전 진단지 분석 + 50분 화상 세션 + 90일 로드맵 리포트',
    deliverableSummary: '1:1 화상 세션 (50분) + 개인 맞춤 손익 매트릭스 + 90일 Action Blueprint',
    features: [
      '사전 진단지 기반 4대 갈림길(부업 vs 이직 vs 1인 독립 vs AI 전환) 정밀 진단',
      '50분 1:1 세션: 내 본업 경력·성향에서 도출하는 첫 수익화 프로덕트(PPF)',
      '퇴사·독립 전 반드시 확보해야 할 런웨이·기회비용·손익분기점 계산',
      '세션 직후 파운더가 직접 작성해 전달하는 [90일 실행 Action Blueprint]',
    ],
    target: '직장 생활을 유지하며 첫 부업 파이프라인을 만들고 싶거나, 독립·이직 전 현실적인 손익 점검이 필요한 5~20년차 직장인',
    highlightProof: '공기업·해외 주재원 퇴사 후 4개 상용 프로덕트를 홀로 런칭한 파운더 직접 진행',
    accentColor: '#2563eb',
  },
  {
    id: 'aside-starter',
    rank: 4,
    brickStage: 'STAGE_1',
    brickStageLabel: 'Stage 1 · AI 업무 자동화',
    badge: '입문',
    category: '나를 위한 AI 자동화',
    mode: 'daily',
    title: 'Git 에이전트 스킬(.skills) & AI 자동화 스타터 킷',
    tagline: '프롬프트 반복 입력 없이 내 문체와 업무를 기억하고 스스로 일하는 AI 비서 구축',
    description:
      '매번 채팅창에 같은 배경 설명을 붙여넣는 비효율을 끝내는 입문 과정입니다. Git 오픈소스 에이전트 스킬(.skills)과 MCP를 내 컴퓨터에 연결해 내 문체로 초안을 쓰고 리서치를 자동화하는 환경을 세팅합니다.',
    originalPrice: 79000,
    discountRate: 51,
    salePrice: 39000,
    monthlyPrice: '실습 매뉴얼 + .skills 템플릿 팩',
    deliverableSummary: 'Git .skills 세팅 가이드 + 문체 이식 템플릿 + MCP 자동화 레시피',
    features: [
      '비개발자도 15분 만에 따라 하는 Git 에이전트 스킬(.skills) 장착 가이드',
      '내 기존 글 3편으로 문체 DNA를 추출해 AI에 고정하는 페르소나 템플릿',
      'MCP를 활용해 로컬 폴더·노션·브라우저를 AI와 직접 연결하는 법',
      '하루 2시간을 아껴주는 실전 콘텐츠·리서치 자동화 워크플로우 10선',
    ],
    target: '반복 프롬프트 입력에서 벗어나 나를 위한 전용 AI 자동화 도구를 먼저 만들어보고 싶은 분',
    highlightProof: '브라운임팩트랩스 4개 서비스 콘텐츠·리서치 자동화 실사용 워크플로우',
    accentColor: '#f59e0b',
  },
  {
    id: '2',
    rank: 5,
    brickStage: 'STAGE_1',
    brickStageLabel: 'Stage 1 · 무료 입문 가이드',
    badge: '무료',
    category: '나를 위한 AI 자동화',
    mode: 'daily',
    title: '[무료] 스레드 500만 뷰 훅 구조도 & AI 빌더 입문 가이드',
    tagline: '내 계정이 스킵당하는 이유를 10분 만에 점검하는 자가진단 체크리스트',
    description:
      '복잡한 개발 지식 없이 바로 적용할 수 있는 입문 가이드입니다. 구매 전환을 만드는 스레드 첫 문장 구조도와 나를 위한 첫 AI 도구를 기획하는 체크리스트를 무료 PDF로 제공합니다.',
    originalPrice: 39000,
    discountRate: 100,
    salePrice: 0,
    monthlyPrice: '이메일 입력 시 즉시 발송',
    deliverableSummary: '스레드 훅 구조 해부서 + 계정 자가진단 체크리스트 (무료 PDF)',
    features: [
      '조회수 대비 결제 전환이 일어나는 스레드 첫 문장(Hook) 구조도',
      '계정 노출 저하 원인을 찾는 10분 자가진단 체크리스트',
      '나를 위한 작은 도구에서 수익화까지 이어지는 3단계 로드맵 요약',
      '전환율을 높이는 프로필 & 고정 포스트 배치 템플릿',
    ],
    target: '부담 없이 첫 AI 도구 기획과 스레드 수익화 구조를 훑어보고 싶은 입문자',
    highlightProof: '이메일 입력 즉시 무료 PDF 발송',
    accentColor: '#f59e0b',
  },
  {
    id: '6',
    rank: 6,
    brickStage: 'STAGE_3',
    brickStageLabel: 'Stage 3 · 1인 풀스택 런칭',
    badge: '심화',
    category: '1인 프로덕트 런칭',
    mode: 'build',
    title: '외주비 0원·월 $42 1인 풀스택 웹서비스 아키텍처',
    tagline: 'Cursor·Supabase·Cloudflare로 결제창 달린 내 서비스를 직접 배포하는 설계도',
    description:
      '수익성이 확인된 아이디어를 실제 결제 가능한 상용 웹서비스로 런칭하는 과정입니다. 명사도·맹모인사이트·칠구영어 등 4개 서비스를 외주 없이 직접 구축하고 월 $42 고정비로 운영하는 인프라 설계도를 전수합니다.',
    originalPrice: 150000,
    discountRate: 61,
    salePrice: 59000,
    monthlyPrice: '아키텍처 블루프린트 + 결제·DB 연동 가이드',
    deliverableSummary: '월 $42 풀스택 인프라 설계도 + Cursor·Supabase·PG 결제 연동 가이드',
    features: [
      '4개 상용 서비스를 월 $42로 무중단 운영하는 클라우드(Cloudflare·Vercel) 구성도',
      'Cursor와 Claude로 풀스택 웹 애플리케이션을 구현하는 단계별 프롬프트 프로토콜',
      'Supabase 인증·DB 구축부터 국내 간편결제(PG) 모듈 연동 실전 가이드',
      'API 토큰 비용을 90% 절감하는 캐싱 및 정적 생성 아키텍처',
    ],
    target: '외주 개발비 수천만 원 대신 내 손으로 직접 결제 가능한 웹 프로덕트를 런칭하고 싶은 빌더',
    highlightProof: '명사도·맹모인사이트 등 4개 라이브 상용 서비스 실운영 아키텍처',
    accentColor: '#f43f5e',
  },
  {
    id: '7',
    rank: 7,
    brickStage: 'STAGE_3',
    brickStageLabel: 'Stage 3 · 터미널 자동화',
    badge: '심화',
    category: '1인 프로덕트 런칭',
    mode: 'build',
    title: '클로드 코드(Claude Code) 터미널 자동화 마스터리',
    tagline: '터미널 에이전트로 개발·데이터 가공·일괄 배포 시간을 1/10로 줄이는 워크플로우',
    description:
      '혼자서 여러 서비스를 운영하려면 수작업을 최소화해야 합니다. 터미널 명령어로 수백 개 파일 수정, 데이터 크롤링·가공, 배포까지 자동화하는 1인 테크 스튜디오의 Claude Code 실전 매뉴얼입니다.',
    originalPrice: 99000,
    discountRate: 60,
    salePrice: 39000,
    monthlyPrice: '터미널 매뉴얼 + 자동화 스크립트 팩',
    deliverableSummary: 'Claude Code 실전 커맨드 50선 + 멀티 프로젝트 관리 스크립트',
    features: [
      'Claude Code 초기 세팅 및 CLAUDE.md를 활용한 프로젝트 규칙 학습법',
      '데이터 수집·가공·콘텐츠 발행을 터미널 에이전트로 자동화하는 파이프라인',
      '토큰 소모량을 줄이면서 코드 정확도를 높이는 컨텍스트 관리 노하우',
    ],
    target: '1인 개발 및 서비스 유지보수 생산성을 극대화하고 싶은 빌더',
    highlightProof: '브라운임팩트랩스 전 프로덕트 개발·배포 실사용 워크플로우',
    accentColor: '#f43f5e',
  },
];
