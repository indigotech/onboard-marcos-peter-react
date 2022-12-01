import styled from "styled-components";

export const NewUserFormWrapper = styled.form`
  position: absolute;
  top: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 1.8vh;
  font-weight: 500;
  color: var(--medium-text-color);
`;

export const Select = styled.select`
  width: 83vw;
  height: 7vh;
  margin-top: 0.8vh;
  border: var(--input-border);
  border-radius: 2vh;
  outline: var(--input-outline);
  font-size: 1.5rem;
  padding: 0 1vh;
  color: var(--medium-text-color);
  margin-bottom: 2vh;
  // change the arrow icon
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'><path fill='%23b3b3b3' d='M10 13.5l5-5h-3v-5h-4v5h-3l5 5z'/></svg>");
  background-repeat: no-repeat;
  background-position: 99% 51%;
  background-size: 2rem;

  @media (min-width: 769px) {
    width: 45vw;
  }
`;

export const Option = styled.option`
  width: fit-content;
  font-size: 1.2rem;
  color: var(--medium-text-color);
`;
