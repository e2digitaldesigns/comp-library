import Styled from "styled-components";
import { variantParserValue } from "../utils";

interface RangeSliderProps {
  backgroundColor?: string;
  roundThumb?: boolean;
  thumbColor?: string;
  value: number;
  variant?: string;
}

export const RangeSliderWrapper = Styled.div<RangeSliderProps>`
  width: 100%;

  input[type="range"] {
    -webkit-appearance: none;
    background: ${props => parseColor(props.backgroundColor, props.variant, "primary")};
    border-radius: .25rem;  
    display: block;
    height: ${props => (props.roundThumb ? "4px" : "12px")};
    opacity: 0.7;
    outline: none;
    transition: opacity .2s;
    width: 100%;
    /* background-image:  ${props => `linear-gradient( to right, violet ${props.value}%, indigo ${props.value}%)`}; */

      &:hover {
        opacity: 1; /* Fully shown on mouse-over */
      }


      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        background: ${props => parseColor(props.thumbColor, props.variant, "secondary")};
        border-radius: ${props => (props.roundThumb ? "50%" : "0")};
        cursor: pointer;
        height: ${props => (props.roundThumb ? "1rem" : "100%")};
        width: 1rem;
      }


      &::-moz-range-thumb {
        background: ${props => parseColor(props.thumbColor, props.variant, "secondary")};
        border-radius: ${props => (props.roundThumb ? "50%" : "0")};
        cursor: pointer;
        height: ${props => (props.roundThumb ? "1.5rem" : "100%")};
        width: 1.5rem;
    }
  }
`;

function parseColor(
  color: string | undefined,
  variant: string | undefined,
  colorType: "primary" | "secondary"
) {
  return color ? color : variantParserValue(variant, colorType);
}
