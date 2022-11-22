import { gql } from "@apollo/client";

export const usersQuery = gql`
  query Users {
    users {
      nodes {
        id
        name
        email
      }
    }
  }
`;
