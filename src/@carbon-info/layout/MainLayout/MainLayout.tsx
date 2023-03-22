import { BoxProps, Container, makeStyles, Theme } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { Footer, Header } from "./components";

interface Props extends BoxProps { }

const MainLayout: React.FC<Props> = (props: Props) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();

  return (
    <main className={clsx(classes.app, className)} {...rest}>
      <Container maxWidth="xl" className={classes.mainContainer}>
        <Header />
        {children}
        <Footer />
      </Container>
    </main>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
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
  mainContainer: {
    paddingLeft: "7.5rem",
    paddingRight: "7.5rem",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "24px",
      paddingRight: "24px",
    },
  },
}));

export default MainLayout;
