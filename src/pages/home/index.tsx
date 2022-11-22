import { useQuery } from "@apollo/client";
import React from "react";
import { UsersCardLoading } from "../../components/users-card-loading";
import { usersQuery } from "../../data/graphql/queries/users";
import "./style.css";

export const HomePage: React.FC = () => {
  const { loading, data, error } = useQuery(usersQuery, {
    context: {
      headers: { authorization: window.localStorage.getItem("auth-token") },
    },
    onError: (error) => error,
  });

  return (
    <div className="home-container">
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
      <div className={error ? "error" : "empty"}>
        {error && <p>Erro ao carregar a lista de usuários</p>}
      </div>
    </div>
  );
};
