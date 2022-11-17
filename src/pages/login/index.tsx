import React, { useState, FormEvent } from "react";
import "./style.css";
import { validateEmail } from "../../validators/email";
import { validatePassword } from "../../validators/password";
import { loginMutation } from "../../data/graphql/mutations/login";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState<string>(null);
  const [loginError, setLoginError] = useState<string>(null);
  const [passwordError, setPasswordError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const login = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const userResponse = await loginMutation(email, password);
      window.localStorage.setItem("auth-token", userResponse.token);
      setLoginError(null);
    } catch (error) {
      setLoginError(error.message);
    }

    const hasUser = window.localStorage.getItem("auth-token");

    setIsSubmitting(false);

    if (hasUser) {
      window.location.href = "/home";
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    setEmailError(emailError);
    setPasswordError(passwordError);

    if (!emailError && !passwordError) {
      login(e);
    }
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
        <div className="login-error failed-login">{loginError}</div>
      </form>
    </div>
  );
};
