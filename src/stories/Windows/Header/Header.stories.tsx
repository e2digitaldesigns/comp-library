import type { Meta, StoryObj } from "@storybook/react";
import { Header as Component } from "../../../Components";
import { ThemeProvider } from "styled-components";
import { theme, darkTheme } from "../../../Components/Windows/themes/theme";

const meta: Meta<typeof Component> = {
	title: "Windows 11/Header",
	component: Component,
	parameters: {
		layout: "centered"
	},
	tags: ["autodocs"],
	argTypes: {}
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
