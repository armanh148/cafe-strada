"use client";

import { useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { CAFE_STRADA_DATA } from "@/lib/cafeStradaData";

export default function TerraceExperience({ data = CAFE_STRADA_DATA.terrace, onAddToCart }) {
  const [activeHotspot, setActiveHotspot] = useState(null);

  const terraceData = CAFE_STRADA_DATA.terrace;

  return (
    <section
      id="ambiance"
      style={{
        paddingTop: "60px",
        paddingBottom: "80px",
      }}
    >
      <div className="veloura-container">
        {/* Header Block */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "24px",
            marginBottom: "36px",
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
                maxWidth: "540px",
                fontSize: "clamp(13.5px, 1.4vw, 15px)",
                color: "#6B5548",
                margin: 0,
              }}
            >
              {terraceData.subtitle}
            </p>
          </div>

          <a
            href={CAFE_STRADA_DATA.contact.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              padding: "10px 24px",
              fontSize: "13.5px",
            }}
          >
            <span>Directions to Clifton</span>
            <ArrowUpRight size={15} className="arrow-icon" />
          </a>
        </div>

        {/* Full-bleed Terrace Visual with Interactive Hotspots */}
        <div
          style={{
            position: "relative",
            borderRadius: "clamp(20px, 4vw, 32px)",
            overflow: "hidden",
            height: "clamp(340px, 50vw, 680px)",
            boxShadow: "0 24px 55px -12px rgba(60, 33, 21, 0.22)",
            background: "#E8DEC8",
          }}
        >
          <img
            src={terraceData.image}
            alt="Cafe Strada Clifton garden veranda and warm ambient setting"
            className="img-zoom"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 55%",
            }}
          />

          {/* Interactive Pulsing Hotspots */}
          {terraceData.hotspots.map((spot, i) => {
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
                <div
                  className="hotspot-dot"
                  onClick={() => setActiveHotspot(isOpen ? null : i)}
                  onMouseEnter={() => setActiveHotspot(i)}
                  onMouseLeave={() => setActiveHotspot(null)}
                  style={{
                    background: isOpen ? "#D9FB36" : "rgba(255, 255, 255, 0.95)",
                  }}
                >
                  <div
                    style={{
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      background: "#23150D",
                    }}
                  />
                </div>

                {/* Hotspot Tooltip Popover */}
                {isOpen && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: "34px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "rgba(35, 21, 13, 0.94)",
                      backdropFilter: "blur(14px)",
                      WebkitBackdropFilter: "blur(14px)",
                      color: "#FAF7F2",
                      padding: "8px 14px",
                      borderRadius: "12px",
                      fontSize: "12px",
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                      boxShadow: "0 10px 28px rgba(0,0,0,0.4)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      pointerEvents: "none",
                      animation: "fadeIn 0.2s ease-out",
                      zIndex: 30,
                    }}
                  >
                    ✦ {spot.label}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Interactive Highlights Track (Visible on Screens <= 768px) */}
        <div className="ambiance-mobile-pills">
          <div style={{ fontSize: "11px", fontWeight: 700, color: "#8DAE00", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>
            Tap to Explore Spaces:
          </div>
          <div
            className="no-scrollbar"
            style={{
              display: "flex",
              gap: "8px",
              overflowX: "auto",
              paddingBottom: "4px",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {terraceData.hotspots.map((spot, i) => {
              const isSelected = activeHotspot === i;
              return (
                <button
                  key={i}
                  onClick={() => setActiveHotspot(isSelected ? null : i)}
                  style={{
                    padding: "7px 14px",
                    borderRadius: "999px",
                    fontSize: "12px",
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                    cursor: "pointer",
                    border: isSelected ? "1.5px solid #23150D" : "1px solid rgba(60, 33, 21, 0.12)",
                    background: isSelected ? "#23150D" : "#FFFFFF",
                    color: isSelected ? "#FAF7F2" : "#3C2115",
                    boxShadow: isSelected ? "0 4px 12px rgba(35, 21, 13, 0.2)" : "none",
                    transition: "all 0.2s ease",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: isSelected ? "#D9FB36" : "#8DAE00" }} />
                  <span>{spot.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        .ambiance-mobile-pills {
          display: none;
          margin-top: 16px;
        }
        @media (max-width: 768px) {
          .ambiance-mobile-pills {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
}
