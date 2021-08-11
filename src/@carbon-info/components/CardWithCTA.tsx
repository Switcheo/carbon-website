import { ArrowIcon } from "@carbon-info/assets";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

interface cardProps {
  title: string,
  description: string,
  icon: string,
  iconAlignment?: "side" | "top",
  ctaText: string,
  bigSVG?: boolean,
}

const CardWithCTA: React.FC<cardProps> = (props: cardProps) => {
  const classes = useStyles() as any;
  const { title, description, ctaText, icon, bigSVG } = props;
  const svgClass = bigSVG ? "bigIcon" : "icon";
  return (
    <Box className={classes.boxContainer}>
      <div className={classes.iconContainer}>
        <img src={icon} alt="icon" className={classes[svgClass]} />
      </div>
      <Grid className={classes.gridContainer} container alignItems="center" justifyContent="center">
        <Grid item container>
          <div>
            <Typography color="textPrimary" variant="h2">
              {title}
            </Typography>
            <Typography color="textPrimary" variant="body2" className={classes.subtext}>
              {description}
            </Typography>
            <Typography color="textPrimary" variant="button" display="inline">
              {ctaText}
            </Typography>
            <ArrowIcon className={classes.ctaIcon} />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CardWithCTA;

const useStyles = makeStyles(() => ({
  subtext: {
    margin: "3rem 0px",
  },
  icon: {
    position: "absolute",
    marginLeft: "auto",
    marginRight: "auto",
    left: 0,
    right: 0,
    textAlign: "center",
  },
  bigIcon: {
    position: "absolute",
    marginLeft: "auto",
    marginRight: "auto",
    left: 0,
    right: 0,
    textAlign: "center",
    maxWidth: "100%",
    transform: "scale(2)",
  },
  iconContainer: {
    position: "relative",
    width: "100%",
    height: "25rem",
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
    minHeight: "48rem",
    // width: "22rem",
    textAlign: "start",
    overflow: "hidden",
    margin: "auto",
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: 30,
      padding: "2px",
      background: "linear-gradient(180deg,#74E8E8,#FFFFFF,rgba(255,255,255,0.5))",
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
  ctaIcon: {
    margin: "0px 0.125rem",
  },
}));