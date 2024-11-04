import { default as React } from '../../../node_modules/react';
import { Variant } from '../../types';
export interface PillsProps {
    variant?: Variant;
    backgroundColor?: string;
    children: React.ReactNode;
}
export declare const Pill: React.FC<PillsProps>;
