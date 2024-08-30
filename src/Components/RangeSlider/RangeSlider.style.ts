import Styled from "styled-components";
import { variantParser, variantParserValue } from "../utils";

interface RangeSliderProps {
  variant?: string;
  backgroundColor?: string;
  roundThumb?: boolean;
  value: number;
}

export const RangeSliderWrapper = Styled.div<RangeSliderProps>`
  width: 100%;

  input[type="range"] {
    -webkit-appearance: none;
    width: 100%;
    height: 8px;
    border-radius: .25rem;  
    background: ${props => (props.backgroundColor ? props.backgroundColor : variantParserValue(props.variant, "primary"))};
    outline: none;
    opacity: 0.7;
    transition: opacity .2s;
    background-image:  ${props => `linear-gradient( to right, violet ${props.value}%, indigo ${props.value}%)`};

    &::-webkit-slider-thumb {
        appearance: none;
        width: 1.5rem;
        height: ${props => (props.roundThumb ? "1.5rem" : "100%")};
        border-radius: ${props => (props.roundThumb ? "50%" : "0")};
        /* background: ${props => (props.backgroundColor ? props.backgroundColor : variantParserValue(props.variant, "secondary"))}; */
        background: red;

        cursor: pointer;
    },

    &::-moz-range-thumb {
      width: 1.5rem;
      height: ${props => (props.roundThumb ? "1.5rem" : "100%")};
      border-radius: ${props => (props.roundThumb ? "50%" : "0")};
      /* background: ${props => (props.backgroundColor ? props.backgroundColor : variantParserValue(props.variant, "secondary"))}; */
      background: red;
      cursor: pointer;
    }
  }

   
`;
