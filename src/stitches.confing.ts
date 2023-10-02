// stitches.config.ts
import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    fonts: {
      primary: "Sora",
      secondary: "Raleway",
    },
    colors: {
      turquoise100: "#B9EEF4",
      turquoise200: "#A1E8F0",
      turquoise300: "#8AE2EC",
      turquoise400: "#43D1E1",
      turquoise500: "#14C5D9",

      orange100: "#FAC7B4",
      orange200: "#F9B9A2",
      orange300: "#F69C7C",
      orange400: "#F58E69",
      orange500: "#F27244",

      dark: "#030526",

      gray50: "#f8f8f8",
      gray100: "#dedede",
      gray200: "#c3c3c3",
      gray300: "#a9a9a9",
      gray400: "#8e8e8e",
      gray500: "#747474",
      gray600: "#595959",
      gray700: "#3f3f3f",
      gray800: "#242424",

      white: "#ffffff",
      black: "#000000",
    },
    fontSizes: {
      "10xl": "120px",
      "9xl": "110px",
      "8xl": "100px",
      "7xl": "90px",
      "6xl": "72px",
      "5xl": "60px",
      "4xl": "48px",
      "3xl": "36px",
      "2xl": "30px",
      "1xl": "24px",
      xl: "20px",
      lg: "18px",
      md: "16px",
      sm: "14px",
      xs: "12px",
    },
    lineHeights: {
      "9xl": "120px",
      "8xl": "110px",
      "7xl": "100px",
      "6xl": "90px",
      "5xl": "72px",
      "4xl": "60px",
      "3xl": "44px",
      "2xl": "38px",
      "1xl": "32px",
      xl: "30px",
      lg: "28px",
      md: "24px",
      sm: "20px",
      xs: "18px",
    },
    fontWeights: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      black: 900,
    },
    space: {
      px: "1px",
      0.5: "0.125rem",
      1: "0.25rem",
      1.5: "0.375rem",
      2: "0.5rem",
      2.5: "0.625rem",
      3: "0.75rem",
      3.5: "0.875rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      23: "5.75rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem",
    },
    zIndices: {
      bottom: -1,
      base: 1,
      top: 2,
      fixed: 3,
    },
    transitions: {
      default: "0.3s ease-in-out",
      easeOutCubic: "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
    },
  },
  media: {
    // sm: '(min-width: 480px)',
    // md: '(min-width: 768px)',
    // lg: '(min-width: 1024px)',
    // xl: '(min-width: 1250px)',
    // '2xl': '(min-width: 1440px)',
    xs: "(max-width: 320px)",
    sm: "(max-width: 667px)",
    md: "(max-width: 767px)",
    lg: "(max-width: 991px)",
    xl: "(max-width: 1250px)",
    "2xl": "(max-width: 1400px)",
  },
});

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    outline: 0,
    boxSizing: "border-box",

    "-webkit-font-smoothing": "antialiased",
  },

  html: {
    overflowX: "hidden",
  },

  body: {
    backgroundColor: "$white",
    color: "$black",

    fontSize: "$md",
    lineHeight: "$md",
    fontWeight: "$regular",

    overflowX: "hidden",
    fontFamily: "$primary",

    width: "100vw",
    minHeight: "100vh",
  },

  "input, textarea": {
    fontFamily: "$primary",
  },

  button: {
    cursor: "pointer",
    fontFamily: "$primary",
  },

  ul: {
    listStyle: "none",
  },

  a: {
    textDecoration: "none",
  },
});