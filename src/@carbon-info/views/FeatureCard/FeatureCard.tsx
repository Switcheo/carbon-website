import React from "react";
import { Box, Grid, Hidden, makeStyles, Theme, Typography } from "@material-ui/core";
import carbonConnected from "@carbon-info/assets/non-animated/featureCardHero.png";
import featureCardBackgroundLeft from "@carbon-info/assets/background/FeatureCardBackGroundLeft.svg";
import mobileGlow from "@carbon-info/assets/background/featureCardGlowMobile.svg";
import featureCardBackgroundRight from "@carbon-info/assets/background/featureCardBgRight.png";
import { CTAButton } from "@carbon-info/components";

const FeatureCard: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Grid container className={classes.cardContainer}>
        <Hidden smDown>
          <img src={featureCardBackgroundLeft} alt="featureCardBackgroundLeft" className={classes.backgroundLeft} />
        </Hidden>
        <img src={featureCardBackgroundRight} alt="featureCardBackgroundRight" className={classes.backgroundRight} />
        <Hidden mdUp>
          <img src={mobileGlow} alt="featureCardBackgroundLeft" className={classes.mobileGlow} />
        </Hidden>
        <Grid container item xs={12} md={7} className={classes.textContainer}>
          <div>
            <Typography color="textPrimary" variant="h2">
              Launch full-featured<br /> financial markets.<br /> No KYC required.
            </Typography>
            <Typography color="textPrimary" variant="body2" className={classes.subtext}>
              Carbon is a third-gen blockchain protocol & <br />custom Layer 2 side chain, built for trading <br /> sophisticated financial instruments at scale.
            </Typography>
            <CTAButton
              text="READ DOCS"
              link="/#document"
              CTA
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
  );
};

export default FeatureCard;

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    display: "relative",
    zIndex: 1,
    // background: "red"
  },
  imageContainer: {
    alignItems: "center",
    textAlign: "center",
  },
  cardContainer: {
    position: "relative",
    alignItems: "center",
    padding: "0px 2.5rem 0px 2.5rem",
    maxWidth: "80rem",
    height: "38rem",
    boxShadow: "inset 62px 98px 100px -60px rgba(36, 36, 36,0.5), inset 0px 1px 40px rgba(85, 85, 85, 0.04)",
    backdropFilter: "blur(3px)",
    borderRadius: "58px",
    textAlign: "start",
    background: "rgba(0,0,0,0.0)",
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
      maskComposite: "destination-out",
      pointerEvents: "none",
    },
    [theme.breakpoints.down("sm")]: {
      // height: "42rem",
      width: "fit-content",
      borderRadius: 21,
      "&::before": {
        borderRadius: 21,
      },
    },
    [theme.breakpoints.down("xs")]: {
      height: "42rem",
      borderRadius: 21,
      "&::before": {
        borderRadius: 21,
      },
    },
  },
  image: {
    width: "90%",
    pointerEvents: "none",
  },
  backgroundLeft: {
    position: "absolute",
    width: "100%",
    // height: "",
    left: "-50%",
    top: "-55%",
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
    // height: "",
    right: "-38%",
    top: "-23%",
    pointerEvents: "none",
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
    margin: "4rem 0px",
    [theme.breakpoints.down("sm")]: {
      margin: "3rem 0px",
    },
  },
  textContainer: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      alignItems: "center",
    },
  },
}));