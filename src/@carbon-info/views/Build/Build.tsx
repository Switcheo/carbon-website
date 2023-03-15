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
    <div ref={ref} id="build" style={{ position: "relative" }}>
      <img src={PlanetBackground} className={classes.background} />
      <Box className={classes.boxContainer}>
        <FadeAndSlide visible={inView}>
          <Typography variant="h1" color="textPrimary" style={{ marginBottom: "4.5rem" }}>Build on Carbon</Typography>
          <Grid container justifyContent="center" spacing={isSmallScreen ? 2 : 5}>
            <Grid item xs={12} sm={7} md={4} className={inView && !isMobile ? "animate__animated animate__fadeInLeft" : ""} >
              <CardWithCTA
                title={"Develop on Carbon"}
                description={"Leverage our native source code to fast-track development"}
                link={Path.Footer.Guides}
                icon={DevelopSVG}
              />
            </Grid>
            <Grid item xs={12} sm={7} md={4} className={inView && !isMobile ? "animate__animated animate__fadeInUp" : ""}>
              <CardWithCTA
                title={"Propose a partnership"}
                description={"Working towards a freer financial system"}
                link={Path.Socials.Discussion}
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
    margin: "10vh auto",
    maxWidth: "1400px",
    zIndex: 15,
    [theme.breakpoints.down("sm")]: {
      margin: "5vh 0px",
    },
  },
  background: {
    position: "absolute",
    width: "1887px",
    height: "700px",
    top: "-300px",
    left: "-25%",
    zIndex: 0,
    scale: 1.5,
    [theme.breakpoints.up("xl")]: {
      top: "-250px",
      left: "-7.5rem",
    },
    [theme.breakpoints.only("md")]: {
      left: "-50%",
    },
    [theme.breakpoints.only("sm")]: {
      left: 0,
      marginLeft: "-75%",
    },
    [theme.breakpoints.only("xs")]: {
      width: "100%",
      maxHeight: "243px",
      top: "-100px",
      marginLeft: 0,
      left: 0,
      scale: 2,
    },
  },
}));