import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import('../../node_modules/react').FC<import('..').RangeSliderProps>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        backgroundColor: {
            control: "color";
        };
    };
    args: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: import('@storybook/csf').StoryAnnotations<import('@storybook/react').ReactRenderer, {}, {}>;
export declare const Secondary: import('@storybook/csf').StoryAnnotations<import('@storybook/react').ReactRenderer, {}, {}>;
export declare const Success: import('@storybook/csf').StoryAnnotations<import('@storybook/react').ReactRenderer, {}, {}>;
export declare const Danger: import('@storybook/csf').StoryAnnotations<import('@storybook/react').ReactRenderer, {}, {}>;
export declare const Warning: import('@storybook/csf').StoryAnnotations<import('@storybook/react').ReactRenderer, {}, {}>;
export declare const Info: import('@storybook/csf').StoryAnnotations<import('@storybook/react').ReactRenderer, {}, {}>;
export declare const Light: import('@storybook/csf').StoryAnnotations<import('@storybook/react').ReactRenderer, {}, {}>;
export declare const Dark: import('@storybook/csf').StoryAnnotations<import('@storybook/react').ReactRenderer, {}, {}>;
export declare const Link: import('@storybook/csf').StoryAnnotations<import('@storybook/react').ReactRenderer, {}, {}>;
export declare const Gradient: Story;
