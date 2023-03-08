import PlanetBackground from "@carbon-info/assets/background/planetBackground.svg";
import DevelopSVG from "@carbon-info/assets/non-animated/develop.svg";
import PitchSVG from "@carbon-info/assets/non-animated/pitch.svg";
import ProposeSVG from "@carbon-info/assets/non-animated/propose.svg";
import { CardWithCTA, FadeAndSlide } from "@carbon-info/components";
import { Path } from "@carbon-info/constants";
import { Box, Grid, Theme, Typography, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import "animate.css";
import React from "react";
import { useInView } from "react-intersection-observer";

const Build: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
          <Grid container justifyContent="flex-start" spacing={isMobile ? 5 : 10}>
            <Grid item xs={12} md={4} className={inView && !isMobile ? "animate__animated animate__fadeInLeft" : ""}>
              <CardWithCTA
                title={"Develop on Carbon"}
                description={"Leverage our native source code to fast-track development"}
                link={Path.Footer.Guides}
                icon={DevelopSVG}
              />
            </Grid>
            <Grid item xs={12} md={4} className={inView && !isMobile ? "animate__animated animate__fadeInUp" : ""}>
              <CardWithCTA
                title={"Propose a partnership"}
                description={"Working towards a freer financial system"}
                link={"mailto:marketing@switcheo.network"}
                icon={ProposeSVG}
              />
            </Grid>
            <Grid item xs={12} md={4} className={inView && !isMobile ? "animate__animated animate__fadeInRight" : ""}>
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
    margin: "15vh auto",
    maxWidth: "1480px",
    zIndex: 10,
    [theme.breakpoints.only("xl")]: {
      maxWidth: "1830px",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "10vh 0px",
    },
  },
  background: {
    position: "absolute",
    width: "1887px",
    top: "-600px",
    left: "45%",
    marginLeft: "-50%",
    [theme.breakpoints.up("xl")]: {
      width: "110%",
      top: "-800px",
    },
  },
}));