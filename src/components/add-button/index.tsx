import React from "react";
import "./style.css";
import { Plus } from "phosphor-react";

export const AddButton: React.FC = () => {
  return (
    <>
      <div className="btn-container">
        <div className="btn-add">
          <div className="btn-text">Adicionar Usuário</div>
          <Plus className="icon" size={24} weight="bold" />
        </div>
      </div>
    </>
  );
};
