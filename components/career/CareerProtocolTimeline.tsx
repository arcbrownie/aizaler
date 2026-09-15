"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Compass, Layers, Scale, Target } from "lucide-react";

const ACCENT = "#60A5FA";
const CREAM = "#FAF6F0";
const CARD_BG = "rgba(15, 23, 42, 0.65)";
const BORDER = "rgba(255, 255, 255, 0.08)";
const MUTED = "rgba(250, 246, 240, 0.65)";

const PROTOCOL_STEPS = [
  {
    step: "01",
    time: "10분",
    title: "현재 상황 진단",
    question: "지금 무엇이 가장 답답하며, 왜 지금 결정을 내려야 하는가?",
    items: [
      "직무 만족도 및 현재 회사 내 체감 한계점",
      "의사결정을 미룰 때 발생하는 잠재적 손실",
    ],
    Icon: Compass,
  },
  {
    step: "02",
    time: "10분",
    title: "진짜 문제 정의",
    question: "진짜 문제는 직무, 회사, 산업, 개인 선택 중 어디에 있는가?",
    items: [
      "단순한 환경 불만과 구조적 한계의 분리",
      "스스로 통제 가능한 변수와 외부 요인 식별",
    ],
    Icon: Layers,
  },
  {
    step: "03",
    time: "20분",
    title: "선택지 손익 비교",
    question: "A/B/C 경로의 기회비용과 성공 확률은 각각 어떻게 되는가?",
    items: [
      "각 경로별 현실적 Upside와 Downside 계산",
      "이동 시 필요한 최소 자원과 실패 리스크 방어",
    ],
    Icon: Scale,
  },
  {
    step: "04",
    time: "10분",
    title: "결론 및 90일 행동 3개",
    question: "앞으로 3개월 동안 당장 착수해야 할 행동은 무엇인가?",
    items: [
      "하지 말아야 할 행동(Stop-list) 확정",
      "향후 90일간 집중할 3대 실행 과제 도출",
    ],
    Icon: Target,
  },
];

export default function CareerProtocolTimeline() {
  return (
    <section
      style={{
        paddingTop: "60px",
        paddingBottom: "100px",
        paddingLeft: "24px",
        paddingRight: "24px",
        maxWidth: "960px",
        margin: "0 auto",
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: "center", marginBottom: "56px" }}>
        <p
          style={{
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            color: ACCENT,
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          Session Protocol
        </p>
        <h2
          style={{
            fontSize: "clamp(26px, 3.8vw, 38px)",
            fontWeight: 800,
            lineHeight: 1.25,
            letterSpacing: "-0.02em",
            color: CREAM,
            margin: 0,
            wordBreak: "keep-all",
          }}
        >
          50분 정밀 의사결정 프로토콜
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: MUTED,
            marginTop: "14px",
            maxWidth: "640px",
            margin: "14px auto 0",
            wordBreak: "keep-all",
          }}
        >
          상담을 단순한 대화로 끝내지 않습니다.
          모든 세션에 동일한 의사결정 프레임워크를 적용하여 명확한 결론을 도출합니다.
        </p>
      </div>

      {/* Protocol Cards (Vertical Steps with Apple Style) */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {PROTOCOL_STEPS.map((step, index) => {
          const { Icon } = step;
          return (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                background: CARD_BG,
                borderRadius: "18px",
                border: `1px solid ${BORDER}`,
                padding: "24px 28px",
                display: "flex",
                alignItems: "flex-start",
                gap: "24px",
                backdropFilter: "blur(20px)",
              }}
            >
              {/* Left Badge: Time & Step */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "72px",
                  height: "72px",
                  borderRadius: "14px",
                  background: "rgba(96, 165, 250, 0.08)",
                  border: "1px solid rgba(96, 165, 250, 0.2)",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    color: ACCENT,
                    letterSpacing: "0.06em",
                  }}
                >
                  STEP {step.step}
                </span>
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: 800,
                    color: CREAM,
                    marginTop: "2px",
                  }}
                >
                  {step.time}
                </span>
              </div>

              {/* Center Content */}
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "6px",
                  }}
                >
                  <Icon size={18} color={ACCENT} />
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      color: CREAM,
                      margin: 0,
                    }}
                  >
                    {step.title}
                  </h3>
                </div>

                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "rgba(250, 246, 240, 0.85)",
                    margin: "0 0 12px",
                    wordBreak: "keep-all",
                  }}
                >
                  {step.question}
                </p>

                {/* Checklist (1-line rule) */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "12px",
                  }}
                >
                  {step.items.map((it, itIdx) => (
                    <div
                      key={itIdx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "13px",
                        color: MUTED,
                        whiteSpace: "nowrap",
                      }}
                    >
                      <CheckCircle2 size={14} color={ACCENT} />
                      <span>{it}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
