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

const isFirefox = !!(navigator.userAgent.indexOf("Firefox") !== -1);
const isMobileSafari = !!(navigator.userAgent.indexOf("iPhone") > -1);

const CardWithCTA: React.FC<cardProps> = (props: cardProps) => {
  const classes = useStyles() as any;
  const { title, description, ctaText, icon, bigSVG, link, overwriteCSS = {} } = props;
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
    triggerOnce: true,
  });
  return (
    <div ref={ref}>
      <h1>
        {navigator.userAgent}
      </h1>
      <Box className={clsx(classes.boxContainer, { open: inView })}>
        <div className={clsx(classes.iconContainer, { big: bigSVG })}>
          <img src={icon} alt="icon" className={clsx(classes.icon, { big: bigSVG })} style={{ ...overwriteCSS }} />
        </div>
        <Grid className={classes.gridContainer} container alignItems="center" justifyContent="center">
          <Grid item className={classes.gridItem}>
            <div className={classes.textContainer}>
              <Typography color="textPrimary" variant="h2" className={classes.divTitle}>
                {title}
              </Typography>
              <Typography color="textPrimary" variant="body2" className={classes.subtext}>
                {description}
              </Typography>
              <div>
                <CTAButton
                  text={ctaText}
                  link={link}
                />
              </div>
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
    height: "4rem",
    maxWidth: "20rem",
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
    "&.big": {
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
  },
  iconContainer: {
    position: "relative",
    width: "100%",
    height: "25rem",
    [theme.breakpoints.down("sm")]: {
      height: "23rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "36rem",
    },
    [theme.breakpoints.down(550)]: {
      height: "33rem",
    },
    [theme.breakpoints.down(480)]: {
      height: "37rem",
    },
    [theme.breakpoints.down(420)]: {
      height: "33rem",
    },
    [theme.breakpoints.down(400)]: {
      height: "27rem",
    },
    [theme.breakpoints.down(350)]: {
      height: "23rem",
    },
    "&.big": {
      [theme.breakpoints.down("md")]: {
        position: "inherit",
        height: "24rem",
      },
      [theme.breakpoints.down("sm")]: {
        height: "23rem",
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
  },
  boxContainer: {
    background: "linear-gradient(353.27deg, rgba(41, 40, 40, 0.21) -9.67%, #161515 94.17%)",
    mixBlendMode: "normal",
    boxShadow: "inset 62px 98px 100px -60px #242424, inset 0px 1px 40px rgba(85, 85, 85, 0.04)",
    backdropFilter: "blur(100px)",
    borderRadius: 30,
    padding: "2em 3em 2em 4em",
    minHeight: "48rem",
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
      background: "linear-gradient(180deg,#74E8E8,#74E8E8,rgba(255,255,255,0.4),rgba(255,255,255,0.2))",
      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      maskComposite: `${isFirefox || isMobileSafari ? "subtract" : "source-out"}`,
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
      width: "90%",
      fontFamily: "TyrosPro",
      fontSize: "3.1rem",
    },
    [theme.breakpoints.down(700)]: {
      width: "100%",
    },
  },
  gridItem: {
    height: "100%",
    width: "100%",
  },
  gridContainer: {
    height: "24rem",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      // height: "0%",
    },
    [theme.breakpoints.down("xs")]: {
      paddingRight: "25%",
    },
    [theme.breakpoints.down(330)]: {
      paddingRight: "20%",
    },
  },
  textContainer: {
    height: "100%",
    boxSizing: "border-box",
    paddingRight: "30%",
    [theme.breakpoints.down(1190)]: {
      paddingRight: "20%",
    },
    [theme.breakpoints.down(1090)]: {
      paddingRight: "11%",
    },
    [theme.breakpoints.down("sm")]: {
      paddingRight: "25%",
      padding: "2rem",
    },
    [theme.breakpoints.down(740)]: {
      paddingRight: "15%",
    },
    [theme.breakpoints.down(630)]: {
      paddingRight: "8%",
    },
  },
}));