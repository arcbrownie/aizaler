"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, Building2, Cpu, Rocket } from "lucide-react";

const ACCENT = "#60A5FA";
const CREAM = "#FAF6F0";
const CARD_BG = "rgba(15, 23, 42, 0.65)";
const BORDER = "rgba(255, 255, 255, 0.08)";
const MUTED = "rgba(250, 246, 240, 0.65)";

const DILEMMAS = [
  {
    id: "job-change",
    title: "이직·직무 전환",
    subtitle: "현재 경력의 시장 가치와 타이밍",
    description:
      "지금 옮기는 것이 커리어 점프인가, 아니면 연봉과 평판을 깎아먹는 성급한 탈출인가? 다른 산업/직무 이동 가능성과 손익 분기점을 계산합니다.",
    points: [
      "현재 경력의 실제 시장가치 진단",
      "이직 시기와 연봉 협상 손익 계산",
      "직무 전환 시 기회비용과 성공 확률",
    ],
    Icon: Briefcase,
    colSpan: 7,
  },
  {
    id: "promotion",
    title: "승진·조직 내 성장",
    subtitle: "지금 회사에 더 남을 가치",
    description:
      "사내 정치와 평가 구조 속에서 버티면 다음 단계가 열리는가, 아니면 소모되는 자리인가? 사내 이동과 외부 이동의 득실을 가릅니다.",
    points: [
      "승진 가능성과 그 이후의 실익",
      "조직 내 포지셔닝과 사내 정치 방어",
      "사내 부서 이동 vs 외부 이직 판단",
    ],
    Icon: Building2,
    colSpan: 5,
  },
  {
    id: "business",
    title: "직장인 → 사업·독립",
    subtitle: "사이드 프로젝트와 퇴사 시점",
    description:
      "10년 이상의 전문성을 1인 비즈니스나 부업으로 전환할 수 있는가? 본업을 유지하며 검증할 MVP 모델과 실제 퇴사 타이밍을 설계합니다.",
    points: [
      "사업 아이디어의 시장성 및 MVP 설계",
      "본업 유지 vs 전업 창업 손익 분기",
      "안전한 퇴사 시점과 현금 흐름 방어",
    ],
    Icon: Rocket,
    colSpan: 5,
  },
  {
    id: "ai-leverage",
    title: "AI/AX 커리어 레버리지",
    subtitle: "기술 변화를 위협이 아닌 도구로",
    description:
      "내 직무가 대체될까 불안해하는 대신, AI를 나만의 레버리지로 삼아 생산성과 협상력을 2배로 끌어올리는 구체적 활용 전략을 만듭니다.",
    points: [
      "현재 직무의 AI 영향도와 방어선",
      "AI를 업무 생산성 레버리지로 쓰는 법",
      "조직 안에서 차별화된 역할 선점",
    ],
    Icon: Cpu,
    colSpan: 7,
  },
];

export default function CareerBentoGrid() {
  return (
    <section
      style={{
        paddingTop: "60px",
        paddingBottom: "100px",
        paddingLeft: "24px",
        paddingRight: "24px",
        maxWidth: "1000px",
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
          Key Decision Tracks
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
          경력 5~20년차의 4대 의사결정 트랙
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: MUTED,
            marginTop: "14px",
            maxWidth: "600px",
            margin: "14px auto 0",
            wordBreak: "keep-all",
          }}
        >
          추상적인 조언 대신, 실제 경력 데이터와 시장 현실을 기반으로 선택지를 가릅니다.
        </p>
      </div>

      {/* Bento Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: "20px",
        }}
      >
        {DILEMMAS.map((item, index) => {
          const { Icon } = item;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                gridColumn: `span ${item.colSpan}`,
                background: CARD_BG,
                borderRadius: "20px",
                border: `1px solid ${BORDER}`,
                padding: "32px",
                position: "relative",
                overflow: "hidden",
                backdropFilter: "blur(20px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "280px",
              }}
            >
              <div>
                {/* Header with Icon */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: "rgba(96, 165, 250, 0.1)",
                      border: "1px solid rgba(96, 165, 250, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={22} color={ACCENT} />
                  </div>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "rgba(250, 246, 240, 0.4)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    TRACK 0{index + 1}
                  </span>
                </div>

                {/* Titles */}
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: CREAM,
                    margin: "0 0 6px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: ACCENT,
                    margin: "0 0 16px",
                  }}
                >
                  {item.subtitle}
                </p>

                {/* Body Description */}
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.6,
                    color: MUTED,
                    margin: "0 0 24px",
                    wordBreak: "keep-all",
                  }}
                >
                  {item.description}
                </p>
              </div>

              {/* Point Checklist (1-line rule) */}
              <div
                style={{
                  borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                  paddingTop: "18px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                {item.points.map((pt, pIdx) => (
                  <div
                    key={pIdx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "13px",
                      color: "rgba(250, 246, 240, 0.85)",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    <ArrowUpRight size={14} color={ACCENT} style={{ flexShrink: 0 }} />
                    <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{pt}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns"] > div {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}
