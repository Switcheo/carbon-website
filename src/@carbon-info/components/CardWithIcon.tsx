import { Box, Grid, Link, makeStyles, Theme, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import React from "react";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

interface cardProps {
  title: string,
  description: string,
  icon: any,
  iconAlignment?: "side" | "top",
  size?: "small" | "normal" | "large",
  CTAicon?: any[],
  height?: number,
}

const isFirefox = !!(navigator.userAgent.indexOf("Firefox") !== -1);
const isMobileSafari = !!(navigator.userAgent.indexOf("iPhone") > -1);

const CardWithIcon: React.FC<cardProps> = (props: cardProps) => {
  const classes = useStyles() as any;
  const { title, description, size, icon, iconAlignment = "side", CTAicon } = props;
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <Box className={clsx(classes.boxContainer, size, { open: inView })}>
      <div ref={ref} />
      <Grid className={classes.gridContainer} container alignItems="center" justifyContent="center">
        {
          iconAlignment === "side" ?
            <Grid item container spacing={4} className={classes.iconContainer}>
              <Grid
                item xs={2} className={clsx(classes.sideIcon, size, { applyMarginTop: title === "Real use cases" && isMobile })}
              >
                {icon}
              </Grid>
              <Grid container item xs={10} className={CTAicon && CTAicon?.length > 0 ? classes.textContainerWithSocialIcons : classes.textContainer}>
                <Grid item xs={12}>
                  <Typography className={clsx(classes.divTitle, { social: CTAicon })} color="textPrimary" paragraph={isDesktop}>
                    {title}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" color="textPrimary" className={clsx(classes.description, { normal: !CTAicon })}>
                    {description}
                  </Typography>
                </Grid>
                {CTAicon && CTAicon?.length > 0 &&
                  (
                    <div className={classes.iconCTAContainer}>
                      {CTAicon.map((o: any, index) => {
                        return (
                          <Grid item key={o.link}>
                            <Link href={o.link} className={clsx(classes.iconWrapper, { notFirstItem: index > 0 })}>
                              {o.icon}
                            </Link>
                          </Grid>
                        );
                      })}
                    </div>
                  )
                }
              </Grid>
            </Grid>
            :
            <Grid item container spacing={0} className={classes.contentContainerWrapper}>
              <Grid item xs={12} className={classes.icon}>
                {icon}
              </Grid>
              <Grid item xs={12} className={classes.contentContainer}>
                <Typography className={clsx(classes.divTitle, size, { shortTitle: title.length < 20 })} color="textPrimary" paragraph>
                  {title}
                </Typography>
              </Grid>
              <Grid item xs={12} className={classes.contentContainer}>
                <Typography variant="body2" color="textPrimary" >
                  {description}
                </Typography>
              </Grid>
            </Grid>
        }
      </Grid>
    </Box>
  );
};

export default CardWithIcon;

