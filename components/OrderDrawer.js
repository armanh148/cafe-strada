"use client";

import { useState } from "react";
import { X, Plus, Minus, Trash2, ArrowUpRight, Check, ShoppingBag, MessageCircle, Phone, MapPin } from "lucide-react";
import { CAFE_STRADA_DATA } from "@/lib/cafeStradaData";

export default function OrderDrawer({ isOpen, onClose, cart = [], onUpdateQuantity, onRemoveItem, onClearCart }) {
  const [checkoutStep, setCheckoutStep] = useState("cart"); // cart | checkout | success
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [orderType, setOrderType] = useState("dine-in"); // dine-in | takeaway | delivery
  const [addressOrTable, setAddressOrTable] = useState("");

  if (!isOpen) return null;

  const parsePrice = (priceStr) => {
    if (typeof priceStr === "number") return priceStr;
    const cleaned = String(priceStr).replace(/[^0-9]/g, "");
    return parseFloat(cleaned) || 0;
  };

  const subtotal = cart.reduce((acc, item) => {
    return acc + parsePrice(item.price) * item.quantity;
  }, 0);

  const deliveryFee = orderType === "delivery" && subtotal > 0 ? 150 : 0;
  const total = subtotal + deliveryFee;

  const generateWhatsAppMessage = () => {
    let msg = `*New Order - Café Strada (Clifton, Karachi)*\n\n`;
    msg += `*Customer:* ${name || "Guest"}\n`;
    msg += `*Contact:* ${phone || "Not provided"}\n`;
    msg += `*Type:* ${orderType.toUpperCase()}\n`;
    if (addressOrTable) {
      msg += `*Detail:* ${addressOrTable}\n`;
    }
    msg += `\n*Items Ordered:*\n`;
    cart.forEach((item, index) => {
      msg += `${index + 1}. ${item.name} x ${item.quantity} = Rs. ${(parsePrice(item.price) * item.quantity).toLocaleString()}\n`;
    });
    msg += `\n*Subtotal:* Rs. ${subtotal.toLocaleString()}`;
    if (deliveryFee > 0) {
      msg += `\n*Delivery Fee:* Rs. ${deliveryFee}`;
    }
    msg += `\n*Total Amount:* Rs. ${total.toLocaleString()}`;
    msg += `\n\n_Thank you for ordering with Café Strada!_`;
    return encodeURIComponent(msg);
  };

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    const whatsappUrl = `https://wa.me/${CAFE_STRADA_DATA.contact.rawWhatsApp}?text=${generateWhatsAppMessage()}`;
    window.open(whatsappUrl, "_blank");
    setCheckoutStep("success");
    setTimeout(() => {
      onClearCart();
    }, 2000);
  };

  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <div
        className="drawer-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "clamp(18px, 3.5vw, 28px)",
        }}
      >
        {/* Mobile drag handle */}
        <div
          style={{
            width: "38px",
            height: "4px",
            borderRadius: "999px",
            background: "rgba(60, 33, 21, 0.2)",
            margin: "0 auto 12px",
          }}
        />

        {/* Header */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: "16px",
              borderBottom: "1px solid rgba(60, 33, 21, 0.1)",
              marginBottom: "18px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <ShoppingBag size={20} color="#3C2115" />
              <h3
                className="font-serif"
                style={{
                  fontSize: "22px",
                  fontWeight: 600,
                  color: "#23150D",
                  margin: 0,
                }}
              >
                Café Strada Order
              </h3>
            </div>

            <button
              onClick={onClose}
              aria-label="Close cart"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "rgba(60, 33, 21, 0.06)",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#3C2115",
              }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Step 1: Cart View */}
          {checkoutStep === "cart" && (
            <div>
              {cart.length === 0 ? (
                <div style={{ textAlign: "center", padding: "48px 12px" }}>
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      background: "#FCF8DF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px",
                    }}
                  >
                    <ShoppingBag size={26} color="#8DAE00" />
                  </div>
                  <h4
                    className="font-serif"
                    style={{ fontSize: "18px", color: "#23150D", marginBottom: "6px" }}
                  >
                    Your order is empty
                  </h4>
                  <p style={{ fontSize: "13px", color: "#7A6456", marginBottom: "20px" }}>
                    Select sizzling steaks, fettuccine Alfredo, or artisan coffees from our menu.
                  </p>
                  <button
                    onClick={onClose}
                    className="btn-primary"
                    style={{ padding: "8px 20px", fontSize: "13px" }}
                  >
                    Explore Menu
                  </button>
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                    maxHeight: "360px",
                    overflowY: "auto",
                    paddingRight: "6px",
                  }}
                >
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                        background: "#F4EFEA",
                        padding: "12px",
                        borderRadius: "18px",
                        border: "1px solid rgba(60, 33, 21, 0.06)",
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          width: "56px",
                          height: "56px",
                          borderRadius: "12px",
                          objectFit: "cover",
                        }}
                      />
                      <div style={{ flex: 1 }}>
                        <div
                          style={{
                            fontSize: "14px",
                            fontWeight: 700,
                            color: "#23150D",
                          }}
                        >
                          {item.name}
                        </div>
                        <div
                          style={{
                            fontSize: "13px",
                            fontWeight: 600,
                            color: "#8DAE00",
                          }}
                        >
                          {item.price}
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          background: "#FFFFFF",
                          padding: "4px 8px",
                          borderRadius: "999px",
                          border: "1px solid rgba(60, 33, 21, 0.1)",
                        }}
                      >
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          aria-label="Decrease quantity"
                          style={{
                            background: "transparent",
                            border: "none",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            color: "#3C2115",
                          }}
                        >
                          <Minus size={13} />
                        </button>
                        <span style={{ fontSize: "12.5px", fontWeight: 700 }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          aria-label="Increase quantity"
                          style={{
                            background: "transparent",
                            border: "none",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            color: "#3C2115",
                          }}
                        >
                          <Plus size={13} />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        aria-label="Remove item"
                        style={{
                          background: "transparent",
                          border: "none",
                          color: "#998274",
                          cursor: "pointer",
                          padding: "4px",
                        }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Step 2: Details & WhatsApp Dispatch */}
          {checkoutStep === "checkout" && (
            <form onSubmit={handleCheckoutSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {/* Dining / Order Type Selector */}
              <div>
                <label style={{ fontSize: "12px", fontWeight: 700, color: "#23150D", display: "block", marginBottom: "6px" }}>
                  Select Dining Preference
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
                  {["dine-in", "takeaway", "delivery"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setOrderType(type)}
                      style={{
                        padding: "8px",
                        borderRadius: "10px",
                        fontSize: "12px",
                        fontWeight: 700,
                        textTransform: "capitalize",
                        cursor: "pointer",
                        border: orderType === type ? "2px solid #23150D" : "1px solid rgba(60, 33, 21, 0.15)",
                        background: orderType === type ? "#D9FB36" : "#FFFFFF",
                        color: "#23150D",
                      }}
                    >
                      {type === "dine-in" ? "Dine-In" : type === "takeaway" ? "Takeaway" : "Clifton Delivery"}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label style={{ fontSize: "12px", fontWeight: 700, color: "#23150D", display: "block", marginBottom: "4px" }}>
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Bilal Khan"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "11px 16px",
                    borderRadius: "12px",
                    border: "1.5px solid rgba(60, 33, 21, 0.15)",
                    outline: "none",
                    fontSize: "14px",
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: "12px", fontWeight: 700, color: "#23150D", display: "block", marginBottom: "4px" }}>
                  WhatsApp / Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 0300-1234567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "11px 16px",
                    borderRadius: "12px",
                    border: "1.5px solid rgba(60, 33, 21, 0.15)",
                    outline: "none",
                    fontSize: "14px",
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: "12px", fontWeight: 700, color: "#23150D", display: "block", marginBottom: "4px" }}>
                  {orderType === "dine-in" ? "Table Number or Reservation Time" : "Delivery Address in Clifton / DHA"}
                </label>
                <input
                  type="text"
                  placeholder={orderType === "dine-in" ? "e.g. Table 5 or Today 8:00 PM" : "e.g. Block 4, Clifton"}
                  value={addressOrTable}
                  onChange={(e) => setAddressOrTable(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "11px 16px",
                    borderRadius: "12px",
                    border: "1.5px solid rgba(60, 33, 21, 0.15)",
                    outline: "none",
                    fontSize: "14px",
                  }}
                />
              </div>

              <div style={{ background: "#FCF8DF", padding: "12px", borderRadius: "12px", fontSize: "12px", color: "#3C2115" }}>
                ✦ This will automatically send your formatted order straight to <strong>Café Strada's official WhatsApp</strong> for instant preparation!
              </div>

              <div className="drawer-checkout-actions" style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <button
                  type="button"
                  onClick={() => setCheckoutStep("cart")}
                  className="btn-secondary"
                  style={{ flex: 1 }}
                >
                  Back
                </button>
                <button
                  type="submit"
                  style={{
                    flex: 2,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    background: "#25D366",
                    color: "#FFFFFF",
                    fontSize: "13.5px",
                    fontWeight: 700,
                    padding: "12px 18px",
                    borderRadius: "999px",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 6px 18px rgba(37, 211, 102, 0.35)",
                  }}
                >
                  <MessageCircle size={16} />
                  <span>Send via WhatsApp (Rs. {total.toLocaleString()})</span>
                </button>
              </div>
            </form>
          )}

          {/* Step 3: Success Confirmation */}
          {checkoutStep === "success" && (
            <div style={{ textAlign: "center", padding: "48px 12px" }}>
              <div
                style={{
                  width: "68px",
                  height: "68px",
                  borderRadius: "50%",
                  background: "#D9FB36",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 18px",
                  boxShadow: "0 8px 24px rgba(217, 251, 54, 0.5)",
                }}
              >
                <Check size={32} color="#23150D" />
              </div>
              <h4
                className="font-serif"
                style={{ fontSize: "22px", color: "#23150D", marginBottom: "6px" }}
              >
                Order Sent via WhatsApp!
              </h4>
              <p style={{ fontSize: "13.5px", color: "#6B5548", marginBottom: "24px" }}>
                Café Strada staff has received your order and will confirm delivery or table reservation shortly.
              </p>
              <button
                onClick={() => {
                  setCheckoutStep("cart");
                  onClose();
                }}
                className="btn-primary"
                style={{ padding: "10px 24px" }}
              >
                Done
              </button>
            </div>
          )}
        </div>

        {/* Footer Summary (if in cart step and cart has items) */}
        {checkoutStep === "cart" && cart.length > 0 && (
          <div
            style={{
              borderTop: "1px solid rgba(60, 33, 21, 0.1)",
              paddingTop: "18px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "13px",
                color: "#7A6456",
                marginBottom: "6px",
              }}
            >
              <span>Subtotal</span>
              <span>Rs. {subtotal.toLocaleString()}</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "13px",
                color: "#7A6456",
                marginBottom: "12px",
              }}
            >
              <span>Service / Delivery</span>
              <span>{deliveryFee === 0 ? "FREE" : `Rs. ${deliveryFee}`}</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "17px",
                fontWeight: 800,
                color: "#23150D",
                marginBottom: "18px",
              }}
            >
              <span>Total</span>
              <span>Rs. {total.toLocaleString()}</span>
            </div>

            <button
              onClick={() => setCheckoutStep("checkout")}
              className="btn-primary"
              style={{
                width: "100%",
                padding: "14px",
                fontSize: "14px",
              }}
            >
              <span>Proceed to Checkout</span>
              <ArrowUpRight size={16} className="arrow-icon" />
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @media (max-width: 440px) {
          .drawer-checkout-actions {
            flex-direction: column !important;
          }
          .drawer-checkout-actions button {
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}
