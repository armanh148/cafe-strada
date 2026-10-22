"use client";

import { ArrowUpRight, Star, Heart, MapPin, Calendar, Utensils, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { CAFE_STRADA_DATA } from "@/lib/cafeStradaData";

export default function Hero({ data, onSelectProduct }) {
  const [liked, setLiked] = useState(false);

  return (
    <section id="hero" style={{ paddingTop: "14px", paddingBottom: "46px" }}>
      <div className="veloura-container">
        {/* Location & Heritage Tag */}
        <div style={{ textAlign: "center", marginBottom: "8px" }}>
          <span
            className="section-tag"
            style={{
              background: "rgba(60, 33, 21, 0.06)",
              color: "#3C2115",
              borderColor: "rgba(60, 33, 21, 0.12)",
            }}
          >
            <MapPin size={13} color="#8DAE00" />
            <span>Bungalow F-64/1, Block 4, Clifton • Karachi</span>
          </span>
        </div>

        {/* Giant Display Title */}
        <div style={{ textAlign: "center", marginBottom: "14px" }}>
          <h1
            className="font-serif reveal-fade-up"
            style={{
              fontSize: "clamp(44px, 12.5vw, 160px)",
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              color: "#23150D",
              margin: 0,
              fontWeight: 400,
            }}
          >
            Café Strada
          </h1>
        </div>

        {/* Subhead Row (Left description + Right ratings + Quick CTA buttons) */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
            marginBottom: "26px",
            padding: "0 4px",
          }}
        >
          {/* Left Description & Action Buttons */}
          <div style={{ maxWidth: "520px", flex: "1 1 300px" }}>
            <p
              style={{
                fontSize: "clamp(14px, 1.35vw, 16.5px)",
                color: "#5C4638",
                lineHeight: 1.6,
                margin: "0 0 16px 0",
              }}
            >
              {data.subtitle}
            </p>

            <div className="hero-cta-buttons" style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              <a href="#menu" className="btn-primary" style={{ padding: "10px 20px" }}>
                <span>Explore Continental Menu</span>
                <ArrowUpRight size={15} className="arrow-icon" />
              </a>

              <a
                href="#events"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "rgba(255, 255, 255, 0.9)",
                  color: "#3C2115",
                  border: "1px solid rgba(60, 33, 21, 0.16)",
                  padding: "10px 18px",
                  borderRadius: "999px",
                  fontSize: "13px",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
              >
                <Calendar size={14} color="#8DAE00" />
                <span>Book Event / Birthday</span>
              </a>
            </div>
          </div>

          {/* Right Rating & Avatars */}
          <div
            className="hero-rating-pill"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              background: "rgba(255, 255, 255, 0.85)",
              padding: "10px 18px",
              borderRadius: "9999px",
              border: "1px solid rgba(60, 33, 21, 0.1)",
              boxShadow: "0 8px 24px -6px rgba(60, 33, 21, 0.08)",
            }}
          >
            {/* Overlapping Avatars */}
            <div style={{ display: "flex", marginLeft: "2px" }}>
              {data.rating.avatars.map((avatar, idx) => (
                <img
                  key={idx}
                  src={avatar}
                  alt={`Happy customer ${idx + 1}`}
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "2px solid #FAF7F2",
                    marginLeft: idx > 0 ? "-10px" : "0",
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.12)",
                  }}
                />
              ))}
            </div>

            {/* Stars & Text */}
            <div>
              <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    fill="#EAB308"
                    color="#EAB308"
                    strokeWidth={0}
                  />
                ))}
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#3C2115",
                    marginLeft: "4px",
                  }}
                >
                  {data.rating.score}
                </span>
              </div>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#6B5548",
                  letterSpacing: "0.01em",
                }}
              >
                {data.rating.reviewsCount}
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image Showcase with Floating Overlaid Interactive Badges */}
        <div
          className="img-zoom-container"
          style={{
            position: "relative",
            borderRadius: "clamp(20px, 4vw, 32px)",
            overflow: "hidden",
            height: "clamp(380px, 52vw, 720px)",
            boxShadow: "0 25px 60px -15px rgba(60, 33, 21, 0.2)",
            background: "#E8DEC8",
          }}
        >
          {/* Main Visual Image */}
          <img
            src="/images/hero-couple.jpg"
            alt="Warm atmosphere and guests enjoying delicious dining at Cafe Strada"
            className="img-zoom"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 28%",
            }}
          />

          {/* Subtle gradient vignette at bottom */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(35,21,13,0.55) 100%)",
              pointerEvents: "none",
            }}
          />

          {/* Floating Interactive Badge 1: Moroccan Chicken Steak */}
          <div
            className="animate-float hero-badge-left"
            style={{
              position: "absolute",
              left: "clamp(12px, 4vw, 55px)",
              bottom: "clamp(16px, 5vw, 65px)",
              zIndex: 20,
              maxWidth: "calc(100% - 24px)",
            }}
          >
            <div
              className="glass-panel"
              style={{
                borderRadius: "18px",
                padding: "clamp(10px, 2vw, 14px) clamp(12px, 2.5vw, 18px)",
                display: "flex",
                alignItems: "center",
                gap: "clamp(10px, 2vw, 18px)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                background: "rgba(255, 255, 255, 0.9)",
                boxShadow: "0 18px 40px -8px rgba(60, 33, 21, 0.25)",
                border: "1.5px solid rgba(255, 255, 255, 0.8)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onClick={() =>
                onSelectProduct({
                  id: "moroccan-chicken-steak",
                  name: data.spotlightBadge.name,
                  price: data.spotlightBadge.price,
                  image: "/images/strada-steak.jpg",
                  description:
                    "Tender grilled chicken fillet smothered in rich creamy Moroccan pepper sauce with mashed potatoes.",
                })
              }
            >
              <div>
                <div
                  style={{
                    fontSize: "clamp(9px, 1.6vw, 11px)",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#3C2115",
                    marginBottom: "2px",
                  }}
                >
                  {data.spotlightBadge.name}
                </div>
                <div
                  style={{
                    fontSize: "clamp(15px, 2vw, 18px)",
                    fontWeight: 800,
                    color: "#23150D",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <span>{data.spotlightBadge.price}</span>
                  <span
                    style={{
                      fontSize: "9.5px",
                      fontWeight: 700,
                      background: "rgba(217, 251, 54, 0.45)",
                      color: "#3A3000",
                      padding: "2px 6px",
                      borderRadius: "999px",
                    }}
                  >
                    Chef's Pick
                  </span>
                </div>
              </div>

              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "#3C2115",
                  color: "#FAF7F2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <ArrowUpRight size={15} />
              </div>
            </div>
          </div>

          {/* Floating Interactive Badge 2: Iced Spanish Latte */}
          <div
            className="animate-float-reverse hero-badge-right"
            style={{
              position: "absolute",
              right: "clamp(12px, 4vw, 55px)",
              top: "clamp(16px, 5vw, 65px)",
              zIndex: 20,
              maxWidth: "calc(100% - 24px)",
            }}
          >
            <div
              className="glass-panel"
              style={{
                borderRadius: "18px",
                padding: "clamp(8px, 1.8vw, 12px) clamp(10px, 2.2vw, 16px)",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                background: "rgba(255, 255, 255, 0.9)",
                boxShadow: "0 18px 40px -8px rgba(60, 33, 21, 0.2)",
                border: "1.5px solid rgba(255, 255, 255, 0.8)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onClick={() =>
                onSelectProduct({
                  id: "iced-spanish-latte",
                  name: data.coffeeBadge.name,
                  price: data.coffeeBadge.price,
                  image: "/images/iced-milk-coffee.jpg",
                  description:
                    "Double shot espresso sweetened with condensed velvet milk, shaken over ice cubes with creamy foam.",
                })
              }
            >
              <div>
                <div
                  style={{
                    fontSize: "clamp(9px, 1.6vw, 11px)",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#3C2115",
                    marginBottom: "1px",
                  }}
                >
                  {data.coffeeBadge.name}
                </div>
                <div
                  style={{
                    fontSize: "clamp(14px, 2vw, 17px)",
                    fontWeight: 800,
                    color: "#23150D",
                  }}
                >
                  {data.coffeeBadge.price}
                </div>
              </div>

              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  background: "#FAF7F2",
                  color: "#3C2115",
                  border: "1px solid rgba(60, 33, 21, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <ArrowUpRight size={13} />
              </div>
            </div>
          </div>

          {/* Quick Favorite Action */}
          <button
            onClick={() => setLiked(!liked)}
            aria-label="Add to favorites"
            style={{
              position: "absolute",
              top: "16px",
              left: "16px",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.85)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "transform 0.2s ease, background 0.2s ease",
              zIndex: 20,
            }}
          >
            <Heart
              size={16}
              fill={liked ? "#EF4444" : "none"}
              color={liked ? "#EF4444" : "#3C2115"}
            />
          </button>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 560px) {
          .hero-cta-buttons {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .hero-cta-buttons a {
            justify-content: center !important;
            width: 100% !important;
          }
          .hero-badge-left {
            left: 10px !important;
            bottom: 12px !important;
            max-width: calc(100% - 20px) !important;
          }
          .hero-badge-left .glass-panel {
            padding: 8px 12px !important;
            gap: 10px !important;
          }
          .hero-badge-right {
            right: 10px !important;
            top: 10px !important;
            max-width: calc(100% - 64px) !important;
          }
          .hero-badge-right .glass-panel {
            padding: 6px 10px !important;
            gap: 8px !important;
          }
        }
        @media (max-width: 440px) {
          .hero-badge-right {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
