import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Pill as Component } from "../Components";
import { variants } from "../types";

const meta = {
  title: "Components/Pill/Pill",
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
} satisfies Meta<typeof Component>;

export default meta;

const stories: { [key: string]: StoryObj } = {};

variants.forEach(variant => {
  stories[variant.charAt(0).toUpperCase() + variant.slice(1)] = {
    args: {
      onClick: fn(),
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
