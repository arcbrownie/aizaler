"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

interface CareerPilotPricingCardProps {
  onOpenBooking: () => void;
}

const ACCENT = "#60A5FA";
const CREAM = "#FAF6F0";
const CARD_BG = "#08122B";
const MUTED = "rgba(250, 246, 240, 0.65)";

export default function CareerPilotPricingCard({ onOpenBooking }: CareerPilotPricingCardProps) {
  return (
    <section
      style={{
        paddingTop: "40px",
        paddingBottom: "120px",
        paddingLeft: "24px",
        paddingRight: "24px",
        maxWidth: "680px",
        margin: "0 auto",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          background: CARD_BG,
          borderRadius: "28px",
          border: "1px solid rgba(96, 165, 250, 0.35)",
          padding: "48px 36px",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.6)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow Accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "300px",
            height: "150px",
            background: "radial-gradient(circle, rgba(96, 165, 250, 0.2) 0%, rgba(8, 18, 43, 0) 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Pilot Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "6px 14px",
            borderRadius: "9999px",
            background: "rgba(96, 165, 250, 0.12)",
            border: "1px solid rgba(96, 165, 250, 0.3)",
            marginBottom: "20px",
          }}
        >
          <span style={{ fontSize: "12px", fontWeight: 700, color: ACCENT }}>
            PILOT SESSION · 선착순 10명 한정
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: "26px",
            fontWeight: 800,
            color: CREAM,
            margin: "0 0 12px",
          }}
        >
          커리어 의사결정 전략 세션
        </h3>
        <p
          style={{
            fontSize: "15px",
            color: MUTED,
            margin: "0 0 32px",
            wordBreak: "keep-all",
          }}
        >
          사전 질문지 분석 + 50분 집중 화상 세션 + Action Summary 요약본
        </p>

        {/* Pricing Box */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "36px",
          }}
        >
          <span
            style={{
              fontSize: "18px",
              color: "rgba(250, 246, 240, 0.4)",
              textDecoration: "line-through",
              fontWeight: 500,
            }}
          >
            79,000원
          </span>
          <span
            style={{
              fontSize: "44px",
              fontWeight: 800,
              color: CREAM,
              letterSpacing: "-0.03em",
            }}
          >
            49,000원
          </span>
          <span style={{ fontSize: "14px", color: ACCENT, fontWeight: 600 }}>
            (파일럿 혜택가)
          </span>
        </div>

        {/* Feature List (1-line rule) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            textAlign: "left",
            maxWidth: "420px",
            margin: "0 auto 40px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: CREAM }}>
            <Check size={16} color={ACCENT} style={{ flexShrink: 0 }} />
            <span style={{ whiteSpace: "nowrap" }}>사전 질문지 및 핵심 갈림길 정밀 검토</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: CREAM }}>
            <Check size={16} color={ACCENT} style={{ flexShrink: 0 }} />
            <span style={{ whiteSpace: "nowrap" }}>50분 실시간 화상 세션 (10-10-20-10 프레임)</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: CREAM }}>
            <Check size={16} color={ACCENT} style={{ flexShrink: 0 }} />
            <span style={{ whiteSpace: "nowrap" }}>선택지 손익 비교 및 기회비용 정밀 산출</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: CREAM }}>
            <Check size={16} color={ACCENT} style={{ flexShrink: 0 }} />
            <span style={{ whiteSpace: "nowrap" }}>향후 90일 실행 과제 및 Action Summary 조판</span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={onOpenBooking}
          style={{
            width: "100%",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            padding: "18px 24px",
            fontSize: "16px",
            fontWeight: 700,
            color: "#050A18",
            backgroundColor: CREAM,
            borderRadius: "14px",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 10px 30px rgba(250, 246, 240, 0.2)",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.02)";
            e.currentTarget.style.boxShadow = "0 14px 40px rgba(250, 246, 240, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(250, 246, 240, 0.2)";
          }}
        >
          지금 파일럿 세션 신청하기
          <ArrowRight size={16} />
        </button>

        {/* Footer Note */}
        <p
          style={{
            fontSize: "12px",
            color: "rgba(250, 246, 240, 0.45)",
            marginTop: "16px",
            marginBottom: 0,
          }}
        >
          * 파일럿 10세션 마감 후 정규 가격(79,000원)으로 자동 전환됩니다.
        </p>
      </motion.div>
    </section>
  );
}
