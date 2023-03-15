import { ArrowIcon, CarbonLogo, MenuIcon } from "@carbon-info/assets";
import { Path } from "@carbon-info/constants";
import { isWidth } from "@carbon-info/utils/environment";
import { Hidden, Link, Theme, Typography, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React, { useLayoutEffect, useState } from "react";
import MobileMenu from "./components/MobileMenu";

const SWITCH_THRESHOLD = 45;

const Header: React.FC = () => {
  const classes = useStyles();
  const isMobile = isWidth("sm");
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
          <Link href={"/"} underline="none">
            <CarbonLogo className={classes.logo} />
          </Link>
        </span>
        <div className={classes.navButtonContainer}>
          {
            isMobile ?
              <>
                <div className={classes.navButtonMobile} onClick={() => setShowMobileMenu(true)}>
                  <MenuIcon className={clsx(classes.menuIcon, { open: showMobileMenu })} />
                </div>
              </>
              :
              <>
                <Link href={Path.Footer.Guides} underline="none" target="_blank">
                  <Typography variant="h4" color="textPrimary" display="inline">Learn</Typography>
                </Link>
                <Link href={Path.Header.Build} underline="none" target="_blank">
                  <Typography variant="h4" color="textPrimary" display="inline">Build</Typography>
                </Link>
                <Link href={Path.Footer.CarbonScan} underline="none" target="_blank">
                  <Typography variant="h4" color="textPrimary" display="inline">Explore</Typography>
                </Link>
              </>
          }
        </div>
        {!isMobile && (
          <>
            <Link href={Path.Footer.Buy} underline="none" target="_blank" className={classes.externalLink}>
              <Typography variant="h4" color="textPrimary" display="inline">Buy $SWTH <ArrowIcon /></Typography>
            </Link>
          </>
        )}
      </div>
      <Hidden mdUp>
        {!showMobileMenu && (
          <div className={isScrolled ? classes.navBarFixedContainer : classes.navBarFixedContainerCollapsed}>
            <span className={classes.logoContainer}>
              <Link href={"/"} underline="none">
                <CarbonLogo className={classes.logoFixed} />
              </Link>
            </span>
            <div className={classes.navButtonMobile}>
              <div onClick={() => setShowMobileMenu(true)}>
                <MenuIcon className={clsx(classes.menuIcon, { open: showMobileMenu })} />
              </div>
            </div>
          </div>
        )}
      </Hidden>
    </nav>

  );
};

export default Header;

const useStyles = makeStyles((theme: Theme) => ({
  mobileMenu: {
    height: "-webkit-fill-available",
    zIndex: 11,
    opacity: 0,
    transform: "translate(0px,-80vh)",
    transition: "opacity ease-in 0.3s, transform ease-in 0.4s",
    position: "fixed",
    top: 0,
    left: 0,
    pointerEvents: "none",
    "&.open": {
      pointerEvents: "all",
      opacity: 1,
      transform: "translate(0px,0px)",
    },
  },
  navBarContainer: {
    display: "flex",
    alignItems: "center",
    maxWidth: "1400px",
    margin: theme.spacing(6, "auto"),
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(6, 4, 12, 4),
      transition: "all 0.25s linear",
    },
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(3, 2, 8, 2),
    },
    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing(1, 0, 7, 0),
    },
  },
  navBarFixedContainer: {
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    transform: "translate(0px,0px)",
    background: theme.palette.background.default,
    padding: "1.25rem 3rem 1.25rem 1rem",
    transition: "all 0.25s linear",
    opacity: 1,
    [theme.breakpoints.down("xs")]: {
      padding: ".75rem 2rem .75rem 1rem",
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
    background: theme.palette.background.navBar,
    padding: "1.25rem 3rem 1.25rem 1rem",
    transition: "all 0.25s linear",
    opacity: 0,
    [theme.breakpoints.down("xs")]: {
      padding: ".5rem 3rem .75rem 1rem",
    },
  },
  menuIcon: {
    position: "relative",
  },
  logo: {
    verticalAlign: "middle",
    width: "200px",
    [theme.breakpoints.down("xs")]: {
      marginRight: "auto",
      textAlign: "start",
      width: "11rem",
    },
  },
  logoContainer: {
    display: "flex",
    flex: 1,
    [theme.breakpoints.down("xs")]: {
      textAlign: "start",
    },
  },
  logoFixed: {
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "11rem",
      marginLeft: "1rem",
    },
  },
  navButtonContainer: {
    display: "flex",
    gap: 50,
    justifyContent: "center",
    flex: 1,
  },
  navButtonMobile: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
  },
  externalLink: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
  },
}));