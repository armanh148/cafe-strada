"use client";

import { useState, useEffect } from "react";
import { ShoppingBag, ArrowUpRight, Menu, X, Phone, MessageCircle } from "lucide-react";
import { CAFE_STRADA_DATA } from "@/lib/cafeStradaData";

export default function Navbar({ cartCount = 0, onOpenCart }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Events & Decor", href: "#events" },
    { label: "Breakfast & Coffee", href: "#breakfast" },
    { label: "Ambiance", href: "#ambiance" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top promotional ticker for Cafe Strada Karachi */}
      <div
        style={{
          background: "#23150D",
          color: "#FCF8DF",
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.06em",
          padding: "7px 0",
          overflow: "hidden",
          textTransform: "uppercase",
        }}
      >
        <div className="animate-marquee" style={{ gap: "36px" }}>
          <span>✦ Welcome to Café Strada Clifton • Bungalow F-64/1, Block 4, KDA Scheme 5, Karachi ✦</span>
          <span>✦ Book Private Birthday & Bridal Shower Setups: 0304-8847733 ✦</span>
          <span>✦ Sizzling Steaks • Creamy Alfredo • Breakfast Daily from 7:00 AM ✦</span>
          <span>✦ Takeaway & Table Reservations: 021-35374477 ✦</span>
          <span>✦ Welcome to Café Strada Clifton • Bungalow F-64/1, Block 4, KDA Scheme 5, Karachi ✦</span>
          <span>✦ Book Private Birthday & Bridal Shower Setups: 0304-8847733 ✦</span>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          transition: "all 0.3s ease",
          background: scrolled ? "rgba(250, 247, 242, 0.94)" : "rgba(250, 247, 242, 0.8)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: scrolled ? "1px solid rgba(60, 33, 21, 0.08)" : "1px solid transparent",
          boxShadow: scrolled ? "0 8px 24px -6px rgba(60, 33, 21, 0.06)" : "none",
        }}
      >
        <div
          className="veloura-container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: scrolled ? "10px" : "16px",
            paddingBottom: scrolled ? "10px" : "16px",
            transition: "padding 0.3s ease",
          }}
        >
          {/* Logo & Clifton Karachi Location Tag */}
          <a
            href="#hero"
            style={{
              textDecoration: "none",
              color: "#3C2115",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span
                  className="font-serif"
                  style={{
                    fontSize: "26px",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    color: "#23150D",
                  }}
                >
                  Café Strada
                </span>
                <span
                  style={{
                    display: "inline-block",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#D9FB36",
                    boxShadow: "0 0 8px rgba(217, 251, 54, 0.8)",
                  }}
                />
              </div>
              <span
                style={{
                  fontSize: "9.5px",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#9B8274",
                  marginTop: "-3px",
                }}
              >
                Clifton • Karachi
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav
            style={{
              display: "none",
            }}
            className="desktop-nav"
          >
            <ul
              style={{
                display: "flex",
                alignItems: "center",
                gap: "26px",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      textDecoration: "none",
                      color: "#3C2115",
                      fontSize: "13.5px",
                      fontWeight: 600,
                      opacity: 0.85,
                      transition: "all 0.2s ease",
                      position: "relative",
                      padding: "4px 0",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = "1";
                      e.currentTarget.style.color = "#000";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = "0.85";
                      e.currentTarget.style.color = "#3C2115";
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Action Buttons */}
          <div className="navbar-right-actions" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {/* Direct WhatsApp Action Link */}
            <a
              href={`https://wa.me/${CAFE_STRADA_DATA.contact.rawWhatsApp}?text=Hi%20Cafe%20Strada,%20I%20would%20like%20to%20inquire%20about%20reservations%20/%20menu`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "#25D366",
                color: "#FFFFFF",
                fontSize: "12.5px",
                fontWeight: 700,
                padding: "8px 14px",
                borderRadius: "999px",
                textDecoration: "none",
                transition: "all 0.2s ease",
                boxShadow: "0 4px 12px rgba(37, 211, 102, 0.3)",
              }}
              className="whatsapp-btn"
            >
              <MessageCircle size={15} />
              <span className="whatsapp-text">WhatsApp</span>
            </a>

            {/* Cart Trigger */}
            <button
              onClick={onOpenCart}
              aria-label="View Order Bag"
              style={{
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.9)",
                border: "1px solid rgba(60, 33, 21, 0.12)",
                color: "#3C2115",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#3C2115";
                e.currentTarget.style.color = "#FAF7F2";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.9)";
                e.currentTarget.style.color = "#3C2115";
              }}
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-3px",
                    right: "-3px",
                    background: "#D9FB36",
                    color: "#23150D",
                    fontSize: "10px",
                    fontWeight: 800,
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  {cartCount}
                </span>
              )}
            </button>

            {/* Order / Reserve CTA */}
            <button
              onClick={onOpenCart}
              className="btn-primary desktop-order-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "13px",
                padding: "8px 18px",
              }}
            >
              <span>Order / Reserve</span>
              <ArrowUpRight size={15} className="arrow-icon" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
              aria-label="Toggle navigation menu"
              style={{
                display: "none",
                alignItems: "center",
                justifyContent: "center",
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.9)",
                border: "1px solid rgba(60, 33, 21, 0.15)",
                color: "#3C2115",
                cursor: "pointer",
              }}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Click-Away Backdrop */}
        {mobileMenuOpen && (
          <>
            <div
              onClick={() => setMobileMenuOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(35, 21, 13, 0.45)",
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
                zIndex: 40,
              }}
            />
            <div
              style={{
                position: "relative",
                zIndex: 50,
                background: "rgba(250, 247, 242, 0.98)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                borderTop: "1px solid rgba(60, 33, 21, 0.08)",
                borderBottom: "1px solid rgba(60, 33, 21, 0.08)",
                padding: "20px 24px 28px",
                boxShadow: "0 14px 30px rgba(60, 33, 21, 0.12)",
                animation: "fadeIn 0.25s ease-out",
                maxHeight: "80vh",
                overflowY: "auto",
              }}
            >
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  margin: "0 0 20px 0",
                  padding: 0,
                }}
              >
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        textDecoration: "none",
                        color: "#3C2115",
                        fontSize: "16px",
                        fontWeight: 600,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "8px 0",
                        borderBottom: "1px solid rgba(60, 33, 21, 0.05)",
                      }}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight size={14} color="#8DAE00" />
                    </a>
                  </li>
                ))}
              </ul>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <a
                  href={`tel:${CAFE_STRADA_DATA.contact.phone.replace(/[^0-9]/g, "")}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    background: "#FAF7F2",
                    color: "#3C2115",
                    border: "1px solid rgba(60, 33, 21, 0.15)",
                    padding: "12px",
                    borderRadius: "999px",
                    fontSize: "13.5px",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  <Phone size={15} />
                  <span>Call: 021-35374477</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCart();
                  }}
                  className="btn-lime"
                  style={{
                    width: "100%",
                    padding: "12px",
                    justifyContent: "center",
                    fontSize: "14px",
                  }}
                >
                  <span>View Order / Reserve Table</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </>
        )}
      </header>

      <style jsx>{`
        @media (min-width: 860px) {
          .desktop-nav {
            display: block !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        @media (max-width: 859px) {
          .mobile-toggle {
            display: inline-flex !important;
          }
        }
        @media (max-width: 768px) {
          .navbar-right-actions {
            display: none !important;
          }
        }
        @media (max-width: 580px) {
          .desktop-order-btn {
            display: none !important;
          }
          .whatsapp-btn {
            width: 38px !important;
            height: 38px !important;
            padding: 0 !important;
            justify-content: center !important;
            border-radius: 50% !important;
          }
          .whatsapp-text {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
