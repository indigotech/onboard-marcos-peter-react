import React from "react";
import "./style.css";

interface PaginationSelectorProps {
  onItemsPerPageChange: (itemsPerPage: number) => void;
}

export const PaginationSelector: React.FC<PaginationSelectorProps> = ({
  onItemsPerPageChange,
}) => {
  return (
    <div className="selector-container">
      <label>Usuários por página: </label>
      <select
        name="users-per-page"
        className="users-selector"
        onChange={(e) => {
          onItemsPerPageChange(Number(e.target.value));
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
