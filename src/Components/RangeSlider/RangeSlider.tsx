import React from "react";
import * as Styled from "./RangeSlider.style";
import { Variant } from "../../types";

export interface RangeSliderBaseProps {
  variant?: Variant;
  backgroundColor?: string;
  thumbColor?: string;
  roundThumb?: boolean;
  value?: number;
  min?: number;
  max?: number;
}

export interface GradientRangeSliderProps extends RangeSliderBaseProps {
  gradient: true;
  foregroundColor: string;
}

export interface NonGradientRangeSliderProps extends RangeSliderBaseProps {
  gradient?: false;
  foregroundColor?: never;
}

export type RangeSliderProps = GradientRangeSliderProps | NonGradientRangeSliderProps;

export const RangeSlider: React.FC<RangeSliderProps> = ({
  backgroundColor,
  max = 100,
  min = 0,
  roundThumb = true,
  thumbColor = "blue",
  value = 25,
  variant
}) => {
  const [rangeValue, setRangeValue] = React.useState(value);

  return (
    <Styled.RangeSliderWrapper
      variant={variant}
      backgroundColor={backgroundColor}
      roundThumb={roundThumb}
      thumbColor={thumbColor}
      value={rangeValue}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRangeValue(parseInt(e.target.value))}
    >
      <input type="range" min={min} max={max} value={rangeValue} />
    </Styled.RangeSliderWrapper>
  );
};
