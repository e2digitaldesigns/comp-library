import Styled from "styled-components";
import { variantParser } from "../utils";

interface PillsWrapperProps {
  variant?: string;
  backgroundColor?: string;
}

export const PillsWrapper = Styled.div<PillsWrapperProps>`
  display: inline-flex;
  border-radius: 1.125rem;
  height: 2.25rem;
  padding:0 1rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  white-space: nowrap;
  transition: filter 0.3s;

  ${props => variantParser(props.theme, props.variant)}
  ${props => `background-color: ${props.backgroundColor && props.backgroundColor};`};

  &:hover{
    filter: brightness(1.1);
  }
  `;
