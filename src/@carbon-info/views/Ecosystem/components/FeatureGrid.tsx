import { isFirefox, isWidth } from "@carbon-info/utils/environment";
import { StyleUtils } from "@carbon-info/utils/styles";
import { Box, Grow, Theme, Typography, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { BlockchainConfig, ValidatorConfig, WalletConfig, isBlockchainConfigArr, isValidatorConfig } from "../ecosystemConfig";

interface Props {
  items: BlockchainConfig[] | WalletConfig[] | ValidatorConfig[],
  inView: boolean,
}

const FeatureGrid: React.FC<Props> = (props: Props) => {
  const { items, inView } = props;
  const classes = useStyles();

  const isMobile = isWidth("sm");

  return (
    <Box className={classes.gridContainer}>
      {isBlockchainConfigArr(items) && items.map((item: BlockchainConfig, index) => {
        const { label, logo, category } = item;
        return (
          <Grow in timeout={(index + 1) * 200 > 1000 ? 1000 : (index + 1) * 200} key={`${label}-${index}`}>
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
              <Box className={clsx(classes.cardContainer, `${category}`, { open: inView })}>
                <img src={logo} alt="logo" className={classes.logo} />
                {!isMobile && <Typography variant="body1" color="textPrimary" className={classes.cardTypography} style={{ marginTop: "1.5rem" }}>{label}</Typography>}
              </Box>
              {isMobile && <Typography variant="body1" color="textPrimary" noWrap className={classes.cardTypography} style={{ marginTop: "1.5rem" }}>{label}</Typography>}
            </Box>
          </Grow>
        );
      })}
      {!isBlockchainConfigArr(items) && items.map((item: WalletConfig | ValidatorConfig, index) => {
        const isValidator = isValidatorConfig(item);
        return (
          <Grow in timeout={(index + 1) * 200 > 1000 ? 1000 : (index + 1) * 200} key={`${item.label}-${index}`}>
            <Box className={clsx(classes.boxContainer, { clickable: isValidator })} onClick={isValidator ? () => window.open(`${item.link}`, "_blank") : undefined}>
              <Box className={clsx(classes.cardContainer, { open: inView })}>
                <img src={item.logo} alt="logo" className={classes.logo} />
                {!isMobile && <Typography variant="body1" color="textPrimary" className={classes.cardTypography} style={{ marginTop: "1.5rem" }}>{item.label}</Typography>}
              </Box>
              {isMobile && <Typography variant="body1" color="textPrimary" noWrap className={classes.cardTypography} style={{ marginTop: "0.5rem" }}>{item.label}</Typography>}
            </Box>
          </Grow>
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
    scrollbarGutter: "stable",
    justifyContent: "space-between",
    paddingBottom: "3.5rem",
    [theme.breakpoints.only("sm")]: {
      gridTemplateColumns: "repeat(auto-fill, 12rem)",
    },
    [theme.breakpoints.only("xs")]: {
      gridTemplateColumns: "repeat(auto-fill, 9rem)",
      rowGap: "2.5rem",
      maxHeight: "30rem",
    },
    // gradient scroll
    overflowY: "auto",
    maxHeight: "45rem",
    "&::-webkit-scrollbar": {
      width: "12px",
      height: "12px",
    },
    "&::-webkit-scrollbar-corner": {
      backgroundColor: "transparent",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "transparent",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundClip: "padding-box",
      backgroundColor: theme.palette.background.thumb,
      border: "3px solid",
      borderColor: "transparent",
      borderRadius: "14px",
    },
    "& *": {
      scrollbarColor: "transparent",
      scrollbarWidth: "thin",
    },
  },
  boxContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "&.clickable:hover": {
      cursor: "pointer",
    },
  },
  cardContainer: {
    height: "15.625rem",
    width: "15.625rem",
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
      pointerEvents: "none",
    },
    "&.IBC": {
      background: StyleUtils.gridItemBackgroundGradient("rgba(1, 103, 255, 0.5)"),
      "&::before": {
        background: StyleUtils.gridItemBorderGradient("#0167FF", "rgba(1, 103, 255, 0)"),
      },
    },
    "&.EVM": {
      background: StyleUtils.gridItemBackgroundGradient("rgba(0, 126, 119, 0.5)"),
      "&::before": {
        background: StyleUtils.cardBackgroundGradient,
      },
    },
    "&.Non-EVM": {
      background: StyleUtils.gridItemBackgroundGradient("#C32B21"),
      "&::before": {
        background: StyleUtils.gridItemBorderGradient("#D67A74", "rgba(195, 43, 33, 0)"),
      },
    },
    "&.Coming": {
      background: StyleUtils.gridItemBackgroundGradient("rgba(176, 176, 176, 0.5)"),
      "&::before": {
        background: StyleUtils.gridItemBorderGradient("#B0B0B0", "rgba(176, 176, 176, 0)"),
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
  cardTypography: {
    fontFamily: "TyrosPro-Bold",
    fontWeight: 700,
    padding: "0 0.5rem",
    textAlign: "center",
    [theme.breakpoints.only("sm")]: {
      width: "10rem",
    },
    [theme.breakpoints.only("xs")]: {
      width: "7.5rem",
    },
  },
}));

export default FeatureGrid;
