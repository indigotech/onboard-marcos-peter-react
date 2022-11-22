import React from "react";
import { mockedData } from "./mocked-data";
import "./style.css";

export const HomePage: React.FC = () => {
  return (
    <div className="container">
      <div className="title">
        <h1>Bem-vindo(a) à Taqtile!</h1>
      </div>
      <div className="users">
        <h2 className="sub-title">Lista de Taqtilers:</h2>
        <ul className="user-list">
          {mockedData.map((user) => (
            <li className="user-card" key={user.id}>
              <p>Nome: {user.name}</p>
              <p>Email: {user.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
