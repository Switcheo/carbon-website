import React from "react";
import { Box, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import GetInvolvedGlow from "@carbon-info/assets/background/getInvolvedGlow.svg";
import GetInvolvedBG from "@carbon-info/assets/background/getInvolvedBG.svg";
import ProposeSVG from "@carbon-info/assets/non-animated/propose.svg";
import DevelopSVG from "@carbon-info/assets/non-animated/develop.svg";
import PitchSVG from "@carbon-info/assets/non-animated/pitch.svg";
import { CardWithCTA } from "@carbon-info/components";

const GetInvolved: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.boxContainer}>
      <img src={GetInvolvedBG} alt="bg" className={classes.background} />
      <Grid container className={classes.contentContainer} justifyContent="center" spacing={8}>
        <Grid item md={6}>
          <Typography color="textPrimary" variant="h2" align="left" className={classes.text}>
            Get involved in building the new<br />face of finance
          </Typography>
        </Grid>
        <Grid item md={6}>
          <CardWithCTA
            title={"Develop on Carbon"}
            description={"Leverage our native source code to fast-track development"}
            ctaText={"Read Docs"}
            icon={DevelopSVG}
          />
        </Grid>
        <Grid item md style={{ marginTop: "-42%" }}>
          <CardWithCTA
            title={"Propose a partnership"}
            description={"Want to collaborate toward a freer financial system?"}
            ctaText={"Get In Touch"}
            icon={ProposeSVG}
            bigSVG
          />
        </Grid>
        <Grid item md>
          <CardWithCTA
            title={"Pitch a project"}
            description={"Need funding to kickstart your project on Carbon?"}
            ctaText={"Apply Now"}
            icon={PitchSVG}
          />
        </Grid>
        <img src={GetInvolvedGlow} alt="glow" className={classes.glowSVG} />
      </Grid>
    </Box>
  );
};

export default GetInvolved;

const useStyles = makeStyles((theme: Theme) => ({
  boxContainer: {
    margin: "50vh 0px",
  },
  background: {
    pointerEvents: "none",
    marginBottom: "-100%",
  },
  contentContainer: {
    position: "relative",
  },
  glowSVG: {
    position: "absolute",
    top: "-20%",
    left: "-40%",
    pointerEvents: "none",
  },
  text: {
    margin: theme.spacing(3, 3),
  },
}));