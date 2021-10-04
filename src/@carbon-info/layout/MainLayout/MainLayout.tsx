import { BoxProps, Container, makeStyles, Theme } from "@material-ui/core";
import clsx from "clsx";
import React from "react";

interface Props extends BoxProps { }

const MainLayout: React.FC<Props> = (props: Props) => {
  const { children, className, ...rest } = props;

  const classes = useStyles();
  return (
    <main className={clsx(classes.app, className)} {...rest}>
      <Container>
        <div className={classes.container}>
          {children}
        </div>
      </Container>
    </main>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

  },
  app: {
    backgroundColor: theme.palette.background.default,
    display: "flex",
    flexDirection: "column",
    position: "relative",
    maxWidth: "100%",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    textAlign: "center",
  },
}));

export default MainLayout;
