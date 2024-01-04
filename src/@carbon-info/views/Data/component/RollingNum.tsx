import { Typography } from "@material-ui/core";
import React, { useEffect, useMemo, useState } from "react";
import { CountUp } from "use-count-up";
import { DataInfo } from "../Data";

interface Props {
  item: DataInfo,
}

let intervalId: any;

const RollingNum: React.FC<Props> = (props: Props) => {
  const { item } = props;
  const regexExp = /,|\$|\+/g;
  const interval = Math.floor(Math.random() * (5 - 3) + 3); // random interval from 3 - 5s
  const [startValue, setStartValue] = useState(parseInt(item.value.replaceAll(regexExp, "")));
  const [valueToAdd, setValueToAdd] = useState(Math.floor(Math.random() * (5 - 3) + 3));
  const [endValue, setEndValue] = useState(startValue + valueToAdd);

  const onComplete = () => {
    return { shouldRepeat: false, delay: interval };
  };

  const startTime = useMemo(() => {
    return new Date().getTime();
  }, [item]);

  useEffect(() => {
    intervalId = setInterval(() => {
      if (new Date().getTime() - startTime > 60000) {
        clearInterval(intervalId);
        return;
      }

      setStartValue((startValue) => startValue + valueToAdd);
      const value = Math.floor(Math.random() * (5 - 3) + 3);
      setEndValue((endValue) => endValue + value);
      setValueToAdd(value);
    }, (interval * 1000));
  }, []);

  return (
    <Typography variant="h4" color="textPrimary" align="center">
      {item.description === "Total_Value_Locked" && "$"}
      <CountUp isCounting={true} start={startValue} end={endValue} duration={3} thousandsSeparator="," easing="easeOutCubic" updateInterval={0} onComplete={onComplete} />
    </Typography>
  );
};

export default RollingNum;
