import React from "react";
import { Box, makeStyles, Theme } from "@material-ui/core";
// import { useInView } from "react-intersection-observer";
import { Ideas, Intro, RoadMapTab } from "./components";
import { RecieveUpdates } from "../ReceiveUpdates";
const RoadMapPage: React.FC = () => {
  const classes = useStyles();
  // const { ref, inView } = useInView({
  //   /* Optional options */
  //   threshold: 0.5,
  //   triggerOnce: true,
  // });
  return (
    <div>
      <Box className={classes.container}>
        <Intro />
        <RoadMapTab />
        <Ideas />
        <RecieveUpdates />
      </Box>
    </div>
  );
};

export default RoadMapPage;

const useStyles = makeStyles((theme: Theme) => ({
  divTitle: {
    fontFamily: "TyrosPro",
    fontWeight: 300,
    fontSize: "2rem",
    lineHeight: "2.3rem",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    margin: "0vh 0px",
    position: "relative",
    // background: "red"
    [theme.breakpoints.down("sm")]: {
      margin: "20vh 0px",
      padding: "0px 4rem",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "20vh 0px",
      padding: "0px 1rem",
    },
  },
  imageContainer: {
    alignItems: "center",
    textAlign: "center",
  },
  cardContainer: {
    alignItems: "center",
    padding: "2.5rem",
    // maxWidth: "80rem",
    // height: "38rem",
    // background: "linear-gradient(353.27deg, rgba(41, 40, 40, 0.11) -9.67%, #161515 20.17%)",
    boxShadow: "inset 62px 98px 100px -60px rgba(36, 36, 36,0.5), inset 0px 1px 40px rgba(85, 85, 85, 0.04)",
    backdropFilter: "blur(3px)",
    borderRadius: "30px",
    textAlign: "start",
    // borderImage: "linear-gradient(to bottom, rgb(116, 232, 232) , rgb(255, 255, 255,0.26))",
    // borderImageSlice: 1,
    // border: "1px solid white",
    background: "rgba(0,0,0,0.0)",
    margin: "auto",
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: 30,
      padding: "1px",
      background: "linear-gradient(180deg,#74E8E8,#74E8E8,rgba(255,255,255,0.4),rgba(255,255,255,0.2))",
      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      maskComposite: "destination-out",
      pointerEvents: "none",
    },
    [theme.breakpoints.down("sm")]: {
      borderRadius: 6.7,
      "&::before": {
        borderRadius: 6.7,
      },
    },
  },
  inputContainer: {
    alignItems: "center",
    padding: "1.5rem",
    // maxWidth: "80rem",
    // height: "38rem",
    // background: "linear-gradient(353.27deg, rgba(41, 40, 40, 0.11) -9.67%, #161515 20.17%)",
    boxShadow: "inset 62px 98px 100px -60px rgba(36, 36, 36,0.5), inset 0px 1px 40px rgba(85, 85, 85, 0.04)",
    backdropFilter: "blur(3px)",
    borderRadius: "10px",
    textAlign: "start",
    // borderImage: "linear-gradient(to bottom, rgb(116, 232, 232) , rgb(255, 255, 255,0.26))",
    // borderImageSlice: 1,
    // border: "1px solid white",
    background: "#090808",
    margin: "auto",
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: 10,
      padding: "1px",
      background: "linear-gradient(180deg,#74E8E8,#74E8E8,rgba(255,255,255,0.4),rgba(255,255,255,0.2))",
      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      maskComposite: "destination-out",
      pointerEvents: "none",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "4rem 0px 2rem 0px",
      borderRadius: 4.4,
      "&::before": {
        borderRadius: 4.4,
      },
    },
  },
  image: {
    width: "90%",
  },
  backgroundLeft: {
    position: "absolute",
    width: "1289.36px",
    height: "1363.2px",
    left: "-455px",
    top: "980px",
  },
  backgroundRight: {
    position: "absolute",
    width: "1522.35px",
    height: "1495.41px",
    right: "-650px",
    top: "1050px",
  },
  icon: {
    margin: theme.spacing(0, 2),
  },
  subtext: {
    margin: theme.spacing(8, 0),
  },
}));