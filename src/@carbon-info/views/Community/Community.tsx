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
        <Grid item xs={6}>
          <img src={communityHero} alt="communityHero" />
        </Grid>
        <Grid item xs={6}>
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
    // left: "-8%",
    // top: "0%",
    // width: "30%",
    // width: "965.1px",
    // height: "965.09px",
    left: "-700px",
    top: "-140px",
  },
  backgroundRight: {
    position: "absolute",
    // width: "825.19px",
    // height: "825.2px",
    right: "-329.33px",
    top: "-140.32px",
  },
  subtitle: {
    marginTop: theme.spacing(5.5),
  },
  icon: {
    margin: theme.spacing(0, 2),
  },
}));