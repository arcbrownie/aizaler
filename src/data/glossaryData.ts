export interface GlossaryTerm {
  id: string;
  term: string;
  category: 'AI & 바이브코딩' | '웹 & 배포' | '비즈니스 & 수익화' | '데이터 & 보안';
  simpleDef: string;
  detail: string;
  practicalTip: string;
}

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    id: 'vibe-coding',
    term: '바이브 코딩 (Vibe Coding)',
    category: 'AI & 바이브코딩',
    simpleDef: '문법 몰라도 느낌(Vibe)과 자연어 말빨로 AI 조련해서 서비스를 완성하는 신인류 개발 방식.',
    detail: '복잡한 프로그래밍 언어의 구문을 직접 타이핑하는 대신, Claude Code, Antigravity, Cursor 같은 AI 코딩 에이전트에게 사람이 기획 의도와 원하는 화면을 설명하여 코드를 생성·수정시키는 패러다임입니다.',
    practicalTip: '코드를 한 줄 한 줄 다 읽으려 하지 말고, "내가 원하는 화면과 기능"을 AI한테 얼마나 구체적인 상황극과 조건으로 설명하느냐가 퀄리티를 결정합니다.',
  },
  {
    id: 'lead-magnet',
    term: '리드마그넷 (Lead Magnet)',
    category: '비즈니스 & 수익화',
    simpleDef: '자석(Magnet)처럼 잠재 고객(Lead)의 이메일과 카톡을 끌어당기는 무료 고가치 자료.',
    detail: '온라인 비즈니스와 강의 모객에서 방문자에게 무료 치트시트, 용어집, 템플릿, PDF 등을 제공하는 대가로 연락처나 이메일을 수집하는 마케팅 장치입니다.',
    practicalTip: '100페이지짜리 지루한 전자책보다, 지금 이 용어집처럼 3분 만에 읽고 즉시 써먹을 수 있는 요약본일수록 신청 전환율이 40% 이상 폭발합니다.',
  },
  {
    id: 'tts-stt',
    term: 'TTS & STT (음성 합성 & 음성 인식)',
    category: 'AI & 바이브코딩',
    simpleDef: '글을 사람 목소리로 읽어주는 기술(TTS)과, 말소리를 텍스트로 받아 적어주는 기술(STT).',
    detail: 'TTS(Text-to-Speech)는 타입캐스트(Typecast), ElevenLabs처럼 대본을 자연스러운 AI 성우 목소리로 바꿔줍니다. STT(Speech-to-Text)는 Whisper, Typeless, Vrew처럼 영상이나 녹음본에서 자막과 회의록을 자동으로 추출합니다.',
    practicalTip: '유튜브 쇼츠나 강의를 만들 때 외주 성우비 수십만 원을 쓰지 말고, TTS로 나레이션을 뽑고 STT로 자막을 1초 만에 입히는 워크플로우를 익히면 작업 시간이 80% 단축됩니다.',
  },
  {
    id: 'vercel',
    term: 'Vercel (버셀)',
    category: '웹 & 배포',
    simpleDef: '내가 만든 웹사이트를 전 세계에 1초 만에 무료로 띄워주는 클라우드 호스팅 서비스.',
    detail: 'Next.js를 만든 회사에서 제공하는 글로벌 배포 플랫폼으로, 복잡한 리눅스 서버 설정 없이 Git에 코드를 올리기만 하면 자동으로 빌드하여 라이브 주소(URL)를 생성해 줍니다.',
    practicalTip: '무료 티어(Hobby)만으로도 개인 프로젝트나 사이드 프로젝트, MVP 웹사이트를 트래픽 제한 없이 쾌적하게 서비스할 수 있습니다.',
  },
  {
    id: 'cache-busting',
    term: '캐시 버스팅 (Cache Busting)',
    category: '웹 & 배포',
    simpleDef: '코드를 수정해서 배포했는데 손님 폰에 옛날 화면이 고집스럽게 남아있을 때 뒤통수 때리는 기술.',
    detail: '브라우저나 CDN(콘텐츠 전송 네트워크)이 속도를 빠르게 하려고 이전 버전의 파일과 HTML을 캐싱(저장)해둘 때, 주소 뒤에 고유한 버전 쿼리를 붙여 강제로 새 버전을 불러오게 하는 기법입니다.',
    practicalTip: '새로 배포했는데 모바일에서 옛날 화면이 보이면 주소 뒤에 `?v=1`이나 `?v=new`를 붙여서 공유하거나 열어보세요. 브라우저가 새 페이지로 인식해 즉시 갱신됩니다.',
  },
  {
    id: 'supabase',
    term: 'Supabase (수파베이스)',
    category: '데이터 & 보안',
    simpleDef: '백엔드 개발자 없이도 엑셀 시트 보듯 손님 명단과 비밀번호를 저장하는 클라우드 데이터베이스.',
    detail: '오픈소스 기반의 Firebase 대안으로, 강력한 관계형 데이터베이스(PostgreSQL)를 바탕으로 데이터 저장, 실시간 동기화, 사용자 인증(Auth)을 API 하나로 제공합니다.',
    practicalTip: '구글 설문지나 엑셀로 고객 명단을 모으지 말고, 내 사이트 신청 폼과 Supabase를 직접 연결하면 실시간 정원 카운트와 자동 대기자 큐 처리가 가능해집니다.',
  },
  {
    id: 'rls',
    term: 'RLS (Row Level Security)',
    category: '데이터 & 보안',
    simpleDef: '내 데이터는 나만 보고, 남의 데이터는 절대 못 보게 DB에 쳐두는 자동 보안 자물쇠.',
    detail: '데이터베이스의 각 행(Row)마다 접근 권한 규칙을 설정하여, 비로그인 방문자가 다른 사람의 개인정보(이름, 전화번호, 신청 내역)를 조회하거나 수정하지 못하게 차단하는 기술입니다.',
    practicalTip: 'Supabase를 쓸 때 RLS를 꺼두면 지나가던 누군가가 API를 호출해 손님 명단을 통째로 긁어갈 수 있으니, 무조건 활성화하고 공개 권한을 엄격히 제한해야 합니다.',
  },
  {
    id: 'rate-limiting',
    term: '레이트 리밋 (Rate Limiting)',
    category: '데이터 & 보안',
    simpleDef: '한 사람이 무료 분석이나 질문을 연속 30번씩 눌러서 내 AI API 비용을 털어먹는 것을 막는 방어벽.',
    detail: '특정 IP나 브라우저 식별값에서 정해진 시간 내에 과도하게 많은 요청이 들어올 경우, 서버가 "요청 한도 초과" 오류를 반환하여 시스템 과부하와 유료 LLM 토큰 비용 폭탄을 막는 기법입니다.',
    practicalTip: '무료 사주/운세/AI 분석 서비스를 런칭할 때는 반드시 브라우저 지문이나 IP 기반으로 1일 3회 등의 제한을 걸어두어야 체리피커 유저에게 토큰 비용을 뜯기지 않습니다.',
  },
  {
    id: 'cvr-cliff',
    term: '전환율(CVR) & 클리프(Cliff)',
    category: '비즈니스 & 수익화',
    simpleDef: '무료 미리보기를 보던 손님이 가장 궁금한 순간에 딱 끊어 결제하게 만드는 심리적 절벽 장치.',
    detail: 'CVR(Conversion Rate, 전환율)은 방문자가 유료 결제나 신청으로 이어지는 비율이며, Cliff(절벽)는 "결정적인 해답은 결제 후에 공개됩니다"처럼 호기심이 최고조에 달했을 때 다음 단계로 넘기는 연출 기법입니다.',
    practicalTip: '스레드나 광고에서 약속한 질문과 1차 미리보기의 결론이 일치해야 하며, Cliff에서 엉뚱한 딴소리를 하면 손님은 결제하지 않고 즉시 이탈합니다.',
  },
  {
    id: 'hardware-acceleration',
    term: '하드웨어 가속 (Hardware Acceleration)',
    category: '웹 & 배포',
    simpleDef: '아이폰 사파리에서 3D 시계나 애니메이션이 버벅대거나 투명인간 될 때 그래픽카드(GPU) 강제로 깨우는 부스터.',
    detail: 'CPU 대신 스마트폰이나 PC의 GPU(그래픽 프로세서)를 활용하여 웹 애니메이션을 부드럽게 렌더링하는 기법입니다. 모바일 사파리는 GPU 가속이 안 켜지면 3D 요소가 깨지는 버그가 잦습니다.',
    practicalTip: 'CSS에 `transform: translateZ(0)`이나 `backface-visibility: hidden`을 넣어주면 아이폰 사파리에서도 60fps로 매끄럽게 돌아갑니다.',
  },
  {
    id: 'adsense-cpc',
    term: '애드센스 CPC (Cost Per Click)',
    category: '비즈니스 & 수익화',
    simpleDef: '방문자가 내 블로그 광고 배너 한 번 누를 때마다 통장에 꽂히는 클릭당 수익.',
    detail: '구글 애드센스에서 광고주가 클릭 1회당 지불하는 비용으로, IT/AI/클라우드/개발/비즈니스 같은 고단가 카테고리는 일반 맛집/일상 블로그 대비 5~10배 높은 단가가 책정됩니다.',
    practicalTip: '글 속에 "Next.js", "AI 도구", "클라우드 호스팅" 같은 실무 키워드가 문맥에 맞게 자연스럽게 녹아있을 때 단가가 수천 원대인 고품질 타겟 광고가 매칭됩니다.',
  },
  {
    id: 'eeat',
    term: 'E-E-A-T (구글 검색 상위 노출 4대장)',
    category: '비즈니스 & 수익화',
    simpleDef: '경험(Experience), 전문성(Expertise), 권위(Authoritativeness), 신뢰(Trust) — 구글이 AI 글 거르고 1등 주는 기준.',
    detail: '구글 검색엔진이 문서의 품질을 평가할 때 가장 중요하게 보는 4가지 요소로, 특히 직접 겪은 1인칭 실전 경험(Experience)이 담긴 글이 높은 가산점을 받습니다.',
    practicalTip: '뻔한 백과사전식 설명글은 AI 오버뷰에 밀려 사라지지만, "내가 실제로 이 에러를 마주쳐서 어떻게 삽질하고 해결했는가"를 쓴 글은 구글 1등을 굳건히 지킵니다.',
  },
];
