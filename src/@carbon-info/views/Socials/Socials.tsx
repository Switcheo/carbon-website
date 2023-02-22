import SocialsBackground from "@carbon-info/assets/background/socialsBackground.svg";
import TelegramIcon from "@carbon-info/assets/icons/telegram.svg";
import DiscordIcon from "@carbon-info/assets/icons/discord.svg";
import GithubIcon from "@carbon-info/assets/icons/github.svg";
import TwitterIcon from "@carbon-info/assets/icons/twitter.svg";
import { FadeAndSlide } from "@carbon-info/components";
import { Box, Theme, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import { useInView } from "react-intersection-observer";
import { ExternalLink } from "@carbon-info/assets";

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
    link: "https://t.me/carbon_ecosystem",
    description: "Get the latest updates on Carbon by joining our ecosystem announcement channel on Telegram.",
  }, {
    icon: TwitterIcon,
    title: "Twitter",
    link: "https://twitter.com/0xcarbon",
    description: "Don’t miss a single tweet, follow us on Twitter at @0xcarbon for more alpha.",
  }, {
    icon: DiscordIcon,
    title: "Discord Chat",
    link: "https://discord.com/invite/SPh62Hf",
    description: "Have a question about Carbon? Ask our global community or get in touch with us on Discord.",
  }, {
    icon: GithubIcon,
    title: "Developer GitHub",
    link: "https://github.com/Switcheo/carbon-bootstrap",
    description: "Interested in building on Carbon or joining us as a validator? Join the discussion.",
  }];

  return (
    <div ref={ref} id="socials">
      <Box className={classes.boxContainer}>
        <FadeAndSlide visible={inView}>
          <img src={SocialsBackground} className={classes.background} />
          <Box display="flex" justifyContent="center">
            <Box maxWidth="478px" marginRight="10rem">
              <Typography variant="h1" color="textPrimary" style={{ textAlign: "left", marginBottom: "2.5rem" }}>Be apart of our global community</Typography>
              <Typography variant="body1" color="textSecondary" style={{ textAlign: "left" }}>
                Join a fast-growing community of developers and innovators connected all over the world building the new face of finance.
              </Typography>
            </Box>
            <Box>
              {items.map((item: socialItem, index) => (
                <Box key={`${item.title}-${index}`} display="flex" justifyContent="flex-end" alignItems="center" marginBottom="2.5rem">
                  <img src={item.icon} alt="icon" className={classes.icon} />
                  <div>
                    <Box onClick={() => window.open(`${item.link}`, "_blank")} display="flex" alignItems="center" style={{ marginBottom: "1rem" }}>
                      <Typography variant="h4" color="textPrimary" align="left">{item.title}</Typography>
                      <ExternalLink className={classes.linkIcon} />
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
    margin: "50vh auto",
    maxWidth: "1480px",
    [theme.breakpoints.only("xl")]: {
      maxWidth: "1600px",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "10vh 0px",
    },
  },
  background: {
    position: "absolute",
    width: "1000px",
    left: 0,
    top: "-325px",
    zIndex: -1,
  },
  icon: {
    height: "60px",
    width: "60px",
    marginRight: "2.5rem",
  },
  linkIcon: {
    height: "24px",
    width: "24px",
    marginLeft: "8px",
  },
}));