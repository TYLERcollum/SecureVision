import React, { useState } from "react";
import EmailInput from "../components/login/EmailInput";
import PasswordInput from "../components/login/PasswordInput";
import ConfirmPasswordInput from "../components/login/ConfirmPasswordInput";
import LoginButton from "../components/login/LoginButton";
import CreateAccountButton from "../components/login/CreateAccountButton";
import GoogleSignInButton from "../components/login/GoogleSignInButton";
import ForgotPasswordButton from "../components/login/ForgotPasswordButton";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";

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

  const handleLogin = (e) => {
    e.preventDefault();
    // Firebase login with email verification check
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (!userCredential.user.emailVerified) {
          alert("Please verify your email before logging in. Check your inbox.");
          // Optionally, sign out the user
        } else {
          alert("Login successful!");
          // TODO: Redirect or show main app
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleForgotPassword = () => {
    // TODO: Add forgot password logic
    alert("Forgot password clicked");
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
        sendEmailVerification(userCredential.user)
          .then(() => {
            alert("Verification email sent! Please check your inbox.");
            // Optionally, sign out or block login until verified
          });
      })
      .catch((error) => {
        alert(error.message);
      });
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
        <h2 style={{ margin: 0, marginBottom: 24 }}>
          {isCreateMode ? "Create account with email" : "Sign in with email"}
        </h2>
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
      </div>
    </div>
  );
}

