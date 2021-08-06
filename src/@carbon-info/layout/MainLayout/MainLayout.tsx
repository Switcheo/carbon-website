import { BoxProps, Container, makeStyles, Theme } from "@material-ui/core";
import clsx from "clsx";
import React, { useEffect } from "react";
import Header from "./components/Header";

interface Props extends BoxProps { }

const MainLayout: React.FC<Props> = (props: Props) => {
  const { children, className, ...rest } = props;

  useEffect(() => {
    if (window.location.pathname !== "" && window.location.pathname !== "/") {
      window.location.href = "/";
    }
  }, []);

  const classes = useStyles();
  return (
    <main className={clsx(classes.app, className)} {...rest}>
      <Container>
        <Header />
        {children}
        {/* <Footer /> */}
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
}));

export default MainLayout;
