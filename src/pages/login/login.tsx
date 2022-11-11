import React, { useState, FormEvent } from "react";
import "./login.css";
import { validateEmail } from "../../validators/email";
import { validatePassword } from "../../validators/password";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState<string>(null);
  const [passwordError, setPasswordError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    setEmailError(emailError);
    setPasswordError(passwordError);

    if (!emailError && !passwordError) {
      setIsSubmitting(true);
    }

    return;
  };

  return (
    <div className="container">
      <h1 className="title">Bem-vindo(a) à Taqtile!</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className={emailError ? "error" : ""}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
          />
          <div className="login-error email-error">{emailError}</div>
        </div>
        <div className="login-input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className={passwordError ? "error" : ""}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError("");
            }}
          />
          <div className="login-error password-error">{passwordError}</div>
        </div>
        <button className="btn-login" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
};
