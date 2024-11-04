declare const meta: {
    title: string;
    component: import('../../node_modules/react').FC<import('..').PillsProps>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        backgroundColor: {
            control: "color";
        };
        variant: {
            control: {
                type: "select";
                options: import('../types').Variant[];
            };
        };
    };
};
export default meta;
export declare const Primary: import('@storybook/csf').StoryAnnotations<import('@storybook/react').ReactRenderer, {}, {}>;
export declare const Secondary: import('@storybook/csf').StoryAnnotations<import('@storybook/react').ReactRenderer, {}, {}>;
export declare const Success: import('@storybook/csf').StoryAnnotations<import('@storybook/react').ReactRenderer, {}, {}>;
export declare const Danger: import('@storybook/csf').StoryAnnotations<import('@storybook/react').ReactRenderer, {}, {}>;
export declare const Warning: import('@storybook/csf').StoryAnnotations<import('@storybook/react').ReactRenderer, {}, {}>;
export declare const Info: import('@storybook/csf').StoryAnnotations<import('@storybook/react').ReactRenderer, {}, {}>;
export declare const Light: import('@storybook/csf').StoryAnnotations<import('@storybook/react').ReactRenderer, {}, {}>;
export declare const Dark: import('@storybook/csf').StoryAnnotations<import('@storybook/react').ReactRenderer, {}, {}>;
export declare const Link: import('@storybook/csf').StoryAnnotations<import('@storybook/react').ReactRenderer, {}, {}>;
