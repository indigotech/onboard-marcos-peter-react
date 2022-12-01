import styled from "styled-components";
import { LabelProps } from "./index";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

export const InputStyled = styled.input<LabelProps>`
  width: 80vw;
  height: 7vh;
  border-radius: 2vh;
  border: var(--input-border);
  margin-top: 1vh;
  font-size: 2vh;
  padding: 0 1vh;
  font-weight: 500;
  align-self: center;
  ${(props) => {
    if (props.errorMessage) {
      return `color: var(--error-text);
      outline: var(--error-outline);`;
    }
    return `color: var(--medium-text-color);
    outline: var(--input-outline);`;
  }}

  @media (min-width: 769px) {
    width: 45vw;
  }
`;

export const Label = styled.label<LabelProps>`
  font-size: 1.8vh;
  font-weight: 500;
  color: ${(props) =>
    props.errorMessage ? `var(--error-text)` : `var(--medium-text-color)`};
`;

export const ValidationError = styled.div`
  width: fit-content;
  height: 3vh;
  margin-top: 1vh;
  font-size: 1.6vh;
  font-weight: 500;
  text-align: center;
  align-self: center;
  color: var(--error-text);
`;
