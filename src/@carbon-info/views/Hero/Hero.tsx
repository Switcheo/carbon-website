import {
	CosmosLogo,
	DefianceCapitalLogo,
	NGCLogo,
	IOSGLogo,
} from "@carbon-info/assets";
import heroBackgroundAnimation from "@carbon-info/assets/animated/heroBackgroundAnimation.json";
import { FadeAndSlide } from "@carbon-info/components";
import { isWidth } from "@carbon-info/utils/environment";
import { Box, Grid, Theme, Typography, makeStyles } from "@material-ui/core";
import "animate.css";
import clsx from "clsx";
import React from "react";
import { useInView } from "react-intersection-observer";
import Lottie from "react-lottie";
import CTAShinyButton from "@carbon-info/components/CTAShinyButton";
import CTALinkButton from "@carbon-info/components/CTALinkButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Path } from "@carbon-info/constants";

const AltCarbonBanner: React.FC = () => {
	const classes = useStyles();

	const altCarbonRef = React.useRef<HTMLDivElement>(null);

	const goToAltCarbon = () => {
		document.getElementById("bancor")?.scrollIntoView({
			behavior: "smooth",
		});
	};
	return (
		<div className={classes.altCarbonContainer} ref={altCarbonRef}>
			<Typography
				variant="body2"
				className={classes.altCarbon}
				onClick={() => goToAltCarbon()}
			>
				<strong>
					Looking for Carbon DeFi by{" "}
					<span className={classes.bancor}>Bancor</span>?
				</strong>
				<ExpandMoreIcon />
			</Typography>
		</div>
	);
};

const PartnershipContainer: React.FC = () => {
	const classes = useStyles();
	const isMobile = isWidth("xs");

	return (
		<Box className={classes.partnershipContainer}>
			<Typography color="textSecondary">
				Partnered with and backed by the best.
			</Typography>
			{/* Container for Partners logo */}
			<Grid container className={classes.partnershipLogoContainer} spacing={2}>
				<Grid item xs={6} md={3}>
					{/* Cosmos */}
					<CosmosLogo className={classes.partnerLogo} />
				</Grid>
				<Grid item xs={6} md={3}>
					{/* Defiance Capital */}
					<DefianceCapitalLogo className={classes.partnerLogo} />
				</Grid>
				<Grid item xs={6} md={3}>
					{/* NGC */}
					<NGCLogo className={classes.partnerLogo} />
				</Grid>
				<Grid item xs={6} md={3}>
					{/* IOSG */}
					<img src={IOSGLogo} alt="IOSG Logo" className={classes.partnerLogo} />
				</Grid>
				{!isMobile && <AltCarbonBanner />}
			</Grid>
		</Box>
	);
};

