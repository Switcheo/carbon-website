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
  isWideDesktop: boolean,
}

const coordinatesDesktop: any = {
  "0": [269.7, -30],
  "1": [300, -40],
  "2": [320, -55],
  "3": [340, -55],
  "-1": [240, -40],
  "-2": [220, -40],
  "-3": [200, -40],
};

const coordinatesDesktopSafari: any = {
  "0": [270, -40],
  "1": [295, -50],
  "2": [315, -55],
  "3": [340, -55],
  "-1": [245, -50],
  "-2": [225, -40],
  "-3": [200, -40],
};

const coordinatesMobile: any = {
  "3": [510, -120],
  "2": [430, -120],
  "1": [320, -40],
  "0": [270, -30],
  "-1": [220, -40],
  "-2": [110, -120],
  "-3": [30, -120],
};

const coordinatesMobileSafari: any = {
  "3": [510, -120],
  "2": [430, -120],
  "1": [310, -50],
  "0": [270, -30],
  "-1": [230, -50],
  "-2": [110, -120],
  "-3": [30, -120],
};

const coordinatesTabletSafari: any = {
  "3": [350, -145],
  "2": [350, -145],
  "1": [300, -45],
  "0": [270, -26],
  "-1": [240, -45],
  "-2": [190, -140],
  "-3": [190, -140],
};

const coordinatesTablet: any = {
  "3": [350, -145],
  "2": [350, -145],
  "1": [310, -50],
  "0": [270, -20],
  "-1": [230, -50],
  "-2": [190, -140],
  "-3": [190, -140],
};

const coordinatesWideDesktop: any = {
  "3": [350, -145],
  "2": [310, -55],
  "1": [290, -30],
  "0": [270, -20],
  "-1": [250, -30],
  "-2": [230, -50],
  "-3": [190, -140],
};

const coordinatesWideDesktopSafari: any = {
  "3": [350, -145],
  "2": [310, -55],
  "1": [290, -40],
  "0": [270, -30],
  "-1": [250, -40],
  "-2": [230, -50],
  "-3": [190, -140],
};

const RoadMapButton: React.FC<Props> = (props: Props) => {
  const isSafari = !!(navigator.userAgent.indexOf("Safari") !== -1 && navigator.userAgent.indexOf("Chrome") === -1);
  let { step, percent, text, isMobile = false, isTablet = false, isWideDesktop = false } = props;
  const coordinates = isSafari ? isWideDesktop ? coordinatesWideDesktopSafari : isMobile ? coordinatesMobileSafari : isTablet ? coordinatesTabletSafari : coordinatesDesktopSafari
    : isWideDesktop ? coordinatesWideDesktop : isMobile ? coordinatesMobile : isTablet ? coordinatesTablet : coordinatesDesktop;
  const classes = useStyles();
  step = Math.ceil(step);
  if (!step && step !== 0) step = 4;
  if (step <= -4 || step >= 4) return <></>;
  let fontStyle = {};
  if (step === 0) fontStyle = { top: text.length <= 17 ? "-4rem" : text.length > 40 ? "-7rem" : "", left: text.length < 5 ? "-6.5rem" : "" };
  else if (step === 1 || step === -1) fontStyle = { transform: "scale(0.8)", top: text.length <= 17 ? "-4rem" : text.length > 40 ? "-7rem" : "" };
  else if ((step >= 2 || step <= -2)) fontStyle = { transform: "scale(0.5)", color: "rgb(255,255,255,0.38)", top: text.length > 40 ? "-5.5rem" : text.length < 5 ? "-2.5rem" : "-3.5rem", left: step < 0 ? "-9rem" : text.length < 5 ? "-3.5rem" : "-2.5rem" };
  const radius = step === 0 && isSafari ? "55vw" : "55vw";
  const translateXRadius = step === 0 && isSafari ? "55vw" : "55vw";
  return (
    <div className={classes.centerSphereContainer} id="sphere" style={{
      marginTop: radius,
      transform: `rotate(${coordinates[step][0]}deg) translateX(${translateXRadius}) rotate(-${coordinates[step][0]}deg) ${step == -1 || step == 1 ? "scale(0.9)" : ""} ${step <= -2 || step >= 2 ? "scale(0.8)" : ""}`,
      transition: "all 1s ease-in",
      top: `${isTablet ? isMobile ? coordinates[step][1] + 10 : coordinates[step][1] : coordinates[step][1]}px`,
      opacity: isMobile ? step <= -1 || step >= 1 ? 0 : 1
        : isTablet
          ? step <= -2 || step >= 2
            ? 0 : 1
          : step === -3 || step === 3
            ? 0 : 1,
    }}>
      <Typography color="textPrimary" className={classes.roadMapTitleText} style={{ ...fontStyle }}>
        {text}
      </Typography>
      <div className={classes.progressBar}>
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
  progressBar: {
    position: "relative",
    height: "5rem",
    width: "5rem",
  },
  roadMapTitleText: {
    transition: "all 1s ease-in",
    position: "absolute",
    fontFamily: "TyrosPro",
    fontWeight: 300,
    fontSize: "2.063rem",
    lineHeight: "2.228rem",
    width: "23rem",
    top: "-5rem",
    left: "-6.5rem",
  },
  circular: {
    position: "absolute",
  },
  centerSphereContainer: {
    position: "absolute",
    top: 0,
    right: "50%",
    // transition: "all 1s ease-in",
  },
  centerSphere: {
    position: "absolute",
    width: "100%",
  },
}));