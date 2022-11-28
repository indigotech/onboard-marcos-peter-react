import React from "react";
import "./style.css";

export const Pagination = ({
  hasPreviousPage,
  hasNextPage,
  currentPage,
  pages,
  setCurrentPage,
}) => {
  const handlePreviousPageTap = () => {
    hasPreviousPage && setCurrentPage(currentPage - 1);
  };

  const handleNextPageTap = () => {
    hasNextPage && setCurrentPage(currentPage + 1);
  };

  return (
    <div className="pages">
      <button
        className={
          hasPreviousPage ? "page navigation" : "page navigation inactive"
        }
        onClick={handlePreviousPageTap}
      >
        {"<"}
      </button>
      {Array.from(Array(pages), (item, index) => {
        return (
          <button
            key={index}
            className={currentPage === index ? "page current-page" : "page"}
            onClick={() => {
              setCurrentPage(index);
            }}
          >
            {index + 1}
          </button>
        );
      })}
      <button
        className={hasNextPage ? "page navigation" : "page navigation inactive"}
        onClick={handleNextPageTap}
      >
        {">"}
      </button>
    </div>
  );
};
