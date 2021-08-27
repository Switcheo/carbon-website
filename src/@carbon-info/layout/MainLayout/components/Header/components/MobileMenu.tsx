import React, { useRef } from "react";
import { Link, makeStyles, Typography, Theme } from "@material-ui/core";
import { CarbonLogo, MediumIcon, MenuIconClose, TelegramIcon, TwitterIcon } from "@carbon-info/assets";
import onClickOutside from "@carbon-info/hooks/OnClickOutside";

interface Props {
  callback: () => void,
}

const MobileMenu: React.FC<Props> = (props: Props) => {
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;
  const { callback } = props;
  const classes = useStyles();
  onClickOutside(ref, callback);
  return (
    <div className={classes.navBarContainer} ref={ref}>
      <div className={classes.logoContainer}>
        <CarbonLogo className={classes.logo} />
        <MenuIconClose onClick={callback} style={{ marginLeft: "auto" }} />
      </div>
      <div className={classes.navButtonContainer}>
        <Link href={"/#footer"} underline="none">
          <Typography color="textPrimary" display="inline">About</Typography>
        </Link>
        <Link href={"/#stats"} underline="none">
          <Typography color="textPrimary" display="inline">Ecosystem</Typography>
        </Link>
        <Link href={"/#Whitepaper"} underline="none" target="_blank">
          <Typography color="textPrimary" display="inline">Whitepaper</Typography>
        </Link>
        <Link href={"/#utility"} underline="none">
          <Typography color="textPrimary" display="inline">Features</Typography>
        </Link>
        <Link href={"/#footer"} underline="none">
          <Typography color="textPrimary" variant="h1" display="inline">Contact Us</Typography>
        </Link>
      </div>
      <div className={classes.socialMediaContainer}>
        <MediumIcon className={classes.socialMediaIcon} />
        <TelegramIcon className={classes.socialMediaIcon} />
        <TwitterIcon className={classes.socialMediaIcon} />
      </div>
    </div>
  );
};

export default MobileMenu;

const useStyles = makeStyles((theme: Theme) => ({
  navBarContainer: {
    // height: "100vh",
    width: "100vw",
    position: "absolute",
    background: "#272525",
    top: 0,
    left: 0,
    alignItems: "center",
    display: "grid",
    zIndex: 9,
    padding: "2rem 3rem",
    boxSizing: "border-box",
    gridAutoRows: "max-content",
  },
  logo: {
    width: "10rem",
    margin: theme.spacing(0, 1),
  },
  logoContainer: {
    display: "flex",
    marginBottom: "auto",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      textAlign: "start",
    },
  },
  navButtonContainer: {
    padding: "2rem",
    display: "grid",
    textAlign: "start",
    margin: "5rem 0px",
    height: "25rem",
    gap: 25,
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: "2px",
      backgroundColor: "#554B4B",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#74E8E8",
      borderRadius: "4px",
      height: "10px",
      transform: "scale(0.3)",
    },
  },
  socialMediaContainer: {
    marginTop: "auto",
    textAlign: "start",
    margin: "0px -3rem",
    marginBottom: "-2rem",
    padding: "3rem",
    alignSelf: "end",
    background: "#201E1E",
  },
  socialMediaIcon: {
    margin: "0px 1rem",
    width: "5rem",
  },
}));