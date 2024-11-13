import type { Meta, StoryObj } from "@storybook/react";
import { AlertBox as Component } from "../../../Components";
import { ThemeProvider } from "styled-components";
import { theme, darkTheme } from "../../../Components/Windows/themes/theme";

const meta: Meta<typeof Component> = {
  title: "Windows 11/Alert Box",
  component: Component,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    message: `Is your mic extra fancy and silencing itself? In that case you can turn off the red warning by clicking the teeny tiny small text below.`,
    title: "We Can't Hear You!",
    type: "error"
  }
};
export default meta;

type Story = StoryObj<typeof meta>;

//create story with useDarkMode decorator
export const Primary: Story = {
  decorators: [
    Story => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    )
  ]
};

export const Dark: Story = {
  decorators: [
    Story => (
      <ThemeProvider theme={darkTheme}>
        <Story />
      </ThemeProvider>
    )
  ]
};
