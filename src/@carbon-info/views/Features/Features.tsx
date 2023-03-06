import connective from "@carbon-info/assets/animated/connective.json";
import stable from "@carbon-info/assets/animated/stable.json";
import versatile from "@carbon-info/assets/animated/versatile.json";
import carbonFeaturesBackground from "@carbon-info/assets/background/carbonFeaturesBackground.svg";
import { CTAButton, FadeAndSlide } from "@carbon-info/components";
import { Path, Responsive } from "@carbon-info/constants";
import { Box, Theme, Typography, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
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
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
    triggerOnce: true,
  });

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
    header: "Secure & Stable",
    subheader: "Custom-built",
    description: "using Cosmos-SDK and secured through Tendermint PoS for trustless and safe transactions.",
    ctaLink: Path.Footer.Guides,
    icon: StableAnimation,
  }];

  return (
    <div ref={ref} id="features" className={classes.features}>
      <img src={carbonFeaturesBackground} className={clsx(classes.background, { open: inView })} />
      <FadeAndSlide visible={inView}>
        <Box className={clsx(classes.container, { open: inView })} >
          <>
            <Typography variant="h1" color="textPrimary" align="left">
              Carbon is built&nbsp;
              {!isMobile && <br />}
              <span style={{ color: theme.palette.primary.light }}>for the future,&nbsp;</span>
              {!isMobile && <br />}
              today.
            </Typography>
          </>
          <Carousel
            responsive={Responsive.roadmap}
            containerClass={clsx(classes.carouselContainer, "carousel-container")}
            arrows={false}
            infinite={true}
            showDots
            dotListClass={classes.dotList}
          >
            {items.map((item, index) => {
              return (
                <Box className={classes.carouselItem} key={`${item.header}-${index}`}>
                  <Box>
                    <Typography variant="h2" color="textPrimary" align="left" style={{ marginBottom: "40px" }}>
                      {item.header}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" align="left" style={{ marginBottom: "40px", maxWidth: "523px" }}>
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
                    height={160}
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
    "&.open": {
      opacity: 1,
    },
    [theme.breakpoints.only("xl")]: {
      left: 0,
    },
    [theme.breakpoints.down("sm")]: {
      top: "5rem",
      height: "80rem",
      left: "-75%",
    },
  },
  container: {
    width: "100vw",
    flexGrow: 1,
    display: "flex",
    paddingTop: "23.125rem",
    paddingBottom: "20rem",
    justifyContent: "center",
    opacity: 0,
    transition: "all 2s ease",
    "&.open": {
      opacity: 1,
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  carouselContainer: {
    width: "667px",
    marginLeft: "129px",
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 72px)",
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
}));