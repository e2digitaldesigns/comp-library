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
