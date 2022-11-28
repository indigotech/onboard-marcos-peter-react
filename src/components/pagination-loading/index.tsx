import React from "react";
import * as S from "./style";

export const PaginationLoading: React.FC = () => {
  return (
    <S.PaginationLoadingContainer>
      <S.PaginationLoadingItem />
      <S.PaginationLoadingItem />
      <S.PaginationLoadingItem />
      <S.PaginationLoadingItem />
      <S.PaginationLoadingItem />
      <S.PaginationLoadingItem />
    </S.PaginationLoadingContainer>
  );
};