const Hero: React.FC = () => {
	const classes = useStyles();
	const { ref, inView } = useInView({
		/* Optional options */
		threshold: 0.4,
		triggerOnce: true,
	});

	const isMobile = isWidth("xs");

	const AniStartOptions = {
		loop: true,
		autoplay: true,
		animationData: heroBackgroundAnimation,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	const goToEcosystem = () => {
		document.getElementById("ecosystem")?.scrollIntoView({
			behavior: "smooth",
		});
	};

	return (
		<div ref={ref} id="home">
			<Grid container className={classes.container}>
				{/* Hero Titles and Description */}
				<Grid
					container
					item
					xs={12}
					sm={6}
					className={classes.heroTextContainer}
				>
					{/* <div className={classes.headerContainer}> */}
					<FadeAndSlide visible={inView} transform={[0, -20]}>
						<Typography
							variant="body1"
							color="textPrimary"
							className={classes.bodyTypography}
						>
							MEET CARBON
						</Typography>
					</FadeAndSlide>
					<Typography
						color="textPrimary"
						variant="h1"
						className={clsx(
							classes.mainTitle,
							"animate__animated animate__slideInUp",
							{ open: inView },
						)}
					>
						The Blockchain Tailored
						<br />
						for{" "}
						<span className={clsx(classes.highlightedText, { open: inView })}>
							DeFi and Trading
						</span>
					</Typography>
					<FadeAndSlide visible={inView}>
						<Typography
							color="textSecondary"
							variant="body1"
							className={clsx(
								classes.subtitle,
								"animate__animated animate__slideInUp",
							)}
						>
							Carbon is a Layer 1 chain that offers native DeFi modules for
							building unparalleled trading experiences.
						</Typography>
						<Box className={classes.ctaGroupContainer}>
							<Box className={classes.ctaBtnGroupContainer}>
								<CTAShinyButton onClick={goToEcosystem} label="Explore" />
								<CTALinkButton href={Path.Header.Build} label="Learn More" />
							</Box>
							<PartnershipContainer />
						</Box>
					</FadeAndSlide>
					{/* </div> */}
				</Grid>

				{/* Hero Graphic */}
				<Grid
					container
					item
					xs={12}
					sm={6}
					className={classes.heroGraphicContainer}
				>
					<Lottie
						options={AniStartOptions}
						width={isMobile ? "100%" : 1480}
						height={isMobile ? 425 : "100%"}
					/>
				</Grid>
			</Grid>
		</div>
	);
};

export default Hero;

const useStyles = makeStyles((theme: Theme) => ({
	partnershipContainer: {
		marginTop: "4rem",
	},
	partnershipLogoContainer: {
		opacity: 0.8,
		maxHeight: "4rem",
		alignItems: "center",
		marginTop: "20px",
		display: "flex",
		flexWrap: "nowrap",
		gap: "2rem",
		justifyContent: "space-between",
		// style for all children
		"& > *": {
			justifyContent: " center",
		},
		[theme.breakpoints.down("sm")]: {
			flexWrap: "wrap",
			gap: "0",
		},
	},
	partnerLogo: {
		maxWidth: "100%",
		height: "auto",
		[theme.breakpoints.down("sm")]: {
			maxWidth: "8rem",
		},
	},
	ctaGroupContainer: {
		marginTop: "56px",
		display: "flex",
		flexDirection: "column",
		fontSize: "1rem",
		[theme.breakpoints.down("sm")]: {
			marginTop: "2rem",
		},
	},
	ctaBtnGroupContainer: {
		display: "flex",
		flexDirection: "row",
		[theme.breakpoints.down("sm")]: {
			textAlign: "center",
			flexDirection: "column",
			alignItems: "center",
			width: "100%",
		},
	},
	heroGraphicContainer: {
		[theme.breakpoints.down("sm")]: {
			zIndex: 0,
			opacity: 0.6,
			position: "absolute",
			top: "0rem",
		},
	},
	heroTextContainer: {
		textAlign: "left",
		flexDirection: "column",
		zIndex: 1,
		[theme.breakpoints.down("sm")]: {
			textAlign: "center",
			alignItems: "center",
		},
	},
	container: {
		justifyContent: "center",
		alignItems: "center",
		position: "relative",
		marginTop: "-2rem",
		[theme.breakpoints.down("sm")]: {
			marginLeft: "-24px",
			marginTop: "-24px",
			width: "calc(100% + 48px)",
		},
	},
	headerContainer: {
		zIndex: 5,
		marginTop: "12rem",
		position: "absolute",
		top: 0,
		[theme.breakpoints.only("xs")]: {
			marginTop: "8rem",
		},
	},
	mainTitle: {
		opacity: 0,
		transition: "all 2s ease",
		marginTop: "20px",
		"&.open": {
			opacity: 1,
		},
		[theme.breakpoints.down(1600)]: {
			fontSize: "2.75rem",
			lineHeight: "3.85rem",
		},
		[theme.breakpoints.down(1280)]: {
			fontSize: "3.25rem",
			lineHeight: "4.65rem",
		},
		[theme.breakpoints.down("sm")]: {
			...theme.typography.h3,
		},
	},
	subtitle: {
		marginTop: "24px",
		transition: "all 2s ease",
		maxWidth: "40rem",
		[theme.breakpoints.down("sm")]: {
			marginTop: "22rem",
		},
	},
	highlightedText: {
		color: theme.palette.primary.light,
	},
	scrollContainer: {
		opacity: 0,
		top: "calc(75vh - 30px)",
		position: "absolute",
		zIndex: 10,
		cursor: "pointer",
		"&.open": {
			opacity: 1,
		},
		[theme.breakpoints.down("xs")]: {
			top: "calc(70vh - 30px)",
		},
	},
	scrollIcon: {
		"&.bounce": {
			animation: "bounce 2s ease infinite",
		},
		[theme.breakpoints.down("md")]: {
			height: "2.5rem",
		},
	},
	scrollText: {
		marginTop: "1rem",
		fontWeight: 600,
		color: theme.palette.text.hint,
	},
	altCarbonContainer: {
		position: "absolute",
		left: "calc(40vw)",
		width: "100%",
		display: "flex",
		justifyContent: "flex-end",
		cursor: "pointer",
		[theme.breakpoints.down("sm")]: {
			marginRight: theme.spacing(3),
		},
	},
	altCarbon: {
		display: "flex",
		gap: "8px",
		border: theme.palette.text.secondary,
		background: theme.palette.background.default,
		borderWidth: "1px",
		borderStyle: "solid",
		color: theme.palette.text.primary,
		borderRadius: "16px",
		padding: theme.spacing(1.5, 2.5),
		boxShadow:
			"33px 33px 75px -10px #000000BF, -33px -33px 75px -10px #00000054",
		"&:hover": {
			color: theme.palette.primary.main,
		},
	},
	bodyTypography: {
		fontWeight: 400,
	},
	bancor: {
		color: theme.palette.primary.main,
		fontWeight: 700,
	},
}));
