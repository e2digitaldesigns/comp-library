import { theme } from "../../themes/theme";

export const variantParser = (theme: any, variant?: string) => {
  switch (variant) {
    case "primary":
      return `
          background-color: ${theme.colors.primary};
          color: ${theme.colors.white};
        `;
    case "secondary":
      return `
          background-color: ${theme.colors.secondary};
          color: ${theme.colors.white};
        `;
    case "success":
      return `
          background-color: ${theme.colors.success};
          color: ${theme.colors.white};
        `;
    case "danger":
      return `
          background-color: ${theme.colors.danger};
          color: ${theme.colors.white};
        `;
    case "warning":
      return `
          background-color: ${theme.colors.warning};
          color: ${theme.colors.dark};
        `;
    case "info":
      return `
          background-color: ${theme.colors.info};
          color: ${theme.colors.dark};
        `;

    case "light":
      return `
          background-color: ${theme.colors.light};
          color: ${theme.colors.dark};
        `;

    case "dark":
      return `
          background-color: ${theme.colors.dark};
          color: ${theme.colors.light};
        `;

    case "link":
      return `
          background-color: transparent;
          color: ${theme.colors.primary};
        `;

    default:
      return ``;
  }
};

const variantObj: Record<string, Record<string, string>> = {
  primary: {
    primary: theme.colors.primary,
    secondary: theme.colors.white
  },
  secondary: {
    primary: theme.colors.secondary,
    secondary: theme.colors.white
  },
  success: {
    primary: theme.colors.success,
    secondary: theme.colors.white
  },
  danger: {
    primary: theme.colors.danger,
    secondary: theme.colors.white
  },
  warning: {
    primary: theme.colors.warning,
    secondary: theme.colors.dark
  },
  info: {
    primary: theme.colors.info,
    secondary: theme.colors.dark
  },
  light: {
    primary: theme.colors.light,
    secondary: theme.colors.dark
  },
  dark: {
    primary: theme.colors.dark,
    secondary: theme.colors.light
  },
  link: {
    primary: "transparent",
    secondary: theme.colors.primary
  }
};

export const variantParserValue = (
  variant: string | undefined,
  key: string
) => {
  if (!variant) {
    return theme.colors.primary;
  }
  return variantObj[variant][key];
};
