import { StyleUtils } from "@carbon-info/utils/styles";
import { Box, Button, Theme, Typography, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import clsx from "clsx";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { DAppsConfig } from "../ecosystemConfig";

interface Props {
  items: DAppsConfig[],
  inView: boolean,
}

const isFirefox = !!(navigator.userAgent.indexOf("Firefox") !== -1);
const isMobileSafari = !!(navigator.userAgent.indexOf("iPhone") > -1);

const AppsCarousel: React.FC<Props> = (props: Props) => {
  const { items, inView } = props;
  const theme = useTheme();
  const classes = useStyles();
  const [view, setView] = useState(0);

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
    <Carousel
      responsive={responsive}
      containerClass={clsx(classes.carouselContainer, "carousel-container")}
      arrows={!isMobile}
      showDots={isMobile}
      infinite={true}
      beforeChange={(currSlide) => {
        const offset = isMobile ? 2 : 5;
        const currSlideAbs = (currSlide - offset === items.length) ? 0 : currSlide - offset;
        setView(currSlideAbs);
      }}
    >
      {items.map((item, index) => {
        const { name, icon, description, tag, ctaLink } = item;
        return view === index ? (
          <Box className={clsx(classes.cardContainer, "expandCard", { open: inView })} style={{ backgroundImage: `url("${item?.backgroundImage}")`, boxShadow: "inset 0 0 0 1000px rgba(18,18,18,.5)", backgroundPosition: isMobile ? "-24px -48px" : "" }} key={`${name}-featured-dApps`}>
            <Typography variant="body1" color="textPrimary" className={classes.tag}>{tag}</Typography>
            <img src={icon} className={classes.dAppLogo} />
            <Typography variant="h3" color="textPrimary" style={{ fontFamily: "TyrosPro-Bold", fontWeight: 700, marginTop: "1rem" }}>{name}</Typography>
            <Typography variant="body2" style={{ color: "#DDDDDD", marginTop: "1rem" }}>{description}</Typography>
            <Button className={classes.ctaButton} href={ctaLink} target="_blank">Launch {name}</Button>
          </Box>
        ) : (
          <Box className={clsx(classes.cardContainer, { open: inView })} key={`${name}-featured-dApps`}>
            <img src={icon} className={classes.logo} />
            <Typography variant="h4" color="textPrimary" style={{ fontFamily: "TyrosPro-Bold", fontWeight: 700, marginTop: "1rem" }}>{name}</Typography>
            <Button className={clsx(classes.ctaButton, classes.minButton)} href={ctaLink} target="_blank">{tag}</Button>
          </Box>
        );
      })}
    </Carousel>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  carouselContainer: {
    display: "flex",
    paddingBottom: "5rem",
    "& > ul": {
      alignItems: "flex-end",
      "& > li.react-multi-carousel-item--active": {
        width: "unset !important",
      },
    },
    "& > ul.react-multi-carousel-dot-list": {
      "& > li:not(:last-child)": {
        marginRight: "3rem",
      },
      "& > li.react-multi-carousel-dot button": {
        height: "0.8rem",
        width: "0.8rem",
        border: "none",
        background: theme.palette.text.disabled,
      },
      "& > li.react-multi-carousel-dot--active button": {
        background: theme.palette.primary.dark,
      },
    },
    "& > button": {
      "&.react-multiple-carousel__arrow--left": {
        left: 0,
      },
      "&.react-multiple-carousel__arrow--right": {
        right: 0,
      },
    },
  },
  cardContainer: {
    background: StyleUtils.gridItemBackgroundGradient("rgba(0, 126, 119, 0.5)"),
    mixBlendMode: "normal",
    boxShadow: theme.shadows[1],
    backdropFilter: "blur(100px)",
    borderRadius: 30,
    textAlign: "start",
    overflow: "hidden",
    opacity: 0,
    transform: "translate(0px, 20px)",
    transition: "opacity ease-in 0.3s, transform ease-in 0.4s",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "20rem",
    height: "36.25rem",
    marginLeft: "1rem",
    "& > button": {
      padding: "0rem 0.75rem",
      fontSize: "0.624rem",
      marginTop: "2.5rem",
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
      maskComposite: `${isFirefox || isMobileSafari ? "subtract" : "source-out"}`,
      pointerEvents: "none",
    },
    [theme.breakpoints.only("xs")]: {
      width: "12.5rem",
      height: "22.5rem",
    },
    "&.expandCard": {
      width: "37.5rem",
      height: "32.5rem",
      margin: "3.5rem 1rem 0 0",
      padding: "5rem",
      alignItems: "start",
      position: "relative",
      [theme.breakpoints.only("xs")]: {
        width: "25rem",
        height: "25rem",
        padding: "3rem",
      },
    },
  },
  tag: {
    fontFamily: "TyrosPro-Bold",
    background: "#0D4444",
    boxShadow: theme.shadows[2],
    borderRadius: "32px",
    padding: "0.5rem 1.5rem",
    position: "absolute",
    top: 40,
    right: 40,
  },
  dAppLogo: {
    height: "7.5rem",
    width: "7.5rem",
  },
  ctaButton: {
    ...theme.typography.body1,
    fontWeight: 700,
    background: "radial-gradient(63.65% 55% at 50.51% 100%, rgba(10, 220, 182, 0.4) 0%, rgba(10, 220, 182, 0.1) 51.54%, rgba(10, 220, 182, 0) 100%), #142C2C",
    borderRadius: "12px",
    padding: "1rem 2rem",
    textTransform: "none",
    marginTop: "2rem",
  },
  minButton: {
    ...theme.typography.body2,
    fontWeight: 700,
    background: "#0D4444",
    padding: "0.5rem 1.5rem",
    borderRadius: "32px",
  },
  logo: {
    height: "6.25rem",
    width: "6.25rem",
  },
}));

export default AppsCarousel;