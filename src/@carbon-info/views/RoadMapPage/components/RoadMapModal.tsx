import { DocsIcon, GitHubIcon, MenuIconClose } from "@carbon-info/assets";
import { RoadMapButton } from "@carbon-info/views/RoadMap/components";
import { Divider, Grid, Hidden, Link, makeStyles, Theme, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import clsx from "clsx";

interface Props {
  content: {
    title: string;
    description: string;
    status: string;
    progress: number;
    docLink: string;
    githubLink: string;
  };
  incrementTab: () => void;
  decrementTab: () => void;
  mainTitle: string;
  closeModal: () => void;
  page: number;
}

const RoadMapModal: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const theme = useTheme();
  const { content, mainTitle, incrementTab, decrementTab, closeModal, page } = props;
  const { title, status, progress, docLink, githubLink, description } = content;
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className={classes.container}>
      <MenuIconClose className={classes.menuIcon} onClick={closeModal} />
      <Grid container alignItems="center" className={classes.titleContainer}>
        <Grid item xs={2} className={classes.circular}>
          <CircularProgressbar
            value={progress}
            text={`${progress}%`}
            styles={buildStyles({
              pathColor: "#FFFFFF",
              trailColor: "rgba(255, 255, 255, 0.3)",
              textColor: "rgba(255, 255, 255, 1)",
            })} />
        </Grid>
        <Grid item xs={10} className={classes.titleTextContainer}>
          <Typography color="textPrimary" variant="body1" className={classes.status}>
            {`${status} > ${mainTitle}`}
          </Typography>
          <Typography color="textPrimary" variant="h3" className={classes.title}>
            {title}
          </Typography>
        </Grid>
      </Grid>
      <Divider className={clsx(classes.divider, "topDivider")} />
      <div className={classes.textContainer}>
        <Typography color="textPrimary" variant="subtitle1" className={classes.divTitle} paragraph>
          Description
        </Typography>
        <Typography color="textPrimary" variant="body2" className={classes.description}>
          {description}
        </Typography>
      </div>
      <div className={classes.pageContainer}>
        <Divider className={clsx(classes.divider, "bottomDivider")} />
        <Typography color="textPrimary" variant="body1" className={classes.pageNumber}>
          {page}
        </Typography>
      </div>
      <Hidden smDown>
        <div className={classes.iconAndButtonContainer}>
          <div className={classes.iconContainer}>
            {
              docLink && (
                <Link href={docLink} underline="none" target="_blank">
                  <div className={classes.iconAndTextContainer}>
                    <DocsIcon className={classes.icon} />
                    <Typography color="textPrimary" variant="body2">
                      Docs
                    </Typography>
                  </div>
                </Link>
              )
            }
            {
              githubLink && (
                <Link href={githubLink} underline="none" target="_blank">
                  <div className={classes.iconAndTextContainer}>
                    <GitHubIcon className={classes.icon} />
                    <Typography color="textPrimary" variant="body2">
                      GitHub
                    </Typography>
                  </div>
                </Link>
              )
            }
          </div>
          <div className={classes.roadMapButtonsContainer}>
            <RoadMapButton direction="left" size={"small"} callback={decrementTab} />
            <RoadMapButton direction="right" size={"small"} callback={incrementTab} />
          </div>
        </div>
      </Hidden>
      <Hidden mdUp>
        <div className={clsx(classes.iconAndButtonContainer, { tablet: isTablet })}>
          <div className={classes.iconContainer}>
            {
              docLink && (
                <Link href={docLink} underline="none" target="_blank">
                  <div className={classes.iconAndTextContainer}>
                    <DocsIcon className={clsx(classes.icon, "tablet")} />
                    <Typography color="textPrimary" variant="body2">
                      Docs
                    </Typography>
                  </div>
                </Link>
              )
            }
            {
              githubLink && (
                <Link href={githubLink} underline="none" target="_blank">
                  <div className={classes.iconAndTextContainer}>
                    <GitHubIcon className={clsx(classes.icon, "tablet")} />
                    <Typography color="textPrimary" variant="body2">
                      GitHub
                    </Typography>
                  </div>
                </Link>
              )
            }
            {
              // create empty space
              (!githubLink && !docLink) && (
                <div style={{ height: "5.9rem" }} />
              )
            }
          </div>
          <div className={clsx(classes.roadMapButtonsContainer, "tablet")}>
            <span className={classes.roadMapButton}>
              <RoadMapButton direction="left" size={"small"} callback={decrementTab} />
            </span>
            <span className={clsx(classes.roadMapButton, "right")}>
              <RoadMapButton direction="right" size={"small"} callback={incrementTab} />
            </span>
          </div>
        </div>
      </Hidden>
    </div>
  );
};

