import { gql } from "@apollo/client";

export const loginMutation = gql`
  mutation Login($data: LoginInput!) {
    login(data: $data) {
      token
      user {
        birthDate
        email
        id
        name
        phone
        role
      }
    }
  }
`;
