import React, { useState } from "react";
import EmailInput from "../components/login/EmailInput";
import PasswordInput from "../components/login/PasswordInput";
import ConfirmPasswordInput from "../components/login/ConfirmPasswordInput";
import LoginButton from "../components/login/LoginButton";
import CreateAccountButton from "../components/login/CreateAccountButton";
import GoogleSignInButton from "../components/login/GoogleSignInButton";
import ForgotPasswordButton from "../components/login/ForgotPasswordButton";
import PaywallScreen from "./PaywallScreen";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

// Placeholder for Google sign-in handler
const handleGoogleSignIn = () => {
  // TODO: Integrate with Firebase/Fireload
  alert("Google sign-in not yet implemented.");
};

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isCreateMode, setIsCreateMode] = useState(false);
  const [showVerifyPrompt, setShowVerifyPrompt] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState("");
  const [signupError, setSignupError] = useState("");
  const [forgotPasswordMessage, setForgotPasswordMessage] = useState("");
  const [showPaywall, setShowPaywall] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Firebase login with email verification check
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (!userCredential.user.emailVerified) {
          alert("Please verify your email before logging in. Check your inbox.");
          // Optionally, sign out the user
        } else {
          setShowPaywall(true);
          // TODO: Redirect or show main app
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleForgotPassword = () => {
    setForgotPasswordMessage("");
    if (!email) {
      setForgotPasswordMessage("Please enter your email address to reset your password.");
      return;
    }
    try {
      sendPasswordResetEmail(auth, email);
      setForgotPasswordMessage("If an account exists for this email, a password reset link has been sent. Please check your inbox.");
    } catch (error) {
      setForgotPasswordMessage("If an account exists for this email, a password reset link has been sent. Please check your inbox.");
    }
  };

  const handleCreateAccount = (e) => {
    if (!isCreateMode) {
      setIsCreateMode(true);
      return;
    }
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    // Firebase signup and send verification email
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignupError("");
        sendEmailVerification(userCredential.user)
          .then(() => {
            setShowVerifyPrompt(true);
            setVerificationMessage("");
          });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setSignupError("An account with this email already exists. Would you like to log in instead?");
        } else {
          alert(error.message);
        }
      });
  };

  if (showPaywall) {
    return <PaywallScreen onPlanSelect={(plan) => alert(`Selected: ${plan}`)} />;
  }

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
        {showVerifyPrompt ? (
          <>
            <h2 style={{ margin: 0, marginBottom: 20 }}>Verify your email</h2>
            <div style={{ color: "#888", marginBottom: 24, fontSize: 15, textAlign: "center" }}>
              Please check your inbox and verify your email before logging in.
            </div>
            <button
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
              onClick={async () => {
                if (auth.currentUser) {
                  await auth.currentUser.reload();
                  if (auth.currentUser.emailVerified) {
                    setVerificationMessage("Account created successfully!");
                    setTimeout(() => {
                      setShowVerifyPrompt(false);
                      setIsCreateMode(false);
                      setEmail("");
                      setPassword("");
                      setConfirmPassword("");
                      setVerificationMessage("");
                    }, 2000);
                  } else {
                    setVerificationMessage("Still not verified. Please check your inbox.");
                  }
                }
              }}
            >
              I've Verified My Email
            </button>
            {verificationMessage && (
              <div style={{ color: verificationMessage.includes("successfully") ? "green" : "#e74c3c", marginTop: 10, textAlign: "center" }}>
                {verificationMessage}
              </div>
            )}
          </>
        ) : (
          <>
            <h2 style={{ margin: 0, marginBottom: 24 }}>
              {isCreateMode ? "Create account with email" : "Sign in with email"}
            </h2>
            {isCreateMode && signupError && (
              <div style={{
                background: "#fff8e1",
                color: "#b26a00",
                border: "1px solid #ffe082",
                borderRadius: 8,
                padding: "14px 16px",
                marginBottom: 16,
                fontSize: 15,
                textAlign: "center"
              }}>
                {signupError}
                <div style={{ marginTop: 10 }}>
                  <button
                    style={{
                      background: "#3498fd",
                      color: "#fff",
                      border: "none",
                      borderRadius: 6,
                      padding: "8px 18px",
                      fontWeight: 600,
                      cursor: "pointer",
                      fontSize: 15
                    }}
                    onClick={() => {
                      setIsCreateMode(false);
                      setSignupError("");
                      setEmail("");
                      setPassword("");
                      setConfirmPassword("");
                    }}
                  >
                    Back to Login
                  </button>
                </div>
              </div>
            )}
            <form onSubmit={isCreateMode ? handleCreateAccount : handleLogin} style={{ width: "100%" }}>
              <EmailInput value={email} onChange={e => setEmail(e.target.value)} />
              <PasswordInput value={password} onChange={e => setPassword(e.target.value)} />
              {isCreateMode && (
                <ConfirmPasswordInput value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
              )}
              {!isCreateMode && (
                <>
                  <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 20 }}>
                    <ForgotPasswordButton onClick={handleForgotPassword} />
                  </div>
                  {forgotPasswordMessage && (
                    <div style={{
                      background: "#e3f2fd",
                      color: "#1565c0",
                      border: "1px solid #90caf9",
                      borderRadius: 8,
                      padding: "10px 14px",
                      marginBottom: 16,
                      fontSize: 15,
                      textAlign: "center"
                    }}>
                      {forgotPasswordMessage}
                    </div>
                  )}
                  <LoginButton />
                </>
              )}
              {isCreateMode && (
                <CreateAccountButton onClick={handleCreateAccount} />
              )}
            </form>
            {!isCreateMode && (
              <>
                <CreateAccountButton onClick={handleCreateAccount} />
                <div style={{ width: "100%", textAlign: "center", margin: "12px 0 10px 0", color: "#bbb" }}>
                  Or sign in with
                </div>
                <GoogleSignInButton onClick={handleGoogleSignIn} />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
