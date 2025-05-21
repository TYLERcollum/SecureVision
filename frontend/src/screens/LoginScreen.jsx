import React, { useState } from "react";
import EmailInput from "../components/login/EmailInput";
import PasswordInput from "../components/login/PasswordInput";
import LoginButton from "../components/login/LoginButton";
import CreateAccountButton from "../components/login/CreateAccountButton";
import GoogleSignInButton from "../components/login/GoogleSignInButton";
import ForgotPasswordButton from "../components/login/ForgotPasswordButton";

// Placeholder for Google sign-in handler
const handleGoogleSignIn = () => {
  // TODO: Integrate with Firebase/Fireload
  alert("Google sign-in not yet implemented.");
};

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Add login logic
    alert(`Login with ${email}`);
  };

  const handleForgotPassword = () => {
    // TODO: Add forgot password logic
    alert("Forgot password clicked");
  };

  const handleCreateAccount = () => {
    // TODO: Add create account logic
    alert("Create account clicked");
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(to bottom, #e0f0ff 0%, #f9fbff 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <div style={{
        background: "#fff",
        borderRadius: 20,
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)",
        padding: 40,
        width: 350,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
        <div style={{
          background: "#f1f6fb",
          borderRadius: "50%",
          width: 56,
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 24,
        }}>
          <span role="img" aria-label="login" style={{ fontSize: 28 }}>
            􁜉
          </span>
        </div>
        <h2 style={{ margin: 0, marginBottom: 8 }}>Sign in with email</h2>
        <div style={{ color: "#888", marginBottom: 28, fontSize: 15, textAlign: "center" }}>
          Make a new doc to bring your words, data, and teams together. For free
        </div>
        <form onSubmit={handleLogin} style={{ width: "100%" }}>
          <EmailInput value={email} onChange={e => setEmail(e.target.value)} />
          <PasswordInput value={password} onChange={e => setPassword(e.target.value)} />
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 20 }}>
            <ForgotPasswordButton onClick={handleForgotPassword} />
          </div>
          <LoginButton />
        </form>
        <CreateAccountButton onClick={handleCreateAccount} />
        <div style={{ width: "100%", textAlign: "center", margin: "12px 0 10px 0", color: "#bbb" }}>
          Or sign in with
        </div>
        <GoogleSignInButton onClick={handleGoogleSignIn} />
      </div>
    </div>
  );
}

