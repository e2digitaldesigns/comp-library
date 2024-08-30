import React from "react";
import * as Styled from "./Pill.styles";
import { Variant } from "../../types";

export interface PillsProps {
  variant?: Variant;
  backgroundColor?: string;
  children: React.ReactNode;
}

export const Pill: React.FC<PillsProps> = ({ backgroundColor, children, variant }) => {
  return (
    <Styled.PillsWrapper variant={variant} backgroundColor={backgroundColor}>
      {children}
    </Styled.PillsWrapper>
  );
};
