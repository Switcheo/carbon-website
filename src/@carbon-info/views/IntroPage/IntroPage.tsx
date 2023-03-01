import React from "react";
import { Grid, makeStyles, Theme, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import heroBackgroundAnimation from "@carbon-info/assets/animated/heroBackgroundAnimation.json";
import { FadeAndSlide } from "@carbon-info/components";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import Lottie from "react-lottie";
import { Scroll } from "@carbon-info/assets";

const IntroPage: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
    triggerOnce: true,
  });

  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const AniStartOptions = {
    loop: true,
    autoplay: true,
    animationData: heroBackgroundAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div ref={ref} id="home">
      <Grid container className={classes.container}>
        <Lottie
          options={AniStartOptions}
          width={isMobile ? "100%" : 1480}
          height={isMobile ? 450 : "100%"}
        />
        <div className={classes.headerContainer}>
          <FadeAndSlide visible={inView} transform={[0, -20]}>
            <Typography variant="body1" color="textSecondary" className={classes.bodyTypography}>
              MEET CARBON
            </Typography>
          </FadeAndSlide>
          <Typography color="textPrimary" variant="h1" className={clsx(classes.mainTitle, { open: inView })} >
            The Core of
            <br />
            <span className={clsx(classes.highlightedText, { open: inView })} >
              Decentralized
              <br />
            </span>
            <span className={clsx(classes.highlightedText)}>
              Financial Markets.
            </span>
          </Typography>
          <FadeAndSlide visible={inView}>
            <Typography color="textSecondary" variant="body1" className={classes.subtitle}>
              Carbon is a cross-chain protocol that acts as<br />a building block for DeFi.
            </Typography>
          </FadeAndSlide>
          <FadeAndSlide visible={inView}>
            <div className={clsx(classes.scrollContainer, { open: inView })}>
              <Scroll className={classes.scrollIcon} />
              <Typography className={classes.scrollText}>SCROLL TO EXPLORE</Typography>
            </div>
          </FadeAndSlide>
        </div>
      </Grid>
    </div >
  );
};

export default IntroPage;

const useStyles = makeStyles((theme: Theme) => ({
  hexagonBackground: {
    position: "absolute",
    top: 0,
    transform: "rotate(6.93deg)",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    [theme.breakpoints.only("xs")]: {
      marginLeft: "-16px",
      width: "calc(100% + 32px)",
    },
  },
  headerContainer: {
    zIndex: 5,
    marginTop: "11.25rem",
    position: "absolute",
    top: 0,
    [theme.breakpoints.only("xs")]: {
      marginTop: 0,
      margin: "0 16px",
    },
  },
  mainTitle: {
    opacity: 0,
    transition: "all 2s ease",
    marginTop: "0.75rem",
    "&.open": {
      opacity: 1,
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "3.65rem",
      lineHeight: "3.5rem",
    },
  },
  dash: {
    margin: "3rem 0px",
    height: "1.5rem",
  },
  subtitle: {
    maxWidth: "40rem",
    [theme.breakpoints.only("xs")]: {
      marginTop: "2.5rem",
      fontSize: "2rem",
    },
  },
  highlightedText: {
    color: theme.palette.primary.light,
  },
  carbonIcon: {
    marginTop: "-540px",
    width: "1680px",
  },
  scrollContainer: {
    opacity: 0,
    marginTop: "445px",
    "&.open": {
      opacity: 1,
    },
    [theme.breakpoints.only("xs")]: {
      marginTop: "145px",
    },
  },
  scrollIcon: {
    [theme.breakpoints.only("xs")]: {
      height: "20px",
    },
  },
  scrollText: {
    marginTop: "1.5rem",
    fontFamily: theme.typography.body1.fontFamily,
    fontWeight: 600,
    fontSize: "1.125rem",
    lineHeight: "1.562rem",
    color: theme.palette.text.hint,
  },
  bodyTypography: {
    fontWeight: 400,
  },
}));