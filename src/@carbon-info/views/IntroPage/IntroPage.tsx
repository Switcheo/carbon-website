import React from "react";
import { Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import backgroundLogo from "@carbon-info/assets/background/introPageBgLeft.png";
import backgroundLogoRight from "@carbon-info/assets/background/introPageBgRight.png";
import backgroundSphereLeft from "@carbon-info/assets/animated/introPageSphereLeft.png";
import backgroundSphereRight from "@carbon-info/assets/animated/introPageSphereRight.png";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

const IntroPage: React.FC = () => {
  const classes = useStyles();
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
    triggerOnce: true,
  });
  return (
    <div ref={ref} id="home">
      <Grid container className={classes.container}>
        <img src={backgroundLogo} className={clsx(classes.backgroundLeft, { open: inView })} alt="herobackground" />
        <img src={backgroundSphereLeft} className={clsx(classes.sphereLeft, { open: inView })} alt="herobackground" />
        <div>
          <Typography color="textPrimary" variant="h1" className={clsx(classes.mainTitle, { open: inView })} >
            {/* <Typography color="textPrimary" variant="h2" paragraph>
              CARBON SCAN
            </Typography> */}
            <span className={clsx(classes.gradientText, { open: inView })} >
              COMING SOON
            </span>
          </Typography>
        </div>
        <img src={backgroundLogoRight} className={clsx(classes.backgroundRight, { open: inView })} alt="herobackgroundright" />
        <img src={backgroundSphereRight} className={clsx(classes.sphereRight, { open: inView })} alt="herobackgroundright" />
      </Grid>
    </div>
  );
};

export default IntroPage;

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    justifyContent: "center",
    alignItems: "center",
    // position: "relative",
  },
  mainTitle: {
    opacity: 0,
    transition: "all 2s ease",
    "&.open": {
      opacity: 1,
    },
    [theme.breakpoints.down(320)]: {
      fontSize: "3.65rem",
      lineHeight: "3.5rem",
    },
  },
  backgroundLeft: {
    pointerEvents: "none",
    position: "absolute",
    left: "-50%",
    top: "-67%",
    width: "86%",
    opacity: 0,
    transform: "translate(-40px, -40px) scale(0.95)",
    transition: "opacity ease-in 0.3s, transform ease-in 0.4s",
    "&.open": {
      opacity: 1,
      transform: "translate(0px,0px) scale(1)",
    },
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
    top: "18%",
    width: "21%",
    opacity: 0,
    transform: "translate(-40px, -40px) scale(0.95)",
    transition: "opacity ease-in 0.3s, transform ease-in 0.4s",
    "&.open": {
      opacity: 1,
      transform: "translate(0px,0px) scale(1)",
    },
    [theme.breakpoints.down(880)]: {
      left: "2%",
    },
    [theme.breakpoints.down("xs")]: {
      left: "-2%",
      top: "0%",
      width: "22%",
    },
  },
  backgroundRight: {
    pointerEvents: "none",
    position: "absolute",
    right: "-56%",
    top: "-5%",
    width: "80%",
    opacity: 0,
    transform: "translate(40px, 40px) scale(0.95)",
    transition: "opacity ease-in 0.3s, transform ease-in 0.4s",
    "&.open": {
      opacity: 1,
      transform: "translate(0px,0px) scale(1)",
    },
    [theme.breakpoints.down("xs")]: {
      right: "-58%",
      top: "-32%",
      width: "80%",
    },
  },
  sphereRight: {
    position: "absolute",
    right: "6%",
    top: "48%",
    width: "15%",
    opacity: 0,
    transform: "translate(40px, 40px) scale(0.95)",
    transition: "opacity ease-in 0.3s, transform ease-in 0.4s",
    "&.open": {
      opacity: 1,
      transform: "translate(0px,0px) scale(1)",
    },
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
  gradientText: {
    background: "linear-gradient(63deg,#196163,#DAFFF4,#DAFFF4, #72E7E2, #11D1D1)",
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text",
  },
}));