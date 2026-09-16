import { NextResponse } from 'next/server';

export const runtime = 'edge';

interface ChatRequest {
  message: string;
}

const SYSTEM_INSTRUCTION = `
당신은 1인 AI 빌더 스튜디오 'aizaler'의 수석 비즈니스 아키텍트입니다.
사용자가 자신의 1인 비즈니스/창업/AI 활용 고민을 말하면, 남을 비방하지 않고 품격 있고 날카로운 전문성으로 진단합니다.

[aizaler 5단계 빌더 로드맵]
- STEP 01: 시장 검증 & BM 기획 (고객 결핍 검증, 비즈니스 모델 설계)
- STEP 02: Claude Academy 정본 & Aside 24h 자율 리서치 (정본 XML 프롬프트, 24시간 시장 감시)
- STEP 03: 메타 고전환 퍼널 매칭 (광고 카피 ↔ 랜딩페이지 1:1 일치, CVR 20% 퍼널)
- STEP 04: 외주비 0원 1인 풀스택 런칭 (Cursor + Supabase + 결제창 연동)
- STEP 05: 1:1 VIP 프라이빗 전략 세션 (50분 심층 분석 & 90일 Action Blueprint)

[응답 규칙]
1. 반드시 첫 줄에 [추천 단계: STEP 01~05]를 명시하세요.
2. 현재 겪는 막막함에 공감하고, 지금 당장 집중해야 할 첫 번째 실행 블록을 2~3문장으로 명쾌하게 처방하세요.
3. 남의 강의나 경쟁사를 깎아내리지 말고, 오직 사용자의 성장 실행력에 집중하세요.
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
          // Extract recommended step if present
          const stepMatch = reply.match(/STEP\s*0?([1-5])/i);
          const detectedStep = stepMatch ? parseInt(stepMatch[1], 10) : 1;

          return NextResponse.json({
            reply,
            step: detectedStep
          });
        }
      }
    }

    // Heuristic Local Consultant Engine (Runs with 0 latency even without API key)
    const lower = message.toLowerCase();
    let detectedStep = 1;
    let reply = '';

    if (lower.includes('코딩') || lower.includes('개발') || lower.includes('만들고') || lower.includes('웹') || lower.includes('서비스') || lower.includes('외주')) {
      detectedStep = 4;
      reply = `[추천 단계: STEP 04. 1인 풀스택 런칭]\n외주 개발사에 수천만 원을 들일 필요가 전혀 없습니다. Cursor와 Supabase, 토스페이먼츠를 조립하면 1인 빌더도 3일 만에 상용 결제 웹서비스를 띄울 수 있습니다. 지금은 문법 암기가 아닌 완성형 보일러플레이트 조립에 집중하세요.`;
    } else if (lower.includes('광고') || lower.includes('조회수') || lower.includes('트래픽') || lower.includes('전환') || lower.includes('팔로워') || lower.includes('결제')) {
      detectedStep = 3;
      reply = `[추천 단계: STEP 03. 메타 고전환 퍼널 매칭]\n조회수만 터지는 허수 유입에서 벗어날 때입니다. 핵심은 광고 카피와 랜딩페이지 첫 문장을 1:1로 결속시켜 이탈률을 꺾는 것입니다. CVR 20% 퍼널 체크리스트로 첫 고객 결제 전환부터 만드세요.`;
    } else if (lower.includes('프롬프트') || lower.includes('claude') || lower.includes('gpt') || lower.includes('검색') || lower.includes('리서치') || lower.includes('자동화')) {
      detectedStep = 2;
      reply = `[추천 단계: STEP 02. Claude 정본 & 자율 리서치]\n단순한 검색창 사용에서 벗어나, 실리콘밸리 Anthropic 본사의 XML 구조화 프롬프트를 뇌관으로 장착하세요. 여기에 24시간 자율 리서치(Aside)를 결합하면 지능의 레버리지가 극대화됩니다.`;
    } else if (lower.includes('퇴사') || lower.includes('갈림길') || lower.includes('방향') || lower.includes('멘토링') || lower.includes('상담') || lower.includes('진로')) {
      detectedStep = 5;
      reply = `[추천 단계: STEP 05. 1:1 VIP 프라이빗 세션]\n퇴사나 비즈니스 피봇팅의 중대한 갈림길에서는 감이 아닌 철저한 손익 계산이 우선입니다. 파운더와 50분간 1:1로 내 강점 데이터와 90일 실행 Action Blueprint를 직접 설계해 보세요.`;
    } else {
      detectedStep = 1;
      reply = `[추천 단계: STEP 01. 시장 검증 & BM 기획]\n팔리는 제품은 화려한 기능이 아니라 '고객의 결핍'을 데이터로 확인하는 기획에서 출발합니다. 아이디어가 실제 돈을 버는 모델인지 검증하는 첫 번째 기초석부터 단단히 조립하세요.`;
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
