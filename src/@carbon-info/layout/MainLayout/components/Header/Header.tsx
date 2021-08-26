import React, { useLayoutEffect, useState } from "react";
import { Hidden, Link, makeStyles, Theme, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { CarbonLogo, MenuIcon } from "@carbon-info/assets";
import MobileMenu from "./components/MobileMenu";
import clsx from "clsx";

const SWITCH_THRESHOLD = 45;

const Header: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [topOffset, setTopOffset] = useState(window.scrollY);
  useLayoutEffect(() => {
    const updateScrollPosition = () => {
      setTopOffset(window.scrollY);
    };
    window.addEventListener("scroll", updateScrollPosition);
    return () => window.removeEventListener("scroll", updateScrollPosition);
  }, []);
  const isScrolled = topOffset > SWITCH_THRESHOLD;

  return (
    <nav>
      <div className={clsx(classes.mobileMenu, { open: showMobileMenu })}>
        <MobileMenu callback={() => setShowMobileMenu(false)} />
      </div>
      <div className={classes.navBarContainer}>
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
      <Hidden mdUp>
        <div className={isScrolled ? classes.navBarFixedContainer : classes.navBarFixedContainerCollapsed}>
          {/* <span className={clsx(classes.mobileMenu, { open: showMobileMenu })}>
            <MobileMenu callback={() => setShowMobileMenu(false)} />
          </span> */}
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

      </Hidden>
    </nav>

  );
};

export default Header;

const useStyles = makeStyles((theme: Theme) => ({
  mobileMenu: {
    zIndex: 11,
    opacity: 0,
    transform: "translate(0px,-80vh)",
    transition: "opacity ease-in 0.3s, transform ease-in 0.4s",
    position: "fixed",
    top: 0,
    left: 0,
    pointerEvents: "none",
    // margin: theme.spacing(-6, -4, -12, -4),
    "&.open": {
      pointerEvents: "all",
      opacity: 1,
      transform: "translate(0px,0px)",
    },
  },
  navBarContainer: {
    display: "flex",
    alignItems: "center",
    margin: theme.spacing(6, 0, 12, 0),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(6, 4, 12, 4),
      transition: "all 0.25s linear",
    },
  },
  navBarFixedContainer: {
    zIndex: 10,
    display: "flex",
    alignItems: "center",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    transform: "translate(0px,0px)",
    background: "#272525",
    padding: "1.25rem 3rem 1.25rem 1rem",
    transition: "all 0.25s linear",
    opacity: 1,
    [theme.breakpoints.down("xs")]: {
      padding: ".5rem 3rem .75rem 1rem",
    },
  },
  navBarFixedContainerCollapsed: {
    zIndex: 10,
    display: "flex",
    alignItems: "center",
    position: "fixed",
    transform: "translate(0px,-40px)",
    top: 0,
    left: 0,
    right: 0,
    background: "#272525",
    padding: "1.25rem 3rem 1.25rem 1rem",
    transition: "all 0.25s linear",
    opacity: 0,
    [theme.breakpoints.down("xs")]: {
      padding: ".5rem 3rem .75rem 1rem",
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