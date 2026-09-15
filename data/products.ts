export interface Product {
  id: string;
  rank: number;
  badge: 'BEST' | 'FREE' | 'HOT' | '선착순' | 'NEW';
  category: '실전 그로스 바이블' | '무료 리포트 & 가이드' | '14일 액션 챌린지' | '1:1 프라이빗 전략';
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
    category: '실전 그로스 바이블',
    title: '메타 알고리즘 실전 바이블: 조회수 20만 터져도 결제 0건인 이유와 황금 고객 도달 공식',
    tagline: 'Meta 공인 미디어 플래닝 전문가가 423만 뷰 실측 분석으로 밝혀낸 소셜 알고리즘 실전서',
    description: '조회수 20만이 터졌는데 왜 유료 결제는 4건뿐이었을까요? 뜬구름 잡는 마케팅 이론을 찢고, 실제 695편 포스트 전수 데이터와 결제 로그를 대조해 밝혀낸 메타 알고리즘의 추천 원리와 1,000~3,000뷰의 황금 스위트 스팟, 그리고 계정 역주행 시 10분 만에 되살리는 정상화 프로토콜을 집대성했습니다.',
    originalPrice: 129000,
    discountRate: 62,
    salePrice: 49000,
    monthlyPrice: 'PDF 140p + 계정 진단 스크립트 제공',
    features: [
      '조회수 20.7만 참사 복기와 메타 추천 알고리즘의 작동 원리 해부',
      '695편 전수 분석: CVR 4.49% 황금 스위트 스팟 데이터 리포트',
      '프로필 누른 사람이 3초 만에 팔로우하는 First 9 3대 기둥 피드 공식',
      '계정 건강 자동 진단 도구(threads-health.ts) 소스코드 제공'
    ],
    target: '조회수만 터지고 실제 매출이 안 나와 답답한 1인 창업가, 퍼포먼스 마케터, 인디해커',
    highlightProof: 'Meta Certified Media Planning Pro 자격 보유 & 423만 뷰 실측 분석 검증',
    accentColor: '#3182f6',
  },
  {
    id: '2',
    rank: 2,
    badge: 'FREE',
    category: '무료 리포트 & 가이드',
    title: '알고리즘 역주행 자가진단 체크리스트 & 3초 팔로우 가이드북 (100% 무료)',
    tagline: '내 계정이 왜 엉뚱한 사람에게 노출되는지 10분 만에 진단하고 되살리는 무료 리포트',
    description: '내 글이 왜 스킵당하는지, 어떤 글이 계정에 독이 되는지 감으로 짐작하지 마세요. 실제 조회수 대비 유료 결제 전환율을 분석한 실전 퍼널 성과표와 프로필 상단 9개 피드 점검 체크리스트를 100% 무료 배포합니다.',
    originalPrice: 39000,
    discountRate: 100,
    salePrice: 0,
    monthlyPrice: '100% 무료 즉시 다운로드',
    features: [
      '조회수 대비 결제 전환율(CVR) 실측 퍼널 분석 성과표',
      '대중 밈 바이럴로 인한 알고리즘 역주행 자가진단 프로토콜',
      '3초 만에 팔로우를 부르는 First 9 3-Pillar 배치도 템플릿',
      '엉뚱한 밈 노출을 10분 만에 청소하는 관심 없음 5연타 매뉴얼'
    ],
    target: '데이터 기반으로 소셜 채널과 매출 파이프라인을 점검하고 싶은 모든 테크 빌더',
    highlightProof: '다운로드 즉시 내 계정과 캠페인에 그대로 대입해 사용 가능한 체크리스트',
    accentColor: '#10b981',
  },
  {
    id: '3',
    rank: 3,
    badge: 'HOT',
    category: '실전 그로스 바이블',
    title: '메타 광고(Meta Ads) 결제 전환율 8.6% 달성 플레이북',
    tagline: 'Meta 공인 미디어 플래닝 전문가의 광고 ↔ 랜딩 1:1 일치(소오름 매칭) 실전 세팅 가이드',
    description: '단순 호기심 앵글은 유입만 모으고 결제율은 0.8%에 그쳤지만, 증거물 앵글과 광고 ↔ 랜딩 1:1 일치 전략은 결제율 8.6%를 달성했습니다. 광고에서 본 첫 화면이 랜딩페이지 첫 문장에서 그대로 회수되지 않으면 고객은 즉시 이탈합니다. Meta Certified Media Planning Professional이 직접 집행하고 검증한 실전 광고 세팅 시트와 카피 템플릿을 제공합니다.',
    originalPrice: 159000,
    discountRate: 56,
    salePrice: 69000,
    monthlyPrice: '실전 캠페인 세팅 시트 포함',
    features: [
      '단순 호기심(0.8%) vs 증거물(8.6%) 14일 실측 A/B 데이터 분석서',
      '광고 소재 첫 화면 ↔ 랜딩 첫 화면 1:1 일치 소오름 매칭 프레임워크',
      '누수 없는 UTM 파라미터 계층 구조 및 CAPI 전환 이벤트 배선',
      '신규 캠페인 런칭 시 즉시 복사해 쓰는 고전환 카피 템플릿 30선'
    ],
    target: '메타 광고비만 태우고 랜딩페이지에서 고객이 다 이탈해 고통받는 이커머스/SaaS 대표',
    highlightProof: 'Meta 공인 전문가 직접 집행 사내 서비스 광고 결제 전환율 8.6% 달성',
    accentColor: '#8b5cf6',
  },
  {
    id: '4',
    rank: 4,
    badge: '선착순',
    category: '1:1 프라이빗 전략',
    title: '공기업·주재원 퇴사자 파운더의 1:1 커리어 & 솔로프리너 의사결정 전략 세션',
    tagline: '선망받던 공기업과 주재원을 박차고 나와 야생에서 1인 개발로 생존한 파운더의 50분 손익 처방',
    description: '이직할 것인가, 버틸 것인가, 아니면 내 일을 시작할 것인가? 감정적 위로를 걷어내고, 실제 공기업과 해외 주재원이라는 황금 족쇄를 끊어내고 1인 개발 솔로프리너로 생존한 창업자가 당신의 경력 데이터와 시장 변수를 분석하여 50분간 철저한 손익과 90일 실행 Action Summary를 도출해 드립니다.',
    originalPrice: 250000,
    discountRate: 68,
    salePrice: 79000,
    monthlyPrice: '월 10팀 한정 예약제 (/career 전용)',
    features: [
      '사전 서면 질문지 및 4대 갈림길(이직/승진/독립/AI) 정밀 사전 검토',
      '50분 집중 온라인 화상 세션 (10-10-20-10 정밀 프로토콜)',
      '선택지 손익 비교 및 기회비용 산출 (Upside vs Downside)',
      '세션 후 즉시 조판되는 90일 실행 Action Summary Document 증정'
    ],
    target: '경력 5~20년차 대리·과장·팀장·임원급 및 퇴사 후 1인 독립을 진지하게 고민하는 실무자',
    highlightProof: '공기업 주재원 출신 파운더 직접 1:1 컨설팅 만족도 99.4%',
    accentColor: '#f59e0b',
  },
  {
    id: '5',
    rank: 5,
    badge: 'NEW',
    category: '실전 그로스 바이블',
    title: '바이럴 심리 공학 & 한국인 훈수 경제학: 15초 영상에 체류 시간 400% 만드는 법',
    tagline: '미국 청년 잭슨과 아이돌 리센느가 증명한 랜선 육성 시뮬레이션과 스레드 마이크로 카피라이팅',
    description: '가르치려 드는 완벽한 전문가는 외면당하지만, 독자가 훈수 둘 틈을 열어주는 언더독에게는 수천 개의 댓글이 쏟아집니다. 잭슨 채프먼의 불닭볶음면 사례와 4대 심리 알리바이(임상 관찰자, 정체성 선언, 훈수 제보, 액막이), 그리고 6,700뷰를 터뜨린 스레드 말하듯 쓰는 썰 마이크로 카피 공식을 공개합니다.',
    originalPrice: 120000,
    discountRate: 59,
    salePrice: 49000,
    monthlyPrice: '스레드 썰 템플릿 40선 포함',
    features: [
      '한국인의 훈수 본능을 자극해 체류 시간 400% 만드는 4대 알리바이',
      '6,726뷰 터진 〈Meet 썰〉 vs 3뷰로 침몰한 교과서 글 실측 비교 분석',
      '첫 줄에 <꺾쇠 제목> 박고 시작하는 스레드 마이크로 카피 3대 원칙',
      '언더독을 내 편으로 만드는 리센느식 랜선 육성 서사 설계도'
    ],
    target: '소셜 채널에서 댓글과 체류 시간이 저조해 알고리즘 추천을 받지 못하는 크리에이터',
    highlightProof: '사내 소셜 채널 단일 포스트 체류 시간 400% 및 댓글 110개 돌파 검증',
    accentColor: '#ec4899',
  },
  {
    id: '6',
    rank: 6,
    badge: 'NEW',
    category: '실전 그로스 바이블',
    title: '1인 테크 스튜디오 월 $42 SaaS 인프라 아키텍처: AI 에이전트로 4개 서비스 굴리기',
    tagline: '개발자 한 명 없이 V0, Cursor, Supabase, Cloudflare로 풀스택 프로덕트를 구축한 실전 파이프라인',
    description: '외주 개발에 수천만 원 쓰지 마세요. 1인 창업가가 AI 코딩 도구와 클라우드 엣지 인프라를 결합하여 월 $42의 최소 비용으로 4개의 상용 웹서비스를 구축하고 무중단 운영하는 전체 아키텍처와 결제 연동 템플릿을 전수합니다.',
    originalPrice: 150000,
    discountRate: 61,
    salePrice: 59000,
    monthlyPrice: '보일러플레이트 코드 포함',
    features: [
      '월 $42로 4개 상용 서비스를 지탱하는 클라우드 인프라 아키텍처 맵',
      'V0 + Cursor + Supabase + Cloudflare Pages 무중단 배포 파이프라인',
      'Toss Payments / Stripe 결제 연동 및 데이터베이스(Neon DB) 템플릿',
      '인프라 비용 누수를 90% 차단하는 토큰 다이어트 & 캐싱 가이드'
    ],
    target: '아이디어는 있지만 개발 비용과 인프라 장벽에 막혀 프로덕트를 띄우지 못하는 1인 빌더',
    highlightProof: '스튜디오 자체 4개 프로덕트 100% 라이브 무중단 운영 중',
    accentColor: '#06b6d4',
  },
  {
    id: '7',
    rank: 7,
    badge: 'NEW',
    category: '실전 그로스 바이블',
    title: '클로드 코드(Claude Code) 완전정복: 터미널로 일하는 1인 창업가의 생산성 치트키',
    tagline: '웹 브라우저 챗봇을 넘어 CLI 에이전트로 코드 리팩토링부터 일괄 배포까지 단숨에 끝내기',
    description: 'Anthropic의 차세대 CLI 에이전트 Claude Code를 실무에 도입하는 가이드입니다. 터미널 파워 커맨드로 반복 파일 정리, 대용량 데이터 일괄 변환, 버그 핫픽스를 10배 빠르게 처리하는 1인 테크 스튜디오의 실제 워크플로우를 담았습니다.',
    originalPrice: 99000,
    discountRate: 60,
    salePrice: 39000,
    monthlyPrice: '터미널 단축키 치트시트 포함',
    features: [
      'Claude Code 설치 및 인증부터 실전 프로젝트 적용 50선',
      '반복 리팩토링 및 텍스트 일괄 변환 자동화 셸 스크립트',
      '컨텍스트 윈도우 비용을 1/5로 아끼는 프롬프트 최적화 기법'
    ],
    target: 'Cursor, Claude Code 등 최신 에이전트 도구로 생산성을 극한으로 올리고 싶은 빌더',
    highlightProof: '사내 전 프로덕트 개발 및 유지보수에 100% 실사용 중',
    accentColor: '#e11d48',
  }
];
