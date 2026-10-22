"use client";

import { useState, useRef } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { CAFE_STRADA_DATA } from "@/lib/cafeStradaData";

const REVIEW_PAGES = [
  {
    reviews: [
      {
        quote:
          "The quality and taste are amazing! Every piece feels stylish, comfortable, and premium. Truly unmatched.",
        author: "Ayesha Khan",
        role: "Clifton Resident",
        avatar: "/images/customer-1.jpg",
        rating: "4.9/5",
      },
      {
        quote:
          "Perfect sizzling steak, gorgeous ambiance, and excellent service. Highly recommended for family dinners!",
        author: "Bilal Tariq",
        role: "DHA Karachi",
        avatar: "/images/customer-2.jpg",
        rating: "5.0/5",
      },
      {
        quote:
          "This cafe helped us redefine our celebrations. The private birthday room decor and Alfredo pasta were fresh and modern.",
        author: "Mahnoor Sheikh",
        role: "Food Connoisseur",
        avatar: "/images/customer-3.jpg",
        rating: "4.9/5",
      },
    ],
    photo: "/images/about-sunglasses.jpg",
    photoAlt: "Guest smiling and enjoying dining at Cafe Strada",
  },
  {
    reviews: [
      {
        quote:
          "Their Moroccan Chicken Steak and Loaded Garlic Mayo Fries are unbeatable. The quiet bungalow setting is such a refreshing escape.",
        author: "Farhan & Zara",
        role: "Regular Diners",
        avatar: "/images/customer-4.jpg",
        rating: "5.0/5",
      },
      {
        quote:
          "Excellent breakfast experience! The Spanish Latte and fluffy pancakes at 7:00 AM set the perfect tone for the day.",
        author: "Saad Hashmi",
        role: "Karachi Foodie",
        avatar: "/images/sophia-critic.jpg",
        rating: "4.9/5",
      },
      {
        quote:
          "We hosted an intimate bridal shower in their VIP lounge. The staff took care of every single decor detail with great warmth.",
        author: "Hira Mansoor",
        role: "Event Organizer",
        avatar: "/images/customer-1.jpg",
        rating: "5.0/5",
      },
    ],
    photo: "/images/hero-couple.jpg",
    photoAlt: "Guests sharing coffee and dessert at Cafe Strada",
  },
];

const ALL_REVIEWS = [
  ...REVIEW_PAGES[0].reviews,
  ...REVIEW_PAGES[1].reviews,
];

const AVATAR_STACK = [
  "/images/customer-1.jpg",
  "/images/customer-2.jpg",
  "/images/customer-3.jpg",
];

