import { gql } from "@apollo/client";

export const usersQuery = gql`
  query Users {
    users {
      nodes {
        id
        name
        phone
        birthDate
        email
        role
      }
    }
  }
`;
