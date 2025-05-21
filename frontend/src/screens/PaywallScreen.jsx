import React from "react";

const plans = [
  {
    name: "Standard Care Plan",
    price: "$0",
    period: "/month",
    features: [
      "1 PSD with Font",
      "30 Day Trial",
      "Sale After Service",
      "Help Line"
    ],
    highlight: "#2ecc40", // green
  },
  {
    name: "Advanced Care Plan",
    price: "$40",
    period: "/month",
    features: [
      "1 PSD with Font",
      "30 Day Trial",
      "Sale After Service",
      "Help Line"
    ],
    highlight: "#e74c3c", // red
  }
];

export default function PaywallScreen({ onPlanSelect }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #e0f0ff 0%, #f9fbff 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 32,
          background: "transparent",
          padding: 32,
          borderRadius: 24,
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)",
        }}
      >
        {plans.map((plan, idx) => (
          <div
            key={plan.name}
            style={{
              background: "#fff",
              borderRadius: 16,
              boxShadow: "0 4px 16px 0 rgba(31, 38, 135, 0.10)",
              padding: "32px 28px 28px 28px",
              width: 320,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderTop: `6px solid ${plan.highlight}`,
              position: "relative",
            }}
          >
            <div style={{ fontSize: 32, marginBottom: 8 }}>
              {idx === 0 ? (
                <span role="img" aria-label="tools">🛠️</span>
              ) : (
                <span role="img" aria-label="bomb">💣</span>
              )}
            </div>
            <h3 style={{ margin: "8px 0 24px 0", fontWeight: 700, fontSize: 22, letterSpacing: 0.5 }}>{plan.name}</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, width: "100%" }}>
              {plan.features.map((feat, i) => (
                <li
                  key={feat}
                  style={{
                    color: i === 0 ? "#222" : "#888",
                    fontWeight: i === 0 ? 600 : 400,
                    fontSize: 16,
                    marginBottom: 18,
                    textAlign: "center",
                  }}
                >
                  {i === 0 ? (
                    <span style={{ fontWeight: 700 }}>{feat}</span>
                  ) : (
                    feat
                  )}
                </li>
              ))}
            </ul>
            <div style={{ fontWeight: 700, fontSize: 32, margin: "18px 0 4px 0", color: plan.highlight }}>{plan.price}<span style={{ fontWeight: 400, fontSize: 18, color: "#888" }}>{plan.period}</span></div>
            <button
              style={{
                marginTop: 20,
                width: "100%",
                background: "#4b6cb7",
                color: "#fff",
                fontWeight: 600,
                border: "none",
                borderRadius: 8,
                padding: "14px 0",
                fontSize: 18,
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(52,152,253,0.10)",
                transition: "background 0.2s",
              }}
              onClick={() => onPlanSelect && onPlanSelect(plan.name)}
            >
              SIGN UP
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

