import React from "react";

export default function LoginButton({ onClick }) {
  return (
    <button
      type="submit"
      style={{
        width: "100%",
        background: "#3498fd",
        color: "#fff",
        fontWeight: 600,
        border: "none",
        borderRadius: 8,
        padding: "12px 0",
        fontSize: 16,
        marginBottom: 12,
        cursor: "pointer",
        boxShadow: "0 2px 8px rgba(52,152,253,0.10)",
      }}
      onClick={onClick}
    >
      Get Started
    </button>
  );
}
