import Styled from "styled-components";
import { variantParser } from "../utils";

interface ButtonWrapperProps {
  backgroundColor?: string;
  roundedCorners: boolean;
  variant?: string;
}

export const ButtonWrapper = Styled.button<ButtonWrapperProps>`
  align-items: center;
  border-radius: ${props => (props.roundedCorners ? ".25rem" : "0")};
  border: 0.0625rem solid transparent;
  cursor: pointer;
  display: inline-flex;
  font-weight:400;
  height: 2.25rem;
  justify-content: center;
  outline: none;
  padding:0 1rem;
  transition: filter 0.3s;
  white-space: nowrap;

  ${props => variantParser(props.theme, props.variant)}
  ${props => `background-color: ${props.backgroundColor && props.backgroundColor};`};

  &:hover{
    filter: brightness(1.1);
  }
  `;
