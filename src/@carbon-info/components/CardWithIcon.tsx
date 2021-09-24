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
      <Grid className={classes.gridContainer} container alignItems="center" justifyContent="center" style={{}}>
        {
          iconAlignment === "side" ?
            <Grid item container spacing={4} style={{ height: "100%" }}>
              <Grid
                item xs={2} className={clsx(classes.sideIcon, size)}
                style={{ marginTop: title === "Real use cases" && isMobile ? "-1rem" : "" }}
              >
                {icon}
              </Grid>
              <Grid container item xs={10} className={CTAicon && CTAicon?.length > 0 ? classes.textContainerWithSocialIcons : classes.textContainer}>
                <Grid item xs={12}>
                  <Typography className={classes.divTitle} color="textPrimary" paragraph={isDesktop}>
                    {title}
                  </Typography>
                </Grid>
                {/* <br /> */}
                <Grid item xs={12}>
                  <Typography variant="body2" color="textPrimary">
                    {description}
                  </Typography>
                </Grid>
                {CTAicon && CTAicon?.length > 0 &&
                  (
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      {CTAicon.map((o: any, index) => {
                        return (
                          <Grid item key={o.link}>
                            <Link href={o.link} className={classes.iconWrapper} style={{ marginLeft: index > 0 ? "1rem" : 0 }}>
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
                <Typography className={classes.divTitle} style={{ width: title === "Powerful tools" ? "57%" : "98%" }} color="textPrimary" paragraph>
                  {title}
                </Typography>
                {/* <br /> */}
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
  iconWrapper: {
    cursor: "pointer",
    "& > svg": {
      [theme.breakpoints.down("sm")]: {
        width: "3rem",
      },
    },
  },
  textContainerWithSocialIcons: {
    display: "grid",
    gridTemplateRows: "20% 65% auto",
    [theme.breakpoints.down("sm")]: {
      // gap: 10,
      paddingTop: "8px !important",
      gridTemplateRows: "20% 55% auto",
    },
    [theme.breakpoints.down(330)]: {
      // gap: 10,
      paddingTop: "14px !important",
      gridTemplateRows: "20% 58% auto",
    },
  },
  textContainer: {
    display: "grid",
    gridTemplateRows: "20% 80%",
    rowGap: 20,
    [theme.breakpoints.down(1100)]: {
      gridTemplateRows: "28% 80%",
    },
    [theme.breakpoints.down(1000)]: {
      height: "18rem",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateRows: "20% 80%",
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
  },
  boxContainer: {
    height: "100%",
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
      maskComposite: "destination-out",
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
    [theme.breakpoints.down(630)]: {
      height: "19rem",
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
    },
    "&.large": {
      height: "17rem",
      padding: "2em 3em 2em 4em",
      [theme.breakpoints.down(1100)]: {
        height: "16rem",
      },
      [theme.breakpoints.down(1000)]: {
        height: "18rem",
      },
      [theme.breakpoints.down("sm")]: {
        margin: "auto",
        height: "15rem",
        width: "52%",
        padding: "2em 3em 1.5em 4em",
        borderRadius: 15,
        "&::before": {
          borderRadius: 15,
        },
      },
      [theme.breakpoints.down("xs")]: {
        padding: "1em 3em 4.5em 4em",
        width: "70%",
      },
      [theme.breakpoints.down(380)]: {
        padding: "1em 3em 6em 4em",
      },
    },
  },
  divTitle: {
    // overflowWrap: "anywhere",
    fontFamily: "TyrosPro",
    fontWeight: 300,
    fontSize: "2rem",
    lineHeight: "2.3rem",
    [theme.breakpoints.down("sm")]: {
      marginBottom: 0,
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
}));