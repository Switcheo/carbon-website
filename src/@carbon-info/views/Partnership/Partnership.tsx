import React from "react";
import { Box, Grid, Grow, makeStyles, Theme, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import partnershipGlow from "@carbon-info/assets/background/partnershipGlow.svg";
import { allPartnersLogo } from "@carbon-info/assets";
import { FadeAndSlide } from "@carbon-info/components";
import { useInView } from "react-intersection-observer";

const Partnership: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.35,
    triggerOnce: true,
  });
  return (
    <div ref={ref} id="partnership">
      <Box className={classes.boxContainer}>
        <FadeAndSlide visible={inView}>
          <Typography variant="h2" color="textPrimary" paragraph noWrap={!isTablet && !isSmallScreen} className={classes.noWrap}>
            Parterned with and backed by the best.
          </Typography >
        </FadeAndSlide>
        <Grid container alignItems="center" justifyContent="center" className={classes.logoContainer} spacing={isTablet ? 4 : 8}>
          {allPartnersLogo.map((logo: any, index) => {
            return (
              <Grow in={inView} key={logo + index} timeout={(index + 1) * 200 > 1000 ? 1000 : (index + 1) * 200}>
                <Grid item xs={index < 2 ? 6 : 4} className={classes.logoGrid}>
                  <img src={logo} alt="logo" className={classes.logo} />
                </Grid>
              </Grow>
            );
          })}
          <img src={partnershipGlow} alt="glow" className={classes.glowSVG} />
        </Grid>
      </Box>
    </div>
  );
};

export default Partnership;

const useStyles = makeStyles((theme: Theme) => ({
  boxContainer: {
    margin: "25vh 0px",
    [theme.breakpoints.down("sm")]: {
      margin: "10vh 0px",
    },
  },
  glowSVG: {
    position: "absolute",
    left: "-8%",
    zIndex: 0,
    pointerEvents: "none",
    [theme.breakpoints.down("sm")]: {
      width: "104%",
      left: "-8%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "150%",
      left: "-25%",
    },
  },
  logoContainer: {
    margin: "auto",
    position: "relative",
    maxWidth: "1200px",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "3rem",
      gap: 12,
    },
    [theme.breakpoints.down("xs")]: {
      gap: 0,
    },
  },
  noWrap: {
    overflow: "visible",
    marginBottom: theme.spacing(8),
    [theme.breakpoints.down("sm")]: {
      marginBottom: "3rem",
    },
  },
  logo: {
    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "85%",
    },
  },
  logoGrid: {
    zIndex: 1,
    [theme.breakpoints.down("sm")]: {
      margin: "0px -2rem",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0px",
    },
  },
}));