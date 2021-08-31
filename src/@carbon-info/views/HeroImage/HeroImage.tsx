import CarbonStructure from "@carbon-info/assets/non-animated/carbonStructure.png";
import CarbonStructureSphereBg from "@carbon-info/assets/animated/carbonBgSphere.png";
import { Box, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

const HeroImage: React.FC = () => {
  const classes = useStyles();
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.7,
    triggerOnce: true,
    rootMargin: "300% 0px 0px 0px",
  });
  return (
    <Box className={classes.carbonStructure} id="hero">
      <img src={CarbonStructure} alt="hero" className={classes.heroSVG} />
      <img ref={ref} src={CarbonStructureSphereBg} alt="hero" className={clsx(classes.sphere, { open: inView })} />
    </Box>
  );
};

export default HeroImage;

const useStyles = makeStyles((theme: Theme) => ({
  carbonStructure: {
    marginTop: "-7.625rem",
    marginBottom: "-7.625rem",
    pointerEvents: "none",
    position: "relative",
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
  sphere: {
    width: "60%",
    position: "absolute",
    top: "21%",
    left: "16%",
    opacity: 0,
    transform: "scale(0.75)",
    transition: "opacity ease-in 0.3s, transform ease-in 0.4s",
    "&.open": {
      opacity: 1,
      transform: "scale(1)",
    },
  },
}));