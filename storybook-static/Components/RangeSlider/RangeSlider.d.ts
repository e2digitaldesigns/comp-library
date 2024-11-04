import { default as React } from '../../../node_modules/react';
import { Variant } from '../../types';
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
export declare const RangeSlider: React.FC<RangeSliderProps>;
