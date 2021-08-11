import React from "react";
import { makeStyles, Theme, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { CarbonLogo, MenuIcon } from "@carbon-info/assets";


const Header: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className={classes.navBarContainer}>
      <span>
        <CarbonLogo className={classes.logo} />
      </span>
      <div className={classes.navButtonContainer}>
        {
          isMobile ?
            <MenuIcon className={classes.menuIcon} />
            :
            <>
              <Typography color="textPrimary" display="inline">About</Typography>
              <Typography color="textPrimary" display="inline">Ecosystem</Typography>
              <Typography color="textPrimary" display="inline">Whitepaper</Typography>
              <Typography color="textPrimary" display="inline">Features</Typography>
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
  },
  logo: {
    verticalAlign: "middle",
    margin: theme.spacing(0, 1),
  },
  navButtonContainer: {
    marginLeft: "auto",
    display: "flex",
    gap: 45,
  },
}));