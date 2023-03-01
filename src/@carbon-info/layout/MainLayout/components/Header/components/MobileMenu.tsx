import { ArrowIcon, CarbonLogo, MenuIconClose, TelegramIcon, TwitterIcon } from "@carbon-info/assets";
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
        <Typography color="textPrimary" variant="h1" style={{ margin: "5rem 0" }}>
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
        <Link href={Path.Header.SWTH} underline="none" target="_blank">
          <Typography variant="h4" color="textPrimary" display="inline">Buy $SWTH <ArrowIcon className={classes.arrowIcon} /></Typography>
        </Link>
      </div>
      <div className={classes.socialMediaContainer}>
        <Link href={Path.Socials.Telegram} underline="none" target="_blank">
          <TelegramIcon className={classes.socialMediaIcon} />
        </Link>
        <Link href={Path.Socials.Twitter} underline="none" target="_blank">
          <TwitterIcon className={classes.socialMediaIcon} />
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;

const useStyles = makeStyles((theme: Theme) => ({
  menuIcon: {
    marginLeft: "auto",
  },
  navBarContainer: {
    height: "-webkit-fill-available",
    width: "100vw",
    position: "relative",
    background: "#272525",
    top: 0,
    left: 0,
    display: "flex",
    flexDirection: "column",
    zIndex: 9,
    // padding: "2rem 3rem",
    boxSizing: "border-box",
    gridAutoRows: "max-content",
  },
  background: {
    height: "100%",
    width: "100%",
    position: "absolute",
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
  },
  navButtonContainer: {
    padding: "2rem 3rem",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    textAlign: "start",
    gap: 25,
    overflowY: "auto",
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
    width: "-webkit-fill-available",
    boxSizing: "border-box",
    marginTop: "auto",
    textAlign: "start",
    margin: "0px -3rem",
    marginBottom: "-2rem",
    padding: "2rem",
    alignSelf: "end",
    background: "#201E1E",
    [theme.breakpoints.down("xs")]: {
      padding: "3rem",
    },
  },
  socialMediaIcon: {
    margin: "0px 1rem",
    width: "5rem",
  },
  arrowIcon: {
    height: "12px",
    width: "20px",
  },
}));