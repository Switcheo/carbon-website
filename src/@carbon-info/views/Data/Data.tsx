import { FadeAndSlide } from "@carbon-info/components";
import { Box, makeStyles, Table, TableBody, TableCell, TableRow, Theme, Typography } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { useInView } from "react-intersection-observer";

interface DataInfo {
  value: string,
  description: string,
}

const Data: React.FC = () => {
  const classes = useStyles();
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
    triggerOnce: true,
  });

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
        <Table className={clsx(classes.dataTable, { open: inView })}>
          <TableBody>
            <TableRow>
              {tableInfo.slice(0, 3).map((item: DataInfo, index) => (
                <TableCell className={classes.tableCell} key={item.description.replace(" ", "-")}>
                  <Box className={index === 0 ? "" : classes.dataBox} >
                    <Typography variant="h3" color="textPrimary" align="center">{item.value}</Typography>
                    <Typography variant="body2" color="textSecondary" align="center">{item.description}</Typography>
                  </Box>
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              {tableInfo.slice(3, 6).map((item: DataInfo, index) => (
                <TableCell className={classes.tableCell} key={item.description.replace(" ", "-")}>
                  <Box className={index === 0 ? "" : classes.dataBox}>
                    <Typography variant="h3" color="textPrimary" align="center">{item.value}</Typography>
                    <Typography variant="body2" color="textSecondary" align="center">{item.description}</Typography>
                  </Box>
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
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
    marginTop: "31.25rem",
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
    width: "1113px",
    height: "272px",
    marginTop: "10rem",
    background: "rgba(24, 35, 35, 0.8)",
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
  },
  tableCell: {
    border: "none",
  },
  dataBox: {
    borderLeft: `2px solid ${theme.palette.primary.dark}`,
  },
}));