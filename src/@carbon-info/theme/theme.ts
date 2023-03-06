import { createTheme } from "@material-ui/core";
import { Shadows } from "@material-ui/core/styles/shadows";

declare module "@material-ui/core/styles/createPalette" {
  export interface TypeText {
    primary: string;
    secondary: string;
    disabled: string;
    hint: string;
    tag: string;
    button: string;
    footer: string;
  }
  export interface TypeBackground {
    default: string;
    paper: string;
    navBar: string;
    divider: string;
    scrollbar: string;
    thumb: string;
  }
}

export const theme = createTheme({
  palette: {
    common: {
      white: "#FFFFFF",
      black: "#000000",
    },
    background: {
      default: "#121212",
      paper: "#161515",
      navBar: "#272525",
      divider: "rgba(116, 232, 232, 0.75)",
      scrollbar: "#554B4B",
      thumb: "#182323",
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
      tag: "#0D4444",
      button: "#DDDDDD",
      footer: "#6C6C6C",
    },
    divider: "#343434",
  },
  shadows: [
    "none",
    "-33px -33px 75px -10px rgba(0, 0, 0, 0.33), 33px 33px 75px -10px rgba(0, 0, 0, 0.75)",
    "0px 0px 12px -10px rgba(0, 0, 0, 0.75)",
    "0px 0px 444.024px #0F616B, 0px 0px 148.008px #0F616B, 0px 0px 74.004px #0F616B, 0px 0px 21.144px #0F616B",
    "0px 0px 8px rgba(0, 242, 199, 0.33)",
    "inset 0 0 0 1000px rgba(18,18,18,.5)",
    ...Array(20).fill("none"),
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
  },
});