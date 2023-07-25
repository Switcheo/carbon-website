import roadMapBG from "@carbon-info/assets/background/roadmapLineBg.png";
import { CTAButton, FadeAndSlide } from "@carbon-info/components";
import { useContentful } from "@carbon-info/hooks";
import { isWidth } from "@carbon-info/utils/environment";
import { Box, Fade, Grid, Theme, Typography, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { RoadMapButton, SphereWithText } from "./components";

const RoadMap: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isTablet = isWidth("sm");
  const isMobile = isWidth("xs");
  const isWideDesktop = useMediaQuery(theme.breakpoints.up("xl"));
  const [progressAndDescriptionCounter, setProgressAndDescriptionCounter] = useState<any>([]);
  const [step, setStep] = useState<any>(0);
  const [roadMapItems, setRoadMapItems] = useState<any[]>([]);
  const [view, setView] = useState([0]);
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.25,
    triggerOnce: true,
  });
  const { data } = useContentful({
    contentType: "carbonRoadmap",
  });

  useEffect(() => {
    if (!data && view) return;
    async function fetchRoadMapItems() {
      let result: any[] = [];
      let progress100: any[] = [];
      const content = await data as any;
      if (content && Array.isArray(content.items)) {
        content.items.forEach((o: any) => {
          o?.fields?.entries?.forEach((entry: any) => {
            let data = {
              category: o.fields.title,
              docLink: entry.fields.link,
              githubLink: entry.fields.githubLink,
              progress: entry.fields.progress,
              status: entry.fields.status,
              title: entry.fields.title,
              description: entry.fields.description.content[0].content[0].value,
              shortDescription: entry.fields.shortDescription,
              lastUpdate: entry.sys.updatedAt,
            };
            if (entry.fields.progress === 100) {
              progress100.push({ ...data });
            }
            else {
              result.push({ ...data });
            }
          });
        });
      }
      progress100.sort(((a, b) => {
        if (moment(a.lastUpdate) > moment(b.lastUpdate)) {
          return 1;
        }
        return -1;
      }));
      result.sort(((a, b) => b.progress - a.progress));
      const finalResult = [...progress100, ...result];
      setRoadMapItems(finalResult);
      setView(initialViewState(finalResult));
      setProgressAndDescriptionCounter(initialCounter(finalResult));
    }
    fetchRoadMapItems();
  }, [data]);

  const initialViewState = (data: any) => {
    let result: number[] = [0];
    let completedCounter = 1;
    let inProgressCounter = 1;
    for (let i = 0; i < data.length - 1; i++) {
      if (data[i].progress >= 100) {
        result.unshift(completedCounter * -1);
        completedCounter++;
      }
      else {
        result.push(inProgressCounter);
        inProgressCounter++;
      }
    }
    return result;
  };

  const initialCounter = (data: any) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].progress < 100) {
        return i;
      }
    }
  };

  function useThrottle(func: any, delay: any) {
    const [inThrottle, setInThrottle] = useState<any>(false);
    const throttledFunc = function () {
      if (!inThrottle) {
        func();
        setInThrottle(true);
        setTimeout(() => {
          setInThrottle(false);
        }, delay);
      }
      // saveTimeout(newTimeout);
    };
    return throttledFunc;
  }

  const decrementStep = () => {
    setProgressAndDescriptionCounter((prev: number) => {
      return prev + 1 > roadMapItems.length - 1 ? 0 : prev + 1;
    });
    setStep((prev: number) => setStep(prev + 1));
    setView((prev): any => {
      let temp = [prev[prev.length - 1]];
      for (let i = 0; i < prev.length - 1; i++) {
        temp.push(prev[i]);
      }
      return temp;
    });
  };

  const incrementStep = () => {
    setProgressAndDescriptionCounter((prev: number) => {
      return prev - 1 < 0 ? roadMapItems.length - 1 : prev - 1;
    });
    setStep((prev: number) => setStep(prev - 1));
    setView((prev): any => {
      let temp = [prev[0]];
      for (let i = prev.length - 1; i > 0; i--) {
        temp.unshift(prev[i]);
      }
      return temp;
    });
  };
  return (
    <div ref={ref} id="roadMap">
      <Box className={classes.boxContainer}>
        <FadeAndSlide visible={inView}>
          <Typography variant="h2" color="textPrimary" paragraph>
            Building towards change
          </Typography >
        </FadeAndSlide>
        <FadeAndSlide visible={inView} delay={10000}>
          <Grid container alignItems="center" justifyContent="center" className={classes.roadMapContainer} spacing={8}>
            <div className={classes.roadMapSVGContainer}>
              <img src={roadMapBG} alt="bg" className={classes.roadMapSVG} />
              <div className={classes.sphereContainer} style={{ transform: `rotate(${step * 0}deg)` }}>
                {roadMapItems.map((items, index) => {
                  return (
                    <SphereWithText
                      key={index}
                      step={view[index]}
                      percent={items.progress}
                      text={items.title}
                      isMobile={isMobile}
                      isTablet={isTablet}
                      isWideDesktop={isWideDesktop}
                    />
                  );
                })}
              </div>
            </div>
          </Grid>
        </FadeAndSlide>
        <Typography color="textPrimary" variant="h2" paragraph className={classes.percentage}>
          {roadMapItems[progressAndDescriptionCounter]?.progress}%
        </Typography>
        <Typography color="textPrimary" variant="body2" className={classes.category}>
          {roadMapItems[progressAndDescriptionCounter]?.category}
        </Typography>
        <br />
        <Fade in={true}>
          <Typography color="textPrimary" variant="body2" className={classes.roadMapDescription}>
            {roadMapItems[progressAndDescriptionCounter]?.shortDescription}
          </Typography>
        </Fade>
        <br />
        <br />
        <Grid container className={classes.roadMapButtonContainer}>
          <Grid item xs={6}>
            <RoadMapButton direction="left" callback={useThrottle(incrementStep, 900)} />
          </Grid>
          <Grid item xs={6}>
            <RoadMapButton direction="right" callback={useThrottle(decrementStep, 900)} />
          </Grid>
        </Grid>
        <div className={classes.button}>
          <CTAButton
            text="See Full Roadmap"
            link="/roadmap"
            textClassName={classes.ctaText}
            iconClassName={classes.ctaIcon}
            newTab={false}
            buttonClassName={classes.ctaButton}
          />
        </div>
      </Box>
    </div >
  );
};

