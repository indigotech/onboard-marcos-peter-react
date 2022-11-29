import React from "react";
import "./style.css";

export const DetailsCardShimmer: React.FC = () => {
  return (
    <div className="details-skeleton-container">
      <div className="details-skeleton"></div>
    </div>
  );
};
