import styled from "styled-components";

export const PaginationLoadingContainer = styled.div`
  position: absolute;
  bottom: -1.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;
  height: 10vh;
`;

export const PaginationLoadingItem = styled.div`
  width: 3.5vh;
  height: 3.5vh;
  border-radius: 50%;
  background-color: var(--medium-text-color);
  margin: 0 0.1vh;
  -webkit-animation: pulse 2s infinite ease-in-out;
  -moz-animation: pulse 2s infinite ease-in-out;
  animation: pulse 2s infinite ease-in-out;

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;
