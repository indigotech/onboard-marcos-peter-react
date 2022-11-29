import React from "react";
import { LogoutButton } from "../logout-button";
import * as S from "./style";

export const SectionHeader: React.FC = () => {
  const loggedIn = window.localStorage.getItem("auth-token");

  return (
    <S.HeaderWrapper>
      <S.HeaderTitle>Bem-vindo(a) à Taqtile!</S.HeaderTitle>
      {loggedIn && <LogoutButton />}
    </S.HeaderWrapper>
  );
};
