import React from "react";
import { Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import carbonHexagonBackground from "@carbon-info/assets/background/carbonHexagonBackground.svg";
import { FadeAndSlide } from "@carbon-info/components";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import { Carbon, Scroll } from "@carbon-info/assets";

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
        <img src={carbonHexagonBackground} className={clsx(classes.hexagonBackground, { open: inView })} />
        <div className={classes.headerContainer}>
          <FadeAndSlide visible={inView} transform={[0, -20]}>
            <Typography variant="body1" color="textSecondary" className={classes.bodyTypography}>
              MEET CARBON
            </Typography>
          </FadeAndSlide>
          <Typography color="textPrimary" variant="h1" className={clsx(classes.mainTitle, { open: inView })} >
            The Core of
            <br />
            <span className={clsx(classes.hightlightedText, { open: inView })} >
              Decentralized
              <br />
            </span>
            <span className={clsx(classes.hightlightedText)}>
              Financial Markets.
            </span>
          </Typography>
          <FadeAndSlide visible={inView}>
            <Typography color="textSecondary" variant="body1" className={classes.subtitle}>
              Carbon is a cross-chain protocol that acts as<br />a building block for DeFi.
            </Typography>
            <Carbon className={classes.carbonIcon} />
          </FadeAndSlide>
          <FadeAndSlide visible={inView}>
            <div className={clsx(classes.scrollContainer, { open: inView })}>
              <Scroll />
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
  },
  headerContainer: {
    zIndex: 5,
    marginTop: "8.5rem",
  },
  mainTitle: {
    opacity: 0,
    transition: "all 2s ease",
    marginTop: "0.75rem",
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
    height: "1.5rem",
  },
  backgroundLeft: {
    pointerEvents: "none",
    position: "absolute",
    left: "-50%",
    top: "-125%",
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
    margin: "0.5rem auto",
    maxWidth: "40rem",
    [theme.breakpoints.down(325)]: {
      marginTop: "2.5rem",
      fontSize: "2rem",
    },
  },
  hightlightedText: {
    color: theme.palette.primary.light,
  },
  carbonIcon: {
    marginTop: "-540px",
    width: "1680px",
  },
  scrollContainer: {
    opacity: 0,
    marginTop: "-500px",
    "&.open": {
      opacity: 1,
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