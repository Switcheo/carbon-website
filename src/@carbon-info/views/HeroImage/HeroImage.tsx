import CarbonStructure from "@carbon-info/assets/non-animated/carbonStructure.png";
import { Box, makeStyles, Theme } from "@material-ui/core";
import React from "react";


const HeroImage: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.carbonStructure}>
      <img src={CarbonStructure} alt="hero" className={classes.heroSVG} />
    </Box>
  );
};

export default HeroImage;

const useStyles = makeStyles((theme: Theme) => ({
  carbonStructure: {
    marginTop: "-7.625rem",
    marginBottom: "-7.625rem",
    pointerEvents: "none",
    // maxWidth: "100vw",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-7.625rem",
      marginBottom: "-5.625rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 0,
      marginBottom: 0,
    },
  },
  heroSVG: {
    width: "100%",
  },
}));