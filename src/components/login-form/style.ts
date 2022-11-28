import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;

  @media (min-width: 768px) {
    width: 25vw;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;
