import React from "react";
import "./style.css";
import { CaretLeft, CaretRight } from "phosphor-react";

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
        <CaretLeft size={25} weight="fill" />
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
        <CaretRight size={25} weight="fill" />
      </button>
    </div>
  );
};
