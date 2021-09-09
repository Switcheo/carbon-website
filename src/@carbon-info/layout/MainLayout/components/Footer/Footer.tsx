import React from "react";
import { Box, Divider, Grid, Hidden, Link, makeStyles, Theme, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { CarbonLogo, FacebookIcon, LinkedInIcon, MediumIcon, TelegramIcon, TwitterIcon, YoutubeIcon } from "@carbon-info/assets";
import { Path } from "@carbon-info/constants";

const sitemap = [
  {
    section: "Learn",
    sitemap: [
      {
        title: "Learn",
        link: "https://staging.carbon.network",
        target: "",
      },
      {
        title: "Features",
        link: "https://staging.carbon.network",
        target: "",
      },
      {
        title: "Staking",
        link: "https://staging.carbon.network",
        target: "",
      },
      {
        title: "Get SWTH",
        link: "https://staging.carbon.network",
        target: "",
      },
      {
        title: "FAQ",
        link: "https://staging.carbon.network",
        target: "",
      },
    ],
  },
  {
    section: "Build",
    sitemap: [
      {
        title: "Switcheo Development Fund",
        link: "https://forum.switcheo.foundation/topic/42/applying-for-project-grants-under-the-switcheo-development-fund",
        target: "_blank",
      },
      {
        title: "Explorer",
        link: "https://scan.carbon.network",
        target: "_blank",
      },
      {
        title: "APIs",
        link: "https://docs.carbon.network",
        target: "_blank",
      },
      {
        title: "GitHub",
        link: "https://github.com",
        target: "_blank",
      },
    ],
  },
  {
    section: "Explore",
    sitemap: [
      {
        title: "Learn",
        link: "https://guide.carbon.network",
        target: "_blank",
      },
      {
        title: "Features",
        link: "/#utility",
        target: "",
      },
      {
        title: "Stake",
        link: "https://app.dem.exchange/stake",
        target: "_blank",
      },
      {
        title: "Get SWTH",
        link: "https://app.dem.exchange/trade/swth_eth1",
        target: "_blank",
      },
      {
        title: "Token",
        link: "https://switcheo.org/tokens?net=main",
        target: "_blank",
      },
      {
        title: "Blog",
        link: "https://blog.switcheo.com ",
        target: "_blank",
      },
    ],
  },
  {
    section: "Contribute",
    sitemap: [
      {
        title: "Forum",
        link: "https://forum.carbon.network",
        target: "_blank",
      },
      {
        title: "Governance",
        link: "https://scan.carbon.network/governance",
        target: "_blank",
      },
    ],
  },
  {
    section: "Resources",
    sitemap: [
      {
        title: "About",
        link: "https://staging.carbon.network",
        target: "",
      },
      {
        title: "Press Kit",
        link: "https://staging.carbon.network",
        target: "",
      },
      {
        title: "Design",
        link: "https://staging.carbon.network",
        target: "",
      },
      {
        title: "Resources",
        link: "https://staging.carbon.network",
        target: "",
      },
    ],
  },
];

const Footer: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Box id="footer">
      <Hidden xsDown>
        <Divider />
      </Hidden>
      <Grid container className={classes.sitemapContainer} spacing={isMobile ? 0 : 0}>
        {
          sitemap.map((section) => {
            return (
              <Grid item container xs={6} sm md key={section.section} direction="column" style={{ padding: isMobile ? "0px 0px 3rem 3.25rem" : 0 }}>
                <Typography color="textPrimary" className={classes.footerHeader} align="left">
                  {section.section}
                </Typography>
                {
                  section.sitemap.map((map, index) => {
                    return (
                      <Link href={map.link} underline="none" target={map.target} key={map.title + index}>
                        <Typography color="textPrimary" className={classes.footerLink} align="left" >
                          {map.title}
                        </Typography>
                      </Link>
                    );
                  })
                }
              </Grid>
            );
          })
        }
      </Grid>
      <Hidden xsDown>
        <Divider />
      </Hidden>
      <Grid container className={classes.footNoteContainer} spacing={6}>
        <Grid container item xs={12} md={12} alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={6} md={6} className={classes.logoContainer}>
            <CarbonLogo className={classes.logo} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} className={classes.socialMediaContainer}>
            {/* <Typography color="textPrimary" variant="body1">
              Social Media
            </Typography> */}
            <Link href={Path.Socials.Medium} underline="none" target="_blank">
              <MediumIcon className={classes.socialMediaIcon} />
            </Link>
            <Link href={Path.Socials.Telegram} underline="none" target="_blank">
              <TelegramIcon className={classes.socialMediaIcon} />
            </Link>
            <Link href={Path.Socials.SwitcheoTwitter} underline="none" target="_blank">
              <TwitterIcon className={classes.socialMediaIcon} />
            </Link>
            <Link href={Path.Socials.LinkedIn} underline="none" target="_blank">
              <LinkedInIcon className={classes.socialMediaIcon} />
            </Link>
            <Link href={Path.Socials.Facebook} underline="none" target="_blank">
              <FacebookIcon className={classes.socialMediaIcon} />
            </Link>
            <Link href={Path.Socials.Youtube} underline="none" target="_blank">
              <YoutubeIcon className={classes.socialMediaIcon} />
            </Link>
          </Grid>
        </Grid>
        <Hidden xsDown>
          <Grid item md={12}>
            <Typography className={classes.footNoteText} align="left" variant="body1">
              This website is maintained by Switcheo Labs. The contents and opinions of this website are those of Switcheo Labs. Switcheo Labs provides links to cryptocurrency exchanges as a service to the public. Switcheo Labs does not operate these websites and is not responsible for their content and expressly rejects any liability for damages of any kind resulting from the use, reference to, or reliance on any information contained within these websites. Switcheo Labs does not warrant that the information provided by these websites is correct, complete, or up-to-date.
          </Typography>
          </Grid>
          <Grid item md={12}>
            <Typography color="textPrimary" align="left" className={classes.footNoteSignOff}>
              MADE WITH ❤️ FOR BUILDERS EVERYWHERE
          </Typography>
            {/* <Typography color="textPrimary" align="left" className={classes.footNoteSignOff}>
              SITE DESIGNED BY HIGHSPARK
          </Typography> */}
          </Grid>
        </Hidden>
      </Grid>
    </Box>
  );
};

