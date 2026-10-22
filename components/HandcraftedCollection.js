"use client";

import { ArrowUpRight } from "lucide-react";

export default function HandcraftedCollection({ data, onAddToCart }) {
  return (
    <section
      id="collection"
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
          {/* Left Column: Heading and Brand Narrative */}
          <div>
            <span className="section-tag">
              <span className="tag-dot" />
              Strada Craftsmanship
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
              Every Dish Tells a Story of Flavor & Freshness
            </h2>

            <p
              style={{
                fontSize: "17px",
                fontWeight: 600,
                color: "#2E1810",
                lineHeight: 1.5,
                marginBottom: "20px",
                maxWidth: "480px",
              }}
            >
              Handcrafted in Clifton with 100% farm-fresh meats, imported parmesan, and real dairy cream.
            </p>

            <p
              style={{
                fontSize: "14px",
                color: "#6B5548",
                lineHeight: 1.7,
                marginBottom: "30px",
                maxWidth: "480px",
              }}
            >
              From our famous Moroccan pepper sauce simmered slowly with secret spices to hand-tossed fettuccine al dente, our kitchen guarantees authentic taste without cutting corners. Pair your meal with our slow-steeped iced coffees or a warm Belgian lava cake.
            </p>

            <a
              href="#menu"
              className="btn-primary"
              style={{
                padding: "10px 24px",
                fontSize: "13.5px",
              }}
            >
              <span>Explore All Dishes</span>
              <ArrowUpRight size={15} className="arrow-icon" />
            </a>
          </div>

          {/* Right Column: Two Elegant Showcase Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
              gap: "20px",
            }}
          >
            {/* Steak Card */}
            <div
              className="card-scale"
              style={{
                background: "#F4EFEA",
                borderRadius: "26px",
                padding: "16px",
                border: "1px solid rgba(60, 33, 21, 0.08)",
              }}
            >
              <div
                className="img-zoom-container"
                style={{
                  height: "clamp(180px, 45vw, 220px)",
                  borderRadius: "20px",
                  overflow: "hidden",
                  marginBottom: "14px",
                }}
              >
                <img
                  src="/images/strada-steak.jpg"
                  alt="Sizzling steak specialty at Cafe Strada"
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
                  fontSize: "18px",
                  color: "#23150D",
                  marginBottom: "4px",
                }}
              >
                Signature Sizzling Steaks
              </h4>
              <p style={{ fontSize: "12px", color: "#6B5548", margin: 0 }}>
                Charbroiled chicken & tenderloin fillets glazed with velvety Moroccan & Tarragon sauces.
              </p>
            </div>

            {/* Pasta & Dessert Card */}
            <div
              className="card-scale"
              style={{
                background: "#F4EFEA",
                borderRadius: "26px",
                padding: "16px",
                border: "1px solid rgba(60, 33, 21, 0.08)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                className="img-zoom-container"
                style={{
                  height: "140px",
                  borderRadius: "20px",
                  overflow: "hidden",
                  marginBottom: "14px",
                }}
              >
                <img
                  src="/images/strada-pasta.jpg"
                  alt="Fettuccine Alfredo pasta at Cafe Strada"
                  className="img-zoom"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Reserve Feature Box */}
              <div
                style={{
                  background: "#FAF7F2",
                  borderRadius: "18px",
                  padding: "14px",
                  border: "1px solid rgba(60, 33, 21, 0.08)",
                }}
              >
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: "#8DAE00",
                    textTransform: "uppercase",
                    marginBottom: "3px",
                  }}
                >
                  Italian Tradition
                </div>
                <div
                  className="font-serif"
                  style={{
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "#23150D",
                    marginBottom: "4px",
                  }}
                >
                  Fettuccine Alfredo
                </div>
                <p style={{ fontSize: "11.5px", color: "#6B5548", margin: 0 }}>
                  Slow-simmered garlic parmesan white cream ribbons with grilled chicken.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
