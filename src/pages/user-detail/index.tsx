import { useQuery } from "@apollo/client";
import React from "react";
import { BackButton } from "../../components/back-button";
import { DetailsCardShimmer } from "../../components/details-card-loading";
import { SectionHeader } from "../../components/header";
import { UserCard } from "../../components/user-card";
import { userQuery } from "../../data/graphql/queries/user";
import "./style.css";

export const UserDetailPage: React.FC = () => {
  const { loading, data } = useQuery(userQuery, {
    context: {
      headers: { authorization: window.localStorage.getItem("auth-token") },
    },
    onError: (error) => error,
  });

  return (
    <div className="user-details-container">
      <SectionHeader />
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
