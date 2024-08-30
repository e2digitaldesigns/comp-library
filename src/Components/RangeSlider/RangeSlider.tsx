import React from "react";
import * as Styled from "./RangeSlider.style";
import { Variant } from "../../types";

export interface RangeSliderProps {
  variant?: Variant;
  backgroundColor?: string;

  roundThumb?: boolean;
  value?: number;
  min?: number;
  max?: number;
}

export const RangeSlider: React.FC<RangeSliderProps> = ({
  backgroundColor,
  variant,
  roundThumb = true,
  value = 25,
  min = 0,
  max = 100
}) => {
  const [rangeValue, setRangeValue] = React.useState(0);

  return (
    <Styled.RangeSliderWrapper
      variant={variant}
      backgroundColor={backgroundColor}
      roundThumb={roundThumb}
      value={rangeValue}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setRangeValue(parseInt(e.target.value))
      }
    >
      <input type="range" min={min} max={max} />
    </Styled.RangeSliderWrapper>
  );
};
