import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { UsersCardLoading } from "../../components/users-card-loading";
import { Pagination } from "../../components/pagination";
import { PaginationSelector } from "../../components/pagination-selector";
import { paginatedUsersQuery } from "../../data/graphql/queries/paginated-users";
import "./style.css";
import { PaginationLoading } from "../../components/pagination-loading";
import { AddButton } from "../../components/add-button";
import { SectionHeader } from "../../components/section-header";

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
        <SectionHeader />
        <div className="users">
          <h2 className="sub-title">Lista de Taqtilers:</h2>
          <PaginationSelector onItemsPerPageChange={setUsersPerPage} />
          <div className="user-list">
            {loading ? (
              <UsersCardLoading />
            ) : (
              data.users.nodes.map((user) => (
                <div className="user-card" key={user.id}>
                  <p>Nome: {user.name}</p>
                  <p>Email: {user.email}</p>
                </div>
              ))
            )}
          </div>
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
        <AddButton onClick={() => (window.location.href = "/new-user")} />
      </div>
    </>
  );
};
