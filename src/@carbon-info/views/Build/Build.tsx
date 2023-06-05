import PlanetBackground from "@carbon-info/assets/background/planetBackground.svg";
import DevelopSVG from "@carbon-info/assets/non-animated/develop.svg";
import PitchSVG from "@carbon-info/assets/non-animated/pitch.svg";
import ProposeSVG from "@carbon-info/assets/non-animated/propose.svg";
import { CardWithCTA, FadeAndSlide } from "@carbon-info/components";
import { Path } from "@carbon-info/constants";
import { isWidth } from "@carbon-info/utils/environment";
import { Box, Grid, Theme, Typography, makeStyles } from "@material-ui/core";
import "animate.css";
import React from "react";
import { useInView } from "react-intersection-observer";

const Build: React.FC = () => {
  const classes = useStyles();
  const isMobile = isWidth("sm");
  const isSmallScreen = isWidth("md");

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.35,
    triggerOnce: true,
  });

  return (
    <div ref={ref} id="build">
      <FadeAndSlide visible={inView}>
        <img src={PlanetBackground} className={classes.background} />
      </FadeAndSlide>
      <Box className={classes.boxContainer}>
        <FadeAndSlide visible={inView}>
          <Typography variant="h1" color="textPrimary" style={{ marginBottom: "4.5rem" }}>Build on Carbon</Typography>
          <Grid container justifyContent="center" spacing={isSmallScreen ? 2 : 5}>
            <Grid item xs={12} sm={7} md={4} className={inView && !isMobile ? "animate__animated animate__fadeInLeft" : ""} >
              <CardWithCTA
                title={"Develop on Carbon Core"}
                description={"Leverage our native source code to fast-track development"}
                link={Path.Docs.Guides}
                icon={DevelopSVG}
              />
            </Grid>
            <Grid item xs={12} sm={7} md={4} className={inView && !isMobile ? "animate__animated animate__fadeInUp" : ""}>
              <CardWithCTA
                title={"Launch on Carbon EVM"}
                description={"Learn everything you need to deploy an EVM-compatible smart contract on Carbon"}
                link={Path.Docs.Discussion}
                icon={ProposeSVG}
              />
            </Grid>
            <Grid item xs={12} sm={7} md={4} className={inView && !isMobile ? "animate__animated animate__fadeInRight" : ""}>
              <CardWithCTA
                title={"Pitch your project"}
                description={"Need funding to kickstart your project on Carbon?"}
                link={Path.Footer.SwitcheoDevelopmentFund}
                icon={PitchSVG}
              />
            </Grid>
          </Grid>
        </FadeAndSlide >
      </Box >
    </div >
  );
};

export default Build;

const useStyles = makeStyles((theme: Theme) => ({
  boxContainer: {
    position: "relative",
    margin: "15rem auto",
    maxWidth: "1400px",
    zIndex: 15,
    [theme.breakpoints.down("sm")]: {
      margin: "15rem 0px",
    },
  },
  background: {
    position: "absolute",
    width: "1887px",
    height: "732px",
    top: "-300px",
    left: "50%",
    marginLeft: "-943.5px", // half of width
    zIndex: 0,
    scale: 1.5,
    [theme.breakpoints.up("xl")]: {
      top: "-250px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% + 48px)",
      left: "50%",
      marginLeft: "calc(-50% - 24px)",
    },
    [theme.breakpoints.only("xs")]: {
      top: "-75px",
      maxHeight: "243px",
    },
  },
}));