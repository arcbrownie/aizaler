"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Clock, FileCheck, UserCheck } from "lucide-react";

interface CareerHeroProps {
  onOpenBooking: () => void;
}

const ACCENT = "#60A5FA";
const CREAM = "#FAF6F0";
const MUTED = "rgba(250, 246, 240, 0.65)";

export default function CareerHero({ onOpenBooking }: CareerHeroProps) {
  return (
    <section
      style={{
        position: "relative",
        paddingTop: "120px",
        paddingBottom: "80px",
        paddingLeft: "24px",
        paddingRight: "24px",
        maxWidth: "960px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      {/* Glow Backdrop */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "500px",
          height: "300px",
          background: "radial-gradient(circle, rgba(96, 165, 250, 0.15) 0%, rgba(5, 10, 24, 0) 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 16px",
            borderRadius: "9999px",
            background: "rgba(96, 165, 250, 0.08)",
            border: "1px solid rgba(96, 165, 250, 0.25)",
            marginBottom: "24px",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: ACCENT,
            }}
          />
          <span
            style={{
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              color: ACCENT,
              textTransform: "uppercase",
            }}
          >
            aizaler Career Strategy Session
          </span>
        </motion.div>

        {/* Apple Style Bold Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: "clamp(32px, 5.5vw, 54px)",
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            color: CREAM,
            margin: "0 auto 24px",
            maxWidth: "820px",
            wordBreak: "keep-all",
          }}
        >
          이직할 것인가, 버틸 것인가,
          <br />
          아니면 내 일을 시작할 것인가.
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: "clamp(16px, 2.2vw, 20px)",
            fontWeight: 400,
            lineHeight: 1.6,
            color: MUTED,
            maxWidth: "680px",
            margin: "0 auto 40px",
            wordBreak: "keep-all",
          }}
        >
          경력 5~20년차, 다음 선택의 기회비용을 계산하는 50분의 심층 전략 세션.
          감정적 위로를 걷어내고, 철저한 손익과 실행 계획만 남깁니다.
        </motion.p>

        {/* Key Metrics Capsules */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 18px",
              borderRadius: "14px",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(12px)",
            }}
          >
            <UserCheck size={16} color={ACCENT} />
            <span style={{ fontSize: "14px", color: CREAM, fontWeight: 500 }}>
              경력 5~20년차 집중 타깃
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 18px",
              borderRadius: "14px",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(12px)",
            }}
          >
            <Clock size={16} color={ACCENT} />
            <span style={{ fontSize: "14px", color: CREAM, fontWeight: 500 }}>
              50분 집중 화상 세션
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 18px",
              borderRadius: "14px",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(12px)",
            }}
          >
            <FileCheck size={16} color={ACCENT} />
            <span style={{ fontSize: "14px", color: CREAM, fontWeight: 500 }}>
              90일 실행 Action Summary 제공
            </span>
          </div>
        </motion.div>

        {/* Main Hero CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <button
            onClick={onOpenBooking}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "18px 36px",
              fontSize: "16px",
              fontWeight: 700,
              color: "#050A18",
              backgroundColor: CREAM,
              borderRadius: "14px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(250, 246, 240, 0.15)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.02)";
              e.currentTarget.style.boxShadow = "0 14px 40px rgba(250, 246, 240, 0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(250, 246, 240, 0.15)";
            }}
          >
            파일럿 전략 세션 신청하기
            <ArrowDown size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
