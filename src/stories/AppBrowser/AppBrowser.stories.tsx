import type { Meta, StoryObj } from "@storybook/react";
import { AppBrowser as Component } from "../../Components";
import { ThemeProvider } from "styled-components";
import { theme, darkTheme } from "../../Components/Windows/themes/theme";
import { useDarkMode } from "storybook-dark-mode";

const meta: Meta<typeof Component> = {
  title: "Windows 11/AppBrowser",
  component: Component,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {},

  decorators: [
    Story => (
      <ThemeProvider theme={useDarkMode() ? darkTheme : theme}>
        <Story />
      </ThemeProvider>
    )
  ]
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {}
};
