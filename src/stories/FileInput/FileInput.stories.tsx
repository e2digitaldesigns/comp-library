import type { Meta, StoryObj } from "@storybook/react";
import { FileInput as Component } from "../../Components";

const meta: Meta<typeof Component> = {
  title: "Components/File Input",
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
