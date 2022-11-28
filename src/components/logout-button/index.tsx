import React from "react";
import * as S from "./style";
import { SignOut } from "phosphor-react";

export const LogoutButton: React.FC = () => {
  return (
    <S.LogoutButton
      onClick={() => {
        window.localStorage.removeItem("auth-token");
        window.location.reload();
      }}
    >
      <SignOut size={24} />
      <S.LogoutButtonText>Sair</S.LogoutButtonText>
    </S.LogoutButton>
  );
};
