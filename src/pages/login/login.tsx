import React from "react";
import "./login.css";

interface LoginInput {
  email: string;
  password: string;
}

interface ErrorFormat {
  error: string;
  field: string;
}

const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{3})+$/;
const passwordRegex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{7,20})"
);

function validateFormInputs(input: LoginInput) {
  if (!input.email) {
    // return "Email is required.";
    return { error: "Email is required.", field: "email" };
  }

  if (!emailRegex.test(input.email)) {
    // return "Invalid email format.";
    return { error: "Invalid email format.", field: "email" };
  }

  if (!input.password) {
    // return "Password is required.";
    return { error: "Password is required.", field: "password" };
  }

  if (!passwordRegex.test(input.password)) {
    // return "Password has to be at least 7 characters long, one uppercase letter, one lowercase letter, one number and one special character.";
    return {
      error:
        "Password has to be at least 7 characters long, one uppercase letter, one lowercase letter, one number and one special character.",
      field: "password",
    };
  }
}

export const Login = () => {
  const [input, setInput] = React.useState<LoginInput>({
    email: "",
    password: "",
  });
  const [error, setError] = React.useState<ErrorFormat>({
    error: "",
    field: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const error = validateFormInputs(input);

    if (error) {
      setError({ error: error.error, field: error.field });
      return;
    }

    setIsSubmitting(true);
    setError({ error: "", field: "" });
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
            value={input.email}
            style={{
              color: error.field === "email" ? "red" : "",
              outline: error.field === "email" ? ".3vh solid red" : "",
            }}
            onChange={(e) => {
              setInput({ ...input, email: e.target.value });
              setError({ error: "", field: "" });
            }}
          />
        </div>
        <div className="login-input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={input.password}
            style={{
              color: error.field === "password" ? "red" : "",
              outline: error.field === "password" ? ".3vh solid red" : "",
            }}
            onChange={(e) => {
              setInput({ ...input, password: e.target.value });
              setError({ error: "", field: "" });
            }}
          />
        </div>
        <button className="btn-login" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Loading..." : "Login"}
        </button>
        {error.error && <div className="login-error">{error.error}</div>}
      </form>
    </div>
  );
};
