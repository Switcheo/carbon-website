import React from "react";
import { Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import { IntroPageBackgroundLine } from "@carbon-info/assets/background";
import backgroundLogo from "@carbon-info/assets/background/introPage.svg";
import backgroundLogoRight from "@carbon-info/assets/background/introPage2.svg";

const IntroPage: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <img src={backgroundLogo} className={classes.backgroundLeft} alt="herobackground" />
      <div>
        <Typography variant="h4" color="textPrimary">
          Meet Carbon
        </Typography>
        <IntroPageBackgroundLine className={classes.dash} />
        <Typography color="textPrimary" variant="h1">
          The core of <br /> <span className={classes.gradientText}>decentralised</span> <br /><span className={classes.gradientText}>financial markets</span>
        </Typography>
        <Typography color="textPrimary" variant="subtitle1" className={classes.subtitle}>
          Carbon is an end-to-end DeFi protocol<br /> powering cross-chain financial dApps
        </Typography>
      </div>
      <img src={backgroundLogoRight} className={classes.backgroundRight} alt="herobackgroundright" />
    </Grid>
  );
};

export default IntroPage;

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    // maxWidth: "100vw",
    // position: "relative"
  },
  dash: {
    margin: "3rem 0px",
    height: "1.5rem",
  },
  backgroundLeft: {
    position: "absolute",
    // left: "-8%",
    // top: "0%",
    // width: "30%",
    width: "69vw",
    // height: "965.09px",
    left: "-34vw",
    top: "-27vw",
  },
  backgroundRight: {
    position: "absolute",
    width: "69vw",
    height: "825.2px",
    right: "-389.33px",
    top: "120.32px",
  },
  subtitle: {
    marginTop: theme.spacing(5.5),
  },
  gradientText: {
    background: "linear-gradient(20deg,#8FF7FE, #DAFFF4, #11D1D1)",
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text",
  },
}));