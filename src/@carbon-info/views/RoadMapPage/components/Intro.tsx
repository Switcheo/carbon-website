import React from "react";
import { Grid, makeStyles, Theme, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { IntroPageBackgroundLine } from "@carbon-info/assets/background";
import backgroundLogo from "@carbon-info/assets/background/roadMapPageLeft.png";
import backgroundLogoRight from "@carbon-info/assets/background/roadMapPageRight.png";
import { FadeAndSlide } from "@carbon-info/components";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

const Intro: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down(340));
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
    triggerOnce: true,
  });
  return (
    <div ref={ref}>
      <Grid container className={classes.container}>
        <img src={backgroundLogo} className={clsx(classes.backgroundLeft, { open: inView })} alt="herobackground" />
        <div>
          <Typography color="textPrimary" variant={isTablet && !isSmallMobile ? "h1" : "h2"} className={clsx(classes.mainTitle, { open: inView })} >
            Carbon Protocol
            <br />
            <span className={clsx(classes.gradientText, { open: inView })} >Roadmap</span>
          </Typography>
          <FadeAndSlide visible={inView}>
            <Typography color="textPrimary" variant="subtitle1" className={classes.subtitle}>
              We’re constantly building new features and integrations<br />to Carbon simultaneously to support some of the<br />blockchain’s most robust innovations
            </Typography>
          </FadeAndSlide>
          <IntroPageBackgroundLine className={classes.dash} />
          <FadeAndSlide visible={inView} transform={[0, -20]}>
            <Typography variant={isTablet && !isSmallMobile ? "h2" : "h3"} color="textPrimary">
              Our core focus areas
            </Typography>
          </FadeAndSlide>
        </div>
        <img src={backgroundLogoRight} className={clsx(classes.backgroundRight, { open: inView })} alt="herobackgroundright" />
      </Grid>
    </div>
  );
};

export default Intro;

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    justifyContent: "center",
    alignItems: "center",
    // overflow: "hidden",
    // maxWidth: "100vw",
    position: "relative",
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
  dash: {
    margin: "3rem 0px",
    width: "2rem",
    height: "3.5rem",
  },
  backgroundLeft: {
    pointerEvents: "none",
    position: "absolute",
    left: "-61%",
    top: "-25%",
    width: "86%",
    opacity: 0,
    transform: "translate(-40px, -40px) scale(0.95)",
    transition: "opacity ease-in 0.3s, transform ease-in 0.4s",
    "&.open": {
      opacity: 1,
      transform: "translate(0px,0px) scale(1)",
    },
    [theme.breakpoints.down(880)]: {
      top: "-31%",
      left: "-72%",
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      top: "-23%",
      left: "-73%",
    },
  },
  sphereLeft: {
    position: "absolute",
    left: "6%",
    top: "-2%",
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
      // maxWidth: "10rem",
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
      right: "-72%",
      top: "-12%",
      width: "100%",
    },
  },
  sphereRight: {
    position: "absolute",
    right: "2%",
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
  subtitle: {
    marginTop: "2.5rem",
    fontSize: "1.725rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.125rem",
    },
    [theme.breakpoints.down(400)]: {
      minWidth: "44rem",
    },
    [theme.breakpoints.down(325)]: {
      marginTop: "2.5rem",
      fontSize: "1.625rem",
    },
  },
  gradientText: {
    background: "linear-gradient(20deg,#8FF7FE, #DAFFF4, #11D1D1)",
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text",
  },
}));