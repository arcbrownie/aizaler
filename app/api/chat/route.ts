import { NextResponse } from 'next/server';

export const runtime = 'edge';

interface ChatRequest {
  message: string;
}

const SYSTEM_INSTRUCTION = `
당신은 1인 AI 빌더 스튜디오 'aizaler'의 수석 비즈니스 아키텍트입니다.
방문자가 자신의 비즈니스, 창업, AI 활용 고민을 말하면 남을 비방하지 않고 품격 있고 날카로운 전문성으로 진단합니다.

[aizaler 5대 성장 트랙 (Builder Tracks)]
- TRACK 01 (블루 기초): 시장 검증 & BM 기획 (결과물: BM 린 캔버스 1장 & 고객 결핍 검증표)
- TRACK 02 (퍼플 지능): Aside 자율 리서치 & 정본 AI (결과물: Aside 24h 시장 감시 봇 & Anthropic 공식 XML 프롬프트)
- TRACK 03 (레드 핫포인트): 메타 고전환 퍼널 매칭 (결과물: 광고 ↔ 랜딩 1:1 결속 CVR 20% 퍼널 시스템)
- TRACK 04 (퍼플➔화이트): 외주비 0원 1인 상용 웹 런칭 (결과물: Cursor + Supabase + Cloudflare 상용 웹 1개 배포)
- TRACK 05 (순백 화이트): 1:1 VIP 프라이빗 전략 마스터리 (결과물: 50분 심층 분석 & 90일 Action Blueprint 처방)

[응답 규칙]
1. 반드시 첫 줄에 [추천 단계: TRACK 01~05]를 명시하세요.
2. 현재 겪는 막막함에 공감하고, 지금 당장 집중해야 할 손에 잡히는 목표 결과물을 2~3문장으로 명쾌하게 처방하세요.
3. 남의 강의나 경쟁사를 깎아내리지 말고, 오직 빌더의 실행력과 차별화된 조립 무기에 집중하세요.
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
          // Extract recommended step if present (TRACK 01~05 or STEP 01~05)
          const stepMatch = reply.match(/(?:TRACK|STEP)\s*0?([1-5])/i);
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
      reply = `[추천 단계: TRACK 02. Aside 자율 리서치 & 정본 AI (퍼플 지능)]\nAside 브라우저를 켜두면 24시간 시장 트렌드와 경쟁사 데이터를 자동으로 수집하고, Anthropic 공식 XML 프롬프트로 10배의 지능 레버리지를 만듭니다.\n\n🎯 목표 결과물: Aside 24h 자율 시장 감시 봇 & Claude 공식 XML 구조화 프롬프트 템플릿`;
    } else if (lower.includes('광고') || lower.includes('조회수') || lower.includes('트래픽') || lower.includes('전환') || lower.includes('팔로워') || lower.includes('퍼널')) {
      detectedStep = 3;
      reply = `[추천 단계: TRACK 03. 메타 고전환 퍼널 매칭 (레드 핫포인트)]\n조회수 거품에 갇혀 있을 때가 아닙니다. 핵심은 광고 카피와 랜딩페이지 첫 문장을 1:1로 일치시켜 이탈률을 꺾고 구매로 연결하는 것입니다.\n\n🎯 목표 결과물: 광고 ↔ 랜딩 결속 CVR 20% 고전환 퍼널 시스템 완성`;
    } else if (lower.includes('코딩') || lower.includes('개발') || lower.includes('만들고') || lower.includes('웹') || lower.includes('서비스') || lower.includes('외주') || lower.includes('cursor') || lower.includes('supabase') || lower.includes('런칭')) {
      detectedStep = 4;
      reply = `[추천 단계: TRACK 04. 외주비 0원 1인 상용 웹 런칭 (퍼플➔화이트)]\n외주 개발사에 수천만 원을 들일 필요가 전혀 없습니다. Cursor, Supabase, Cloudflare를 조립하면 1인 빌더도 직접 상용 웹서비스를 라이브 배포할 수 있습니다.\n\n🎯 목표 결과물: 외주비 0원, 내 손으로 직접 띄운 상용 웹서비스 1개 라이브 배포`;
    } else if (lower.includes('퇴사') || lower.includes('갈림길') || lower.includes('방향') || lower.includes('멘토링') || lower.includes('상담') || lower.includes('진로') || lower.includes('전략')) {
      detectedStep = 5;
      reply = `[추천 단계: TRACK 05. 1:1 VIP 프라이빗 전략 마스터리 (화이트 서밋)]\n퇴사나 신사업 피봇팅의 중대한 갈림길에서는 감이 아닌 철저한 손익 계산이 우선입니다. 야생에서 4개 프로덕트로 생존한 파운더와 50분간 1:1로 90일 실행 플랜을 처방받으세요.\n\n🎯 목표 결과물: 사전 질의서 기반 90일 실행 Action Blueprint & 1:1 심층 처방`;
    } else {
      detectedStep = 1;
      reply = `[추천 단계: TRACK 01. 시장 검증 & BM 기획 (블루 기초)]\n팔리는 제품은 화려한 기능이 아니라 '고객의 실제 결핍'을 데이터로 확인하는 기획에서 출발합니다. 아이디어가 실제 돈이 되는지 검증하는 첫 번째 기초석부터 단단히 조립하세요.\n\n🎯 목표 결과물: 검증된 BM 린 캔버스 1장 & 고객 결핍 검증표 (100% 무료 제공)`;
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

