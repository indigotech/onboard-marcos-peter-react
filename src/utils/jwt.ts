import * as JWT from "jwt-decode";

export const verifyExpTime = (token: string) => {
  const { exp } = JWT.default(token) as {
    exp: number;
  };

  const expTime = exp * 1000;
  const currentTime = new Date().getTime();

  return expTime > currentTime;
};
