import React from "react";
import { AddButtonStyled, AddButtonText } from "./style";
import { Plus } from "phosphor-react";

interface AddButtonProps {
  onClick?: () => string;
}

export const AddButton: React.FC<AddButtonProps> = ({ onClick }) => {
  return (
    <AddButtonStyled onClick={onClick}>
      <AddButtonText>Adicionar Usuário</AddButtonText>
      <Plus className="icon" size={24} weight="bold" />
    </AddButtonStyled>
  );
};
