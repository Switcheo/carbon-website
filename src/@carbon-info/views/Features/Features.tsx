import carbonFeaturesBackground from "@carbon-info/assets/background/carbonFeaturesBackground.svg";
import connective from "@carbon-info/assets/icons/connective.svg";
import { CTAButton, FadeAndSlide } from "@carbon-info/components";
import { Box, makeStyles, Theme, Typography, useTheme } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { useInView } from "react-intersection-observer";

const Features: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
    triggerOnce: true,
  });
  return (
    // <div ref={ref} id="features" style={{ width: "100vw", backgroundImage: `url(${carbonFeaturesBackground})`, backgroundSize: "1800px", backgroundRepeat: "no-repeat" }}>
    <div ref={ref} id="features">
      <FadeAndSlide visible={inView}>
        <img src={carbonFeaturesBackground} className={classes.background} />
        <Box className={clsx(classes.container, { open: inView })} >
          <>
            <Typography variant="h1" color="textPrimary" align="left">
              Carbon is built
              <br />
              <span style={{ color: theme.palette.primary.light }}>for the future,</span>
              <br />
              today.
            </Typography>
          </>
          <Box className={classes.connectiveContainer}>
            <Box maxWidth="523px">
              <Typography variant="h2" color="textPrimary" align="left" style={{ marginBottom: "40px" }}>
                Connective
              </Typography>
              <Typography variant="body1" color="textSecondary" align="left" style={{ marginBottom: "40px" }}>
                <span style={{ color: theme.palette.text.primary }}>Powers interoperability </span> between
                multiple blockchains with on-chain liquidity through PolyNetwork and IBC.
              </Typography>
              <CTAButton
                text="Read Our Docs"
                link="https://guide.carbon.network"
                buttonClassName={classes.ctaButton}
                textClassName={classes.ctaButtonText}
                iconClassName={classes.ctaButtonIcon}
              />
            </Box>
            <img src={connective} />
          </Box>
        </Box>
      </FadeAndSlide >
    </div >
  );
};

export default Features;

const useStyles = makeStyles((theme: Theme) => ({
  background: {
    width: "1796px",
    height: "1283px",
    position: "absolute",
    top: -150,
    left: -150,
  },
  container: {
    width: "100vw",
    display: "flex",
    flexGrow: 1,
    paddingTop: "20rem",
    paddingBottom: "20rem",
    justifyContent: "center",
    opacity: 0,
    transition: "all 2s ease",
    "&.open": {
      opacity: 1,
    },
  },
  connectiveContainer: {
    display: "flex",
    alignItems: "start",
    justifyContent: "flex-end",
    marginLeft: "7.5rem",
    borderBottom: `2px solid ${theme.palette.divider}`,
  },
  ctaButton: {
    paddingBottom: "6.25rem",
    borderBottom: "2px solid #0ADCB6",
  },
  ctaButtonText: {
    ...theme.typography.body2,
    fontWeight: 700,
    color: theme.palette.primary.main,
  },
  ctaButtonIcon: {
    width: "20px",
    height: "16px",
    "& path": {
      fill: theme.palette.primary.light,
    },
  },
}));