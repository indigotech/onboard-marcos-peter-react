import React, { FocusEventHandler } from "react";
import "./style.css";

interface InputProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  id?: string;
  value?: string;
  onChange: FocusEventHandler<HTMLInputElement>;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  name,
  label,
  placeholder,
  type,
  id,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="input-container">
      <label htmlFor={name}>{label}</label>
      <input
        className={error ? "input-error" : ""}
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <div className="validation-error">{error}</div>
    </div>
  );
};
