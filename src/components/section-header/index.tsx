import React from "react";
import { LogoutButton } from "../logout-button";
import { HeaderWrapper, HeaderTitle } from "./style";

export const SectionHeader: React.FC = () => {
  const loggedIn = window.localStorage.getItem("auth-token");

  return (
    <HeaderWrapper>
      <HeaderTitle>Bem-vindo(a) à Taqtile!</HeaderTitle>
      {loggedIn && <LogoutButton />}
    </HeaderWrapper>
  );
};
