import { Box, makeStyles, Theme, useMediaQuery, useTheme } from "@material-ui/core";
import React, { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import heroSVGAnimationStart from "@carbon-info/assets/animated/heroSVGAnimationStart.json";
import heroSVGAnimationEnd from "@carbon-info/assets/animated/heroSVGAnimationEnd.json";
import useInterval from "@carbon-info/hooks/useInterval";
import Lottie from "react-lottie";
import { FadeAndSlide } from "@carbon-info/components";

const HeroImage: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const anim1Ref = useRef<HTMLObjectElement | null>(null);
  const anim2Ref = useRef<HTMLObjectElement | null>(null);
  const [startEndAnimation, setStartEndAnimation] = useState(false);

  const AniStartOptions = {
    loop: false,
    autoplay: false,
    animationData: heroSVGAnimationStart,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const AniEndOptions = {
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
      setStartEndAnimation(true);
    }, 1800);
  }, startEndAnimation ? null : 300);

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: isMobile ? 1 : 0.8,
    triggerOnce: true,
  });

  return (
    <div ref={ref} >
      <Box className={classes.carbonStructure} id="hero">
        <FadeAndSlide visible={inView}>
          <div id="anim" className={classes.anim}>
            <div ref={anim1Ref} style={{
              position: "absolute", zIndex: 33,
              opacity: (inView && !startEndAnimation) ? 1 : 0,
            }}>
              <Lottie
                isPaused={!inView}
                options={AniStartOptions}
              />
            </div>
            <div ref={anim2Ref} style={{
              position: "absolute", zIndex: 33, opacity: (inView && startEndAnimation) ? 1 : 0,
            }}>
              <Lottie
                isPaused={!(inView && startEndAnimation)}
                options={AniEndOptions} />
            </div>
          </div>
        </FadeAndSlide>
      </Box>
    </div>
  );
};

export default HeroImage;

const useStyles = makeStyles((theme: Theme) => ({
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
}));

