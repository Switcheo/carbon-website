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
    fontFamily: "TyrosPro, SourceSansPro, SourceSansPro-Light, SourceSansPro-Bold, TyrosPro-Light, TyrosPro-SemiBold, TyrosPro-Bold",
    h1: { // XLarge 58px
      fontFamily: "TyrosPro-Bold",
      fontWeight: 900,
      fontSize: "3.625rem",
      lineHeight: "5.125rem",
      letterSpacing: "-0.02rem",
    },
    h2: { // Large 42px
      fontFamily: "TyrosPro",
      fontWeight: 600,
      fontSize: "2.625rem",
      lineHeight: "3.75rem",
      letterSpacing: "-0.02rem",
    },
    h3: { // 30px
      fontFamily: "TyrosPro",
      fontWeight: 600,
      fontSize: "1.875rem",
      lineHeight: "2.755rem",
      letterSpacing: 0,
    },
    h4: { // Regular 24px/CTA & Title
      fontFamily: "TyrosPro",
      fontWeight: 700,
      fontSize: "1.5rem",
      lineHeight: "2.062rem",
      letterSpacing: "-0.02rem",
    },
    h5: { // Mobile/Header 10px
      fontFamily: "TyrosPro",
      fontWeight: 700,
      fontSize: "0.625rem",
      lineHeight: "1rem",
    },
    body1: { // Regular 18px/Body
      fontFamily: "TyrosPro",
      fontWeight: 500,
      fontSize: "1.125rem",
      lineHeight: "1.687rem",
      letterSpacing: 0,
    },
    body2: { // Small 12px/Body
      fontFamily: "TyrosPro",
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: "1.344rem",
    },
  },
});