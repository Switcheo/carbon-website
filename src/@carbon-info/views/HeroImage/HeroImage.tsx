import CarbonStructure from "@carbon-info/assets/background/carbon_structure.svg";
import { Box, makeStyles, Theme } from "@material-ui/core";
import React from "react";


const HeroImage: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.carbonStructure}>
      <img src={CarbonStructure} alt="hero" />
    </Box>
  );
};

export default HeroImage;

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    justifyContent: "center",
    alignItems: "center",
    // background: "red",
    display: "block",
    margin: theme.spacing(15, 0),
  },
  carbonStructure: {
    marginTop: "-250px",
    marginBottom: "-170px",
  },
}));