import { ArrowIcon } from "@carbon-info/assets";
import { Box, Link, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";

interface buttonProps {
  text: string,
  link: string,
}

const CTAButton: React.FC<buttonProps> = (props: buttonProps) => {
  const classes = useStyles() as any;
  const { text, link } = props;
  return (
    <Box className={classes.container}>
      <Link href={link} underline="none" target="_blank">
        <Typography color="textPrimary" variant="button" display="inline" className={classes.text}>
          {text}
        </Typography>
        <ArrowIcon className={classes.icon} />
      </Link>
    </Box>
  );
};

export default CTAButton;

const useStyles = makeStyles((theme: Theme) => ({
  container: {

  },
  text: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
      letterSpacing: "1px",
    },
  },
  icon: {
    margin: theme.spacing(0, 2),
    verticalAlign: "sub",
    [theme.breakpoints.down("sm")]: {
      height: "2rem",
      margin: theme.spacing(0, 0.5),
    },
  },
}));
