import { ApolloError } from "@apollo/client";
import React, { FormEvent, useState } from "react";
import { validateBirthDate } from "../../validators/birthdate";
import { validateConfirmPassword } from "../../validators/confirm-password";
import { validateEmail } from "../../validators/email";
import { validateName } from "../../validators/name";
import { validatePassword } from "../../validators/password";
import { validatePhone } from "../../validators/phone";
import { DefaultButton } from "../default-button";
import { Input } from "../input";
import {
  InputWrapper,
  Label,
  NewUserFormWrapper,
  Option,
  Select,
} from "./style";

export interface NewUserFormData {
  name: string;
  email: string;
  phone: string;
  birthDate: string;
  password: string;
  role: string;
}

interface NewUserFormTypes {
  onSubmitSuccess: (formData: NewUserFormData) => void;
  loading: boolean;
  error: ApolloError;
}

export const NewUserForm: React.FC<NewUserFormTypes> = ({
  onSubmitSuccess,
  loading,
  error,
}) => {
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const [formData, setFormData] = useState<NewUserFormData>({
    name: "",
    email: "",
    phone: "",
    birthDate: "",
    password: "",
    role: "",
  });
  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");
  const [birthDateError, setBirthDateError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [passwordConfirmationError, setPasswordConfirmationError] =
    useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const NameError = validateName(formData.name, {
      minLength: 3,
      maxLength: 75,
    });
    const EmailError = validateEmail(formData.email);
    const PhoneError = validatePhone(formData.phone, {
      minLength: 10,
      maxLength: 15,
    });
    const BirthDateError = validateBirthDate(formData.birthDate, {
      allowUnderage: false,
      minAge: 18,
    });
    const PasswordError = validatePassword(formData.password);
    const PasswordConfirmationError = validateConfirmPassword(
      formData.password,
      passwordConfirmation
    );

    setNameError(NameError);
    setEmailError(EmailError);
    setPhoneError(PhoneError);
    setBirthDateError(BirthDateError);
    setPasswordError(PasswordError);
    setPasswordConfirmationError(PasswordConfirmationError);
    if (
      !nameError &&
      !emailError &&
      !phoneError &&
      !birthDateError &&
      !passwordError &&
      !passwordConfirmationError
    ) {
      onSubmitSuccess(formData);
    }
  };

  return (
    <NewUserFormWrapper onSubmit={handleSubmit}>
      <InputWrapper>
        <Input
          name="name"
          label="Nome"
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => {
            setFormData((prevState) => ({
              ...prevState,
              name: e.target.value,
            }));
            setNameError("");
          }}
          errorMessage={nameError}
        />
      </InputWrapper>
      <InputWrapper>
        <Input
          name="email"
          label="Email"
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => {
            setFormData((prevState) => ({
              ...prevState,
              email: e.target.value,
            }));
            setEmailError("");
          }}
          errorMessage={emailError}
        />
      </InputWrapper>
      <InputWrapper>
        <Input
          name="phone"
          label="Telefone"
          type="text"
          id="phone"
          value={formData.phone}
          onChange={(e) => {
            setFormData((prevState) => ({
              ...prevState,
              phone: e.target.value,
            }));
            setPhoneError("");
          }}
          errorMessage={phoneError}
        />
      </InputWrapper>
      <InputWrapper>
        <Input
          name="birthDate"
          label="Data de nascimento"
          type="date"
          id="birthDate"
          value={formData.birthDate}
          onChange={(e) => {
            setFormData((prevState) => ({
              ...prevState,
              birthDate: e.target.value,
            }));
            setBirthDateError("");
          }}
          errorMessage={birthDateError}
        />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="role">Função</Label>
        <Select
          name="role"
          id="role"
          value={formData.role}
          onChange={(e) => {
            setFormData((prevState) => ({
              ...prevState,
              role: e.target.value,
            }));
          }}
        >
          <Option value="admin">Administrador</Option>
          <Option value="user">Usuário</Option>
        </Select>
      </InputWrapper>
      <InputWrapper>
        <Input
          name="password"
          label="Senha"
          type="password"
          id="password"
          value={formData.password}
          onChange={(e) => {
            setFormData((prevState) => ({
              ...prevState,
              password: e.target.value,
            }));
            setPasswordError("");
          }}
          errorMessage={passwordError}
        />
      </InputWrapper>
      <InputWrapper>
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
      </InputWrapper>
      <DefaultButton
        type="submit"
        text="Cadastrar"
        loading={loading}
        error={error}
      />
    </NewUserFormWrapper>
  );
};
