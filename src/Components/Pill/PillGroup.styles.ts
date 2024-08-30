import Styled from "styled-components";
import { variantParser } from "../utils";

interface PillGroupWrapperProps {
  variant?: string;
  backgroundColor?: string;
}

export const PillGroupWrapper = Styled.div<PillGroupWrapperProps>`
  display: inline-flex;
  border-radius: 1.125rem;
  height: 2.25rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;

  ${props => variantParser(props.theme, props.variant)}
  background-color: transparent;

> div{
  border-radius: 0;
}`;
