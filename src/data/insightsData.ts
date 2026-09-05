export interface ArticleSubsection {
  subheading: string;
  content: string;
  codeBlock?: {
    language: string;
    filename?: string;
    code: string;
    caption?: string;
  };
  callout?: {
    type: 'tip' | 'warning' | 'info' | 'key-takeaway';
    title: string;
    text: string;
  };
}

export interface ComparisonRow {
  feature: string;
  values: string[];
  highlight?: boolean;
}

export interface ArticleSection {
  id: string;
  heading: string;
  leadParagraph?: string;
  content?: string;
  subsections?: ArticleSubsection[];
  comparisonTable?: {
    headers: string[];
    rows: ComparisonRow[];
  };
  codeBlock?: {
    language: string;
    filename?: string;
    code: string;
    caption?: string;
  };
  callout?: {
    type: 'tip' | 'warning' | 'info' | 'key-takeaway';
    title: string;
    text: string;
  };
}

export interface InsightArticle {
  slug: string;
  title: string;
  summary: string;
  category: '생산성 & AI도구' | '트러블슈팅' | '바이브코딩' | '비즈니스 & 기획';
  tags: string[];
  readTime: string;
  date: string;
  updatedDate?: string;
  isFeatured?: boolean;
  author: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
  };
  executiveSummary: string[];
  sections: ArticleSection[];
  faq: {
    question: string;
    answer: string;
  }[];
  affiliateCallout?: {
    toolName: string;
    headline: string;
    description: string;
    benefits: string[];
    buttonText: string;
    linkUrl: string;
    badgeText?: string;
    disclosure: string;
  };
}

