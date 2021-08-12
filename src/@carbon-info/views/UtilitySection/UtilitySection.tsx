import React from "react";
import { Box, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import utilityBackgroundLeft from "@carbon-info/assets/background/utilityBackgroundLeft.svg";
import utilityGlow from "@carbon-info/assets/background/utilityGlow.svg";
import { CardWithIcon } from "@carbon-info/components";
import { LaunchIcon, TradeIcon, TransactIcon } from "@carbon-info/assets";
// import { Trade } from "@carbon-info/assets";


const UtilitySection: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <img src={utilityBackgroundLeft} alt="featureCardBackgroundLeft" className={classes.backgroundLeft} />
      <img src={utilityGlow} alt="featureCardBackgroundRight" className={classes.backgroundRight} />
      <Grid container justifyContent="center" alignItems="center" spacing={8}>
        <Grid container item xs={12} className={classes.description} spacing={8}>
          <Grid container item sm={12} md={6}>
            <Grid item xs={12}>
              <Typography color="textPrimary" variant="h2">
                Made to power<br />anything DeFi
              </Typography>
              <br /><br /><br />
              <Typography color="textPrimary" variant="h6">
                Supports a full spectrum of finance<br />products including derivatives
              </Typography>
              <br /><br /><br />
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item container xs={12} md={6} className={classes.cardContainer}>
            <Grid item className={classes.gridItem}>
              <CardWithIcon
                title={"Trade or swap anything, cross-chain"}
                description={"Access assets on popular chains like Ethereum, Binance Smart Chain, Neo, Ziliqa with full convenience"}
                icon={<TradeIcon />} />
            </Grid>
          </Grid>
          <Grid item container xs={12} md={6} spacing={4} className={classes.cardContainer}>
            <Grid item className={classes.gridItemRight}>
              <CardWithIcon
                title={"Transact instantly without gas"}
                description={"Zero fees, zero delays on a Layer 2 structure that minimises network congestion"}
                icon={<TransactIcon />} />
            </Grid>
            <Grid item className={classes.gridItemRight}>
              <CardWithIcon
                title={"Launch unlimited DeFi products"}
                description={"Access assets on popular CFDs, perpetuals, and an ever expanding list of dApps with Carbon at their core"}
                icon={<LaunchIcon />} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UtilitySection;

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    justifyContent: "center",
    alignItems: "center",
    // background: "red",
    display: "block",
    margin: theme.spacing(15, 0),
    width: "100%",
  },
  backgroundLeft: {
    position: "absolute",
    // width: "92%",
    width: "1289.36px",
    height: "1363.2px",
    left: "-255px",
    top: "2200px",
    pointerEvents: "none",
  },
  backgroundRight: {
    position: "absolute",
    width: "1522.35px",
    height: "1495.41px",
    right: "-450px",
    top: "2050px",
    pointerEvents: "none",
  },
  description: {
    // marginTop: theme.spacing(4)
    textAlign: "start",
  },
  gridItemRight: {
    marginLeft: "auto",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
    },
  },
  cardContainer: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      margin: 0,
    },
  },
  gridItem: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: "1rem",
    },
  },
}));