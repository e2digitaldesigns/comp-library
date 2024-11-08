import type { Meta, StoryObj } from "@storybook/react";
import { RangeSlider as Component } from "../Components";
import { variants } from "../types";

const meta = {
  title: "Components/Range Slider",
  component: Component,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" }
  },
  args: {}
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const stories: { [key: string]: StoryObj } = {};

variants.forEach(variant => {
  stories[variant.charAt(0).toUpperCase() + variant.slice(1)] = {
    args: {
      variant: variant,
      children: ` ${variant.charAt(0).toUpperCase() + variant.slice(1)}`
    }
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

export const Gradient: Story = {
  args: {
    gradient: true,
    foregroundColor: "green"
  }
};
