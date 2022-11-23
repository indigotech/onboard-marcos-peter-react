import React, { FormEvent, useState } from "react";
import { Header } from "../../components/header";
import { validateEmail } from "../../validators/email";
import { validateName } from "../../validators/name";
import { validatePassword } from "../../validators/password";
import { validatePhone } from "../../validators/phone";
import { validateBirthDate } from "../../validators/birthdate";
import "./style.css";
import { formatPhone } from "../../utils/phone-formater";
import { validateConfirmPassword } from "../../validators/confirm-password";
import { Input } from "../../components/input";
import { Button } from "../../components/button";

export const NewUser: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");
  const [birthDateError, setBirthDateError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [passwordConfirmationError, setPasswordConfirmationError] =
    useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const phoneError = validatePhone(phone);
    const birthDateError = validateBirthDate(birthDate);
    const passwordError = validatePassword(password);
    const passwordConfirmationError = validateConfirmPassword(
      password,
      passwordConfirmation
    );

    setNameError(nameError);
    setEmailError(emailError);
    setPhoneError(phoneError);
    setBirthDateError(birthDateError);
    setPasswordError(passwordError);
    setPasswordConfirmationError(passwordConfirmationError);

    if (
      !nameError &&
      !emailError &&
      !phoneError &&
      !birthDateError &&
      !passwordError &&
      !passwordConfirmationError
    ) {
      setLoading(true);
    }

    return;
  };

  return (
    <div className="new-user-container">
      <Header />
      <h2>Novo Usuário</h2>
      <form className="input-form" onSubmit={handleSubmit}>
        <Input
          name="name"
          label="Nome"
          type="text"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setNameError("");
          }}
          error={nameError}
        />
        <Input
          name="email"
          label="Email"
          type="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError("");
          }}
          error={emailError}
        />
        <Input
          name="phone"
          label="Telefone"
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => {
            setPhone(formatPhone(e.target.value));
            setPhoneError("");
          }}
          error={phoneError}
        />
        <Input
          name="birthDate"
          label="Data de nascimento"
          type="date"
          id="birthDate"
          value={birthDate}
          onChange={(e) => {
            setBirthDate(e.target.value);
            setBirthDateError("");
          }}
          error={birthDateError}
        />
        <div className="input-container">
          <label htmlFor="role">Função</label>
          <select
            className="role-select"
            name="role"
            id="role"
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
            }}
          >
            <option value="admin">Administrador</option>
            <option value="user">Usuário</option>
          </select>
        </div>
        <Input
          name="password"
          label="Senha"
          type="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError("");
          }}
          error={passwordError}
        />
        <Input
          name="passwordConfirmation"
          label="Confirmar de senha"
          type="password"
          id="passwordConfirmation"
          value={passwordConfirmation}
          onChange={(e) => {
            setPasswordConfirmation(e.target.value);
            setPasswordConfirmationError("");
          }}
          error={passwordConfirmationError}
        />
        <Button
          type="submit"
          text="Cadastrar"
          loading={loading}
          withLoading={true}
        />
      </form>
    </div>
  );
};
