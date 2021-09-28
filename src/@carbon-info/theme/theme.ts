import { createTheme } from "@material-ui/core";

export const theme = createTheme({
    palette: {
      common: {
        white: "#FFFFFF",
        black: "#161515",
      },
      background: {
        default: "#161515",
        paper: "#161515",
      },
      primary: {
        light: "#8CF2FD",
        main: "#74E8E8",
        dark: "#4FC1C0",
      },
      secondary: {
        light: "#6B99C3",
        main: "#5389BA",
        dark: "#3A78B1",
      },
      text: {
        primary: "#FFFFFF",
      },
      divider: "rgba(255,255,255,0.4)",
    },
    typography: {
      fontFamily: "TyrosPro, SourceSansPro, SourceSansPro-Light, SourceSansPro-Bold, TyrosPro-Light, TyrosPro-SemiBold",
      h1: {
        fontWeight: 300,
        fontSize: "4.375rem",
        lineHeight: "4.375rem",
        letterSpacing: "-0.063rem",
      },
      h2: {
        fontWeight: 300,
        fontSize: "3.438rem",
        lineHeight: "3.953rem",
        letterSpacing: "-0.063rem",
      },
      h3: {
        fontWeight: 500,
        fontSize: "2.5rem",
        lineHeight: "63.25px",
        letterSpacing: "-0.063rem",
      },
      h4: {
        fontWeight: 700,
        fontSize: "1.25rem",
        lineHeight: "1.188rem",
        letterSpacing: "4",
      },
      subtitle1: {
        fontFamily: "SourceSansPro-Light",
        fontWeight: 300,
        fontSize: "2.125rem",
        lineHeight: "3.018rem",
        letterSpacing: "-0.063rem",
      },
      subtitle2: {
        fontFamily: "SourceSansPro-Light",
        fontWeight: 300,
        fontSize: "2.725rem",
        lineHeight: "3.018rem",
        letterSpacing: "-0.063rem",
      },
      body1: {
        fontFamily: "SourceSansPro-Light",
        fontWeight: 200,
        fontSize: "1.438rem",
        lineHeight: "2.041rem",
        letterSpacing: "-0.063rem",
      },
      body2: {
        fontFamily: "SourceSansPro",
        fontWeight: 400,
        fontSize: "1.438rem",
        lineHeight: "2.041rem",
        letterSpacing: "-1%",
      },
      button: {
        fontWeight: 700,
        fontSize: "1.5rem",
        lineHeight: "2.13rem",
      },
    },
});