import React from "react";
import { Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import { IntroPageBackgroundLine } from "@carbon-info/assets/background";
import backgroundLogo from "@carbon-info/assets/background/introPageBgLeft.png";
import backgroundLogoRight from "@carbon-info/assets/background/introPageBgRight.png";
import backgroundSphereLeft from "@carbon-info/assets/animated/introPageSphereLeft.png";
import backgroundSphereRight from "@carbon-info/assets/animated/introPageSphereRight.png";

const IntroPage: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <img src={backgroundLogo} className={classes.backgroundLeft} alt="herobackground" />
      <img src={backgroundSphereLeft} className={classes.sphereLeft} alt="herobackground" />
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
      <img src={backgroundSphereRight} className={classes.sphereRight} alt="herobackgroundright" />
    </Grid>
  );
};

export default IntroPage;

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    justifyContent: "center",
    alignItems: "center",
    // overflow: "hidden",
    // maxWidth: "100vw",
    position: "relative",
  },
  dash: {
    margin: "3rem 0px",
    height: "1.5rem",
  },
  backgroundLeft: {
    position: "absolute",
    left: "-50%",
    top: "-125%",
    width: "100%",
    maxWidth: "65rem",
  },
  sphereLeft: {
    position: "absolute",
    left: "7%",
    top: "0%",
    width: "100%",
    maxWidth: "15rem",
  },
  backgroundRight: {
    position: "absolute",
    right: "-56%",
    top: "-5%",
    width: "100%",
    maxWidth: "60rem",
  },
  sphereRight: {
    position: "absolute",
    right: "2%",
    top: "48%",
    width: "100%",
    maxWidth: "11rem",
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