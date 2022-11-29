import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { UsersCardShimmer } from "../../components/users-card-loading";
import { Pagination } from "../../components/pagination";
import { PaginationSelector } from "../../components/pagination-selector";
import { paginatedUsersQuery } from "../../data/graphql/queries/paginated-users";
import "./style.css";
import { PaginationShimmer } from "../../components/pagination-loading";
import { AddButton } from "../../components/add-button";
import { SectionHeader } from "../../components/section-header";
import { UserCard } from "../../components/user-card";

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
    <div className="home-container">
      <SectionHeader />
      <div className="users">
        <h2 className="sub-title">Lista de Taqtilers:</h2>
        <PaginationSelector onItemsPerPageChange={setUsersPerPage} />
        <div className="user-list">
          {loading ? (
            <UsersCardShimmer />
          ) : (
            data.users.nodes.map((user) => (
              <UserCard
                key={user.id}
                name={user.name}
                email={user.email}
                onClick={() =>
                  (window.location.href = `user-detail/${user.id}`)
                }
              />
            ))
          )}
        </div>
      </div>
      {loading ? (
        <PaginationShimmer />
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
  );
};
