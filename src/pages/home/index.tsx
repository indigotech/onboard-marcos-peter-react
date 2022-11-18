import { useQuery } from "@apollo/client";
import React from "react";
import { UsersCardLoading } from "../../components/users-card-loading/users-card-loading";
import { usersQuery } from "../../data/graphql/queries/users";
import "./style.css";

export const HomePage: React.FC = () => {
  const { loading, data } = useQuery(usersQuery, {
    context: {
      headers: { authorization: window.localStorage.getItem("auth-token") },
    },
  });

  return (
    <div className="container">
      <div className="title">
        <h1>Bem-vindo(a) à Taqtile!</h1>
      </div>
      <div className="users">
        <h2 className="sub-title">Lista de Taqtilers:</h2>
        <ul className="user-list">
          {loading ? (
            <UsersCardLoading />
          ) : (
            data.users.nodes.map((user) => (
              <li className="user-card" key={user.id}>
                <p>Nome: {user.name}</p>
                <p>Email: {user.email}</p>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};
