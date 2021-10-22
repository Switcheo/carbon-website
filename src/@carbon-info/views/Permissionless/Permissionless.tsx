import React from "react";
import { Box, Grid, Hidden, makeStyles, Theme, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import permissionlessSVG from "@carbon-info/assets/non-animated/permissionlessHeroSVG.png";
import permissionlessGlowSVG from "@carbon-info/assets/background/permissionless-glow.svg";
import { CardWithIcon, FadeAndSlide } from "@carbon-info/components";
import { PermissionlessIcon, PowerfulIcon, TrustlessIcon } from "@carbon-info/assets";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

const Permissionless: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.35,
    triggerOnce: true,
  });
  return (
    <div ref={ref} id="features">
      <Box className={classes.container}>
        <Grid container spacing={8}>
          <Grid item xs={12} md={6} className={classes.heroSVGContainer}>
            <img src={permissionlessSVG} alt="permissionless" className={clsx(classes.heroSVG, { open: inView })} />
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={classes.description}>
              <FadeAndSlide visible={inView} transform={[20, 0]}>
                <Typography color="textPrimary" variant={isTablet && !isMobile ? "h1" : "h2"} align="left" className={classes.title}>
                  Zero restrictions.<br />Fully decentralized.<br />Limitless possibilities.
                </Typography>
              </FadeAndSlide>
              <FadeAndSlide visible={inView} transform={[26, 0]} delay={0.1}>
                <Typography color="textPrimary" variant={isTablet && !isMobile ? "subtitle2" : isMobile ? "subtitle1" : "subtitle1"} align="left" className={classes.subTitle}>
                  {"Carbon gives users complete freedom to participate in any market, or build their own DeFi innovations without reinventing the wheel. Here's why."}
                  <br /><br />
                  {""}
                </Typography>
              </FadeAndSlide>
            </div>
          </Grid>
        </Grid>
        <Grid container className={classes.cardContainer}>
          <Hidden smDown>
            <img src={permissionlessGlowSVG} alt="permissionless-glow" className={classes.glowSVG} />
          </Hidden>
          <Grid item xs={12} sm={6} md={4} className={classes.cardGridContainer}>
            <CardWithIcon
              title={"Cross-Chain Efficiency"}
              description={"Users can interact with multiple networks seamlessly without relying on centralized entities, while liquidity is interconnected instead of being siloed on each blockchain."}
              icon={<PermissionlessIcon />}
              size="small"
              iconAlignment="top"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} className={classes.cardGridContainer}>
            <CardWithIcon
              title={"Powerful Tools"}
              description={"Anyone can use Carbon protocol's fully decentralized order books, market instruments (spot, futures, perpetuals, options) with cross-margining capabilities  as building blocks for their new DeFi paradigms."}
              icon={<PowerfulIcon />}
              size="small"
              iconAlignment="top"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} className={classes.cardGridContainer}>
            <CardWithIcon
              title={"Layer-2 Scalability"}
              description={"Built on Tendermint and precision-designed to handle complex financial constructs at scale for instantaneous transactions at ultra-low costs."}
              icon={<TrustlessIcon />}
              size="small"
              iconAlignment="top"
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Permissionless;

const useStyles = makeStyles((theme: Theme) => ({
  subTitle: {
    maxWidth: "33rem",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "43rem",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "36rem",
    },
  },
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
    top: "-55%",
    left: "-25%",
    width: "150%",
    pointerEvents: "none",
    opacity: 0,
    transform: "translate(0px, 20px)",
    transition: "opacity ease-in 0.3s, transform ease-in 0.4s",
    "&.open": {
      opacity: 1,
      transform: "translate(0px,0px)",
    },
    [theme.breakpoints.down("md")]: {
      position: "relative",
      top: "-103%",
      left: "-12rem",
      width: "60rem",
    },
    [theme.breakpoints.down(1050)]: {
      position: "relative",
      top: "-88%",
      width: "56rem",
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
      transform: "translate(0px, 20px) scale(1.25)",
      maxWidth: "54rem",
      "&.open": {
        opacity: 1,
        transform: "translate(0px,0px) scale(1.25)",
      },
    },
    [theme.breakpoints.down(400)]: {
      "&.open": {
        opacity: 1,
        transform: "translate(0px,0px) scale(1.55)",
      },
    },
  },
  title: {
    fontSize: "3.138rem",
    minWidth: "30rem",
    marginBottom: "2rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "2.938rem",
    },
    [theme.breakpoints.down(1150)]: {
      fontSize: "2.638rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "4.375rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "3.438rem",
    },
  },
  container: {
    margin: "30vh 0px",
    [theme.breakpoints.down("sm")]: {
      margin: "10vh 0px",
    },
  },
  cardContainer: {
    margin: "7em 0px",
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
      marginLeft: "8%",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "12%",
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
