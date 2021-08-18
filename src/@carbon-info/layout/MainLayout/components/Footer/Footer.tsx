import React from "react";
import { Box, Divider, Grid, Hidden, Link, makeStyles, Theme, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { CarbonLogo, FacebookIcon, LinkedInIcon, MediumIcon, TelegramIcon, TwitterIcon, YoutubeIcon } from "@carbon-info/assets";

const sitemap = [
  {
    section: "Learn",
    sitemap: [
      {
        title: "Learn",
        link: "https://staging.carbon.network",
      },
      {
        title: "Features",
        link: "https://staging.carbon.network",
      },
      {
        title: "Staking",
        link: "https://staging.carbon.network",
      },
      {
        title: "Get SWTH",
        link: "https://staging.carbon.network",
      },
      {
        title: "FAQ",
        link: "https://staging.carbon.network",
      },
    ],
  },
  {
    section: "Learn",
    sitemap: [
      {
        title: "Stargate",
        link: "https://staging.carbon.network",
      },
      {
        title: "Carbon SDK",
        link: "https://staging.carbon.network",
      },
    ],
  },
  {
    section: "Explore",
    sitemap: [
      {
        title: "Tokens",
        link: "https://staging.carbon.network",
      },
      {
        title: "Ecosystem",
        link: "https://staging.carbon.network",
      },
      {
        title: "Wallets",
        link: "https://staging.carbon.network",
      },
      {
        title: "Blog",
        link: "https://staging.carbon.network",
      },
    ],
  },
  {
    section: "Participate",
    sitemap: [
      {
        title: "Community",
        link: "https://staging.carbon.network",
      },
      {
        title: "Contributors",
        link: "https://staging.carbon.network",
      },
      {
        title: "Events",
        link: "https://staging.carbon.network",
      },
      {
        title: "Newsletters",
        link: "https://staging.carbon.network",
      },
    ],
  },
  {
    section: "Resources",
    sitemap: [
      {
        title: "About",
        link: "https://staging.carbon.network",
      },
      {
        title: "Press Kit",
        link: "https://staging.carbon.network",
      },
      {
        title: "Design",
        link: "https://staging.carbon.network",
      },
      {
        title: "Resources",
        link: "https://staging.carbon.network",
      },
    ],
  },
];

const Footer: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Box>
      <Hidden xsDown>
        <Divider />
      </Hidden>
      <Grid container className={classes.sitemapContainer} spacing={isMobile ? 7 : 0}>
        {
          sitemap.map((section) => {
            return (
              <Grid item container xs={6} sm md key={section.section} direction="column">
                <Typography color="textPrimary" className={classes.footerHeader} align="left">
                  {section.section}
                </Typography>
                {
                  section.sitemap.map((map, index) => {
                    return (
                      <Link href={map.link} underline="none" target="_blank" key={map.title + index}>
                        <Typography color="textPrimary" className={classes.footerLink} align="left">
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
            <MediumIcon className={classes.socialMediaIcon} />
            <TelegramIcon className={classes.socialMediaIcon} />
            <TwitterIcon className={classes.socialMediaIcon} />
            <LinkedInIcon className={classes.socialMediaIcon} />
            <FacebookIcon className={classes.socialMediaIcon} />
            <YoutubeIcon className={classes.socialMediaIcon} />
          </Grid>
        </Grid>
        <Hidden xsDown>
          <Grid item md={12}>
            <Typography className={classes.footNoteText} align="left" variant="body1">
              This website is maintained by Switcheo Labs. The contents and opinions of this website are those of Switcheo Labs. Switcheo provides links to cryptocurrency exchanges as a service to the public. Switcheo Labs does not warrant that the information provided by these websites is correct, complete, and up-to-date. Switcheo Labs is not responsible for their content and expressly rejects any liability for damages of any kind resulting from the use, reference to, or reliance on any information contained within these websites.
          </Typography>
          </Grid>
          <Grid item md={12}>
            <Typography color="textPrimary" align="left" className={classes.footNoteSignOff}>
              DEVELOPED BY SWITCHEO LABS
          </Typography>
            <Typography color="textPrimary" align="left" className={classes.footNoteSignOff}>
              SITE DESIGNED BY HIGHSPARK
          </Typography>
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
    fontFamily: "SourceSansPro-Light",
    fontWeight: 400,
    fontSize: "1.438rem",
    lineHeight: "3.22rem",
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
      padding: "0px 10%",
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
    marginTop: "7.5rem",
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