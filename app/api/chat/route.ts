import { NextResponse } from 'next/server';

export const runtime = 'edge';

interface ChatRequest {
  message: string;
}

const SYSTEM_INSTRUCTION = `
당신은 1인 AI 빌더 스튜디오 'aizaler'의 수석 비즈니스 아키텍트입니다.
방문자가 자신의 비즈니스, 창업, AI 활용 고민을 말하면 남을 비방하지 않고 품격 있고 날카로운 전문성으로 진단합니다.

[aizaler 5단계 완주 커리큘럼 (Builder Curriculum)]
- LEVEL 01 (블루 기초석): 시장 검증 & Aside 자율 리서치 (마일스톤: Aside 24h 시장 감시 봇 & BM 린 캔버스 1장)
- LEVEL 02 (퍼플 지능): 실리콘밸리 Claude 정본 AI 지능 (마일스톤: Anthropic 공식 XML 프롬프트 템플릿 & 지능 파이프라인)
- LEVEL 03 (퍼플➔화이트): 외주비 0원 1인 상용 웹 런칭 (마일스톤: Cursor + Supabase + Cloudflare 상용 웹 1개 라이브 배포)
- LEVEL 04 (레드 핫포인트): 메타 고전환 퍼널 & 소셜 트래픽 (마일스톤: 스레드 알고리즘 & CVR 20% 고전환 퍼널 시스템)
- LEVEL 05 (순백 화이트): 1인 비즈니스 마스터리 & 1:1 VIP (마일스톤: 50분 심층 분석 & 90일 Action Blueprint 처방)

[응답 규칙]
1. 반드시 첫 줄에 [추천 단계: LEVEL 01~05]를 명시하세요.
2. 현재 겪는 막막함에 공감하고, 지금 당장 집중해야 할 손에 잡히는 마일스톤(결과물)을 2~3문장으로 명쾌하게 처방하세요.
3. 남의 강의나 경쟁사를 깎아내리지 말고, 오직 빌더의 실행력과 단계별 조립 무기에 집중하세요.
`;

export async function POST(req: Request) {
  try {
    const { message }: ChatRequest = await req.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: '메시지를 입력해 주세요.' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (apiKey) {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            system_instruction: {
              parts: [{ text: SYSTEM_INSTRUCTION }]
            },
            contents: [
              {
                role: 'user',
                parts: [{ text: message }]
              }
            ],
            generationConfig: {
              temperature: 0.6,
              maxOutputTokens: 500
            }
          })
        }
      );

      if (response.ok) {
        const data = await response.json();
        const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (reply) {
          // Extract recommended step if present (LEVEL 01~05, TRACK 01~05, or STEP 01~05)
          const stepMatch = reply.match(/(?:LEVEL|TRACK|STEP)\s*0?([1-5])/i);
          const detectedStep = stepMatch ? parseInt(stepMatch[1], 10) : 1;

          return NextResponse.json({
            reply,
            step: detectedStep
          });
        }
      }
    }

    // Heuristic Local Consultant Engine (Runs instantly with 0ms latency even without API key)
    const lower = message.toLowerCase();
    let detectedStep = 1;
    let reply = '';

    if (lower.includes('aside') || lower.includes('리서치') || lower.includes('프롬프트') || lower.includes('claude') || lower.includes('gpt') || lower.includes('지능') || lower.includes('xml')) {
      detectedStep = 2;
      reply = `[추천 단계: LEVEL 02. 실리콘밸리 Claude 정본 AI 지능 (퍼플 지능)]\n단순한 검색창 사용에서 벗어나, Anthropic 본사의 공식 XML 구조화 프롬프트와 컨텍스트 엔지니어링을 장착하세요.\n\n🎯 달성 마일스톤: 실리콘밸리 공식 XML 구조화 프롬프트 템플릿 & 기획/작성 10배 자동화 파이프라인`;
    } else if (lower.includes('코딩') || lower.includes('개발') || lower.includes('만들고') || lower.includes('웹') || lower.includes('서비스') || lower.includes('외주') || lower.includes('cursor') || lower.includes('supabase') || lower.includes('런칭')) {
      detectedStep = 3;
      reply = `[추천 단계: LEVEL 03. 외주비 0원 1인 상용 웹 런칭 (퍼플➔화이트)]\n외주 개발사에 수천만 원을 들일 필요가 전혀 없습니다. Cursor, Supabase, Cloudflare를 조립하면 1인 빌더도 3일 만에 상용 웹서비스를 직접 라이브 배포할 수 있습니다.\n\n🎯 달성 마일스톤: 외주비 0원, 내 손으로 직접 띄운 상용 웹서비스 1개 라이브 배포`;
    } else if (lower.includes('광고') || lower.includes('조회수') || lower.includes('트래픽') || lower.includes('전환') || lower.includes('팔로워') || lower.includes('퍼널') || lower.includes('스레드')) {
      detectedStep = 4;
      reply = `[추천 단계: LEVEL 04. 메타 고전환 퍼널 & 소셜 트래픽 (레드 핫포인트)]\n제품을 띄운 뒤 조회수 거품에 갇혀 있을 때가 아닙니다. 광고 카피와 랜딩페이지 첫 문장을 1:1로 일치시켜 클릭한 고객을 실제 결제로 연결하세요.\n\n🎯 달성 마일스톤: 광고 ↔ 랜딩 결속 CVR 20% 고전환 퍼널 시스템 & 첫 결제 발생`;
    } else if (lower.includes('퇴사') || lower.includes('갈림길') || lower.includes('방향') || lower.includes('멘토링') || lower.includes('상담') || lower.includes('진로') || lower.includes('전략')) {
      detectedStep = 5;
      reply = `[추천 단계: LEVEL 05. 1인 비즈니스 마스터리 & 1:1 VIP (화이트 서밋)]\n퇴사나 1인 비즈니스 피봇팅의 중대한 갈림길에서는 감이 아닌 철저한 손익 계산이 우선입니다. 야생에서 4개 프로덕트로 생존한 파운더와 50분간 1:1로 90일 실행 플랜을 처방받으세요.\n\n🎯 달성 마일스톤: 사전 질의서 기반 90일 실행 Action Blueprint & 1:1 심층 처방`;
    } else {
      detectedStep = 1;
      reply = `[추천 단계: LEVEL 01. 시장 검증 & Aside 자율 리서치 (블루 기초)]\n팔리는 제품은 화려한 기능이 아니라 '고객의 실제 결핍'을 데이터로 확인하는 기획에서 출발합니다. Aside 24h 자율 브라우저로 시장 데이터를 수집하고 BM을 검증하세요.\n\n🎯 달성 마일스톤: Aside 24h 시장 감시 봇 & 검증된 BM 린 캔버스 1장 (100% 무료 제공)`;
    }

    return NextResponse.json({
      reply,
      step: detectedStep
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: '일시적인 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.' },
      { status: 500 }
    );
  }
}

