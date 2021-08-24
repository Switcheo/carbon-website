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
  // const getPointsAlongPath = (path: any, number: number) => {
  //   const length = path.getTotalLength();
  //   return (new Array(number)).fill(0).map((_, i) => path.getPointAtLength(length / (number - 1) * i))
  // };

  // useEffect(() => {
  //   const svg = d3.select('#roadMapBG');
  //   console.log(svg);
  //   const path = svg.select('path');
  //   const points = getPointsAlongPath(path.node(), 3);
  //   console.log(points)
  //   points.forEach(({ x, y }) => svg.append('circle').attr('cx', x).attr('cy', y)
  //     .attr('r', 15).style('fill', 'red'));
  // }, [])

  // useEffect(() => {
  //   //default view - New market type
  //   //step === 0 === New market type
  //   if (step !== 0) {

  //   }
  // }, [step])

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
        <Grid container alignItems="center" justifyContent="center" className={classes.roadMapContainer} spacing={8} style={{ zIndex: 1 }}>
          {/* <Typography color="textPrimary" className={classes.roadMapTitleText} paragraph>
            New market types
        </Typography> */}
          <img src={roadMapGlow} alt="glow" className={classes.glowSVG} />
          <div className={classes.roadMapSVGContainer} style={{ overflow: "visible", marginTop: "5rem" }}>
            <img src={roadMapBG} alt="bg" className={classes.roadMapSVG} style={{ zIndex: 2, pointerEvents: "none", width: "110vw" }} />
            <div style={{
              borderRadius: "48%",
              position: "absolute",
              top: 0,
              zIndex: 2,
              transform: `rotate(${step * 0}deg)`, transition: "all 1s ease-in",
              width: "100%",
            }}>
              {/* <div className={classes.centerSphereContainer} id="sphere" style={{ transform: `rotate(-${step * 10}deg)`, transition: "all 1s ease-in" }}>
                <div style={{ position: "relative", height: "5rem", width: "5rem" }}>
                  <CircularProgressbar
                    className={classes.circular}
                    value={20}
                    styles={buildStyles({
                      pathColor: `rgba(255, 255, 255, 1)`,
                      trailColor: 'rgba(255, 255, 255, 0.3)',
                    })}
                  />
                  <img src={roadMapSphere} alt="roadMapSphere" className={classes.centerSphere} />
                </div>
              </div> */}
              <SphereWithText step={view[0]} percent={10} text="insert text" isMobile={isMobile} isTablet={isTablet} />
              <SphereWithText step={view[1]} percent={10} text="Next Lvl" isMobile={isMobile} isTablet={isTablet} />
              <SphereWithText step={view[2]} percent={10} text="Cosmos IBC interoperatibility" isMobile={isMobile} isTablet={isTablet} />
              <SphereWithText step={view[3]} percent={20} text="New market type" isMobile={isMobile} isTablet={isTablet} />
              <SphereWithText step={view[4]} percent={30} text="Cross-chain swap exchange" isMobile={isMobile} isTablet={isTablet} />
              <SphereWithText step={view[5]} percent={30} text="Lorem Ip" isMobile={isMobile} isTablet={isTablet} />
              <SphereWithText step={view[6]} percent={30} text="To the Moon" isMobile={isMobile} isTablet={isTablet} />
              {/* <SphereWithText step={step - 1} />
              <SphereWithText step={step + 1} /> */}
            </div>
          </div>
        </Grid>
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
    // marginRight: "-1%",
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
    zIndex: 1,
    // marginBottom: "-38%",
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      // top: "-30%",
      marginBottom: "0%",
    },
    [theme.breakpoints.down("xs")]: {
      // top: "-10rem",
    },
  },
  roadMapSVGContainer: {
    position: "relative",
    // width: "100rem",
    marginBottom: "-43%",
    [theme.breakpoints.down("sm")]: {
      // width: "100%",
      // height: "15rem",
      marginBottom: "-38%",
    },
    [theme.breakpoints.down("xs")]: {
      // width: "100%",
      // height: "15rem",
      marginBottom: "-26%",
    },
  },
  glowSVG: {
    position: "absolute",
    // top: "-100%",
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
    // letterSpacing: "-3px",
  },
}));
