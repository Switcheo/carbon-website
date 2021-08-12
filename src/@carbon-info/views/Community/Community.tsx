import React from "react";
import { Box, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import communityBackGroundLeft from "@carbon-info/assets/background/communityBackGroundLeft.svg";
import communityBackGroundRight from "@carbon-info/assets/background/communityBackGroundRight.svg";
import communityHero from "@carbon-info/assets/animated/communityHero.svg";
import { ArrowIcon } from "@carbon-info/assets/icons";

const Community: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.boxContainer}>
      <img src={communityBackGroundLeft} alt="communityBackGroundLeft" className={classes.backgroundLeft} />
      <img src={communityBackGroundRight} alt="communityBackGroundRight" className={classes.backgroundRight} />
      <Grid container className={classes.container} spacing={8}>
        <Grid item xs={12} md={6}>
          <img src={communityHero} alt="communityHero" className={classes.image} />
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classes.textContainer}>
            <Typography color="textPrimary" variant="h2" align="left" paragraph>
              Owned and driven<br />by community
          </Typography>
            <br />
            <Typography color="textPrimary" variant="subtitle1" align="left" paragraph>
              Using the SWTH token, anyone can play a<br />part in shaping Carbon’s journey towards<br />the future of finance.
          </Typography>
            <br />
            <Typography color="textPrimary" variant="button" align="left" paragraph>
              Buy Token
            <ArrowIcon className={classes.icon} />
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Community;

const useStyles = makeStyles((theme: Theme) => ({
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
    // maxWidth: "100vw",
    // position: "relative"
  },
  dash: {
    margin: theme.spacing(6, 0),
    height: "1.5rem",
  },
  backgroundLeft: {
    position: "absolute",
    left: "-700px",
    top: "-140px",
    pointerEvents: "none",
  },
  backgroundRight: {
    position: "absolute",
    right: "-329.33px",
    top: "-140.32px",
    pointerEvents: "none",
  },
  subtitle: {
    marginTop: theme.spacing(5.5),
  },
  icon: {
    margin: theme.spacing(0, 2),
  },
  image: {
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      top: 0,
      left: 0,
      width: "100%",
    },
  },
}));