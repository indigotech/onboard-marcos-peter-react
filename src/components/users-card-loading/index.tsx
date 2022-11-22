import React from "react";
import "./style.css";

export const UsersCardLoading: React.FC = () => {
  return (
    <div className="skeleton-container">
      <div className="skeleton"></div>
      <div className="skeleton"></div>
      <div className="skeleton"></div>
      <div className="skeleton"></div>
      <div className="skeleton"></div>
      <div className="skeleton"></div>
    </div>
  );
};
