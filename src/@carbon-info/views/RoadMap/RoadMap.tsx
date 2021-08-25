import React, { useState } from "react";
import { Box, Grid, Hidden, makeStyles, Theme, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import roadMapBG from "@carbon-info/assets/background/roadmapLineBg.png";
import roadMapGlow from "@carbon-info/assets/background/roadMapGlow.svg";
import { CTAButton, FadeAndSlide } from "@carbon-info/components";
import { useInView } from "react-intersection-observer";
import { RoadMapButton, SphereWithText } from "./components";
// import * as d3 from "d3";

const RoadMap: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isWideDesktop = useMediaQuery(theme.breakpoints.up("xl"));
  const [step, setStep] = useState<any>(0);
  const [view, setView] = useState([-3, -2, -1, 0, 1, 2, 3]);
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: true,
  });

  const incrementStep = () => {
    setStep((prev: number) => setStep(prev + 1));
    setView((prev): any => {
      let temp = [prev[prev.length - 1]];
      for (let i = 0; i < prev.length - 1; i++) {
        temp.push(prev[i]);
      }
      return temp;
    });
  };

  const decrementStep = () => {
    setStep((prev: number) => setStep(prev - 1));
    setView((prev): any => {
      let temp = [prev[0]];
      for (let i = prev.length - 1; i > 0; i--) {
        temp.unshift(prev[i]);
      }
      return temp;
    });
  };

  return (
    <div ref={ref}>
      <Box className={classes.boxContainer}>
        <FadeAndSlide visible={inView}>
          <Typography variant="h2" color="textPrimary" paragraph noWrap className={classes.noWrap}>
            {
              isTablet ? <span>Building<br />towards change</span>
                : <span>Building towards change</span>
            }

          </Typography >
          <Hidden smDown>
            <CTAButton
              text="SEE FEATURE MAP"
              link="/#ECOSYSTEM"
            />
          </Hidden>
        </FadeAndSlide>
        <FadeAndSlide visible={inView} delay={10000}>
          <Grid container alignItems="center" justifyContent="center" className={classes.roadMapContainer} spacing={8} style={{ zIndex: 1 }}>
            <img src={roadMapGlow} alt="glow" className={classes.glowSVG} />
            <div className={classes.roadMapSVGContainer} style={{ overflow: "visible", marginTop: "5rem" }}>
              <Hidden lgDown>
                <div style={{ pointerEvents: "none", background: "linear-gradient(to left, rgb(22, 21, 21,1),transparent,transparent)", width: "100vw", height: "100vh", top: 0, right: 0, zIndex: 3, position: "absolute" }} />
                <div style={{ pointerEvents: "none", background: "linear-gradient(to right, rgb(22, 21, 21,1),transparent,transparent)", width: "100vw", height: "100vh", top: 0, left: 0, zIndex: 3, position: "absolute" }} />
              </Hidden>
              <img src={roadMapBG} alt="bg" className={classes.roadMapSVG} />
              <div style={{
                borderRadius: "48%",
                position: "absolute",
                top: 0,
                zIndex: 2,
                transform: `rotate(${step * 0}deg)`, transition: "all 0.3s ease-in",
                width: "100%",
              }}>
                <SphereWithText step={view[0]} percent={10} text="insert text" isMobile={isMobile} isTablet={isTablet} isWideDesktop={isWideDesktop} />
                <SphereWithText step={view[1]} percent={10} text="Next Lvl" isMobile={isMobile} isTablet={isTablet} isWideDesktop={isWideDesktop} />
                <SphereWithText step={view[2]} percent={10} text="Cosmos IBC interoperatibility" isMobile={isMobile} isTablet={isTablet} isWideDesktop={isWideDesktop} />
                <SphereWithText step={view[3]} percent={20} text="New market type" isMobile={isMobile} isTablet={isTablet} isWideDesktop={isWideDesktop} />
                <SphereWithText step={view[4]} percent={30} text="Cross-chain swap exchange" isMobile={isMobile} isTablet={isTablet} isWideDesktop={isWideDesktop} />
                <SphereWithText step={view[5]} percent={30} text="Lorem Ip" isMobile={isMobile} isTablet={isTablet} isWideDesktop={isWideDesktop} />
                <SphereWithText step={view[6]} percent={30} text="To the Moon" isMobile={isMobile} isTablet={isTablet} isWideDesktop={isWideDesktop} />
              </div>
            </div>
          </Grid>
        </FadeAndSlide>
        <Typography color="textPrimary" variant="h2" paragraph>
          20%
      </Typography>
        <Typography color="textPrimary" variant="body2">
          Addition of new derivatives markets including options,<br /> binary options and physically settled markets
      </Typography>
        <br />
        <br />
        <Grid container style={{ zIndex: 9, position: "relative" }}>
          <Grid item xs={6}>
            <RoadMapButton direction="left" callback={incrementStep} />
          </Grid>
          <Grid item xs={6}>
            <RoadMapButton direction="right" callback={decrementStep} />
          </Grid>
        </Grid>
        <Hidden mdUp>
          <div className={classes.button}>
            <CTAButton
              text="SEE FEATURE MAP"
              link="https://app.dem.exchange"
              CTA
            />
          </div>
        </Hidden>
      </Box>
    </div >
  );
};

export default RoadMap;

const useStyles = makeStyles((theme: Theme) => ({
  circular: {
    position: "absolute",
  },
  centerSphere: {
    position: "absolute",
    width: "100%",
  },
  button: {
    margin: "7rem",
  },
  boxContainer: {
    margin: "50vh 0px",
    [theme.breakpoints.down("sm")]: {
      margin: "10vh 0px",
    },
  },
  roadMapSVG: {
    zIndex: 2,
    width: "110vw",
    pointerEvents: "none",
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      marginBottom: "0%",
      width: "140vw",
    },
    [theme.breakpoints.down("xs")]: {
      width: "170vw",
      // left: "0%"
      // top: "-10rem",
    },
  },
  roadMapSVGContainer: {
    pointerEvents: "none",
    position: "relative",
    marginBottom: "-42vw",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "-48%",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "-43%",
    },
    [theme.breakpoints.up("xl")]: {
      marginBottom: "-42vw",
    },
  },
  glowSVG: {
    position: "absolute",
    left: "-10%",
    pointerEvents: "none",
    [theme.breakpoints.down("sm")]: {
      width: "150%",
    },
  },
  roadMapContainer: {
    marginTop: "7rem",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      marginTop: "6rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "9rem",
    },
  },
  noWrap: {
    overflow: "visible",
    marginBottom: theme.spacing(4),
  },
  roadMapTitleText: {
    fontFamily: "TyrosPro",
    fontWeight: 300,
    fontSize: "2.063rem",
    lineHeight: "2.228rem",
  },
}));
