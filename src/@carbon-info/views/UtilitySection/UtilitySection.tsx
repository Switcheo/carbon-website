import React from "react";
import { Box, Grid, Hidden, makeStyles, Theme, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import utilityBackgroundLeft from "@carbon-info/assets/animated/utilityBGLeft.png";
import utilityBackgroundSphere from "@carbon-info/assets/background/ultilityBgSphere.png";
import utilityBgMobile from "@carbon-info/assets/background/utilityBgMobile.png";
import utilityGlow from "@carbon-info/assets/background/utilityGlow.svg";
import { CardWithIcon, FadeAndSlide } from "@carbon-info/components";
import { LaunchIcon, TradeIcon, TransactIcon } from "@carbon-info/assets";
import { useInView } from "react-intersection-observer";
// import { Trade } from "@carbon-info/assets";

const UtilitySection: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const smallLaptop = useMediaQuery(theme.breakpoints.down(1100));
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
    triggerOnce: true,
  });
  return (
    <div ref={ref} id="utility">
      <Box className={classes.container}>
        <div>
          <Hidden smDown>
            <img src={utilityBackgroundLeft} alt="featureCardBackgroundLeft" className={classes.backgroundLeft} />
            <img src={utilityBackgroundSphere} alt="featureCardBackgroundLeft" className={classes.backgroundSphereLeft} />
          </Hidden>
          <img src={utilityGlow} alt="featureCardBackgroundRight" className={classes.backgroundRight} />
        </div>
        <Grid container justifyContent="center" alignItems="center" spacing={8} className={classes.cardsContainer}>
          <Grid container item xs={12} className={classes.description} spacing={8}>
            <Grid container item sm={12} md={6} className={classes.textContainerWrapper}>
              <Grid item xs={12} className={classes.textContainer}>
                <FadeAndSlide visible={inView} transform={[-20, 0]}>
                  <Typography color="textPrimary" variant={isTablet && !isMobile ? "h1" : "h2"} noWrap style={{ overflow: "visible" }}>
                    Made to power<br />anything DeFi
                  </Typography>
                </FadeAndSlide>
                <br /><br />
                <Hidden smDown>
                  <br />
                </Hidden>
                <FadeAndSlide visible={inView} transform={[-20, 0]} delay={0.4}>
                  <Typography color="textPrimary" variant={isTablet && !isMobile ? "subtitle2" : "subtitle1"}>
                    {smallLaptop && !isTablet ? "Supports a full spectrum of finance products including derivatives"
                      : <>Supports a full spectrum of finance<br />products including derivatives</>}
                  </Typography>
                </FadeAndSlide>
                <br /><br /><br />
                <Hidden mdUp>
                  <img src={utilityBgMobile} alt="utilityBgMobile" className={classes.utilityBgMobile} />
                </Hidden>
              </Grid>
            </Grid>
          </Grid>
          {/* Mobile view */}
          <Hidden mdUp>
            <Grid container>
              <Grid item container xs={12} sm={12} md={6} className={classes.cardContainer} spacing={4} justifyContent="flex-start">
                <Grid item xs={12} sm={6}>
                  <FadeAndSlide visible={inView} transform={[0, -20]}>
                    <CardWithIcon
                      title={"Trade or swap anything, cross-chain"}
                      description={"Access assets on popular chains like Ethereum, Binance Smart Chain, Neo, Ziliqa with full convenience"}
                      icon={<TradeIcon />} />
                  </FadeAndSlide>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.gridItemRight}>
                  <FadeAndSlide visible={inView} transform={[0, -20]}>
                    <CardWithIcon
                      title={"Transact instantly without gas"}
                      description={"Zero fees, zero delays on a Layer 2 structure that minimises network congestion"}
                      icon={<TransactIcon />} />
                  </FadeAndSlide>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.gridItemRight}>
                  <FadeAndSlide visible={inView} transform={[0, -20]}>
                    <CardWithIcon
                      title={"Launch unlimited DeFi products"}
                      description={"Access assets on popular CFDs, perpetuals, and an ever expanding list of dApps with Carbon at their core"}
                      icon={<LaunchIcon />} />
                  </FadeAndSlide>
                </Grid>
              </Grid>
            </Grid>
          </Hidden>
          <Hidden smDown>
            <Grid container justifyContent="center">
              <Grid item container xs={12} sm={6} md={6} className={classes.cardContainer}>
                <Grid item>
                  <FadeAndSlide visible={inView} transform={[-20, 0]}>
                    <CardWithIcon
                      title={"Trade or swap anything, cross-chain"}
                      description={"Access assets on popular chains like Ethereum, Binance Smart Chain, Neo, Ziliqa with full convenience"}
                      icon={<TradeIcon />} />
                  </FadeAndSlide>
                </Grid>
              </Grid>
              <Grid item container xs={12} sm={6} md={6} spacing={4} className={classes.cardContainer}>
                <Grid item className={classes.gridItemRight}>
                  <FadeAndSlide visible={inView} transform={[20, 0]}>
                    <CardWithIcon
                      title={"Transact instantly without gas"}
                      description={"Zero fees, zero delays on a Layer 2 structure that minimises network congestion"}
                      icon={<TransactIcon />} />
                  </FadeAndSlide>
                </Grid>
                <Grid item className={classes.gridItemRight}>
                  <FadeAndSlide visible={inView} transform={[20, 0]}>
                    <CardWithIcon
                      title={"Launch unlimited DeFi products"}
                      description={"Access assets on popular CFDs, perpetuals, and an ever expanding list of dApps with Carbon at their core"}
                      icon={<LaunchIcon />} />
                  </FadeAndSlide>
                </Grid>
              </Grid>
            </Grid>
          </Hidden>
        </Grid>
      </Box >

    </div>
  );
};