export default RoadMapModal;

const useStyles = makeStyles((theme: Theme) => ({
  roadMapButtonsContainer: {
    marginLeft: "auto",
    display: "flex",
    flexDirection: "row",
    gap: 20,
    "&.tablet": {
      marginTop: "3rem",
      marginLeft: 0,
    },
  },
  roadMapButton: {
    marginRight: "5rem",
    "&.right": {
      marginRight: 0,
      marginLeft: "5rem",
    },
  },
  iconAndTextContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 7,
  },
  iconAndButtonContainer: {
    display: "flex",
    flexDirection: "row",
    margin: "2rem 0px",
    alignItems: "center",
    "&.tablet": {
      flexDirection: "column",
    },
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  icon: {
    height: "2rem",
    "&.tablet": {
      height: "3rem",
    },
  },
  pageContainer: {
    position: "relative",
  },
  pageNumber: {
    position: "absolute",
    bottom: 5,
    right: 0,
    color: "#555861",
  },
  titleTextContainer: {
    padding: "1em",
    paddingLeft: "1.5rem",
  },
  menuIcon: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  titleContainer: {
    height: "9.5rem",
    [theme.breakpoints.down("xs")]: {
      height: "11rem",
    },
    [theme.breakpoints.down(330)]: {
      height: "10.5rem",
    },
  },
  divider: {
    margin: "2rem 0px",
    "&.topDivider": {
      width: "80%",
      backgroundColor: "#42444B",
    },
    "&.bottomDivider": {
      backgroundColor: "#212125",
    },
  },
  title: {
    lineHeight: "42px",
    marginTop: "0.5rem",
    width: "90%",
    [theme.breakpoints.down("sm")]: {
      lineHeight: "28px",
      width: "90%",
    },
    [theme.breakpoints.down("xs")]: {
      lineHeight: "20px",
      width: "90%",
    },
  },
  description: {
    color: "#8C909D",
    lineHeight: "1.5rem",
    fontSize: "1.1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
      lineHeight: "1.7rem",
    },
  },
  divTitle: {
    fontFamily: "TyrosPro",
    fontWeight: 400,
    fontSize: "1.7rem",
    lineHeight: "2.3rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.3rem",
    },
  },
  status: {
    fontFamily: "SourceSansPro",
    color: theme.palette.primary.main,
    marginBottom: "-0.5rem",
    fontSize: "1.1rem",
  },
  textContainer: {
    position: "relative",
    boxSizing: "border-box",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "2px",
      backgroundColor: "#554B4B",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.primary.main,
      borderRadius: "4px",
      height: "10px",
      transform: "scale(0.3)",
    },
    height: "12.5rem",
    margin: "1rem 0px",
    [theme.breakpoints.down("sm")]: {
      height: "14rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "17.5rem",
    },
  },
  container: {
    position: "relative",
    background: "#292A2F",
    padding: "3rem 7rem",
    maxWidth: "40rem",
    margin: "2% auto 9rem auto",
    alignItems: "center",
    borderRadius: 15,
    border: "0.1px solid #196163",
    [theme.breakpoints.down("sm")]: {
      margin: "10% auto 9rem auto",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "25% 1rem 9rem 1rem",
      padding: "7rem 2rem",
    },
  },
  circularCompleted: {
    position: "absolute",
    height: "4rem",
  },
  circular: {
    "& .CircularProgressbar": {
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        width: "110%",
        textAlign: "center",
      },
    },
  },
}));