import React from "react";
import * as S from "./style";
import { loginMutation } from "../../data/graphql/mutations/login";
import { useMutation } from "@apollo/client";
import { SectionHeader } from "../../components/section-header";
import { LoginForm } from "../../components/login-form";

export const LoginPage: React.FC = () => {
  const [login, { loading, error }] = useMutation(loginMutation, {
    onCompleted: (data) => {
      window.localStorage.setItem("auth-token", data.login.token);
      window.location.href = "/home";
    },
    onError: (error) => error,
  });

  return (
    <S.Container>
      <SectionHeader />
      <LoginForm loginFunction={login} loading={loading} error={error} />
    </S.Container>
  );
};
