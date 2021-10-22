import CarbonStructure from "@carbon-info/assets/non-animated/carbonStructure.png";
import CarbonStructureSphereBg from "@carbon-info/assets/animated/carbonBgSphere.png";
import { Box, makeStyles, Theme } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
// import heroSVGAnimationStart from "@carbon-info/assets/animated/heroSVGAnimationStart.svg";
// import heroSVGAnimationEnd from "@carbon-info/assets/animated/heroSVGAnimationEnd.svg";
// import { Parallax, Background } from "react-parallax";

const HeroImage: React.FC = () => {
  const classes = useStyles();
  const [animationEnded, setAnimationEnded] = useState(false);
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && !animationEnded) {
      setTimeout(() => { setAnimationEnded(true); }, 3500);
    }
  }, [inView, animationEnded]);

  return (
    <div ref={ref} >
      <Box className={classes.carbonStructure} id="hero">
        {/* <Parallax blur={10} strength={120}>
          <Background className={classes.parallaxBg}>
            <img src={CarbonStructureSphereBg} alt="hero" className={clsx(classes.sphere)} />
          </Background>
          {
            (!animationEnded && inView) && <object type="image/svg+xml" data={heroSVGAnimationStart} className={clsx(classes.animation, { open: inView })} />
          }
          {
            (inView) && <object type="image/svg+xml" data={heroSVGAnimationEnd} className={clsx(classes.animationEnd, { open: inView && animationEnded })} />
          }
        </Parallax> */}
        <img src={CarbonStructure} alt="hero" className={classes.heroSVG} />
        <img ref={ref} src={CarbonStructureSphereBg} alt="hero" className={clsx(classes.sphere, { open: inView })} />
      </Box>
    </div>
  );
};

export default HeroImage;

const useStyles = makeStyles((theme: Theme) => ({
  parallaxBg: {
    top: "20%",
  },
  animationEnd: {
    opacity: 0,
    transition: "opacity ease-in 0s",
    "&.open": {
      opacity: 1,
    },
  },
  animation: {
    opacity: 0,
    transition: "opacity ease-in 0.6s",
    "&.open": {
      opacity: 1,
    },
  },
  carbonStructure: {
    // height: "80rem",
    marginTop: "-7.625rem",
    marginBottom: "-7.625rem",
    pointerEvents: "none",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      // height: "60rem",
      marginTop: "-7.625rem",
      marginBottom: "-5.625rem",
    },
    [theme.breakpoints.down("xs")]: {
      // height: "36rem",
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