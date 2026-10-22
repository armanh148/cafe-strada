"use client";

import { useState } from "react";
import { ArrowUpRight, Coffee, Sun, Clock, Utensils } from "lucide-react";
import { CAFE_STRADA_DATA } from "@/lib/cafeStradaData";

export default function DailyEscapeCan({ data, onAddToCart }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - card.left - card.width / 2;
    const y = e.clientY - card.top - card.height / 2;
    setRotate({
      x: -(y / card.height) * 14,
      y: (x / card.width) * 14,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section
      id="breakfast"
      style={{
        paddingTop: "60px",
        paddingBottom: "80px",
      }}
    >
      <div className="veloura-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "clamp(32px, 5vw, 48px)",
            alignItems: "center",
          }}
        >
          {/* Left Column: Interactive 3D Tilting Breakfast Showcase Card */}
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              perspective: "1000px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              className="daily-tilt-card"
              style={{
                width: "100%",
                maxWidth: "520px",
                height: "clamp(380px, 55vw, 560px)",
                borderRadius: "clamp(20px, 4vw, 32px)",
                overflow: "hidden",
                position: "relative",
                transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                transition: "transform 0.15s ease-out, box-shadow 0.3s ease",
                boxShadow: "0 28px 60px -15px rgba(60, 33, 21, 0.25)",
                background: "linear-gradient(145deg, #FAF7F2, #E8DEC8)",
                border: "1px solid rgba(60, 33, 21, 0.1)",
              }}
            >
              <img
                src="/images/strada-breakfast.jpg"
                alt="Cafe Strada Continental Breakfast Spread with fluffy pancakes and coffee"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              {/* Floating Badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: "clamp(14px, 3vw, 24px)",
                  left: "clamp(12px, 3vw, 24px)",
                  right: "clamp(12px, 3vw, 24px)",
                  background: "rgba(255, 255, 255, 0.92)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  borderRadius: "18px",
                  padding: "clamp(10px, 2vw, 16px) clamp(12px, 2.5vw, 20px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "10px",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
                  border: "1px solid rgba(255, 255, 255, 0.8)",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "10px",
                      fontWeight: 700,
                      color: "#8DAE00",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: "2px",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <Clock size={11} />
                    <span>Daily 7:00 AM – 1:00 PM</span>
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(13.5px, 2vw, 16px)",
                      fontWeight: 800,
                      color: "#23150D",
                    }}
                  >
                    Continental Breakfast Spread
                  </div>
                </div>

                <a
                  href="#menu"
                  className="btn-primary"
                  style={{
                    padding: "7px clamp(12px, 2vw, 16px)",
                    fontSize: "12px",
                    flexShrink: 0,
                    textDecoration: "none",
                  }}
                >
                  View Menu
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Title, Narrative, Highlights */}
          <div>
            <span className="section-tag">
              <span className="tag-dot" />
              {CAFE_STRADA_DATA.breakfastSpecial.tag}
            </span>

            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(30px, 4vw, 50px)",
                color: "#23150D",
                margin: "10px 0 16px",
                lineHeight: 1.15,
                fontWeight: 400,
              }}
            >
              {CAFE_STRADA_DATA.breakfastSpecial.title}
            </h2>

            <p
              style={{
                fontSize: "15.5px",
                color: "#5C4638",
                lineHeight: 1.7,
                marginBottom: "24px",
                maxWidth: "520px",
              }}
            >
              {CAFE_STRADA_DATA.breakfastSpecial.subtitle}
            </p>

            {/* Bullets */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "32px" }}>
              {CAFE_STRADA_DATA.breakfastSpecial.bullets.map((b, idx) => (
                <div key={idx} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      background: "#D9FB36",
                      color: "#23150D",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "2px",
                      flexShrink: 0,
                      fontWeight: 800,
                      fontSize: "12px",
                    }}
                  >
                    ✓
                  </div>
                  <div>
                    <strong style={{ fontSize: "14.5px", color: "#23150D" }}>{b.title}: </strong>
                    <span style={{ fontSize: "14px", color: "#6C5648" }}>{b.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "32px" }}>
              <a
                href="#menu"
                className="btn-primary"
                style={{
                  padding: "10px 24px",
                  fontSize: "13.5px",
                }}
              >
                <span>Explore Full Menu</span>
                <ArrowUpRight size={15} className="arrow-icon" />
              </a>

              <a
                href={`https://wa.me/${CAFE_STRADA_DATA.contact.rawWhatsApp}?text=Hi%20Cafe%20Strada,%20I%20would%20like%20to%20reserve%20a%20table%20for%20breakfast`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{
                  padding: "10px 22px",
                  fontSize: "13.5px",
                  textDecoration: "none",
                }}
              >
                <span>Reserve Breakfast Table</span>
              </a>
            </div>

            {/* Two Subcards (Side-by-side on all screens) */}
            <div
              className="daily-subcards-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "14px",
              }}
            >
              <div
                className="card-scale daily-subcard-box"
                style={{
                  background: "#F4EFEA",
                  borderRadius: "20px",
                  padding: "12px",
                  border: "1px solid rgba(60, 33, 21, 0.08)",
                }}
              >
                <div
                  className="img-zoom-container"
                  style={{
                    height: "125px",
                    borderRadius: "16px",
                    overflow: "hidden",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    src="/images/coffee-beans.jpg"
                    alt="Artisan Roast Beans at Cafe Strada"
                    className="img-zoom"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h4
                  className="font-serif"
                  style={{
                    fontSize: "16px",
                    color: "#23150D",
                    marginBottom: "2px",
                  }}
                >
                  Artisan Espresso Bar
                </h4>
                <p style={{ fontSize: "11.5px", color: "#7A6456", margin: 0 }}>
                  100% Arabica ethically roasted beans
                </p>
              </div>

              <div
                className="card-scale daily-subcard-box"
                style={{
                  background: "#F4EFEA",
                  borderRadius: "20px",
                  padding: "12px",
                  border: "1px solid rgba(60, 33, 21, 0.08)",
                }}
              >
                <div
                  className="img-zoom-container"
                  style={{
                    height: "125px",
                    borderRadius: "16px",
                    overflow: "hidden",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    src="/images/chocolate-delight.jpg"
                    alt="Molten Lava & artisan desserts at Cafe Strada"
                    className="img-zoom"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h4
                  className="font-serif"
                  style={{
                    fontSize: "16px",
                    color: "#23150D",
                    marginBottom: "2px",
                  }}
                >
                  Fresh Baked Desserts
                </h4>
                <p style={{ fontSize: "11.5px", color: "#7A6456", margin: 0 }}>
                  Warm Belgian molten cakes & gelato
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .daily-tilt-card {
            transform: none !important;
          }
        }
        @media (max-width: 640px) {
          .daily-subcards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
          }
          .daily-subcard-box {
            padding: 10px 8px !important;
            border-radius: 16px !important;
          }
          .daily-subcard-box h4 {
            font-size: 13px !important;
            line-height: 1.25 !important;
          }
          .daily-subcard-box p {
            font-size: 10.5px !important;
            line-height: 1.35 !important;
          }
          .daily-subcard-box .img-zoom-container {
            height: clamp(80px, 24vw, 110px) !important;
            border-radius: 12px !important;
            margin-bottom: 8px !important;
          }
        }
      `}</style>
    </section>
  );
}
