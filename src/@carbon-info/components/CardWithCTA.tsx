import { Box, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

interface cardProps {
  title: string,
  description: string,
  icon: string,
  iconAlignment?: "side" | "top",
  ctaText?: string,
  bigSVG?: boolean,
  isMobile?: boolean,
  link: string,
  overwriteCSS?: any,
}

const isFirefox = !!(navigator.userAgent.indexOf("Firefox") !== -1);
const isMobileSafari = !!(navigator.userAgent.indexOf("iPhone") > -1);

const CardWithCTA: React.FC<cardProps> = (props: cardProps) => {
  const classes = useStyles() as any;
  const { title, description, icon, bigSVG, overwriteCSS, link = {} } = props;
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      <Box className={clsx(classes.boxContainer, { open: inView })} onClick={() => window.open(`${link}`, "_blank")}>
        <div className={classes.iconContainer}>
          <img src={icon} alt="icon" className={clsx(classes.icon, { big: bigSVG })} style={{ ...overwriteCSS }} />
        </div>
        <Grid className={classes.gridContainer} container alignItems="center" justifyContent="center">
          <Grid item className={classes.gridItem}>
            <div className={classes.textContainer}>
              <Typography color="textPrimary" variant="h2" className={classes.title}>
                {title}
              </Typography>
              <Typography color="textSecondary" variant="body1">
                {description}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default CardWithCTA;

const useStyles = makeStyles((theme: Theme) => ({
  icon: {
    position: "absolute",
    right: 0,
    textAlign: "center",
  },
  iconContainer: {
    position: "relative",
    height: "6.25rem",
    marginBottom: "2.5rem",
  },
  boxContainer: {
    background: "#121212",
    mixBlendMode: "normal",
    boxShadow: theme.shadows[1],
    backdropFilter: "blur(100px)",
    borderRadius: 30,
    padding: "3rem 3rem 6rem",
    textAlign: "start",
    overflow: "hidden",
    margin: "auto",
    opacity: 0,
    transform: "translate(0px, 20px)",
    transition: "opacity ease-in 0.3s, transform ease-in 0.4s",
    "&:hover": {
      cursor: "pointer",
    },
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
      background: "linear-gradient(180deg, #74E8E8 0%, rgba(116, 232, 232, 0) 100%)",
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
  gridItem: {
    height: "100%",
    width: "100%",
    maxWidth: "525px",
    maxHeight: "491px",
  },
  gridContainer: {
    width: "100%",
  },
  textContainer: {
    height: "100%",
    maxWidth: "380px",
  },
  title: {
    marginBottom: "2.5rem",
    maxWidth: "328px",
  },
}));