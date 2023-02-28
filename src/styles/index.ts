import { createStitches, defaultThemeMap } from "@stitches/react";

export const {
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    color: "color",
  },
  theme: {
    colors: {
      gray50: "#fafafa",
      gray100: "#e5e5e5",
      gray200: "#e5e5e5",
      gray300: "#d4d4d4",
      gray400: "#a3a3a3",
      gray500: "#737373",
      gray600: "#525252",
      gray700: "#404040",
      gray800: "#141414",
      gray900: "#000000",
    },
  },
});
