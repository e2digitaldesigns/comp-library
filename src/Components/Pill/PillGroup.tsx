import React from "react";
import * as Styled from "./PillGroup.styles";
import { Variant } from "../../types";

export interface PillGroupProps {
  variant?: Variant;
  backgroundColor?: string;
  children: React.ReactNode;
}

export const PillGroup: React.FC<PillGroupProps> = ({ backgroundColor, children, variant }) => {
  return (
    <Styled.PillGroupWrapper variant={variant} backgroundColor={backgroundColor}>
      {children}
    </Styled.PillGroupWrapper>
  );
};
