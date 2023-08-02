import { ExternalLink } from "@carbon-info/assets";
import SocialsBackground from "@carbon-info/assets/background/socialsBackground.svg";
import DiscordIcon from "@carbon-info/assets/icons/discord.svg";
import GithubIcon from "@carbon-info/assets/icons/github.svg";
import TelegramIcon from "@carbon-info/assets/icons/telegram.svg";
import TwitterIcon from "@carbon-info/assets/icons/twitter.svg";
import { FadeAndSlide } from "@carbon-info/components";
import { Path } from "@carbon-info/constants";
import { isWidth } from "@carbon-info/utils/environment";
import { StyleUtils } from "@carbon-info/utils/styles";
import { Box, Theme, Typography, makeStyles } from "@material-ui/core";
import "animate.css";
import React from "react";
import { useInView } from "react-intersection-observer";

interface socialItem {
  icon: string,
  title: string,
  link: string,
  description: string,
}

const Socials: React.FC = () => {
  const classes = useStyles();
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.35,
    triggerOnce: true,
  });

  const items: socialItem[] = [{
    icon: TelegramIcon,
    title: "Telegram Channel",
    link: Path.Socials.Telegram,
    description: "Get the latest updates on Carbon by joining our ecosystem announcement channel on Telegram.",
  }, {
    icon: TwitterIcon,
    title: "Twitter",
    link: Path.Socials.Twitter,
    description: "Don’t miss a single tweet, follow us on Twitter at @0xcarbon for more alpha.",
  }, {
    icon: DiscordIcon,
    title: "Discord Chat",
    link: Path.Socials.Discord,
    description: "Have a question about Carbon? Ask our global community or get in touch with us on Discord.",
  }, {
    icon: GithubIcon,
    title: "Developer GitHub",
    link: Path.Socials.Github,
    description: "Interested in building on Carbon or joining us as a validator? Join the discussion.",
  }];

  const widthMdDown = isWidth("md");

  return (
    <div ref={ref} id="socials">
      <Box className={classes.boxContainer}>
        <FadeAndSlide visible={inView}>
          <img src={SocialsBackground} className={classes.background} />
          <Box className={classes.contentBox}>
            <Box className={classes.headerSection}>
              <Typography variant="h1" color="textPrimary" style={{ textAlign: "left", marginBottom: "2.5rem" }}>Be a part of our global community</Typography>
              <Typography variant="body1" color="textSecondary" style={{ textAlign: "left" }}>
                Join a fast-growing community of developers and innovators connected all over the world building the new face of finance.
              </Typography>
            </Box>
            <Box>
              {items.map((item: socialItem, index) => (
                <Box key={`${item.title}-${index}`} display="flex" justifyContent={widthMdDown ? "flex-start" : "flex-end"} alignItems="center" marginBottom="2.5rem" className={inView ? "animate__animated animate__fadeInRight" : ""} style={{ animationDelay: `calc(${index} * 250ms)` }}>
                  <img src={item.icon} alt="icon" className={classes.icon} />
                  <div>
                    <Box onClick={() => window.open(`${item.link}`, "_blank")} className={classes.socialLink}>
                      <Box className={classes.titleWrapper}>
                        <Typography variant="h4" align="left">{item.title}</Typography>
                        <ExternalLink className={classes.linkIcon} />
                      </Box>
                    </Box>
                    <Typography variant="body1" color="textSecondary" align="left" style={{ maxWidth: "678px" }}>{item.description}</Typography>
                  </div>
                </Box>
              ))}
            </Box>
          </Box>
        </FadeAndSlide >
      </Box >
    </div >
  );
};

export default Socials;

const useStyles = makeStyles((theme: Theme) => ({
  boxContainer: {
    position: "relative",
    margin: "15rem auto 5rem",
    maxWidth: "1400px",
    zIndex: 10,
    [theme.breakpoints.down("sm")]: {
      margin: "15rem 0",
    },
  },
  background: {
    position: "absolute",
    width: "1000px",
    left: "-7.5rem",
    top: "-350px",
    zIndex: 0,
    [theme.breakpoints.only("xs")]: {
      top: 0,
      width: "700px",
      left: "-50%",
    },
    [theme.breakpoints.up("xl")]: {
      top: "-300px",
    },
  },
  contentBox: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  headerSection: {
    maxWidth: "478px",
    marginRight: "10rem",
    zIndex: 10,
    [theme.breakpoints.only("md")]: {
      maxWidth: "unset",
      marginRight: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "unset",
      marginRight: 0,
      marginBottom: "3rem",
    },
  },
  socialLink: {
    display: "flex",
    marginBottom: "1rem",
    color: theme.palette.common.white,
  },
  titleWrapper: {
    alignItems: "center",
    cursor: "pointer",
    display: "flex",
    transition: StyleUtils.hoverTransition(),
    "&:hover": {
      color: theme.palette.primary.main,
    },
    "&:hover $linkIcon": {
      transition: StyleUtils.hoverTransition(),
      "& path": {
        fill: theme.palette.primary.main,
      },
    },
  },
  icon: {
    height: "3.75rem",
    width: "3.75rem",
    marginRight: "2.5rem",
  },
  linkIcon: {
    height: "1.5rem",
    width: "1.5rem",
    marginLeft: "8px",
  },
}));