import React from "react";
import { Box, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import carbonConnected from "@carbon-info/assets/background/carbon-connected.svg";
import featureCardBackgroundLeft from "@carbon-info/assets/background/FeatureCardBackGroundLeft.svg";
import featureCardBackgroundRight from "@carbon-info/assets/background/FeatureCardBackgroundRight.svg";
import { ArrowIcon } from "@carbon-info/assets/icons";

const FeatureCard: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <img src={featureCardBackgroundLeft} alt="featureCardBackgroundLeft" className={classes.backgroundLeft} />
      <img src={featureCardBackgroundRight} alt="featureCardBackgroundRight" className={classes.backgroundRight} />
      <Grid container className={classes.cardContainer}>
        <Grid container item xs={7}>
          <div>
            <Typography color="textPrimary" variant="h2">
              Launch full-featured<br /> financial markets.<br /> No KYC required.
            </Typography>
            <Typography color="textPrimary" variant="body2" className={classes.subtext}>
              Carbon is a third-gen blockchain protocol & <br />custom Layer 2 side chain, built for trading <br /> sophisticated financial instruments at scale.
            </Typography>
            <Typography color="textPrimary" variant="button" display="inline">
              Read Docs
            </Typography>
            <ArrowIcon className={classes.icon} />
          </div>
        </Grid>
        <Grid item xs={5} className={classes.imageContainer}>
          <img src={carbonConnected} alt="carbon-connected" className={classes.image} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeatureCard;

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    display: "relative",
    // background: "red"
  },
  imageContainer: {
    alignItems: "center",
    textAlign: "center",
  },
  cardContainer: {
    alignItems: "center",
    padding: theme.spacing(0, 5, 0, 5),
    maxWidth: "80rem",
    height: "38rem",
    // background: "linear-gradient(353.27deg, rgba(41, 40, 40, 0.11) -9.67%, #161515 20.17%)",
    boxShadow: "inset 62px 98px 100px -60px rgba(36, 36, 36,0.5), inset 0px 1px 40px rgba(85, 85, 85, 0.04)",
    backdropFilter: "blur(3px)",
    borderRadius: "58px",
    textAlign: "start",
    // borderImage: "linear-gradient(to bottom, rgb(116, 232, 232) , rgb(255, 255, 255,0.26))",
    // borderImageSlice: 1,
    border: "1px solid white",
    background: "rgba(0,0,0,0.0)",
    margin: "auto",
  },
  image: {
    width: "90%",
  },
  backgroundLeft: {
    position: "absolute",
    width: "1289.36px",
    height: "1363.2px",
    left: "-455px",
    top: "980px",
  },
  backgroundRight: {
    position: "absolute",
    width: "1522.35px",
    height: "1495.41px",
    right: "-650px",
    top: "1050px",
  },
  icon: {
    margin: theme.spacing(0, 2),
  },
  subtext: {
    margin: theme.spacing(8, 0),
  },
}));