"use client";

import { useState, useRef } from "react";
import { CAFE_STRADA_DATA } from "@/lib/cafeStradaData";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SignatureCreations from "@/components/SignatureCreations";
import BeachLuxury from "@/components/BeachLuxury";
import DailyEscapeCan from "@/components/DailyEscapeCan";
import HandcraftedCollection from "@/components/HandcraftedCollection";
import TerraceExperience from "@/components/TerraceExperience";
import TestimonialsBento from "@/components/TestimonialsBento";
import ContactUs from "@/components/ContactUs";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import OrderDrawer from "@/components/OrderDrawer";
import StoryModal from "@/components/StoryModal";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Check } from "lucide-react";

export default function Home() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [toastData, setToastData] = useState(null);
  const toastTimeoutRef = useRef(null);

  const showToast = (name, subtitle = "Added to order") => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setToastData({ name, subtitle });
    toastTimeoutRef.current = setTimeout(() => {
      setToastData(null);
    }, 3000);
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    showToast(product.name, "Added to order");
  };

  const handleUpdateQuantity = (productId, delta) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const handleRemoveItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* Scroll indicator */}
      <ScrollProgressBar />

      {/* Floating Interactive Toast Alert (Top Dynamic Capsule) */}
      {toastData && (
        <div
          role="status"
          aria-live="polite"
          className="add-to-cart-toast"
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", minWidth: 0, flex: 1 }}>
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
                flexShrink: 0,
                boxShadow: "0 2px 6px rgba(217, 251, 54, 0.4)",
              }}
            >
              <Check size={14} strokeWidth={3.5} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", minWidth: 0, flex: 1, lineHeight: 1.25 }}>
              <span
                style={{
                  fontSize: "13.5px",
                  fontWeight: 700,
                  color: "#FAF7F2",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {toastData.name}
              </span>
              <span style={{ fontSize: "11px", fontWeight: 500, color: "#C8B6A6" }}>
                {toastData.subtitle}
              </span>
            </div>
          </div>

          <button
            onClick={() => {
              setIsCartOpen(true);
              setToastData(null);
            }}
            style={{
              background: "#D9FB36",
              color: "#23150D",
              border: "none",
              borderRadius: "999px",
              padding: "7px 14px",
              fontSize: "12px",
              fontWeight: 800,
              cursor: "pointer",
              flexShrink: 0,
              whiteSpace: "nowrap",
              boxShadow: "0 2px 8px rgba(217, 251, 54, 0.35)",
              transition: "transform 0.15s ease",
            }}
          >
            View Order
          </button>
        </div>
      )}

      {/* Floating WhatsApp Quick Action Button (Bottom Right) */}
      <a
        href={`https://wa.me/${CAFE_STRADA_DATA.contact.rawWhatsApp}?text=Hi%20Cafe%20Strada,%20I%20would%20like%20to%20reserve%20a%20table%20/%20inquire%20about%20event%20booking`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Reservation"
        className="floating-whatsapp-btn"
        style={{
          position: "fixed",
          bottom: "28px",
          right: "24px",
          zIndex: 90,
          background: "#25D366",
          color: "#FFFFFF",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 24px rgba(37, 211, 102, 0.45)",
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
          textDecoration: "none",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.08) translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 12px 30px rgba(37, 211, 102, 0.6)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1) translateY(0)";
          e.currentTarget.style.boxShadow = "0 8px 24px rgba(37, 211, 102, 0.45)";
        }}
      >
        <WhatsAppIcon size={30} color="#FFFFFF" />
      </a>

      {/* Sticky Top Navbar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <Hero
          data={CAFE_STRADA_DATA.hero}
          onSelectProduct={handleAddToCart}
        />

        {/* Section 2: About Us */}
        <About
          data={CAFE_STRADA_DATA.about}
          onOpenStory={() => setIsStoryOpen(true)}
        />

        {/* Section 3: Signature Creations */}
        <SignatureCreations
          data={CAFE_STRADA_DATA.menu}
          onAddToCart={handleAddToCart}
        />

        {/* Section 4: Private Events & Celebrations (formerly BeachLuxury) */}
        <BeachLuxury
          data={CAFE_STRADA_DATA.events}
          onAddToCart={handleAddToCart}
        />

        {/* Section 5: Breakfast & Artisan Coffee (formerly DailyEscapeCan) */}
        <DailyEscapeCan
          data={CAFE_STRADA_DATA.breakfastSpecial}
          onAddToCart={handleAddToCart}
        />

        {/* Section 6: Handcrafted Kitchen Collection */}
        <HandcraftedCollection
          data={CAFE_STRADA_DATA}
          onAddToCart={handleAddToCart}
        />

        {/* Section 7: Bungalow Terrace & Ambiance Experience */}
        <TerraceExperience
          data={CAFE_STRADA_DATA.terrace}
          onAddToCart={handleAddToCart}
        />

        {/* Section 8: Testimonials Bento Grid */}
        <TestimonialsBento
          data={CAFE_STRADA_DATA.testimonials}
        />

        {/* Section 9: Contact & Location */}
        <ContactUs />

        {/* Section 10: Newsletter VIP Club */}
        <Newsletter />
      </main>

      {/* Footer & Giant Display Watermark */}
      <Footer data={CAFE_STRADA_DATA.footer} />

      {/* Slide-out Order Drawer */}
      <OrderDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onAddToCart={handleAddToCart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Heritage Story Modal */}
      <StoryModal
        isOpen={isStoryOpen}
        onClose={() => setIsStoryOpen(false)}
      />
    </div>
  );
}
