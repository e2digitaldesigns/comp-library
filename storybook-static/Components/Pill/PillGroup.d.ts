import { default as React } from '../../../node_modules/react';
import { Variant } from '../../types';
export interface PillGroupProps {
    variant?: Variant;
    backgroundColor?: string;
    children: React.ReactNode;
}
export declare const PillGroup: React.FC<PillGroupProps>;
