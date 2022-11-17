import React, { ReactElement } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "../pages/login";
import { HomePage } from "../pages/home";

interface ChildrenTypes {
  children: ReactElement;
}

const Private = ({ children }: ChildrenTypes) => {
  const token = window.localStorage.getItem("auth-token");

  if (!token) {
    return <Navigate to="/" />;
  }
  return children;
};

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/home"
        element={
          <Private>
            <HomePage />
          </Private>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
