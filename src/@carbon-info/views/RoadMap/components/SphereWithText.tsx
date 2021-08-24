import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import roadMapSphere from "@carbon-info/assets/animated/roadMapSphere.png";

interface Props {
  step: number,
  percent: number,
  text: string,
  isMobile: boolean,
  isTablet: boolean,
}

const coordinates: any = {
  "0": [270, -30],
  "1": [300, -40],
  "2": [320, -55],
  "3": [340, -55],
  "-1": [240, -40],
  "-2": [220, -40],
  "-3": [200, -40],
};


const RoadMapButton: React.FC<Props> = (props: Props) => {
  let { step, percent, text, isMobile = false, isTablet = false } = props;
  const classes = useStyles();
  if (step <= -4 || step >= 4) return <></>;
  let fontStyle = {};
  if (step === 0) fontStyle = { width: "18rem", top: "-5rem", left: "-4rem" };
  else if (step === 1 || step === -1) fontStyle = { width: "18rem", top: "-5rem", left: "-4rem", fontSize: "1.4rem" };
  else if (step >= 2 || step <= -2) fontStyle = { width: "8rem", top: "-8rem", left: "1rem", fontSize: "1.4rem", color: "rgb(255,255,255,0.38)" };
  return (
    <div className={classes.centerSphereContainer} id="sphere" style={{
      transform: `rotate(${coordinates[step][0]}deg) translateX(55vw) rotate(-${coordinates[step][0]}deg) ${step == -1 || step == 1 ? "scale(0.9)" : ""} ${step <= -2 || step >= 2 ? "scale(0.8)" : ""}`,
      transition: "all 1s ease-in",
      top: `${isTablet ? isMobile ? coordinates[step][1] + 20 : coordinates[step][1] + 10 : coordinates[step][1]}px`,
      opacity: step === -3 || step === 3 ? 0 : 1,
    }}>
      <Typography color="textPrimary" className={classes.roadMapTitleText} style={{ transition: "all 1s ease-in", position: "absolute", ...fontStyle }}>
        {text}
      </Typography>
      <div style={{ position: "relative", height: "5rem", width: "5rem" }}>
        <CircularProgressbar
          className={classes.circular}
          value={percent}
          styles={buildStyles({
            pathColor: "rgba(255, 255, 255, 1)",
            trailColor: "rgba(255, 255, 255, 0.3)",
          })}
        />
        <img src={roadMapSphere} alt="roadMapSphere" className={classes.centerSphere} />
      </div>
    </div>
  );
};

export default RoadMapButton;

const useStyles = makeStyles(() => ({
  roadMapTitleText: {
    fontFamily: "TyrosPro",
    fontWeight: 300,
    fontSize: "2.063rem",
    lineHeight: "2.228rem",
    // letterSpacing: "-3px",
  },
  circular: {
    position: "absolute",
  },
  centerSphereContainer: {
    position: "absolute",
    top: 0,
    right: "50%",
    transition: "all 1s ease-in",
    // animation: "$move 2s infinite linear",
    marginTop: "55vw",
  },
  "@keyframes move": {
    "0%": {
      transform: "rotate(0deg) translateX(55vw) rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg) translateX(55vw) rotate(-360deg)",
    },
  },
  centerSphere: {
    position: "absolute",
    width: "100%",
    // marginRight: "-1%",
  },
}));