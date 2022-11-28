import styled from "styled-components";

export const NewUserWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NewUserTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--dark-text-color);
  position: absolute;
  top: 20vh;
  align-self: center;

  @media (max-width: 768px) {
    font-size: 2rem;
    /* left: 26vw; */
  }
`;
