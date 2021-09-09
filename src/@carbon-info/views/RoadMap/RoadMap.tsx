import React, { useState } from "react";
import { Box, Fade, Grid, Hidden, makeStyles, Theme, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import roadMapBG from "@carbon-info/assets/background/roadmapLineBg.png";
import roadMapGlow from "@carbon-info/assets/background/roadMapGlow.svg";
import { CTAButton, FadeAndSlide } from "@carbon-info/components";
import { useInView } from "react-intersection-observer";
import { RoadMapButton, SphereWithText } from "./components";
import { roadMapAnimationItems } from "@carbon-info/constants";
// import * as d3 from "d3";

const initialViewState = (data: any) => {
  let result: number[] = [0];
  for (let i = 1; i < data.length / 2; i++) {
    result.unshift(i * -1);
    result.push(i);
  }
  if (data.length % 2 === 0) result.push((result.length / 2) + 1);
  return result;
};

const initialCounter = (data: any) => {
  if (data.length % 2 === 0) return Math.floor(data.length / 2) - 1;
  else return Math.floor(data.length / 2);
};

const RoadMap: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isWideDesktop = useMediaQuery(theme.breakpoints.up("xl"));
  const [progressAndDescriptionCounter, setProgressAndDescriptionCounter] = useState<any>(initialCounter(roadMapAnimationItems));
  const [step, setStep] = useState<any>(0);
  const [view, setView] = useState(initialViewState(roadMapAnimationItems));
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: true,
  });

  function useThrottle(func: any, delay: any) {
    const [inThrottle, setInThrottle] = useState<any>(false);
    const throttledFunc = function () {
      if (!inThrottle) {
        func();
        setInThrottle(true);
        setTimeout(() => {
          setInThrottle(false);
        }, delay);
      }
      // saveTimeout(newTimeout);
    };
    return throttledFunc;
  }

  const incrementStep = () => {
    setProgressAndDescriptionCounter((prev: number) => {
      return prev + 1 > roadMapAnimationItems.length - 1 ? 0 : prev + 1;
    });
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
    setProgressAndDescriptionCounter((prev: number) => {
      return prev - 1 < 0 ? roadMapAnimationItems.length - 1 : prev - 1;
    });
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
    <div ref={ref} id="roadMap">
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
              text="See Full Roadmap"
              link="/roadmap"
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
                {roadMapAnimationItems.map((items, index) => {
                  return (
                    <SphereWithText key={index} step={view[index]} percent={items.progress} text={items.title} isMobile={isMobile} isTablet={isTablet} isWideDesktop={isWideDesktop} />
                  );
                })}
              </div>
            </div>
          </Grid>
        </FadeAndSlide>
        <Typography color="textPrimary" variant="h2" paragraph className={classes.percentage}>
          {roadMapAnimationItems[progressAndDescriptionCounter].progress}%
        </Typography>
        <Fade in={true}>
          <Typography color="textPrimary" variant="body2" className={classes.roadMapDescription}>
            {roadMapAnimationItems[progressAndDescriptionCounter].description}
          </Typography>
        </Fade>
        <Typography color="textPrimary" variant="body2" style={{ color: "#c4c4c4" }}>
          - Read more on roadmap page -
          {/* <CTAButton text={"Read More"} link={"https://staging.carbon.network/roadmap"} /> */}
        </Typography>
        <br />
        <br />
        <Grid container style={{ zIndex: 9, position: "relative" }}>
          <Grid item xs={6}>
            <RoadMapButton direction="left" callback={useThrottle(incrementStep, 900)} />
          </Grid>
          <Grid item xs={6}>
            <RoadMapButton direction="right" callback={useThrottle(decrementStep, 900)} />
          </Grid>
        </Grid>
        <Hidden mdUp>
          <div className={classes.button}>
            <CTAButton
              text="See Full Roadmap"
              link="/roadmap"
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
  roadMapDescription: {
    maxWidth: "46rem",
    margin: "auto",
    textOverflow: "ellipsis",
    overflow: "hidden",
    lineClamp: 2,
    boxOrient: "vertical",
    display: "-webkit-box",
  },
  percentage: {
    transition: "all 1s ease-in",
    fontWeight: 600,
    fontSize: "3.138rem",
    [theme.breakpoints.down(1080)]: {
      marginTop: "3rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
    },
  },
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
      width: "125vw",
      // left: "0%"
      // top: "-10rem",
    },
  },
  roadMapSVGContainer: {
    pointerEvents: "none",
    position: "relative",
    marginBottom: "-38vw",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "-48%",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "-30%",
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
