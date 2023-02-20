import { FadeAndSlide } from "@carbon-info/components";
import { Divider, Grid, makeStyles, Paper, Theme, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { useInView } from "react-intersection-observer";

interface DataInfo {
  value: string,
  description: string,
}

const Data: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
    triggerOnce: true,
  });

  const widthXs = useMediaQuery(theme.breakpoints.only("xs"));

  const tableInfo: DataInfo[] = [{
    value: "157,000,000+",
    description: "On-Chain Transactions",
  }, {
    value: "$16,599,873",
    description: "Total Value Locked",
  }, {
    value: "1,231,184,282",
    description: "Total SWTH Staked",
  }, {
    value: "<$0.01",
    description: "Gas Fees",
  }, {
    value: "10,000",
    description: "Transactions Per Second",
  }, {
    value: "1-2 s",
    description: "Block Time",
  }];

  return (
    <div ref={ref} id="data" className={classes.container}>
      <FadeAndSlide visible={inView}>
        <Typography variant="h2" color="textPrimary" className={clsx(classes.headerText, { open: inView })}>
          Carbon allows anyone to bootstrap
          <br />
          open financial markets for
          <br />
          any asset type on any blockchain.
        </Typography>
      </FadeAndSlide>
      <FadeAndSlide visible={inView}>
        <Grid container item xs={8} sm={12} spacing={0} justifyContent="center" className={clsx(classes.dataTable, { open: inView })}>
          {tableInfo.map((item: DataInfo) => (
            <Grid item xs={12} sm={4} xl={2} key={item.description.replace(" ", "-")}>
              <Paper className={classes.dataBox} elevation={0}>
                <Typography variant="h3" color="textPrimary" align="center">{item.value}</Typography>
                <Typography variant="body2" color="textSecondary" align="center">{item.description}</Typography>
              </Paper>
              {widthXs && <Divider className={classes.mobileDivider} />}
            </Grid>
          ))}
        </Grid>
      </FadeAndSlide>
    </div >
  );
};

export default Data;

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginTop: "10rem",
    paddingBottom: "10rem",
  },
  headerText: {
    maxWidth: "57.125rem",
    textAlign: "center",
    opacity: 0,
    transition: "all 2s ease",
    "&.open": {
      opacity: 1,
    },
  },
  dataTable: {
    marginTop: "10rem",
    background: "linear-gradient(0deg, rgba(24, 35, 35, 0.8), rgba(24, 35, 35, 0.8))",
    borderWidth: "0px 4px",
    borderStyle: "solid",
    borderColor: "#74E8E8",
    boxShadow: "0px 0px 444.024px #0F616B, 0px 0px 148.008px #0F616B, 0px 0px 74.004px #0F616B, 0px 0px 21.144px #0F616B",
    borderRadius: "10px",
    opacity: 0,
    transition: "all 2s ease",
    "&.open": {
      opacity: 1,
    },
    [theme.breakpoints.only("xl")]: {
      width: "1823px",
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
    backgroundColor: "rgba(116, 232, 232, 0.75)",
    boxShadow: "0px 0px 8px rgba(0, 242, 199, 0.33)",
    borderRadius: "4px",
    margin: "auto",
  },
}));