import React from "react";
import { Box, Grid, makeStyles, Theme, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import GetInvolvedGlow from "@carbon-info/assets/background/getInvolvedGlow.svg";
import GetInvolvedBG from "@carbon-info/assets/background/getInvolvedBG.png";
import ProposeSVG from "@carbon-info/assets/non-animated/propose.png";
import DevelopSVG from "@carbon-info/assets/non-animated/develop.png";
import PitchSVG from "@carbon-info/assets/non-animated/pitch.png";
import { CardWithCTA } from "@carbon-info/components";

const GetInvolved: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box className={classes.boxContainer}>
      <img src={GetInvolvedBG} alt="bg" className={classes.background} />
      <Grid container className={classes.contentContainer} justifyContent="flex-start" spacing={isMobile ? 4 : 8}>
        <Grid item xs={12} md={6}>
          <Typography color="textPrimary" variant="h2" align="left" className={classes.text}>
            <div className={classes.textContainer}>
              Get involved in<br />building the new <br /> face of finance
            </div>
          </Typography>
        </Grid>
        {
          isMobile ?
            <>
            </>
            :
            <>
            </>
        }
        <Grid item xs={12} sm={6} md={6} className={classes.card}>
          <CardWithCTA
            title={"Develop on Carbon"}
            description={"Leverage our native source code to fast-track development"}
            ctaText={"Read Docs"}
            link={"/#document"}
            icon={DevelopSVG}
            isMobile={isMobile}
          />
        </Grid>
        <Grid item xs={12} sm={6} md style={{ marginTop: isMobile ? 0 : "-42%" }} className={classes.card}>
          <CardWithCTA
            title={"Propose a partnership"}
            description={"Want to collaborate toward a freer financial system?"}
            ctaText={"Get In Touch"}
            link={"/#document"}
            icon={ProposeSVG}
            bigSVG
          />
        </Grid>
        <Grid item xs={12} sm={6} md className={classes.card}>
          <CardWithCTA
            title={"Pitch a project"}
            description={"Need funding to kickstart your project on Carbon?"}
            ctaText={"Apply Now"}
            link={"/#document"}
            icon={PitchSVG}
            isMobile={isMobile}
            overwriteCSS={{ width: "31rem", display: "block", maxWidth: "85%" }}
          />
        </Grid>
        <img src={GetInvolvedGlow} alt="glow" className={classes.glowSVG} />
      </Grid>
    </Box>
  );
};

export default GetInvolved;

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    zIndex: 3,
  },
  boxContainer: {
    margin: "50vh 0px",
    [theme.breakpoints.down("sm")]: {
      margin: "20vh 0px",
    },
  },
  textContainer: {
    [theme.breakpoints.down("xs")]: {
      margin: "auto",
      width: "fit-content",
    },
  },
  background: {
    pointerEvents: "none",
    marginBottom: "-100%",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "-110%",
      width: "200%",
    },
  },
  contentContainer: {
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 4rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0px 1rem",
    },
  },
  glowSVG: {
    position: "absolute",
    top: "-20%",
    left: "-40%",
    pointerEvents: "none",
  },
  text: {
    margin: theme.spacing(3, 3),
    [theme.breakpoints.down("sm")]: {
      display: "content",
    },
  },
}));