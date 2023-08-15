import { Scroll } from "@carbon-info/assets";
import heroBackgroundAnimation from "@carbon-info/assets/animated/heroBackgroundAnimation.json";
import { FadeAndSlide } from "@carbon-info/components";
import { isWidth } from "@carbon-info/utils/environment";
import { Grid, Theme, Typography, makeStyles } from "@material-ui/core";
import "animate.css";
import clsx from "clsx";
import React from "react";
import { useInView } from "react-intersection-observer";
import Lottie from "react-lottie";

const IntroPage: React.FC = () => {
  const classes = useStyles();
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
    triggerOnce: true,
  });

  const isMobile = isWidth("xs");

  const AniStartOptions = {
    loop: true,
    autoplay: true,
    animationData: heroBackgroundAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const scrollRef = React.useRef<HTMLDivElement>(null);
  const altCarbonRef = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState(0);
  React.useEffect(() => {
    if (scrollRef.current) {
      const homeHeight = scrollRef.current.parentElement?.parentElement?.parentElement?.offsetHeight ?? 0;
      const navBarHeight = scrollRef.current.parentElement?.parentElement?.parentElement?.offsetTop ?? 0;
      setHeight(homeHeight + navBarHeight);
    }
  }, []);

  const goToData = () => {
    window.scrollTo(0, height);
  };

  const goToAltCarbon = () => {
    window.scrollTo({ left: 0, top: document.documentElement.getBoundingClientRect().height ?? document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div ref={ref} id="home">
      <Grid container className={classes.container}>
        <Lottie
          options={AniStartOptions}
          width={isMobile ? "100%" : 1480}
          height={isMobile ? 650 : "100%"}
        />
        <div className={classes.headerContainer}>
          <FadeAndSlide visible={inView} transform={[0, -20]}>
            <Typography variant="body1" color="textSecondary" className={classes.bodyTypography}>
              MEET CARBON
            </Typography>
          </FadeAndSlide>
          <Typography color="textPrimary" variant="h1" className={clsx(classes.mainTitle, "animate__animated animate__slideInUp", { open: inView })} >
            The Core of
            <br />
            <span className={clsx(classes.highlightedText, { open: inView })} >
              Decentralized
              <br />
            </span>
            <span className={clsx(classes.highlightedText)}>
              Financial Markets.
            </span>
          </Typography>
          <FadeAndSlide visible={inView}>
            <Typography color="textSecondary" variant="body1" className={clsx(classes.subtitle, "animate__animated animate__slideInUp")}>
              Carbon is a cross-chain protocol that acts as<br />a building block for DeFi.
            </Typography>
          </FadeAndSlide>
          <FadeAndSlide visible={inView}>
            <div ref={scrollRef} className={clsx(classes.scrollContainer, { open: inView })} onClick={() => goToData()}>
              <Scroll className={clsx(classes.scrollIcon, "bounce")} />
              <Typography variant="body2" className={classes.scrollText}>SCROLL TO EXPLORE</Typography>
            </div>
          </FadeAndSlide>
        </div>
        <div className={classes.altCarbonContainer} ref={altCarbonRef}>
          <Typography variant="body1" className={classes.altCarbon} onClick={() => goToAltCarbon()} >Looking for Carbon DeFi by <span className={classes.bancor}>Bancor</span>?</Typography>
        </div>
      </Grid>
    </div >
  );
};

export default IntroPage;

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "-24px",
      marginTop: "-24px",
      width: "calc(100% + 48px)",
    },
  },
  headerContainer: {
    zIndex: 5,
    marginTop: "10rem",
    position: "absolute",
    top: 0,
    [theme.breakpoints.only("xs")]: {
      marginTop: "8rem",
    },
  },
  mainTitle: {
    opacity: 0,
    transition: "all 2s ease",
    marginTop: "0.75rem",
    "&.open": {
      opacity: 1,
    },
    [theme.breakpoints.down(1600)]: {
      fontSize: "2.75rem",
      lineHeight: "3.85rem",
    },
    [theme.breakpoints.down(1280)]: {
      fontSize: "3.25rem",
      lineHeight: "4.65rem",
    },
    [theme.breakpoints.down("sm")]: {
      ...theme.typography.h3,
    },
  },
  subtitle: {
    transition: "all 2s ease",
    maxWidth: "40rem",
  },
  highlightedText: {
    color: theme.palette.primary.light,
  },
  scrollContainer: {
    opacity: 0,
    marginTop: "30rem",
    position: "relative",
    zIndex: 10,
    cursor: "pointer",
    "&.open": {
      opacity: 1,
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "21.5rem",
    },
  },
  scrollIcon: {
    "&.bounce": {
      animation: "bounce 2s ease infinite",
    },
    [theme.breakpoints.down("md")]: {
      height: "2.5rem",
    },
  },
  scrollText: {
    marginTop: "1rem",
    fontWeight: 600,
    color: theme.palette.text.hint,
  },
  altCarbonContainer: {
    top: "70vh",
    position: "absolute",
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    cursor: "pointer",
    "@media (max-width: 790px)": {
      marginTop: "0rem",
    },
  },
  altCarbon: {
    border: theme.palette.text.secondary,
    background: theme.palette.background.default,
    borderWidth: "1px",
    borderStyle: "solid",
    color: theme.palette.text.primary,
    borderRadius: "12px",
    padding: theme.spacing(1, 1.5, 1, 1.5),
    boxShadow: "33px 33px 75px -10px #000000BF, -33px -33px 75px -10px #00000054",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  bodyTypography: {
    fontWeight: 400,
  },
  bancor: {
    color: theme.palette.primary.main,
    fontWeight: 700,
  },
}));
