import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      fontLight: "#BDEBEA",
      fontGreen: "#44FFBE",
      lightGreen: "#00F5A0",
      lightBlue: "#00D9F5",
      darkblue1: "#00243C",
      darkBlue2: "#001C2F",
      white: "#FFFFFF",
    },
    fontSizes: {
      sm: "1rem",
      md: "1.1125rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "2rem",
    },
    space: {
      space0: ".5rem",
      space1: "1rem",
      space2: "2rem",
      space3: "3rem",
      space4: "4rem",
    },
  },
  media: {
    lgPhone: "(min-width: 640px)",
    tablet: "(min-width: 768px)",
    laptop: "(min-width: 1024px)",
    desktop: "(min-width: 1280px)",
  },
});
