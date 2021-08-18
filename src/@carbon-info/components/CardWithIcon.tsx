import { Box, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";

interface cardProps {
  title: string,
  description: string,
  icon: any,
  iconAlignment?: "side" | "top",
  size?: "small" | "normal" | "large"
}

const CardWithIcon: React.FC<cardProps> = (props: cardProps) => {
  const classes = useStyles() as any;
  const { title, description, size, icon, iconAlignment = "side" } = props;
  const boxSize = size ? `boxContainer${size}` : "boxContainer";
  return (
    <Box className={classes[boxSize]}>
      <Grid className={classes.gridContainer} container alignItems="center" justifyContent="center">
        {/* <Grid item>
          {icon}
        </Grid> */}
        {
          iconAlignment === "side" ?
            <Grid item container spacing={4}>
              <Grid item xs={2} className={classes.sideIcon}>
                {icon}
              </Grid>
              <Grid item xs={10}>
                <Typography className={classes.divTitle} color="textPrimary" paragraph>
                  {title}
                </Typography>
                <br />
                <Typography variant="body2" color="textPrimary">
                  {description}
                </Typography>
              </Grid>
            </Grid>
            :
            <Grid item container spacing={4}>
              <Grid item xs={12} className={classes.icon}>
                {icon}
              </Grid>
              <Grid item xs={12}>
                <Typography className={classes.divTitle} color="textPrimary" paragraph>
                  {title}
                </Typography>
                <br />
                <Typography variant="body2" color="textPrimary">
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
  icon: {
    marginTop: "0.063rem",
  },
  sideIcon: {
    marginTop: "0.063rem",
    [theme.breakpoints.down("xs")]: {
      "& > svg": {
        width: "200%",
      }
    },
    [theme.breakpoints.down(325)]: {
      "& > svg": {
        width: "350%",
      }
    },
  },
  boxContainer: {
    background: "linear-gradient(353.27deg, rgba(41, 40, 40, 0.21) -9.67%, #161515 94.17%)",
    mixBlendMode: "normal",
    boxShadow: "inset 62px 98px 100px -60px #242424, inset 0px 1px 40px rgba(85, 85, 85, 0.04)",
    backdropFilter: "blur(100px)",
    borderRadius: 30,
    padding: "2em 3em 2em 4em",
    // width: "485px",
    height: "17rem",
    width: "23rem",
    textAlign: "start",
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
      width: "20rem",
      height: "18.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      height: "18rem",
      width: "auto",
      margin: "auto",
      padding: "1.5em 2em 1.5em 3em",
      borderRadius: 20,
      "&::before": {
        borderRadius: 20,
      },
    },
    [theme.breakpoints.down("xs")]: {
      height: "18rem",
      width: "60vw",
      borderRadius: 20,
      "&::before": {
        borderRadius: 20,
      },
    },
  },
  boxContainersmall: {
    // border: "1px solid white",
    background: "linear-gradient(353.27deg, rgba(41, 40, 40, 0.21) -9.67%, #161515 94.17%)",
    mixBlendMode: "normal",
    boxShadow: "inset 62px 98px 100px -60px #242424, inset 0px 1px 40px rgba(85, 85, 85, 0.04)",
    backdropFilter: "blur(100px)",
    borderRadius: 30,
    padding: "2em",
    margin: "auto",
    height: "18rem",
    width: "20rem",
    textAlign: "start",
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
      boxSizing: "border-box",
      width: "auto",
      margin: "0px 1rem",
      height: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      margin: "2rem",
      paddingRight: "15%",
      borderRadius: 20,
      "&::before": {
        borderRadius: 20,
      },
    },
    [theme.breakpoints.down("xs")]: {
      margin: "auto",
      height: "auto",
      width: "75%",
      paddingRight: "15%",
      // padding: "4rem",
      borderRadius: 20,
      "&::before": {
        borderRadius: 20,
      },
    },
  },
  boxContainerlarge: {
    // border: "1px solid white",
    background: "linear-gradient(353.27deg, rgba(41, 40, 40, 0.21) -9.67%, #161515 94.17%)",
    mixBlendMode: "normal",
    boxShadow: "inset 62px 98px 100px -60px #242424, inset 0px 1px 40px rgba(85, 85, 85, 0.04)",
    backdropFilter: "blur(100px)",
    borderRadius: 30,
    padding: "2em 3em 2em 4em",
    // width: "485px",
    height: "16rem",
    // width: "16rem",
    textAlign: "start",
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
    [theme.breakpoints.down(1000)]: {
      height: "21.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
      height: "20rem",
      width: "50%",
      borderRadius: 15,
      "&::before": {
        borderRadius: 15,
      },
    },
    [theme.breakpoints.down("xs")]: {
      width: "70%",
    },
  },
  divTitle: {
    fontFamily: "TyrosPro",
    fontWeight: 300,
    fontSize: "2rem",
    lineHeight: "2.3rem",
    // [theme.breakpoints.down("sm")]: {
    //   fontSize: "1.5rem",
    // },
  },
  gridContainer: {
    height: "100%",
    width: "100%",
  },
}));