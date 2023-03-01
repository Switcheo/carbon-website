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
          height={isMobile ? 650 : "100%"}
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
              <Typography variant="body2" className={classes.scrollText}>SCROLL TO EXPLORE</Typography>
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
      marginTop: "8rem",
    },
  },
  mainTitle: {
    opacity: 0,
    transition: "all 2s ease",
    marginTop: "0.75rem",
    "&.open": {
      opacity: 1,
    },
    [theme.breakpoints.down("sm")]: {
      ...theme.typography.h3,
    },
  },
  dash: {
    margin: "3rem 0px",
    height: "1.5rem",
  },
  subtitle: {
    maxWidth: "40rem",
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
    marginTop: "21.5rem",
    "&.open": {
      opacity: 1,
    },
  },
  scrollIcon: {
    [theme.breakpoints.down("sm")]: {
      height: "2.5rem",
    },
  },
  scrollText: {
    marginTop: "1rem",
    fontWeight: 600,
    color: theme.palette.text.hint,
  },
  bodyTypography: {
    fontWeight: 400,
  },
}));