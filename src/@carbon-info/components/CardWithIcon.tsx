import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

interface cardProps {
  title: string,
  description: string,
  icon: string,
  iconAlignment?: "side" | "top",
  size?: "small" | "normal" | "large"
}

const CardWithIcon: React.FC<cardProps> = (props: cardProps) => {
  const classes = useStyles() as any;
  const { title, description, size } = props;
  const boxSize = size ? `boxContainer${size}` : "boxContainer";
  return (
    <Box className={classes[boxSize]}>
      <Grid className={classes.gridContainer} container alignItems="center" justifyContent="center">
        {/* <Grid item>
          {icon}
        </Grid> */}
        <Grid item container>
          <Typography className={classes.divTitle} color="textPrimary" paragraph>
            {title}
          </Typography>
          <br />
          <Typography variant="body1" color="textPrimary">
            {description}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CardWithIcon;

const useStyles = makeStyles(() => ({
  boxContainer: {
    border: "1px solid white",
    background: "linear-gradient(353.27deg, rgba(41, 40, 40, 0.21) -9.67%, #161515 94.17%)",
    mixBlendMode: "normal",
    boxShadow: "inset 62px 98px 100px -60px #242424, inset 0px 1px 40px rgba(85, 85, 85, 0.04)",
    backdropFilter: "blur(100px)",
    borderRadius: 30,
    padding: "2em 3em 2em 4em",
    // width: "485px",
    height: "16rem",
    width: "22rem",
    textAlign: "start",
  },
  boxContainersmall: {
    border: "1px solid white",
    background: "linear-gradient(353.27deg, rgba(41, 40, 40, 0.21) -9.67%, #161515 94.17%)",
    mixBlendMode: "normal",
    boxShadow: "inset 62px 98px 100px -60px #242424, inset 0px 1px 40px rgba(85, 85, 85, 0.04)",
    backdropFilter: "blur(100px)",
    borderRadius: 30,
    padding: "2em 3em 2em 4em",
    // width: "485px",
    height: "16rem",
    width: "16rem",
    textAlign: "start",
  },
  boxContainerlarge: {
    border: "1px solid white",
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
  },
  divTitle: {
    fontFamily: "TyrosPro",
    fontWeight: 300,
    fontSize: "32px",
    lineHeight: "36.8px",
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