import React from "react";
import { Box, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import permissionlessSVG from "@carbon-info/assets/non-animated/permissionless-hero.svg";
import permissionlessGlowSVG from "@carbon-info/assets/background/permissionless-glow.svg";
import { CardWithIcon } from "@carbon-info/components";

const Permissionless: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Grid container spacing={8}>
        <Grid item xs={6} style={{ position: "relative" }}>
          <img src={permissionlessSVG} alt="permissionless" className={classes.heroSVG} />
        </Grid>
        <Grid item xs={6}>
          <Typography color="textPrimary" variant="h2" align="left" className={classes.title}>
            Permissionless.<br />Zero restrictions.<br />Decentralized.
          </Typography>
          <Typography color="textPrimary" variant="body1" align="left">
            Carbon gives back control along <br />with the freedom to transact <br />without limits
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.cardContainer}>
        <img src={permissionlessGlowSVG} alt="permissionless-glow" className={classes.glowSVG} />
        <Grid item xs={4}>
          <CardWithIcon
            title={"Trustless, zero custody"}
            description={"Built on Tendermint Core to facilitate transactions securely"}
            icon={"lol"}
            size="small"
          />
        </Grid>
        <Grid item xs={4}>
          <CardWithIcon
            title={"Military-grade security for all"}
            description={"Enabled via the dPOS consensus mechanism"}
            icon={"lol"}
            size="small"
          />
        </Grid>
        <Grid item xs={4}>
          <CardWithIcon
            title={"100% decentralized order book"}
            description={"Full control for users of their assets while trading"}
            icon={"lol"}
            size="small"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Permissionless;

const useStyles = makeStyles((theme: Theme) => ({
  heroSVG: {
    position: "absolute",
    top: "-105%",
    left: "-50%",
    pointerEvents: "none",
  },
  title: {
    marginBottom: theme.spacing(8),
  },
  container: {
    margin: "30vh 0px",
  },
  cardContainer: {
    margin: "13em 0px",
    position: "relative",
  },
  glowSVG: {
    top: "-110%",
    left: "-50%",
    position: "absolute",
    pointerEvents: "none",
  },
}));