import { ApolloError } from "@apollo/client";
import React, { FormEvent, useState } from "react";
import { formatPhone } from "../../utils/phone-formatter";
import { validateBirthDate } from "../../validators/birthdate";
import { validateConfirmPassword } from "../../validators/confirm-password";
import { validateEmail } from "../../validators/email";
import { validateName } from "../../validators/name";
import { validatePassword } from "../../validators/password";
import { validatePhone } from "../../validators/phone";
import { Button } from "../button";
import { Input } from "../input";
import * as S from "./style";

interface NewUserParamsTypes {
  variables: {
    data: {
      name: string;
      email: string;
      phone: string;
      birthDate: string;
      password: string;
      role: string;
    };
  };
}

interface NewUserFormTypes {
  createUserFunction: (data: NewUserParamsTypes) => void;
  loading: boolean;
  error: ApolloError;
}

export const NewUserForm: React.FC<NewUserFormTypes> = ({
  createUserFunction,
  loading,
  error,
}) => {
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nameError = validateName(name, { minLength: 3, maxLength: 75 });
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
      setPhone(phone.replace("^[0-9]*$", ""));
      createUserFunction({
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

    return;
  };

  return (
    <>
      <S.NewUserFormWrapper onSubmit={handleSubmit}>
        <S.InputWrapper>
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
        </S.InputWrapper>
        <S.InputWrapper>
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
        </S.InputWrapper>
        <S.InputWrapper>
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
        </S.InputWrapper>
        <S.InputWrapper>
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
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label htmlFor="role">Função</S.Label>
          <S.Select
            name="role"
            id="role"
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
            }}
          >
            <S.Option value="admin">Administrador</S.Option>
            <S.Option value="user">Usuário</S.Option>
          </S.Select>
        </S.InputWrapper>
        <S.InputWrapper>
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
        </S.InputWrapper>
        <S.InputWrapper>
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
        </S.InputWrapper>
        <Button
          type="submit"
          text="Cadastrar"
          loading={loading}
          error={error}
        />
      </S.NewUserFormWrapper>
    </>
  );
};
