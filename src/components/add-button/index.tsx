import React from "react";
import * as S from "./style";
import { Plus } from "phosphor-react";

interface AddButtonProps {
  onClick?: () => string;
}

export const AddButton: React.FC<AddButtonProps> = ({ onClick }) => {
  return (
    <S.AddButton onClick={onClick}>
      <S.AddButtonText>Adicionar Usuário</S.AddButtonText>
      <Plus className="icon" size={24} weight="bold" />
    </S.AddButton>
  );
};
