import React, { PropsWithChildren } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "../pages/login";
import { HomePage } from "../pages/home";
import { NewUser } from "../pages/new-user";
import { User } from "../pages/user";

const AuthGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const token = window.localStorage.getItem("auth-token");

  if (!token) {
    return (
      <>
        <Navigate to="/" />
      </>
    );
  }

  return <>{children}</>;
};

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/home"
        element={
          <AuthGuard>
            <HomePage />
          </AuthGuard>
        }
      />
      <Route
        path="new-user"
        element={
          <AuthGuard>
            <NewUser />
          </AuthGuard>
        }
      />
      <Route
        path="user/:id"
        element={
          <AuthGuard>
            <User />
          </AuthGuard>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
