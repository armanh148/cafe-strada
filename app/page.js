"use client";

import { useState } from "react";
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
import MobileBottomBar from "@/components/MobileBottomBar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { Check, MessageCircle } from "lucide-react";

export default function Home() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
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
    showToast(`Added "${product.name}" to your order`);
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

      {/* Floating interactive toast */}
      {toastMessage && (
        <div
          style={{
            position: "fixed",
            bottom: "32px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#23150D",
            color: "#FAF7F2",
            padding: "12px 24px",
            borderRadius: "999px",
            fontSize: "13.5px",
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            gap: "10px",
            boxShadow: "0 12px 30px rgba(0, 0, 0, 0.3)",
            zIndex: 100,
            animation: "fadeIn 0.25s ease-out",
          }}
        >
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              background: "#D9FB36",
              color: "#23150D",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Check size={12} strokeWidth={3} />
          </div>
          <span>{toastMessage}</span>
          <button
            onClick={() => setIsCartOpen(true)}
            style={{
              background: "rgba(255, 255, 255, 0.15)",
              color: "#D9FB36",
              border: "none",
              borderRadius: "999px",
              padding: "4px 10px",
              fontSize: "12px",
              fontWeight: 700,
              cursor: "pointer",
              marginLeft: "6px",
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
        <MessageCircle size={28} fill="#FFFFFF" color="#25D366" />
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
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Heritage Story Modal */}
      <StoryModal
        isOpen={isStoryOpen}
        onClose={() => setIsStoryOpen(false)}
      />

      {/* Luxury Mobile Sticky Action Bar */}
      <MobileBottomBar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <style jsx>{`
        @media (max-width: 768px) {
          .floating-whatsapp-btn {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
