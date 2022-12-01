import { ApolloError } from "@apollo/client";
import React from "react";
import { LoadingSpinning } from "../button-loading";
import { ButtonContainer, DefaultButtonStyle, FailedRequest } from "./style";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  text: string;
  loading?: boolean;
  onClick?: () => void;
  error?: ApolloError;
}

export const DefaultButton: React.FC<ButtonProps> = ({
  type,
  text,
  loading,
  onClick,
  error,
}) => {
  return (
    <ButtonContainer>
      <DefaultButtonStyle type={type} disabled={loading} onClick={onClick}>
        {loading ? <LoadingSpinning /> : text}
      </DefaultButtonStyle>
      <FailedRequest>{error ? error.message : ""}</FailedRequest>
    </ButtonContainer>
  );
};
