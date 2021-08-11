import React from "react";
import { Box, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import roadMap from "@carbon-info/assets/background/roadMap.svg";
import roadMapGlow from "@carbon-info/assets/background/roadMapGlow.svg";
import { ArrowIcon } from "@carbon-info/assets/icons";

const RoadMap: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.boxContainer}>
      <Typography variant="h2" color="textPrimary" paragraph noWrap className={classes.noWrap}>
        Building towards change
      </Typography >
      <Typography variant="button" color="textPrimary">
        See Feature Map <ArrowIcon />
      </Typography>
      <Grid container alignItems="center" justifyContent="center" className={classes.roadMapContainer} spacing={8}>
        <Typography color="textPrimary" className={classes.roadMapTitleText} paragraph>
          New market types
        </Typography>
        <img src={roadMapGlow} alt="glow" className={classes.glowSVG} />
        <img src={roadMap} alt="roadMap" />
      </Grid>
    </Box>
  );
};

export default RoadMap;

const useStyles = makeStyles((theme: Theme) => ({
  boxContainer: {
    margin: "50vh 0px",
  },
  glowSVG: {
    position: "absolute",
    top: "-100%",
    left: "-10%",
    pointerEvents: "none",
  },
  roadMapContainer: {
    marginTop: theme.spacing(10),
    position: "relative",
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