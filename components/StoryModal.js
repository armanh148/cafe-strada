"use client";

import { X, Sparkles, Award, Coffee, Heart, MapPin, PartyPopper, Phone } from "lucide-react";
import { CAFE_STRADA_DATA } from "@/lib/cafeStradaData";

export default function StoryModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="drawer-backdrop story-modal-backdrop" onClick={onClose} style={{ alignItems: "center", justifyContent: "center", padding: "20px" }}>
      <div
        className="card-scale story-modal-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "640px",
          maxHeight: "90vh",
          overflowY: "auto",
          background: "#FAF7F2",
          borderRadius: "32px",
          padding: "clamp(22px, 4vw, 36px)",
          boxShadow: "0 25px 60px -15px rgba(35, 21, 13, 0.4)",
          border: "1px solid rgba(60, 33, 21, 0.1)",
          position: "relative",
        }}
      >
        {/* Mobile Drag Handle */}
        <div
          className="story-modal-drag"
          style={{
            width: "36px",
            height: "4px",
            borderRadius: "999px",
            background: "rgba(60, 33, 21, 0.2)",
            margin: "0 auto 12px",
            display: "none",
          }}
        />

        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "rgba(60, 33, 21, 0.08)",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#3C2115",
          }}
        >
          <X size={18} />
        </button>

        <span className="section-tag" style={{ marginBottom: "12px" }}>
          <span className="tag-dot" />
          The Café Strada Heritage
        </span>

        <h3
          className="font-serif"
          style={{
            fontSize: "clamp(24px, 3.5vw, 34px)",
            color: "#23150D",
            marginBottom: "16px",
            lineHeight: 1.25,
            fontWeight: 400,
          }}
        >
          Karachi’s Beloved Clifton Haven for Family, Food & Celebrations
        </h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px", color: "#5C4638", fontSize: "14.5px", lineHeight: 1.7 }}>
          <p>
            Nestled inside a peaceful residential bungalow in <strong>Block 4, KDA Scheme 5, Clifton, Karachi</strong>, Café Strada was created with a clear philosophy: to provide a warm, comfortable sanctuary where families, friends, and food lovers can savor honest continental gastronomy without hurry.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "14px",
              margin: "8px 0",
            }}
          >
            <div style={{ background: "#F4EFEA", padding: "16px", borderRadius: "18px", border: "1px solid rgba(60, 33, 21, 0.06)" }}>
              <Coffee size={20} color="#8DAE00" style={{ marginBottom: "8px" }} />
              <div style={{ fontWeight: 700, color: "#23150D", fontSize: "14px", marginBottom: "4px" }}>
                Continental Mastery
              </div>
              <div style={{ fontSize: "12.5px", color: "#6C5648" }}>
                Renowned across Karachi for sizzling Moroccan and Tarragon chicken steaks, creamy Alfredo pastas, and loaded garlic mayo fries.
              </div>
            </div>

            <div style={{ background: "#F4EFEA", padding: "16px", borderRadius: "18px", border: "1px solid rgba(60, 33, 21, 0.06)" }}>
              <PartyPopper size={20} color="#8DAE00" style={{ marginBottom: "8px" }} />
              <div style={{ fontWeight: 700, color: "#23150D", fontSize: "14px", marginBottom: "4px" }}>
                Dedicated Private Events
              </div>
              <div style={{ fontSize: "12.5px", color: "#6C5648" }}>
                Custom private rooms with fairy lights, themed balloon garlands, sound systems, and tailored celebration packages for birthdays and bridal showers.
              </div>
            </div>
          </div>

          <p>
            From early 7:00 AM breakfast meetings and afternoon work sessions over iced Spanish lattes to lively dinner parties and late-night sweet cravings, Café Strada treats every visitor like a member of our family.
          </p>

          <div
            style={{
              background: "#FCF8DF",
              padding: "16px",
              borderRadius: "18px",
              border: "1px solid rgba(217, 251, 54, 0.4)",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              fontSize: "13px",
              color: "#3C2115",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: 700 }}>
              <MapPin size={16} color="#8DAE00" />
              <span>Bungalow No. F-64/1, Block 4, KDA Scheme 5, Clifton, Karachi</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Phone size={15} color="#8DAE00" />
              <span>Call: 021-35374477 • WhatsApp: 0304-8847733</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .story-modal-backdrop {
            align-items: flex-end !important;
            padding: 0 !important;
          }
          .story-modal-card {
            max-height: 88vh !important;
            border-radius: 28px 28px 0 0 !important;
            padding: 20px 20px 36px !important;
          }
          .story-modal-drag {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
}
