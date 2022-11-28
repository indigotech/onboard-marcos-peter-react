import { ApolloError } from "@apollo/client";
import React from "react";
import { LoadingSpinning } from "../button-loading";
import * as S from "./style";

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
    <S.ButtonContainer>
      <S.Button type={type} disabled={loading} onClick={onClick}>
        {loading ? <LoadingSpinning /> : text}
      </S.Button>
      <S.FailedRequest>{error ? error.message : ""}</S.FailedRequest>
    </S.ButtonContainer>
  );
};
