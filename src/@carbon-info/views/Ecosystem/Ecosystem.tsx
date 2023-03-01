import { FadeAndSlide } from "@carbon-info/components";
import { Box, Button, Grid, Theme, Typography, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { AppsCarousel, FeatureGrid } from "./components";
import { BlockchainConfig, ValidatorConfig, allBlockchains, allFeatured, allValidators, allWallets } from "./ecosystemConfig";

const Ecosystem: React.FC = () => {
  const classes = useStyles();
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.35,
    triggerOnce: true,
  });

  const tabs = ["Featured dApps", "Blockchains", "Wallets", "Validators"];
  const filters = ["All", "IBC", "EVM", "Non-EVM"]; // TODO: Add Coming Soon filter
  const [value, setValue] = useState<string>(tabs[0]);
  const [blockchainFilter, setBlockchainFilter] = useState<string>(filters[0]);
  const contentRef = React.useRef<HTMLDivElement | null>(null);

  const handleChange = (newValue: any) => {
    setValue(newValue);
  };

  const handleBackgroundChange = (contentRef: React.MutableRefObject<HTMLDivElement | null>) => {
    if (contentRef) {
      if (contentRef?.current?.scrollTop === 0) {
        contentRef?.current?.setAttribute("style", "background: linear-gradient(0deg, rgba(18, 18, 18, 0) 30.26%, #121212 48.4%)");
      } else if ((contentRef?.current?.scrollTop ?? 0) + (contentRef?.current?.clientHeight ?? 0) === contentRef?.current?.scrollHeight) {
        contentRef?.current?.setAttribute("style", "background: linear-gradient(0deg, rgba(18, 18, 18, 0) 30.26%, #121212 48.4%)");
      } else {
        contentRef?.current?.setAttribute("style", "background: linear-gradient(0deg, rgba(18, 18, 18, 0) 30.26%, #121212 48.4%)");
      }
    }
  };

  if (contentRef?.current && contentRef?.current?.scrollHeight > contentRef?.current?.clientHeight) {
    contentRef?.current.addEventListener("load", () => handleBackgroundChange(contentRef));
    contentRef?.current.addEventListener("scroll", () => handleBackgroundChange(contentRef));
  }

  const filterButtons = (
    <Box className={classes.filters}>
      {filters.map((filter, index) => {
        return (
          <Box className={classes.filterBox} key={`${filter}-${index}`}>
            <Button className={clsx(classes.filterButton, { active: blockchainFilter === filter })} onClick={() => setBlockchainFilter(filter)} disableRipple>
              {filter} Chains
            </Button>
          </Box>
        );
      })}
    </Box>
  );

  const filteredBlockchains = React.useMemo(() => {
    let filtered: BlockchainConfig[] = [];
    switch (blockchainFilter) {
      case "IBC":
        filtered = allBlockchains.filter((blockchain) => {
          return blockchain.chain === "IBC";
        });
        break;
      case "EVM":
        filtered = allBlockchains.filter((blockchain) => {
          return blockchain.chain === "EVM";
        });
        break;
      case "Non-EVM":
        filtered = allBlockchains.filter((blockchain) => {
          return blockchain.chain === "Non-EVM";
        });
        break;
      case "All":
        filtered = allBlockchains;
        break;
      default:
        filtered = allBlockchains;
        break;
    }
    return filtered;
  }, [blockchainFilter]);

  const sortedValidators = React.useMemo(() => {
    return allValidators.sort((v1: ValidatorConfig, v2: ValidatorConfig) => {
      // sorted in descending order
      return v2.votingPower - v1.votingPower;
    });
  }, []);

  return (
    <div ref={ref} id="ecosystem">
      <Box className={classes.boxContainer}>
        <FadeAndSlide visible={inView}>
          <Grid container alignItems="center" justifyContent="space-between" style={{ marginBottom: "3.5rem" }}>
            <Grid item xs={12} md={4}>
              <Typography variant="h1" color="textPrimary" align="left">Explore our Ecosystem</Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <Typography variant="body1" color="textSecondary" align="left" style={{ maxWidth: "720px" }}>
                Carbon is powered by a large network of builders, validators and community partners. Explore the fastest growing  ecosystem pioneering a new world of finance.
              </Typography>
            </Grid>
          </Grid>
          <Box className={classes.tabsBox}>
            {
              tabs.map((tab) => (
                <Box key={tab} className={classes.tabWrapper}>
                  <Button
                    className={clsx(classes.tabItem, { active: tab === value })}
                    onClick={() => handleChange(tab)}
                    disableRipple
                    disableFocusRipple
                    disableTouchRipple
                    variant="text"
                  >
                    {tab}
                  </Button>
                  <Box className={clsx(classes.activeIndicator, { active: tab === value })} />
                </Box>
              ))}
          </Box>
          {value === "Featured dApps" && <AppsCarousel items={allFeatured} inView />}
          {value === "Blockchains" && filterButtons}
          <div className={classes.contentBox} ref={contentRef}>
            {value === "Blockchains" && (
              <FeatureGrid items={filteredBlockchains} inView />
            )}
            {value === "Wallets" && <FeatureGrid items={allWallets} inView />}
            {value === "Validators" && <FeatureGrid items={sortedValidators} inView />}
          </div>
        </FadeAndSlide >
      </Box>
    </div >
  );
};

