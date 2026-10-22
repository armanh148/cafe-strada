"use client";

import { useState, useRef, useEffect } from "react";
import { CAFE_STRADA_DATA } from "@/lib/cafeStradaData";

// Minimalist solid shopping bag icon
const SolidShoppingBag = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h6v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z" />
  </svg>
);

const STRADA_PRODUCTS = CAFE_STRADA_DATA.menu.products;
const CATEGORIES = CAFE_STRADA_DATA.menu.categories;

export default function SignatureCreations({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeCardId, setActiveCardId] = useState("moroccan-chicken-steak");
  const [startIndex, setStartIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(25);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredProducts =
    activeCategory === "All"
      ? STRADA_PRODUCTS
      : STRADA_PRODUCTS.filter((p) => p.category === activeCategory);

  const visibleCount = 4;
  const maxStartIndex = Math.max(0, filteredProducts.length - visibleCount);

  // Desktop Next / Previous
  const handleNext = () => {
    if (carouselRef.current && window.innerWidth <= 768) {
      carouselRef.current.scrollBy({ left: 280, behavior: "smooth" });
      return;
    }

    setStartIndex((prev) => {
      const nextIdx = prev + 1 > maxStartIndex ? 0 : prev + 1;
      const nextItem = filteredProducts[Math.min(nextIdx + 1, filteredProducts.length - 1)];
      if (nextItem) setActiveCardId(nextItem.id);
      return nextIdx;
    });
  };

  const handlePrev = () => {
    if (carouselRef.current && window.innerWidth <= 768) {
      carouselRef.current.scrollBy({ left: -280, behavior: "smooth" });
      return;
    }

    setStartIndex((prev) => {
      const prevIdx = prev - 1 < 0 ? maxStartIndex : prev - 1;
      const prevItem = filteredProducts[Math.min(prevIdx + 1, filteredProducts.length - 1)];
      if (prevItem) setActiveCardId(prevItem.id);
      return prevIdx;
    });
  };

  // Real-time mobile touch scroll listener for progress bar
  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll > 0) {
        setScrollProgress((scrollLeft / maxScroll) * 100);
      }
    }
  };

  // Update progress percentage when startIndex changes on desktop
  useEffect(() => {
    const totalSteps = maxStartIndex + 1;
    if (totalSteps > 1) {
      setScrollProgress((startIndex / (totalSteps - 1)) * 100);
    }
  }, [startIndex, maxStartIndex]);

  const visibleProducts = filteredProducts.slice(startIndex, startIndex + visibleCount);
  if (visibleProducts.length < visibleCount && filteredProducts.length >= visibleCount) {
    visibleProducts.push(...filteredProducts.slice(0, visibleCount - visibleProducts.length));
  }

  const handleAddToCartClick = (product, e) => {
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  return (
    <section
      id="menu"
      style={{
        paddingTop: "60px",
        paddingBottom: "70px",
        background: "#FAF7F2",
      }}
    >
      <div className="veloura-container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <span className="section-tag">
            <span className="tag-dot" />
            Clifton Kitchen Specialties
          </span>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(28px, 4.4vw, 54px)",
              color: "#23150D",
              margin: "6px 0 10px",
              fontWeight: 400,
            }}
          >
            Café Strada Continental Menu
          </h2>
          <p
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              fontSize: "clamp(13.5px, 1.4vw, 15px)",
              color: "#6B5548",
            }}
          >
            Sizzling steaks, creamy Italian pastas, gourmet club sandwiches, and specialty coffees handcrafted fresh upon order in Clifton, Karachi.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div
          className="no-scrollbar"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            overflowX: "auto",
            padding: "4px 8px 14px",
            marginBottom: "32px",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setStartIndex(0);
                  if (carouselRef.current) {
                    carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
                  }
                }}
                style={{
                  background: isActive ? "#D9FB36" : "rgba(255, 255, 255, 0.9)",
                  color: isActive ? "#18120C" : "#554438",
                  border: isActive
                    ? "1.5px solid #D9FB36"
                    : "1.5px solid rgba(60, 33, 21, 0.12)",
                  padding: "8px 20px",
                  borderRadius: "999px",
                  fontSize: "13px",
                  fontWeight: 700,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                  boxShadow: isActive
                    ? "0 4px 14px rgba(217, 251, 54, 0.45)"
                    : "none",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Cards Row: Grid on Desktop & Smooth Snapping Touch Carousel on Mobile */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="products-grid-or-carousel no-scrollbar"
        >
          {(isMobile ? filteredProducts : visibleProducts).map((product) => {
            const isActive = activeCardId === product.id;

            return (
              <div
                key={product.id}
                className="product-card-wrap"
                onClick={() => setActiveCardId(product.id)}
                onMouseEnter={() => setActiveCardId(product.id)}
              >
                {/* Image Box */}
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "14px",
                    minHeight: "clamp(240px, 62vw, 300px)",
                  }}
                >
                  {isActive ? (
                    /* Active Card: Circular Frame with Zoomed Detail */
                    <div
                      style={{
                        width: "clamp(230px, 60vw, 280px)",
                        height: "clamp(230px, 60vw, 280px)",
                        borderRadius: "50%",
                        overflow: "hidden",
                        position: "relative",
                        boxShadow: "0 18px 40px -10px rgba(60, 33, 21, 0.25)",
                        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                        transform: "scale(1.02)",
                        border: "3.5px solid #FAF7F2",
                        background: "#EAE3D9",
                      }}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.5s ease",
                        }}
                      />
                      {product.badge && (
                        <div
                          style={{
                            position: "absolute",
                            bottom: "16px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            background: "rgba(35, 21, 13, 0.85)",
                            color: "#D9FB36",
                            padding: "4px 10px",
                            borderRadius: "999px",
                            fontSize: "10px",
                            fontWeight: 700,
                            letterSpacing: "0.05em",
                            textTransform: "uppercase",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {product.badge}
                        </div>
                      )}
                    </div>
                  ) : (
                    /* Inactive Card: Rounded on Mobile & Chamfered polygon on Desktop */
                    <div
                      style={{
                        width: "100%",
                        height: "clamp(240px, 62vw, 300px)",
                        background: "#EAE3D9",
                        clipPath: isMobile ? "none" : "polygon(36px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 36px)",
                        borderRadius: isMobile ? "24px" : "0",
                        position: "relative",
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.5s ease",
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* Bottom Details Row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 6px",
                  }}
                >
                  {/* Left: Title & Price */}
                  <div>
                    <h3
                      style={{
                        fontSize: "clamp(15px, 2vw, 16.5px)",
                        fontWeight: 700,
                        color: "#23150D",
                        margin: "0 0 3px",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {product.name}
                    </h3>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span
                        style={{
                          fontSize: "clamp(15px, 2vw, 17px)",
                          fontWeight: 800,
                          color: "#3C2115",
                        }}
                      >
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span
                          style={{
                            fontSize: "12.5px",
                            fontWeight: 500,
                            color: "#9C8A7C",
                            textDecoration: "line-through",
                          }}
                        >
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right: Circular Shopping Bag Button */}
                  <button
                    onClick={(e) => handleAddToCartClick(product, e)}
                    aria-label={`Add ${product.name} to order`}
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "50%",
                      background: isActive ? "#D9FB36" : "#FFFFFF",
                      color: "#23150D",
                      border: isActive ? "none" : "1.5px solid rgba(60, 33, 21, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                      boxShadow: isActive
                        ? "0 4px 14px rgba(217, 251, 54, 0.5)"
                        : "0 2px 6px rgba(0, 0, 0, 0.05)",
                      flexShrink: 0,
                    }}
                  >
                    <SolidShoppingBag />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Carousel Controls: Previous | Progress Track | Next */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(10px, 3vw, 20px)",
            padding: "0 8px",
          }}
        >
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            style={{
              background: "#FFFFFF",
              color: "#3C2115",
              border: "1.5px solid rgba(60, 33, 21, 0.15)",
              padding: "8px clamp(16px, 3.5vw, 24px)",
              borderRadius: "999px",
              fontSize: "12.5px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            Previous
          </button>

          {/* Progress Slider Track */}
          <div
            style={{
              width: "clamp(80px, 24vw, 160px)",
              height: "2.5px",
              background: "rgba(60, 33, 21, 0.12)",
              position: "relative",
              borderRadius: "999px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: `${Math.min(65, (scrollProgress / 100) * 65)}%`,
                width: "35%",
                height: "2.5px",
                background: "#3C2115",
                borderRadius: "999px",
                transition: "left 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            style={{
              background: "#FFFFFF",
              color: "#3C2115",
              border: "1.5px solid rgba(60, 33, 21, 0.15)",
              padding: "8px clamp(16px, 3.5vw, 24px)",
              borderRadius: "999px",
              fontSize: "12.5px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            Next
          </button>
        </div>
      </div>

      <style jsx>{`
        .products-grid-or-carousel {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
          align-items: end;
          margin-bottom: 44px;
        }

        .product-card-wrap {
          display: flex;
          flex-direction: column;
          cursor: pointer;
          user-select: none;
          transition: transform 0.3s ease;
        }

        @media (max-width: 768px) {
          .products-grid-or-carousel {
            display: flex !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
            -webkit-overflow-scrolling: touch !important;
            gap: 16px !important;
            padding: 8px 16px 20px !important;
            margin-left: -16px !important;
            margin-right: -16px !important;
          }

          .product-card-wrap {
            scroll-snap-align: center !important;
            flex: 0 0 82% !important;
            max-width: 320px !important;
          }
        }
      `}</style>
    </section>
  );
}
