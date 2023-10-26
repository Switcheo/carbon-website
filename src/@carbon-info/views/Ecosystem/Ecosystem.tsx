import { CTAButton, FadeAndSlide } from "@carbon-info/components";
import { Path } from "@carbon-info/constants";
import { useContentful } from "@carbon-info/hooks";
import { StyleUtils } from "@carbon-info/utils/styles";
import { Box, Button, Grid, Theme, Typography, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { AppsCarousel, FeatureGrid } from "./components";
import { BlockchainConfig, ValidatorConfig, WalletConfig, DAppsConfig } from "./ecosystemConfig";

interface SubTextContent {
  description: string
  link: string
}

const Ecosystem: React.FC = () => {
  const classes = useStyles();
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.35,
    triggerOnce: true,
  });
  const { data } = useContentful({
    contentType: "carbonEcosystemEntry",
  });

  const [allBlockchains, setAllBlockchains] = React.useState<BlockchainConfig[]>([]);
  const [allWallets, setAllWallets] = React.useState<WalletConfig[]>([]);
  const [allValidators, setAllValidators] = React.useState<ValidatorConfig[]>([]);
  const [allDAppsEVM, setAllDAppsEVM] = React.useState<DAppsConfig[]>([]);
  const [allDAppsCore, setAllDAppsCore] = React.useState<DAppsConfig[]>([]);



  useEffect(() => {
    async function fetchEcosystemItems() {
      let blockchainResult: BlockchainConfig[] = [];
      let walletResult: WalletConfig[] = [];
      let validatorResult: ValidatorConfig[] = [];
      let dAppsEVMResult: DAppsConfig[] =[];
      let dAppsCoreResult: DAppsConfig[] =[];
      const content = await data as any;

      if (content && Array.isArray(content.items)) {
        content.items.forEach((o: any) => {
          const type = o.fields.type ?? [];
          const resultItem= {
            label: o.fields.label,
            logo: o.fields.logo.fields.file.url,
          }; 
          if (type.includes("blockchain")) {
            blockchainResult.push({
              ...resultItem,
              category: o.fields.category,
            });
          }
          if (type.includes("wallet")) {
            walletResult.push({
              ...resultItem,
            });
          }
          if (type.includes("validator")) {
            validatorResult.push({
              ...resultItem,
              link: o.fields.link,
              sortPriority: o.fields.sortPriority,
            });
          } 
          if (type.includes("dApp")) {
            const carbonItem= {
              ...resultItem,
                categoryLabel: o.fields.category,
                link: o.fields.link,
                background: o.fields.backgroundImage.fields.file.url,
                description: o.fields.description,
            }; 
            if (type.includes("carbon-evm")) {
              dAppsEVMResult.push(carbonItem);
            }
            if (type.includes("carbon-core")) {
              dAppsCoreResult.push(carbonItem);
            }

          }          
        });
      }
      setAllBlockchains(blockchainResult);
      setAllWallets(walletResult);
      setAllValidators(validatorResult);
      setAllDAppsEVM(dAppsEVMResult);
      setAllDAppsCore(dAppsCoreResult);
    }
    fetchEcosystemItems();
  }, [data]);





  const tabs = ["dApps", "Blockchains", "Wallets", "Validators"];
  const dAppsFilters = ["All", "Carbon Core", "Carbon EVM"];
  const blockchainFilters = ["All", "IBC", "EVM", "Non-EVM"]; // TODO: Add Coming Soon filter
  const [value, setValue] = useState<string>(tabs[0]);
  const [blockchainFilter, setBlockchainFilter] = useState<string>(blockchainFilters[0]);
  const [dAppsFilter, setDAppsFilter] = useState<string>(dAppsFilters[0]);


  const handleChange = (newValue: any) => {
    setValue(newValue);
  };

  const filteredDApps = React.useMemo(() => {
    let filtered: DAppsConfig[] = [];
    switch (dAppsFilter) {
      case "Carbon Core":
        filtered = allDAppsCore;
        break;
      case "Carbon EVM":
        filtered = allDAppsEVM;
        break;
      default:
        filtered = allDAppsCore.concat(allDAppsEVM);
        break;
    }
    return filtered;
  }, [allDAppsCore, allDAppsEVM, dAppsFilter]);

  const subTextContentMap: { [key: string]: { description: string; link: string } } = {
    "Carbon EVM": {
      description: "The EVM component of Carbon allows anyone to deploy EVM-based smart contracts written in Solidity, Vyper, etc. on Carbon. This component allows users to perform any action via both Cosmos and EVM formatted transactions, meaning that users and developers can use popular Ethereum wallets and clients (e.g. MetaMask, HardHat, etc.) to interact with Carbon without additional effort.",
      link: Path.Docs.CarbonEVM,
    },
    "Carbon Core": {
      description: "Carbon Core consists of various native modules written in native code (e.g. Golang) instead of a virtual machine. This implementation securely enables features in a scalable manner such as on-chain central-limit order books, lending and borrowing markets, and more.",
      link: Path.Docs.CarbonCore,
    },
  };

  const subTextContent: SubTextContent | null = subTextContentMap[dAppsFilter] ?? null;


  const filteredBlockchains = React.useMemo(() => {
    let filtered: BlockchainConfig[] = [];

    // All Chains -> show prominent chains (From ETH to Osmosis), then sort by alphabet
    const prominentChains = ["Ethereum", "BNB Smart Chain", "Arbitrum", "Neo", "Zilliqa", "Cosmos Hub", "Osmosis"];
    const chainIndexMap: { [key: string]: number } = {};
    for (let i = 0; i < prominentChains.length; i++) {
      chainIndexMap[prominentChains[i]] = i;
    }
    allBlockchains.sort((a, b) => {
      const nonProminentChainPos = prominentChains.length + 1; // for non prominent chains, to be placed after the prominent chains
      const resultsA = chainIndexMap[a.label] ?? nonProminentChainPos;
      const resultsB = chainIndexMap[b.label] ?? nonProminentChainPos;
      if (resultsA === resultsB) {
        return a.label.localeCompare(b.label); // sort by alphabet asc
      }
      return resultsA - resultsB; // show prominent chains as per prominentChains array
    });

    switch (blockchainFilter) {
      case "IBC":
        filtered = allBlockchains.filter((blockchain) => {
          return blockchain.category === "IBC Chains";
        });
        break;
      case "EVM":
        filtered = allBlockchains.filter((blockchain) => {
          return blockchain.category === "EVM Chains";
        });
        break;
      case "Non-EVM":
        filtered = allBlockchains.filter((blockchain) => {
          return blockchain.category === "Non-EVM Chains";
        });
        break;
      default:
        filtered = allBlockchains;
        break;
    }
    return filtered;
  }, [allBlockchains, blockchainFilter]);

  const sortedValidators = React.useMemo(() => {
    return allValidators.sort((v1: ValidatorConfig, v2: ValidatorConfig) => {
      // sorted in ascending order
      return v1.sortPriority - v2.sortPriority;
    });
  }, [allValidators]);

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
          {value === "dApps" && (
            <>
               <Box className={classes.filters}>
                  {dAppsFilters.map((filter, index) => {
                    return (
                      <Box className={classes.filterBox} key={`${filter}-${index}`}>
                        <Button className={clsx(classes.filterButton, { active: dAppsFilter === filter })} onClick={() => setDAppsFilter(filter)} disableRipple>
                          {filter}
                        </Button>
                      </Box>
                    );
                  })}
                </Box>
                {subTextContent && (
                  <>
                  <Typography variant="body1" color="textSecondary" align="left" style={{ maxWidth: "1024px", marginTop: "20px" }}>
                    {subTextContent.description}
                  </Typography>
                  <CTAButton
                    text="Learn More"
                    link={subTextContent.link}
                    textClassName={classes.ctaButtonText}
                    iconClassName={classes.ctaButtonIcon}
                  />
                </>

                )}
              <AppsCarousel items={filteredDApps} inView key={dAppsFilter}/>
            </>
          )}
          {value === "Blockchains" && (
            <>
              <Box className={classes.filters}>
                {blockchainFilters.map((filter, index) => {
                  return (
                    <Box className={classes.filterBox} key={`${filter}-${index}`}>
                      <Button className={clsx(classes.filterButton, { active: blockchainFilter === filter })} onClick={() => setBlockchainFilter(filter)} disableRipple>
                        {filter} Chains
                      </Button>
                    </Box>
                  );
                })}
              </Box>
              <div className={classes.contentBox}>
                <FeatureGrid items={filteredBlockchains} inView />
              </div>
            </>
          )}
          {value === "Wallets" && (
            <div className={classes.contentBox}>
              <FeatureGrid items={allWallets} inView />
            </div>
          )}
          {value === "Validators" && (
            <div className={classes.contentBox}>
              <FeatureGrid items={sortedValidators} inView />
            </div>
          )}
        </FadeAndSlide >
      </Box>
    </div >
  );
};

