import React from "react";
import { Box, Grid, Hidden, makeStyles, Theme, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import roadMap from "@carbon-info/assets/background/roadMap.svg";
import roadMapGlow from "@carbon-info/assets/background/roadMapGlow.svg";
import { CTAButton, FadeAndSlide } from "@carbon-info/components";
import { useInView } from "react-intersection-observer";

const RoadMap: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <div ref={ref}>
      <Box className={classes.boxContainer}>
        <FadeAndSlide visible={inView}>
          <Typography variant="h2" color="textPrimary" paragraph noWrap className={classes.noWrap}>
            {
              isMobile ? <span>Building<br />towards change</span>
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
        <Grid container alignItems="center" justifyContent="center" className={classes.roadMapContainer} spacing={8}>
          <Typography color="textPrimary" className={classes.roadMapTitleText} paragraph>
            New market types
        </Typography>
          <img src={roadMapGlow} alt="glow" className={classes.glowSVG} />
          <div className={classes.roadMapSVGContainer}>
            <img src={roadMap} alt="roadMap" className={classes.roadMapSVG} />
          </div>
        </Grid>
        <Typography color="textPrimary" variant="h2" paragraph>
          20%
      </Typography>
        <Typography color="textPrimary" variant="body2">
          (Ignore this section - Animation WIP) <br />
        Addition of new derivatives markets including options,<br /> binary options and physically settled markets
      </Typography>
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
    </div>
  );
};

export default RoadMap;

const useStyles = makeStyles((theme: Theme) => ({
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
    marginBottom: "-38%",
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      top: "-30%",
      transform: "scale(0.8)",
      marginBottom: "0%",
    },
    [theme.breakpoints.down("xs")]: {
      top: "-10rem",
    },
  },
  roadMapSVGContainer: {
    [theme.breakpoints.down("sm")]: {
      // width: "100%",
      height: "15rem",
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
    marginTop: "10rem",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      marginTop: "3rem",
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