import React from "react";
import { Box, Grid, Hidden, makeStyles, Theme, Typography } from "@material-ui/core";
import carbonConnected from "@carbon-info/assets/non-animated/featureCardHero.png";
import featureCardBackgroundLeft from "@carbon-info/assets/background/FeatureCardBackGroundLeft.svg";
import mobileGlow from "@carbon-info/assets/background/featureCardGlowMobile.svg";
import featureCardBackgroundRight from "@carbon-info/assets/background/featureCardBgRight.png";
import { CTAButton } from "@carbon-info/components";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

const isFirefox = !!(navigator.userAgent.indexOf("Firefox") !== -1);
const isMobileSafari = !!(navigator.userAgent.indexOf("iPhone") > -1);

const FeatureCard: React.FC = () => {
  const classes = useStyles();
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.77,
    triggerOnce: true,
  });
  return (
    <div ref={ref} className={classes.aniContainer} id="featureCard">
      <Hidden smDown>
        <img src={featureCardBackgroundLeft} alt="featureCardBackgroundLeft" className={clsx(classes.backgroundLeft, { open: inView })} />
      </Hidden>
      <Box className={clsx(classes.container, { open: inView })}>
        <Grid container className={classes.cardContainer}>
          <Grid container item xs={12} md={7} className={classes.textContainer}>
            <Hidden mdUp>
              <img src={mobileGlow} alt="featureCardBackgroundLeft" className={classes.mobileGlow} />
            </Hidden>
            <img src={featureCardBackgroundRight} alt="featureCardBackgroundRight" className={clsx(classes.backgroundRight, { open: inView })} />
            <div>
              <Typography color="textPrimary" variant="h2" className={classes.title}>
                Breathing life into all things DeFi
              </Typography>
              <Typography color="textPrimary" variant="body2" className={classes.subtext}>
                {"Carbon protocol allows anyone to bootstrap open financial markets for any asset type, on any blockchain."}
              </Typography>
              <CTAButton
                text="READ DOCS"
                link="https://guide.carbon.network"
              />
            </div>
          </Grid>
          <Hidden smDown>
            <Grid item xs={5} className={classes.imageContainer}>
              <img src={carbonConnected} alt="carbon-connected" className={classes.image} />
            </Grid>
          </Hidden>
        </Grid>
      </Box>
    </div>
  );
};

export default FeatureCard;

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    maxWidth: "30rem",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30rem",
    },
    [theme.breakpoints.down(330)]: {
      fontSize: "2.938rem",
    },
  },
  aniContainer: {
    position: "relative",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    display: "relative",
    zIndex: 1,
    opacity: 0,
    transform: "translate(0px, 20px)",
    transition: "opacity ease-in 0.3s, transform ease-in 0.4s",
    "&.open": {
      opacity: 1,
      transform: "translate(0px,0px)",
    },
  },
  imageContainer: {
    alignItems: "center",
    textAlign: "center",
  },
  cardContainer: {
    position: "relative",
    alignItems: "center",
    padding: "0px 2.5rem 0px 4rem",
    maxWidth: "80rem",
    height: "38rem",
    boxShadow: "inset 62px 98px 100px -60px rgba(36, 36, 36,0.5), inset 0px 1px 40px rgba(85, 85, 85, 0.04)",
    backdropFilter: "blur(3px)",
    borderRadius: "58px",
    textAlign: "start",
    background: "linear-gradient(180deg,rgba(41, 40, 40,0.5),#161515)",
    margin: "auto",
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: 58,
      padding: "1.755px",
      background: "linear-gradient(180deg,#74E8E8,#74E8E8,rgba(255,255,255,0.4),rgba(255,255,255,0.2))",
      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      maskComposite: `${isFirefox || isMobileSafari ? "subtract" : "source-out"}`,
      pointerEvents: "none",
    },
    [theme.breakpoints.down("sm")]: {
      width: "fit-content",
      borderRadius: 21,
      "&::before": {
        borderRadius: 21,
      },
    },
    [theme.breakpoints.down("xs")]: {
      height: "36rem",
      borderRadius: 21,
      "&::before": {
        borderRadius: 21,
      },
    },
    [theme.breakpoints.down(330)]: {
      height: "36rem",
      fontSize: "2.938rem",
    },
  },
  image: {
    width: "90%",
    pointerEvents: "none",
  },
  backgroundLeft: {
    position: "absolute",
    width: "100%",
    left: "-50%",
    top: "-55%",
    transform: "translate(10px, 0px)",
    transition: "opacity ease-in 0.3s, transform ease-in 0.4s",
    "&.open": {
      opacity: 1,
      transform: "translate(0px,0px)",
    },
  },
  mobileGlow: {
    position: "absolute",
    left: "-27%",
    bottom: "-90%",
    zIndex: 0,
    pointerEvents: "none",
    [theme.breakpoints.down("sm")]: {
      left: "-108%",
      bottom: "-50%",
    },
    [theme.breakpoints.down("xs")]: {
      left: "-110%",
    },
  },
  backgroundRight: {
    position: "absolute",
    width: "100%",
    right: "-38%",
    top: "-23%",
    transform: "translate(-10px, 0px)",
    transition: "opacity ease-in 0.3s, transform ease-in 0.4s",
    "&.open": {
      opacity: 1,
      transform: "translate(0px,0px)",
    },
    pointerEvents: "none",
    [theme.breakpoints.down(1100)]: {
      top: "-11%",
    },
    [theme.breakpoints.down("sm")]: {
      top: "-21%",
      right: "-76%",
      width: "160%",
    },
    [theme.breakpoints.down("xs")]: {
      top: "-10%",
      right: "-76%",
      width: "160%",
    },
    [theme.breakpoints.down(330)]: {
      top: "-12%",
      right: "-86%",
      width: "180%",
    },
  },
  icon: {
    margin: theme.spacing(0, 2),
  },
  subtext: {
    maxWidth: "31rem",
    margin: "4rem 0px",
    [theme.breakpoints.down("sm")]: {
      margin: "3rem 0px",
      maxWidth: "33rem",
      fontSize: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "2.5rem 0px",
      fontSize: "1.7rem",
    },
  },
  textContainer: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      alignItems: "center",
    },
  },
}));
