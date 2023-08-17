/* eslint-disable */
import { Responsive } from "@carbon-info/constants";
import { isFirefox, isWidth } from "@carbon-info/utils/environment";
import { StyleUtils } from "@carbon-info/utils/styles";
import { Box, Button, Grow, Theme, Typography, makeStyles, useTheme } from "@material-ui/core";
import clsx from "clsx";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { DAppsConfig } from "../ecosystemConfig";

interface Props {
  items: DAppsConfig[],
  inView: boolean,
}

const AppsCarousel: React.FC<Props> = (props: Props) => {
  const { items, inView } = props;
  const theme = useTheme();
  const classes = useStyles();
  const [view, setView] = useState(0);

  const widthSm = isWidth("sm");

  return (
    <Carousel
      responsive={Responsive.apps}
      containerClass={clsx(classes.carouselContainer, "carousel-container")}
      arrows={!widthSm}
      showDots={widthSm}
      infinite={true}
      beforeChange={(currSlide) => {
        const offset = widthSm ? 2 : 5;
        const currSlideMod = currSlide < offset ? items.length - (offset - currSlide) : (currSlide - offset) % items.length;
        setView(currSlideMod);
      }}
      minimumTouchDrag={150}
      itemClass={classes.itemContainer}
      transitionDuration={700}
      customTransition={"transform 700ms cubic-bezier(0,-0.11,0,.98) 0ms"}
    >
      {items.map((item, index) => {
        const { name, icon, description, tag, ctaLink } = item;
        const totalCards = items.length;
        const preview = widthSm ? 1 : 2;
        const buttonText = view === index ? `Launch ${name}` : tag

        return (<Grow in timeout={(index + 1) * 200 > 1000 ? 1000 : (index + 1) * 200} key={`${name}-featured-dApps`} >
          <Box id={`list-item-${index}`} className={clsx(classes.cardContainer, index === view && "expandCard", { open: inView }, { lastCard: index === (view + preview) % totalCards })}>
            <Typography variant="body1" color="textPrimary" className={classes.tag}>{tag}</Typography>
            <img src={icon} className={index === view ? classes.dAppLogo : classes.logo} />
            <Typography variant="h3" color="textPrimary" className={classes.nameLabel}>{name}</Typography>
            {index === view && <Typography variant="body1" style={{ color: theme.palette.text.button, marginTop: "1rem" }}>{description}</Typography>}
            <Button className={classes.ctaButton} href={ctaLink} target="_blank">{buttonText}</Button>
            <Box className={clsx(classes.backgroundImage, view !== index && 'inactive')} style={{ backgroundImage: `url("${item?.backgroundImage}")` }} />
          </Box>
        </Grow>)
      })}
    </Carousel >
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  carouselContainer: {
    display: "flex",
    paddingBottom: "5rem",
    "& > ul": {
      alignItems: "flex-end",
      "& > li": {
        "&.react-multi-carousel-item--active": {
          width: "unset !important",
          marginRight: "1rem",
        },
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
    [theme.breakpoints.only("md")]: {
      width: "calc(100% + 24px)",
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% + 16px)",
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
    transition: "opacity ease-in 0.3s, transform ease-in 0.4s, padding-top ease-in-out 0.7s, padding-bottom ease-in-out 0.7s !important",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "20rem",
    height: "36.25rem",
    "& > button": {
      padding: "0rem 0.75rem",
      fontSize: "0.624rem",
      marginTop: "2.5rem",
    },
    "&.open": {
      opacity: 1,
      transform: "translate(0px,0px)",
    },
    "&.lastCard": {
      mask: StyleUtils.carouselGradient,
      WebkitMask: StyleUtils.carouselGradient,
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
    [theme.breakpoints.only("xs")]: {
      width: "12.5rem",
      height: "22.5rem",
    },
    "&.expandCard": {
      width: "37.5rem",
      height: "32.5rem",
      margin: "0 1rem 0 1rem",
      padding: "5rem",
      alignItems: "start",
      position: "relative",
      boxShadow: `${theme.shadows[5]}`,
      [theme.breakpoints.only("xs")]: {
        width: "25rem",
        height: "25rem",
        padding: "3rem",
      },
    },
  },
  tag: {
    fontFamily: "TyrosPro-Bold",
    background: theme.palette.text.tag,
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
    background: StyleUtils.ctaButtonGradient,
    borderRadius: "12px",
    padding: "1rem 2rem",
    textTransform: "none",
    marginTop: "2rem",
    transition: StyleUtils.hoverTransition("background"),
    "&:hover": {
      background: StyleUtils.activeGradient,
    },
  },
  minButton: {
    ...theme.typography.body2,
    fontWeight: 700,
    background: theme.palette.text.tag,
    padding: "0.5rem 1.5rem",
    borderRadius: "32px",
    "&:hover": {
      background: theme.palette.text.tag,
    },
  },
  logo: {
    height: "6.25rem",
    width: "6.25rem",
  },
  nameLabel: {
    fontFamily: "TyrosPro-Bold",
    fontWeight: 700,
    marginTop: "1rem",
  },
  itemContainer: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      height: '55vh',
    },
  },
  backgroundImage: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    zIndex: -1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: '0.5',
    transition: "1s",
    "&.inactive": {
      opacity: 0,
    }
  },
}));

export default AppsCarousel;
