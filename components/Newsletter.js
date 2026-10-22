"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 800);
  };

  return (
    <section
      style={{
        paddingTop: "50px",
        paddingBottom: "50px",
      }}
    >
      <div className="veloura-container">
        <div
          style={{
            background: "#F4EFEA",
            borderRadius: "clamp(20px, 4vw, 32px)",
            padding: "clamp(24px, 5vw, 60px)",
            border: "1px solid rgba(60, 33, 21, 0.08)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "28px",
            alignItems: "center",
          }}
        >
          {/* Left Text */}
          <div>
            <div
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#8DAE00",
                marginBottom: "6px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <Sparkles size={13} />
              <span>Strada VIP Club</span>
            </div>
            <h3
              className="font-serif"
              style={{
                fontSize: "clamp(24px, 3.4vw, 42px)",
                color: "#23150D",
                margin: "0 0 10px",
                fontWeight: 400,
                lineHeight: 1.2,
              }}
            >
              Join the Café Strada Family
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "#6B5548",
                margin: 0,
                maxWidth: "460px",
                lineHeight: 1.6,
              }}
            >
              Receive exclusive private celebration discounts, new chef specials, high-tea invites, and birthday month perks.
            </p>
          </div>

          {/* Right Form */}
          <div>
            {status === "success" ? (
              <div
                style={{
                  background: "#FCF8DF",
                  border: "1.5px solid #D9FB36",
                  padding: "14px 20px",
                  borderRadius: "999px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#23150D",
                  fontWeight: 600,
                  fontSize: "13.5px",
                }}
              >
                <div
                  style={{
                    width: "26px",
                    height: "26px",
                    borderRadius: "50%",
                    background: "#D9FB36",
                    color: "#23150D",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Check size={14} strokeWidth={3} />
                </div>
                <span>Welcome to Strada VIP! We’ll be in touch soon.</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  style={{
                    flex: "1 1 240px",
                    padding: "13px 20px",
                    borderRadius: "999px",
                    border: "1.5px solid rgba(60, 33, 21, 0.15)",
                    background: "#FAF7F2",
                    fontSize: "13.5px",
                    color: "#23150D",
                    outline: "none",
                  }}
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary newsletter-btn"
                  style={{
                    padding: "12px 24px",
                    fontSize: "13.5px",
                    flexShrink: 0,
                  }}
                >
                  <span>{status === "loading" ? "Joining..." : "Join VIP"}</span>
                  <ArrowUpRight size={15} className="arrow-icon" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 480px) {
          .newsletter-btn {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}
