import React, { useState } from "react";
import { Link, makeStyles, Theme, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { CarbonLogo, MenuIcon } from "@carbon-info/assets";
import MobileMenu from "./components/MobileMenu";
import clsx from "clsx";


const Header: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  console.log("triggered", showMobileMenu)
  return (
    <div className={classes.navBarContainer}>
      <span className={clsx(classes.mobileMenu, { open: showMobileMenu })}>
        <MobileMenu callback={() => setShowMobileMenu(false)} />
      </span>
      <span className={classes.logoContainer}>
        <CarbonLogo className={classes.logo} />
      </span>
      <div className={classes.navButtonContainer}>
        {
          isMobile ?
            <>
              <div onClick={() => setShowMobileMenu(true)}>
                <MenuIcon className={clsx(classes.menuIcon, { open: showMobileMenu })} />
              </div>
            </>
            :
            <>
              <Link href={"/#About"} underline="none" target="_blank">
                <Typography color="textPrimary" display="inline">About</Typography>
              </Link>
              <Link href={"/#Ecosystem"} underline="none" target="_blank">
                <Typography color="textPrimary" display="inline">Ecosystem</Typography>
              </Link>
              <Link href={"/#Whitepaper"} underline="none" target="_blank">
                <Typography color="textPrimary" display="inline">Whitepaper</Typography>
              </Link>
              <Link href={"/#Features"} underline="none" target="_blank">
                <Typography color="textPrimary" display="inline">Features</Typography>
              </Link>
            </>
        }
      </div>
    </div>
  );
};

export default Header;

const useStyles = makeStyles((theme: Theme) => ({
  mobileMenu: {
    zIndex: 10,
    opacity: 0,
    transform: "translate(0px,-80vh)",
    transition: "opacity ease-in 0.3s, transform ease-in 0.4s",
    position: "fixed",
    top: 0,
    left: 0,
    // margin: theme.spacing(-6, -4, -12, -4),
    "&.open": {
      opacity: 1,
      transform: "translate(0px,0px)",
    }
  },
  navBarContainer: {
    display: "flex",
    alignItems: "center",
    margin: theme.spacing(6, 0, 12, 0),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(6, 4, 12, 4),
    },
  },
  menuIcon: {
    position: "relative",
    transform: "scale(2.0)",
    [theme.breakpoints.down("xs")]: {
      transform: "scale(1.5)",
    },
  },
  logo: {
    verticalAlign: "middle",
    margin: theme.spacing(0, 1),
    [theme.breakpoints.down("xs")]: {
      width: "55%",
      marginRight: "auto",
      textAlign: "start",
    },
  },
  logoContainer: {
    [theme.breakpoints.down("xs")]: {
      textAlign: "start",
    },
  },
  navButtonContainer: {
    marginLeft: "auto",
    display: "flex",
    gap: 45,
  },
}));