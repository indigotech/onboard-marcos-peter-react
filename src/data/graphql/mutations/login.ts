import { gql } from "@apollo/client";
import { client } from "../client";

export async function loginMutation(email: string, password: string) {
  const { user, token } = (
    await client.mutate({
      mutation: gql`
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
      `,
      variables: {
        data: {
          email,
          password,
        },
      },
    })
  ).data.login;

  return { user, token };
}
