import { default as React } from '../../../node_modules/react';
interface ButtonProps {
    backgroundColor?: string;
    children: React.ReactNode;
    roundedCorners?: boolean;
    variant?: string;
}
export declare const Button: React.FC<ButtonProps>;
export default Button;
