"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Sparkles,
  MapPin,
  UtensilsCrossed,
  TreePine,
  Clock,
  PartyPopper,
  CheckCircle2,
  Award,
  Heart
} from "lucide-react";
import { CAFE_STRADA_DATA } from "@/lib/cafeStradaData";

export default function About({ data = CAFE_STRADA_DATA.about, onOpenStory }) {
  const aboutData = CAFE_STRADA_DATA.about;

  const pillars = [
    {
      icon: <UtensilsCrossed size={18} color="#8DAE00" />,
      title: "Continental Gastronomy",
      desc: "Sizzling Moroccan & Tarragon chicken steaks, creamy fettuccine Alfredo, and artisan burgers crafted fresh upon order.",
    },
    {
      icon: <TreePine size={18} color="#8DAE00" />,
      title: "Bungalow Serenity",
      desc: "Tucked inside a private residential bungalow in Clifton Block 4 with a lush open-air veranda away from traffic noise.",
    },
    {
      icon: <Clock size={18} color="#8DAE00" />,
      title: "7 AM Breakfast to Midnight",
      desc: "Open daily from 7:00 AM for fresh roasted coffee, fluffy pancakes, English breakfasts, and late-night cravings.",
    },
    {
      icon: <PartyPopper size={18} color="#8DAE00" />,
      title: "Private Party Lounges",
      desc: "Dedicated celebration suites featuring bespoke balloon arches, personalized backdrops, and private sound systems.",
    },
  ];

  return (
    <section
      id="about"
      style={{
        paddingTop: "70px",
        paddingBottom: "85px",
        position: "relative",
        background: "transparent",
      }}
    >
      <div className="veloura-container">
        {/* Section Tag */}
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <span className="section-tag">
            <span className="tag-dot" />
            Our Clifton Story & Heritage
          </span>
        </div>

        {/* Dual-Tone Large Impact Heading */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "1100px",
            margin: "0 auto 48px",
          }}
        >
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(30px, 4vw, 54px)",
              lineHeight: 1.2,
              fontWeight: 400,
              letterSpacing: "-0.02em",
              marginBottom: "14px",
            }}
          >
            <span
              style={{
                color: "#8DAE00",
                display: "inline-block",
                marginRight: "8px",
                fontWeight: 600,
              }}
            >
              A Cozy Haven in Clifton
            </span>
            <span style={{ color: "#23150D" }}>
              for Life's Most Delicious Moments.
            </span>
          </h2>

          <p
            style={{
              fontSize: "clamp(14px, 1.35vw, 16.5px)",
              color: "#6B5548",
              maxWidth: "760px",
              margin: "0 auto",
              lineHeight: 1.65,
            }}
          >
            Established in the tranquil heart of Block 4, KDA Scheme 5, Clifton, Café Strada blends rich continental culinary craft with Karachi's warm spirit of togetherness.
          </p>
        </div>

        {/* Main 2-Column Editorial Showcase */}
        <div
          className="about-editorial-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
            gap: "clamp(36px, 5vw, 64px)",
            alignItems: "center",
          }}
        >
          {/* Left Column: Multi-Layered Visual Collage */}
          <div className="about-collage-container" style={{ position: "relative", minHeight: "clamp(360px, 50vw, 580px)" }}>
            {/* Primary Main Image (Warm Ambiance Lounge) */}
            <div
              className="card-scale img-zoom-container about-main-img"
              style={{
                width: "90%",
                height: "clamp(320px, 46vw, 490px)",
                borderRadius: "32px",
                overflow: "hidden",
                boxShadow: "0 24px 60px -15px rgba(60, 33, 21, 0.2)",
                border: "4px solid #FFFFFF",
                background: "#EAE3D9",
                position: "relative",
              }}
            >
              <img
                src="/images/strada-lounge.jpg"
                alt="Cafe Strada Clifton cozy interior dining lounge"
                className="img-zoom"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              {/* In-Image Tag */}
              <div
                style={{
                  position: "absolute",
                  top: "16px",
                  left: "16px",
                  background: "rgba(35, 21, 13, 0.8)",
                  backdropFilter: "blur(12px)",
                  color: "#FAF7F2",
                  padding: "6px 14px",
                  borderRadius: "999px",
                  fontSize: "11px",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <MapPin size={12} color="#D9FB36" />
                <span>Bungalow F-64/1, Clifton</span>
              </div>
            </div>

            {/* Overlapping Floating Food Feature Card (Bottom Right) */}
            <div
              className="animate-float about-food-card"
              style={{
                position: "absolute",
                bottom: "0",
                right: "0",
                width: "clamp(190px, 32vw, 280px)",
                background: "#FFFFFF",
                borderRadius: "24px",
                padding: "12px",
                boxShadow: "0 20px 48px -10px rgba(60, 33, 21, 0.25)",
                border: "3px solid #FAF7F2",
                zIndex: 10,
              }}
            >
              <div
                style={{
                  height: "120px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  marginBottom: "10px",
                  position: "relative",
                }}
              >
                <img
                  src="/images/strada-steak.jpg"
                  alt="Sizzling steak specialty"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    bottom: "8px",
                    left: "8px",
                    background: "rgba(217, 251, 54, 0.95)",
                    color: "#23150D",
                    fontSize: "9.5px",
                    fontWeight: 800,
                    padding: "2px 8px",
                    borderRadius: "999px",
                    textTransform: "uppercase",
                  }}
                >
                  Chef's Signature
                </span>
              </div>
              <div style={{ padding: "0 4px" }}>
                <div style={{ fontSize: "13px", fontWeight: 700, color: "#23150D", marginBottom: "2px" }}>
                  Sizzling Moroccan Steak
                </div>
                <div style={{ fontSize: "11px", color: "#7A6456" }}>
                  Farm-fresh fillets with house pepper cream
                </div>
              </div>
            </div>

            {/* Floating Experience Badge (Bottom Left) */}
            <div
              className="about-exp-badge"
              style={{
                position: "absolute",
                top: "clamp(230px, 32vw, 360px)",
                left: "clamp(0px, 1.5vw, 12px)",
                background: "#23150D",
                color: "#FAF7F2",
                padding: "10px 16px",
                borderRadius: "20px",
                boxShadow: "0 14px 34px rgba(0, 0, 0, 0.3)",
                border: "2px solid #FAF7F2",
                zIndex: 15,
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  background: "#D9FB36",
                  color: "#23150D",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Award size={17} />
              </div>
              <div>
                <div style={{ fontSize: "13.5px", fontWeight: 800, color: "#D9FB36", lineHeight: 1 }}>
                  500+
                </div>
                <div style={{ fontSize: "10px", color: "#E2D3C7", fontWeight: 600 }}>
                  Parties & Gatherings
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, 4 Value Bento Cards & CTAs */}
          <div>
            <div style={{ marginBottom: "24px" }}>
              <h3
                className="font-serif"
                style={{
                  fontSize: "clamp(22px, 2.6vw, 32px)",
                  color: "#23150D",
                  margin: "0 0 12px 0",
                  fontWeight: 400,
                }}
              >
                Crafted with Heart in Clifton Block 4
              </h3>
              <p
                style={{
                  fontSize: "clamp(14px, 1.3vw, 15.5px)",
                  color: "#5C4638",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                At Café Strada, every recipe begins with farm-fresh Halal ingredients, premium meats, and ethically sourced coffee beans. Whether you are dining under the open sky on our veranda or celebrating life's sweetest milestones in our private rooms, our team treats you like family.
              </p>
            </div>

            {/* 4 Pillars Bento Grid (2x2 on all screens) */}
            <div
              className="about-pillars-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "16px",
                marginBottom: "32px",
              }}
            >
              {pillars.map((item, idx) => (
                <div
                  key={idx}
                  className="about-pillar-card"
                  style={{
                    background: "#FFFFFF",
                    borderRadius: "20px",
                    padding: "18px",
                    border: "1px solid rgba(60, 33, 21, 0.08)",
                    boxShadow: "0 6px 18px -4px rgba(60, 33, 21, 0.05)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = "0 10px 24px -4px rgba(60, 33, 21, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 6px 18px -4px rgba(60, 33, 21, 0.05)";
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "12px",
                      background: "rgba(141, 174, 0, 0.14)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#23150D", margin: 0 }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: "12px", color: "#6C5648", lineHeight: 1.5, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Actions Row */}
            <div
              className="about-actions-row"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                flexWrap: "wrap",
                borderTop: "1px solid rgba(60, 33, 21, 0.1)",
                paddingTop: "24px",
              }}
            >
              <button
                onClick={onOpenStory}
                className="btn-primary"
                style={{
                  padding: "11px 24px",
                  fontSize: "13.5px",
                }}
              >
                <span>Read Our Full Story</span>
                <ArrowUpRight size={15} className="arrow-icon" />
              </button>

              <a
                href="#menu"
                className="btn-secondary"
                style={{
                  padding: "10px 22px",
                  fontSize: "13px",
                  textDecoration: "none",
                }}
              >
                <span>Explore Menu</span>
              </a>

              <div
                className="about-halal-badge"
                style={{
                  marginLeft: "auto",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "12.5px",
                  fontWeight: 700,
                  color: "#8DAE00",
                }}
              >
                <CheckCircle2 size={16} />
                <span>100% Halal & Fresh</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .about-editorial-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 40px !important;
          }
          .about-collage-container {
            width: 100% !important;
            min-height: 380px !important;
          }
          .about-main-img {
            width: 95% !important;
            height: 330px !important;
            border-radius: 24px !important;
          }
          .about-food-card {
            width: 185px !important;
            right: 0 !important;
            bottom: -6px !important;
            padding: 10px !important;
            border-radius: 20px !important;
          }
          .about-exp-badge {
            left: 4px !important;
            top: auto !important;
            bottom: 14px !important;
            padding: 8px 12px !important;
            border-radius: 16px !important;
          }
          .about-pillars-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
            margin-bottom: 24px !important;
          }
          .about-pillar-card {
            padding: 14px 12px !important;
            border-radius: 16px !important;
            gap: 6px !important;
          }
          .about-pillar-card h4 {
            font-size: 12.5px !important;
            line-height: 1.25 !important;
          }
          .about-pillar-card p {
            font-size: 11px !important;
            line-height: 1.35 !important;
          }
          .about-actions-row {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 10px !important;
          }
          .about-actions-row .btn-primary,
          .about-actions-row .btn-secondary {
            width: 100% !important;
            justify-content: center !important;
          }
          .about-halal-badge {
            margin-left: 0 !important;
            justify-content: center !important;
            margin-top: 6px !important;
          }
        }
      `}</style>
    </section>
  );
}
