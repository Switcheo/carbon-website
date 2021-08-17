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
    width: "86%",
    [theme.breakpoints.down(880)]: {
      top: "-67%",
      left: "-72%",
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      top: "-69%",
      left: "-73%",
    },
  },
  sphereLeft: {
    position: "absolute",
    left: "6%",
    top: "-2%",
    width: "21%",
    [theme.breakpoints.down(880)]: {
      left: "2%",
    },
    [theme.breakpoints.down("xs")]: {
      left: "-2%",
      top: "0%",
      width: "22%",
      // maxWidth: "10rem",
    },
  },
  backgroundRight: {
    position: "absolute",
    right: "-56%",
    top: "-5%",
    width: "80%",
    [theme.breakpoints.down("xs")]: {
      right: "-58%",
      top: "-32%",
      width: "80%",
    },
  },
  sphereRight: {
    position: "absolute",
    right: "2%",
    top: "48%",
    width: "15%",
    [theme.breakpoints.down(880)]: {
      right: "2%",
      top: "35%",
    },
    [theme.breakpoints.down("xs")]: {
      right: "3%",
      top: "10%",
      width: "16%",
    },
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