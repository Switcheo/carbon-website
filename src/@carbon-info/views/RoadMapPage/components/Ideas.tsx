import React from "react";
import { Box, Grid, Hidden, makeStyles, Theme, Typography } from "@material-ui/core";
import carbonConnected from "@carbon-info/assets/non-animated/roadmapPageHero.png";
import { CTAButton } from "@carbon-info/components";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

const Ideas: React.FC = () => {
  const classes = useStyles();
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.8,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={classes.aniContainer}>
      <Box className={clsx(classes.container, { open: inView })}>
        <Grid container className={classes.cardContainer} justifyContent="center" alignItems="center">
          <Grid container item xs={12} md={7} className={classes.textContainer}>
            <div>
              <Typography color="textPrimary" variant="h2">
                Have ideas on what we should build next?
            </Typography>
              <Typography color="textPrimary" variant="body2" className={classes.subtext}>
                We’re building the infrastructure of the future and we<br /> can always use new, bright ideas. Help us innovate.
            </Typography>
              <CTAButton
                text="Submit an idea"
                link="/#document"
                CTA
              />
            </div>
          </Grid>
          <Hidden smDown>
            <Grid item xs={5} className={classes.imageContainer}>
              <img src={carbonConnected} alt="carbon-connected" className={classes.image} />
            </Grid>
          </Hidden>
        </Grid>
      </Box>
    </div>
  );
};

export default Ideas;

const useStyles = makeStyles((theme: Theme) => ({
  aniContainer: {
    position: "relative",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    display: "relative",
    zIndex: 1,
    // background: "red"
    opacity: 0,
    transform: "translate(0px, 20px)",
    // transitionDelay: "0.3s",
    transition: "opacity ease-in 0.3s, transform ease-in 0.4s",
    "&.open": {
      opacity: 1,
      transform: "translate(0px,0px)",
    },
  },
  imageContainer: {
    alignItems: "center",
    textAlign: "center",
  },
  cardContainer: {
    position: "relative",
    alignItems: "center",
    padding: "0px 2.5rem 0px 2.5rem",
    maxWidth: "80rem",
    height: "38rem",
    // boxShadow: "inset 62px 98px 100px -60px rgba(36, 36, 36,0.5), inset 0px 1px 40px rgba(85, 85, 85, 0.04)",
    // backdropFilter: "blur(3px)",
    // borderRadius: "58px",
    textAlign: "start",
    // background: "rgba(0,0,0,0.0)",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      // height: "42rem",
      width: "fit-content",
    },
    [theme.breakpoints.down("xs")]: {
      height: "42rem",
    },
  },
  image: {
    width: "100%",
    transform: "scale(1.5)",
    pointerEvents: "none",
  },
  backgroundLeft: {
    position: "absolute",
    width: "100%",
    // height: "",
    left: "-50%",
    top: "-55%",
    transform: "translate(10px, 0px)",
    transition: "opacity ease-in 0.3s, transform ease-in 0.4s",
    "&.open": {
      opacity: 1,
      transform: "translate(0px,0px)",
    },
  },
  mobileGlow: {
    position: "absolute",
    left: "-27%",
    bottom: "-90%",
    zIndex: 0,
    pointerEvents: "none",
    [theme.breakpoints.down("sm")]: {
      left: "-108%",
      bottom: "-50%",
    },
    [theme.breakpoints.down("xs")]: {
      left: "-110%",
    },
  },
  backgroundRight: {
    position: "absolute",
    width: "100%",
    // height: "",
    right: "-38%",
    top: "-23%",
    transform: "translate(-10px, 0px)",
    transition: "opacity ease-in 0.3s, transform ease-in 0.4s",
    "&.open": {
      opacity: 1,
      transform: "translate(0px,0px)",
    },
    pointerEvents: "none",
    [theme.breakpoints.down(1100)]: {
      top: "-11%",
    },
    [theme.breakpoints.down("sm")]: {
      top: "-21%",
      right: "-76%",
      width: "160%",
    },
    [theme.breakpoints.down("xs")]: {
      top: "-10%",
      right: "-76%",
      width: "160%",
    },
    [theme.breakpoints.down(330)]: {
      top: "-12%",
      right: "-86%",
      width: "180%",
    },
  },
  icon: {
    margin: theme.spacing(0, 2),
  },
  subtext: {
    margin: "4rem 0px",
    [theme.breakpoints.down("sm")]: {
      margin: "3rem 0px",
    },
  },
  textContainer: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      alignItems: "center",
    },
  },
}));
