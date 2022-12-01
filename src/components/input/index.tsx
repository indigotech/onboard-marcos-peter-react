import React, { FocusEventHandler } from "react";
import { InputWrapper, Label, InputStyled, ValidationError } from "./style";

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

export interface LabelProps {
  errorMessage: string;
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
    <InputWrapper>
      <Label htmlFor={id} errorMessage={errorMessage}>
        {label}
      </Label>
      <InputStyled
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        errorMessage={errorMessage}
      />
      <ValidationError>{errorMessage}</ValidationError>
    </InputWrapper>
  );
};
