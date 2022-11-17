import React, { useState, FormEvent } from "react";
import "./login.css";
import { validateEmail } from "../../validators/email";
import { validatePassword } from "../../validators/password";
import { loginMutation } from "../../data/graphql/mutations/login";
import { useMutation } from "@apollo/client";
import { client } from "../../data/graphql/client";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState<string>(null);
  const [passwordError, setPasswordError] = useState<string>("");

  const [login, { loading, error }] = useMutation(loginMutation, {
    client: client,
    onCompleted: (data) => {
      window.localStorage.setItem("auth-token", data.login.token);
    },
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    setEmailError(emailError);
    setPasswordError(passwordError);

    if (!emailError && !passwordError) {
      login({ variables: { data: { email, password } } });
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
        <button className="btn-login" type="submit" disabled={loading}>
          {loading ? "Loading..." : "Login"}
        </button>
        <div className="login-error failed-login">
          {error ? error.message : ""}
        </div>
      </form>
    </div>
  );
};
