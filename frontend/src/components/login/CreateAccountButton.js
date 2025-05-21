import React from "react";

export default function CreateAccountButton({ onClick }) {
  return (
    <button
      type="button"
      style={{
        width: "100%",
        background: "#e9f2ff",
        color: "#3498fd",
        border: "none",
        borderRadius: 8,
        padding: "10px 0",
        fontSize: 15,
        fontWeight: 500,
        marginBottom: 18,
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      Create Account
    </button>
  );
}
