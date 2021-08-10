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
        fontSize: "70px",
        lineHeight: "70px",
        letterSpacing: "-1px",
      },
      h2: {
        fontWeight: 300,
        fontSize: "55px",
        lineHeight: "63.25px",
        letterSpacing: "-1px",
      },
      h3: {
        fontWeight: 500,
        fontSize: "55px",
        lineHeight: "63.25px",
        letterSpacing: "-1px",
      },
      h4: {
        fontWeight: 700,
        fontSize: "20px",
        lineHeight: "19px",
        letterSpacing: "4",
      },
      subtitle1: {
        fontFamily: "SourceSansPro-Light",
        fontWeight: 300,
        fontSize: "34px",
        lineHeight: "48.28px",
        letterSpacing: "-1%",
      },
      body1: {
        fontFamily: "SourceSansPro-Light",
        fontWeight: 200,
        fontSize: "23px",
        lineHeight: "32.66px",
        letterSpacing: "-1px",
      },
      body2: {
        fontFamily: "SourceSansPro",
        fontWeight: 400,
        fontSize: "23px",
        lineHeight: "32.66px",
        letterSpacing: "-1%",
      },
      button: {
        fontWeight: 700,
        fontSize: "24px",
        lineHeight: "34.08px",
        // letterSpacing: "-1px",
      },
    },
});