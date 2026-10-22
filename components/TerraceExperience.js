"use client";

import { useState } from "react";
import { ArrowUpRight, MapPin, Sparkles, Trees, Coffee, PartyPopper, ShieldCheck, Clock } from "lucide-react";
import { CAFE_STRADA_DATA } from "@/lib/cafeStradaData";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function TerraceExperience({ data = CAFE_STRADA_DATA.terrace, onAddToCart }) {
  const [activeSpaceIdx, setActiveSpaceIdx] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState(null);

  const terraceData = CAFE_STRADA_DATA.terrace;
  const spaces = terraceData.spaces || [];
  const currentSpace = spaces[activeSpaceIdx] || spaces[0];

  const spaceIcons = [
    <Trees key="trees" size={16} />,
    <Coffee key="coffee" size={16} />,
    <PartyPopper key="party" size={16} />,
  ];

  return (
    <section
      id="ambiance"
      style={{
        paddingTop: "60px",
        paddingBottom: "80px",
      }}
    >
      <div className="veloura-container">
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "24px",
            marginBottom: "28px",
          }}
        >
          <div>
            <span className="section-tag">
              <span className="tag-dot" />
              {terraceData.tag}
            </span>
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(28px, 4.2vw, 50px)",
                color: "#23150D",
                margin: "6px 0 10px",
                fontWeight: 400,
              }}
            >
              {terraceData.title}
            </h2>
            <p
              style={{
                maxWidth: "560px",
                fontSize: "clamp(13.5px, 1.4vw, 15px)",
                color: "#6B5548",
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              {terraceData.subtitle}
            </p>
          </div>

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <a
              href={`https://wa.me/${CAFE_STRADA_DATA.contact.rawWhatsApp}?text=${encodeURIComponent(
                currentSpace.whatsappMessage || "Hi Cafe Strada, I would like to reserve a table."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#25D366",
                color: "#FFFFFF",
                fontSize: "13.5px",
                fontWeight: 700,
                padding: "10px 20px",
                borderRadius: "999px",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(37, 211, 102, 0.35)",
                transition: "all 0.25s ease",
              }}
            >
              <WhatsAppIcon size={16} color="#FFFFFF" />
              <span>Reserve Table via WhatsApp</span>
            </a>

            <a
              href={CAFE_STRADA_DATA.contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{
                padding: "10px 20px",
                fontSize: "13.5px",
                textDecoration: "none",
              }}
            >
              <MapPin size={15} color="#8DAE00" />
              <span>Directions to Clifton</span>
              <ArrowUpRight size={14} className="arrow-icon" />
            </a>
          </div>
        </div>

        {/* Space Selector Tabs */}
        <div
          className="no-scrollbar"
          style={{
            display: "flex",
            gap: "10px",
            overflowX: "auto",
            paddingBottom: "8px",
            marginBottom: "20px",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {spaces.map((sp, idx) => {
            const isActive = activeSpaceIdx === idx;
            return (
              <button
                key={sp.id}
                onClick={() => {
                  setActiveSpaceIdx(idx);
                  setActiveHotspot(null);
                }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 20px",
                  borderRadius: "999px",
                  fontSize: "13px",
                  fontWeight: 700,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  border: isActive ? "2px solid #23150D" : "1.5px solid rgba(60, 33, 21, 0.12)",
                  background: isActive ? "#23150D" : "#FFFFFF",
                  color: isActive ? "#FAF7F2" : "#3C2115",
                  boxShadow: isActive
                    ? "0 6px 18px rgba(35, 21, 13, 0.2)"
                    : "0 2px 6px rgba(0, 0, 0, 0.03)",
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                  flexShrink: 0,
                }}
              >
                <span style={{ color: isActive ? "#D9FB36" : "#8DAE00", display: "flex" }}>
                  {spaceIcons[idx] || <Sparkles size={16} />}
                </span>
                <span>{sp.name}</span>
              </button>
            );
          })}
        </div>

        {/* Visual Card with Hotspots and Floating Info Card */}
        <div
          style={{
            position: "relative",
            borderRadius: "clamp(22px, 4vw, 34px)",
            overflow: "hidden",
            height: "clamp(340px, 46vw, 600px)",
            boxShadow: "0 24px 55px -12px rgba(60, 33, 21, 0.25)",
            background: "#23150D",
          }}
        >
          {/* Main Space Image */}
          <img
            key={currentSpace.id}
            src={currentSpace.image}
            alt={currentSpace.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              animation: "fadeIn 0.4s ease-out",
            }}
          />

          {/* Gradient Overlay for Text Readability */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(35, 21, 13, 0.85) 0%, rgba(35, 21, 13, 0.2) 40%, rgba(35, 21, 13, 0.1) 100%)",
              pointerEvents: "none",
            }}
          />

          {/* Interactive Hotspots on the Image */}
          {(currentSpace.hotspots || []).map((spot, i) => {
            const isOpen = activeHotspot === i;
            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: spot.x,
                  top: spot.y,
                  transform: "translate(-50%, -50%)",
                  zIndex: 25,
                }}
              >
                <button
                  type="button"
                  aria-label={`Inspect ${spot.label}`}
                  onClick={() => setActiveHotspot(isOpen ? null : i)}
                  onMouseEnter={() => setActiveHotspot(i)}
                  onMouseLeave={() => setActiveHotspot(null)}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: isOpen ? "#D9FB36" : "rgba(255, 255, 255, 0.95)",
                    boxShadow: "0 4px 18px rgba(0, 0, 0, 0.4)",
                    transition: "transform 0.2s ease, background 0.2s ease",
                    transform: isOpen ? "scale(1.2)" : "scale(1)",
                  }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#23150D",
                    }}
                  />
                </button>

                {/* Hotspot Tooltip Popover */}
                {isOpen && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: "44px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "rgba(35, 21, 13, 0.96)",
                      backdropFilter: "blur(14px)",
                      WebkitBackdropFilter: "blur(14px)",
                      color: "#FAF7F2",
                      padding: "10px 16px",
                      borderRadius: "14px",
                      fontSize: "12.5px",
                      boxShadow: "0 12px 32px rgba(0,0,0,0.45)",
                      border: "1px solid rgba(217, 251, 54, 0.35)",
                      pointerEvents: "none",
                      animation: "fadeIn 0.2s ease-out",
                      zIndex: 35,
                      minWidth: "160px",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontWeight: 700, color: "#D9FB36", marginBottom: "2px" }}>
                      ✦ {spot.label}
                    </div>
                    {spot.desc && (
                      <div style={{ fontSize: "11px", color: "#E0D5C7" }}>
                        {spot.desc}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}

          {/* Floating Space Detail Panel on Desktop / Tablet (Bottom Left of Image) */}
          <div
            className="space-floating-panel"
            style={{
              position: "absolute",
              bottom: "24px",
              left: "24px",
              right: "24px",
              zIndex: 20,
              maxWidth: "640px",
            }}
          >
            <div
              style={{
                background: "rgba(35, 21, 13, 0.88)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                borderRadius: "20px",
                padding: "16px 20px",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                boxShadow: "0 14px 38px rgba(0, 0, 0, 0.35)",
                color: "#FAF7F2",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                <span
                  style={{
                    background: "#D9FB36",
                    color: "#23150D",
                    fontSize: "10px",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    padding: "3px 8px",
                    borderRadius: "999px",
                  }}
                >
                  {currentSpace.tag}
                </span>
                <span style={{ fontSize: "14px", fontWeight: 700, color: "#FAF7F2" }}>
                  {currentSpace.name}
                </span>
              </div>

              <p style={{ fontSize: "12.5px", color: "#DCD0C4", margin: "0 0 10px 0", lineHeight: 1.5 }}>
                {currentSpace.description}
              </p>

              {/* Space Highlights Badges */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {(currentSpace.features || []).map((f) => (
                  <span
                    key={f}
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      color: "#FAF7F2",
                      background: "rgba(255, 255, 255, 0.12)",
                      padding: "4px 10px",
                      borderRadius: "999px",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    ✓ {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3 Luxury Ambiance Highlight Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "16px",
            marginTop: "24px",
          }}
        >
          {/* Card 1 */}
          <div
            className="card-scale"
            style={{
              background: "#FFFFFF",
              borderRadius: "22px",
              padding: "20px 22px",
              border: "1px solid rgba(60, 33, 21, 0.08)",
              boxShadow: "0 4px 16px rgba(60, 33, 21, 0.04)",
              display: "flex",
              alignItems: "flex-start",
              gap: "14px",
            }}
          >
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "12px",
                background: "rgba(141, 174, 0, 0.15)",
                color: "#8DAE00",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Trees size={20} />
            </div>
            <div>
              <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#23150D", margin: "0 0 4px 0" }}>
                Classic Clifton Bungalow
              </h4>
              <p style={{ fontSize: "12.5px", color: "#6B5548", margin: 0, lineHeight: 1.5 }}>
                Tucked in serene KDA Scheme 5 away from commercial shopping mall bustle.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="card-scale"
            style={{
              background: "#FFFFFF",
              borderRadius: "22px",
              padding: "20px 22px",
              border: "1px solid rgba(60, 33, 21, 0.08)",
              boxShadow: "0 4px 16px rgba(60, 33, 21, 0.04)",
              display: "flex",
              alignItems: "flex-start",
              gap: "14px",
            }}
          >
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "12px",
                background: "rgba(37, 211, 102, 0.15)",
                color: "#25D366",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <ShieldCheck size={20} />
            </div>
            <div>
              <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#23150D", margin: "0 0 4px 0" }}>
                Private On-Site Valet
              </h4>
              <p style={{ fontSize: "12.5px", color: "#6B5548", margin: 0, lineHeight: 1.5 }}>
                Dedicated secure villa parking and valet assistance for families.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="card-scale"
            style={{
              background: "#FFFFFF",
              borderRadius: "22px",
              padding: "20px 22px",
              border: "1px solid rgba(60, 33, 21, 0.08)",
              boxShadow: "0 4px 16px rgba(60, 33, 21, 0.04)",
              display: "flex",
              alignItems: "flex-start",
              gap: "14px",
            }}
          >
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "12px",
                background: "rgba(217, 251, 54, 0.4)",
                color: "#23150D",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Clock size={20} />
            </div>
            <div>
              <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#23150D", margin: "0 0 4px 0" }}>
                Daily 7:00 AM – Midnight
              </h4>
              <p style={{ fontSize: "12.5px", color: "#6B5548", margin: 0, lineHeight: 1.5 }}>
                Early bird breakfast, afternoon high-tea, and late-night continental dinners.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 600px) {
          .space-floating-panel {
            left: 14px !important;
            right: 14px !important;
            bottom: 14px !important;
          }
          .space-floating-panel > div {
            padding: 12px 14px !important;
          }
        }
      `}</style>
    </section>
  );
}
