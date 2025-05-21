import React from "react";

export default function PasswordInput({ value, onChange }) {
  return (
    <input
      type="password"
      placeholder="Password"
      value={value}
      onChange={onChange}
      style={{
        width: "100%",
        padding: "12px 16px",
        marginBottom: 8,
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