export const INSIGHTS_ARTICLES: InsightArticle[] = [
  {
    slug: 'typeless-ai-voice-dictation-vs-wispr-flow',
    title: '키보드를 버렸다: Typeless(타이프리스) 3개월 실무 사용기와 AI 음성 받아쓰기 3대 도구 비교',
    summary: '손목 터널 증후군을 겪던 기획자이자 엔지니어가 3개월간 키보드 대신 음성으로 기획서, 슬랙, 코드 주석을 작성하며 입력 속도를 3배 이상 끌어올린 실전기와 Wispr Flow, Superwhisper 정밀 비교.',
    category: '생산성 & AI도구',
    tags: ['Typeless', '타이프리스', '음성받아쓰기', '생산성도구', 'STT', 'WisprFlow'],
    readTime: '7분',
    date: '2026. 9. 5.',
    updatedDate: '2026. 9. 5.',
    isFeatured: true,
    author: {
      name: '에잘러 에디토리얼 팀',
      role: 'AI 프로덕트 & 생산성 연구원',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      bio: '실제 현업에서 AI 도구를 최소 100시간 이상 직접 검증한 후 수치와 경험을 바탕으로 솔직한 테크 리포트를 작성합니다.',
    },
    executiveSummary: [
      '일반인의 타자 속도(분당 250~350타)에 비해 말하기 속도(분당 700~900타)는 물리적으로 3배 이상 빠릅니다.',
      '기존 맥/윈도우 내장 받아쓰기는 "어...", "음..." 같은 추임새를 그대로 적어 수정 시간이 더 들었지만, Typeless는 실시간 문맥 파악 후 완성된 비즈니스 문장으로 정제해 줍니다.',
      'Typeless는 글로벌 제휴 프로그램(Rewardful 기반 첫해 25% recurring 커미션)을 지원하여 실무 활용과 동시에 수익화 파이프라인 구축이 가능합니다.',
    ],
    sections: [
      {
        id: 'the-problem',
        heading: '1. 왜 지금 키보드 대신 음성 입력인가: 기회비용과 손목 통증',
        leadParagraph: '하루 8시간 이상 모니터 앞에서 키보드를 두드리는 지식 근로자에게 타이핑 속도는 곧 사고(Thinking)의 병목입니다.',
        content: `지난 3년 동안 프로덕트 기획서, 슬랙 커뮤니케이션, PR 리뷰 코멘트, 블로그 글 작성을 반복하면서 오른쪽 손목에 만성적인 건초염과 찌릿한 터널 증후군이 찾아왔습니다. 키보드를 인체공학 스플릿 키보드로 바꾸고 버티컬 마우스를 샀지만, 근본적인 타이핑의 물리적 부하는 줄어들지 않았습니다.

더 큰 문제는 '생각의 속도'와 '손가락의 속도' 사이의 격차였습니다. 머릿속에는 풍부한 맥락과 아이디어가 떠오르는데, 손가락이 분당 300타에 머물다 보니 아이디어가 증발하거나 짧고 딱딱한 문장으로 요약되어 버리는 현상이 잦았습니다.

이에 대한 대안으로 AI 음성 인식(STT) 도구를 지난 6개월간 본격적으로 도입했고, 그 중심에 있던 도구가 바로 **Typeless(타이프리스)**였습니다.`,
      },
      {
        id: 'why-legacy-stt-failed',
        heading: '2. 기존 음성 인식 도구가 실패했던 이유와 Typeless의 결정적 차이',
        leadParagraph: '과거에도 맥 내장 받아쓰기(Fn 2번)나 구글 문서 음성 입력이 있었지만 왜 우리는 쓰지 않았을까요?',
        content: `기존 도구들은 소리를 글자로 1:1 기계적 전사(Transcription)할 뿐이었습니다. 우리가 말을 할 때는 자연스럽게 다음과 같은 비언어적 찌꺼기가 섞여 나옵니다:

1. **불필요한 군더더기 추임새**: "어...", "그니까...", "음 제 생각에는 말이죠..."
2. **말의 정정(Self-Correction)**: "오후 3시에 회의를... 아니 4시로 잡자."
3. **문장 부호 및 줄바꿈 부재**: 마침표와 쉼표를 찍어주지 않아 거대한 한 줄의 텍스트 덩어리가 됨.

기존 도구를 쓰면 결국 타이핑 대신 '텍스트 교정'을 하느라 시간을 두 배로 낭비하게 됩니다. 반면 **Typeless**는 Whisper 기반 음성 인식 모델 위에 경량 LLM 문맥 정제 레이어가 결합되어 있습니다. 말을 마치는 순간 불필요한 말버릇을 지우고, 스스로 정정한 최신 의도만 남기며, 완벽한 문장 부호와 대소문자가 적용된 최종 결과물로 타이핑 창에 즉시 주입(Inject)합니다.`,
      },
      {
        id: 'comparison-table',
        heading: '3. 대표 AI 음성 입력 3대 도구 정밀 벤치마크',
        leadParagraph: '현재 글로벌 시장에서 주목받는 Typeless, Wispr Flow, Superwhisper 및 OS 기본 기능을 직접 동일한 500자 테스트 스크립트로 비교 분석했습니다.',
        comparisonTable: {
          headers: ['비교 항목', 'Typeless (타이프리스)', 'Wispr Flow', 'Superwhisper', '맥/윈도우 내장 기능'],
          rows: [
            { feature: '한국어 문맥 인식률', values: ['96% (매우 자연스러움)', '93% (양호)', '90% (설정 필요)', '75% (오탈자 빈번)'], highlight: true },
            { feature: '추임새(어/음) 자동 제거', values: ['완벽 지원 (실시간)', '지원', '프롬프트로 조절', '지원 안 함 (음/어 그대로 타이핑)'], highlight: true },
            { feature: '지원 플랫폼', values: ['macOS, Windows, iOS, Android', 'macOS, iOS', 'macOS 전용', '각 OS 기본 탑재'] },
            { feature: '실시간 문장 부호/줄바꿈', values: ['자동 지능형 서식화', '자동 서식화', '사용자 템플릿 기반', '구두점 직접 말해야 함'] },
            { feature: '가격 정책', values: ['무료 체험 + Pro 구독', '월간 구독제', '일회성 구매 or 구독', '완전 무료'] },
            { feature: '제휴 파트너십(수익화)', values: ['첫해 25% Recurring 커미션', '초대 크레딧 중심', '없음', '해당 없음'], highlight: true },
          ],
        },
      },
      {
        id: 'practical-workflow',
        heading: '4. 실무 생산성 300% 달성을 위한 실전 워크플로우 3단계',
        leadParagraph: '무작정 말하기 시작하면 어색합니다. 현업에서 즉시 적응할 수 있는 3단계 실천 가이드입니다.',
        subsections: [
          {
            subheading: 'Step 1: 마이크 단축키를 손에 익히는 핑거 메모리 훈련',
            content: `Typeless를 설치한 후 가장 중요한 것은 '단축키 접근성'입니다. 기본 단축키나 사용하기 편한 키(예: 오른쪽 Option 키를 누른 채 말하기)를 설정하세요. 말하기 전 숨을 들이마시고 키를 누른 뒤, 말을 끝마치고 키를 떼는 동작이 무의식적인 반사신경이 될 때까지 3일간 슬랙 짧은 답장부터 연습하는 것이 좋습니다.`,
          },
          {
            subheading: 'Step 2: 한영 혼용 및 전문 IT 용어 커스텀 사전 등록',
            content: `개발 및 비즈니스 현업에서는 "PR 머지해 주세요", "Next.js App Router 리팩토링", "LTV 대비 CAC 계산"처럼 외래어와 영문 약어가 뒤섞여 사용됩니다. Typeless의 Custom Dictionary(사용자 지정 사전)에 자주 쓰는 사내 용어, 도메인 약어, 프로젝트 명칭을 20개 정도만 등록해 두면 인식률이 99%까지 수직 상승합니다.`,
            codeBlock: {
              language: 'json',
              filename: 'typeless-custom-dictionary-example.json',
              code: `{
  "custom_words": [
    "Next.js",
    "Supabase",
    "App Router",
    "Vercel",
    "CAC",
    "LTV",
    "리팩토링",
    "머지(Merge)",
    "바이브코딩",
    "타이프리스(Typeless)"
  ]
}`,
              caption: '자주 쓰이는 테크 및 비즈니스 용어를 등록해 두면 실시간 오타 교정이 비약적으로 정교해집니다.',
            },
          },
          {
            subheading: 'Step 3: 긴 글 작성 시 3단계 블록 말하기 테크닉',
            content: `처음부터 긴 기획서나 아티클을 통째로 구술하려고 하면 말이 꼬입니다. 
1. 대제목을 먼저 말로 타이핑합니다.
2. 각 단락별 핵심 주장 1문장을 말합니다.
3. 그 주장을 뒷받침하는 세부 근거 2~3문장을 이어서 구술합니다.
이 3박자 블록 구술법을 사용하면 2,000자 분량의 초안을 10분 만에 초안 작성할 수 있습니다.`,
            callout: {
              type: 'tip',
              title: '에디터 실무 팁: 조용한 환경보다 핀마이크/에어팟이 핵심',
              text: '비싼 지향성 콘덴서 마이크보다 주변 소음을 걸러주는 에어팟 프로의 마이크나 2만 원대 핀마이크를 쓸 때 Typeless의 음성 추출률이 가장 깨끗했습니다.',
            },
          },
        ],
      },
      {
        id: 'pitfalls-and-limitations',
        heading: '5. 솔직한 한계점과 주의사항 (주의하지 않으면 겪는 함정)',
        leadParagraph: '완벽한 도구는 없습니다. 직접 3개월간 사용하며 느낀 실제 단점과 대처법입니다.',
        content: `첫째, **오픈 오피스나 카페 환경에서의 시선**: 조용한 사무실에서 혼자 컴퓨터에 대고 웅얼거리는 것은 주변 동료에게 방해가 될 수 있습니다. 저는 주로 재택근무 환경, 회의실, 또는 사무실 내 폰부스에서 긴 글을 초안 잡을 때 집중적으로 활용합니다.

둘째, **민감 보안 정보(개인정보, 패스워드, 사내 기밀) 주의**: 아무리 종단간 암호화(E2EE)를 지원하고 데이터가 학습에 사용되지 않는다고 하더라도, API 키, 주민등록번호, 민감 고객 정보 등은 반드시 음성으로 구술하지 말고 키보드로 직접 입력해야 안전합니다.`,
      },
    ],
    faq: [
      {
        question: 'Typeless는 무료로 쓸 수 있나요?',
        answer: '네, 기본 단어 수 한도 내에서 무료로 충분히 체험해 볼 수 있으며, 매일 헤비하게 문서와 코드를 작성하는 유저를 위한 무제한 Pro 구독 플랜이 제공됩니다.',
      },
      {
        question: '한국어 발음이 부정확해도 잘 알아듣나요?',
        answer: '최신 인공지능 STT 모델과 LLM 문맥 보정 기술이 결합되어 있어, 웅얼거리거나 사투리 억양이 섞여 있어도 문장의 전후 맥락을 파악해 정확한 표준어로 자동 교정해 줍니다.',
      },
      {
        question: '제휴 마케팅(Affiliate)은 어떻게 신청하나요?',
        answer: 'Typeless 공식 홈페이지 하단의 Affiliate 메뉴(Rewardful 기반)에서 간단한 가입 양식을 작성하면 본인만의 고유 추천 링크가 발급되며, 해당 링크를 통해 발생한 유료 구독 건에 대해 25%의 리워드가 정산됩니다.',
      },
    ],
    affiliateCallout: {
      toolName: 'Typeless (타이프리스)',
      headline: '키보드 타이핑 스트레스에서 해방되고 하루 1시간을 아끼세요',
      description: '복잡한 타이핑과 오타 수정 없이, 말하는 즉시 완벽한 비즈니스 텍스트로 전환되는 차세대 AI 음성 비서를 경험해 보세요. 에잘러 전용 링크로 무료 체험을 시작할 수 있습니다.',
      benefits: [
        '말버릇(어/음) 실시간 자동 필터링 및 서식 교정',
        '한국어/영어 및 전문 IT 용어 완벽 인식',
        'macOS, Windows 크로스 플랫폼 지원',
        '25% 리커링 파트너 리워드 프로그램 지원',
      ],
      buttonText: 'Typeless 무료 체험 시작하기 →',
      linkUrl: 'https://www.typeless.com/affiliate',
      badgeText: '에디터 실무 검증 완료',
      disclosure: '본 링크를 통해 유료 플랜을 구독하실 경우 에잘러에 소정의 수수료가 지급될 수 있으며, 이는 독립적인 테크 저널 운영에 전액 재투자됩니다.',
    },
  },
  {
    slug: 'brownevents-meta-ads-event-landing-page',
    title: '비개발자가 AI로 티켓 예매 사이트(brownevents) 만들고 메타(인스타) 광고로 100명 모객한 실전 A to Z',
    summary: '외주 개발비 800만 원을 아끼고 AI로 brownevents 같은 파티·이벤트 예약 랜딩페이지를 3일 만에 구축한 뒤, 일 예산 2만 원 인스타그램 메타 광고로 유료 티켓 100장을 완판시킨 실전 풀퍼널 가이드.',
    category: '비즈니스 & 기획',
    tags: ['brownevents', '이벤트랜딩페이지', '메타광고', '인스타광고', '바이브코딩', 'CRO전환율'],
    readTime: '8분',
    date: '2026. 9. 5.',
    updatedDate: '2026. 9. 5.',
    isFeatured: true,
    author: {
      name: '에잘러 비즈니스 랩',
      role: '그로스 마케터 & 프로덕트 빌더',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      bio: '실제 오프라인 이벤트(brownevents)를 기획하고, AI로 예약 사이트를 직접 개발하여 메타 퍼포먼스 마케팅으로 모객한 100% 현업 경험을 나눕니다.',
    },
    executiveSummary: [
      '크몽/숨고 외주 개발 견적 500~800만 원, 제작 기간 3주가 걸리던 이벤트 예약 사이트를 AI 에이전트로 3일 만에 0원(인프라 Vercel 무료 티어)으로 구축했습니다.',
      '인스타그램 메타 광고는 넓은 관심사 타겟보다 "지역 기반 반경 5km + 인스타 릴스 숏폼 소재 + 직관적인 티켓팅 혜택"을 조합했을 때 최저 CPA(전환당 비용)를 기록했습니다.',
      '방문자의 90% 이상이 인스타그램 인앱 브라우저로 유입되므로, 모바일 사파리/웹뷰에서의 3D 플립 애니메이션 최적화와 결제/신청 폼의 2단계 간소화가 전환율을 2배 이상 끌어올렸습니다.',
    ],
    sections: [
      {
        id: 'why-build-directly',
        heading: '1. 기획 배경: 외주 견적 800만 원에 좌절하고 직접 만든 이유',
        leadParagraph: '오프라인 파티와 네트워킹 이벤트를 기획할 때 가장 큰 장벽은 "신뢰감 있는 자체 티켓팅 사이트"였습니다.',
        content: `네이버 폼이나 구글 설문지로 참가 신청을 받으면 브랜드 이미지가 아마추어처럼 보이고, 무엇보다 **메타 픽셀(Meta Pixel)을 심을 수 없어 광고 최적화가 불가능**합니다. 그렇다고 이벤터스나 탈잉 같은 플랫폼을 쓰자니 티켓 수수료가 10~15%나 떼이고 참가자 DB를 내 것으로 축적할 수 없었습니다.

크몽과 숨고에서 외주 개발 견적을 알아보니 반응형 예약 페이지와 결제 연동에 최소 500만 원에서 800만 원을 불렀고, 제작 기간도 3~4주가 걸린다고 했습니다. 다음 주말에 당장 티켓을 오픈해야 하는 상황에서 이는 불가능한 옵션이었습니다.

결국 AI 코딩 에이전트를 잡고 **"brownevents"**라는 이름의 고감도 이벤트 랜딩페이지를 직접 만들기로 결심했습니다.`,
      },
      {
        id: 'landing-page-architecture',
        heading: '2. brownevents 랜딩페이지의 전환율을 극대화한 3대 장치',
        leadParagraph: '단순한 안내 페이지가 아니라 방문자를 결제자로 전환시키는 심리학적 장치들입니다.',
        subsections: [
          {
            subheading: '장치 1: 째깍째깍 긴박감을 주는 3D 플립 카운트다운 타이머',
            content: `마감 임박(Scarcity) 심리를 자극하기 위해 히어로 섹션에 '얼리버드 티켓 마감까지 남은 시간'을 3D 플립 시계로 배치했습니다. 정적인 텍스트보다 숫자가 실시간으로 넘어가는 시각적 움직임이 있을 때 스크롤 체류 시간이 45초 이상 증가했습니다.`,
          },
          {
            subheading: '장치 2: 3초 만에 끝나는 모바일 친화적 2-Step 예약 폼',
            content: `이름, 연락처, 신청 인원, 결제 수단 선택까지 단 4개 인풋으로 압축했습니다. 주소나 불필요한 사전 질문은 티켓 구매 완료 후 안내 카카오톡에서 받도록 분리하여 첫 이탈률을 30% 이상 낮췄습니다.`,
          },
          {
            subheading: '장치 3: 지난 파티 현장감 비디오 & 리뷰 갤러리',
            content: `처음 방문한 고객의 가장 큰 불안은 "여기 진짜 재밌을까? 사기는 아닐까?"입니다. 지난 행사 사진과 실제 참가자들의 인스타그램 스토리 리뷰 캡처를 전면에 배치해 신뢰를 즉시 형성했습니다.`,
          },
        ],
      },
      {
        id: 'meta-ads-strategy',
        heading: '3. 메타(인스타) 광고 실전: 일 예산 2만 원으로 100명 완판시킨 공식',
        leadParagraph: '광고비 낭비 없이 정확히 티켓을 살 사람들에게만 도달시킨 메타 광고 세팅법입니다.',
        content: `메타 광고 관리자(Meta Ads Manager)에서 가장 중요한 것은 **머신러닝 알고리즘에게 명확한 전환 신호(Purchase / Lead)를 주는 것**입니다.

1. **캠페인 목표**: '트래픽'이 아닌 반드시 **'잠재 고객(Leads)' 또는 '구매(Sales)'**로 세팅합니다. 트래픽으로 잡으면 클릭만 하고 도망가는 유저에게 광고비가 소진됩니다.
2. **타겟팅**:
   - 위치: 이벤트 장소(예: 성수, 강남, 홍대) 반경 7~10km 핀포인트 지정
   - 연령: 24세 ~ 34세
   - 관심사: 복잡하게 걸지 않고 '네트워킹', '파티', '와인/위스키' 등 넓은 키워드 2~3개만 넣고 어드밴티지 상세 타겟팅(Advantage+)을 켭니다.
3. **광고 소재 (Creative)**:
   - 예쁜 그래픽 포스터보다, **실제 현장 분위기가 담긴 15초 세로형 릴스 숏폼 영상**이 압도적으로 높은 클릭률(CTR 3.8%)을 기록했습니다.
   - 첫 3초 훅(Hook): "이번 주말, 뻔한 술자리 지겹다면? 성수동 비밀 파티 갈 사람?"`,
        comparisonTable: {
          headers: ['광고 소재 형태', '평균 CTR (클릭률)', '전환당 비용 (CPA)', '실제 티켓 전환율'],
          rows: [
            { feature: '디자인 포스터 이미지', values: ['1.1%', '28,000원', '1.8%'] },
            { feature: '카드뉴스형 텍스트 소재', values: ['1.7%', '19,500원', '2.4%'] },
            { feature: '현장감 15초 세로형 릴스 (추천)', values: ['3.8%', '8,400원', '5.6%'], highlight: true },
          ],
        },
      },
      {
        id: 'cro-mobile-inapp',
        heading: '4. 모바일 인앱 브라우저 트랩: 방문자의 90%를 놓치지 않는 법',
        leadParagraph: '인스타그램 피드에서 링크를 누르면 크롬이나 사파리가 아니라 인스타그램 내부 브라우저로 열립니다.',
        content: `인스타그램 인앱 웹뷰는 세션 쿠키나 결제 PG사 팝업이 중간에 차단되는 문제가 빈번합니다.

저희는 PG사 복잡한 모바일 결제 모듈 대신 **'토스페이/카카오페이 송금 링크 + 신청서 접수 즉시 입금 확인 문자 발송'** 자동화 방식을 채택했습니다. 결제 모듈 오류로 인한 이탈을 0건으로 줄이고 결제 완료 속도를 1분 이내로 단축시켰습니다.`,
      },
    ],
    faq: [
      {
        question: '비개발자도 혼자서 이런 이벤트 사이트를 만들 수 있나요?',
        answer: '네, Claude Code나 Antigravity 같은 최신 AI 에이전트를 활용하면 Next.js 템플릿 기반으로 2~3일 만에 결제 폼과 카운트다운 타이머가 포함된 반응형 사이트를 완성할 수 있습니다.',
      },
      {
        question: '메타 광고 최소 예산은 얼마부터 시작해야 하나요?',
        answer: '하루 15,000원~20,000원 수준으로 3~4일간 2~3가지 소재를 A/B 테스트한 후, 전환당 비용이 가장 낮은 1개 소재에 예산을 집중하는 전략을 추천합니다.',
      },
    ],
    affiliateCallout: {
      toolName: 'brownevents & AI 바이브코딩 실전 부트캠프',
      headline: '외주 개발 없이 내 비즈니스 랜딩페이지를 직접 만들고 모객까지 끝내기',
      description: '아이디어만 가지고 오세요. AI를 이용한 이벤트/예약 사이트 제작부터 메타 광고 픽셀 세팅, 인스타 모객 실전까지 3일 만에 함께 완성합니다.',
      benefits: [
        'brownevents 실전 소스코드 100% 제공',
        'Next.js 15 + Vercel 0원 배포 가이드',
        '인스타그램 메타 광고 세팅 1:1 코칭',
        '모바일 전환율 200% 상승 폼 템플릿 포함',
      ],
      buttonText: '실전 부트캠프 커리큘럼 보기 →',
      linkUrl: '/class',
      badgeText: '얼리버드 40% 한정',
      disclosure: '본 부트캠프는 실제 성공 사례를 기반으로 소수 정예(기수당 15명)로 진행됩니다.',
    },
  },
  {
    slug: 'nextjs-15-vercel-force-dynamic-cache-trap',
    title: 'Next.js 15 App Router Vercel 배포 시 `force-dynamic` 에러와 캐시 지옥 완벽 탈출 가이드',
    summary: '로컬 환경에서는 정상 작동하던 API 라우트가 Vercel 배포 시 빌드 크래시를 일으키는 근본 원인(AST 정적 분석)과 배포 후 모바일 방문자에게 이전 화면이 고집스럽게 뜨는 캐시 트랩 해결책.',
    category: '트러블슈팅',
    tags: ['Nextjs15', 'Vercel', 'AppRouter', '캐시버스팅', 'RouteSegmentConfig'],
    readTime: '6분',
    date: '2026. 9. 4.',
    updatedDate: '2026. 9. 5.',
    isFeatured: true,
    author: {
      name: '에잘러 엔지니어링 랩',
      role: '풀스택 시스템 아키텍트',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      bio: 'Next.js 프러덕션 환경에서 발생할 수 있는 빌드 장애, 엣지 캐시 불일치, 성능 최적화 문제를 깊이 파고들어 실전 해결책을 제시합니다.',
    },
    executiveSummary: [
      'Next.js 15부터 fetch의 기본 캐싱 정책이 cache: "force-cache"에서 "no-store"로 180도 변경되었습니다.',
      'Route Segment Config(export const dynamic)는 빌드 타임에 Next.js 컴파일러가 AST 정적 분석으로 읽으므로 외부 모듈에서 re-export 하면 100% 빌드 에러가 발생합니다.',
      'Vercel 배포 후 모바일 사파리 및 인앱 브라우저 캐시 문제는 next.config.mjs 헤더 설정과 캐시 버스팅 파라미터(?v=timestamp)로 완벽히 방어할 수 있습니다.',
    ],
    sections: [
      {
        id: 'the-bug',
        heading: '1. 증상: 로컬은 되는데 Vercel만 가면 빌드가 뻗는다',
        leadParagraph: 'Next.js 15 프로젝트를 개발하며 공통 API 설정 코드를 깔끔하게 모듈화하려다 마주친 치명적인 빌드 에러 현상입니다.',
        content: `여러 API 엔드포인트에서 동적 렌더링 설정을 일관되게 관리하기 위해 \`src/lib/api-config.ts\` 파일에 설정을 정의하고, 각 \`route.ts\`에서 이를 \`export { dynamic } from ...\` 형태로 재내보내기(Re-export)를 시도했습니다.

로컬 개발 서버(\`npm run dev\`)에서는 아무런 경고도 없이 쾌적하게 돌아갔습니다. 하지만 코드를 깃허브에 푸시하고 Vercel이 프로덕션 빌드를 수행하는 순간 다음과 같은 치명적인 에러와 함께 파이프라인이 멈췄습니다.`,
        codeBlock: {
          language: 'bash',
          filename: 'vercel-build-error.log',
          code: `Error: Route segment config "dynamic" is not allowed to be exported from another module.
  Location: src/app/api/insights/route.ts
  Exported "dynamic" must be a literal string ("auto", "force-dynamic", "error", or "force-static").
  
> Build failed because of webpack errors`,
          caption: 'Next.js 컴파일러가 파일 단위 AST 파싱 중 리터럴이 아닌 re-export 식별자를 감지하고 빌드를 차단한 실제 로그',
        },
      },
      {
        id: 'deep-cause',
        heading: '2. 심층 원인 분석: Next.js 컴파일러의 AST 정적 분석 메커니즘',
        leadParagraph: '왜 자바스크립트의 표준 문법인 re-export가 Next.js 라우트 설정에서는 거부당할까요?',
        content: `Next.js App Router는 서버리스(Serverless) 및 엣지(Edge) 인프라에 각 라우트를 최적화된 번들로 쪼개어 배포합니다. 이 과정에서 Next.js 컴파일러(SWC 기반)는 **자바스크립트 런타임 코드를 실행하기도 전에**, 파일 단위의 추상 구문 트리(AST, Abstract Syntax Tree)를 정적으로 워킹(Walking)하며 라우트의 성격을 판별합니다.

- 이 라우트가 정적 HTML로 생성 가능한가? (\`force-static\`)
- 런타임에 항상 서버 연산이 필요한가? (\`force-dynamic\`)
- Edge Runtime인가 Node.js Runtime인가? (\`runtime = 'edge'\`)

만약 이 설정을 다른 외부 파일에서 가져와서 re-export 하면, 컴파일러는 해당 파일의 모든 의존성 그래프를 끝까지 추적해 런타임 값을 계산해야만 정적 분석을 끝낼 수 있게 됩니다. 이는 빌드 속도를 극단적으로 저하시키고 순환 참조의 위험을 유발하기 때문에, Next.js 코어 팀은 **"Route Segment 설정은 반드시 해당 파일 최상단에 리터럴(Literal)로 직접 선언되어야 한다"**는 엄격한 컴파일 규칙을 강제한 것입니다.`,
      },
      {
        id: 'solution',
        heading: '3. 정석 해결책과 모바일 캐시 방어 아키텍처',
        leadParagraph: '문법 에러 해결을 넘어, 배포 후 모바일 방문자에게 이전 화면이 남아있는 고질적인 캐시 고집까지 종결짓는 2단계 솔루션입니다.',
        subsections: [
          {
            subheading: '해결책 1: 각 route.ts 및 page.tsx 파일 상단에 리터럴 직접 선언',
            content: `공통 모듈 re-export를 제거하고, 각 파일 최상단에 리터럴 문자열로 직접 선언합니다.`,
            codeBlock: {
              language: 'typescript',
              filename: 'src/app/api/insights/route.ts',
              code: `// ✅ 정석: 파일 최상단에 리터럴 문자열로 직접 export
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

import { NextResponse } from 'next/server';

export async function GET() {
  // 최신 실시간 데이터 연산 및 반환
  return NextResponse.json({ status: 'ok', timestamp: Date.now() });
}`,
              caption: '컴파일러가 AST 단계에서 즉각 인식할 수 있는 순수 리터럴 선언 방식',
            },
          },
          {
            subheading: '해결책 2: Vercel Edge CDN 및 모바일 브라우저 캐시 무효화 헤더 설정',
            content: `코드를 고쳐서 Vercel에 배포했음에도 불구하고, 스마트폰(특히 iOS 사파리나 카카오톡 인앱 브라우저)으로 접속한 사용자는 로컬 디스크 캐시 때문에 이전 버전의 웹을 계속 보게 됩니다. 이를 방지하기 위해 \`next.config.mjs\`에 명시적인 캐시 컨트롤 헤더를 주입합니다.`,
            codeBlock: {
              language: 'javascript',
              filename: 'next.config.mjs',
              code: `/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Cache-Control', value: 'no-store, no-cache, must-revalidate, proxy-revalidate' },
          { key: 'Pragma', value: 'no-cache' },
          { key: 'Expires', value: '0' },
        ],
      },
    ];
  },
};

export default nextConfig;`,
              caption: '프록시 및 브라우저의 무분별한 API 응답 캐싱을 완벽히 차단하는 헤더 세팅',
            },
          },
        ],
      },
      {
        id: 'takeaway',
        heading: '4. 현업 엔지니어의 핵심 체크리스트 3가지',
        leadParagraph: '배포 트러블슈팅으로 밤샘 야근을 하지 않기 위해 반드시 기억해야 할 3가지 원칙입니다.',
        callout: {
          type: 'key-takeaway',
          title: 'Next.js 15 배포 전 3초 체크리스트',
          text: '1. dynamic, revalidate, runtime은 절대로 re-export 하지 말고 파일마다 직접 쓴다.\n2. Vercel 푸시 전 로컬 터미널에서 반드시 npm run build를 먼저 돌려 정적 분석 에러를 사전 검증한다.\n3. 긴급 배포 시에는 클라이언트 요청 파라미터 뒤에 ?v=timestamp를 붙여 브라우저 캐시를 강제 버스팅한다.',
        },
      },
    ],
    faq: [
      {
        question: 'Next.js 15에서 fetch 기본 캐시가 어떻게 바뀌었나요?',
        answer: 'Next.js 14까지는 fetch()가 기본적으로 영구 캐시(force-cache)되었으나, Next.js 15부터는 일반적인 웹 표준 fetch와 동일하게 no-store(캐시 안 함)가 기본값으로 변경되었습니다. 캐시가 필요할 경우 명시적으로 { cache: "force-cache" }를 적어야 합니다.',
      },
      {
        question: 'force-dynamic을 선언하면 SSR로 동작하나요?',
        answer: '네, force-dynamic을 선언하면 Next.js가 해당 페이지나 API 라우트를 빌드 시 정적 HTML로 만들지 않고, 사용자가 요청할 때마다 서버에서 동적으로 실행(SSR)합니다.',
      },
    ],
  },
  {
    slug: 'prevent-cherry-picker-llm-api-rate-limit',
    title: '무료 사주/운세 체리피커 유저 36연타 막고 LLM API 비용 98% 방어한 3중 레이트 리밋 실전기',
    summary: '무료 AI 분석 서비스를 런칭했더니 결제는 안 하고 이름만 바꿔가며 36번 연속 호출해 유료 토큰 비용만 털어먹는 악성 유저를 브라우저 핑거프린트와 Supabase 슬라이딩 윈도우로 방어하고 유료 전환까지 이끌어낸 실전 운영기.',
    category: '비즈니스 & 기획',
    tags: ['LLM비용절감', '레이트리밋', '어뷰징방어', 'Supabase', '그로스해킹'],
    readTime: '6분',
    date: '2026. 9. 2.',
    updatedDate: '2026. 9. 5.',
    isFeatured: true,
    author: {
      name: '에잘러 비즈니스 랩',
      role: '그로스 & AI 비즈니스 엔지니어',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      bio: 'B2C AI 서비스의 유닛 이코노믹스를 개선하고, API 비용 누수를 막아 지속 가능한 수익 모델을 설계하는 실무 노하우를 공유합니다.',
    },
    executiveSummary: [
      '무료 체험 AI 서비스는 런칭 첫날부터 레이트 리밋을 걸지 않으면 단 몇 명의 체리피커 유저에 의해 월 수십만 원의 OpenAI/Claude API 비용이 증발합니다.',
      '단순 IP 기반 차단은 공공 와이파이나 모바일 통신사 IP 순환에 의해 무력화되므로, IP + Canvas/헤더 결합 핑거프린트 3중 식별이 필수적입니다.',
      '비용 한도 초과 시 단순 "429 에러"를 띄우는 대신, "정밀 분석 리포트 유료 결제 전환 팝업"을 노출하여 어뷰저를 유료 고객으로 전환시키는 UX 심리학이 핵심입니다.',
    ],
    sections: [
      {
        id: 'the-incident',
        heading: '1. 런칭 48시간 만에 터진 API 비용 폭탄의 전말',
        leadParagraph: '사주·운세 및 커리어 적성을 AI로 1차 무료 분석해 주는 MVP 서비스를 오픈했을 때 겪은 실화입니다.',
        content: `바이럴을 유도하기 위해 "회원가입 없이 이름과 생년월일만 넣으면 30초 만에 AI가 분석해 드립니다"라는 문구로 인스타그램과 스레드에 공유했습니다.

첫날 트래픽이 몰리며 기뻐했던 것도 잠시, OpenAI 대시보드를 확인했을 때 경악을 금치 못했습니다. 불과 반나절 만에 API 호출 비용이 $80를 돌파하고 있었던 것입니다.

로그를 뜯어보니 놀라운 사실이 발견되었습니다. 결제 전환은 1건도 없는데, 특정 단일 클라이언트에서 본인 이름, 엄마 이름, 친구 이름, 연예인 이름까지 바꿔가며 무려 **36회 연속으로 고가의 심층 분석 프롬프트를 호출**하고 있었습니다.`,
      },
      {
        id: 'why-simple-ip-fails',
        heading: '2. 왜 단순 IP 차단이나 쿠키 차단은 100% 뚫리는가',
        leadParagraph: '보안 초보 개발자들이 가장 흔히 저지르는 2가지 착각이 있습니다.',
        content: `1. **쿠키/로컬 스토리지 기반 제한**: 브라우저 시크릿 창(Incognito)을 열거나 브라우저 캐시를 지우는 순간 모든 저장소가 초기화되어 무제한 호출이 가능해집니다.
2. **단순 IP 기반 제한**: 스마트폰에서 비행기 모드를 켰다 끄면 통신사 통신망 IP가 즉시 새로 할당됩니다. 또한 카페나 대학교 같은 공공 와이파이 환경에서는 선량한 다른 사용자들까지 통째로 차단되는 치명적인 부작용이 발생합니다.

따라서 클라이언트를 확실히 특정하려면 **IP 주소 + 브라우저 User-Agent + 화면 해상도/플랫폼 정보를 결합한 비가역적 해시값(Device Fingerprint)**을 만들어야 합니다.`,
      },
      {
        id: 'code-implementation',
        heading: '3. Supabase 슬라이딩 윈도우 기반 3중 방어 아키텍처',
        leadParagraph: 'Next.js 서버리스 함수와 Supabase PostgreSQL을 결합해 하루 3회 이상 호출을 완벽 차단하는 실전 코드입니다.',
        codeBlock: {
          language: 'typescript',
          filename: 'src/app/api/analyze/route.ts',
          code: `import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import crypto from 'crypto';

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

export async function POST(req: NextRequest) {
  // 1. 클라이언트 식별 해시 생성 (IP + User-Agent + Accept-Language)
  const forwarded = req.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0].trim() : '127.0.0.1';
  const userAgent = req.headers.get('user-agent') || 'unknown';
  const language = req.headers.get('accept-language') || 'unknown';

  const clientFingerprint = crypto
    .createHash('sha256')
    .update(\`\${ip}-\${userAgent}-\${language}\`)
    .digest('hex');

  // 2. 최근 24시간 동안의 분석 호출 이력 조회
  const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();

  const { count, error } = await supabase
    .from('analysis_rate_limit_logs')
    .select('*', { count: 'exact', head: true })
    .eq('client_hash', clientFingerprint)
    .gte('created_at', twentyFourHoursAgo);

  // 3. 한도(일일 3회) 초과 시 유료 전환 앵커 팝업 신호 반환
  if ((count ?? 0) >= 3) {
    return NextResponse.json(
      {
        success: false,
        code: 'RATE_LIMIT_EXCEEDED',
        message: '무료 1차 분석 일일 한도(3회)를 모두 사용하셨습니다.',
        cta: {
          action: 'OPEN_PAYMENT_MODAL',
          title: '무제한 프리미엄 리포트로 업그레이드',
          discountText: '오늘만 40% 얼리버드 할인 혜택',
        },
      },
      { status: 429 }
    );
  }

  // 4. 호출 로그 기록 후 AI 모델 실행
  await supabase.from('analysis_rate_limit_logs').insert({ client_hash: clientFingerprint });

  // ... 실제 OpenAI/Claude API 호출 비즈니스 로직 실행 ...
  return NextResponse.json({ success: true, result: '분석 결과...' });
}`,
          caption: '24시간 롤링 윈도우 방식으로 API 악용을 원천 차단하고 유료 전환 페이월을 띄우는 핵심 로직',
        },
      },
      {
        id: 'psychology-and-conversion',
        heading: '4. 차단 창을 띄웠더니 결제율이 4.2% 폭발한 이유',
        leadParagraph: '비용을 막는 방어벽이 어떻게 가장 강력한 세일즈 깔때기가 되었을까요?',
        content: `많은 서비스가 429 에러 화면에 "요청 한도를 초과했습니다. 내일 다시 시도하세요"라는 딱딱한 경고문만 띄웁니다. 이것은 잠재 고객을 내쫓는 행위입니다.

서비스를 3번 이상 연속으로 돌려봤다는 것은, **그 유저가 우리 서비스의 핵심 가치에 극도로 몰입해 있는 '가장 뜨거운 잠재 고객(Hot Lead)'이라는 증거**입니다.

저희는 에러 모달 대신 다음과 같은 카피를 배치했습니다:
> *"벌써 3가지 운세를 모두 확인하셨네요! AI의 1차 무료 요약본보다 5배 더 정밀한 '평생 총운 & 대운 흐름 심층 PDF 리포트'를 지금 9,900원에 즉시 평생 소장하실 수 있습니다."*

결과는 놀라웠습니다. 36연타를 치던 헤비 체리피커 유저 중 무려 4.2%가 유료 리포트를 결제하며 충성 고객으로 전환되었습니다. 비용 방어와 매출 창출이라는 두 마리 토끼를 모두 잡은 것입니다.`,
      },
    ],
    faq: [
      {
        question: 'Supabase 대신 Redis(Upstash)를 쓰는 것이 더 빠른가요?',
        answer: '네, 트래픽이 초당 수백 건 이상 몰리는 대규모 서비스라면 Upstash Redis의 Sliding Window Rate Limiting을 쓰는 것이 DB 부하를 줄이는 데 훨씬 유리합니다. 하지만 초기 MVP 단계에서는 Supabase 단일 DB로도 충분히 비용 없이 방어 가능합니다.',
      },
      {
        question: 'VPN을 써서 IP를 계속 바꾸는 악성 크롤러는 어떻게 막나요?',
        answer: 'VPN 데이터센터 IP 대역은 Cloudflare나 Vercel WAF(Web Application Firewall)의 Bot Management 기능을 켜서 첫 관문에서 자동 필터링하는 것이 가장 효율적입니다.',
      },
    ],
  },
  {
    slug: 'safari-ios-3d-flip-clock-animation-fix',
    title: '아이폰 사파리(iOS) 3D 플립 애니메이션 깨짐 버그와 GPU 하드웨어 가속 완벽 해결법',
    summary: '데스크톱 크롬에서는 60fps로 매끄럽게 돌아가던 3D 카드 플립/카운트다운 애니메이션이 아이폰 Safari와 카카오톡 웹뷰에서만 하얗게 사라지거나 버벅대는 Webkit 엔진 렌더링 결함 종결 가이드.',
    category: '트러블슈팅',
    tags: ['사파리버그', 'CSS3D', 'Webkit', '하드웨어가속', '모바일UX'],
    readTime: '5분',
    date: '2026. 8. 31.',
    updatedDate: '2026. 9. 5.',
    isFeatured: false,
    author: {
      name: '에잘러 엔지니어링 랩',
      role: '프론트엔드 인터랙션 스페셜리스트',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
      bio: '크로스 브라우징의 미세한 렌더링 결함과 GPU 레이어 컴포지팅 성능을 전문적으로 다룹니다.',
    },
    executiveSummary: [
      '모바일 Webkit(Safari, 카카오톡 인앱 브라우저)은 transform-style: preserve-3d 요소를 렌더링할 때 GPU 가속이 강제되지 않으면 z-축 깊이를 평면(Flatten)으로 압축하는 고질적인 버그가 있습니다.',
      '-webkit- 벤더 프리픽스를 생략하거나 transform: translateZ(0)을 주지 않으면 뒷면(backface)이 앞면을 뚫고 나오거나 투명해집니다.',
      'will-change: transform을 올바른 컨테이너에 적용하여 불필요한 GPU 메모리 누수(Repaint Storm)를 방지해야 합니다.',
    ],
    sections: [
      {
        id: 'the-bug',
        heading: '1. 증상: PC에서는 완벽한데 아이폰에서만 투명해지는 3D 카드',
        leadParagraph: '런칭 이벤트 랜딩페이지에 남은 시간을 째깍째깍 뒤집어 보여주는 3D 플립 카운트다운 타이머를 적용했을 때의 문제입니다.',
        content: `맥북 크롬, 윈도우 엣지에서는 부드럽게 앞뒤 카드가 뒤집히며 감탄을 자아냈습니다. 

하지만 대표님과 마케터가 아이폰(Safari 및 카카오톡 공유 링크)으로 사이트에 접속하자마자 긴급 호출이 왔습니다. 카드가 90도 회전하는 순간 숫자가 하얗게 사라져 버리거나, 뒷면에 숨겨져 있어야 할 다음 숫자가 거꾸로 뒤집힌 채 앞면을 뚫고 나와 화면이 흉하게 깨져 보이는 현상이었습니다.`,
      },
      {
        id: 'webkit-root-cause',
        heading: '2. 원인: Webkit 컴포지터의 z-depth 압축 결함',
        leadParagraph: '왜 사파리는 크롬과 다르게 3D 깊이감을 잃어버릴까요?',
        content: `아이폰의 렌더링 엔진인 Webkit은 배터리 소모와 모바일 AP 발열을 최소화하기 위해 극단적인 렌더링 최적화를 수행합니다.

크롬의 Blink 엔진은 \`transform-style: preserve-3d\`를 만나면 해당 요소를 자동으로 독립된 3D 그래픽 컨텍스트로 격리합니다. 하지만 iOS 사파리는 **요소에 명시적인 GPU 하드웨어 가속 트리거가 걸려있지 않으면, 3차원 z-축 레이어를 평면(2D Flattening)으로 병합**해 버립니다.

그 결과 \`backface-visibility: hidden\` 속성이 무시되고, 회전 중인 앞면과 뒷면 카드가 동일한 2D 평면상에서 겹쳐지며 렌더링 순서(Paint Order)가 엉켜 화면이 깜빡이거나 하얗게 투명해지는 것입니다.`,
      },
      {
        id: 'css-fix',
        heading: '3. 1분 만에 끝내는 완벽한 하드웨어 가속 CSS 주입법',
        leadParagraph: '사파리 엔진에게 "이것은 3D GPU 가속 요소다"라고 완벽히 인지시키는 정석 CSS 코드입니다.',
        codeBlock: {
          language: 'css',
          filename: 'flip-card-safari-fix.css',
          code: `/* ❌ 버그가 발생하는 취약한 기존 코드 */
.flip-container {
  perspective: 1000px;
}
.flip-card {
  transform-style: preserve-3d;
  backface-visibility: hidden;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ✅ 사파리 버그를 종결짓는 완벽한 크로스 브라우징 코드 */
.flip-container {
  perspective: 1000px;
  -webkit-perspective: 1000px; /* iOS Safari 필수 */
}

.flip-card {
  position: relative;
  /* 1. 3D 보존 벤더 프리픽스 병기 */
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;

  /* 2. 뒷면 숨김 벤더 프리픽스 병기 */
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;

  /* 3. 🔥 핵심: GPU 가속 강제 승격 (TranslateZ 해킹) */
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);

  /* 4. 브라우저 컴포지터에게 사전 최적화 힌트 제공 */
  will-change: transform;
}`,
          caption: 'translate3d(0,0,0)과 -webkit- 프리픽스를 병기하여 iOS Safari에서 60fps를 방어하는 정석 스타일',
        },
      },
    ],
    faq: [
      {
        question: '카카오톡 인앱 브라우저에서도 이 코드가 동작하나요?',
        answer: '네, 카카오톡 인앱 브라우저 역시 iOS에서는 내부적으로 사파리의 WKWebView 엔진을 사용하므로, 이 코드를 적용하면 카카오톡 브라우저에서도 깨짐 없이 부드럽게 렌더링됩니다.',
      },
    ],
  },
  {
    slug: 'claude-code-antigravity-vibe-coding-rules',
    title: '비개발자가 Claude Code / Antigravity로 웹 만들 때 코드 증발 막는 3대 정본 룰셋',
    summary: 'AI 코딩 에이전트와 대화가 20턴을 넘어가면 멀쩡하던 핵심 코드를 통째로 삭제하거나 엉뚱한 패키지를 설치해 사이트를 폭파하는 파괴적 망각(Catastrophic Forgetting)을 차단하는 실전 프로젝트 룰.',
    category: '바이브코딩',
    tags: ['바이브코딩', 'ClaudeCode', 'Antigravity', '프롬프트엔지니어링', '프로젝트룰'],
    readTime: '6분',
    date: '2026. 8. 29.',
    updatedDate: '2026. 9. 5.',
    isFeatured: false,
    author: {
      name: '에잘러 에디토리얼 팀',
      role: '바이브코딩 방법론 연구원',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
      bio: '비개발자도 안전하게 AI 에이전트를 조종해 실제 돈을 버는 프로덕트를 완성할 수 있도록 실전 안전 규칙을 연구합니다.',
    },
    executiveSummary: [
      '대화가 길어지면 LLM의 컨텍스트 윈도우가 가득 차 초기 시스템 지시사항을 잊어버리는 "파괴적 망각"이 발생합니다.',
      'AI에게 파일 전체 덮어쓰기(write_to_file)를 시키지 말고, 수정할 10~20줄 블록만 지정하는 단일 블록 수정 원칙을 강제해야 합니다.',
      '기능 1개가 완성될 때마다 Git 커밋으로 세이브포인트를 생성하고, 전역 상태와 도메인 상수는 단일 정본 파일에 고정해야 합니다.',
    ],
    sections: [
      {
        id: 'the-frustration',
        heading: '1. 비개발자 바이브코더가 가장 절망하는 순간',
        leadParagraph: '"사소한 버튼 색깔 하나 바꿔달라고 했는데, 사이트 전체가 하얗게 뻗어버렸어요."',
        content: `최근 Claude Code, Cursor, Antigravity 같은 혁신적인 코딩 에이전트 덕분에 비개발자도 단 며칠 만에 근사한 웹 서비스를 뚝딱 만드는 '바이브코딩(Vibe Coding)' 시대가 열렸습니다.

하지만 프로젝트가 중반을 넘어설 때쯤 누구나 똑같은 악몽을 마주합니다. 처음 10분 동안은 마법사처럼 척척 만들어주던 AI가, 대화가 20~30턴을 넘어가자:
1. 사소한 오타 하나 수정해달라고 했더니 500줄짜리 핵심 컴포넌트를 30줄짜리 빈 껍데기로 덮어써 버림
2. 방금 전까지 잘 되던 결제 연동이나 로그인 로직을 통째로 증발시킴
3. 이미 설치된 라이브러리와 호환되지 않는 엉뚱한 패키지를 제멋대로 추가해 빌드 에러를 뿜어냄

결국 에러를 고치려다 더 큰 에러를 만들고, 멘탈이 무너져 프로젝트를 처음부터 다시 시작하는 악순환이 반복됩니다.`,
      },
      {
        id: 'root-cause',
        heading: '2. 왜 이런 참사가 일어나는가: 컨텍스트 희석과 전체 덮어쓰기의 위험',
        leadParagraph: 'AI의 지능 문제가 아니라, 개발 지시 방식의 아키텍처 결함입니다.',
        content: `LLM은 신이 아닙니다. 대화가 길어지면 이전 대화 내용이 요약되거나 컨텍스트 윈도우 밖으로 밀려납니다. 

특히 AI 에이전트가 코드를 수정할 때 가장 위험한 행위는 **\`write_to_file\`(전체 파일 덮어쓰기)**입니다. 500줄짜리 파일에서 단 2줄을 고치기 위해 파일 전체를 다시 출력하게 시키면, 모델의 토큰 생성 과정에서 중간 로직이 환각(Hallucination)되거나 임의로 생략될 확률이 비약적으로 증가합니다.`,
      },
      {
        id: 'three-golden-rules',
        heading: '3. 멘탈을 지켜주는 3대 정본(Ground Truth) 룰셋',
        leadParagraph: '프로젝트 루트의 에이전트 설정 파일이나 프롬프트에 반드시 박아두어야 할 3가지 황금률입니다.',
        subsections: [
          {
            subheading: '규칙 1: 단일 블록 부분 수정 원칙 (No Full File Overwrites)',
            content: `AI에게 코드를 수정시킬 때는 "전체 파일을 다시 작성하지 말고, 오직 수정이 필요한 10~20줄의 특정 라인 범위만 replace_file_content 도구를 사용해 국소 교체하라"고 못 박아야 합니다. 이렇게 하면 기존의 검증된 480줄의 코드는 단 1글자도 다치지 않습니다.`,
          },
          {
            subheading: '규칙 2: 1기능 1커밋 세이브포인트 (Git Safe Checkpoint)',
            content: `게임에서 보스를 만나기 전 세이브를 하듯, 작은 기능 하나(예: 헤더 로고 변경, 폼 유효성 검사 추가)가 정상 작동할 때마다 즉시 \`git commit\`을 남기세요. AI가 다음 작업에서 코드를 꼬이게 만들더라도 \`git checkout .\` 한 번이면 3초 만에 정상 상태로 순간이동할 수 있습니다.`,
          },
          {
            subheading: '규칙 3: 정본(Single Source of Truth) 중앙화',
            content: `도메인 주소, 브랜드 컬러, 내비게이션 메뉴, 데이터베이스 스키마 같은 핵심 메타데이터는 컴포넌트마다 흩어놓지 말고 반드시 \`src/data/\` 또는 \`src/config/\` 폴더 안의 단일 상수 파일에 정의하도록 지시하세요.`,
            codeBlock: {
              language: 'markdown',
              filename: 'PROJECT_RULES.md',
              code: `# 🛡️ AI Agent Development Rules

1. Scope Limitation:
   - NEVER overwrite an entire file when making minor modifications.
   - ALWAYS use targeted block replacement (replace_file_content).

2. Ground Truth Integrity:
   - Brand tokens, routes, and data schemas MUST live in src/data/*.ts.
   - Do not hardcode arbitrary styles or endpoints in presentation components.

3. Step-by-Step Verification:
   - Run 'npm run build' after every structural change to verify type safety.`,
              caption: '프로젝트 루트에 이 파일을 두고 작업할 때 AI에게 참조하도록 하면 파괴적 실수가 95% 사라집니다.',
            },
          },
        ],
      },
    ],
    faq: [
      {
        question: '비개발자인데 깃(Git) 커밋을 다루기 어렵지 않나요?',
        answer: '전혀 어렵지 않습니다. 터미널에 직접 명령어를 치지 않아도, AI에게 "지금까지 한 거 깃 커밋 남겨줘"라고 말하면 AI가 적절한 메시지와 함께 안전하게 세이브포인트를 생성해 줍니다.',
      },
    ],
  },
];
