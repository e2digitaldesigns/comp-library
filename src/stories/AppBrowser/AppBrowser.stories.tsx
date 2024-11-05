import type { Meta, StoryObj } from "@storybook/react";
import { AppBrowser as Component } from "../../Components";
import { ThemeProvider } from "styled-components";
import { theme, darkTheme } from "../../Components/Windows/themes/theme";

const meta: Meta<typeof Component> = {
  title: "Windows 11/AppBrowser",
  component: Component,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {}

  //   decorators: [
  //     Story => (
  //       <ThemeProvider theme={useDarkMode() ? darkTheme : theme}>
  //         <Story />
  //       </ThemeProvider>
  //     )
  //   ]
};
export default meta;

type Story = StoryObj<typeof meta>;

//create story with useDarkMode decorator
export const Primary: Story = {
  args: {},
  decorators: [
    Story => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    )
  ]
};

export const Dark: Story = {
  args: {},
  decorators: [
    Story => (
      <ThemeProvider theme={darkTheme}>
        <Story />
      </ThemeProvider>
    )
  ]
};