export default Ecosystem;

const useStyles = makeStyles((theme: Theme) => ({
  boxContainer: {
    position: "relative",
    margin: "0 auto 15rem",
    maxWidth: "1400px",
    [theme.breakpoints.down("sm")]: {
      margin: "15rem 0",
    },
  },
  tabsBox: {
    display: "flex",
    position: "relative",
    overflow: "auto",
  },
  tabWrapper: {
    position: "relative",
    "&:hover > $activeIndicator": {
      background: StyleUtils.activeIndicator,
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
      background: StyleUtils.activeIndicator,
    },
  },
  contentBox: {
    paddingTop: "3.5rem",
    paddingBottom: "3.5rem",
    position: "relative",
    // gradient scroll
    "--scrollbar-width": "0px",
    "--mask-height": "20%",
    "overflowY": "auto",
    "--mask-image-content": "linear-gradient(to bottom, transparent, #010103 var(--mask-height), #010103 calc(100% - var(--mask-height)), transparent)",
    "--mask-size-content": "calc(100% - var(--scrollbar-width)) 100%",
    "--mask-image-scrollbar": "linear-gradient(#010103, #010103)",
    "--mask-size-scrollbar": "var(--scrollbar-width) 100%",
    maskImage: "var(--mask-image-content), var(--mask-image-scrollbar)",
    maskSize: "var(--mask-size-content), var(--mask-size-scrollbar)",
    maskPosition: "0 0, 100% 0",
    maskRepeat: "no-repeat, no-repeat",
    "&.hidden": {
      display: "none",
    },
  },
  filters: {
    display: "flex",
    justifyContent: "flex-start",
    margin: "2.5rem 0 0",
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
    [theme.breakpoints.down("sm")]: {
      marginRight: "1rem",
    },
  },
  filterBox: {
    "&:not(:last-child)": {
      marginRight: "1.5rem",
      [theme.breakpoints.down("sm")]: {
        marginRight: 0,
      },
    },
  },
  ctaButtonBox: {
    "&:hover $ctaButtonText": {
      color: theme.palette.common.white,
      transition: "all 0.2s ease",
    },
    "&:hover $ctaButtonIcon": {
      "& path": {
        fill: theme.palette.common.white,
        transition: "all 0.2s ease",
      },
    },
  },
  ctaButtonText: {
    ...theme.typography.body2,
    fontWeight: 700,
    color: theme.palette.primary.main,
  },
  ctaButtonIcon: {
    height: "14px",
    width: "16px",
    "& path": {
      fill: theme.palette.primary.light,
    },
  },
}));