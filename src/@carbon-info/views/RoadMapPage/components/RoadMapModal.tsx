import { DocsIcon, GitHubIcon, MenuIconClose } from "@carbon-info/assets";
import { RoadMapButton } from "@carbon-info/views/RoadMap/components";
import { Divider, Grid, Hidden, Link, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

interface Props {
  content: {
    title: string;
    description: string;
    status: string;
    progress: number;
    link: string;
    longDescription?: string;
  };
  incrementTab: () => void;
  decrementTab: () => void;
  mainTitle: string;
  closeModal: () => void;
}

const RoadMapModal: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const { content, mainTitle, incrementTab, decrementTab, closeModal } = props;
  const { title, status, progress, link, longDescription } = content;
  return (
    <div className={classes.container}>
      <MenuIconClose style={{ position: "absolute", top: 20, right: 20 }} onClick={closeModal} />
      <Grid container alignItems="center">
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
        <Grid item xs={10} style={{ padding: "1em", paddingLeft: "1.5rem" }}>
          <Typography color="textPrimary" variant="body1" className={classes.status}>
            {`${status} > ${mainTitle}`}
          </Typography>
          <Typography color="textPrimary" variant="h3" className={classes.title}>
            {title}
          </Typography>
        </Grid>
      </Grid>
      <Divider style={{ width: "80%", backgroundColor: "#42444B" }} className={classes.divider} />
      <div className={classes.textContainer}>
        <Typography color="textPrimary" variant="subtitle1" className={classes.divTitle} paragraph>
          What is this about? Why is it important?
        </Typography>
        <Typography color="textPrimary" variant="body2" className={classes.description}>
          {longDescription}
        </Typography>
      </div>
      <Divider style={{ backgroundColor: "#212125" }} className={classes.divider} />
      <Hidden smDown>
        <div style={{ display: "flex", flexDirection: "row", margin: "2rem 0px", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
            <Link href={link} underline="none" target="_blank">
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 7 }}>
                <DocsIcon style={{ height: "2rem" }} />
                <Typography color="textPrimary" variant="body2">
                  Docs
              </Typography>
              </div>
            </Link>
            <Link href={link} underline="none" target="_blank">
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 7 }}>
                <GitHubIcon style={{ height: "2rem" }} />
                <Typography color="textPrimary" variant="body2">
                  GitHub
              </Typography>
              </div>
            </Link>
          </div>
          <div style={{ marginLeft: "auto", display: "flex", flexDirection: "row", gap: 20 }}>
            <RoadMapButton direction="left" size={"small"} callback={decrementTab} />
            <RoadMapButton direction="right" size={"small"} callback={incrementTab} />
          </div>
        </div>
      </Hidden>
      <Hidden mdUp>
        <div style={{ display: "flex", flexDirection: "column", margin: "2rem 0px", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
            <Link href={link} underline="none" target="_blank">
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 7 }}>
                <DocsIcon style={{ height: "3rem" }} />
                <Typography color="textPrimary" variant="body2">
                  Docs
              </Typography>
              </div>
            </Link>
            <Link href={link} underline="none" target="_blank">
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 7 }}>
                <GitHubIcon style={{ height: "3rem" }} />
                <Typography color="textPrimary" variant="body2">
                  GitHub
              </Typography>
              </div>
            </Link>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: 20, marginTop: "3rem" }}>
            <span style={{ marginRight: "5rem" }}>
              <RoadMapButton direction="left" size={"small"} callback={decrementTab} />
            </span>
            <span style={{ marginLeft: "5rem" }}>
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
  divider: {
    margin: "2rem 0px",
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
      lineHeight: "28px",
      width: "100%",
    },
  },
  description: {
    color: "#8C909D",
    fontSize: "1.1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
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
    color: "#74E8E8",
    marginBottom: "-0.5rem",
    fontSize: "1.1rem",
  },
  textContainer: {
    margin: "1rem 0px",
  },
  container: {
    position: "relative",
    background: "#292A2F",
    padding: "3rem 7rem",
    maxWidth: "40rem",
    margin: "3rem auto 9rem auto",
    alignItems: "center",
    borderRadius: 15,
    border: "0.1px solid #196163",
    [theme.breakpoints.down("sm")]: {
      margin: "5rem auto 9rem auto",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "5rem 3rem 9rem 3rem",
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