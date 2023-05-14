import connective from "@carbon-info/assets/animated/connective.json";
import stable from "@carbon-info/assets/animated/stable.json";
import versatile from "@carbon-info/assets/animated/versatile.json";
import carbonFeaturesBackground from "@carbon-info/assets/background/carbonFeaturesBackground.svg";
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

const Features: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  let carouselRef = useRef<any>();
  const [inViewCount, setInViewCount] = useState(1);
  const [firstScrollTriggered, setFirstScrollTriggered] = useState(false);

  const isMobile = isWidth("sm");

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.85,
    // triggerOnce: true,
  });

  function throttle(fn: (event: { deltaY: number; }) => void, wait: number) { //eslint-disable-line
    var time = Date.now();

    return function (event: { deltaY: number; }) {
      if (Math.abs(event.deltaY) < 4) return;

      if ((time + wait - Date.now()) < 0) {
        fn(event);
        time = Date.now();
      }
    };
  }

  const handleScroll = (event: { deltaY: number }) => {
    if (!carouselRef.current) return;

    if (event.deltaY < 0) {
      // scroll up
      if (carouselRef.current.state.currentSlide === 2) {
        window.removeEventListener("wheel", throttled);
        document.body.style.overflowY = "";
        return;
      }
      carouselRef.current.previous();
    } else if (event.deltaY > 0) {
      // scroll down
      if (carouselRef.current.state.currentSlide === 4) {
        window.removeEventListener("wheel", throttled);
        document.body.style.overflowY = "";
        carouselRef.current.goToSlide(2);
        return;
      }
      carouselRef.current.next();
    }
  };

  const handleFirstInView = () => {
    if (inViewCount === 1) {
      setFirstScrollTriggered(true);
      document.body.style.overflowY = "hidden";
      window.addEventListener("wheel", throttled);
      setInViewCount((count) => count + 1);
    }
  };

  const throttled = throttle(handleScroll, 800);

  useEffect(() => {
    if (inView) {
      handleFirstInView();
    }
  }, [inView, inViewCount]);

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
    <div ref={ref} id="features" className={classes.features}>
      <img src={carbonFeaturesBackground} className={clsx(classes.background, { open: firstScrollTriggered })} />
      <FadeAndSlide visible={firstScrollTriggered}>
        <Box className={clsx(classes.container, { open: firstScrollTriggered })} >
          <>
            <Typography variant="h1" color="textPrimary" align="left" className={classes.featuresHeader}>
              Carbon is built&nbsp;
              {!isMobile && <br />}
              <span style={{ color: theme.palette.primary.light }}>for the future,&nbsp;</span>
              {!isMobile && <br />}
              today.
            </Typography>
          </>
          <Carousel
            ref={carouselRef}
            responsive={Responsive.roadmap}
            containerClass={clsx(classes.carouselContainer, "carousel-container")}
            arrows={false}
            infinite={true}
            showDots
            dotListClass={classes.dotList}
            minimumTouchDrag={150}
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
  },
  background: {
    height: "1283px",
    position: "absolute",
    top: -125,
    left: "-15%",
    scale: 2.25,
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