export default Ecosystem;

const useStyles = makeStyles((theme: Theme) => ({
  boxContainer: {
    position: "relative",
    margin: "25vh auto 50vh",
    maxWidth: "1430px",
    [theme.breakpoints.down("sm")]: {
      margin: "10vh 0px",
    },
  },
  tabsBox: {
    display: "flex",
    position: "relative",
  },
  tabWrapper: {
    position: "relative",
    "&:hover > $activeIndicator": {
      background: "linear-gradient(270deg, #74E8E8 0%, #FF2C2C 100%)",
    },
    "&:not(:last-child)": {
      marginRight: "10rem",
      [theme.breakpoints.down("sm")]: {
        marginRight: "2.5rem",
      },
    },
  },
  tabItem: {
    ...theme.typography.body1,
    color: theme.palette.text.secondary,
    fontWeight: 700,
    borderBottom: "3px solid transparent",
    height: "100%",
    padding: "0.5rem 0",
    whiteSpace: "nowrap",
    "& .MuiButton-label": {
      textTransform: "none",
      display: "flex",
      alignItems: "center",
      height: "100%",
      padding: 0,
      minWidth: 0,
    },
    "&.active, &:hover": {
      backgroundColor: "transparent",
      color: theme.palette.text.primary,
    },
  },
  activeIndicator: {
    height: "3px",
    width: "100%",
    maxWidth: "120px",
    position: "absolute",
    bottom: 0,
    background: "transparent",
    borderRadius: "3px",
    "&.active": {
      background: "linear-gradient(270deg, #74E8E8 0%, #FF2C2C 100%)",
    },
  },
  contentBox: {
    maxHeight: "45rem",
    marginTop: "3.5rem",
    overflowY: "auto",
    position: "relative",
    "&::-webkit-scrollbar": {
      width: "12px",
      height: "12px",
    },
    "&::-webkit-scrollbar-corner": {
      backgroundColor: "transparent",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "transparent",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundClip: "padding-box",
      backgroundColor: "#182323",
      border: "3px solid",
      borderColor: "transparent",
      borderRadius: "14px",
    },
    "& *": {
      scrollbarColor: "transparent",
      scrollbarWidth: "thin",
    },
  },
  filters: {
    display: "flex",
    justifyContent: "flex-start",
    margin: "2.5rem 0",
    overflowX: "auto",
  },
  filterButton: {
    ...theme.typography.body1,
    fontWeight: 700,
    color: theme.palette.text.secondary,
    textTransform: "none",
    padding: theme.spacing(1, 3),
    border: `2px solid ${theme.palette.text.secondary}`,
    boxShadow: theme.shadows[2],
    borderRadius: "32px",
    marginRight: "2.5rem",
    whiteSpace: "nowrap",
    "&.active, &:hover": {
      color: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
      backgroundColor: "transparent",
    },
  },
  filterBox: {
    "&:not(:last-child)": {
      marginRight: "1.5rem",
    },
  },
}));