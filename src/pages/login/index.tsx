import React, { useState, FormEvent } from "react";
import "./style.css";
import { validateEmail } from "../../validators/email";
import { validatePassword } from "../../validators/password";
import { loginMutation } from "../../data/graphql/mutations/login";
import { useMutation } from "@apollo/client";
import { client } from "../../data/graphql/client";
import { Header } from "../../components/header";
import { Button } from "../../components/button";
import { Input } from "../../components/input";

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState<string>(null);
  const [passwordError, setPasswordError] = useState<string>("");

  const [login, { loading, error }] = useMutation(loginMutation, {
    client: client,
    onCompleted: (data) => {
      window.localStorage.setItem("auth-token", data.login.token);
      window.location.href = "/home";
    },
    onError: (error) => error,
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
  };

  return (
    <div className="container">
      <Header />
      <form className="login-form" onSubmit={handleSubmit}>
        <Input
          name="email"
          label="Email"
          type="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError("");
          }}
          error={emailError}
        />
        <Input
          name="password"
          label="Password"
          type="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError("");
          }}
          error={passwordError}
        />
        <Button
          type="submit"
          text="Entrar"
          loading={loading}
          error={error}
          withLoading={true}
        />
      </form>
    </div>
  );
};
