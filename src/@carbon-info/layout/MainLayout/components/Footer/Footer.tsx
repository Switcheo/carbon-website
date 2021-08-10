import React from "react";
import { Box, Divider, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import { CarbonLogo, FacebookIcon, LinkedInIcon, MediumIcon, TelegramIcon, TwitterIcon, YoutubeIcon } from "@carbon-info/assets";

const sitemap = [
  {
    section: "Learn",
    sitemap: [
      {
        title: "Learn",
        link: "http://www.carbon.com",
      },
      {
        title: "Features",
        link: "http://www.carbon.com",
      },
      {
        title: "Staking",
        link: "http://www.carbon.com",
      },
      {
        title: "Get SWTH",
        link: "http://www.carbon.com",
      },
      {
        title: "FAQ",
        link: "http://www.carbon.com",
      },
    ],
  },
  {
    section: "Learn",
    sitemap: [
      {
        title: "Stargate",
        link: "http://www.carbon.com",
      },
      {
        title: "Carbon SDK",
        link: "http://www.carbon.com",
      },
    ],
  },
  {
    section: "Explore",
    sitemap: [
      {
        title: "Tokens",
        link: "http://www.carbon.com",
      },
      {
        title: "Ecosystem",
        link: "http://www.carbon.com",
      },
      {
        title: "Wallets",
        link: "http://www.carbon.com",
      },
      {
        title: "Blog",
        link: "http://www.carbon.com",
      },
    ],
  },
  {
    section: "Participate",
    sitemap: [
      {
        title: "Community",
        link: "http://www.carbon.com",
      },
      {
        title: "Contributors",
        link: "http://www.carbon.com",
      },
      {
        title: "Events",
        link: "http://www.carbon.com",
      },
      {
        title: "Newsletters",
        link: "http://www.carbon.com",
      },
    ],
  },
  {
    section: "Resources",
    sitemap: [
      {
        title: "About",
        link: "http://www.carbon.com",
      },
      {
        title: "Press Kit",
        link: "http://www.carbon.com",
      },
      {
        title: "Design",
        link: "http://www.carbon.com",
      },
      {
        title: "Resources",
        link: "http://www.carbon.com",
      },
    ],
  },
];

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <Box>
      <Divider />
      <Grid container className={classes.sitemapContainer}>
        {
          sitemap.map((section) => {
            return (
              <Grid item container md key={section.section} direction="column">
                <Typography color="textPrimary" className={classes.footerHeader} align="left">
                  {section.section}
                </Typography>
                {
                  section.sitemap.map((map) => {
                    return (
                      <Typography color="textPrimary" key={map.title} className={classes.footerLink} align="left">
                        {map.title}
                      </Typography>
                    );
                  })
                }
              </Grid>
            );
          })
        }
      </Grid>
      <Divider />
      <Grid container className={classes.footNoteContainer} spacing={6}>
        <Grid container item md={12} alignItems="center" justifyContent="center">
          <Grid item md={6} className={classes.logoContainer}>
            <CarbonLogo className={classes.logo} />
          </Grid>
          <Grid item md={6} className={classes.socialMediaContainer}>
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
      </Grid>
    </Box>
  );
};

export default Footer;

const useStyles = makeStyles((theme: Theme) => ({
  logo: {
    verticalAlign: "middle",
    margin: theme.spacing(0, 1),
  },
  footerHeader: {
    fontFamily: "TyrosPro",
    fontWeight: 600,
    fontSize: 24,
    lineHeight: "34.08px",
    letterSpacing: "-1px",
  },
  footerLink: {
    fontFamily: "SourceSansPro-Light",
    fontWeight: 400,
    fontSize: 23,
    lineHeight: "51.52px",
    letterSpacing: "-1px",
    color: "#5C5C5C",
  },
  sitemapContainer: {
    margin: theme.spacing(15, 0),
    marginLeft: "5%",
  },
  logoContainer: {
    textAlign: "start",
  },
  socialMediaContainer: {
    textAlign: "end",
  },
  footNoteContainer: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(15),
  },
  footNoteText: {
    color: "#6C6C6C",
  },
  socialMediaIcon: {
    margin: theme.spacing(0, 1),
  },
  footNoteSignOff: {
    fontFamily: "TyrosPro",
    fontWeight: 300,
    fontSize: 15,
    lineHeight: "21.3px",
    letterSpacing: "2px",
  },
}));