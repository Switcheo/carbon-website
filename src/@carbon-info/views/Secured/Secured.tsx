import { ArrowIcon } from "@carbon-info/assets";
import dropSwth from "@carbon-info/assets/animated/dropSWTH.json";
import floatSwth from "@carbon-info/assets/animated/floatSWTH.json";
import spinSwth from "@carbon-info/assets/animated/spinSWTH.json";
import { CTAButton } from "@carbon-info/components";
import FadeAndSlide from "@carbon-info/components/FadeAndSlide";
import { Box, Button, Theme, Typography, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Lottie, { EventListener, Options } from "react-lottie";
import "react-multi-carousel/lib/styles.css";

const Secured: React.FC = () => {
  const classes = useStyles();
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
    triggerOnce: true,
  });

  const DropSWTH = {
    loop: false,
    autoplay: true,
    animationData: dropSwth,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const FloatSWTH = {
    loop: true,
    autoplay: true,
    animationData: floatSwth,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const SpinSWTH = {
    loop: true,
    autoplay: true,
    animationData: spinSwth,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      scaleMode: "0.25",
    },
  };

  const [getSWTHIcon, setGetSWTHIcon] = useState<Options>();

  useEffect(() => {
    if (inView && !getSWTHIcon) {
      setGetSWTHIcon(DropSWTH);
    }
  }, [inView]);

  const events: EventListener[] = [{
    eventName: "complete",
    callback: () => setGetSWTHIcon(FloatSWTH),
  }];

  return (
    <div ref={ref} id="secured">
      <Box className={classes.boxContainer}>
        <FadeAndSlide visible={inView} opacity={1}>
          <Box className={clsx(classes.secureContainer, { open: inView })}>
            <div className={classes.descriptionContainer}>
              <Typography variant="h1" color="textPrimary" style={{ marginBottom: "2.125rem" }}>Secured by SWTH</Typography>
              <Typography variant="body1" color="textSecondary" style={{ fontWeight: 500, maxWidth: "35rem", marginBottom: "2.125rem" }}>Using the Carbon Token - <span className={classes.highlightedText}>$SWTH</span>, anyone can secure the Carbon blockchain while earning transaction fees and staking rewards.</Typography>
              <Box display="flex" justifyContent="flex-start" alignItems="center">
                <Button variant="contained" className={classes.containedButton} href="https://hub.carbon.network/buy" target="_blank">Buy $SWTH<ArrowIcon style={{ marginLeft: "10px" }} /></Button>
                <CTAButton text="Start Staking" link="https://hub.carbon.network/stake" textClassName={classes.ctaText} iconClassName={classes.ctaIcon} />
              </Box>
            </div>
            <Box minWidth={400}>
              {getSWTHIcon && <Lottie
                options={getSWTHIcon}
                width={400}
                style={{ zIndex: 1 }}
                eventListeners={events}
              />
              }
            </Box>
            <Lottie
              options={SpinSWTH}
              width={650}
              height={650}
              style={{ position: "absolute", zIndex: 0, right: "-100px" }}
            />
          </Box>
        </FadeAndSlide >
      </Box>
    </div >
  );
};

export default Secured;

const useStyles = makeStyles((theme: Theme) => ({
  boxContainer: {
    margin: "50vh 0px",
    [theme.breakpoints.down("sm")]: {
      margin: "10vh 0px",
    },
  },
  secureContainer: {
    position: "relative",
    width: "fit-content",
    display: "flex",
    alignItems: "center",
    margin: "0 auto",
    "&.open": {
      opacity: 1,
    },
  },
  descriptionContainer: {
    maxWidth: "48.125rem",
    textAlign: "left",
    marginRight: "5rem",
  },
  highlightedText: {
    fontWeight: 700,
    color: theme.palette.primary.light,
  },
  containedButton: {
    ...theme.typography.h4,
    color: theme.palette.text.primary,
    textTransform: "none",
    padding: "0.5rem 1.5rem",
    marginRight: "2.125rem",
    borderRadius: "24px",
    background: "radial-gradient(63.65% 55% at 50.51% 100%, rgba(10, 220, 182, 0.4) 0%, rgba(10, 220, 182, 0.1) 51.54%, rgba(10, 220, 182, 0) 100%), #142C2C",
    "&:hover": {
      background: "radial-gradient(63.65% 55% at 50.51% 100%, rgba(10, 220, 182, 0.4) 0%, rgba(10, 220, 182, 0.1) 51.54%, rgba(10, 220, 182, 0) 100%), #142C2C",
      boxShadow: "none",
    },
  },
  ctaText: {
    ...theme.typography.h4,
    color: theme.palette.primary.main,
  },
  ctaIcon: {
    "& path": {
      fill: theme.palette.primary.main,
    },
  },
}));