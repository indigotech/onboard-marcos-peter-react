import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { UsersCardLoading } from "../../components/users-card-loading";
import { Pagination } from "../../components/pagination";
import { PaginationSelector } from "../../components/pagination-selector";
import { paginatedUsersQuery } from "../../data/graphql/queries/paginated-users";
import "./style.css";
import { PaginationLoading } from "../../components/pagination-loading";

export const HomePage: React.FC = () => {
  const [usersPerPage, setUsersPerPage] = useState(2);
  const [currentPage, setCurrentPage] = useState(0);

  const { loading, data } = useQuery(paginatedUsersQuery, {
    variables: {
      data: {
        offset: currentPage * usersPerPage,
        limit: usersPerPage,
      },
    },
    context: {
      headers: { authorization: window.localStorage.getItem("auth-token") },
    },
    onError: (error) => error,
  });

  const totalUsers = data?.users.count;
  const pages =
    totalUsers !== undefined ? Math.ceil(totalUsers / usersPerPage) : 0;

  return (
    <>
      <div className="home-container">
        <div className="title">
          <h1>Bem-vindo(a) à Taqtile!</h1>
        </div>
        <div className="users">
          <h2 className="sub-title">Lista de Taqtilers:</h2>
          <PaginationSelector onItemsPerPageChange={setUsersPerPage} />
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
        {loading ? (
          <PaginationLoading />
        ) : (
          <Pagination
            currentPage={currentPage}
            pages={pages}
            setCurrentPage={setCurrentPage}
            hasPreviousPage={data.users.pageInfo.hasPreviousPage}
            hasNextPage={data.users.pageInfo.hasNextPage}
          />
        )}
      </div>
    </>
  );
};
