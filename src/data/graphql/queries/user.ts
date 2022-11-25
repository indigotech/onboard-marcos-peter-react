import { gql } from "@apollo/client";

export const userQuery = gql`
  query User {
    user {
      name
      phone
      birthDate
      email
      role
    }
  }
`;
