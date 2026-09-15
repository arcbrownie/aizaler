"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, FileText, ShieldAlert } from "lucide-react";

const ACCENT = "#60A5FA";
const CREAM = "#FAF6F0";
const CARD_BG = "rgba(15, 23, 42, 0.75)";
const BORDER = "rgba(255, 255, 255, 0.08)";
const MUTED = "rgba(250, 246, 240, 0.65)";

export default function CareerActionReportMockup() {
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
          Session Deliverable
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
          상담 후 즉시 전달되는 90일 실행 Action Summary
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
          세션이 끝나면 대화 내용을 잊지 않도록, 도출된 핵심 판단과 90일 행동 지침을 담은
          1~2페이지 분량의 전략 문서를 조판하여 전달합니다.
        </p>
      </div>

      {/* Dark Document Mockup */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6 }}
        style={{
          background: "#081026",
          borderRadius: "24px",
          border: "1px solid rgba(96, 165, 250, 0.25)",
          padding: "36px",
          boxShadow: "0 24px 60px rgba(0, 0, 0, 0.5)",
          position: "relative",
          overflow: "hidden",
          marginBottom: "48px",
        }}
      >
        {/* Document Top Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            paddingBottom: "18px",
            marginBottom: "24px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <FileText size={16} color={ACCENT} />
            <span
              style={{
                fontSize: "13px",
                fontWeight: 700,
                color: CREAM,
                letterSpacing: "0.04em",
              }}
            >
              AIZALER ACTION SUMMARY DOCUMENT
            </span>
          </div>
          <span
            style={{
              fontSize: "11px",
              padding: "4px 10px",
              borderRadius: "6px",
              background: "rgba(96, 165, 250, 0.12)",
              color: ACCENT,
              fontWeight: 600,
            }}
          >
            STRATEGY REPORT
          </span>
        </div>

        {/* Mockup Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Box 1: Core Verdict */}
          <div
            style={{
              padding: "18px 20px",
              borderRadius: "12px",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.06)",
            }}
          >
            <div style={{ fontSize: "12px", color: ACCENT, fontWeight: 600, marginBottom: "4px" }}>
              01. 핵심 판단 (Core Verdict)
            </div>
            <div style={{ fontSize: "15px", color: CREAM, fontWeight: 600, lineHeight: 1.5 }}>
              “현재 조직에서의 승진 가능성은 낮으므로, 연내 부서 이동 대신 외부 이직 제안 A사에 대한 협상으로 전환합니다.”
            </div>
          </div>

          {/* Box 2: Stop-list */}
          <div
            style={{
              padding: "18px 20px",
              borderRadius: "12px",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.06)",
            }}
          >
            <div style={{ fontSize: "12px", color: "#F87171", fontWeight: 600, marginBottom: "8px" }}>
              02. 즉시 중단할 행동 (Stop-list)
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ fontSize: "13px", color: MUTED, display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "#F87171", fontWeight: 700 }}>✕</span>
                <span>사내 추가 TF 참여를 통한 단기 성과 증명 시도 중단</span>
              </div>
              <div style={{ fontSize: "13px", color: MUTED, display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "#F87171", fontWeight: 700 }}>✕</span>
                <span>준비되지 않은 상태에서의 즉흥적 사직서 제출 보류</span>
              </div>
            </div>
          </div>

          {/* Box 3: 90-Day Execution Actions */}
          <div
            style={{
              padding: "18px 20px",
              borderRadius: "12px",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.06)",
            }}
          >
            <div style={{ fontSize: "12px", color: ACCENT, fontWeight: 600, marginBottom: "8px" }}>
              03. 향후 90일 실행 과제 (Action Blueprint)
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ fontSize: "13px", color: CREAM, display: "flex", alignItems: "center", gap: "8px" }}>
                <Check size={14} color={ACCENT} />
                <span>1~30일: 기존 핵심 프로젝트 2건의 수치화된 성과 포트폴리오 재정리</span>
              </div>
              <div style={{ fontSize: "13px", color: CREAM, display: "flex", alignItems: "center", gap: "8px" }}>
                <Check size={14} color={ACCENT} />
                <span>31~60일: 목표 산업군 헤드헌터 3인 접촉 및 시장 가치 레버리지 테스트</span>
              </div>
              <div style={{ fontSize: "13px", color: CREAM, display: "flex", alignItems: "center", gap: "8px" }}>
                <Check size={14} color={ACCENT} />
                <span>61~90일: 최종 오퍼 2개사 대상 연봉 및 직급 마진 협상 완결</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Explicit Boundary Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          background: "rgba(239, 68, 68, 0.04)",
          borderRadius: "16px",
          border: "1px solid rgba(239, 68, 68, 0.2)",
          padding: "24px 28px",
          display: "flex",
          alignItems: "flex-start",
          gap: "18px",
        }}
      >
        <ShieldAlert size={20} color="#F87171" style={{ flexShrink: 0, marginTop: "2px" }} />
        <div>
          <h4
            style={{
              fontSize: "15px",
              fontWeight: 700,
              color: CREAM,
              margin: "0 0 6px",
            }}
          >
            상담 비대상 영역 고지
          </h4>
          <p
            style={{
              fontSize: "13px",
              lineHeight: 1.6,
              color: "rgba(250, 246, 240, 0.7)",
              margin: 0,
              wordBreak: "keep-all",
            }}
          >
            심리치료, 정신건강 진단, 직장 내 단순 감정 위로 목적의 상담은 제공하지 않습니다.
            인간관계 갈등 또한 승진, 평가, 이직, 팀 이동 등 철저히 <strong>커리어 의사결정과 손익의 관점</strong>에서만 다룹니다.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
