import React from "react";
import { PaginationLoadingContainer, PaginationLoadingItem } from "./style";

export const PaginationShimmer: React.FC = () => {
  return (
    <PaginationLoadingContainer>
      <PaginationLoadingItem />
      <PaginationLoadingItem />
      <PaginationLoadingItem />
      <PaginationLoadingItem />
      <PaginationLoadingItem />
      <PaginationLoadingItem />
    </PaginationLoadingContainer>
  );
};
