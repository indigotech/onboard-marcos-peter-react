import React from "react";
import * as S from "./style";
import { CaretLeft } from "phosphor-react";

interface Props {
  onTap: () => void;
}

export const BackButton: React.FC<Props> = (props) => {
  return (
    <S.BackButton onClick={props.onTap}>
      <S.BackButtonText>Voltar</S.BackButtonText>
      <CaretLeft size={20} weight="bold" />
    </S.BackButton>
  );
};
