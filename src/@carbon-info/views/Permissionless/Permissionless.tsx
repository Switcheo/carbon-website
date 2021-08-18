import React from "react";
import { Box, Grid, Hidden, makeStyles, Theme, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import permissionlessSVG from "@carbon-info/assets/non-animated/permissionlessHeroSVG.png";
import permissionlessGlowSVG from "@carbon-info/assets/background/permissionless-glow.svg";
import { CardWithIcon } from "@carbon-info/components";
import { DecentralizedIcon, MilitaryIcon, TrustlessIcon } from "@carbon-info/assets";

const Permissionless: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Grid container spacing={8}>
        <Grid item xs={12} md={6} className={classes.heroSVGContainer}>
          <img src={permissionlessSVG} alt="permissionless" className={classes.heroSVG} />
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classes.description}>
            <Typography color="textPrimary" variant={isTablet && !isMobile ? "h1" : "h2"} align="left" className={classes.title}>
              Permissionless.<br />Zero restrictions.<br />Decentralized.
            </Typography>
            <Typography color="textPrimary" variant={isTablet && !isMobile ? "subtitle2" : isMobile ? "subtitle1" : "body1"} align="left">
              {
                isTablet && !isMobile
                  ? <span>
                    Carbon gives back control along with<br /> the freedom to transact without limits
                  </span>
                  : <span>
                    Carbon gives back control along <br />with the freedom to transact <br />without limits
                  </span>
              }

            </Typography>
          </div>
        </Grid>
      </Grid>
      <Grid container className={classes.cardContainer}>
        <Hidden smDown>
          <img src={permissionlessGlowSVG} alt="permissionless-glow" className={classes.glowSVG} />
        </Hidden>
        <Grid item xs={12} sm={6} md={4} className={classes.cardGridContainer}>
          <CardWithIcon
            title={"Trustless, zero custody"}
            description={"Built on Tendermint Core to facilitate transactions securely"}
            icon={<TrustlessIcon />}
            size="small"
            iconAlignment="top"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={classes.cardGridContainer}>
          <CardWithIcon
            title={"Military-grade security for all"}
            description={"Enabled via the dPOS consensus mechanism"}
            icon={<MilitaryIcon />}
            size="small"
            iconAlignment="top"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={classes.cardGridContainer}>
          <CardWithIcon
            title={"100% decentralized order book"}
            description={"Full control for users of their assets while trading"}
            icon={<DecentralizedIcon />}
            size="small"
            iconAlignment="top"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Permissionless;

const useStyles = makeStyles((theme: Theme) => ({
  heroSVGContainer: {
    position: "relative",
    [theme.breakpoints.down("md")]: {
      height: "23rem",
    },
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
  heroSVG: {
    position: "absolute",
    top: "-83%",
    left: "-25%",
    width: "150%",
    pointerEvents: "none",
    [theme.breakpoints.down("md")]: {
      position: "relative",
      top: "-113%",
      left: "-13rem",
      width: "60rem",
    },
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      top: 0,
      left: "-20%",
      width: "100%",
      margin: "-25% 0px",
    },
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      top: 0,
      left: 0,
      width: "100%",
      margin: "-20% 0px",
      transform: "scale(1.5)",
      maxWidth: "54rem",
    },
  },
  title: {
    marginBottom: "2rem",
  },
  container: {
    margin: "30vh 0px",
    [theme.breakpoints.down("sm")]: {
      margin: "10vh 0px",
    },
  },
  cardContainer: {
    margin: "13em 0px",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      margin: "5rem 0px",
    },
  },
  glowSVG: {
    top: "-110%",
    left: "-50%",
    position: "absolute",
    pointerEvents: "none",
  },
  description: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "start",
      marginLeft: "10%",
    },
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      margin: 0,
      display: "inline-block",
    },
  },
  cardGridContainer: {
    [theme.breakpoints.down("xs")]: {
      margin: "2rem auto",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "2rem 0px",
    },
  },
}));