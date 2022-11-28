import React from "react";
import { SectionHeader } from "../../components/header";
import "./style.ts";
import { useMutation } from "@apollo/client";
import { CreateUserMutation } from "../../data/graphql/mutations/create-user";
import { BackButton } from "../../components/back-button";
import { NewUserForm } from "../../components/new-user-form";
import * as S from "./style";

export const NewUser: React.FC = () => {
  const [createUser, { loading, error }] = useMutation(CreateUserMutation, {
    context: {
      headers: { authorization: window.localStorage.getItem("auth-token") },
    },
    onCompleted: () => {
      window.location.href = "/home";
    },
    onError: (error) => error,
  });

  return (
    <S.NewUserWrapper>
      <SectionHeader />
      <BackButton onTap={() => window.history.back()} />
      <S.NewUserTitle>Novo Usuário</S.NewUserTitle>
      <NewUserForm
        createUserFunction={createUser}
        loading={loading}
        error={error}
      />
    </S.NewUserWrapper>
  );
};
