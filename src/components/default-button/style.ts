import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DefaultButtonStyle = styled.button`
  margin-top: 2vh;
  height: 7vh;
  border-radius: 2vh;
  border: none;
  background-color: var(--btn-bg-color);
  color: var(--light-text-color);
  font-weight: 500;
  font-size: 2.5vh;
  &:hover {
    background-color: var(--btn-hover-bg-color);
  }
  @media (max-width: 768px) {
    width: 80vw;
  }
  @media (min-width: 769px) {
    width: 25vw;
    cursor: pointer;
  }
`;

export const FailedRequest = styled.div`
  position: absolute;
  margin-top: 15vh;
  font-size: 1.5vh;
  font-weight: 500;
  color: var(--error-text);
  text-align: center;
  &:empty {
    display: none;
  }
  @media (max-width: 768px) {
    font-size: 1.8vh;
    width: 80vw;
  }

  @media (min-width: 768px) {
    width: 25vw;
  }
`;
