import { ArrowIcon } from "@carbon-info/assets";
import { Box, Link, makeStyles, Theme, Typography } from "@material-ui/core";
import clsx from "clsx";
import React from "react";

interface buttonProps {
  text: string,
  link: string,
  buttonClassName?: string,
  textClassName?: string,
  iconClassName?: string,
  newTab?: boolean,
}

const CTAButton: React.FC<buttonProps> = (props: buttonProps) => {
  const classes = useStyles() as any;
  const { text, link, newTab = true, buttonClassName, textClassName, iconClassName } = props;
  return (
    <Box className={clsx(classes.container, buttonClassName)}>
      <Link href={link} underline="none" target={newTab ? "_blank" : ""}>
        <Typography variant="button" display="inline" className={clsx(classes.textClass, textClassName)}>
          {text}
        </Typography>
        <ArrowIcon className={clsx(classes.iconClass, iconClassName)} />
      </Link>
    </Box>
  );
};

export default CTAButton;

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    whiteSpace: "nowrap",
    textAlign: "left",
    width: "fit-content",
  },
  textClass: {
    letterSpacing: "2px",
    color: theme.palette.text.primary,
    textTransform: "none",
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
  iconClass: {
    margin: theme.spacing(0, 1.25),
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
}));
