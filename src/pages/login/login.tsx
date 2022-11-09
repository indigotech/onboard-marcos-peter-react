import React, { useState, FormEvent } from "react";
import "./login.css";
import { ErrorFormat } from "../../models/error";
import { validateEmail } from "../../validators/email";
import { validatePassword } from "../../validators/password";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<ErrorFormat[]>([]);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const error = [validateEmail(email), validatePassword(password)].filter(
      (e) => e
    );

    setErrors(error.length > 0 ? error : []);

    if (error.length === 0) {
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
            className={errors.find((e) => e.field === "email") ? "error" : ""}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors([...errors].filter((e) => e.field !== "email"));
            }}
          />
          <div className="login-error email-error">
            {errors.map((error) =>
              error.field === "email" ? error.message : null
            )}
          </div>
        </div>
        <div className="login-input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className={
              errors.find((e) => e.field === "password") ? "error" : ""
            }
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrors([...errors].filter((e) => e.field !== "password"));
            }}
          />
          <div className="login-error password-error">
            {errors.map((error) =>
              error.field === "password" ? error.message : null
            )}
          </div>
        </div>
        <button className="btn-login" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
};
