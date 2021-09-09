import { ArrowIcon } from "@carbon-info/assets";
import { Box, Link, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";

interface buttonProps {
  text: string,
  link: string,
  CTA?: boolean,
}

const CTAButton: React.FC<buttonProps> = (props: buttonProps) => {
  const classes = useStyles() as any;
  const { text, link, CTA } = props;
  const iconClass = CTA ? "iconCTA" : "icon";
  const textClass = CTA ? "textCTA" : "text";
  return (
    <Box className={classes.container}>
      <Link href={link} underline="none" target="_blank">
        <Typography color="textPrimary" variant="button" display="inline" className={classes[textClass]}>
          {text}
        </Typography>
        <ArrowIcon className={classes[iconClass]} />
      </Link>
    </Box>
  );
};

export default CTAButton;

const useStyles = makeStyles((theme: Theme) => ({
  textCTA: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.3rem",
      letterSpacing: "1px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.7rem",
      letterSpacing: "1px",
    },
    [theme.breakpoints.down(360)]: {
      fontSize: "1.5rem",
    },
  },
  iconCTA: {
    margin: theme.spacing(0, 2),
    verticalAlign: "sub",
    [theme.breakpoints.down("sm")]: {
      verticalAlign: "baseline",
      height: "2rem",
      margin: theme.spacing(0, 1),
    },
    [theme.breakpoints.down("xs")]: {
      verticalAlign: "sub",
      height: "2rem",
      margin: "0px 2px",
    },
    [theme.breakpoints.down(360)]: {
      height: "1.8rem",
      margin: "0px 2px",
    },
  },
  text: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.7rem",
      letterSpacing: "1px",
    },
    [theme.breakpoints.down(360)]: {
      fontSize: "1.5rem",
    },
  },
  icon: {
    margin: theme.spacing(0, 2),
    verticalAlign: "sub",
    [theme.breakpoints.down("sm")]: {
      height: "2rem",
      margin: theme.spacing(0, 1),
    },
    [theme.breakpoints.down(360)]: {
      height: "1.8rem",
      margin: theme.spacing(0, 0.25),
    },
  },
}));
