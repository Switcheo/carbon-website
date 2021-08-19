import React from "react";
import { Box, Grid, Hidden, makeStyles, Theme, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import chartSVG from "@carbon-info/assets/animated/chart.svg";
import decentralizedGlow from "@carbon-info/assets/background/decentralizedGlow.svg";
import { CardWithIcon } from "@carbon-info/components";
import { AccelerateIcon, ChooseIcon, Stroke } from "@carbon-info/assets";

const DecentralizedStats: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Box className={classes.boxContainer}>
      <Grid container>
        <Hidden mdUp>
          <Grid item xs={12} md={6} className={classes.imageContainer}>
            <img src={chartSVG} alt="chart" className={classes.image} />
          </Grid>
        </Hidden>
        <Grid container item xs={12} className={classes.textContainer}>
          <Grid item xs={12} md={6}>
            <Typography color="textPrimary" variant={isTablet && !isMobile ? "h1" : "h2"} align="left">
              Decentralized<br />derivatives made<br />accessible to all
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} className={classes.description}>
            <Typography color="textPrimary" variant={isTablet && !isMobile ? "subtitle2" : "subtitle1"} align="left">
              <Hidden mdDown>
                <Stroke className={classes.stroke} />
              </Hidden>
              <div className={classes.descriptionDiv}>
                Already powering unique use cases<br />& decentralized financial applications
              </div>
            </Typography>
          </Grid>
        </Grid>
        <Grid container item xs={12}>
          <Hidden smDown>
            <Grid item xs={12} md={6} className={classes.imageContainer}>
              <img src={chartSVG} alt="chart" className={classes.image} />
            </Grid>
          </Hidden>
          <Grid container item xs={12} md={6} alignItems="center" justifyContent="center" spacing={isTablet ? 0 : 8} className={classes.statsContainer}>
            <Grid item xs={12} sm={6} md={6} className={classes.stats}>
              <div className={classes.statsText}>
                <Typography color="textPrimary" className={classes.numbers} paragraph={!isTablet} align="left">
                  110M+
                </Typography>
                <Typography color="textPrimary" variant="body2" align="left" className={classes.numberText}>
                  Transacted on-chain
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} className={classes.stats}>
              <div className={classes.statsText}>
                <Typography color="textPrimary" className={classes.numbers} paragraph={!isTablet} align="left">
                  $25M+
                </Typography>
                <Typography color="textPrimary" variant="body2" align="left" noWrap className={classes.numberText}>
                  Highest TVL on liquidity pools
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} className={classes.stats}>
              <div className={classes.statsText}>
                <Typography color="textPrimary" className={classes.numbers} paragraph={!isTablet} align="left">
                  110M+
                </Typography>
                <Typography color="textPrimary" variant="body2" align="left" className={classes.numberText}>
                  Traded on margin
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} className={classes.stats}>
              <div className={classes.statsText}>
                <Typography color="textPrimary" className={classes.numbers} paragraph={!isTablet} align="left">
                  100+
                </Typography>
                <Typography color="textPrimary" variant="body2" align="left" noWrap className={classes.numberText}>
                  Apps & services & growing
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container alignItems="center" justifyContent="center" spacing={isTablet ? 4 : 10} className={classes.cardContainer}>
        <img src={decentralizedGlow} alt="decentralizedGlow" className={classes.glowSVG} />
        <Grid item xs={12} md={6}>
          <CardWithIcon
            title={"Choose your preferred derivative"}
            description={"Options, futures, perpetuals & more - create any market from our range of instruments supported"}
            icon={<ChooseIcon />}
            size="large"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CardWithIcon
            title={"Accelerate application building"}
            description={"Tap into our native repository of derivative contracts to build applications out of the box"}
            icon={<AccelerateIcon />}
            size="large"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DecentralizedStats;

const useStyles = makeStyles((theme: Theme) => ({
  statsText: {
    width: "fit-content",
    [theme.breakpoints.down("sm")]: {
      // marginLeft: "20%",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0%",
    },
  },
  numbers: {
    fontWeight: 300,
    fontSize: "4.375rem",
    lineHeight: "4.375rem",
    letterSpacing: "-0.188rem",
    fontFamily: "TyrosPro",
    [theme.breakpoints.down("sm")]: {
      fontSize: "5rem",
    },
  },
  textContainer: {
    marginBottom: "4rem",
    zIndex: 2,
    [theme.breakpoints.down("sm")]: {
      margin: "5rem 20%",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0px 10%",
      marginBottom: "2rem",
    },
  },
  statsContainer: {
    [theme.breakpoints.down("md")]: {
      margin: "0px",
      height: "max-content",
    },
    [theme.breakpoints.down(1100)]: {
      margin: "0px 0px 0px -5%",
    },
    [theme.breakpoints.down("sm")]: {
      height: "max-content",
      margin: "0px 20%",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0px 10%",
    },
  },
  description: {
    alignSelf: "flex-end",
  },
  descriptionDiv: {
    display: "inline-flex",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      marginTop: "2rem",
    },
  },
  stats: {
    zIndex: 2,
    [theme.breakpoints.down("md")]: {
      padding: "1rem !important",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "2rem 0px",
      padding: "0rem !important",
    },
  },
  imageContainer: {
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      margin: "-20% 0px",
    },
  },
  image: {
    position: "absolute",
    top: "-60%",
    left: "-50%",
    pointerEvents: "none",
    zIndex: 1,
    [theme.breakpoints.down("md")]: {
      position: "absolute",
      top: "-47%",
      left: "-48%",
      width: "150%",
    },
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      top: 0,
      left: "-27%",
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      top: 0,
      left: "-35%",
      width: "150%",
    },
  },
  numberText: {
    overflow: "visible",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
      lineHeight: "4.375rem",
    },
  },
  boxContainer: {
    margin: "20vh 0px",
  },
  cardContainer: {
    zIndex: 2,
    position: "relative",
    marginTop: "12.5rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "3.5rem",
    },
  },
  glowSVG: {
    position: "absolute",
    top: "-80%",
    left: "-50%",
    pointerEvents: "none",
  },
  stroke: {
    margin: theme.spacing(0, 2, 0, 0),
    verticalAlign: "super",
  },
}));