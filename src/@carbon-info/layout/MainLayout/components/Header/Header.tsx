import React from "react";
import { Link, makeStyles, Theme, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { CarbonLogo, MenuIcon } from "@carbon-info/assets";


const Header: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className={classes.navBarContainer}>
      <span className={classes.logoContainer}>
        <CarbonLogo className={classes.logo} />
      </span>
      <div className={classes.navButtonContainer}>
        {
          isMobile ?
            <MenuIcon className={classes.menuIcon} />
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
  navBarContainer: {
    display: "flex",
    alignItems: "center",
    margin: theme.spacing(6, 0, 12, 0),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(6, 4, 12, 4),
    },
  },
  menuIcon: {
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