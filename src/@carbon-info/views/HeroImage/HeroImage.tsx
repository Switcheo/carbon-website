// import CarbonStructureSphereBg from "@carbon-info/assets/animated/carbonBgSphere.png";
import { Box, makeStyles, Theme, useMediaQuery, useTheme } from "@material-ui/core";
import React, { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
// import clsx from "clsx";
import heroSVGAnimationStart from "@carbon-info/assets/animated/heroSVGAnimationStart.json";
import heroSVGAnimationEnd from "@carbon-info/assets/animated/heroSVGAnimationEnd.json";
// import { Parallax, Background } from "react-parallax";
import useInterval from "@carbon-info/hooks/useInterval";
import Lottie from "react-lottie";

const HeroImage: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const anim1Ref = useRef<HTMLObjectElement | null>(null);
  const anim2Ref = useRef<HTMLObjectElement | null>(null);
  const [step1, setStep1] = useState(false);

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: heroSVGAnimationStart,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions2 = {
    loop: true,
    autoplay: false,
    animationData: heroSVGAnimationEnd,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useInterval(() => {
    if (!inView) return;
    if (!anim1Ref.current || !anim2Ref.current) return;

    setTimeout(() => {
      setStep1(true);
    }, 1900);
  }, step1 ? null : 300);

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: isMobile ? 1 : 0.8,
    triggerOnce: true,
  });

  return (
    <div ref={ref} >
      <Box className={classes.carbonStructure} id="hero">
        <div id="anim" className={classes.anim}>
          <div ref={anim1Ref} style={{
            position: "absolute", zIndex: 33,
            opacity: (inView && !step1) ? 1 : 0,
          }}>
            <Lottie
              isPaused={!inView}
              options={defaultOptions}
            />
          </div>
          <div ref={anim2Ref} style={{
            position: "absolute", zIndex: 33, opacity: (inView && step1) ? 1 : 0,
          }}>
            <Lottie
              isPaused={!inView && !step1}
              options={defaultOptions2} />
          </div>
        </div>
        {/* <Parallax blur={10} strength={isMobile ? 80 : 120}>
          <Background>
            <img src={CarbonStructureSphereBg} alt="hero" className={clsx(classes.sphere, { open: isMobile ? inView && step1 : inView })} />
          </Background>
          <div className="container">
            <div id="anim" className={classes.anim}>
              <object ref={anim1Ref}
                className={clsx(classes.svg, { hidden: !inView }, { step1 }, { step2 })}
                id="anim1" data={heroSVGAnimationStart}
                type="image/svg+xml">
              </object>
              <object ref={anim2Ref}
                className={clsx(classes.svg, { hidden: true }, { anim2Step1: step1 || !inView }, { anim2Step2: step2 && inView })}
                id="anim2"
                data={heroSVGAnimationEnd}
                type="image/svg+xml">
              </object>
            </div>
          </div>
        </Parallax> */}
      </Box>
    </div>
  );
};

export default HeroImage;

const useStyles = makeStyles((theme: Theme) => ({
  svg: {
    transform: "scale(1)",
    left: 0,
    position: "absolute",
    willChange: "content",
    "&.hidden": {
      opacity: 0,
    },
    "&.anim2Step1": {
      opacity: 0,
    },
    "&.anim2Step2": {
      opacity: 1,
    },
    "&.step1": {
      opacity: 1,
    },
    "&.step2": {
      opacity: 0,
    },
  },
  anim: {
    maxHeight: 800,
    height: "50vw",
    width: "100%",
    position: "relative",
    [theme.breakpoints.down(1380)]: {
      height: "55vw",
    },
    [theme.breakpoints.down("sm")]: {
      height: "80vw",
    },
  },
  animationEnd: {
    opacity: 0,
    // transition: "opacity ease-in 0s",
    "&.open": {
      opacity: 1,
    },
  },
  animation: {
    opacity: 0,
    // transition: "opacity ease-in 0.6s",
    "&.open": {
      opacity: 1,
    },
  },
  carbonStructure: {
    marginTop: "-11.625rem",
    marginBottom: "11.625rem",
    pointerEvents: "none",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
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
    top: 116,
    left: "67%",
    opacity: 0,
    transform: "scale(0.75)",
    transition: "all ease-in 0.5s",
    [theme.breakpoints.down("sm")]: {
      top: 86,
    },
    [theme.breakpoints.down("xs")]: {
      top: 46,
    },
    "&.open": {
      opacity: 1,
      transform: "scale(1)",
    },
  },
}));
