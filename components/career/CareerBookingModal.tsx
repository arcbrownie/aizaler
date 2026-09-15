"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Send, X } from "lucide-react";

interface CareerBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ACCENT = "#60A5FA";
const CREAM = "#FAF6F0";
const CARD_BG = "#0A1430";
const BORDER = "rgba(255, 255, 255, 0.12)";
const MUTED = "rgba(250, 246, 240, 0.65)";

const EXPERIENCE_OPTIONS = [
  "5~9년차 (대리~과장급)",
  "10~14년차 (차장~팀장급)",
  "15~19년차 (부장~실장급)",
  "20년차 이상 (임원/리더급)",
];

const TRACK_OPTIONS = [
  "이직·전직 손익 판단",
  "승진·조직 내 포지셔닝",
  "퇴사 후 사업·독립 준비",
  "AI/기술 대응 및 직무 전환",
];

export default function CareerBookingModal({ isOpen, onClose }: CareerBookingModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState(EXPERIENCE_OPTIONS[1]);
  const [track, setTrack] = useState(TRACK_OPTIONS[0]);
  const [question, setQuestion] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !question) {
      alert("성함, 연락처, 고민 내용을 입력해 주세요.");
      return;
    }

    setIsSubmitting(true);
    try {
      // 분석 이벤트 또는 신청 로깅 (안전하게 로깅)
      await fetch("/api/analytics/event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventName: "career_strategy_consulting_request",
          sajuType: "career",
          payload: {
            name,
            phone,
            email,
            experience,
            track,
            question,
            preferredTime,
          },
        }),
      }).catch(() => {});

      setIsSubmitted(true);
    } catch {
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName("");
    setPhone("");
    setEmail("");
    setQuestion("");
    setPreferredTime("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            background: "rgba(3, 7, 18, 0.8)",
            backdropFilter: "blur(12px)",
          }}
        >
          {/* Backdrop click to close */}
          <div
            onClick={onClose}
            style={{
              position: "absolute",
              inset: 0,
              cursor: "pointer",
            }}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "relative",
              zIndex: 1,
              width: "100%",
              maxWidth: "520px",
              maxHeight: "90vh",
              overflowY: "auto",
              background: CARD_BG,
              borderRadius: "24px",
              border: `1px solid ${BORDER}`,
              padding: "32px",
              boxShadow: "0 24px 60px rgba(0, 0, 0, 0.8)",
              color: CREAM,
            }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "rgba(255, 255, 255, 0.06)",
                border: "none",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: CREAM,
                cursor: "pointer",
              }}
            >
              <X size={16} />
            </button>

            {!isSubmitted ? (
              <>
                <div style={{ marginBottom: "24px" }}>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      color: ACCENT,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    Pilot Session Application
                  </span>
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: 800,
                      color: CREAM,
                      margin: "6px 0 8px",
                    }}
                  >
                    사전 질문지 및 세션 신청
                  </h3>
                  <p style={{ fontSize: "13px", color: MUTED, margin: 0, lineHeight: 1.5 }}>
                    신청서를 작성해 주시면 24시간 내 일정 조율 및 세션 안내를 드립니다.
                  </p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                  {/* Name & Phone */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "12px", color: MUTED, marginBottom: "6px" }}>
                        성함 *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="홍길동"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{
                          width: "100%",
                          padding: "12px 14px",
                          borderRadius: "10px",
                          background: "rgba(255, 255, 255, 0.04)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          color: CREAM,
                          fontSize: "14px",
                          outline: "none",
                          boxSizing: "border-box",
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "12px", color: MUTED, marginBottom: "6px" }}>
                        연락처 *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="010-0000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        style={{
                          width: "100%",
                          padding: "12px 14px",
                          borderRadius: "10px",
                          background: "rgba(255, 255, 255, 0.04)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          color: CREAM,
                          fontSize: "14px",
                          outline: "none",
                          boxSizing: "border-box",
                        }}
                      />
                    </div>
                  </div>

                  {/* Experience Level */}
                  <div>
                    <label style={{ display: "block", fontSize: "12px", color: MUTED, marginBottom: "6px" }}>
                      현재 경력 연차 *
                    </label>
                    <select
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        borderRadius: "10px",
                        background: "#0E1C3D",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        color: CREAM,
                        fontSize: "14px",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                    >
                      {EXPERIENCE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Main Track */}
                  <div>
                    <label style={{ display: "block", fontSize: "12px", color: MUTED, marginBottom: "6px" }}>
                      가장 시급한 의사결정 영역 *
                    </label>
                    <select
                      value={track}
                      onChange={(e) => setTrack(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        borderRadius: "10px",
                        background: "#0E1C3D",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        color: CREAM,
                        fontSize: "14px",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                    >
                      {TRACK_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Core Question */}
                  <div>
                    <label style={{ display: "block", fontSize: "12px", color: MUTED, marginBottom: "6px" }}>
                      현재 가장 답답한 갈림길 또는 고민 (1~2줄) *
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="예: 이직 제안을 받았는데 지금 옮기는 게 맞는지, 남아서 승진을 노리는 게 맞는지 판단이 서지 않습니다."
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        borderRadius: "10px",
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        color: CREAM,
                        fontSize: "14px",
                        outline: "none",
                        resize: "none",
                        boxSizing: "border-box",
                        lineHeight: 1.5,
                      }}
                    />
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <label style={{ display: "block", fontSize: "12px", color: MUTED, marginBottom: "6px" }}>
                      희망 상담 시간대 (선택)
                    </label>
                    <input
                      type="text"
                      placeholder="예: 평일 20시 이후 또는 주말 오전"
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        borderRadius: "10px",
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        color: CREAM,
                        fontSize: "14px",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      width: "100%",
                      padding: "16px",
                      borderRadius: "12px",
                      background: ACCENT,
                      color: "#050A18",
                      fontSize: "15px",
                      fontWeight: 700,
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      marginTop: "10px",
                      boxShadow: "0 8px 24px rgba(96, 165, 250, 0.25)",
                    }}
                  >
                    {isSubmitting ? "접수 중..." : "파일럿 세션 신청하기 (49,000원)"}
                    <Send size={16} />
                  </button>
                </form>
              </>
            ) : (
              /* Success View */
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "rgba(96, 165, 250, 0.12)",
                    border: "1px solid rgba(96, 165, 250, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                  }}
                >
                  <CheckCircle2 size={30} color={ACCENT} />
                </div>
                <h3 style={{ fontSize: "22px", fontWeight: 800, color: CREAM, margin: "0 0 10px" }}>
                  세션 신청이 정상 접수되었습니다
                </h3>
                <p style={{ fontSize: "14px", color: MUTED, lineHeight: 1.6, margin: "0 0 28px" }}>
                  남겨주신 연락처({phone})로 담당자가 24시간 내 일정 조율 및 세션 진행 절차를 안내해 드리겠습니다.
                </p>
                <button
                  onClick={handleReset}
                  style={{
                    padding: "14px 28px",
                    borderRadius: "10px",
                    background: CREAM,
                    color: "#050A18",
                    fontSize: "14px",
                    fontWeight: 700,
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  확인
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