const useStyles = makeStyles((theme: Theme) => ({
  iconCTAContainer: {
    display: "flex",
    flexDirection: "row",
  },
  iconContainer: {
    height: "100%",
  },
  iconWrapper: {
    cursor: "pointer",
    "& > svg": {
      [theme.breakpoints.down("sm")]: {
        width: "3rem",
      },
    },
    "&.notFirstItem": {
      marginLeft: "1rem",
    },
  },
  textContainerWithSocialIcons: {
    display: "flex",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "8px !important",
      gridTemplateRows: "20% 55% auto",
    },
    [theme.breakpoints.down(330)]: {
      paddingTop: "14px !important",
      gridTemplateRows: "20% 58% auto",
    },
  },
  textContainer: {
    display: "grid",
    gridTemplateRows: "20% 80%",
    rowGap: 20,
    [theme.breakpoints.down(1100)]: {
      gridTemplateRows: "20% 80%",
    },
    [theme.breakpoints.down(1000)]: {
      height: "18rem",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      rowGap: 0,
      height: "auto",
    },
  },
  icon: {
    marginTop: "0.063rem",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "1rem",
      "& > svg": {
        width: "4rem",
        height: "3rem",
      },
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1rem",
      "& > svg": {
        width: "3rem",
        height: "2rem",
      },
    },
    [theme.breakpoints.down(325)]: {
      marginBottom: "1rem",
      "& > svg": {
        width: "4rem",
        height: "3rem",
      },
    },
  },
  sideIcon: {
    textAlign: "center",
    marginTop: "0.063rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-0.23rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "-0.73rem",
      "& > svg": {
        width: "200%",
      },
    },
    [theme.breakpoints.down(325)]: {
      marginTop: "-0.63rem",
    },
    "&.large": {
      [theme.breakpoints.down("sm")]: {
        marginTop: "-0.23rem",
      },
      [theme.breakpoints.down("xs")]: {
        marginTop: "-0.73rem",
        "& > svg": {
          width: "200%",
        },
      },
      [theme.breakpoints.down(325)]: {
        marginTop: "-0.33rem",
        "& > svg": {
          width: "300%",
        },
      },
    },
    "&.applyMarginTop": {
      marginTop: "-1rem",
    },
  },
  boxContainer: {
    height: "100%",
    minHeight: "16.5rem",
    background: "linear-gradient(353.27deg, rgba(41, 40, 40, 0.21) -9.67%, #161515 94.17%)",
    mixBlendMode: "normal",
    boxShadow: "inset 62px 98px 100px -60px #242424, inset 0px 1px 40px rgba(85, 85, 85, 0.04)",
    backdropFilter: "blur(100px)",
    borderRadius: 30,
    padding: "2em 3em 2em 2em",
    width: "24rem",
    textAlign: "start",
    opacity: 0,
    transform: "translate(0px, 20px)",
    transition: "opacity ease-in 0.3s, transform ease-in 0.4s",
    "&.open": {
      opacity: 1,
      transform: "translate(0px,0px)",
    },
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: 30,
      padding: "1.755px",
      background: "linear-gradient(180deg,#74E8E8,#74E8E8,rgba(255,255,255,0.4),rgba(255,255,255,0.2))",
      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      maskComposite: `${isFirefox || isMobileSafari ? "subtract" : "source-out"}`,
      pointerEvents: "none",
    },
    [theme.breakpoints.down("md")]: {
      width: "24rem",
      height: "18.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      height: "17rem",
      width: "auto",
      margin: "auto",
      padding: "1.5em 1.5em 0.5em 2.5em",
      borderRadius: 20,
      "&::before": {
        borderRadius: 20,
      },
    },
    [theme.breakpoints.down(700)]: {
      height: "19rem",
    },
    [theme.breakpoints.down(650)]: {
      height: "22rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "1.5em 2em 0.5em 3em",
      height: "18rem",
      width: "60vw",
      borderRadius: 20,
      "&::before": {
        borderRadius: 20,
      },
    },
    [theme.breakpoints.down(330)]: {
      height: "17rem",
      width: "70vw",
    },
    "&.small": {
      padding: "2em",
      margin: "auto",
      width: "20rem",
      height: "auto",
      minHeight: "26rem",
      [theme.breakpoints.down("md")]: {
        boxSizing: "border-box",
        width: "auto",
        margin: "0px 1rem",
        height: "100%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "auto",
        paddingRight: "15%",
        borderRadius: 20,
        "&::before": {
          borderRadius: 20,
        },
      },
      [theme.breakpoints.down("xs")]: {
        margin: "auto",
        height: "auto",
        minHeight: "20rem",
        width: "75%",
        paddingRight: "15%",
        borderRadius: 20,
        "&::before": {
          borderRadius: 20,
        },
      },
      [theme.breakpoints.down(330)]: {
        paddingRight: "10%",
      },
    },
    "&.large": {
      height: "17rem",
      padding: "2em 3em 2em 4em",
      margin: "1rem auto",
      [theme.breakpoints.down(1100)]: {
        padding: "2em 3em 2em 2em",
        height: "18rem",
        width: "22rem",
      },
      [theme.breakpoints.down(1000)]: {
        height: "18rem",
      },
      [theme.breakpoints.down("sm")]: {
        // margin: "auto",
        height: "15rem",
        width: "52%",
        padding: "2em 3em 1.5em 4em",
        borderRadius: 15,
        "&::before": {
          borderRadius: 15,
        },
      },
      [theme.breakpoints.down("xs")]: {
        padding: "1em 3em 4em 4em",
        width: "70%",
      },
      [theme.breakpoints.down(330)]: {
        padding: "1em 3em 6em 4em",
      },
    },
  },
  divTitle: {
    fontFamily: "TyrosPro",
    fontWeight: 300,
    fontSize: "2rem",
    lineHeight: "2.3rem",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "80%",
      marginBottom: 0,
    },
    [theme.breakpoints.down(700)]: {
      maxWidth: "96%",
    },
    [theme.breakpoints.down(330)]: {
      maxWidth: "90%",
    },
    "&.small": {
      // maxWidth: "14rem",
      minHeight: "4rem",
      maxHeight: "5rem",
      [theme.breakpoints.down("sm")]: {
        minHeight: "5rem",
      },
      [theme.breakpoints.down("xs")]: {
        maxHeight: "7rem",
      },
    },
    "&.shortTitle": {
      [theme.breakpoints.down("sm")]: {
        maxWidth: "57%",
      },
    },
    "&.social": {
      whiteSpace: "nowrap",
    },
  },
  contentContainer: {
    marginTop: "1rem",
  },
  contentContainerWrapper: {
    display: "flex",
    padding: "1rem 0rem",
    height: "100%",
    alignContent: "flex-start",
  },
  gridContainer: {
    height: "100%",
    width: "100%",
  },
  description: {
    minHeight: "8rem",
    [theme.breakpoints.down("sm")]: {
      minHeight: "5rem",
    },
    "&.normal": {
      [theme.breakpoints.down("sm")]: {
        minHeight: "5rem",
        height: "9rem",
      },
      [theme.breakpoints.down(650)]: {
        height: "14rem",
      },
      [theme.breakpoints.down("xs")]: {
        height: "9rem",
      },
    },
  },
}));