import { createTheme } from "@material-ui/core";
import { Shadows } from "@material-ui/core/styles/shadows";

export const theme = createTheme({
  palette: {
    common: {
      white: "#FFFFFF",
      black: "#000000",
    },
    background: {
      default: "#121212",
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
  shadows: [
    "none",
    "-33px -33px 75px -10px rgba(0, 0, 0, 0.33), 33px 33px 75px -10px rgba(0, 0, 0, 0.75)",
    "0px 0px 12px -10px rgba(0, 0, 0, 0.75)",
    ...Array(23).fill("none"),
  ] as Shadows,
  typography: {
    fontFamily: "TyrosPro, SourceSansPro, SourceSansPro-Light, SourceSansPro-Bold, TyrosPro-Light, TyrosPro-SemiBold, TyrosPro-Bold",
    // All font sizes to be reduced by 6px 
    h1: { // XLarge 64px
      fontFamily: "TyrosPro-Bold",
      fontWeight: 900,
      fontSize: "3.625rem",
      lineHeight: "5.125rem",
      letterSpacing: "-0.02rem",
    },
    h2: { // Large 48px/Header
      fontFamily: "TyrosPro-Bold",
      fontWeight: 700,
      fontSize: "2.625rem",
      lineHeight: "3.75rem",
      letterSpacing: "-0.02rem",
    },
    h3: { // 36px
      fontFamily: "TyrosPro-Bold",
      fontWeight: 700,
      fontSize: "1.875rem",
      lineHeight: "2.755rem",
      letterSpacing: 0,
    },
    h4: { // Regular 24px/CTA & Title
      fontFamily: "TyrosPro-Bold",
      fontWeight: 700,
      fontSize: "1.5rem",
      lineHeight: "2.062rem",
      letterSpacing: "-0.02rem",
    },
    h5: { // 20px
      fontFamily: "TyrosPro-Bold",
      fontWeight: 700,
      fontSize: "0.875rem",
      lineHeight: "1.344rem",
    },
    body1: { // Regular 24px/Body
      fontFamily: "TyrosPro",
      fontWeight: 400,
      fontSize: "1.125rem",
      lineHeight: "1.687rem",
      letterSpacing: 0,
    },
    body2: { // Small 20px/Body
      fontFamily: "TyrosPro",
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: "1.75rem",
    },
    // body3: { // 18px
    //   fontFamily: "TyrosPro",
    //   fontWeight: 400,
    //   fontSize: "0.75rem",
    //   lineHeight: "1.172rem",
    // },
  },
});