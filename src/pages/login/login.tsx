import React from "react";
import "./login.css";

export const Login = () => {
  return (
    <div className="container">
      <h1 className="title">Bem-vindo(a) à Taqtile!</h1>
      <form className="login-form">
        <label htmlFor="input-email">E-mail</label>
        <input className="input-email" type="text" />
        <label htmlFor="input-password">Senha</label>
        <input className="input-password" type="text" />
        <button className="btn-login">Entrar</button>
      </form>
    </div>
  );
};
