import React, { useEffect, useState } from "react";
import { decode } from "../../utils/jwt";
import "./style.css";

interface UserTypes {
  data: {
    userId: string;
  };
}

const getUserId = () => {
  const hasUser = window.localStorage.getItem("auth-token");
  if (hasUser) {
    const userId: Partial<UserTypes> = decode(hasUser);
    return userId;
  }
};

export const HomePage = () => {
  const [userId, setUserId] = useState<Partial<UserTypes>>();

  useEffect(() => {
    setUserId(getUserId());
  }, []);

  return (
    <>
      <div className="home-page">
        <h1>Bem Vindo à Taqtile, {userId?.data?.userId}</h1>
      </div>
    </>
  );
};
