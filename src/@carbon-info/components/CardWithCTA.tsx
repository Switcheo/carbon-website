import { Box, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import { CTAButton } from ".";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

interface cardProps {
  title: string,
  description: string,
  icon: string,
  iconAlignment?: "side" | "top",
  ctaText: string,
  bigSVG?: boolean,
  isMobile?: boolean,
  link: string,
  overwriteCSS?: any,
}

const CardWithCTA: React.FC<cardProps> = (props: cardProps) => {
  const classes = useStyles() as any;
  const { title, description, ctaText, icon, bigSVG, isMobile, link, overwriteCSS = {} } = props;
  const svgClass = bigSVG ? "bigIcon" : isMobile ? "icon" : "icon";
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
    triggerOnce: true,
  });
  return (
    <div ref={ref}>
      <Box className={clsx(classes.boxContainer, { open: inView })}>
        <div className={svgClass ? classes.bigIconContainer : classes.iconContainer}>
          <img src={icon} alt="icon" className={classes[svgClass]} style={{ ...overwriteCSS }} />
        </div>
        <Grid className={classes.gridContainer} container alignItems="center" justifyContent="center">
          <Grid item container>
            <div className={classes.textContainer}>
              <Typography color="textPrimary" variant="h2" className={classes.divTitle}>
                {title}
              </Typography>
              <Typography color="textPrimary" variant="body2" className={classes.subtext}>
                {description}
              </Typography>
              <CTAButton
                text={ctaText}
                link={link}
              />
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default CardWithCTA;

const useStyles = makeStyles((theme: Theme) => ({
  subtext: {
    margin: "3rem 0px",
  },
  icon: {
    position: "absolute",
    marginLeft: "auto",
    marginRight: "auto",
    left: 0,
    right: 0,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      maxWidth: "27rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      position: "relative",
      maxWidth: "100%",
    },
  },
  bigIcon: {
    position: "absolute",
    marginLeft: "auto",
    marginRight: "auto",
    left: 0,
    right: 0,
    textAlign: "center",
    maxWidth: "100%",
    transform: "scale(2)",
    [theme.breakpoints.down("md")]: {
      maxWidth: "27rem",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "29rem",
    },
    [theme.breakpoints.down(700)]: {
      maxWidth: "21rem",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "38rem",
    },
    [theme.breakpoints.down(380)]: {
      maxWidth: "35rem",
    },
    [theme.breakpoints.down(350)]: {
      maxWidth: "30rem",
    },
  },
  bigIconContainer: {
    position: "relative",
    width: "100%",
    height: "25rem",
    [theme.breakpoints.down("md")]: {
      position: "inherit",
      height: "24rem",
    },
    // [theme.breakpoints.down(1100)]: {
    //   position: "relative",
    //   height: "20rem",
    // },
    [theme.breakpoints.down("sm")]: {
      height: "23rem",
    },
    [theme.breakpoints.down(700)]: {
      height: "20rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "33rem",
    },
    [theme.breakpoints.down(400)]: {
      height: "27rem",
    },
    [theme.breakpoints.down(350)]: {
      height: "22rem",
    },
  },
  iconContainer: {
    position: "relative",
    width: "100%",
    height: "25rem",
    [theme.breakpoints.down("sm")]: {
      height: "23rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "auto",
    },
  },
  boxContainer: {
    // border: "1px solid white",
    background: "linear-gradient(353.27deg, rgba(41, 40, 40, 0.21) -9.67%, #161515 94.17%)",
    mixBlendMode: "normal",
    boxShadow: "inset 62px 98px 100px -60px #242424, inset 0px 1px 40px rgba(85, 85, 85, 0.04)",
    backdropFilter: "blur(100px)",
    borderRadius: 30,
    padding: "2em 3em 2em 4em",
    // width: "485px",
    minHeight: "48rem",
    // width: "22rem",
    textAlign: "start",
    overflow: "hidden",
    margin: "auto",
    opacity: 0,
    transform: "translate(0px, 20px)",
    transition: "opacity ease-in 0.3s, transform ease-in 0.4s",
    "&.open": {
      opacity: 1,
      transform: "translate(0px,0px)",
    },
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: 30,
      padding: "1.755px",
      background: "linear-gradient(180deg,#74E8E8,#FFFFFF,rgba(255,255,255,0.5))",
      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      maskComposite: "destination-out",
      pointerEvents: "none",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0px",
      minHeight: "46rem",
      borderRadius: 13.3,
      "&::before": {
        borderRadius: 13.3,
      },
    },
    [theme.breakpoints.down("xs")]: {
      height: "60rem",
      padding: "2em 2em 2em 3em",
    },
    [theme.breakpoints.down(400)]: {
      height: "50rem",
    },
    [theme.breakpoints.down(350)]: {
      height: "25rem",
    },
  },
  divTitle: {
    [theme.breakpoints.down("sm")]: {
      fontFamily: "TyrosPro",
      // fontWeight: 300,
      fontSize: "3.1rem",
      // lineHeight: "2.3rem",
    },
  },
  gridContainer: {
    height: "100%",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "0%",
    },
    [theme.breakpoints.down("xs")]: {
      paddingRight: "25%",
    },
  },
  ctaIcon: {
    margin: "0px 0.125rem",
    [theme.breakpoints.down("sm")]: {
      transform: "scale(0.8)",
      marginTop: "10px",
    },
  },
  textContainer: {
    paddingRight: "30%",
    [theme.breakpoints.down("sm")]: {
      padding: "2rem",
    },
  },
}));