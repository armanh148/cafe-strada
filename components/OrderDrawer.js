"use client";

import { useState } from "react";
import {
  X,
  Plus,
  Minus,
  Trash2,
  ArrowUpRight,
  Check,
  ShoppingBag,
  Phone,
  MapPin,
  Utensils,
  Sparkles,
} from "lucide-react";
import { CAFE_STRADA_DATA } from "@/lib/cafeStradaData";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const RECOMMENDED_ITEMS = [
  {
    id: "moroccan-chicken-steak",
    name: "Moroccan Chicken Steak",
    price: "Rs. 1,495",
    tag: "Bestseller",
    image: "/images/strada-steak.jpg",
  },
  {
    id: "alfredo-pasta",
    name: "Fettuccine Alfredo Pasta",
    price: "Rs. 1,295",
    tag: "Chef's Special",
    image: "/images/strada-pasta.jpg",
  },
  {
    id: "iced-spanish-latte",
    name: "Iced Spanish Velvet Latte",
    price: "Rs. 680",
    tag: "Artisan Brew",
    image: "/images/iced-milk-coffee.jpg",
  },
];

export default function OrderDrawer({
  isOpen,
  onClose,
  cart = [],
  onAddToCart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) {
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
  const totalItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

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
      msg += `${index + 1}. ${item.name} x ${item.quantity} = Rs. ${(
        parsePrice(item.price) * item.quantity
      ).toLocaleString()}\n`;
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
          height: "100%",
          boxSizing: "border-box",
          background: "#FAF7F2",
          padding: 0,
        }}
      >
        {/* Top Header Section (Always pinned to top) */}
        <div
          style={{
            flexShrink: 0,
            padding: "14px 20px 14px",
            borderBottom: "1px solid rgba(60, 33, 21, 0.08)",
            background: "#FAF7F2",
          }}
        >
          {/* Mobile Drag Indicator Handle */}
          <div
            className="drawer-drag-handle"
            style={{
              width: "42px",
              height: "4px",
              borderRadius: "999px",
              background: "rgba(60, 33, 21, 0.22)",
              margin: "0 auto 12px",
            }}
          />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Title & Badge */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "12px",
                  background: "#D9FB36",
                  color: "#23150D",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 8px rgba(217, 251, 54, 0.35)",
                }}
              >
                <ShoppingBag size={18} strokeWidth={2.5} />
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <h3
                    className="font-serif"
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#23150D",
                      margin: 0,
                      lineHeight: 1.2,
                    }}
                  >
                    Café Strada Order
                  </h3>
                  {totalItemCount > 0 && (
                    <span
                      style={{
                        background: "#23150D",
                        color: "#D9FB36",
                        fontSize: "10.5px",
                        fontWeight: 800,
                        padding: "2px 8px",
                        borderRadius: "999px",
                      }}
                    >
                      {totalItemCount} {totalItemCount === 1 ? "item" : "items"}
                    </span>
                  )}
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "#8C7667",
                    letterSpacing: "0.02em",
                  }}
                >
                  Bungalow F-64/1, Clifton • Karachi
                </p>
              </div>
            </div>

            {/* Close Button */}
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
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(60, 33, 21, 0.12)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "rgba(60, 33, 21, 0.06)")
              }
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body (Takes full height between header & footer) */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            minHeight: 0,
          }}
        >
          {/* Step 1: Cart View */}
          {checkoutStep === "cart" && (
            <>
              {cart.length === 0 ? (
                /* Luxury Empty State with Quick-Add Bestsellers */
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "20px 16px 24px",
                  }}
                >
                  <div style={{ textAlign: "center", marginBottom: "18px" }}>
                    <div
                      style={{
                        width: "64px",
                        height: "64px",
                        borderRadius: "50%",
                        background:
                          "radial-gradient(circle, rgba(217, 251, 54, 0.4) 0%, rgba(252, 248, 223, 0.8) 70%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 12px",
                        boxShadow: "0 8px 20px rgba(60, 33, 21, 0.08)",
                        border: "1.5px solid rgba(217, 251, 54, 0.6)",
                      }}
                    >
                      <ShoppingBag size={28} color="#23150D" strokeWidth={2} />
                    </div>

                    <h4
                      className="font-serif"
                      style={{
                        fontSize: "20px",
                        fontWeight: 700,
                        color: "#23150D",
                        margin: "0 0 6px 0",
                      }}
                    >
                      Your order is empty
                    </h4>

                    <p
                      style={{
                        fontSize: "12.5px",
                        color: "#6B5548",
                        maxWidth: "320px",
                        margin: "0 auto",
                        lineHeight: 1.5,
                      }}
                    >
                      Handcrafted upon order in Clifton, Karachi. Add our bestsellers below or explore the full menu.
                    </p>
                  </div>

                  {/* Chef's Recommended Quick-Add Cards */}
                  <div style={{ marginBottom: "18px" }}>
                    <div
                      style={{
                        fontSize: "11px",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "#8DAE00",
                        marginBottom: "10px",
                        paddingLeft: "4px",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <Sparkles size={13} />
                      <span>Popular Clifton Favorites (1-Tap Add):</span>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      {RECOMMENDED_ITEMS.map((dish) => (
                        <div
                          key={dish.id}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            background: "#FFFFFF",
                            padding: "10px 12px",
                            borderRadius: "16px",
                            border: "1px solid rgba(60, 33, 21, 0.08)",
                            boxShadow: "0 2px 8px rgba(60, 33, 21, 0.04)",
                            transition: "all 0.2s ease",
                          }}
                        >
                          <img
                            src={dish.image}
                            alt={dish.name}
                            style={{
                              width: "50px",
                              height: "50px",
                              borderRadius: "12px",
                              objectFit: "cover",
                              flexShrink: 0,
                            }}
                          />
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "6px",
                                marginBottom: "2px",
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "13px",
                                  fontWeight: 700,
                                  color: "#23150D",
                                  whiteSpace: "nowrap",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                }}
                              >
                                {dish.name}
                              </span>
                              <span
                                style={{
                                  fontSize: "9px",
                                  fontWeight: 800,
                                  color: "#23150D",
                                  background: "#D9FB36",
                                  padding: "1px 6px",
                                  borderRadius: "999px",
                                  textTransform: "uppercase",
                                  flexShrink: 0,
                                }}
                              >
                                {dish.tag}
                              </span>
                            </div>
                            <div
                              style={{
                                fontSize: "12.5px",
                                fontWeight: 800,
                                color: "#3C2115",
                              }}
                            >
                              {dish.price}
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => onAddToCart && onAddToCart(dish)}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "4px",
                              background: "#D9FB36",
                              color: "#23150D",
                              border: "none",
                              borderRadius: "999px",
                              padding: "7px 12px",
                              fontSize: "12px",
                              fontWeight: 800,
                              cursor: "pointer",
                              flexShrink: 0,
                              boxShadow: "0 2px 6px rgba(217, 251, 54, 0.4)",
                              transition: "transform 0.15s ease",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                          >
                            <Plus size={13} strokeWidth={3} />
                            <span>Add</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Explore Full Menu Button */}
                  <button
                    onClick={onClose}
                    className="btn-primary"
                    style={{
                      padding: "12px 24px",
                      fontSize: "13.5px",
                      justifyContent: "center",
                      width: "100%",
                      boxShadow: "0 6px 18px rgba(35, 21, 13, 0.2)",
                    }}
                  >
                    <span>Explore Full Continental Menu</span>
                    <ArrowUpRight size={15} className="arrow-icon" />
                  </button>
                </div>
              ) : (
                /* Cart Items List */
                <div
                  style={{
                    padding: "18px 20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                        background: "#FFFFFF",
                        padding: "12px 14px",
                        borderRadius: "18px",
                        border: "1px solid rgba(60, 33, 21, 0.08)",
                        boxShadow: "0 2px 8px rgba(60, 33, 21, 0.04)",
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          width: "56px",
                          height: "56px",
                          borderRadius: "14px",
                          objectFit: "cover",
                          flexShrink: 0,
                        }}
                      />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div
                          style={{
                            fontSize: "14px",
                            fontWeight: 700,
                            color: "#23150D",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            marginBottom: "2px",
                          }}
                        >
                          {item.name}
                        </div>
                        <div
                          style={{
                            fontSize: "13px",
                            fontWeight: 700,
                            color: "#3C2115",
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
                          background: "#FAF7F2",
                          padding: "5px 9px",
                          borderRadius: "999px",
                          border: "1px solid rgba(60, 33, 21, 0.1)",
                          flexShrink: 0,
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
                            padding: "2px",
                          }}
                        >
                          <Minus size={13} strokeWidth={2.5} />
                        </button>
                        <span
                          style={{
                            fontSize: "13px",
                            fontWeight: 800,
                            color: "#23150D",
                            minWidth: "16px",
                            textAlign: "center",
                          }}
                        >
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
                            padding: "2px",
                          }}
                        >
                          <Plus size={13} strokeWidth={2.5} />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        aria-label="Remove item"
                        style={{
                          background: "transparent",
                          border: "none",
                          color: "#A48E80",
                          cursor: "pointer",
                          padding: "6px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "color 0.2s ease",
                          flexShrink: 0,
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#DC2626")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#A48E80")}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}

                  <div style={{ textAlign: "center", paddingTop: "8px" }}>
                    <button
                      onClick={onClose}
                      style={{
                        background: "none",
                        border: "none",
                        color: "#6B5548",
                        fontSize: "12.5px",
                        fontWeight: 700,
                        cursor: "pointer",
                        textDecoration: "underline",
                      }}
                    >
                      + Add more items from menu
                    </button>
                  </div>
                </div>
              )}
            </>
          )}

          {/* Step 2: Details & WhatsApp Dispatch */}
          {checkoutStep === "checkout" && (
            <form
              onSubmit={handleCheckoutSubmit}
              style={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              {/* Dining / Order Type Selector */}
              <div>
                <label
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#23150D",
                    display: "block",
                    marginBottom: "6px",
                  }}
                >
                  Select Dining Preference
                </label>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "8px",
                  }}
                >
                  {["dine-in", "takeaway", "delivery"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setOrderType(type)}
                      style={{
                        padding: "9px 6px",
                        borderRadius: "12px",
                        fontSize: "12px",
                        fontWeight: 700,
                        textTransform: "capitalize",
                        cursor: "pointer",
                        border:
                          orderType === type
                            ? "2px solid #23150D"
                            : "1px solid rgba(60, 33, 21, 0.15)",
                        background: orderType === type ? "#D9FB36" : "#FFFFFF",
                        color: "#23150D",
                        transition: "all 0.15s ease",
                      }}
                    >
                      {type === "dine-in"
                        ? "Dine-In"
                        : type === "takeaway"
                        ? "Takeaway"
                        : "Delivery"}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#23150D",
                    display: "block",
                    marginBottom: "4px",
                  }}
                >
                  Your Name *
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
                    background: "#FFFFFF",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#23150D",
                    display: "block",
                    marginBottom: "4px",
                  }}
                >
                  WhatsApp / Phone Number *
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
                    background: "#FFFFFF",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#23150D",
                    display: "block",
                    marginBottom: "4px",
                  }}
                >
                  {orderType === "dine-in"
                    ? "Table Number or Reservation Time"
                    : "Delivery Address in Clifton / DHA"}
                </label>
                <input
                  type="text"
                  placeholder={
                    orderType === "dine-in"
                      ? "e.g. Table 5 or Today 8:00 PM"
                      : "e.g. Block 4, Clifton"
                  }
                  value={addressOrTable}
                  onChange={(e) => setAddressOrTable(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "11px 16px",
                    borderRadius: "12px",
                    border: "1.5px solid rgba(60, 33, 21, 0.15)",
                    outline: "none",
                    fontSize: "14px",
                    background: "#FFFFFF",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div
                style={{
                  background: "#FCF8DF",
                  padding: "12px",
                  borderRadius: "12px",
                  fontSize: "12px",
                  color: "#3C2115",
                  lineHeight: 1.45,
                }}
              >
                ✦ Your order will be formatted and delivered straight to{" "}
                <strong>Café Strada's official WhatsApp</strong> desk for instant
                preparation!
              </div>

              <div
                className="drawer-checkout-actions"
                style={{ display: "flex", gap: "10px", marginTop: "6px" }}
              >
                <button
                  type="button"
                  onClick={() => setCheckoutStep("cart")}
                  className="btn-secondary"
                  style={{ flex: 1, padding: "12px" }}
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
                  <WhatsAppIcon size={17} color="#FFFFFF" />
                  <span>Send via WhatsApp (Rs. {total.toLocaleString()})</span>
                </button>
              </div>
            </form>
          )}

          {/* Step 3: Success Confirmation */}
          {checkoutStep === "success" && (
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "36px 20px",
              }}
            >
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  background: "#D9FB36",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 18px",
                  boxShadow: "0 8px 24px rgba(217, 251, 54, 0.5)",
                }}
              >
                <Check size={36} color="#23150D" strokeWidth={3} />
              </div>
              <h4
                className="font-serif"
                style={{
                  fontSize: "22px",
                  color: "#23150D",
                  marginBottom: "8px",
                }}
              >
                Order Sent via WhatsApp!
              </h4>
              <p
                style={{
                  fontSize: "13.5px",
                  color: "#6B5548",
                  maxWidth: "320px",
                  margin: "0 auto 24px",
                  lineHeight: 1.5,
                }}
              >
                Café Strada Clifton staff has received your order and will confirm
                preparation or table reservation shortly.
              </p>
              <button
                onClick={() => {
                  setCheckoutStep("cart");
                  onClose();
                }}
                className="btn-primary"
                style={{ padding: "12px 32px", fontSize: "14px" }}
              >
                Done
              </button>
            </div>
          )}
        </div>

        {/* Bottom Checkout Footer (Pinned to bottom when items are present) */}
        {checkoutStep === "cart" && cart.length > 0 && (
          <div
            style={{
              flexShrink: 0,
              borderTop: "1px solid rgba(60, 33, 21, 0.1)",
              padding: "16px 20px 20px",
              background: "#FFFFFF",
              boxShadow: "0 -4px 18px rgba(60, 33, 21, 0.04)",
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
              <span style={{ fontWeight: 600, color: "#23150D" }}>
                Rs. {subtotal.toLocaleString()}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "13px",
                color: "#7A6456",
                marginBottom: "10px",
              }}
            >
              <span>Service / Delivery</span>
              <span style={{ fontWeight: 600, color: "#25D366" }}>
                {deliveryFee === 0 ? "FREE" : `Rs. ${deliveryFee}`}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "17px",
                fontWeight: 800,
                color: "#23150D",
                marginBottom: "16px",
                paddingTop: "6px",
                borderTop: "1px dashed rgba(60, 33, 21, 0.12)",
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
                padding: "13px",
                fontSize: "14px",
                justifyContent: "center",
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
