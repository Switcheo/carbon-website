import React from "react";
import { Box, Grid, Hidden, makeStyles, Theme, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import partnershipGlow from "@carbon-info/assets/background/partnershipGlow.svg";
import { allPartnersLogo } from "@carbon-info/assets";
import { CTAButton } from "@carbon-info/components";

const Partnership: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box className={classes.boxContainer}>
      <Typography variant="h2" color="textPrimary" paragraph noWrap={!isMobile} className={classes.noWrap}>
        {/* Partnered with & backed by the blockchain<br /> industry’s foremost builders */}
        {
          isMobile ? <span>Partnered with & <br /> backed by the best</span>
            : <span>Partnered with & backed by the blockchain<br /> industry’s foremost builders</span>
        }
      </Typography >
      <Hidden smDown>
        <CTAButton
          text="SEE FULL ECOSYSTEM"
          link="/#ECOSYSTEM"
        />
      </Hidden>
      <Grid container alignItems="center" justifyContent="center" className={classes.logoContainer} spacing={isMobile ? 2 : 8}>
        {allPartnersLogo.map((logo: any, index) => {
          return (
            <Grid item xs={4} md={3} key={index}>
              <img src={logo} alt="logo" className={classes.logo} />
            </Grid>
          );
        })}
        <div id="gradientOver;ay" className={classes.gradientOverlay} />
        <img src={partnershipGlow} alt="glow" className={classes.glowSVG} />
        <Hidden mdUp>
          <Grid item xs={12} className={classes.cta}>
            <div className={classes.mobileCTAButton}>
              <Typography variant="button" color="textPrimary" align="left">
                <CTAButton
                  text="SEE FULL ECOSYSTEM"
                  link="/#ECOSYSTEM"
                />
              </Typography>
            </div>
          </Grid>
        </Hidden>
      </Grid>
    </Box>
  );
};

export default Partnership;

const useStyles = makeStyles((theme: Theme) => ({
  cta: {
    textAlign: "left",
    zIndex: 3,
  },
  mobileCTAButton: {
    margin: "4rem 0px",
  },
  boxContainer: {
    margin: "50vh 0px",
    [theme.breakpoints.down("sm")]: {
      margin: "30vh 0px",
    },
  },
  glowSVG: {
    position: "absolute",
    top: "-100%",
    left: "-10%",
    pointerEvents: "none",
  },
  logoContainer: {
    marginTop: "5rem",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      marginTop: "3rem",
      padding: "2rem",
    },
  },
  noWrap: {
    overflow: "visible",
    marginBottom: theme.spacing(8),
    [theme.breakpoints.down("sm")]: {
      marginBottom: "3rem",
    },
  },
  gradientOverlay: {
    position: "absolute",
    height: "100%",
    width: "100%",
    pointerEvents: "none",
    background: "linear-gradient(180deg, rgba(22, 21, 21, 0), rgb(22, 21, 21, 0.8))",
  },
  logo: {
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
}));