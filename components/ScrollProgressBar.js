"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
      setShowTopBtn(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Top Thin Reading Progress Bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Floating Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          style={{
            position: "fixed",
            bottom: "clamp(20px, 4vw, 28px)",
            right: "clamp(16px, 4vw, 28px)",
            width: "clamp(40px, 5vw, 46px)",
            height: "clamp(40px, 5vw, 46px)",
            borderRadius: "50%",
            background: "#FAF7F2",
            border: "1.5px solid rgba(60, 33, 21, 0.15)",
            boxShadow: "0 8px 24px rgba(60, 33, 21, 0.18)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#3C2115",
            cursor: "pointer",
            zIndex: 40,
            transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.background = "#3C2115";
            e.currentTarget.style.color = "#FAF7F2";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.background = "#FAF7F2";
            e.currentTarget.style.color = "#3C2115";
          }}
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
}