export default RoadMap;

const useStyles = makeStyles((theme: Theme) => ({
  roadMapButtonContainer: {
    zIndex: 9,
    position: "relative",
  },
  sphereContainer: {
    borderRadius: "48%",
    position: "absolute",
    top: 0,
    zIndex: 2,
    transition: "all 0.3s ease-in",
    width: "100%",
  },
  category: {
    color: "#c4c4c4",
    marginTop: "1rem",
    cursor: "pointer",
  },
  gradientOverlay: {
    pointerEvents: "none",
    zIndex: 3,
    position: "absolute",
    width: "100vw",
    height: "100vh",
    top: 0,
    "&.right": {
      background: "linear-gradient(to left, rgb(22, 21, 21,1),transparent,transparent)",
      right: 0,
    },
    "&.left": {
      background: "linear-gradient(to right, rgb(22, 21, 21,1),transparent,transparent)",
      left: 0,
    },
  },
  roadMapDescription: {
    maxWidth: "35rem",
    margin: "auto",
    textOverflow: "ellipsis",
    overflow: "hidden",
    lineClamp: 2,
    boxOrient: "vertical",
    display: "-webkit-box",
  },
  percentage: {
    transition: "all 1s ease-in",
    fontWeight: 600,
    fontSize: "3.138rem",
    [theme.breakpoints.down(1080)]: {
      marginTop: "3rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
    },
  },
  button: {
    margin: "3rem 0px 3rem 16px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      margin: "7rem auto",
    },
  },
  ctaText: {
    color: theme.palette.primary.main,
  },
  boxContainer: {
    margin: "5vh 0px 15vh",
    [theme.breakpoints.down("sm")]: {
      margin: "10vh 0px",
    },
  },
  roadMapSVG: {
    zIndex: 2,
    width: "110vw",
    pointerEvents: "none",
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      marginBottom: "0%",
      width: "140vw",
    },
    [theme.breakpoints.down("xs")]: {
      width: "125vw",
    },
  },
  roadMapSVGContainer: {
    overflow: "visible",
    marginTop: "5rem",
    pointerEvents: "none",
    position: "relative",
    marginBottom: "-38vw",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "-48%",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "-30%",
    },
    [theme.breakpoints.up("xl")]: {
      marginBottom: "-42vw",
    },
  },
  roadMapContainer: {
    zIndex: 1,
    marginTop: "7rem",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      marginTop: "6rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "9rem",
    },
  },
  ctaIcon: {
    width: "20px",
    height: "16px",
    "& path": {
      fill: theme.palette.primary.main,
    },
  },
  ctaButton: {
    "&:hover $ctaText": {
      color: theme.palette.common.white,
      transition: "all 0.2s ease-in",
    },
    "&:hover $ctaIcon": {
      "& path": {
        fill: theme.palette.common.white,
        transition: "all 0.2s ease-in",
      },
    },
  },
}));
