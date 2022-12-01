import styled from "styled-components";

export const AddButtonText = styled.p`
  width: 20vh;
  opacity: 0;
  color: var(--medium-text-color);
  position: absolute;
  font-weight: 500;
  right: 5vw;
  bottom: 1.5vh;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const AddButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 2vh;
  bottom: 1.8vh;
  width: 6vh;
  height: 6vh;
  border-radius: 50%;
  background-color: var(--btn-bg-color);
  color: var(--light-text-color);
  border: none;
  cursor: pointer;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;

  @media (min-width: 769px) {
    width: 8vh;
    height: 8vh;
    &:hover {
      background-color: var(--btn-hover-bg-color);
      transform: scale(1.1);
    }
    &:hover ${AddButtonText} {
      opacity: 1;
    }
    .icon {
      -webkit-transition: all 0.5s;
      -moz-transition: all 0.5s;
      transition: all 0.5s;
      display: block;
    }
    &:hover .icon {
      -webkit-transform: rotate(90deg);
      -moz-transform: rotate(90deg);
      transform: rotate(90deg);
    }
  }
`;
