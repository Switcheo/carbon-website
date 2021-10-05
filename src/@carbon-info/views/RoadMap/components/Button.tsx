import React from "react";
import { makeStyles } from "@material-ui/core";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import { RoadMapLeftButtonIcon, RoadMapRightButtonIcon } from "@carbon-info/assets";

interface Props {
  callback?: () => void,
  direction: "left" | "right",
  size?: "small",
}

const isFirefox = !!(navigator.userAgent.indexOf("Firefox") !== -1);

const RoadMapButton: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const { direction, callback, size } = props;
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: true,
  });
  const buttonIcon = direction === "left" ? <RoadMapLeftButtonIcon className={clsx(classes.icon, { small: size === "small" })} /> : <RoadMapRightButtonIcon className={clsx(classes.icon, { small: size === "small" })} />;
  return (
    <div ref={ref}>
      <div className={clsx(
        classes.buttonContainer,
        { open: inView },
        { left: direction === "left" },
        { right: direction === "right" },
        { small: size === "small" },
      )}
        onClick={callback}>
        {buttonIcon}
      </div>
    </div>
  );
};

export default RoadMapButton;

const useStyles = makeStyles(() => ({
  icon: {
    width: "1.5rem",
    height: "1.5rem",
    "&.small": {
      width: "1rem",
      height: "1rem",
    },
  },
  buttonContainer: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(353.27deg, rgba(41, 40, 40, 0.21) -9.67%, #161515 94.17%)",
    "&:hover": {
      background: "linear-gradient(90.32deg, #12F1FF 0.23%, #4F7EAA 96.43%)",
      "& path": {
        stroke: "#8CF2FD",
      },
    },
    mixBlendMode: "normal",
    boxShadow: "inset 62px 98px 100px -60px #242424, inset 0px 1px 40px rgba(85, 85, 85, 0.04)",
    backdropFilter: "blur(100px)",
    borderRadius: "50%",
    width: "6rem",
    height: "6rem",
    textAlign: "start",
    overflow: "hidden",
    margin: "auto",
    opacity: 0,
    transition: "opacity ease-in 0.3s, transform ease-in 0.4s, background ease-in-out 0.3s",
    "&.left": {
      marginRight: "5rem",
      transform: "translate(20px, 0px)",
    },
    "&.right": {
      marginLeft: "5rem",
      transform: "translate(-20px, 0px)",
    },
    "&.open": {
      opacity: 1,
      transform: "translate(0px,0px)",
    },
    "&.small": {
      width: "4rem",
      height: "4rem",
      "&.left": {
        marginRight: "0rem",
        transform: "translate(20px, 0px)",
        "&.open": {
          opacity: 1,
          transform: "translate(0px,0px)",
        },
      },
      "&.right": {
        marginLeft: "0rem",
        transform: "translate(-20px, 0px)",
        "&.open": {
          opacity: 1,
          transform: "translate(0px,0px)",
        },
      },
    },
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: "50%",
      padding: "1.755px",
      background: "linear-gradient(180deg,#74E8E8,rgba(255,255,255,0.7),rgba(255,255,255,0.3))",
      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      maskComposite: `${isFirefox ? "subtract" : "source-out"}`,
      pointerEvents: "none",
    },
  },
}));