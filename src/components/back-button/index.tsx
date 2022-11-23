import React from "react";
import "./style.css";
import { CaretLeft } from "phosphor-react";

export const BackButton: React.FC = () => {
  return (
    <button className="btn-back" onClick={() => window.history.back()}>
      <CaretLeft size={20} />
    </button>
  );
};
