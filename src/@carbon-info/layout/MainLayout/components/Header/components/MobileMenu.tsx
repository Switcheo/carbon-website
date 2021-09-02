import React, { useRef } from "react";
import { Link, makeStyles, Typography, Theme } from "@material-ui/core";
import { CarbonLogo, MediumIcon, MenuIconClose, TelegramIcon, TwitterIcon } from "@carbon-info/assets";
import onClickOutside from "@carbon-info/hooks/OnClickOutside";
import { Path } from "@carbon-info/constants";

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
        <Link href={"/#footer"} underline="none" onClick={callback} >
          <Typography color="textPrimary" variant="h1" display="inline">Learn</Typography>
        </Link>
        <Link onClick={callback} href={"https://forum.switcheo.foundation/topic/42/applying-for-project-grants-under-the-switcheo-development-fund"} underline="none" target="_blank">
          <Typography color="textPrimary" variant="h1" display="inline">Build</Typography>
        </Link>
        <Link href={"/roadmap"} underline="none" onClick={callback} >
          <Typography color="textPrimary" variant="h1" display="inline">Roadmap</Typography>
        </Link>
        <Link href={"https://scan.carbon.network"} underline="none" onClick={callback} >
          <Typography color="textPrimary" variant="h1" display="inline">Explorer</Typography>
        </Link>
      </div>
      <div className={classes.socialMediaContainer}>
        <Link href={Path.Socials.Medium} underline="none" target="_blank">
          <MediumIcon className={classes.socialMediaIcon} />
        </Link>
        <Link href={Path.Socials.Telegram} underline="none" target="_blank">
          <TelegramIcon className={classes.socialMediaIcon} />
        </Link>
        <Link href={Path.Socials.SwitcheoTwitter} underline="none" target="_blank">
          <TwitterIcon className={classes.socialMediaIcon} />
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;

const useStyles = makeStyles((theme: Theme) => ({
  navBarContainer: {
    // height: "100vh",
    height: "-webkit-fill-available",
    width: "100vw",
    position: "absolute",
    background: "#272525",
    top: 0,
    left: 0,
    // alignItems: "center",
    display: "flex",
    flexDirection: "column",
    zIndex: 9,
    padding: "2rem 3rem",
    boxSizing: "border-box",
    gridAutoRows: "max-content",
  },
  logo: {
    width: "11rem",
    margin: theme.spacing(0, 1),
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    // height: "6vh",
    boxSizing: "border-box",
    [theme.breakpoints.down("xs")]: {
      textAlign: "start",
    },
  },
  navButtonContainer: {
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    // height: "80vh",
    boxSizing: "border-box",
    textAlign: "start",
    // margin: "5rem 0px",
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
    // height: "12vh",
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
}));