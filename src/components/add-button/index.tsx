import React from "react";
import "./style.css";
import { Plus } from "phosphor-react";

interface AddButtonProps {
  onClick?: () => string;
}

export const AddButton: React.FC<AddButtonProps> = ({ onClick }) => {
  return (
    <div className="btn-container">
      <div className="btn-add" onClick={onClick}>
        <div className="btn-text">Adicionar Usuário</div>
        <Plus className="icon" size={24} weight="bold" />
      </div>
    </div>
  );
};
