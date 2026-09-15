export interface Product {
  id: string;
  rank: number;
  badge: 'BEST' | 'FREE' | 'HOT' | '선착순' | 'NEW';
  category: '실전 전자책 & 템플릿' | '무료 성장 워크북' | '14일 액션 챌린지' | '1:1 프라이빗 처방';
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
    category: '실전 전자책 & 템플릿',
    title: '월 2만 원 AI 구독료 뽕뽑기: 내 본업 가치 10배 만드는 AI 레버리지 실무 가이드',
    tagline: '단순 번역·요약에서 탈피하여 챗GPT·Claude를 기획·마케팅·보고서 전담 부사수로 세팅하고 성장하는 법',
    description: '매달 2~3만 원씩 내면서 정작 이메일 몇 줄 번역하고 끄시나요? 툴이 부족한 게 아니라 내 업무 프로세스에 AI를 물리는 구체적 관점이 없었을 뿐입니다. 챗GPT와 Claude를 내 본업의 1등 부사수로 세팅하여 야근을 없애고, 확보된 시간으로 내 본업의 성과와 커리어 가치를 10배로 증폭시키는 실전 프롬프트 50선과 업무 파이프라인을 전수합니다.',
    originalPrice: 79000,
    discountRate: 63,
    salePrice: 29000,
    monthlyPrice: '일시불 소장 (평생 업데이트)',
    features: [
      '110페이지 분량 직무별 AI 뽕뽑기 ➔ 성장 실전 핸드북 (PDF)',
      '실무에서 즉시 복사해 붙여넣는 고순도 시스템 프롬프트 50선',
      '기획서 초안 15분 완성 & 마케팅 카피 20선 자동화 템플릿',
      '비개발자를 위한 무료 API 기반 노코드 자동화 파이프라인'
    ],
    target: '매달 AI 구독료는 꼬박꼬박 내지만, 제대로 활용하지 못해 답답하고 이제는 AI로 진짜 내 가치를 올리고 싶은 직장인 및 프리랜서',
    highlightProof: '수강생 94%가 학습 3일 이내 주당 7.5시간 이상 실무 시간 단축 및 성과 창출',
    accentColor: '#3182f6',
  },
  {
    id: '2',
    rank: 2,
    badge: 'FREE',
    category: '무료 성장 워크북',
    title: 'AI 뽕뽑기 ➔ 초격차 성장 로드맵: 3단계 실무 프롬프트 치트키 30선',
    tagline: '내 직무에 맞는 최적 툴 선별부터 본업 3배 레버리지까지 한 권으로 끝내는 워크북',
    description: '단순 요약 질문은 이제 그만. 챗GPT, Claude, Perplexity를 활용해 시장조사, 기획서 작성, 데이터 분석을 단 15분 만에 끝내는 실전 프롬프트 30선과 직무별 성장 로드맵을 100% 무료로 배포합니다.',
    originalPrice: 29000,
    discountRate: 100,
    salePrice: 0,
    monthlyPrice: '100% 무료 즉시 다운로드',
    features: [
      '기획·마케팅·데이터 직무별 10배 뽕뽑는 시스템 프롬프트 30선',
      '99%가 모르는 3단계 프롬프트 피드백 루프 엔지니어링',
      '월 28,000원 본전 10배 회수하는 주간 업무 자동화 체크리스트',
      '구독 해지 시에도 기존 프롬프트와 데이터 백업하는 실무 팁'
    ],
    target: 'AI를 제대로 써서 내 일의 퀄리티와 속도를 근본적으로 업그레이드하고 싶은 모든 빌더',
    highlightProof: '다운로드 즉시 평균 주당 5시간 이상 실무 업무 시간 회수 검증',
    accentColor: '#10b981',
  },
  {
    id: '3',
    rank: 3,
    badge: 'HOT',
    category: '14일 액션 챌린지',
    title: 'AI 1인 빌더 14일 챌린지: 내 본업 업무 3개 자동화부터 첫 웹서비스 런칭까지',
    tagline: '이론 강의는 그만. 매일 20분씩 따라 하며 내 손으로 실전 프로덕트를 띄우는 실행형 부트캠프',
    description: '영상을 보기만 하는 강의는 결국 작심삼일로 끝납니다. 14일간 매일 전달되는 구체적인 단일 액션 미션을 수행하며, 자료 수집·주간 보고서 작성·소셜 콘텐츠 초안 등 내 업무 중 가장 귀찮은 3가지를 AI로 자동화하고 나만의 랜딩페이지까지 런칭해 봅니다.',
    originalPrice: 199000,
    discountRate: 50,
    salePrice: 99000,
    monthlyPrice: '완주 시 100% 리워드 혜택',
    features: [
      '14일간 매일 아침 제공되는 1일 1실행 액션 미션 가이드',
      '실무 막힘을 즉시 뚫어주는 전용 슬랙/디스코드 질문 채널',
      '1인 스튜디오 실사용 노코드 자동화 & 바이브코딩 템플릿',
      '미션 완주자 대상 1:1 개인화 프로덕트 서면 피드백 제공'
    ],
    target: '혼자서는 자꾸 미루게 되어 강제성과 동료 빌더들의 피드백 속에서 실무 루틴을 바꾸고 싶은 분',
    highlightProof: '챌린지 수료율 89%, 14일 만에 일상 업무 3건 이상 자동화 달성',
    accentColor: '#8b5cf6',
  },
  {
    id: '4',
    rank: 4,
    badge: '선착순',
    category: '1:1 프라이빗 처방',
    title: '1:1 AI 커리어 리포지셔닝 & 맞춤형 업무 자동화 워크플로우 진단',
    tagline: '실제 1인 기업으로 월 $42 인프라를 운영하는 빌더가 60분간 내 업무 병목을 뜯어고쳐 드립니다',
    description: '남들의 프롬프트 템플릿이 내 일에 맞지 않는 이유는 업무 맥락이 다르기 때문입니다. 현재 지출 중인 AI 구독 내역과 실제 일하시는 업무 화면을 함께 보며, 당신의 직무에 최적화된 1:1 커스텀 파이프라인을 구축하고 커리어 가치를 2배로 올리는 방향을 설계합니다.',
    originalPrice: 250000,
    discountRate: 40,
    salePrice: 149000,
    monthlyPrice: '월 5팀 한정 예약제',
    features: [
      '사전 서면 진단: 현재 AI 활용 수준 및 업무 병목 정밀 분석',
      '60분 프라이빗 온라인 1:1 심층 컨설팅 (Zoom)',
      '내 직무만을 위해 맞춤 설계된 커스텀 시스템 프롬프트 & 도구 맵',
      '컨설팅 후 2주간 실행 질의응답 및 후속 피드백 채널 제공'
    ],
    target: '시간이 가장 아까운 팀장, 1인 사업가, 프리랜서로서 나만을 위한 맞춤형 AI 정답이 필요한 분',
    highlightProof: '컨설팅 만족도 99.2%, 1인당 평균 주당 8.5시간 실무 단축 처방',
    accentColor: '#f59e0b',
  },
  {
    id: '5',
    rank: 5,
    badge: 'NEW',
    category: '실전 전자책 & 템플릿',
    title: '클로드 코드(Claude Code) 완전정복: 터미널로 일하는 사람들의 AI 치트키',
    tagline: '웹 브라우저 챗봇을 넘어 터미널에서 AI 에이전트로 파일 정리부터 자동화까지 단숨에 끝내기',
    description: 'Anthropic이 공개한 차세대 CLI AI 에이전트 Claude Code를 실무에 도입하는 가이드입니다. 복잡한 코딩이 아니더라도 로컬 문서 정리, 대용량 파일 일괄 변환, 데이터 추출 등 터미널 파워 커맨드로 생산성을 극한으로 올립니다.',
    originalPrice: 99000,
    discountRate: 50,
    salePrice: 49000,
    monthlyPrice: '일시불 소장 (터미널 단축키 사전)',
    features: [
      'Claude Code 설치부터 실무 단축 명령어 50선 (PDF)',
      '반복 파일 정리 및 텍스트 일괄 변환 자동화 스크립트',
      '컨텍스트 비용을 1/5로 아끼는 토큰 다이어트 가이드'
    ],
    target: 'Cursor, Claude Code 등 최신 에이전트 도구로 한 차원 높은 생산성을 경험하고 싶은 빌더',
    highlightProof: '자체 4개 프로덕트 운영에 100% 실사용 중인 명령어 셋',
    accentColor: '#ec4899',
  },
  {
    id: '6',
    rank: 6,
    badge: 'NEW',
    category: '실전 전자책 & 템플릿',
    title: '고전환 상세페이지 & 숏폼 후킹 레퍼런스 실전 키트',
    tagline: '고객의 지갑을 열게 만드는 인간 심리 관통 카피 구조와 숏폼 콘티 370선',
    description: '아무리 좋은 AI를 써도 팔리지 않는다면 무용지물입니다. 1억 이상의 매출을 기록한 고전환 상세페이지의 뼈대와 클릭률을 3배로 끌어올린 실전 후킹 카피 레퍼런스를 제공합니다.',
    originalPrice: 120000,
    discountRate: 51,
    salePrice: 59000,
    monthlyPrice: '일시불 소장 (카피 분석서 포함)',
    features: [
      '설득형 상세페이지 구조 분석 레퍼런스 (PDF)',
      '시선을 사로잡는 썸네일/도입부 카피 205선',
      '알고리즘 추천을 유도하는 참여형 숏폼 콘티 77선'
    ],
    target: '랜딩페이지나 소셜 콘텐츠의 이탈률이 높아 전환율을 개선하고 싶은 마케터 및 사업가',
    highlightProof: '스튜디오 자체 프로덕트 상세페이지에 100% 반영된 표준 템플릿',
    accentColor: '#06b6d4',
  },
  {
    id: '7',
    rank: 7,
    badge: 'NEW',
    category: '실전 전자책 & 템플릿',
    title: '바이럴 심리 공학 & 훈수 경제학 소셜 플레이북',
    tagline: '인간의 훈수 본능을 자극하여 자극적인 밈 없이도 체류 시간을 4배로 끌어올리는 바이럴 공식',
    description: '왜 사람들은 완벽한 강의보다 미숙한 언더독의 고군분투에 열광할까요? 심리학의 비나인 매조키즘과 한국인의 훈수 본능을 접목하여 댓글과 체류 시간을 폭발시키는 실전 계정 운영 매뉴얼입니다.',
    originalPrice: 150000,
    discountRate: 47,
    salePrice: 79000,
    monthlyPrice: '일시불 소장 (플레이북 전문)',
    features: [
      '댓글 100개 이상 유발하는 12대 훈수 유발 장치 설계도',
      '체류 시간 400% 극대화 숏폼/스레드 구조 템플릿',
      '실제 실측 계정 2개 운영 A/B 테스트 데이터 리포트'
    ],
    target: '광고비 지출 없이 오가닉 소셜 바이럴로 찐팬과 유기적 트래픽을 모으고 싶은 분',
    highlightProof: '단 2개 포스트로 누적 댓글 110개 돌파 및 2.4만 뷰 실측 달성',
    accentColor: '#e11d48',
  }
];
