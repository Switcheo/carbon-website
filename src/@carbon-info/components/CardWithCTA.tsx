import { isFirefox } from "@carbon-info/utils/environment";
import { StyleUtils } from "@carbon-info/utils/styles";
import { Box, makeStyles, Theme, Typography } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { useInView } from "react-intersection-observer";

interface cardProps {
  title: string,
  description: string,
  icon: string,
  link: string,
}

const CardWithCTA: React.FC<cardProps> = (props: cardProps) => {
  const classes = useStyles() as any;
  const { title, description, icon, link = {} } = props;
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={classes.contentCardContainer}>
      <Box className={clsx(classes.boxContainer, { open: inView })} onClick={() => window.open(`${link}`, "_blank")}>
        <div className={classes.iconContainer}>
          <img src={icon} alt="icon" className={classes.icon} />
        </div>
        <div className={classes.textContainer}>
          <Typography color="textPrimary" variant="h2" className={classes.title}>
            {title}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            {description}
          </Typography>
        </div>
      </Box>
    </div>
  );
};

export default CardWithCTA;

const useStyles = makeStyles((theme: Theme) => ({
  contentCardContainer: {
    height: "100%",
    position: "relative",
    display: "grid",
  },
  icon: {
    position: "absolute",
    right: 0,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      height: "8rem",
      width: "8rem",
    },
  },
  iconContainer: {
    position: "relative",
    height: "6.25rem",
    marginBottom: "2.5rem",
  },
  boxContainer: {
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    position: "relative",
    background: theme.palette.background.default,
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
    maxWidth: "450px",
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
      background: StyleUtils.cardBackgroundGradient,
      mask: StyleUtils.maskGradient,
      maskComposite: `${isFirefox() ? "subtract" : "source-out"}`,
      WebkitMaskComposite: "source-out",
      pointerEvents: "none",
    },
    [theme.breakpoints.down("sm")]: {
      borderRadius: 13.3,
      "&::before": {
        borderRadius: 13.3,
      },
    },
    [theme.breakpoints.only("md")]: {
      padding: "3rem 1.5rem 5rem",
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
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-start",
    },
  },
  textContainer: {
    height: "100%",
    maxWidth: "380px",
  },
  title: {
    marginBottom: "2.5rem",
    maxWidth: "328px",
    [theme.breakpoints.only("md")]: {
      paddingTop: "2.5rem",
    },
  },
}));