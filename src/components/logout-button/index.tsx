import React from "react";
import { LogoutButtonStyled, LogoutButtonText } from "./style";
import { SignOut } from "phosphor-react";

export const LogoutButton: React.FC = () => {
  return (
    <LogoutButtonStyled
      onClick={() => {
        window.localStorage.removeItem("auth-token");
        window.location.reload();
      }}
    >
      <SignOut size={24} />
      <LogoutButtonText>Sair</LogoutButtonText>
    </LogoutButtonStyled>
  );
};
