import { ApolloError } from "@apollo/client";
import React, { FormEvent, useState } from "react";
import { validateEmail } from "../../validators/email";
import { validatePassword } from "../../validators/password";
import { DefaultButton } from "../default-button";
import { Input } from "../input";
import { FormWrapper, InputWrapper } from "./style";

interface LoginParamsTypes {
  variables: {
    data: {
      email: string;
      password: string;
    };
  };
}

interface LoginFormTypes {
  loginFunction: (data: LoginParamsTypes) => void;
  loading: boolean;
  error: ApolloError;
}

export const LoginForm: React.FC<LoginFormTypes> = ({
  loginFunction,
  loading,
  error,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState<string>(null);
  const [passwordError, setPasswordError] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    setEmailError(emailError);
    setPasswordError(passwordError);

    if (!emailError && !passwordError) {
      loginFunction({ variables: { data: { email, password } } });
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <InputWrapper>
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
          errorMessage={emailError}
        />
      </InputWrapper>
      <InputWrapper>
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
          errorMessage={passwordError}
        />
      </InputWrapper>
      <DefaultButton
        type="submit"
        text="Entrar"
        loading={loading}
        error={error}
      />
    </FormWrapper>
  );
};
