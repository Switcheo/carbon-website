import { FadeAndSlide } from "@carbon-info/components";
import { useContentful } from "@carbon-info/hooks";
import { isWidth } from "@carbon-info/utils/environment";
import { StyleUtils } from "@carbon-info/utils/styles";
import { Divider, Grid, makeStyles, Paper, Theme, Typography } from "@material-ui/core";
import clsx from "clsx";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { AnimateKeyframes } from "react-simple-animate";
import { RollingNum } from "./component";
import cosmosSDK from "@carbon-info/assets/icons/cosmosSDK.svg";

export interface DataInfo {
  value: string,
  description: string,
  toCountUp: boolean,
}

const Data: React.FC = () => {
  const classes = useStyles();
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
    triggerOnce: true,
  });

  const widthXs = isWidth("xs");

  const { data } = useContentful({
    contentType: "carbonWebsiteInfo",
  });

  const [tableInfo, setTableInfo] = React.useState<DataInfo[]>([]);
  useEffect(() => {
    const results: DataInfo[] = [];
    if (!data && !inView) return;
    async function fetchDataItems() {
      const content = await data as any;

      if (content && Array.isArray(content.items)) {
        content.items.forEach((o: any) => {
          let data: DataInfo = {
            value: o.fields.value,
            description: o.fields.key,
            toCountUp: o.fields.key === "On-Chain_Transactions" || o.fields.key === "Total_Value_Locked" || o.fields.key === "Total_SWTH_Staked",
          };
          results.push(data);
        });
      }
      setTableInfo(results);
    }
    fetchDataItems();
  }, [data]);

  return (
    <div ref={ref} id="data" className={classes.container}>
      <FadeAndSlide visible={inView}>
<<<<<<< HEAD
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "8.5rem" }}>
          <Typography variant="h2" color="textPrimary" className={clsx(classes.headerText, classes.smallerText, { open: inView })}>
            Powered by
          </Typography>
          <img src={cosmosSDK} alt="Cosmos SDK" className={classes.cosmosSDKLogo} />
          <Typography variant="h2" color="textPrimary" className={clsx(classes.headerText, classes.cosmosSDK, classes.smallerText, { open: inView })}>
            Cosmos SDK
          </Typography>
        </div>
=======
        {/* <Typography variant="h2" style={{ color: "red", fontSize: "1.8rem", marginBottom: "2rem" }} className={clsx(classes.headerText, { open: inView })}>Powered by Cosmos-SDK</Typography> */}
>>>>>>> master
        <Typography variant="h2" color="textPrimary" className={clsx(classes.headerText, { open: inView })}>
          Carbon allows anyone to bootstrap
          <br />
          open financial markets for
          <br />
          any asset type on any blockchain.
        </Typography>
      </FadeAndSlide>
      <FadeAndSlide visible={inView} className={classes.dataWrapper}>
        <AnimateKeyframes
          play={inView}
          iterationCount={1}
          keyframes={["transform: scale(0)", "transform: scale(1)"]}
          duration={0.75}
        >
          <Grid container item xs={8} sm={12} spacing={0} justifyContent="center" className={clsx(classes.dataTable, { open: inView })}>
            {tableInfo.map((item: DataInfo) => (
              <Grid item xs={12} sm={4} xl={2} key={item.description}>
                <Paper className={classes.dataBox} elevation={0}>
                  {item.toCountUp ? <RollingNum item={item} /> : <Typography variant="h3" color="textPrimary" align="center">{item.value}</Typography>}
                  <Typography variant="body2" color="textSecondary" align="center">{item.description.replaceAll("_", " ")}</Typography>
                </Paper>
                {widthXs && <Divider className={classes.mobileDivider} />}
              </Grid>
            ))}
          </Grid>
        </AnimateKeyframes>
      </FadeAndSlide>
    </div >
  );
};

export default Data;

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginTop: "10rem",
    paddingBottom: "5rem",
    zIndex: 5,
  },
  headerText: {
    maxWidth: "57.125rem",
    textAlign: "center",
    opacity: 0,
    transition: "all 2s ease",
    "&.open": {
      opacity: 1,
    },
    [theme.breakpoints.down("sm")]: {
      ...theme.typography.h3,
    },
  },
  dataWrapper: {
    width: "100%",
    maxWidth: "1100px",
    [theme.breakpoints.up("xl")]: {
      maxWidth: "1900px",
    },
  },
  dataTable: {
    marginTop: "10rem",
    background: StyleUtils.tableBackgroundGradient,
    borderWidth: "0px 4px",
    borderStyle: "solid",
    borderColor: theme.palette.primary.main,
    boxShadow: theme.shadows[3],
    borderRadius: "10px",
    opacity: 0,
    transition: "all 2s ease",
    animation: "expandTable .25s",
    "&.open": {
      opacity: 1,
    },
    [theme.breakpoints.only("xl")]: {
      "& > div:not(:first-child)": {
        "& > div": {
          borderLeft: `2px solid ${theme.palette.primary.dark}`,
        },
      },
    },
    [theme.breakpoints.between("sm", "lg")]: {
      width: "100%",
      "& > div:not(:nth-child(3n+1))": {
        "& > div": {
          borderLeft: `2px solid ${theme.palette.primary.dark}`,
        },
      },
    },
    [theme.breakpoints.only("xs")]: {
      margin: "10rem auto 0",
      "& > div:last-child > hr": {
        display: "none",
      },
    },
  },
  dataBox: {
    margin: theme.spacing(4, 0),
    borderRadius: 0,
    backgroundColor: "transparent",
    [theme.breakpoints.only("xs")]: {
      margin: theme.spacing(2, 0),
    },
  },
  mobileDivider: {
    width: "20px",
    height: "2px",
    backgroundColor: theme.palette.background.divider,
    boxShadow: theme.shadows[4],
    borderRadius: "4px",
    margin: "auto",
  },
  cosmosSDK: {
    background: "linear-gradient(180deg, #469590 0%, #31D8D6 100%)",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text",
  },
  cosmosSDKLogo: {
    margin: theme.spacing(0, 1.5, 0),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(-1, 1, 0),
      transform: "scale(0.75)",
    },
  },
  smallerText: {
    [theme.breakpoints.down(380)]: {
      fontSize: "1.45rem",
    },
  },
}));
