"use client";

import { ArrowUpRight, MapPin, Phone, MessageCircle, Mail, Clock } from "lucide-react";
import { CAFE_STRADA_DATA } from "@/lib/cafeStradaData";

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export default function Footer({ data = CAFE_STRADA_DATA.footer }) {
  const footerData = CAFE_STRADA_DATA.footer;

  return (
    <footer
      id="footer"
      style={{
        paddingTop: "60px",
        paddingBottom: "20px",
        background: "transparent",
        overflow: "hidden",
      }}
    >
      <div className="veloura-container">
        {/* 4 Main Columns */}
        <div className="footer-columns-grid">
          {/* Col 1: Brand & Socials */}
          <div className="footer-brand-col">
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
              <span
                className="font-serif"
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  color: "#23150D",
                }}
              >
                Café Strada
              </span>
              <span
                style={{
                  display: "inline-block",
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#D9FB36",
                }}
              />
            </div>
            <p
              style={{
                fontSize: "13.5px",
                color: "#6B5548",
                lineHeight: 1.6,
                marginBottom: "20px",
                maxWidth: "320px",
              }}
            >
              {footerData.tagline}
            </p>

            {/* Social Icons & WhatsApp */}
            <div style={{ display: "flex", gap: "10px" }}>
              <a
                href={footerData.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.9)",
                  border: "1px solid rgba(60, 33, 21, 0.12)",
                  color: "#3C2115",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.25s ease",
                  textDecoration: "none",
                }}
              >
                <FacebookIcon />
              </a>

              <a
                href={footerData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.9)",
                  border: "1px solid rgba(60, 33, 21, 0.12)",
                  color: "#3C2115",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.25s ease",
                  textDecoration: "none",
                }}
              >
                <InstagramIcon />
              </a>

              <a
                href={`https://wa.me/${CAFE_STRADA_DATA.contact.rawWhatsApp}?text=Hi%20Cafe%20Strada`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  background: "#25D366",
                  color: "#FFFFFF",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.25s ease",
                  textDecoration: "none",
                }}
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-links-col">
            <h4
              style={{
                fontSize: "12.5px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#23150D",
                marginBottom: "16px",
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {footerData.quickLinks.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    style={{
                      textDecoration: "none",
                      color: "#6B5548",
                      fontSize: "13.5px",
                      transition: "color 0.2s ease, transform 0.2s ease",
                      display: "inline-block",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#23150D";
                      e.currentTarget.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#6B5548";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Special Menu */}
          <div className="footer-links-col">
            <h4
              style={{
                fontSize: "12.5px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#23150D",
                marginBottom: "16px",
              }}
            >
              Signatures
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {footerData.specialMenu.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    style={{
                      textDecoration: "none",
                      color: "#6B5548",
                      fontSize: "13.5px",
                      transition: "color 0.2s ease, transform 0.2s ease",
                      display: "inline-block",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#23150D";
                      e.currentTarget.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#6B5548";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Clifton Karachi Address */}
          <div className="footer-contact-col">
            <h4
              style={{
                fontSize: "12.5px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#23150D",
                marginBottom: "16px",
              }}
            >
              Clifton Flagship Cafe
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "13.5px", color: "#6B5548" }}>
              <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                <MapPin size={16} color="#8DAE00" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>{footerData.address}</span>
              </div>
              <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <Phone size={15} color="#8DAE00" style={{ flexShrink: 0 }} />
                <a href={`tel:${footerData.phone.replace(/[^0-9]/g, "")}`} style={{ color: "inherit", textDecoration: "none", fontWeight: 600 }}>
                  Landline: {footerData.phone}
                </a>
              </div>
              <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <MessageCircle size={15} color="#25D366" style={{ flexShrink: 0 }} />
                <a
                  href={`https://wa.me/${CAFE_STRADA_DATA.contact.rawWhatsApp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "inherit", textDecoration: "none", fontWeight: 600 }}
                >
                  WhatsApp: {footerData.mobileWhatsApp}
                </a>
              </div>
              <div style={{ display: "flex", gap: "8px", alignItems: "center", color: "#8DAE00", fontWeight: 700, fontSize: "12.5px" }}>
                <Clock size={15} color="#8DAE00" style={{ flexShrink: 0 }} />
                <span>{footerData.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider with Copyright */}
        <div
          style={{
            borderTop: "1px solid rgba(60, 33, 21, 0.1)",
            paddingTop: "20px",
            marginBottom: "16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
            fontSize: "12px",
            color: "#8B7365",
          }}
        >
          <div>Copyright © 2026 Café Strada (Clifton, Karachi). All rights reserved.</div>
          <div>Boutique continental dining & unforgettable private celebrations.</div>
        </div>

        {/* Massive Stylized Footer Watermark across full width */}
        <div style={{ overflow: "hidden", textAlign: "center", marginTop: "12px" }}>
          <div className="display-watermark">
            CAFÉ STRADA
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-columns-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.3fr;
          gap: 36px;
          margin-bottom: 48px;
        }

        @media (max-width: 900px) {
          .footer-columns-grid {
            grid-template-columns: 1fr 1fr;
            gap: 28px;
          }
        }

        @media (max-width: 768px) {
          .footer-columns-grid {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 24px 16px !important;
          }

          .footer-brand-col {
            grid-column: 1 / -1 !important;
            margin-bottom: 6px;
          }

          .footer-contact-col {
            grid-column: 1 / -1 !important;
            margin-top: 12px;
            border-top: 1px solid rgba(60, 33, 21, 0.08);
            padding-top: 22px;
          }

          .footer-links-col h4 {
            font-size: 12px !important;
            margin-bottom: 12px !important;
          }

          .footer-links-col a {
            font-size: 12.5px !important;
          }
        }
      `}</style>
    </footer>
  );
}
