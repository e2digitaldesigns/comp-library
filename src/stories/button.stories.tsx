import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button as Component } from "../Components";
import { variants } from "../types";

const meta: Meta = {
  title: "Components/Button/Button",
  component: Component,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    roundedCorners: { control: "boolean" },
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

variants.forEach(variant => {
  stories[variant.charAt(0).toUpperCase() + variant.slice(1)] = {
    args: {
      onClick: fn(),
      variant: variant,
      children: ` ${variant.charAt(0).toUpperCase() + variant.slice(1)}`
    }
  };

  stories[variant.charAt(0).toUpperCase() + variant.slice(1) + "Round"] = {
    args: {
      onClick: fn(),
      roundedCorners: true,
      variant: variant,
      children: ` ${variant.charAt(0).toUpperCase() + variant.slice(1)}`
    }
  };
});

export const Primary = stories.Primary;
export const PrimaryRound = stories.PrimaryRound;
export const Secondary = stories.Secondary;
export const SecondaryRound = stories.SecondaryRound;
export const Success = stories.Success;
export const SuccessRound = stories.SuccessRound;
export const Danger = stories.Danger;
export const DangerRound = stories.DangerRound;
export const Warning = stories.Warning;
export const WarningRound = stories.WarningRound;
export const Info = stories.Info;
export const InfoRound = stories.InfoRound;
export const Light = stories.Light;
export const LightRound = stories.LightRound;
export const Dark = stories.Dark;
export const DarkRound = stories.DarkRound;
export const Link = stories.Link;
export const LinkRound = stories.LinkRound;
