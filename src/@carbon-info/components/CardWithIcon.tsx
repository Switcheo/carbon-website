import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
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
              <Grid item xs={2} className={classes.icon}>
                {icon}
              </Grid>
              <Grid item xs={10}>
                <Typography className={classes.divTitle} color="textPrimary" paragraph>
                  {title}
                </Typography>
                <br />
                <Typography variant="body1" color="textPrimary">
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
                <Typography variant="body1" color="textPrimary">
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

const useStyles = makeStyles(() => ({
  icon: {
    marginTop: "0.063rem",
  },
  boxContainer: {
    // border: "1px solid white",
    background: "linear-gradient(353.27deg, rgba(41, 40, 40, 0.21) -9.67%, #161515 94.17%)",
    mixBlendMode: "normal",
    boxShadow: "inset 62px 98px 100px -60px #242424, inset 0px 1px 40px rgba(85, 85, 85, 0.04)",
    backdropFilter: "blur(100px)",
    borderRadius: 30,
    padding: "2em 3em 2em 4em",
    // width: "485px",
    height: "16rem",
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
      padding: "2px",
      background: "linear-gradient(180deg,#74E8E8,#FFFFFF,rgba(255,255,255,0.7),rgba(255,255,255,0.5))",
      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      maskComposite: "destination-out",
      PointerEvent: "none",
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
    // width: "485px",
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
      padding: "2px",
      background: "linear-gradient(180deg,#74E8E8,#FFFFFF,rgba(255,255,255,0.7),rgba(255,255,255,0.5))",
      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      maskComposite: "destination-out",
      PointerEvent: "none",
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
      padding: "2px",
      background: "linear-gradient(180deg,#74E8E8,#FFFFFF,rgba(255,255,255,0.7),rgba(255,255,255,0.5))",
      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      maskComposite: "destination-out",
      PointerEvent: "none",
    },
  },
  divTitle: {
    fontFamily: "TyrosPro",
    fontWeight: 300,
    fontSize: "2rem",
    lineHeight: "2.3rem",
    // display: "flex",
    // height: "100%",
    // width: "100%",
    // alignItems: "center",
    // justifyContent: "center",
  },
  gridContainer: {
    height: "100%",
    width: "100%",
  },
}));