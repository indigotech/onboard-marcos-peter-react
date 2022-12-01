import React from "react";
import { BackButtonStyle, BackButtonText } from "./style";
import { CaretLeft } from "phosphor-react";

interface Props {
  onTap: () => void;
  text: string;
}

export const BackButton: React.FC<Props> = (props) => {
  return (
    <BackButtonStyle onClick={props.onTap}>
      <BackButtonText>{props.text}</BackButtonText>
      <CaretLeft size={20} weight="bold" />
    </BackButtonStyle>
  );
};
