import styled from "styled-components";

export const BackButtonText = styled.p`
  width: 20vh;
  opacity: 0;
  color: var(--medium-text-color);
  position: absolute;
  font-weight: 500;
  font-size: 1.5vh;
  left: 0vw;
  bottom: 0.5vh;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const BackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 21vh;
  left: 2vh;
  width: 6vh;
  height: 6vh;
  border-radius: 50%;
  border: none;
  background-color: var(--btn-bg-color);
  color: var(--light-text-color);
  cursor: pointer;
  &:hover {
    background-color: var(--btn-hover-bg-color);
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    transition: all 0.5s;
    transform: scale(1.1);
  }
  &:hover ${BackButtonText} {
    opacity: 1;
  }

  @media (max-width: 768px) {
    position: absolute;
    width: 4vh;
    height: 4vh;
    top: 21vh;
  }
`;
