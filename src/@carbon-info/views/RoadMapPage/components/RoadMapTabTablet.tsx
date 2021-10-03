import { RoadMapPageArrowLeft, RoadMapPageArrowRight, RoadMapPageCardIcon, RoadMapPageCardTick } from "@carbon-info/assets";
import { Box, createStyles, Grid, Grow, makeStyles, Modal, Theme, Typography, withStyles } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import clsx from "clsx";
import React, { useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { useInView } from "react-intersection-observer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RoadMapModal from "./RoadMapModal";

interface Props {
  content: {
    title: string;
    description: string;
    tabs: {
      title: string;
      description: string;
      status: string;
      progress: number;
      docLink: string;
      githubLink: string;
      shortDescription: string;
    }[];
  }[],
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const RoadMapTab: React.FC<Props> = (props: Props) => {
  const { content } = props;
  const classes = useStyles();
  const [view, setView] = useState(0);
  const [tabView, setTabView] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
    triggerOnce: true,
  });

  const incrementTab = () => {
    setTabView((prev) => {
      if (prev + 1 > content[view]?.tabs
        .filter(o => o.status === (showCompleted ? "Completed" : "In progress")).length - 1) return 0;
      else return prev + 1;
    });
  };

  const decrementTab = () => {
    setTabView((prev) => {
      if (prev - 1 < 0) return prev - 1 + content[view]?.tabs
        .filter(o => o.status === (showCompleted ? "Completed" : "In progress")).length;
      else return prev - 1;
    });
  };

  return (
    <div ref={ref} className={classes.aniContainer}>
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <RoadMapModal
          closeModal={() => setShowModal(false)}
          content={content[view]?.tabs.filter(o => o.status === (showCompleted ? "Completed" : "In progress"))[tabView]}
          mainTitle={content[view]?.title}
          page={tabView + 1}
          incrementTab={incrementTab}
          decrementTab={decrementTab} />
      </Modal>
      <Box className={clsx(classes.container, { open: inView })}>
        <Grid container>
          <Grid container item xs={12} className={classes.tabContainer}>
            <Carousel
              responsive={responsive}
              infinite={true}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              itemClass="carousel-item-padding-40-px"
              customLeftArrow={<RoadMapPageArrowLeft className={"react-multiple-carousel__arrow react-multiple-carousel__arrow--left"} />}
              customRightArrow={<RoadMapPageArrowRight className={"react-multiple-carousel__arrow react-multiple-carousel__arrow--right"} />}
              beforeChange={(nextSlide) => {
                const nextSlideAbs = nextSlide - 2 < 0
                  ? nextSlide - 2 + content.length
                  : nextSlide - 2 > content.length - 1
                    ? 0
                    : nextSlide - 2;
                setView(nextSlideAbs);
              }}
            >
              {
                content.map((o, index) => {
                  return (
                    <div key={o.title}>
                      <Typography color="textPrimary" variant="h2" className={clsx(classes.tab, { selected: index === view })}>
                        {o.title}
                      </Typography>
                    </div>
                  );
                })
              }
            </Carousel>
          </Grid>
          <br />
          <Typography color="textPrimary" variant="subtitle1" align="center" className={classes.titleDescription}>
            {content[view]?.description}
          </Typography>
          <div className={classes.FilterContainer}>
            <Typography color="textPrimary" variant="h4" display={"inline"} className={classes.filterText}>
              In Progress
                  </Typography>
            <IOSSwitch checked={showCompleted} onChange={() => setShowCompleted(!showCompleted)} name="checkedB" />
            <Typography color="textPrimary" variant="h4" display={"inline"} className={classes.filterText}>
              Completed
                  </Typography>
          </div>
          <Grid container item xs={12} className={classes.contentContainer} spacing={0}>
            <Grid container item xs={12} spacing={2}>
              {
                content[view]?.tabs.filter(card => card.status === (showCompleted ? "Completed" : "In progress")).map((o, index) => {
                  return (
                    <Grid item xs={12} sm={6} md={4} key={o.title}>
                      <Grow in={true} timeout={(index + 1) * 200 > 1000 ? 1000 : (index + 1) * 200}>
                        <div className={clsx(classes.contentCardContainer, { completed: o.status === "Completed" })}>
                          <Typography color="textPrimary" variant="subtitle1" className={classes.cardTitle}>
                            {o.title}
                          </Typography>
                          {
                            o.status === "Completed" ?
                              <div className={classes.circularCompletedContainer}>
                                <CircularProgressbar
                                  className={classes.circularCompleted}
                                  value={100}
                                  styles={buildStyles({
                                    pathColor: "#74E8E8",
                                    trailColor: "rgba(255, 255, 255, 0.3)",
                                    textColor: "rgba(255, 255, 255, 1)",
                                  })} />
                                <RoadMapPageCardTick className={classes.tickSVG} />
                              </div>
                              :
                              <CircularProgressbar
                                className={classes.circular}
                                value={o.progress}
                                text={`${o.progress}%`}
                                styles={buildStyles({
                                  pathColor: "rgba(255, 255, 255, 1)",
                                  trailColor: "rgba(255, 255, 255, 0.3)",
                                  textColor: "rgba(255, 255, 255, 1)",
                                })}
                              />
                          }
                          <Typography color="textPrimary" variant="body1" align="left" className={classes.cardDescription}>
                            {o.shortDescription}
                          </Typography>
                          <Typography color="textPrimary" variant="body1" align="left" className={clsx(classes.status, { completed: o.status === "Completed" })}>
                            {o.status}
                          </Typography>
                          <RoadMapPageCardIcon className={classes.arrowIcon} onClick={() => { setShowModal(true); setTabView(index); }} />
                        </div>
                      </Grow>
                    </Grid>
                  );
                })
              }
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div >
  );
};

