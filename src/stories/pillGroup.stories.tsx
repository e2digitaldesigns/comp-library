import type { Meta, StoryObj } from "@storybook/react";
import { PillGroup as Component, Pill } from "../Components";
import { variants } from "../types";

const meta: Meta<typeof Component> = {
  title: "Components/Pill/Pill Group",
  component: Component,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    variant: {
      control: {
        type: "select",
        options: variants
      }
    }
  }
};
export default meta;

const stories: { [key: string]: StoryObj } = {};

// export const Primary: Story = {
//   render: args => (
//     <Component {...args}>
//       <Pill variant="primary">246k</Pill>
//       <Pill variant="primary">Share</Pill>
//     </Component>
//   )
// };

variants.forEach(variant => {
  stories[variant.charAt(0).toUpperCase() + variant.slice(1)] = {
    render: args => (
      <Component {...args}>
        <Pill variant={variant}>246k</Pill>
        <Pill variant={variant}>Share</Pill>
      </Component>
    )
  };
});

export const Primary = stories.Primary;
export const Secondary = stories.Secondary;
export const Success = stories.Success;
export const Danger = stories.Danger;
export const Warning = stories.Warning;
export const Info = stories.Info;
export const Light = stories.Light;
export const Dark = stories.Dark;
export const Link = stories.Link;
