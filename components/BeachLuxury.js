"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, MessageCircle, Sparkles, Check, Heart } from "lucide-react";
import { CAFE_STRADA_DATA } from "@/lib/cafeStradaData";

export default function BeachLuxury({ data, onAddToCart }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const packages = CAFE_STRADA_DATA.events.packages;
  const currentPkg = packages[currentSlide];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % packages.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + packages.length) % packages.length);
  };

  const minSwipeDistance = 45;

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  return (
    <section
      id="events"
      style={{
        paddingTop: "60px",
        paddingBottom: "80px",
        background: "#FAF7F2",
      }}
    >
      <div className="veloura-container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <span className="section-tag">
            <span className="tag-dot" />
            {CAFE_STRADA_DATA.events.tag}
          </span>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(28px, 4.2vw, 52px)",
              color: "#23150D",
              margin: "6px 0 12px",
              fontWeight: 400,
            }}
          >
            {CAFE_STRADA_DATA.events.title}
          </h2>
          <p
            style={{
              maxWidth: "620px",
              margin: "0 auto",
              fontSize: "clamp(13.5px, 1.4vw, 15px)",
              color: "#6B5548",
            }}
          >
            {CAFE_STRADA_DATA.events.subtitle}
          </p>
        </div>

        {/* Cinematic Event Showcase Banner */}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            position: "relative",
            borderRadius: "clamp(20px, 4vw, 32px)",
            overflow: "hidden",
            height: "clamp(420px, 50vw, 680px)",
            boxShadow: "0 24px 50px -12px rgba(60, 33, 21, 0.22)",
            background: "#23150D",
          }}
        >
          {/* Background Image */}
          <img
            key={currentPkg.id}
            src={currentPkg.image}
            alt={currentPkg.name}
            className="img-zoom"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 45%",
              filter: "brightness(0.88)",
              transition: "opacity 0.5s ease",
            }}
          />

          {/* Deep gradient overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(35,21,13,0.5) 0%, rgba(35,21,13,0.2) 40%, rgba(35,21,13,0.85) 100%)",
            }}
          />

          {/* Top Headline inside Banner */}
          <div
            style={{
              position: "absolute",
              top: "clamp(20px, 4vw, 36px)",
              left: "clamp(18px, 4vw, 36px)",
              right: "clamp(70px, 10vw, 140px)",
              color: "#FFFFFF",
              zIndex: 10,
            }}
          >
            <div
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#D9FB36",
                marginBottom: "6px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <Sparkles size={13} />
              <span>{currentPkg.highlight}</span>
            </div>
            <h3
              className="font-serif"
              style={{
                fontSize: "clamp(22px, 3.5vw, 44px)",
                fontWeight: 400,
                textShadow: "0 2px 14px rgba(0,0,0,0.6)",
                lineHeight: 1.15,
                margin: "0 0 6px 0",
              }}
            >
              {currentPkg.name}
            </h3>
            <div
              style={{
                fontSize: "clamp(13px, 1.3vw, 15px)",
                color: "rgba(255, 255, 255, 0.9)",
                fontWeight: 500,
              }}
            >
              {currentPkg.subtitle}
            </div>
          </div>

          {/* Left Mini Floating Card with Feature Checklist (Desktop & Tablet) */}
          <div
            className="animate-float beach-flavors-desktop"
            style={{
              position: "absolute",
              left: "clamp(16px, 4vw, 40px)",
              bottom: "clamp(24px, 5vw, 60px)",
              zIndex: 20,
            }}
          >
            <div
              className="glass-panel"
              style={{
                borderRadius: "20px",
                padding: "14px 18px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                maxWidth: "280px",
                background: "rgba(255, 255, 255, 0.9)",
              }}
            >
              <span
                style={{
                  fontSize: "10.5px",
                  fontWeight: 700,
                  color: "#3C2115",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Package Highlights
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {currentPkg.features.slice(0, 3).map((feat, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "11.5px",
                      color: "#3C2115",
                      fontWeight: 600,
                    }}
                  >
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%",
                        background: "#D9FB36",
                        color: "#23150D",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Check size={10} strokeWidth={3} />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Center/Bottom Frosted Glass Card for WhatsApp Reservation */}
          <div
            className="beach-center-card"
            style={{
              position: "absolute",
              left: "50%",
              bottom: "clamp(16px, 4vw, 60px)",
              transform: "translateX(-50%)",
              zIndex: 20,
              width: "calc(100% - 32px)",
              maxWidth: "520px",
            }}
          >
            <div
              className="glass-panel"
              style={{
                borderRadius: "22px",
                padding: "clamp(12px, 2.2vw, 16px) clamp(14px, 3vw, 24px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "14px",
                background: "rgba(255, 255, 255, 0.92)",
                boxShadow: "0 20px 48px -8px rgba(35, 21, 13, 0.4)",
                border: "1.5px solid rgba(255, 255, 255, 0.9)",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "clamp(9.5px, 1.8vw, 11px)",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#6B5548",
                    marginBottom: "2px",
                  }}
                >
                  Package Rate
                </div>
                <div
                  style={{
                    fontSize: "clamp(16px, 2.4vw, 20px)",
                    fontWeight: 800,
                    color: "#23150D",
                  }}
                >
                  {currentPkg.price}
                </div>
              </div>

              <a
                href={`https://wa.me/${CAFE_STRADA_DATA.contact.rawWhatsApp}?text=${encodeURIComponent(currentPkg.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  background: "#25D366",
                  color: "#FFFFFF",
                  padding: "9px clamp(14px, 2.2vw, 20px)",
                  borderRadius: "999px",
                  fontSize: "13px",
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: "0 6px 18px rgba(37, 211, 102, 0.35)",
                  flexShrink: 0,
                  transition: "all 0.2s ease",
                }}
              >
                <MessageCircle size={15} />
                <span>Book on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Carousel Navigation Arrows */}
          <div
            className="beach-arrows-wrapper"
            style={{
              position: "absolute",
              right: "clamp(16px, 4vw, 40px)",
              bottom: "clamp(24px, 5vw, 60px)",
              display: "flex",
              gap: "8px",
              zIndex: 20,
            }}
          >
            <button
              onClick={handlePrev}
              aria-label="Previous package"
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#3C2115",
                transition: "all 0.2s ease",
              }}
            >
              <ArrowLeft size={16} />
            </button>

            <button
              onClick={handleNext}
              aria-label="Next package"
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#3C2115",
                transition: "all 0.2s ease",
              }}
            >
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Interactive Slide Indicator Dots */}
          <div
            className="beach-dots-wrapper"
            style={{
              position: "absolute",
              top: "22px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: "6px",
              zIndex: 20,
              background: "rgba(35, 21, 13, 0.5)",
              padding: "4px 8px",
              borderRadius: "999px",
              backdropFilter: "blur(8px)",
            }}
          >
            {packages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                style={{
                  width: currentSlide === idx ? "20px" : "6px",
                  height: "6px",
                  borderRadius: "999px",
                  background: currentSlide === idx ? "#D9FB36" : "rgba(255, 255, 255, 0.5)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .beach-flavors-desktop {
            display: none !important;
          }
          .beach-arrows-wrapper {
            top: 20px !important;
            bottom: auto !important;
            right: 18px !important;
          }
          .beach-center-card {
            width: calc(100% - 24px) !important;
            bottom: 14px !important;
          }
        }
        @media (max-width: 460px) {
          .beach-center-card .glass-panel {
            flex-direction: column !important;
            align-items: stretch !important;
            text-align: center !important;
            gap: 10px !important;
            padding: 12px 14px !important;
          }
          .beach-center-card .glass-panel a {
            justify-content: center !important;
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
