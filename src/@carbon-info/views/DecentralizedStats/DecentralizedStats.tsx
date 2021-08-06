import React from "react";
import { Box, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import chartSVG from "@carbon-info/assets/animated/chart.svg";
import decentralizedGlow from "@carbon-info/assets/background/decentralizedGlow.svg";
import { CardWithIcon } from "@carbon-info/components";

const DecentralizedStats: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.boxContainer}>
      <Grid container className={classes.container}>
        <Grid container item xs={12} className={classes.textContainer}>
          <Grid item xs={6}>
            <Typography color="textPrimary" variant="h2" align="left">
              Decentralized<br />derivatives made<br />accessible to all
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.description}>
            <Typography color="textPrimary" variant="subtitle1" align="left">
              Already powering unique use cases<br />& decentralized financial applications
            </Typography>
          </Grid>
        </Grid>
        <Grid container item xs={12}>
          <Grid item xs={6} className={classes.imageContainer}>
            <img src={chartSVG} alt="chart" className={classes.image} />
          </Grid>
          <Grid container item xs={6} alignItems="center" justifyContent="center" spacing={8}>
            <Grid item xs={6}>
              <Typography color="textPrimary" className={classes.numbers} paragraph align="left">
                110M+
              </Typography>
              <Typography color="textPrimary" variant="body2" align="left">
                Transacted on-chain
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography color="textPrimary" className={classes.numbers} paragraph align="left">
                $25M+
              </Typography>
              <Typography color="textPrimary" variant="body2" align="left" noWrap className={classes.noWrap}>
                Highest TVL on liquidity pools
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography color="textPrimary" className={classes.numbers} paragraph align="left">
                110M+
              </Typography>
              <Typography color="textPrimary" variant="body2" align="left">
                Traded on margin
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography color="textPrimary" className={classes.numbers} paragraph align="left">
                100+
              </Typography>
              <Typography color="textPrimary" variant="body2" align="left" noWrap className={classes.noWrap}>
                Apps & services & growing
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container alignItems="center" justifyContent="center" spacing={10} className={classes.cardContainer}>
        <img src={decentralizedGlow} alt="decentralizedGlow" className={classes.glowSVG} />
        <Grid item xs={6}>
          <CardWithIcon
            title={"Choose your preferred derivative"}
            description={"Options, futures, perpetuals & more - create any market from our range of instruments supported"}
            icon={"lol"}
            size="large"
          />
        </Grid>
        <Grid item xs={6}>
          <CardWithIcon
            title={"Accelerate application building"}
            description={"Tap into our native repository of derivative contracts to build applications out of the box"}
            icon={"lol"}
            size="large"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DecentralizedStats;

const useStyles = makeStyles((theme: Theme) => ({
  container: {

  },
  numbers: {
    fontWeight: 300,
    fontSize: 70,
    lineHeight: "70px",
    letterSpacing: -3,
    fontFamily: "TyrosPro",
  },
  textContainer: {
    marginBottom: theme.spacing(14),
  },
  description: {
    alignSelf: "flex-end",
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    position: "absolute",
    top: "-60%",
    left: "-50%",
  },
  noWrap: {
    overflow: "visible",
  },
  boxContainer: {
    margin: "20vh 0px",
  },
  cardContainer: {
    position: "relative",
    marginTop: theme.spacing(25),
  },
  glowSVG: {
    position: "absolute",
    top: "-80%",
    left: "-50%",
  },
}));