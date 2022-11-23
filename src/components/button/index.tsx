import { ApolloError } from "@apollo/client";
import React from "react";
import { LoadingSpinning } from "../button-loading";
import "./style.css";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  text: string;
  loading?: boolean;
  onClick?: () => void;
  error?: ApolloError;
  withLoading: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  type,
  text,
  loading,
  onClick,
  error,
  withLoading,
}) => {
  return (
    <div className="btn-container">
      <button
        className="btn-component"
        type={type}
        disabled={loading}
        onClick={onClick}
      >
        {withLoading ? loading ? <LoadingSpinning /> : text : text}
      </button>
      <div className="failed-request">{error ? error.message : ""}</div>
    </div>
  );
};
