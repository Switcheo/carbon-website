import { RoadMapPageCardIcon, RoadMapPageCardTick } from "@carbon-info/assets";
import { StyleUtils } from "@carbon-info/utils/styles";
import { Box, Divider, Grid, Grow, Modal, Theme, Typography, createStyles, makeStyles, withStyles } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import clsx from "clsx";
import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useInView } from "react-intersection-observer";
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

const isFirefox = !!(navigator.userAgent.indexOf("Firefox") !== -1);
const isMobileSafari = !!(navigator.userAgent.indexOf("iPhone") > -1);

const RoadMapTab: React.FC<Props> = (props: Props) => {
  const { content } = props;
  const classes = useStyles();
  const [view, setView] = useState(0);
  const [tabView, setTabView] = useState(0);
  const [showCompleted, setShowCompleted] = useState(false);
  const [showModal, setShowModal] = useState(false);
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
        <>
          <RoadMapModal
            closeModal={() => setShowModal(false)}
            content={content[view]?.tabs.filter(o => o.status === (showCompleted ? "Completed" : "In progress"))[tabView]}
            mainTitle={content[view]?.title}
            page={tabView + 1}
            incrementTab={incrementTab}
            decrementTab={decrementTab} />
        </>
      </Modal>
      <Box className={clsx(classes.container, { open: inView })}>
        <Grid container>
          <Grid container item xs={12} className={classes.tabContainer}>
            {
              content.map((o, index) => {
                return (
                  <div onClick={() => setView(index)} key={o.title} className={classes.tabDiv}>
                    <Typography color="textPrimary" variant="h4" className={clsx(classes.tab, { selected: index === view })}>
                      <span className={classes.tabTitle}>
                        {o.title}
                      </span>
                      {
                        index === view && (
                          <Divider className={classes.tabDivider} />
                        )
                      }
                    </Typography>
                  </div>
                );
              })
            }
          </Grid>
          <Grid container item xs={12} className={classes.contentContainer} spacing={4}>
            <Grid item xs={12}>
              <div className={classes.descriptionAndFilterContainer}>
                <span>
                  <Typography color="textPrimary" variant="body1" align="left" className={classes.description}>
                    {content[view]?.description}
                  </Typography>
                </span>
                <span className={classes.FilterContainer}>
                  <Typography color="textPrimary" variant="h4" display={"inline"} className={classes.filterText}>
                    In Progress
                  </Typography>
                  <IOSSwitch checked={showCompleted} onChange={() => setShowCompleted(!showCompleted)} name="checkedB" />
                  <Typography color="textPrimary" variant="h4" display={"inline"} className={classes.filterText}>
                    Completed
                  </Typography>
                </span>
              </div>
            </Grid>
            <Grid container item xs={12} spacing={2}>
              {
                content[view]?.tabs.filter(card => card.status === (showCompleted ? "Completed" : "In progress")).map((o, index) => {
                  return (
                    <Grid item xs={12} sm={6} md={4} key={o.title}>
                      <Grow in={inView} timeout={(index + 1) * 200 > 1000 ? 1000 : (index + 1) * 200}>
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
    </div>
  );
};

export default RoadMapTab;

const useStyles = makeStyles((theme: Theme) => ({
  description: {
    maxWidth: "36rem",
  },
  tabDiv: {
    height: "100%",
  },
  tabTitle: {
    maxWidth: "10rem",
  },
  tabDivider: {
    position: "absolute",
    bottom: 0,
    zIndex: 4,
    width: "70%",
    left: "15%",
  },
  tickSVG: {
    position: "absolute",
    zIndex: 99,
    top: "1.1rem",
    left: "33%",
    [theme.breakpoints.down(1050)]: {
      left: "28%",
    },
  },
  circularCompletedContainer: {
    position: "relative",
  },
  circularCompleted: {
    position: "absolute",
    height: "4rem",
  },
  status: {
    letterSpacing: 0,
    marginTop: "auto",
    color: "#74E8E8",
    "&.completed": {
      color: "#5B5656",
    },
  },
  filterText: {
    fontWeight: 400,
  },
  arrowIcon: {
    marginTop: "auto",
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
    letterSpacing: "0px",
    lineHeight: "1.90rem",
    textOverflow: "ellipsis",
    overflow: "hidden",
    lineClamp: 4,
    boxOrient: "vertical",
    display: "-webkit-box",
    gridColumn: "1/-1",
  },
  contentCardContainer: {
    height: "100%",
    boxSizing: "border-box",
    gridTemplateRows: "4rem",
    rowGap: "1.6rem",
    display: "grid",
    gridTemplateColumns: "75% 25%",
    textAlign: "start",
    alignItems: "flex-start",
    padding: "1.5rem 1rem 1.5rem 2rem",
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
        mask: StyleUtils.maskGradient,
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
      background: StyleUtils.roadmapBackgroundGradient,
      mask: StyleUtils.maskGradient,
      maskComposite: `${isFirefox || isMobileSafari ? "subtract" : "source-out"}`,
      pointerEvents: "none",
    },
  },
  tab: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    lineHeight: "1.688rem",
    position: "relative",
    zIndex: 1,
    width: "100%",
    boxSizing: "border-box",
    padding: "1.5rem 2.5rem",
    backdropFilter: "blur()",
    borderRadius: "0px 0px 0px 0px",
    margin: "auto",
    "&.selected": {
      color: "#74E8E8",
      zIndex: 3,
      backgroundColor: "#1B1C1F",
      boxShadow: "inset 84.877px 134.16px 136.898px -82.139px #242424, inset 0px 1.36898px 54.7594px rgb(85 85 85 / 4%)",
      "&::before": {
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: "12px 12px 0px 0px",
        padding: "1.755px 1.755px 0px 1.755px",
        background: "#74E8E8",
        mask: StyleUtils.maskGradient,
        maskComposite: `${isFirefox || isMobileSafari ? "subtract" : "source-out"}`,
        pointerEvents: "none",
      },
    },
  },
  tabContainer: {
    height: "100%",
    cursor: "pointer",
    backgroundColor: "#1B1C1F",
    boxShadow: "inset 84.877px 134.16px 136.898px -82.139px #242424, inset 0px 1.36898px 54.7594px rgba(85, 85, 85, 0.04)",
    mixBlendMode: "normal",
    backdropFilter: "blur(136.89px)",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "-2px",
    zIndex: 3,
    borderRadius: 9,
    position: "relative",
    "&::before": {
      content: "''",
      position: "absolute",
      // top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      padding: "0px 0px 2px 0px",
      background: "#74E8E8",
      mask: StyleUtils.maskGradient,
      maskComposite: `${isFirefox || isMobileSafari ? "subtract" : "source-out"}`,
      pointerEvents: "none",
    },
  },
  contentContainer: {
    zIndex: 2,
    padding: "2rem",
    boxSizing: "border-box",
    boxShadow: "inset 62px 98px 100px -60px rgba(36, 36, 36,0.5), inset 0px 1px 40px rgba(85, 85, 85, 0.04)",
    backdropFilter: "blur(3px)",
    borderRadius: "12px",
    background: "#1B1C1F",
    margin: "auto",
    position: "relative",
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: "0px 0px 12px 12px",
      padding: "1.755px",
      background: "#74E8E8",
      mask: StyleUtils.maskGradient,
      maskComposite: `${isFirefox || isMobileSafari ? "subtract" : "source-out"}`,
      pointerEvents: "none",
    },
  },
  FilterContainer: {
    marginLeft: "auto",
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
    margin: "20vh 0px",
    display: "relative",
    zIndex: 1,
    opacity: 0,
    transform: "translate(0px, 20px)",
    transition: "opacity ease-in 0.3s, transform ease-in 0.4s",
    "&.open": {
      opacity: 1,
      transform: "translate(0px,0px)",
    },
  },
  cardContainer: {
    position: "relative",
    alignItems: "center",
    padding: "0px 2.5rem 0px 2.5rem",
    maxWidth: "80rem",
    height: "38rem",
    boxShadow: "inset 62px 98px 100px -60px rgba(36, 36, 36,0.5), inset 0px 1px 40px rgba(85, 85, 85, 0.04)",
    backdropFilter: "blur(3px)",
    borderRadius: "58px",
    textAlign: "start",
    background: "rgba(0,0,0,0.0)",
    margin: "auto",
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: 58,
      padding: "1.755px",
      background: StyleUtils.roadmapBackgroundGradient,
      mask: StyleUtils.maskGradient,
      maskComposite: `${isFirefox || isMobileSafari ? "subtract" : "source-out"}`,
      pointerEvents: "none",
    },
    [theme.breakpoints.down("sm")]: {
      width: "fit-content",
      borderRadius: 21,
      "&::before": {
        borderRadius: 21,
      },
    },
    [theme.breakpoints.down("xs")]: {
      height: "42rem",
      borderRadius: 21,
      "&::before": {
        borderRadius: 21,
      },
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