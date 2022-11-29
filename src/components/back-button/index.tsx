import React from "react";
import "./style.css";
import { CaretLeft } from "phosphor-react";

interface Props {
  onTap: () => void;
}

export const BackButton: React.FC<Props> = (props) => {
  return (
    <button className="btn-back" onClick={props.onTap}>
      <CaretLeft size={20} />
    </button>
  );
};
