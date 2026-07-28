import React from "react";

/**
 * Floating WhatsApp button.
 * Drop <WhatsAppButton /> once in your root layout (e.g. App.jsx)
 * so it shows on every page.
 */
export default function WhatsAppButton() {
  const phoneNumber = "254737821126"; // 0737821126 in international format, no +, no leading 0
  const message = "Hi Kavaro Agency, I'd like to know more about your services.";
  const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        backgroundColor: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
        zIndex: 1000,
        transition: "transform 0.2s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <svg
        viewBox="0 0 32 32"
        width="32"
        height="32"
        fill="#fff"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.397.635 4.646 1.744 6.591L4 29l7.59-1.712A11.94 11.94 0 0016.001 27C22.628 27 28 21.627 28 15S22.628 3 16.001 3zm0 21.818a9.77 9.77 0 01-4.985-1.363l-.357-.211-4.505 1.017 1.03-4.394-.232-.363A9.77 9.77 0 016.182 15c0-5.415 4.404-9.818 9.819-9.818 5.415 0 9.818 4.403 9.818 9.818 0 5.415-4.403 9.818-9.818 9.818zm5.4-7.36c-.296-.148-1.75-.864-2.022-.963-.271-.099-.469-.148-.667.148-.198.297-.766.963-.939 1.161-.173.198-.346.223-.642.075-.296-.148-1.249-.46-2.379-1.467-.879-.784-1.473-1.752-1.646-2.048-.173-.297-.018-.457.13-.605.134-.133.297-.346.445-.519.148-.173.198-.297.297-.494.099-.198.05-.371-.025-.519-.075-.148-.667-1.61-.914-2.204-.241-.579-.486-.5-.667-.51-.173-.008-.371-.01-.568-.01-.198 0-.519.075-.79.371-.271.297-1.037 1.014-1.037 2.473 0 1.459 1.062 2.868 1.21 3.066.148.198 2.09 3.19 5.06 4.474.707.305 1.258.487 1.688.623.709.226 1.354.194 1.864.118.569-.085 1.75-.715 1.997-1.406.247-.692.247-1.285.173-1.408-.074-.123-.271-.198-.568-.346z" />
      </svg>
    </a>
  );
}
