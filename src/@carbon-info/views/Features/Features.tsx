import connective from "@carbon-info/assets/animated/connective.json";
import stable from "@carbon-info/assets/animated/stable.json";
import versatile from "@carbon-info/assets/animated/versatile.json";
import carbonFeaturesGlowBg from "@carbon-info/assets/background/carbonFeaturesGlowBg.svg";
import carbonFeaturesHexagonGlow from "@carbon-info/assets/background/carbonFeaturesHexagonGlow.svg";
import carbonFeaturesHexagonOutline from "@carbon-info/assets/background/carbonFeaturesHexagonOutline.svg";
import { CTAButton, FadeAndSlide } from "@carbon-info/components";
import { Path, Responsive } from "@carbon-info/constants";
import { isWidth } from "@carbon-info/utils/environment";
import { Box, Theme, Typography, makeStyles, useTheme } from "@material-ui/core";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import Lottie from "react-lottie";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface FeatureItem {
  header: string,
  subheader: string,
  description: string,
  ctaLink: string,
  icon: any,
}

type EventHandler<T = any> = (event: T) => void; // eslint-disable-line

const Features: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const carouselRef = useRef<any>();
  const hexagonGlowRef = useRef<HTMLImageElement>(null);
  const hexagonOutlineRef = useRef<HTMLImageElement>(null);
  const [inViewCount, setInViewCount] = useState(1);
  const [firstScrollTriggered, setFirstScrollTriggered] = useState(false);
  const [scrolledPastFeatures, setScrolledPastFeatures] = useState(false);
  const angle = 70;
  const isMobile = isWidth("sm");

  // for event listeners
  let touchStartY = 0;
  let glowRotation = 0;
  let outlineRotation = 0;

  const { ref, inView } = useInView({
    /* Optional options */
    rootMargin: isMobile ? "-20% 0% -80% 0%" : "-50% 0% -50% 0%",
    threshold: 0,
  });

  useEffect(() => {
    if (scrolledPastFeatures) {
      const timer = setInterval(() => {
        const { currentSlide } = carouselRef.current.state;

        if (currentSlide === 4) {
          carouselRef.current.goToSlide(2);
          rotateHexagonGlow(0);
          rotateHexagonOutline(0);
          return;
        }

        onNextFeature();
      }, 5000);

      // Clean up the timer when the component unmounts or when the dependencies change
      return () => clearInterval(timer);
    }
  }, [scrolledPastFeatures]);

  const throttle = (fn: (event: any) => void, wait: number) => { // eslint-disable-line
    var time = Date.now();

    return function (event: any) {
      if (Math.abs(event.deltaY) < 4) return;

      if ((time + wait - Date.now()) < 0) {
        fn(event);
        time = Date.now();
      }
    };
  };

  const onNextFeature = () => {
    rotateHexagonGlow(angle);
    rotateHexagonOutline(angle);
    carouselRef.current.next();
  };

  const handleScroll: EventHandler<{ deltaY: number }> = (event) => {
    if (!carouselRef.current) return;

    const { currentSlide } = carouselRef.current.state;

    if (event.deltaY < 0) {
      scrollUp(currentSlide);
    } else if (event.deltaY > 0) {
      scrollDown(currentSlide);
    }
  };

  const scrollUp = (currentSlide: number) => {
    if (currentSlide === 2) {
      document.body.style.overflowY = "";
      removeEventListeners();
      return;
    }

    rotateHexagonGlow(-angle);
    rotateHexagonOutline(-angle);
    carouselRef.current.previous();
  };

  const scrollDown = (currentSlide: number) => {
    if (currentSlide === 4) {
      document.body.style.overflowY = "";
      removeEventListeners();
      carouselRef.current.goToSlide(2);
      setScrolledPastFeatures(true);
      rotateHexagonGlow(0);
      rotateHexagonOutline(0);
      return;
    }

    onNextFeature();
  };

  const handleSwipes: EventHandler<TouchEvent> = (e) => {
    const { currentSlide } = carouselRef.current.state;
    let touchEndY = e.changedTouches[0].screenY;
    if (touchEndY < touchStartY) {
      scrollDown(currentSlide);
    }
    if (touchEndY > touchStartY) {
      scrollUp(currentSlide);
    }
  };

  const handleTouchStart: EventHandler<TouchEvent> = (e) => {
    touchStartY = e.changedTouches[0].screenY;
  };

  const handleInView = () => {
    if (inViewCount === 1) {
      setFirstScrollTriggered(true);
      document.body.style.overflowY = "hidden";
      setTimeout(() => {
        addEventListeners();
        setInViewCount((count) => count + 1);
      }, 200);
    }

    if (inViewCount > 1 && !scrolledPastFeatures) {
      document.body.style.overflowY = "hidden";
      setTimeout(() => {
        addEventListeners();
        setInViewCount((count) => count + 1);
      }, 200);
    }
  };

  const addEventListeners = () => {
    window.addEventListener("wheel", throttled);
    if (isMobile) {
      window.addEventListener("touchstart", handleTouchStart);
      window.addEventListener("touchend", throttledMobile);
    }
  };

  const removeEventListeners = () => {
    window.removeEventListener("wheel", throttled);
    if (isMobile) {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", throttledMobile);
    }
  };

  const rotateHexagonGlow = (angle: number) => {
    if (hexagonGlowRef.current) {
      glowRotation = angle !== 0 ? (glowRotation + angle) % 360 : angle;
      hexagonGlowRef.current.style.transform = `rotate(-${glowRotation}deg)`;
    }
  };

  const rotateHexagonOutline = (angle: number) => {
    if (hexagonOutlineRef.current) {
      outlineRotation = angle !== 0 ? (glowRotation + angle) % 360 : angle;
      hexagonOutlineRef.current.style.transform = `rotate(-${outlineRotation}deg)`;
    }
  };

  const throttled: EventHandler = throttle(handleScroll, 800);
  const throttledMobile: EventHandler = throttle(handleSwipes, 800);

  useEffect(() => {
    if (inView) {
      handleInView();
    }
  }, [inView]);

  const ConnectiveAnimation = {
    loop: true,
    autoplay: true,
    animationData: connective,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const StableAnimation = {
    loop: true,
    autoplay: true,
    animationData: stable,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const VersatileAnimation = {
    loop: true,
    autoplay: true,
    animationData: versatile,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const items: FeatureItem[] = [{
    header: "Connective",
    subheader: "Powers interoperability",
    description: "between multiple blockchains with on-chain liquidity through PolyNetwork and IBC.",
    ctaLink: Path.Footer.Guides,
    icon: ConnectiveAnimation,
  }, {
    header: "Versatile",
    subheader: "Native support",
    description: "of any crypto derivatives, amplified liquidity pools, AMMs, on-chain order books and more.",
    ctaLink: Path.Footer.Guides,
    icon: VersatileAnimation,
  }, {
    header: "Stable",
    subheader: "Custom-built",
    description: "using Cosmos-SDK and secured through Tendermint PoS for trustless and safe transactions.",
    ctaLink: Path.Footer.Guides,
    icon: StableAnimation,
  }];

  return (
    <div id="features" className={classes.features}>
      <img ref={hexagonOutlineRef} src={carbonFeaturesHexagonOutline} className={clsx(classes.hexagonOutline, { open: firstScrollTriggered })} />
      <img ref={hexagonGlowRef} src={carbonFeaturesHexagonGlow} className={clsx(classes.hexagonGlow, { open: firstScrollTriggered })} />
      <img src={carbonFeaturesGlowBg} className={clsx(classes.background, { open: firstScrollTriggered })} />
      <FadeAndSlide visible={firstScrollTriggered}>
        <Box className={clsx(classes.container, { open: firstScrollTriggered })} >
          <div ref={ref}>
            <Typography variant="h1" color="textPrimary" align="left" className={classes.featuresHeader}>
              Carbon is built&nbsp;
              {!isMobile && <br />}
              <span style={{ color: theme.palette.primary.light }}>for the future,&nbsp;</span>
              {!isMobile && <br />}
              today.
            </Typography>
          </div>
          <Carousel
            ref={carouselRef}
            responsive={Responsive.roadmap}
            containerClass={clsx(classes.carouselContainer, "carousel-container")}
            arrows={false}
            infinite={true}
            showDots
            dotListClass={classes.dotList}
            minimumTouchDrag={150}
            customTransition="opacity 10ms ease-in"
            transitionDuration={10}
            itemClass={classes.item}
          >
            {items.map((item, index) => {
              return (
                <Box className={classes.carouselItem} key={`${item.header}-${index}`}>
                  <Box>
                    <Typography variant="h2" color="textPrimary" align="left" style={{ marginBottom: "40px" }}>
                      {item.header}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" align="left" className={classes.description}>
                      <span style={{ color: theme.palette.text.primary }}>{item.subheader}</span>
                      &nbsp;{item.description}
                    </Typography>
                    <CTAButton
                      text="Read Our Docs"
                      link={item.ctaLink}
                      textClassName={classes.ctaButtonText}
                      iconClassName={classes.ctaButtonIcon}
                    />
                  </Box>
                  <Lottie
                    options={item.icon}
                    width={144}
                    height={150}
                    style={{ margin: 0 }}
                  />
                </Box>
              );
            })}
          </Carousel>
        </Box>
      </FadeAndSlide >
    </div >
  );
};

export default Features;

const useStyles = makeStyles((theme: Theme) => ({
  features: {
    position: "relative",
    margin: "5rem 0",
    [theme.breakpoints.only("md")]: {
      margin: "10rem 0",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "10rem 0",
      minHeight: "725px",
    },
  },
  hexagonGlow: {
    transition: "all 1s",
    position: "absolute",
    top: -95,
    left: "13%",
    scale: 0.9,
    opacity: 0,
    zIndex: 0,
    "&.open": {
      opacity: 1,
    },
    [theme.breakpoints.only("xl")]: {
      left: "30%",
    },
    [theme.breakpoints.only("md")]: {
      top: "-65%",
      scale: 0.7,
      left: "5%",
    },
    [theme.breakpoints.only("sm")]: {
      top: "-35%",
      scale: 0.6,
      left: "-38%",
    },
    [theme.breakpoints.only("xs")]: {
      top: "-43%",
      scale: 0.5,
      left: "-75%",
    },
  },
  hexagonOutline: {
    transition: "all 1s",
    position: "absolute",
    top: 35,
    left: "13%",
    scale: 0.9,
    opacity: 0,
    zIndex: 0,
    "&.open": {
      opacity: 1,
    },
    [theme.breakpoints.only("xl")]: {
      top: "-1%",
      left: "35%",
    },
    [theme.breakpoints.only("md")]: {
      top: "-35%",
      scale: 0.7,
      left: "10%",
    },
    [theme.breakpoints.only("sm")]: {
      top: "-15%",
      scale: 0.6,
      left: "-28%",
    },
    [theme.breakpoints.only("xs")]: {
      top: "-22%",
      scale: 0.5,
      left: "-50%",
    },
  },
  background: {
    position: "absolute",
    top: -125,
    left: "-10%",
    scale: 1,
    opacity: 0,
    zIndex: 0,
    "&.open": {
      opacity: 1,
    },
    [theme.breakpoints.only("xl")]: {
      left: 0,
    },
    [theme.breakpoints.only("md")]: {
      top: -400,
      scale: 1.5,
      left: "-25%",
    },
    [theme.breakpoints.down("sm")]: {
      top: "-5rem",
      height: "80rem",
      left: "-75%",
    },
  },
  container: {
    width: "100%",
    display: "flex",
    paddingTop: "23.125rem",
    paddingBottom: "20rem",
    justifyContent: "space-between",
    opacity: 0,
    transition: "all 2s ease",
    zIndex: 10,
    position: "relative",
    margin: "auto",
    maxWidth: "1400px",
    "&.open": {
      opacity: 1,
    },
    [theme.breakpoints.down("md")]: {
      justifyContent: "space-between",
      padding: "10rem 0",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      paddingBottom: 0,
    },
  },
  featuresHeader: {
    [theme.breakpoints.up("md")]: {
      minWidth: "425px",
      whiteSpace: "nowrap",
    },
  },
  carouselContainer: {
    width: "667px",
    marginLeft: "129px",
    [theme.breakpoints.only("md")]: {
      width: "60%",
      marginLeft: 0,
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 32px)",
      marginLeft: 0,
      paddingRight: "2.5rem",
    },
    "& .react-multi-carousel-item--active": {
      opacity: "1 !important",
    },
  },
  carouselItem: {
    marginBottom: "96px",
    display: "flex",
    alignItems: "flex-start",
    [theme.breakpoints.down("sm")]: {
      marginTop: "4rem",
      flexDirection: "column-reverse",
      justifyContent: "flex-start",
    },
  },
  item: {
    opacity: 0,
    transition: "opacity 1s ease-in",
  },
  ctaButton: {
    paddingBottom: "6.25rem",
    borderBottom: `2px solid ${theme.palette.primary.dark}`,
  },
  ctaButtonText: {
    ...theme.typography.body2,
    fontWeight: 700,
    color: theme.palette.primary.main,
  },
  ctaButtonIcon: {
    height: "14px",
    width: "16px",
    "& path": {
      fill: theme.palette.primary.light,
    },
  },
  dotList: {
    zIndex: 100,
    width: "100%",
    "& .react-multi-carousel-dot--active": {
      "& > button": {
        background: theme.palette.primary.dark,
      },
    },
    "& .react-multi-carousel-dot": {
      width: "calc(100%/3)",
      "& > button": {
        width: "100%",
        height: "2px",
        borderRadius: 0,
        borderStyle: "none",
        background: theme.palette.divider,
      },
    },
  },
  description: {
    marginBottom: "40px",
    maxWidth: "523px",
    [theme.breakpoints.only("md")]: {
      maxWidth: "400px",
    },
  },
}));