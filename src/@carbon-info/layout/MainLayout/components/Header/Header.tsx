import React from "react";
import { makeStyles, Theme, Typography } from "@material-ui/core";
import { CarbonLogo } from "@carbon-info/assets";


const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.navBarContainer}>
      <span>
        <CarbonLogo className={classes.logo} />
      </span>
      <div className={classes.navButtonContainer}>
        <Typography color="textPrimary" display="inline">About</Typography>
        <Typography color="textPrimary" display="inline">Ecosystem</Typography>
        <Typography color="textPrimary" display="inline">Whitepaper</Typography>
        <Typography color="textPrimary" display="inline">Features</Typography>
      </div>
    </div>
  );
};

export default Header;

const useStyles = makeStyles((theme: Theme) => ({
  navBarContainer: {
    display: "flex",
    alignItems: "center",
    margin: theme.spacing(6, 12, 12, 12),
    width: "90%",
  },
  logo: {
    verticalAlign: "middle",
    margin: theme.spacing(0, 1),
  },
  logoTitle: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.h5.fontSize,
  },
  navButtonContainer: {
    marginLeft: "auto",
    display: "flex",
    gap: 45,
  },
}));