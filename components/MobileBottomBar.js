"use client";

import { Utensils, Phone, MessageCircle, ShoppingBag, MapPin } from "lucide-react";
import { CAFE_STRADA_DATA } from "@/lib/cafeStradaData";

export default function MobileBottomBar({ cartCount = 0, onOpenCart }) {
  return (
    <nav
      className="mobile-bottom-bar"
      aria-label="Mobile quick actions"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 95,
        background: "rgba(250, 247, 242, 0.95)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderTop: "1px solid rgba(60, 33, 21, 0.12)",
        boxShadow: "0 -4px 20px rgba(60, 33, 21, 0.08)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "8px 12px",
        paddingBottom: "max(8px, env(safe-area-inset-bottom))",
      }}
    >
      {/* 1. Menu Jump */}
      <a
        href="#menu"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "3px",
          color: "#3C2115",
          textDecoration: "none",
          fontSize: "10.5px",
          fontWeight: 700,
          padding: "4px 8px",
          minWidth: "60px",
        }}
      >
        <Utensils size={18} color="#3C2115" />
        <span>Menu</span>
      </a>

      {/* 2. Direct Call Line */}
      <a
        href={`tel:${CAFE_STRADA_DATA.contact.phone.replace(/[^0-9]/g, "")}`}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "3px",
          color: "#3C2115",
          textDecoration: "none",
          fontSize: "10.5px",
          fontWeight: 700,
          padding: "4px 8px",
          minWidth: "60px",
        }}
      >
        <Phone size={18} color="#8DAE00" />
        <span>Call</span>
      </a>

      {/* 3. WhatsApp Direct Chat (Center Accent Pill) */}
      <a
        href={`https://wa.me/${CAFE_STRADA_DATA.contact.rawWhatsApp}?text=Hi%20Cafe%20Strada,%20I%20would%20like%20to%20reserve%20a%20table%20/%20order`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          background: "#25D366",
          color: "#FFFFFF",
          textDecoration: "none",
          fontSize: "12px",
          fontWeight: 700,
          padding: "7px 14px",
          borderRadius: "999px",
          boxShadow: "0 4px 12px rgba(37, 211, 102, 0.35)",
        }}
      >
        <MessageCircle size={16} />
        <span>WhatsApp</span>
      </a>

      {/* 4. Bag / Cart Trigger with Live Counter */}
      <button
        onClick={onOpenCart}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "3px",
          color: "#3C2115",
          background: "none",
          border: "none",
          fontSize: "10.5px",
          fontWeight: 700,
          cursor: "pointer",
          padding: "4px 8px",
          position: "relative",
          minWidth: "60px",
        }}
      >
        <div style={{ position: "relative" }}>
          <ShoppingBag size={18} color="#3C2115" />
          {cartCount > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-4px",
                right: "-8px",
                background: "#D9FB36",
                color: "#23150D",
                fontSize: "9px",
                fontWeight: 800,
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
              }}
            >
              {cartCount}
            </span>
          )}
        </div>
        <span>{cartCount > 0 ? `Bag (${cartCount})` : "Bag"}</span>
      </button>

      <style jsx>{`
        @media (min-width: 769px) {
          .mobile-bottom-bar {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}
