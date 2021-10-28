// import CarbonStructure from "@carbon-info/assets/non-animated/carbonStructure.png";
import CarbonStructureSphereBg from "@carbon-info/assets/animated/carbonBgSphere.png";
import { Box, makeStyles, Theme } from "@material-ui/core";
import React, { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import heroSVGAnimationStart from "@carbon-info/assets/animated/heroSVGAnimationStart.svg";
import heroSVGAnimationEnd from "@carbon-info/assets/animated/heroSVGAnimationEnd.svg";
import { Parallax, Background } from "react-parallax";
import useInterval from "@carbon-info/hooks/useInterval";

const HeroImage: React.FC = () => {
  const classes = useStyles();
  const anim1Ref = useRef<HTMLObjectElement | null>(null);
  const anim2Ref = useRef<HTMLObjectElement | null>(null);
  const [step1, setStep1] = useState(false);
  const [step2, setStep2] = useState(false);

  useInterval(() => {
    if (!inView) return;
    if (!anim1Ref.current || !anim2Ref.current) return;
    const svg1 = anim1Ref.current.contentDocument?.querySelector("svg");
    const svg2 = anim2Ref.current.contentDocument?.querySelector("svg");
    if (!svg1 || !svg2) return;

    setStep1(true);
    // console.log("anim1 click", anim1Ref.current.contentDocument);
    anim1Ref.current.contentDocument?.querySelector("svg")?.dispatchEvent(new Event("click"));
    setTimeout(() => {
      setStep2(true);
      // console.log("anim2 click", anim2Ref.current);
      anim2Ref.current?.contentDocument?.querySelector("svg")?.dispatchEvent(new Event("click"));
    }, 1700);
  }, step1 ? null : 300);

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.8,
    triggerOnce: true,
  });

  return (
    <div ref={ref} >
      <Box className={classes.carbonStructure} id="hero">
        <Parallax blur={10} strength={120}>
          <Background className={classes.parallaxBg}>
            <img src={CarbonStructureSphereBg} alt="hero" className={clsx(classes.sphere)} />
          </Background>
          <div className="container">
            <div id="anim">
              <object ref={anim1Ref} className={`svg ${step1 ? "step1" : ""} ${step2 ? "step2" : ""}`} id="anim1" data={heroSVGAnimationStart} type="image/svg+xml">

              </object>
              <object ref={anim2Ref} className={`svg ${step1 ? "step1" : ""} ${step2 ? "step2" : ""}`} id="anim2" data={heroSVGAnimationEnd} type="image/svg+xml">

              </object>
            </div>
          </div>
        </Parallax>
        {/* <img src={CarbonStructure} alt="hero" className={classes.heroSVG} /> */}
        {/* <img ref={ref} src={CarbonStructureSphereBg} alt="hero" className={clsx(classes.sphere, { open: inView })} /> */}
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
    marginBottom: "11.625rem",
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
