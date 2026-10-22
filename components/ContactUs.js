"use client";

import { useState, useRef, useEffect } from "react";
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Calendar,
  Users,
  Send,
  Check,
  ArrowUpRight,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { CAFE_STRADA_DATA } from "@/lib/cafeStradaData";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    inquiryType: "Table Reservation",
    guests: "1-2 Guests",
    date: "",
    time: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isGuestOpen, setIsGuestOpen] = useState(false);
  const guestRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (guestRef.current && !guestRef.current.contains(e.target)) {
        setIsGuestOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const inquiryOptions = [
    "Table Reservation",
    "Birthday / Event Decor",
    "High-Tea Gathering",
    "General Inquiry",
  ];

  const guestOptions = ["1-2 Guests", "3-5 Guests", "6-10 Guests", "10-25 Guests", "25+ Guests (Private Room)"];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format WhatsApp message
    let msg = `*New Inquiry - Café Strada (Clifton, Karachi)*\n\n`;
    msg += `*Name:* ${formData.name || "Guest"}\n`;
    msg += `*Phone:* ${formData.phone || "Not provided"}\n`;
    msg += `*Inquiry Type:* ${formData.inquiryType}\n`;
    msg += `*Party Size:* ${formData.guests}\n`;
    if (formData.date) msg += `*Preferred Date:* ${formData.date}\n`;
    if (formData.time) msg += `*Preferred Time:* ${formData.time}\n`;
    if (formData.message) msg += `*Special Requests:* ${formData.message}\n`;
    msg += `\n_Sent via Café Strada Official Website_`;

    const whatsappUrl = `https://wa.me/${CAFE_STRADA_DATA.contact.rawWhatsApp}?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, "_blank");

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        inquiryType: "Table Reservation",
        guests: "2 Guests",
        date: "",
        time: "",
        message: "",
      });
    }, 3500);
  };

  return (
    <section
      id="contact"
      style={{
        paddingTop: "70px",
        paddingBottom: "80px",
        background: "transparent",
        position: "relative",
      }}
    >
      <div className="veloura-container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "44px" }}>
          <span className="section-tag" style={{ marginBottom: "12px" }}>
            <span className="tag-dot" />
            Contact & Location
          </span>

          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(30px, 4.4vw, 52px)",
              color: "#23150D",
              margin: "6px 0 12px",
              fontWeight: 400,
            }}
          >
            We'd Love to Welcome You to Café Strada
          </h2>

          <p
            style={{
              maxWidth: "620px",
              margin: "0 auto",
              fontSize: "clamp(13.5px, 1.4vw, 15.5px)",
              color: "#6B5548",
              lineHeight: 1.6,
            }}
          >
            Whether you're planning an intimate birthday celebration, reserving a family table, or stopping by for early morning coffee in Clifton, we're always here to assist.
          </p>
        </div>

        {/* 2-Column Bento Layout */}
        <div
          className="contact-bento-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: "28px",
            alignItems: "start",
          }}
        >
          {/* Left Column: Contact Channels & Map Card */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Address Card */}
            <div
              className="card-scale"
              style={{
                background: "#FFFFFF",
                borderRadius: "26px",
                padding: "26px",
                border: "1px solid rgba(60, 33, 21, 0.08)",
                boxShadow: "0 10px 28px -6px rgba(60, 33, 21, 0.06)",
              }}
            >
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "14px",
                    background: "rgba(141, 174, 0, 0.15)",
                    color: "#6B8500",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={22} />
                </div>

                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#8DAE00",
                      marginBottom: "4px",
                    }}
                  >
                    Flagship Bungalow
                  </div>
                  <h4
                    className="font-serif"
                    style={{
                      fontSize: "18px",
                      color: "#23150D",
                      margin: "0 0 6px 0",
                    }}
                  >
                    Clifton Block 4, Karachi
                  </h4>
                  <p
                    style={{
                      fontSize: "13.5px",
                      color: "#5C4638",
                      lineHeight: 1.6,
                      margin: "0 0 14px 0",
                    }}
                  >
                    {CAFE_STRADA_DATA.contact.address}
                  </p>

                  <a
                    href={CAFE_STRADA_DATA.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#3C2115",
                      textDecoration: "none",
                    }}
                  >
                    <span>Get Directions on Google Maps</span>
                    <ArrowUpRight size={14} color="#8DAE00" />
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Lines Card */}
            <div
              className="card-scale"
              style={{
                background: "#FFFFFF",
                borderRadius: "26px",
                padding: "26px",
                border: "1px solid rgba(60, 33, 21, 0.08)",
                boxShadow: "0 10px 28px -6px rgba(60, 33, 21, 0.06)",
              }}
            >
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "14px",
                    background: "rgba(37, 211, 102, 0.15)",
                    color: "#25D366",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Phone size={22} />
                </div>

                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#8DAE00",
                      marginBottom: "4px",
                    }}
                  >
                    Call or WhatsApp
                  </div>
                  <h4
                    className="font-serif"
                    style={{
                      fontSize: "18px",
                      color: "#23150D",
                      margin: "0 0 10px 0",
                    }}
                  >
                    Direct Lines & Reservations
                  </h4>

                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#3C2115" }}>
                      <span style={{ fontWeight: 600, color: "#6C5648" }}>Landline:</span>
                      <a href={`tel:${CAFE_STRADA_DATA.contact.phone.replace(/[^0-9]/g, "")}`} style={{ color: "inherit", fontWeight: 700, textDecoration: "none" }}>
                        {CAFE_STRADA_DATA.contact.phone}
                      </a>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#3C2115" }}>
                      <span style={{ fontWeight: 600, color: "#6C5648" }}>WhatsApp:</span>
                      <a
                        href={`https://wa.me/${CAFE_STRADA_DATA.contact.rawWhatsApp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#25D366", fontWeight: 700, textDecoration: "none" }}
                      >
                        {CAFE_STRADA_DATA.contact.mobileWhatsApp}
                      </a>
                    </div>
                  </div>

                  <div className="contact-direct-btns" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                    <a
                      href={`https://wa.me/${CAFE_STRADA_DATA.contact.rawWhatsApp}?text=Hi%20Cafe%20Strada`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        background: "#25D366",
                        color: "#FFFFFF",
                        fontSize: "12.5px",
                        fontWeight: 700,
                        padding: "8px 16px",
                        borderRadius: "999px",
                        textDecoration: "none",
                        boxShadow: "0 4px 12px rgba(37, 211, 102, 0.3)",
                      }}
                    >
                      <WhatsAppIcon size={15} color="#FFFFFF" />
                      <span>Chat on WhatsApp</span>
                    </a>

                    <a
                      href={`tel:${CAFE_STRADA_DATA.contact.phone.replace(/[^0-9]/g, "")}`}
                      className="btn-secondary"
                      style={{
                        fontSize: "12.5px",
                        padding: "8px 16px",
                        textDecoration: "none",
                      }}
                    >
                      <span>Call Landline</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours & Perks Card */}
            <div
              className="card-scale"
              style={{
                background: "#FCF8DF",
                borderRadius: "26px",
                padding: "24px 26px",
                border: "1px solid rgba(217, 251, 54, 0.45)",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Clock size={18} color="#8DAE00" />
                <span style={{ fontSize: "14.5px", fontWeight: 700, color: "#23150D" }}>
                  Timings: Daily 7:00 AM – Midnight
                </span>
              </div>
              <p style={{ fontSize: "12.5px", color: "#6B5548", margin: 0, lineHeight: 1.5 }}>
                • Breakfast & Morning Coffee served daily from 7:00 AM – 1:00 PM.<br />
                • Valet & private bungalow parking available on-site.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Reservation & Message Form */}
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: "32px",
              padding: "clamp(24px, 4vw, 36px)",
              border: "1px solid rgba(60, 33, 21, 0.08)",
              boxShadow: "0 14px 38px -10px rgba(60, 33, 21, 0.08)",
            }}
          >
            <div style={{ marginBottom: "22px" }}>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#8DAE00",
                  marginBottom: "4px",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <Sparkles size={13} />
                <span>Instant Inquiries & Reservations</span>
              </div>
              <h3
                className="font-serif"
                style={{
                  fontSize: "clamp(22px, 2.6vw, 30px)",
                  color: "#23150D",
                  margin: "0 0 6px 0",
                  fontWeight: 400,
                }}
              >
                Send Us a Message
              </h3>
              <p style={{ fontSize: "13px", color: "#6B5548", margin: 0 }}>
                We'll confirm your reservation or event inquiry promptly via WhatsApp.
              </p>
            </div>

            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 16px" }}>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "#D9FB36",
                    color: "#23150D",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                  }}
                >
                  <Check size={28} strokeWidth={3} />
                </div>
                <h4 className="font-serif" style={{ fontSize: "20px", color: "#23150D", marginBottom: "6px" }}>
                  Inquiry Dispatched!
                </h4>
                <p style={{ fontSize: "13.5px", color: "#6B5548", margin: 0 }}>
                  Your message has been sent to Café Strada's official desk. We'll be in touch shortly!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {/* Inquiry Type Pills */}
                <div>
                  <label style={{ fontSize: "12px", fontWeight: 700, color: "#23150D", display: "block", marginBottom: "8px" }}>
                    I Am Inquiring About:
                  </label>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {inquiryOptions.map((opt) => {
                      const isSelected = formData.inquiryType === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setFormData({ ...formData, inquiryType: opt })}
                          style={{
                            padding: "6px 14px",
                            borderRadius: "999px",
                            fontSize: "12px",
                            fontWeight: 700,
                            cursor: "pointer",
                            border: isSelected ? "1.5px solid #23150D" : "1px solid rgba(60, 33, 21, 0.12)",
                            background: isSelected ? "#23150D" : "#FAF7F2",
                            color: isSelected ? "#FAF7F2" : "#3C2115",
                            transition: "all 0.2s ease",
                          }}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name & Phone Grid */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))", gap: "14px" }}>
                  <div>
                    <label style={{ fontSize: "12px", fontWeight: 700, color: "#23150D", display: "block", marginBottom: "4px" }}>
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ayesha Khan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "11px 16px",
                        borderRadius: "14px",
                        border: "1.5px solid rgba(60, 33, 21, 0.12)",
                        background: "#FAF7F2",
                        outline: "none",
                        fontSize: "13.5px",
                        color: "#23150D",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: "12px", fontWeight: 700, color: "#23150D", display: "block", marginBottom: "4px" }}>
                      WhatsApp / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0300-1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "11px 16px",
                        borderRadius: "14px",
                        border: "1.5px solid rgba(60, 33, 21, 0.12)",
                        background: "#FAF7F2",
                        outline: "none",
                        fontSize: "13.5px",
                        color: "#23150D",
                      }}
                    />
                  </div>
                </div>

                {/* Guest Size & Date Grid */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))", gap: "14px" }}>
                  <div ref={guestRef} style={{ position: "relative" }}>
                    <label style={{ fontSize: "12px", fontWeight: 700, color: "#23150D", display: "block", marginBottom: "4px" }}>
                      Party Size
                    </label>
                    <button
                      type="button"
                      onClick={() => setIsGuestOpen(!isGuestOpen)}
                      style={{
                        width: "100%",
                        padding: "11px 16px",
                        borderRadius: "14px",
                        border: isGuestOpen ? "1.5px solid #23150D" : "1.5px solid rgba(60, 33, 21, 0.12)",
                        background: "#FAF7F2",
                        outline: "none",
                        fontSize: "13.5px",
                        color: "#23150D",
                        fontWeight: 600,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        textAlign: "left",
                        boxSizing: "border-box",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <span>{formData.guests}</span>
                      <ChevronDown
                        size={16}
                        style={{
                          transform: isGuestOpen ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.2s ease",
                          color: "#6B5548",
                        }}
                      />
                    </button>

                    {/* Custom Dropdown Menu */}
                    {isGuestOpen && (
                      <div
                        style={{
                          position: "absolute",
                          top: "calc(100% + 6px)",
                          left: 0,
                          right: 0,
                          width: "100%",
                          background: "#FFFFFF",
                          borderRadius: "16px",
                          border: "1.5px solid rgba(60, 33, 21, 0.12)",
                          boxShadow: "0 14px 36px rgba(0, 0, 0, 0.15)",
                          padding: "6px",
                          zIndex: 50,
                          boxSizing: "border-box",
                          animation: "fadeIn 0.2s ease-out",
                        }}
                      >
                        {guestOptions.map((g) => {
                          const isSelected = formData.guests === g;
                          return (
                            <div
                              key={g}
                              onClick={() => {
                                setFormData({ ...formData, guests: g });
                                setIsGuestOpen(false);
                              }}
                              style={{
                                padding: "9px 14px",
                                borderRadius: "10px",
                                fontSize: "13px",
                                fontWeight: isSelected ? 700 : 500,
                                color: isSelected ? "#FAF7F2" : "#23150D",
                                background: isSelected ? "#23150D" : "transparent",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                transition: "all 0.15s ease",
                                whiteSpace: "nowrap",
                              }}
                              onMouseEnter={(e) => {
                                if (!isSelected) {
                                  e.currentTarget.style.background = "#FAF7F2";
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (!isSelected) {
                                  e.currentTarget.style.background = "transparent";
                                }
                              }}
                            >
                              <span>{g}</span>
                              {isSelected && <Check size={14} color="#D9FB36" strokeWidth={3} />}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  <div>
                    <label style={{ fontSize: "12px", fontWeight: 700, color: "#23150D", display: "block", marginBottom: "4px" }}>
                      Preferred Date & Time
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Friday 8:00 PM"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "11px 16px",
                        borderRadius: "14px",
                        border: "1.5px solid rgba(60, 33, 21, 0.12)",
                        background: "#FAF7F2",
                        outline: "none",
                        fontSize: "13.5px",
                        color: "#23150D",
                      }}
                    />
                  </div>
                </div>

                {/* Special Requests / Message */}
                <div>
                  <label style={{ fontSize: "12px", fontWeight: 700, color: "#23150D", display: "block", marginBottom: "4px" }}>
                    Special Requests (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Need birthday balloon arch theme, preferred veranda table, or dietary requests..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "11px 16px",
                      borderRadius: "14px",
                      border: "1.5px solid rgba(60, 33, 21, 0.12)",
                      background: "#FAF7F2",
                      outline: "none",
                      fontSize: "13.5px",
                      color: "#23150D",
                      resize: "vertical",
                    }}
                  />
                </div>

                {/* Submit via WhatsApp */}
                <button
                  type="submit"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    background: "#25D366",
                    color: "#FFFFFF",
                    fontSize: "14px",
                    fontWeight: 700,
                    padding: "14px 24px",
                    borderRadius: "999px",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 6px 20px rgba(37, 211, 102, 0.35)",
                    transition: "all 0.25s ease",
                    marginTop: "6px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(37, 211, 102, 0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 6px 20px rgba(37, 211, 102, 0.35)";
                  }}
                >
                  <WhatsAppIcon size={19} color="#FFFFFF" />
                  <span>Send Inquiry via WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .contact-bento-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 20px !important;
          }
        }
        @media (max-width: 440px) {
          .contact-direct-btns {
            flex-direction: column !important;
          }
          .contact-direct-btns a {
            justify-content: center !important;
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
