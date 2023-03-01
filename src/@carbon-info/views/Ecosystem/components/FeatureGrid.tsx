import { Box, Theme, Typography, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import { BlockchainConfig, ValidatorConfig, WalletConfig, isBlockchainConfig } from "../ecosystemConfig";
import clsx from "clsx";
import React from "react";

interface Props {
  items: BlockchainConfig[] | WalletConfig[] | ValidatorConfig[],
  inView: boolean,
}

const isFirefox = !!(navigator.userAgent.indexOf("Firefox") !== -1);
const isMobileSafari = !!(navigator.userAgent.indexOf("iPhone") > -1);

const FeatureGrid: React.FC<Props> = (props: Props) => {
  const { items, inView } = props;
  const theme = useTheme();
  const classes = useStyles();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box className={classes.gridContainer}>
      {isBlockchainConfig(items) && items.map((item: BlockchainConfig, index) => {
        const { icon, name, chain } = item;
        return (
          <Box key={`${name}-${index}`} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Box className={clsx(classes.cardContainer, `${chain}`, { open: inView })}>
              <img src={icon} alt="logo" className={classes.logo} />
              {!isMobile && <Typography variant="body1" color="textPrimary" style={{ marginTop: "1.5rem", fontWeight: 700 }}>{name}</Typography>}
            </Box>
            {isMobile && <Typography variant="body1" color="textPrimary" style={{ marginTop: "1.5rem", fontWeight: 700 }}>{name}</Typography>}
          </Box>
        );
      })}
      {!isBlockchainConfig(items) && items.map((item: WalletConfig | ValidatorConfig, index) => {
        const { icon, name } = item;
        return (
          <Box key={`${name}-${index}`} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Box className={clsx(classes.cardContainer, { open: inView })}>
              <img src={icon} alt="logo" className={classes.logo} />
              {!isMobile && <Typography variant="body1" color="textPrimary" style={{ marginTop: "1.5rem", fontWeight: 700 }}>{name}</Typography>}
            </Box>
            {isMobile && <Typography variant="body1" color="textPrimary" style={{ marginTop: "0.5rem", fontWeight: 700 }}>{name}</Typography>}
          </Box>
        );
      })}
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 15.625rem)",
    rowGap: "5rem",
    boxSizing: "border-box",
    justifyContent: "space-between",
    paddingBottom: "3.5rem",
    backgroundImage: `linear-gradient(to right, ${theme.palette.background.default}, ${theme.palette.background.default}), 
    linear-gradient(to right, ${theme.palette.background.default}, ${theme.palette.background.default}),
    linear-gradient(to right, rgb(196 196 196 / 14%), rgba(255, 255, 255, 0)), 
    linear-gradient(to left, rgb(196 196 196 / 14%), rgba(255, 255, 255, 0))`,
    /* Shadows */
    /* Shadow covers */
    backgroundPosition: "bottom center, top center, bottom center, top center",
    backgroundRepeat: "no-repeat",
    backgroundColor: theme.palette.background.default,
    backgroundSize: "100% 20px, 100% 20px, 100% 10px, 100% 10px",
    backgroundAttachment: "local, local, scroll, scroll",
    [theme.breakpoints.only("sm")]: {
      gridTemplateColumns: "repeat(auto-fill, 12rem)",
    },
    [theme.breakpoints.only("xs")]: {
      gridTemplateColumns: "repeat(auto-fill, 9rem)",
      rowGap: "2.5rem",
    },
    "&:after": {
      content: "",
      flex: "auto",
    },
  },
  cardContainer: {
    height: "15.625rem",
    width: "15.625rem",
    background: "linear-gradient(151.06deg, #121212 50%, rgba(0, 126, 119, 0.5) 256.32%)",
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
    "&.IBC": {
      background: "linear-gradient(151.06deg, #121212 50%, rgba(1, 103, 255, 0.5) 256.32%)",
      "&::before": {
        background: "linear-gradient(180deg, #0167FF 0%, rgba(1, 103, 255, 0) 100%)",
      },
    },
    "&.EVM": {
      background: "linear-gradient(151.06deg, #121212 50%, rgba(0, 126, 119, 0.5) 256.32%)",
      "&::before": {
        background: "linear-gradient(180deg, #74E8E8 0%, rgba(116, 232, 232, 0) 100%)",
      },
    },
    "&.Non-EVM": {
      background: "linear-gradient(151.06deg, #121212 50%, #C32B21 256.32%)",
      "&::before": {
        background: "linear-gradient(180deg, #D67A74 0%, rgba(195, 43, 33, 0) 100%)",
      },
    },
    "&.Coming": {
      background: "linear-gradient(151.06deg, #121212 50%, rgba(176, 176, 176, 0.5) 256.32%)",
      "&::before": {
        background: "linear-gradient(180deg, #B0B0B0 0%, rgba(176, 176, 176, 0) 100%)",
      },
    },
    [theme.breakpoints.only("sm")]: {
      height: "10rem",
      width: "10rem",
      borderRadius: 12,
      "&::before": {
        borderRadius: 12,
      },
    },
    [theme.breakpoints.only("xs")]: {
      height: "7.5rem",
      width: "7.5rem",
      borderRadius: 12,
      "&::before": {
        borderRadius: 12,
      },
    },
  },
  logo: {
    height: "6.25rem",
    width: "6.25rem",
    [theme.breakpoints.down("sm")]: {
      height: "3.5rem",
      width: "3.5rem",
    },
  },
}));

export default FeatureGrid;
