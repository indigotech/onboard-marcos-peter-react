import styled from "styled-components";

export const HeaderWrapper = styled.div`
  z-index: 100;
  width: 100vw;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  font-size: 2vh;
  color: var(--light-text-color);
  background-color: var(--bg-dark-color);
  border-radius: 0 0 6vh 6vh;

  @media (max-width: 768px) {
    border-radius: 0 0 4vh 4vh;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 3vh;
  font-weight: 500;
  margin-bottom: 1vh;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 4vh;
  }
`;
