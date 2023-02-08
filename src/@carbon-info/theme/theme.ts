import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  palette: {
    common: {
      white: "#FFFFFF",
      black: "#000000",
    },
    background: {
      default: "#161515",
      paper: "#161515",
    },
    primary: {
      light: "#31D8D6", // highlight
      main: "#74E8E8", // branding
      dark: "#0ADCB6", // accents/green
    },
    secondary: {
      light: "#6B99C3",
      main: "#5389BA",
      dark: "#3A78B1",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#B0B0B0",
      disabled: "#5C5C5C",
      hint: "#989898",
    },
    divider: "#343434",
  },
  typography: {
    fontFamily: "TyrosPro, SourceSansPro, SourceSansPro-Light, SourceSansPro-Bold, TyrosPro-Light, TyrosPro-SemiBold",
    h1: { // XLarge 64px
      fontFamily: "TyrosPro",
      fontWeight: 900,
      fontSize: "4rem",
      lineHeight: "5.5rem",
      letterSpacing: "-0.02rem",
    },
    h2: { // Large 48px
      fontFamily: "TyrosPro",
      fontWeight: 600,
      fontSize: "3rem",
      lineHeight: "4.125rem",
      letterSpacing: "-0.02rem",
    },
    h3: { // 36px
      fontFamily: "TyrosPro",
      fontWeight: 600,
      fontSize: "2.25rem",
      lineHeight: "3.125rem",
      letterSpacing: 0,
    },
    h4: { // Regular 24px/CTA & Title
      fontFamily: "TyrosPro",
      fontWeight: 700,
      fontSize: "1.5rem",
      lineHeight: "2.062rem",
      letterSpacing: "-0.02rem",
    },
    h5: { // Mobile/Header 16px
      fontFamily: "TyrosPro",
      fontWeight: 700,
      fontSize: "1rem",
      lineHeight: "1.375rem",
    },
    body1: { // Regular 24px/Body
      fontFamily: "TyrosPro",
      fontWeight: 500,
      fontSize: "1.5rem",
      lineHeight: "2.062rem",
      letterSpacing: 0,
    },
    body2: { // Small 20px/Body
      fontFamily: "TyrosPro",
      fontWeight: 400,
      fontSize: "1.25rem",
      lineHeight: "1.719rem",
    },
    button: {
      fontWeight: 700,
      fontSize: "1.5rem",
      lineHeight: "2.13rem",
    },
  },
});