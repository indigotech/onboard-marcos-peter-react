import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { BackButton } from "../../components/back-button";
import { DetailsCardShimmer } from "../../components/details-card-loading";
import { Header } from "../../components/header";
import { UserCard } from "../../components/user-card";
import { userQuery } from "../../data/graphql/queries/user";
import "./style.css";

export const User: React.FC = () => {
  // Just catch the user id from the url to use in the query, but the user query doesn't accept any params
  const { id } = useParams<{ id: string }>();
  console.info(`Id from the clicked user card: ${id}`);
  // Just for demonstration purposes

  const { loading, data } = useQuery(userQuery, {
    context: {
      headers: { authorization: window.localStorage.getItem("auth-token") },
    },
    onError: (error) => error,
  });

  return (
    <div className="user-details-container">
      <Header />
      <BackButton onTap={() => window.history.back()} />
      <h1 className="user-details-title">Informações</h1>
      <div className="user-details-content">
        {loading ? (
          <DetailsCardShimmer />
        ) : (
          <UserCard
            name={data.user.name}
            phone={data.user.phone}
            birthDate={data.user.birthDate}
            email={data.user.email}
            role={data.user.role}
          />
        )}
      </div>
    </div>
  );
};
