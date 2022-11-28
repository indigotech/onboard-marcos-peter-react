import { gql } from "@apollo/client";

export const paginatedUsersQuery = gql`
  query PaginatedUsers($data: PageInput) {
    users(data: $data) {
      nodes {
        id
        name
        email
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      count
    }
  }
`;