export default function TestimonialsBento({ data = CAFE_STRADA_DATA.testimonials }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const mobileSliderRef = useRef(null);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % REVIEW_PAGES.length);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + REVIEW_PAGES.length) % REVIEW_PAGES.length);
  };

  // Mobile slider scroll & step handlers
  const handleMobileScroll = () => {
    if (mobileSliderRef.current) {
      const { scrollLeft, clientWidth } = mobileSliderRef.current;
      const cardStep = clientWidth * 0.85 + 14;
      const idx = Math.round(scrollLeft / cardStep);
      setActiveMobileIndex(Math.min(ALL_REVIEWS.length - 1, Math.max(0, idx)));
    }
  };

  const handleMobileNext = () => {
    if (mobileSliderRef.current) {
      const cardStep = mobileSliderRef.current.clientWidth * 0.85 + 14;
      mobileSliderRef.current.scrollBy({ left: cardStep, behavior: "smooth" });
    }
  };

  const handleMobilePrev = () => {
    if (mobileSliderRef.current) {
      const cardStep = mobileSliderRef.current.clientWidth * 0.85 + 14;
      mobileSliderRef.current.scrollBy({ left: -cardStep, behavior: "smooth" });
    }
  };

  const scrollToReview = (idx) => {
    if (mobileSliderRef.current) {
      const cardStep = mobileSliderRef.current.clientWidth * 0.85 + 14;
      mobileSliderRef.current.scrollTo({ left: idx * cardStep, behavior: "smooth" });
      setActiveMobileIndex(idx);
    }
  };

  const currentSet = REVIEW_PAGES[currentPage];

  return (
    <section
      id="reviews"
      style={{
        paddingTop: "60px",
        paddingBottom: "80px",
        background: "transparent",
      }}
    >
      <div className="veloura-container">
        {/* Desktop 3 Columns x 2 Rows Layout Grid */}
        <div className="client-reviews-grid desktop-reviews-bento">
          {/* Cell 1 (Col 1, Row 1): Title, Subtitle & Avatar Stack */}
          <div className="reviews-header-cell">
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(34px, 4vw, 56px)",
                color: "#23150D",
                lineHeight: 1.12,
                letterSpacing: "-0.02em",
                margin: "0 0 16px 0",
                fontWeight: 400,
              }}
            >
              What Our Happy
              <br />
              Clients Say
            </h2>

            <p
              style={{
                fontSize: "clamp(13.5px, 1.3vw, 15px)",
                color: "#5C4638",
                lineHeight: 1.6,
                margin: "0 0 24px 0",
                maxWidth: "360px",
              }}
            >
              Hear genuine feedback from our clients who trust us for quality, reliability, and great results.
            </p>

            {/* Overlapping Avatars + 18+ Orange Pill Badge */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ display: "flex", marginLeft: "2px" }}>
                {AVATAR_STACK.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Customer ${i + 1}`}
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "2px solid #FAF7F2",
                      marginLeft: i > 0 ? "-12px" : "0",
                      boxShadow: "0 2px 8px rgba(60, 33, 21, 0.15)",
                    }}
                  />
                ))}
              </div>

              <div
                style={{
                  background: "#FF5E1E",
                  color: "#FFFFFF",
                  fontSize: "12px",
                  fontWeight: 800,
                  padding: "4px 12px",
                  borderRadius: "999px",
                  letterSpacing: "0.02em",
                  boxShadow: "0 4px 12px rgba(255, 94, 30, 0.35)",
                }}
              >
                18+
              </div>
            </div>
          </div>

          {/* Cell 2 (Col 2, Row 1): Review Card 1 */}
          <div className="review-card-item">
            <div>
              <div className="review-quote-mark">“</div>
              <p className="review-card-text">
                {currentSet.reviews[0].quote}
              </p>
            </div>

            <div className="review-card-author">
              <img
                src={currentSet.reviews[0].avatar}
                alt={currentSet.reviews[0].author}
                className="review-author-img"
              />
              <div>
                <h4 className="review-author-name">
                  {currentSet.reviews[0].author}
                </h4>
                <div className="review-star-rating">
                  <Star size={13} fill="#8DAE00" color="#8DAE00" strokeWidth={0} />
                  <span>{currentSet.reviews[0].rating}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cell 3 (Col 3, Row 1): Review Card 2 */}
          <div className="review-card-item">
            <div>
              <div className="review-quote-mark">“</div>
              <p className="review-card-text">
                {currentSet.reviews[1].quote}
              </p>
            </div>

            <div className="review-card-author">
              <img
                src={currentSet.reviews[1].avatar}
                alt={currentSet.reviews[1].author}
                className="review-author-img"
              />
              <div>
                <h4 className="review-author-name">
                  {currentSet.reviews[1].author}
                </h4>
                <div className="review-star-rating">
                  <Star size={13} fill="#8DAE00" color="#8DAE00" strokeWidth={0} />
                  <span>{currentSet.reviews[1].rating}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cell 4 (Col 1, Row 2): Empty spacing on desktop */}
          <div className="reviews-empty-cell" />

          {/* Cell 5 (Col 2, Row 2): Review Card 3 */}
          <div className="review-card-item">
            <div>
              <div className="review-quote-mark">“</div>
              <p className="review-card-text">
                {currentSet.reviews[2].quote}
              </p>
            </div>

            <div className="review-card-author">
              <img
                src={currentSet.reviews[2].avatar}
                alt={currentSet.reviews[2].author}
                className="review-author-img"
              />
              <div>
                <h4 className="review-author-name">
                  {currentSet.reviews[2].author}
                </h4>
                <div className="review-star-rating">
                  <Star size={13} fill="#8DAE00" color="#8DAE00" strokeWidth={0} />
                  <span>{currentSet.reviews[2].rating}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cell 6 (Col 3, Row 2): Photo Card + Interactive Arrows */}
          <div className="review-photo-arrows-cell">
            <div className="review-photo-wrapper">
              <img
                src={currentSet.photo}
                alt={currentSet.photoAlt}
                className="review-photo-img"
              />
            </div>

            <div className="review-nav-arrows">
              <button
                onClick={handlePrev}
                aria-label="Previous reviews"
                className="review-nav-btn"
              >
                <ArrowLeft size={18} />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next reviews"
                className="review-nav-btn"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Horizontal Touch Slider (Visible on Screens <= 768px) */}
        <div className="mobile-reviews-slider-section">
          {/* Header */}
          <div>
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(28px, 6.5vw, 42px)",
                color: "#23150D",
                lineHeight: 1.15,
                margin: "0 0 10px 0",
                fontWeight: 400,
              }}
            >
              What Our Happy
              <br />
              Clients Say
            </h2>

            <p
              style={{
                fontSize: "13.5px",
                color: "#5C4638",
                lineHeight: 1.6,
                margin: "0 0 18px 0",
              }}
            >
              Hear genuine feedback from our clients who trust us for quality, reliability, and great results.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ display: "flex", marginLeft: "2px" }}>
                {AVATAR_STACK.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Customer ${i + 1}`}
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "2px solid #FAF7F2",
                      marginLeft: i > 0 ? "-10px" : "0",
                      boxShadow: "0 2px 6px rgba(60, 33, 21, 0.12)",
                    }}
                  />
                ))}
              </div>

              <div
                style={{
                  background: "#FF5E1E",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: 800,
                  padding: "3px 10px",
                  borderRadius: "999px",
                  letterSpacing: "0.02em",
                }}
              >
                18+
              </div>
            </div>
          </div>

          {/* Swipeable Horizontal Cards Track */}
          <div
            ref={mobileSliderRef}
            onScroll={handleMobileScroll}
            className="mobile-reviews-track no-scrollbar"
          >
            {ALL_REVIEWS.map((review, idx) => (
              <div key={idx} className="mobile-review-slide-card">
                <div>
                  <div className="review-quote-mark">“</div>
                  <p className="review-card-text">
                    {review.quote}
                  </p>
                </div>

                <div className="review-card-author">
                  <img
                    src={review.avatar}
                    alt={review.author}
                    className="review-author-img"
                  />
                  <div>
                    <h4 className="review-author-name">
                      {review.author}
                    </h4>
                    <div style={{ fontSize: "11px", color: "#8C7466", marginBottom: "2px" }}>
                      {review.role}
                    </div>
                    <div className="review-star-rating">
                      <Star size={12} fill="#8DAE00" color="#8DAE00" strokeWidth={0} />
                      <span>{review.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Pagination Controls: Left Arrow, Centered Dots, Right Arrow */}
          <div
            className="mobile-reviews-controls"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              padding: "6px 2px",
              marginTop: "8px",
              flexWrap: "nowrap",
            }}
          >
            {/* Prev Button (Left) */}
            <button
              onClick={handleMobilePrev}
              aria-label="Previous review"
              className="review-nav-btn"
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                border: "1.5px solid rgba(60, 33, 21, 0.18)",
                background: "#FFFFFF",
                color: "#3C2115",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(60, 33, 21, 0.08)",
                flexShrink: 0,
              }}
            >
              <ArrowLeft size={18} />
            </button>

            {/* Centered Dots */}
            <div
              style={{
                display: "flex",
                gap: "7px",
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              {ALL_REVIEWS.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => scrollToReview(dotIdx)}
                  aria-label={`Go to review ${dotIdx + 1}`}
                  style={{
                    width: activeMobileIndex === dotIdx ? "20px" : "7px",
                    height: "7px",
                    borderRadius: "999px",
                    background: activeMobileIndex === dotIdx ? "#3C2115" : "rgba(60, 33, 21, 0.22)",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
              ))}
            </div>

            {/* Next Button (Right) */}
            <button
              onClick={handleMobileNext}
              aria-label="Next review"
              className="review-nav-btn"
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                border: "1.5px solid rgba(60, 33, 21, 0.18)",
                background: "#FFFFFF",
                color: "#3C2115",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(60, 33, 21, 0.08)",
                flexShrink: 0,
              }}
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .client-reviews-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr 1fr;
          gap: 28px;
          align-items: stretch;
        }

        .mobile-reviews-slider-section {
          display: none;
        }

        .reviews-header-cell {
          display: flex;
          flex-direction: column;
          justifyContent: center;
        }

        .reviews-empty-cell {
          display: block;
        }

        .review-card-item {
          background: #FFFFFF;
          border-radius: 26px;
          padding: 30px;
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          border: 1px solid rgba(60, 33, 21, 0.08);
          box-shadow: 0 10px 28px -6px rgba(60, 33, 21, 0.07);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
          min-height: 240px;
        }

        .review-card-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 36px -8px rgba(60, 33, 21, 0.14);
        }

        .review-quote-mark {
          font-family: Georgia, serif;
          font-size: 32px;
          font-weight: 700;
          color: #8DAE00;
          line-height: 0.8;
          margin-bottom: 16px;
          user-select: none;
        }

        .review-card-text {
          font-size: 14.5px;
          line-height: 1.65;
          color: #3C2115;
          font-weight: 500;
          margin: 0;
        }

        .review-card-author {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 24px;
        }

        .review-author-img {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          object-fit: cover;
          border: 1.5px solid rgba(60, 33, 21, 0.15);
        }

        .review-author-name {
          font-size: 14.5px;
          font-weight: 700;
          color: #23150D;
          margin: 0 0 2px 0;
        }

        .review-star-rating {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 12.5px;
          font-weight: 700;
          color: #8DAE00;
        }

        .review-photo-arrows-cell {
          display: flex;
          align-items: flex-end;
          gap: 18px;
          height: 100%;
        }

        .review-photo-wrapper {
          flex: 1;
          height: 100%;
          min-height: 240px;
          border-radius: 26px;
          overflow: hidden;
          border: 1px solid rgba(60, 33, 21, 0.08);
          box-shadow: 0 10px 28px -6px rgba(60, 33, 21, 0.1);
          background: #EAE3D9;
        }

        .review-photo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .review-photo-wrapper:hover .review-photo-img {
          transform: scale(1.05);
        }

        .review-nav-arrows {
          display: flex;
          gap: 10px;
          flex-shrink: 0;
          margin-bottom: 8px;
        }

        .review-nav-btn {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          border: 1.5px solid rgba(60, 33, 21, 0.18);
          background: #FFFFFF;
          color: #3C2115;
          display: flex;
          align-items: center;
          justifyContent: center;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 2px 8px rgba(60, 33, 21, 0.06);
        }

        .review-nav-btn:hover {
          border-color: #23150D;
          color: #FAF7F2;
          background: #23150D;
          transform: scale(1.08);
          box-shadow: 0 4px 16px rgba(35, 21, 13, 0.25);
        }

        @media (max-width: 960px) and (min-width: 769px) {
          .client-reviews-grid {
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }

          .reviews-header-cell {
            grid-column: 1 / -1;
            margin-bottom: 12px;
          }

          .reviews-empty-cell {
            display: none;
          }

          .review-photo-arrows-cell {
            grid-column: 1 / -1;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }

          .review-photo-wrapper {
            height: 220px;
            max-width: 320px;
          }
        }

        @media (max-width: 768px) {
          .desktop-reviews-bento {
            display: none !important;
          }

          .mobile-reviews-slider-section {
            display: flex !important;
            flex-direction: column !important;
            gap: 18px !important;
          }

          .mobile-reviews-track {
            display: flex !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
            -webkit-overflow-scrolling: touch !important;
            gap: 14px !important;
            padding: 4px 16px 18px !important;
            margin-left: -16px !important;
            margin-right: -16px !important;
          }

          .mobile-review-slide-card {
            scroll-snap-align: center !important;
            flex: 0 0 85% !important;
            max-width: 320px !important;
            background: #FFFFFF !important;
            border-radius: 24px !important;
            padding: 24px 20px !important;
            border: 1px solid rgba(60, 33, 21, 0.08) !important;
            box-shadow: 0 10px 28px -6px rgba(60, 33, 21, 0.07) !important;
            display: flex !important;
            flex-direction: column !important;
            justifyContent: space-between !important;
            min-height: 230px !important;
          }

          .mobile-reviews-controls {
            display: flex !important;
            align-items: center !important;
            justifyContent: space-between !important;
            padding: 0 4px !important;
          }
        }
      `}</style>
    </section>
  );
}
