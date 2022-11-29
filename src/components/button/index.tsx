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
}

export const Button: React.FC<ButtonProps> = ({
  type,
  text,
  loading,
  onClick,
  error,
}) => {
  return (
    <div className="btn-container">
      <button
        className="btn-component"
        type={type}
        disabled={loading}
        onClick={onClick}
      >
        {loading ? <LoadingSpinning /> : text}
      </button>
      <div className="failed-request">{error ? error.message : ""}</div>
    </div>
  );
};
