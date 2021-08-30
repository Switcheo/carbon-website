import { RoadMapPageArrowLeft, RoadMapPageArrowRight, RoadMapPageCardIcon, RoadMapPageCardTick } from "@carbon-info/assets";
import { Box, Divider, makeStyles, Modal, Theme, Typography } from "@material-ui/core";
import clsx from "clsx";
import React, { useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { useInView } from "react-intersection-observer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
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
      link: string;
    }[];
  }[],
}

const RoadMapTab: React.FC<Props> = (props: Props) => {
  const { content } = props;
  const classes = useStyles();
  const [view, setView] = useState(0);
  const [tabView, setTabView] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: true,
  });

  const incrementTab = () => {
    setTabView((prev) => {
      if (prev + 1 > content[view].tabs.length - 1) return 0;
      else return prev + 1;
    });
  };

  const decrementTab = () => {
    setTabView((prev) => {
      if (prev - 1 < 0) return prev - 1 + content[view].tabs.length;
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
        <RoadMapModal closeModal={() => setShowModal(false)} content={content[view].tabs[tabView]} mainTitle={content[view].title} incrementTab={incrementTab} decrementTab={decrementTab} />
      </Modal>
      <Box className={clsx(classes.container, { open: inView })}>
        {
          content.map((o, index) => {
            return (
              <>
                <Divider style={{ width: "80%", background: "#554B4B", margin: "0px auto" }} />
                <br /><br /><br />
                <div key={o.title}>
                  <Typography color="textPrimary" variant="h2" className={clsx(classes.tab)}>
                    {o.title}
                  </Typography>
                  <Typography color="textPrimary" variant="subtitle1" align="center" style={{}} className={classes.titleDescription}>
                    {o.description}
                  </Typography>
                </div>
                <div style={{ margin: "2rem 0px 0.5rem 0px" }}>
                  <Carousel
                    showArrows={false}
                    showStatus={false}
                    showThumbs={false}
                    showIndicators={false}
                    centerMode
                    autoPlay={false}
                  >
                    {
                      o.tabs.map((o, tabIndex) => {
                        return (
                          <div key={tabIndex} className={clsx(classes.contentCardContainer, { completed: o.status === "Completed" })}>
                            <Typography color="textPrimary" variant="subtitle1" className={classes.cardTitle}>
                              {o.title}
                            </Typography>
                            {
                              o.status === "Completed" ?
                                <div style={{ position: "relative" }}>
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
                            <Typography color="textPrimary" variant="body1" align="left" style={{ gridColumn: "1/-1" }} className={classes.cardDescription}>
                              {o.description}
                            </Typography>
                            <Typography color="textPrimary" variant="body1" align="left" className={clsx(classes.status, { completed: o.status === "Completed" })}>
                              {o.status}
                            </Typography>
                            <RoadMapPageCardIcon className={classes.arrowIcon} onClick={() => { setView(index); setShowModal(true); setTabView(tabIndex); }} />
                          </div>
                        );
                      })
                    }
                  </Carousel>

                </div>
                <br /><br />
                <Typography color="textPrimary" variant="subtitle2" className={classes.swipe}>
                  <RoadMapPageArrowLeft style={{ height: "1.5rem", color: "red" }} />
                        SWIPE FOR MORE
                        <RoadMapPageArrowRight style={{ height: "1.5rem" }} />
                </Typography>
                <br /><br /><br />
                <Divider style={{ width: "80%", background: "#554B4B", margin: "0px auto" }} />
              </>
            );
          })
        }
        <br />
      </Box>
    </div >
  );
};

export default RoadMapTab;

const useStyles = makeStyles((theme: Theme) => ({
  swipe: {
    fontSize: "2rem",
    letterSpacing: 1,
    fontWeight: 500,
    color: "#878181",
    "& > svg > path": {
      fill: "#878181 !important",
    },
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
    alignSelf: "center",
    justifySelf: "center",
  },
  circular: {
    height: "100%",
  },
  cardTitle: {
    width: "80%",
    fontFamily: "TyrosPro",
    fontWeight: 400,
    fontSize: "1.5rem",
    lineHeight: "2.041rem",
    letterSpacing: "-0.063rem",
  },
  cardDescription: {

  },
  titleDescription: {
    width: "90%",
    margin: "2rem auto",
    // fontFamily: "SourceSansPro-Light",
    fontWeight: 600,
    color: "#C4C4C4",
    // fontSize: "1.438rem",
    // lineHeight: "2.041rem",
    // letterSpacing: "-0.063rem",
    [theme.breakpoints.down(340)]: {
      width: "100%",
      fontSize: "2rem",
    },
  },
  contentCardContainer: {
    boxSizing: "border-box",
    height: "100%",
    width: "100%",
    maxWidth: "62vw",
    gridTemplateRows: "4rem",
    rowGap: "1rem",
    display: "grid",
    gridTemplateColumns: "75% 25%",
    textAlign: "start",
    alignItems: "flex-start",
    padding: "1rem 1rem 1rem 2rem",
    boxShadow: "inset 62px 98px 100px -60px rgba(36, 36, 36,0.5), inset 0px 1px 40px rgba(85, 85, 85, 0.04)",
    backdropFilter: "blur(3px)",
    borderRadius: 12,
    margin: "auto",
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
      maskComposite: "destination-out",
      pointerEvents: "none",
    },
  },
  tab: {
    position: "relative",
    zIndex: 1,
    boxSizing: "border-box",
    // padding: "1.5rem 2.5rem",
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
    minHeight: 55,
    // background: "red"
    opacity: 0,
    transform: "translate(0px, 20px)",
    // transitionDelay: "0.3s",
    transition: "opacity ease-in 0.3s, transform ease-in 0.4s",
    "&.open": {
      opacity: 1,
      transform: "translate(0px,0px)",
    },
  },
}));