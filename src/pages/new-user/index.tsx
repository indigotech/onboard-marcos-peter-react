import React from "react";
import { SectionHeader } from "../../components/section-header";
import "./style.ts";
import { useMutation } from "@apollo/client";
import { CreateUserMutation } from "../../data/graphql/mutations/create-user";
import { BackButton } from "../../components/back-button";
import { NewUserForm } from "../../components/new-user-form";
import { NewUserWrapper, NewUserTitle } from "./style";
import { NewUserFormData } from "../../components/new-user-form";

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
    <NewUserWrapper>
      <SectionHeader />
      <BackButton text="Voltar" onTap={() => window.history.back()} />
      <NewUserTitle>Novo Usuário</NewUserTitle>
      <NewUserForm
        onSubmitSuccess={(formData: NewUserFormData) => {
          createUser({
            variables: {
              data: formData,
            },
          });
        }}
        loading={loading}
        error={error}
      />
    </NewUserWrapper>
  );
};
