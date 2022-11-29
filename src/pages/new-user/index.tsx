import React, { FormEvent, useState } from "react";
import { SectionHeader } from "../../components/section-header";
import { validateEmail } from "../../validators/email";
import { validateName } from "../../validators/name";
import { validatePassword } from "../../validators/password";
import { validatePhone } from "../../validators/phone";
import { validateBirthDate } from "../../validators/birthdate";
import "./style.css";
import { formatPhone } from "../../utils/phone-formatter";
import { validateConfirmPassword } from "../../validators/confirm-password";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { useMutation } from "@apollo/client";
import { CreateUserMutation } from "../../data/graphql/mutations/create-user";
import { BackButton } from "../../components/back-button";

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

  const [createUser, { loading, error }] = useMutation(CreateUserMutation, {
    context: {
      headers: { authorization: window.localStorage.getItem("auth-token") },
    },
    onCompleted: () => {
      window.location.href = "/home";
    },
    onError: (error) => error,
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nameError = validateName(name, { minLength: 3, maxLength: 60 });
    const emailError = validateEmail(email);
    const phoneError = validatePhone(phone, { minLength: 10, maxLength: 15 });
    const birthDateError = validateBirthDate(birthDate, {
      allowUnderage: false,
      minAge: 18,
    });
    const passwordError = validatePassword(password);
    const passwordConfirmationError = validateConfirmPassword(
      password,
      passwordConfirmation
    );

    setPhone(
      phone.replace("(", "").replace(")", "").replace("-", "").replace(" ", "")
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
      createUser({
        variables: {
          data: {
            name,
            email,
            phone,
            birthDate,
            password,
            role,
          },
        },
      });
    }
  };

  return (
    <div className="new-user-container">
      <SectionHeader />
      <BackButton onTap={() => window.history.back()} />
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
          errorMessage={nameError}
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
          errorMessage={emailError}
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
          errorMessage={phoneError}
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
          errorMessage={birthDateError}
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
          errorMessage={passwordError}
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
          errorMessage={passwordConfirmationError}
        />
        <Button type="submit" text="Cadastrar" loading={loading} />
      </form>
    </div>
  );
};
