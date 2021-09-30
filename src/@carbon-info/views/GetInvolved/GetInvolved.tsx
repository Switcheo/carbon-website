import React from "react";
import { Box, Grid, makeStyles, Theme, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import GetInvolvedGlow from "@carbon-info/assets/background/getInvolvedGlow.svg";
import GetInvolvedBG from "@carbon-info/assets/background/getInvolvedBG.png";
import ProposeSVG from "@carbon-info/assets/non-animated/propose.png";
import DevelopSVG from "@carbon-info/assets/non-animated/develop.png";
import PitchSVG from "@carbon-info/assets/non-animated/pitch.png";
import { CardWithCTA, FadeAndSlide } from "@carbon-info/components";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import { Path } from "@carbon-info/constants";

const GetInvolved: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down(400));
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.15,
    triggerOnce: true,
  });
  return (
    <div ref={ref} id="getInvolved">
      <Box className={classes.boxContainer}>
        <img src={GetInvolvedBG} alt="bg" className={clsx(classes.background, { open: inView })} />
        <Grid container className={classes.contentContainer} justifyContent="flex-start" spacing={isTablet ? 4 : 8}>
          <Grid item xs={12} md={6}>
            <Typography color="textPrimary" variant={isTablet && !isMobile ? "h1" : "h2"} align="left" className={classes.text}>
              <FadeAndSlide visible={inView}>
                <div className={classes.textContainer}>
                  Get involved in building the new face of finance
                </div>
              </FadeAndSlide>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6} className={classes.card}>
            <CardWithCTA
              title={"Develop on Carbon"}
              description={"Leverage our native source code to fast-track development"}
              ctaText={"Read Docs"}
              link={"/#document"}
              icon={DevelopSVG}
              isMobile={isTablet}
            />
          </Grid>
          <Grid item xs={12} sm={6} md style={{ marginTop: isTablet ? 0 : "-42%" }} className={classes.card}>
            <CardWithCTA
              title={"Propose a partnership"}
              description={"Working towards a freer financial system"}
              ctaText={"Get In Touch"}
              link={"mailto:marketing@switcheo.network"}
              icon={ProposeSVG}
              bigSVG
            />
          </Grid>
          <Grid item xs={12} sm={6} md className={classes.card}>
            <CardWithCTA
              title={"Pitch a project"}
              description={"Need funding to kickstart your project on Carbon?"}
              ctaText={"Apply Now"}
              link={Path.Footer.SwitcheoDevelopmentFund}
              icon={PitchSVG}
              isMobile={isTablet}
              overwriteCSS={{ width: isSmallMobile ? "60vw" : isMobile ? "35rem" : "23rem", display: "block", maxWidth: "100%" }}
            />
          </Grid>
          <img src={GetInvolvedGlow} alt="glow" className={classes.glowSVG} />
        </Grid>
      </Box>
    </div>
  );
};

export default GetInvolved;

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    zIndex: 3,
  },
  boxContainer: {
    margin: "50vh 0px",
    [theme.breakpoints.down("sm")]: {
      margin: "20vh 0px",
    },
  },
  textContainer: {
    minWidth: "30rem",
    [theme.breakpoints.down("sm")]: {
      width: "fit-content",
      maxWidth: "42rem",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "auto",
      maxWidth: "30rem",
      width: "fit-content",
    },
    [theme.breakpoints.down(330)]: {
      margin: "auto",
      maxWidth: "30rem",
      minWidth: "30rem",
      width: "fit-content",
    },
  },
  background: {
    pointerEvents: "none",
    marginBottom: "-100%",
    opacity: 0,
    transform: "translate(40px, 40px) scale(0.95)",
    transition: "opacity ease-in 0.3s, transform ease-in 0.4s",
    "&.open": {
      opacity: 1,
      transform: "translate(0px,0px) scale(1)",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "-110%",
      width: "200%",
    },
  },
  contentContainer: {
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 4rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0px 1rem",
    },
  },
  glowSVG: {
    position: "absolute",
    top: "-20%",
    left: "-40%",
    pointerEvents: "none",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      display: "block",
      top: "49%",
      left: "-5%",
      width: "182%",
    },
  },
  text: {
    margin: theme.spacing(3, 3),
    [theme.breakpoints.down("sm")]: {
      display: "content",
    },
  },
}));