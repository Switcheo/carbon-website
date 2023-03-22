import { makeStyles } from "@material-ui/core";
import React from "react";
import clsx from "clsx";

interface Props {
  children: any,
  transform?: number[],
  delay?: number,
  opacity?: number,
  visible: boolean,
  className?: string,
}

const FadeAndSlide: React.FC<Props> = (props: Props) => {
  const { children, transform = [0, 20], delay = 0, opacity = 0, visible = false, className } = props;
  const classes = useStyles();
  const transformX = transform[0];
  const transformY = transform[1];
  return (
    <div
      className={clsx(className, classes.animation, { open: visible })}
      style={{
        opacity,
        transform: `translate(${transformX}px, ${transformY}px)`,
        transitionDelay: `${delay}s`,
        transition: "opacity ease-in 0.3s, transform ease-in 0.4s",
      }}>
      {children}
    </div>
  );
};

export default FadeAndSlide;

const useStyles = makeStyles(() => ({
  animation: {
    "&.open": {
      opacity: "1 !important",
      transform: "translate(0px,0px) !important",
    },
  },
}));