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
    width: "2rem",
    height: "2rem",
    "&.small": {
      width: "1.5rem",
      height: "1.5rem",
    },
  },
  buttonContainer: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(176, 176, 176, 0.03)",
    mixBlendMode: "normal",
    backdropFilter: "blur(4px)",
    borderRadius: "50%",
    width: "80px",
    height: "80px",
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
  },
}));