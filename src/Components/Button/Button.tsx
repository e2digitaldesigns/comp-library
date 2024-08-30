import React from "react";
import * as Styled from "./Button.styles";

interface ButtonProps {
  backgroundColor?: string;
  children: React.ReactNode;
  roundedCorners?: boolean;
  variant?: string;
}

export const Button: React.FC<ButtonProps> = ({
  backgroundColor,
  children,
  roundedCorners = false,
  variant
}) => {
  return (
    <Styled.ButtonWrapper
      backgroundColor={backgroundColor}
      roundedCorners={roundedCorners}
      variant={variant}
    >
      {children}
    </Styled.ButtonWrapper>
  );
};

export default Button;