export default RoadMapTab;

const useStyles = makeStyles((theme: Theme) => ({
  circularCompletedContainer: {
    position: "relative",
  },
  tickSVG: {
    position: "absolute",
    zIndex: 99,
    top: "1.1rem",
    left: "35%",
    [theme.breakpoints.down("sm")]: {
      top: "0.7rem",
      left: "37%",
      width: "1.5rem",
    },
  },
  circularCompleted: {
    position: "absolute",
    height: "4rem",
  },
  status: {
    color: "#74E8E8",
    "&.completed": {
      color: "#5B5656",
    },
  },
  filterText: {
    fontWeight: 400,
  },
  arrowIcon: {
    height: "1.8rem",
    cursor: "pointer",
    alignSelf: "center",
    justifySelf: "center",
  },
  circular: {
    height: "100%",
  },
  cardTitle: {
    fontFamily: "TyrosPro",
    fontWeight: 400,
    fontSize: "1.5rem",
    lineHeight: "2.041rem",
    letterSpacing: "-0.063rem",
    textOverflow: "ellipsis",
    overflow: "hidden",
    lineClamp: 2,
    boxOrient: "vertical",
    display: "-webkit-box",
  },
  cardDescription: {
    lineHeight: "1.6rem",
    textOverflow: "ellipsis",
    overflow: "hidden",
    lineClamp: 3,
    boxOrient: "vertical",
    display: "-webkit-box",
    gridColumn: "1/-1",
  },
  titleDescription: {
    width: "70%",
    margin: "2rem auto",
    fontWeight: 600,
    color: "#C4C4C4",
  },
  contentCardContainer: {
    boxSizing: "border-box",
    height: "100%",
    gridTemplateRows: "4rem",
    rowGap: "1rem",
    display: "grid",
    gridTemplateColumns: "75% 25%",
    textAlign: "start",
    alignItems: "flex-start",
    padding: "2rem 1rem 2rem 2rem",
    boxShadow: "inset 62px 98px 100px -60px rgba(36, 36, 36,0.5), inset 0px 1px 40px rgba(85, 85, 85, 0.04)",
    backdropFilter: "blur(3px)",
    borderRadius: 12,
    margin: "auto",
    position: "relative",
    "&.completed": {
      backgroundColor: "#292A2F",
      boxShadow: "inset 62px 98px 100px -60px #242424, inset 0px 1px 40px rgba(85, 85, 85, 0.04)",
      backdropFilter: "blur(100px)",
      "&::before": {
        content: "''",
        position: "absolute",
        borderRadius: 12,
        padding: 0,
        background: "none",
        mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      },
    },
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: 12,
      padding: "1.755px",
      background: "linear-gradient(180deg,#74E8E8,#74E8E8,rgba(255,255,255,0.4),rgba(255,255,255,0.2))",
      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      maskComposite: "source-out",
      pointerEvents: "none",
    },
  },
  tab: {
    position: "relative",
    zIndex: 1,
    maxWidth: "27rem",
    boxSizing: "border-box",
    margin: "auto",
    "&.selected": {
      color: "#74E8E8",
      zIndex: 3,
    },
  },
  tabContainer: {
    width: "100%",
    display: "grid",
  },
  contentContainer: {
    zIndex: 2,
    padding: "2rem",
    boxSizing: "border-box",
    marginTop: "1rem",
  },
  FilterContainer: {
    width: "100%",
    margin: "0px auto",
  },
  descriptionAndFilterContainer: {
    display: "flex",
    marginBottom: "1rem",
  },
  aniContainer: {
    position: "relative",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    margin: "3vh 0px 0vh 0px",
    display: "relative",
    zIndex: 1,
    minHeight: "55rem",
    opacity: 0,
    transform: "translate(0px, 20px)",
    transition: "opacity ease-in 0.3s, transform ease-in 0.4s",
    "&.open": {
      opacity: 1,
      transform: "translate(0px,0px)",
    },
  },
}));

const IOSSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      color: "#74E8E8",
      padding: 1,
      "&$checked": {
        transform: "translateX(16px)",
        color: "#74E8E8",
        "& + $track": {
          backgroundColor: "#3c3636",
          opacity: 1,
          border: "none",
        },
      },
      "&$focusVisible $thumb": {
        color: "#74E8E8",
        border: "6px solid #fff",
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      backgroundColor: "#3c3636",
      opacity: 1,
      transition: theme.transitions.create(["background-color", "border"]),
    },
    checked: {},
    focusVisible: {},
  }),
)(({ classes, ...props }: any) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});