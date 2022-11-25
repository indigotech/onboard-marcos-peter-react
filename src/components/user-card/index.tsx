import React, { MouseEventHandler } from "react";
import { birthDateFormatter } from "../../utils/birth-date-formatter";
import { formatPhone } from "../../utils/phone-formatter";
import "./style.css";

interface UserCardProps {
  name: string;
  phone?: string;
  birthDate?: string;
  email: string;
  role?: string;
  onClick?: MouseEventHandler;
}

export const UserCard: React.FC<UserCardProps> = ({
  name,
  phone,
  birthDate,
  email,
  role,
  onClick,
}) => {
  return (
    <div className="user-card-component" onClick={onClick}>
      <p>Nome: {name}</p>
      {phone ? <p>Telefone: {formatPhone(phone)}</p> : ""}
      {birthDate ? (
        <p>Data de nascimento: {birthDateFormatter(birthDate)}</p>
      ) : (
        ""
      )}
      <p>Email: {email}</p>
      {role ? <p>Função: {role}</p> : ""}
    </div>
  );
};