export default Footer;

const useStyles = makeStyles((theme: Theme) => ({
  logo: {
    verticalAlign: "middle",
    margin: "0px 0.063rem",
    [theme.breakpoints.down("xs")]: {
      width: "30%",
    },
  },
  footerHeader: {
    fontFamily: "TyrosPro",
    fontWeight: 600,
    fontSize: "1.5rem",
    lineHeight: "2.13rem",
    letterSpacing: "-1px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.5rem",
      marginBottom: "1rem",
    },
  },
  footerLink: {
    margin: "0.5rem 0px",
    maxWidth: "13rem",
    fontFamily: "SourceSansPro-Light",
    fontWeight: 400,
    fontSize: "1.438rem",
    // lineHeight: "3.22rem",
    letterSpacing: "-1px",
    color: "#5C5C5C",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.2rem",
      margin: "0.5rem 0px",
    },
  },
  sitemapContainer: {
    margin: "7.5rem 0px",
    marginLeft: "5%",
    [theme.breakpoints.down("xs")]: {
      margin: "7.5rem 0px",
      padding: "0px 0%",
      width: "fit-content",
    },
  },
  logoContainer: {
    textAlign: "start",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  socialMediaContainer: {
    textAlign: "end",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      margin: "4rem 0px",
    },
  },
  footNoteContainer: {
    marginTop: "5.5rem",
    marginBottom: "7.5rem",
  },
  footNoteText: {
    color: "#6C6C6C",
  },
  socialMediaIcon: {
    margin: "0px 0.33rem",
    [theme.breakpoints.down("xs")]: {
      margin: "0px 0.5rem",
      width: "4rem",
    },
  },
  footNoteSignOff: {
    fontFamily: "TyrosPro",
    fontWeight: 300,
    fontSize: "0.938rem",
    lineHeight: "1.331rem",
    letterSpacing: "2px",
  },
}));