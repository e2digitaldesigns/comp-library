import type { Meta, StoryObj } from "@storybook/react";
import { AppBrowser as Component } from "../../Components";

const meta: Meta<typeof Component> = {
  title: "Windows 11/AppBrowser",
  component: Component,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {}
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {}
};
