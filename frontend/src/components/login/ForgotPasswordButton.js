import React from "react";

export default function ForgotPasswordButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        background: "none",
        border: "none",
        color: "#3498fd",
        fontSize: 14,
        cursor: "pointer",
        textDecoration: "underline",
        padding: 0,
      }}
    >
      Forgot password?
    </button>
  );
}
