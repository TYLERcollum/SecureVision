import React from "react";

export default function EmailInput({ value, onChange }) {
  return (
    <input
      type="email"
      placeholder="Email address"
      value={value}
      onChange={onChange}
      style={{
        width: "100%",
        padding: "12px 16px",
        marginBottom: 16,
        borderRadius: 8,
        border: "1px solid #e0e0e0",
        fontSize: 16,
        background: "#f7f9fa",
        color: "#222",
      }}
      required
    />
  );
}
