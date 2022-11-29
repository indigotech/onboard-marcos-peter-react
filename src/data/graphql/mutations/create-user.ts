import { gql } from "@apollo/client";

export const CreateUserMutation = gql`
  mutation CreateUser($data: UserInput!) {
    createUser(data: $data) {
      id
    }
  }
`;
