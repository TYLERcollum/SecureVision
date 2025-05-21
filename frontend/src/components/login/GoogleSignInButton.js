import React from "react";

export default function GoogleSignInButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff",
        border: "1px solid #e0e0e0",
        borderRadius: 8,
        padding: "10px 0",
        fontSize: 15,
        fontWeight: 500,
        color: "#222",
        cursor: "pointer",
        boxShadow: "0 1px 3px rgba(60,64,67,.08)",
        gap: 10,
      }}
    >
      <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" style={{ width: 22, marginRight: 8 }} />
      Sign in with Google
    </button>
  );
}
