import React, { FocusEventHandler } from "react";
import * as S from "./style";

export interface InputProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  id?: string;
  value?: string;
  onChange: FocusEventHandler<HTMLInputElement>;
  errorMessage?: string;
}

export const Input: React.FC<InputProps> = ({
  name,
  label,
  placeholder,
  type,
  id,
  value,
  onChange,
  errorMessage,
}) => {
  return (
    <S.InputWrapper>
      <S.Label htmlFor={id} errorMessage={errorMessage}>
        {label}
      </S.Label>
      <S.Input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        errorMessage={errorMessage}
      />
      <S.ValidationError>{errorMessage}</S.ValidationError>
    </S.InputWrapper>
  );
};