export default UtilitySection;

const useStyles = makeStyles((theme: Theme) => ({
  textContainerWrapper: {
    [theme.breakpoints.down("xs")]: {
      padding: "32px 32px 32px 0px !important",
    },
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    // background: "red",
    display: "block",
    margin: "25rem 1.5rem",
    marginTop: "15rem",
    width: "100%",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      margin: "10rem 0px 25rem 0px",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "17rem 0rem",
    },
    [theme.breakpoints.down(330)]: {
      margin: "18rem 0rem",
    },
  },
  cardsContainer: {
    padding: "0px 2rem",
    [theme.breakpoints.down("sm")]: {
      padding: "0px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0px 2rem",
    },
  },
  backgroundLeft: {
    position: "absolute",
    width: "100%",
    top: "14%",
    left: "-27%",
    pointerEvents: "none",
  },
  backgroundSphereLeft: {
    position: "absolute",
    width: "100%",
    maxWidth: "40rem",
    top: "57%",
    left: "-6%",
    pointerEvents: "none",
  },
  ethSphere: {
    position: "absolute",
    // width: "92%",
    width: "100%",
    maxWidth: "18rem",
    bottom: "-11%",
    left: "17%",
    pointerEvents: "none",
  },
  neoSphere: {
    position: "absolute",
    width: "100%",
    maxWidth: "15rem",
    bottom: "13%",
    left: "38%",
    pointerEvents: "none",
  },
  binanceSphere: {
    position: "absolute",
    width: "100%",
    maxWidth: "11rem",
    bottom: "43%",
    left: "42.5%",
    pointerEvents: "none",
  },
  backgroundRight: {
    position: "absolute",
    width: "100%",
    right: "-26%",
    top: "-4%",
    pointerEvents: "none",
    [theme.breakpoints.down("sm")]: {
      right: "-56%",
      top: "-15%",
    },
    [theme.breakpoints.down("xs")]: {
      top: "-5%",
    },
  },
  description: {
    // marginTop: theme.spacing(4)
    textAlign: "start",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "18rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "10rem",
    },
  },
  gridItemRight: {
    marginLeft: "auto",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
    },
    [theme.breakpoints.down("xs")]: {
      margin: 0,
    },
  },
  cardContainer: {
    [theme.breakpoints.down("sm")]: {
      margin: "0rem 2rem",
    },
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
      margin: 0,
    },
  },
  utilityBgMobile: {
    position: "absolute",
    right: "-60%",
    top: "-190%",
    pointerEvents: "none",
    [theme.breakpoints.down("xs")]: {
      right: "-44%",
      top: "-114%",
      width: "190%",
    },
    [theme.breakpoints.down(340)]: {
      top: "-103%",
      right: "-45%",
      width: "183%",
    },
  },
  textContainer: {
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      flexBasis: "auto",
      margin: "auto",
      marginLeft: "calc(14% - 1rem)",
    },
    [theme.breakpoints.down(340)]: {
      whiteSpace: "nowrap",
      margin: "auto",
    },
  },
}));