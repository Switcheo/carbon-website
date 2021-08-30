import React from "react";
import { Box, makeStyles, Theme, useMediaQuery, useTheme } from "@material-ui/core";
// import { useInView } from "react-intersection-observer";
import { Ideas, Intro, RoadMapTabMobile, RoadMapTabTablet, RoadMapTab } from "./components";
import { RecieveUpdates } from "../ReceiveUpdates";
const content = [
  {
    title: "Enhance core functions",
    description: "Strengthening Carbon's architecture to power high- performant financial infrastructures.",
    tabs: [
      {
        title: "Smart accounts (ADR-28)",
        description: "Smart contract modules allowing Carbon to encode standing instructions into an address.",
        longDescription: "Smart accounts (ADR-28) are simple smart contract modules that allow Carbon to encode standing instructions into an address resulting in specific execution paths. This means that Carbon can send funds into a special account (swth123xyz…) on the protocol, automatically performing an action or series of actions based on instructions. Smart accounts enable trades to be executed even if users do not have an account on Carbon.",
        status: "In progress",
        progress: 75,
        link: "https://switcheo.org",
      },
      {
        title: "Stargate Upgrades",
        description: "Smart contract modules allowing Carbon to encode standing instructions into an address.",
        longDescription: "Smart accounts (ADR-28) are simple smart contract modules that allow Carbon to encode standing instructions into an address resulting in specific execution paths. This means that Carbon can send funds into a special account (swth123xyz…) on the protocol, automatically performing an action or series of actions based on instructions. Smart accounts enable trades to be executed even if users do not have an account on Carbon.",
        status: "In progress",
        progress: 85,
        link: "https://switcheo.org",
      },
      {
        title: "Account rekeying (ADR-34)",
        description: "Smart contract modules allowing Carbon to encode standing instructions into an address.",
        longDescription: "Smart accounts (ADR-28) are simple smart contract modules that allow Carbon to encode standing instructions into an address resulting in specific execution paths. This means that Carbon can send funds into a special account (swth123xyz…) on the protocol, automatically performing an action or series of actions based on instructions. Smart accounts enable trades to be executed even if users do not have an account on Carbon.",
        status: "In progress",
        progress: 55,
        link: "https://switcheo.org",
      },
      {
        title: "AMM incentive improvements",
        description: "Smart contract modules allowing Carbon to encode standing instructions into an address.",
        longDescription: "Smart accounts (ADR-28) are simple smart contract modules that allow Carbon to encode standing instructions into an address resulting in specific execution paths. This means that Carbon can send funds into a special account (swth123xyz…) on the protocol, automatically performing an action or series of actions based on instructions. Smart accounts enable trades to be executed even if users do not have an account on Carbon.",
        status: "In progress",
        progress: 70,
        link: "https://switcheo.org",
      },
      {
        title: "On-chain referral mechanism",
        description: "Smart contract modules allowing Carbon to encode standing instructions into an address.",
        longDescription: "Smart accounts (ADR-28) are simple smart contract modules that allow Carbon to encode standing instructions into an address resulting in specific execution paths. This means that Carbon can send funds into a special account (swth123xyz…) on the protocol, automatically performing an action or series of actions based on instructions. Smart accounts enable trades to be executed even if users do not have an account on Carbon.",
        status: "In progress",
        progress: 70,
        link: "https://switcheo.org",
      },
      {
        title: "Insert title of completed card",
        description: "Insert description here in a brief, but descriptive paragraph so it won’t overflow past 3 lines here",
        longDescription: "Smart accounts (ADR-28) are simple smart contract modules that allow Carbon to encode standing instructions into an address resulting in specific execution paths. This means that Carbon can send funds into a special account (swth123xyz…) on the protocol, automatically performing an action or series of actions based on instructions. Smart accounts enable trades to be executed even if users do not have an account on Carbon.",
        status: "Completed",
        progress: 100,
        link: "https://switcheo.org",
      },
    ],
  },
  {
    title: "Attain financial sophistication",
    description: "Strengthening Carbon's architecture to power high-performant financial infrastructures.",
    tabs: [
      {
        title: "Smart accounts (ADR-28)",
        description: "Smart contract modules allowing Carbon to encode standing instructions into an address.",
        status: "In progress",
        progress: 75,
        link: "https://switcheo.org",
      },
      {
        title: "Smart accounts (ADR-28)",
        description: "Smart contract modules allowing Carbon to encode standing instructions into an address.",
        status: "In progress",
        progress: 75,
        link: "https://switcheo.org",
      },
    ],
  },
  {
    title: "Expand the ecosystem",
    description: "Strengthening Carbon's architecture to power high - performant financial infrastructures.",
    tabs: [
      {
        title: "Smart accounts (ADR-28)",
        description: "Smart contract modules allowing Carbon to encode standing instructions into an address.",
        status: "In progress",
        progress: 75,
        link: "https://switcheo.org",
      },
      {
        title: "Smart accounts (ADR-28)",
        description: "Smart contract modules allowing Carbon to encode standing instructions into an address.",
        status: "In progress",
        progress: 75,
        link: "https://switcheo.org",
      },

    ],
  },
  {
    title: "Complete full decentralization",
    description: "Strengthening Carbon's architecture to power high - performant financial infrastructures.",
    tabs: [
      {
        title: "Smart accounts (ADR-28)",
        description: "Smart contract modules allowing Carbon to encode standing instructions into an address.",
        status: "In progress",
        progress: 75,
        link: "https://switcheo.org",
      },
      {
        title: "Smart accounts (ADR-28)",
        description: "Smart contract modules allowing Carbon to encode standing instructions into an address.",
        status: "In progress",
        progress: 75,
        link: "https://switcheo.org",
      },
    ],
  },
];

const RoadMapPage: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const RoadMapTabView = isMobile
    ? <RoadMapTabMobile content={content} />
    : isTablet
      ? <RoadMapTabTablet content={content} />
      : <RoadMapTab content={content} />;
  return (
    <div>
      <Box className={classes.container}>
        <Intro />
        {RoadMapTabView}
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
      margin: "0vh 0px",
      padding: "0px 4rem",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0vh 0px",
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