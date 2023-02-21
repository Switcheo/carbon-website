import Connective from "@carbon-info/assets/icons/connective.svg";
import Stable from "@carbon-info/assets/icons/stable.svg";
import Versatile from "@carbon-info/assets/icons/versatile.svg";
import carbonFeaturesBackground from "@carbon-info/assets/background/carbonFeaturesBackground.svg";
import { CTAButton, FadeAndSlide } from "@carbon-info/components";
import { Box, makeStyles, Theme, Typography, useTheme } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { useInView } from "react-intersection-observer";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

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
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
    triggerOnce: true,
  });

  const items: FeatureItem[] = [{
    header: "Connective",
    subheader: "Powers interoperability",
    description: "between multiple blockchains with on-chain liquidity through PolyNetwork and IBC.",
    ctaLink: "https://guide.carbon.network",
    icon: Connective,
  }, {
    header: "Versatile",
    subheader: "Native support",
    description: "of any crypto derivatives, amplified liquidity pools, AMMs, on-chain order books and more.",
    ctaLink: "https://guide.carbon.network",
    icon: Versatile,
  }, {
    header: "Secure & Stable",
    subheader: "Custom-built",
    description: "using Cosmos-SDK and secured through Tendermint PoS for trustless and safe transactions.",
    ctaLink: "https://guide.carbon.network",
    icon: Stable,
  }];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div ref={ref} id="features">
      <FadeAndSlide visible={inView}>
        <img src={carbonFeaturesBackground} className={classes.background} />
        <Box className={clsx(classes.container, { open: inView })} >
          <>
            <Typography variant="h1" color="textPrimary" align="left">
              Carbon is built
              <br />
              <span style={{ color: theme.palette.primary.light }}>for the future,</span>
              <br />
              today.
            </Typography>
          </>
          <Carousel
            responsive={responsive}
            containerClass={clsx(classes.carouselContainer, "carousel-container")}
            arrows={false}
            infinite={true}
            showDots
            dotListClass={classes.dotList}
          >
            {items.map((item, index) => {
              return (
                <div key={`${item.header}-${index}`} style={{ marginBottom: "96px", display: "flex", alignItems: "flex-start" }}>
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
                  {/* TODO: uncomment when video is ready */}
                  {/* <video autoPlay loop muted className={classes.videoContainer}>
                    <source src={Connective} type="video/mp4" />
                  </video> */}
                  {/* TODO: remove img src use video instead */}
                  <img src={item.icon} />
                </div>
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
  background: {
    height: "1283px",
    position: "absolute",
    top: -125,
    left: "-15%",
    scale: 2.25,
    [theme.breakpoints.only("xl")]: {
      left: 0,
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
  },
  carouselContainer: {
    width: "667px",
    marginLeft: "129px",
  },
  connectiveContainer: {
    display: "flex",
    alignItems: "start",
    justifyContent: "flex-end",
    width: "50%",
    marginLeft: "7.5rem",
  },
  ctaButton: {
    paddingBottom: "6.25rem",
    borderBottom: "2px solid #0ADCB6",
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
  videoContainer: {
    width: "240px",
    marginTop: "-56px",
    position: "absolute",
    top: 0,
    right: 0,
  },
  sliderContainer: {
    transform: "none !important",
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