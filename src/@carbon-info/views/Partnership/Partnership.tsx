import React from "react";
import { Box, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import partnershipGlow from "@carbon-info/assets/background/partnershipGlow.svg";
import { allPartnersLogo } from "@carbon-info/assets";
import { ArrowIcon } from "@carbon-info/assets/icons";

const Partnership: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.boxContainer}>
      <Typography variant="h2" color="textPrimary" paragraph noWrap className={classes.noWrap}>
        Partnered with & backed by the blockchain<br /> industry’s foremost builders
      </Typography >
      <Typography variant="button" color="textPrimary">
        See Full Ecosystem <ArrowIcon />
      </Typography>
      <Grid container alignItems="center" justifyContent="center" className={classes.logoContainer} spacing={8}>
        <div id="gradientOver;ay" className={classes.gradientOverlay} />
        <img src={partnershipGlow} alt="glow" className={classes.glowSVG} />
        {allPartnersLogo.map((logo: any, index) => {
          return (
            <Grid item xs={3} key={index}>
              <img src={logo} alt="logo" />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Partnership;

const useStyles = makeStyles((theme: Theme) => ({
  boxContainer: {
    margin: "50vh 0px",
  },
  glowSVG: {
    position: "absolute",
    top: "-100%",
    left: "-10%",
  },
  logoContainer: {
    marginTop: theme.spacing(10),
    position: "relative",
  },
  noWrap: {
    overflow: "visible",
    marginBottom: theme.spacing(8),
  },
  gradientOverlay: {
    position: "absolute",
    height: "100%",
    width: "100%",
    background: "linear-gradient(180deg, rgba(22, 21, 21, 0), rgb(22, 21, 21, 0.8))",
  },
}));