import React from "react";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../src/themes/theme";
import GlobalStyles from "../src/themes/globalStyles";

const withThemeProvider = (Story: any) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />

    <Story />
  </ThemeProvider>
);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [withThemeProvider]
};

export default preview;
