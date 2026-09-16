export interface Product {
  id: string;
  rank: number;
  badge: 'BEST' | 'FREE' | 'HOT' | '선착순' | 'NEW';
  category: 'Aside & 지능 레버리지' | '트래픽 & 퍼널 성장' | '1인 제품 런칭' | '1:1 프라이빗 전략';
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
}

export const PRODUCTS: Product[] = [
  {
    id: 'aside-starter',
    rank: 1,
    badge: 'NEW',
    category: 'Aside & 지능 레버리지',
    mode: 'daily',
    title: 'Aside 브라우저 실전 마스터 & 글로벌 AI 정본 해설 킷',
    tagline: 'Anthropic Claude Academy & Google Gemini 공식 엔지니어링 문서의 한국형 실전 조립법',
    description: '시중의 얕은 인스타 카드뉴스 대신, 앤트로픽(Claude)과 구글(Gemini) 본사가 직접 만든 공식 교과서를 내 업무에 바로 복붙하는 레고 블록으로 정제했습니다. Aside 브라우저로 24시간 자동화하는 시장 리서치 세팅법과 매일 아침 카카오 알림톡 데일리 큐레이션을 함께 제공합니다.',
    originalPrice: 79000,
    discountRate: 63,
    salePrice: 29000,
    monthlyPrice: '데일리 카톡 알림톡 30일 포함',
    features: [
      'Aside 브라우저 설치부터 24시간 자율 리서처 세팅 매뉴얼',
      'Claude Academy 공인 정본: XML 태그 및 정밀 프롬프트 조립 템플릿',
      '구글 Gemini 대용량 컨텍스트 기반 1권 분량 문서 실시간 분석법',
      '출근길 1분 컷 카카오 알림톡 데일리 AI 트렌드 & 팁 30일 발송'
    ],
    target: '매달 AI 구독료는 내는데 단순 검색창으로만 써서 답답한 직장인, 기획자, 1인 사업가',
    highlightProof: 'Anthropic & Google 공식 엔지니어링 도큐먼트 기반 검증',
    accentColor: '#0ea5e9',
  },
  {
    id: '1',
    rank: 2,
    badge: 'BEST',
    category: '트래픽 & 퍼널 성장',
    mode: 'traffic',
    title: '메타 알고리즘 실전 바이블: 허수 조회수를 걷어내고 진짜 구매 고객을 모으는 법',
    tagline: 'Meta 공인 미디어 플래닝 전문가의 스레드 500만 뷰 실측 분석 기반 소셜 알고리즘 실전서',
    description: '조회수만 터지고 실제 결제는 나오지 않는 허수 바이럴의 함정에서 벗어나세요. 실제 데이터 로그와 결제 흐름을 대조해 밝혀낸 소셜 알고리즘의 본질적인 추천 원리와 내 비즈니스에 진성 고객을 유입시키는 검증된 퍼널 구조를 제공합니다.',
    originalPrice: 129000,
    discountRate: 62,
    salePrice: 49000,
    monthlyPrice: 'PDF 140p + 계정 진단 스크립트 제공',
    features: [
      '대중 밈 바이럴과 비즈니스 타겟 유입의 알고리즘 분리 원리',
      '실측 데이터 분석: 진성 잠재 고객이 머무는 최적 도달 구간 분석',
      '방문자를 팔로워와 잠재 고객으로 전환하는 프로필·피드 설계 공식',
      '계정 건강 자동 진단 도구(threads-health.ts) 소스코드 제공'
    ],
    target: '조회수만 터지고 실제 매출이 안 나와 답답한 1인 창업가, 퍼포먼스 마케터, 인디해커',
    highlightProof: 'Meta Certified Media Planning Pro 자격 보유 & 실측 데이터 검증',
    accentColor: '#3182f6',
  },
  {
    id: '3',
    rank: 3,
    badge: 'HOT',
    category: '트래픽 & 퍼널 성장',
    mode: 'traffic',
    title: '메타 광고(Meta Ads) 고전환 퍼널 플레이북',
    tagline: 'Meta 공인 전문가가 직접 검증한 광고 클릭을 이탈 없이 구매로 연결하는 실전 세팅 가이드',
    description: '광고비만 태우고 랜딩페이지에서 고객이 다 빠져나가는 누수를 막으세요. 광고 소재에서 제시한 가치가 랜딩페이지 첫 화면에서 자연스럽게 회수되는 고전환 퍼널 매칭 전략과 실전 세팅 템플릿을 제공합니다.',
    originalPrice: 159000,
    discountRate: 56,
    salePrice: 69000,
    monthlyPrice: '실전 캠페인 세팅 시트 포함',
    features: [
      '단순 호기심 유입 vs 구매 의도 유입 실측 비교 분석',
      '광고 소재 메시지 ↔ 랜딩페이지 첫 문장 1:1 일치 고전환 퍼널 프레임워크',
      '누수 없는 전환 이벤트 배선 및 추적 파라미터 구조',
      '신규 캠페인 런칭 시 즉시 활용 가능한 고전환 카피 템플릿 30선'
    ],
    target: '메타 광고비만 태우고 랜딩페이지에서 고객이 다 이탈해 고통받는 이커머스/SaaS 대표',
    highlightProof: 'Meta 공인 전문가 직접 집행 및 사내 프로덕트 라이브 검증',
    accentColor: '#8b5cf6',
  },
  {
    id: '6',
    rank: 4,
    badge: 'NEW',
    category: '1인 제품 런칭',
    mode: 'build',
    title: '1인 테크 스튜디오 SaaS 인프라 아키텍처: 외주비 0원으로 풀스택 웹서비스 띄우기',
    tagline: '개발자 한 명 없이 Cursor, Supabase, Cloudflare로 풀스택 프로덕트를 구축한 실전 파이프라인',
    description: '외주 개발에 수천만 원 쓰지 마세요. 1인 창업가가 AI 코딩 도구와 클라우드 엣지 인프라를 결합하여 최소 비용으로 상용 웹서비스를 구축하고 무중단 운영하는 전체 아키텍처와 결제 연동 템플릿을 전수합니다.',
    originalPrice: 150000,
    discountRate: 61,
    salePrice: 59000,
    monthlyPrice: '보일러플레이트 코드 포함',
    features: [
      '상용 서비스를 지탱하는 1인 클라우드 인프라 아키텍처 맵',
      'Cursor + Supabase + Next.js 무중단 배포 파이프라인',
      'Toss Payments / 카카오페이 결제 연동 및 데이터베이스 템플릿',
      '인프라 비용 누수를 90% 차단하는 토큰 최적화 & 캐싱 가이드'
    ],
    target: '아이디어는 있지만 개발 비용과 인프라 장벽에 막혀 프로덕트를 띄우지 못하는 1인 빌더',
    highlightProof: '스튜디오 자체 4개 프로덕트 100% 라이브 무중단 운영 중',
    accentColor: '#06b6d4',
  },
  {
    id: '7',
    rank: 5,
    badge: 'NEW',
    category: '1인 제품 런칭',
    mode: 'build',
    title: '클로드 코드(Claude Code) 완전정복: 터미널로 일하는 1인 빌더의 생산성 치트키',
    tagline: '웹 브라우저 챗봇을 넘어 CLI 에이전트로 코드 리팩토링부터 일괄 배포까지 단숨에 끝내기',
    description: 'Anthropic의 차세대 CLI 에이전트 Claude Code를 실무에 도입하는 가이드입니다. 터미널 파워 커맨드로 반복 파일 정리, 대용량 데이터 일괄 변환, 버그 핫픽스를 10배 빠르게 처리하는 1인 테크 스튜디오의 실제 워크플로우를 담았습니다.',
    originalPrice: 99000,
    discountRate: 60,
    salePrice: 39000,
    monthlyPrice: '터미널 단축키 치트시트 포함',
    features: [
      'Claude Code 설치 및 인증부터 실전 프로젝트 적용 50선',
      '반복 리팩토링 및 텍스트 일괄 변환 자동화 셸 스크립트',
      '컨텍스트 윈도우 비용을 절감하는 프롬프트 최적화 기법'
    ],
    target: 'Cursor, Claude Code 등 최신 에이전트 도구로 생산성을 극한으로 올리고 싶은 빌더',
    highlightProof: '사내 전 프로덕트 개발 및 유지보수에 100% 실사용 중',
    accentColor: '#e11d48',
  },
  {
    id: '2',
    rank: 6,
    badge: 'FREE',
    category: 'Aside & 지능 레버리지',
    mode: 'daily',
    title: '스레드 500만 뷰 계정 정상화 & 광고 세팅 실전 무료 가이드 (PDF)',
    tagline: '어려운 IT 용어나 쿼리 몰라도 OK! 내 계정을 빠르게 살려내는 실전 점검 가이드',
    description: '어려운 코딩이나 복잡한 데이터 분석 몰라도 괜찮습니다. 내 글이 왜 스킵당하는지, 어떤 글이 계정을 망치는지 10분 만에 바로잡는 실전 체크리스트와 광고 세팅법을 담은 100% 무료 가이드북을 즉시 보내드립니다.',
    originalPrice: 39000,
    discountRate: 100,
    salePrice: 0,
    monthlyPrice: '100% 무료 자료 즉시 받기',
    features: [
      '조회수 대비 결제 전환 실측 퍼널 분석 성과표',
      '알고리즘 역주행 방지 자가진단 프로토콜',
      '방문자의 시선을 사로잡는 첫 화면 배치도 템플릿',
      '엉뚱한 노출을 청소하는 피드 정돈 매뉴얼'
    ],
    target: '복잡한 이론 대신 당장 써먹을 수 있는 무료 가이드가 필요한 1인 창업가, 크리에이터',
    highlightProof: '이메일 입력 즉시 1초 만에 PDF 무료 자료 발송',
    accentColor: '#10b981',
  },
  {
    id: '4',
    rank: 7,
    badge: '선착순',
    category: '1:1 프라이빗 전략',
    mode: 'vip',
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
  }
];
