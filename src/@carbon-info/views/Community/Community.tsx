import React from "react";
import { Box, Grid, Hidden, makeStyles, Theme, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import communityBackGroundLeft from "@carbon-info/assets/background/communityBackGroundLeft.svg";
import communityBackGroundRight from "@carbon-info/assets/background/communityBackGroundRight.svg";
import communityHero from "@carbon-info/assets/non-animated/communityHeroSVG.png";
import { CTAButton, FadeAndSlide } from "@carbon-info/components";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import { Path } from "@carbon-info/constants";

const Community: React.FC = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles();
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
    triggerOnce: true,
  });
  return (
    <div ref={ref}>
      <Box className={classes.boxContainer}>
        <Hidden smDown>
          <img src={communityBackGroundLeft} alt="communityBackGroundLeft" className={clsx(classes.backgroundLeft, { open: inView })} />
          <img src={communityBackGroundRight} alt="communityBackGroundRight" className={clsx(classes.backgroundRight, { open: inView })} />
        </Hidden>
        <Grid container className={classes.container} spacing={8}>
          <Grid item xs={12} md={6}>
            <img src={communityHero} alt="communityHero" className={clsx(classes.image, { open: inView })} />
          </Grid>
          <Grid item xs={12} md={6}>
            <FadeAndSlide visible={inView} transform={[20, 0]} delay={0.6}>
              <div className={classes.textContainer}>
                <Typography color="textPrimary" variant={isTablet && !isMobile ? "h1" : "h2"} align="left" paragraph className={classes.title}>
                  Owned and driven by community
                </Typography>
                <br />
                <Typography color="textPrimary" variant={isTablet && !isMobile ? "subtitle2" : "subtitle1"} align="left" paragraph className={classes.subtitle}>
                  Using the Carbon &#40;$SWTH&#41; Token, anyone can play a part in shaping Carbon’s journey towards the future of finance.
                </Typography>
                <br />
                <Typography align="left" paragraph component={"span"}>
                  <CTAButton
                    text="FIND OUT MORE"
                    link={Path.FindOutMore}
                    CTA
                  />
                </Typography>
              </div>
            </FadeAndSlide>
          </Grid>
        </Grid>
      </Box >

    </div>
  );
};

export default Community;

const useStyles = makeStyles((theme: Theme) => ({
  subtitle: {
    maxWidth: "35rem",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "42rem",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "32rem",
    },
  },
  title: {
    maxWidth: "41rem",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "32rem",
    },
  },
  boxContainer: {
    margin: "40vh 0px",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      margin: "10vh 0px",
    },
  },
  textContainer: {
    margin: "auto",
    width: "fit-content",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  backgroundLeft: {
    position: "absolute",
    left: "-52%",
    top: "-19%",
    width: "100%",
    pointerEvents: "none",
    opacity: 0,
    transform: "translate(-40px, 0px)",
    transition: "opacity ease-in 0.3s, transform ease-in 0.4s",
    "&.open": {
      opacity: 1,
      transform: "translate(0px,0px)",
    },
  },
  backgroundRight: {
    position: "absolute",
    right: "-18%",
    top: "-20%",
    width: "67%",
    pointerEvents: "none",
    opacity: 0,
    transform: "translate(40px, 40px)",
    transition: "opacity ease-in 0.3s, transform ease-in 0.4s",
    "&.open": {
      opacity: 1,
      transform: "translate(0px,0px)",
    },
  },
  image: {
    opacity: 0,
    transitionDelay: "0.1s",
    transform: "translate(0px, 0px) scale(0.9)",
    transition: "opacity ease-in 0.3s, transform ease-in 0.4s",
    "&.open": {
      opacity: 1,
      transform: "translate(0px,0px) scale(1)",
    },
    margin: "-3rem 0px 0px -5rem",
    [theme.breakpoints.down("md")]: {
      position: "relative",
      width: "100%",
      margin: "-1rem 0px 0px -2rem",
    },
    [theme.breakpoints.down(1100)]: {
      position: "relative",
      width: "100%",
      margin: "-1rem 0px 0px -2rem",
    },
    [theme.breakpoints.down(1060)]: {
      position: "relative",
      width: "100%",
      margin: "-5rem 0px 0px -2rem",
    },
    [theme.breakpoints.down(961)]: {
      position: "relative",
      width: "100%",
      margin: "-1rem 0px 0px -2rem",
    },
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      width: "57%",
      margin: "0rem 0px 0px 0rem",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "4rem 0px -2rem 0rem",
      position: "relative",
      width: "80%",
    },
  },
}));