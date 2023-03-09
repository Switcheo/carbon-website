import { ArrowIcon, CarbonLogo, MenuIconClose } from "@carbon-info/assets";
import mobileMenuBackground from "@carbon-info/assets/background/mobileMenuBackground.svg";
import { Path } from "@carbon-info/constants";
import onClickOutside from "@carbon-info/hooks/OnClickOutside";
import { Link, Theme, Typography, makeStyles, useTheme } from "@material-ui/core";
import React, { useRef } from "react";

interface Props {
  callback: () => void,
}

const MobileMenu: React.FC<Props> = (props: Props) => {
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;
  const { callback } = props;
  const theme = useTheme();
  const classes = useStyles();
  onClickOutside(ref, callback);
  return (
    <div className={classes.navBarContainer} ref={ref}>
      <img src={mobileMenuBackground} className={classes.background} />
      <div className={classes.logoContainer}>
        <CarbonLogo className={classes.logo} />
        <MenuIconClose onClick={callback} className={classes.menuIcon} />
      </div>
      <div className={classes.navButtonContainer}>
        <Typography color="textPrimary" variant="h2" style={{ margin: "5rem 0" }}>
          The Core of
          <br />
          <span style={{ color: theme.palette.primary.light }}>
            Decentralized Financial Markets.
          </span>
        </Typography>
        <Link href={Path.Footer.Guides} underline="none" target="_blank">
          <Typography variant="h4" color="textPrimary" display="inline">Learn</Typography>
        </Link>
        <Link href={Path.Header.Build} underline="none" target="_blank">
          <Typography variant="h4" color="textPrimary" display="inline">Build</Typography>
        </Link>
        <Link href={Path.Footer.CarbonScan} underline="none" target="_blank">
          <Typography variant="h4" color="textPrimary" display="inline">Explore</Typography>
        </Link>
        <Link href={Path.Footer.Buy} underline="none" target="_blank">
          <Typography variant="h4" color="textPrimary" display="inline">Buy $SWTH <ArrowIcon className={classes.arrowIcon} /></Typography>
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;

const useStyles = makeStyles((theme: Theme) => ({
  menuIcon: {
    marginLeft: "auto",
    height: "12px",
    width: "12px",
  },
  navBarContainer: {
    height: "-webkit-fill-available",
    width: "100%",
    position: "relative",
    background: theme.palette.background.navBar,
    top: 0,
    left: 0,
    display: "flex",
    flexDirection: "column",
    zIndex: 9,
    boxSizing: "border-box",
    gridAutoRows: "max-content",
  },
  background: {
    height: "100%",
    width: "100%",
    position: "absolute",
    zIndex: 0,
  },
  logo: {
    width: "11rem",
    margin: theme.spacing(0, 1),
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    padding: ".75rem 3rem .75rem 1rem",
    [theme.breakpoints.down("xs")]: {
      textAlign: "start",
    },
    zIndex: 10,
  },
  navButtonContainer: {
    padding: "2rem 3rem",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    textAlign: "start",
    gap: 25,
    overflowY: "auto",
    zIndex: 10,
    "&::-webkit-scrollbar": {
      width: "2px",
      backgroundColor: theme.palette.background.scrollbar,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.primary.main,
      borderRadius: "4px",
      height: "10px",
      transform: "scale(0.3)",
    },
  },
  arrowIcon: {
    height: "12px",
    width: "20px",
  },
}));