import React from "react";
import "./style.css";

export const PaginationSelector = ({ setUsersPerPage, setCurrentPage }) => {
  return (
    <div>
      <label>Usuários por página: </label>
      <select
        name="users-per-page"
        className="users-selector"
        onChange={(e) => {
          setUsersPerPage(Number(e.target.value));
          setCurrentPage(0);
        }}
      >
        <option value="2">2</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
    </div>
  );
};
