import {
	ArrowIcon,
	CosmosSVGLogo,
	DefianceCapitalLogo,
	NGCSvgLogo,
} from "@carbon-info/assets";
import heroBackgroundAnimation from "@carbon-info/assets/animated/heroBackgroundAnimation.json";
import { FadeAndSlide } from "@carbon-info/components";
import { isWidth } from "@carbon-info/utils/environment";
import {
	Box,
	Grid,
	Link,
	Theme,
	Typography,
	makeStyles,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "animate.css";
import clsx from "clsx";
import React from "react";
import { useInView } from "react-intersection-observer";
import Lottie from "react-lottie";
import { default as IOSGLogo } from "@carbon-info/assets/logos/IOSG_white.png";

const CtaButton: React.FC = () => {
	const goToEcosystem = () => {
		document.getElementById("ecosystem")?.scrollIntoView({
			behavior: "smooth",
		});
	};

	const classes = useStyles();
	return (
		<Box
			className={classes.ctaButton}
			onClick={() => {
				goToEcosystem();
			}}
		>
			<Box className={classes.ctaButtonInner}>
				<Typography variant="h4" className={classes.ctaButtonText}>
					Explore
				</Typography>
				<ExpandMoreIcon />
			</Box>
		</Box>
	);
};

const CtaLinkButton: React.FC = () => {
	const classes = useStyles();
	return (
		<Link
			href={"https://docs.carbon.network/"}
			underline="none"
			target={"_blank"}
			className={classes.ctaLinkButton}
		>
			Learn More
			<ArrowIcon className={classes.ctaLinkIcon} />
		</Link>
	);
};

const PartnershipBanner: React.FC = () => {
	const classes = useStyles();
	return (
		<Box className={classes.partnershipBanner}>
			<Typography color="textSecondary">
				Partnered with and backed by the best.
			</Typography>
			{/* Container for Partners logo */}
			<Box
				display="flex"
				justifyContent="space-between"
				className={classes.partnershipLogoContainer}
			>
				{/* Cosmos */}
				<CosmosSVGLogo className={classes.partnerLogo} />
				{/* Defiance Capital */}
				<DefianceCapitalLogo className={classes.partnerLogo} />
				{/* NGC */}
				<NGCSvgLogo className={classes.partnerLogo} />
				{/* IOSG */}
				<img src={IOSGLogo} alt="IOSG Logo" className={classes.partnerLogo} />
			</Box>
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

	const altCarbonRef = React.useRef<HTMLDivElement>(null);

	const goToAltCarbon = () => {
		window.scrollTo({
			left: 0,
			top:
				document.documentElement.getBoundingClientRect().height ??
				document.body.scrollHeight,
			behavior: "smooth",
		});
	};

	return (
		<div ref={ref} id="home">
			<Grid container className={classes.container}>
				{/* Hero Titles and Description */}
				<Grid container item xs={6} className={classes.heroTextContainer}>
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
							<Box display="flex" flexDirection="row">
								<CtaButton />
								<CtaLinkButton />
							</Box>
							<PartnershipBanner />
						</Box>
					</FadeAndSlide>
					{/* </div> */}
				</Grid>

				{/* Hero Graphic */}
				<Grid container item xs={6}>
					<Lottie
						options={AniStartOptions}
						width={isMobile ? "100%" : 1480}
						height={isMobile ? 650 : "100%"}
					/>
					<div className={classes.altCarbonContainer} ref={altCarbonRef}>
						<Typography
							variant="body2"
							className={classes.altCarbon}
							onClick={() => goToAltCarbon()}
						>
							Looking for Carbon DeFi by{" "}
							<span className={classes.bancor}>Bancor</span>?
						</Typography>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default Hero;

const useStyles = makeStyles((theme: Theme) => ({
	partnershipBanner: {
		marginTop: "4rem",
	},
	partnershipLogoContainer: {
		opacity: 0.8,
		maxHeight: "4rem",
		alignItems: "center",
		marginTop: "20px",
	},
	partnerLogo: {
		maxHeight: "100%",
		maxWidth: "8rem",
		height: "auto",
	},
	ctaButton: {
		position: "relative", // Needed for positioning the pseudo-element
		display: "flex",
		justifyContent: "flex-start",
		color: "white",
		marginRight: "2.5rem",
		borderRadius: 12,
		background:
			"radial-gradient(63.65% 55% at 50.51% 100%, rgba(10, 220, 182, 0.25) 0%, rgba(10, 220, 182, 0.06) 51.54%, rgba(10, 220, 182, 0) 100%), #142C2C",
		overflow: "hidden",
		cursor: "pointer",
		zIndex: 1,
		"&::before": {
			// Pseudo-element for the hover effect
			content: "''",
			position: "absolute",
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			background:
				"radial-gradient(81.4% 70.34% at 50.51% 105.92%, rgba(15, 250, 207, 0.50) 0%, rgba(12, 236, 196, 0.13) 56.25%, rgba(10, 220, 182, 0) 100%), #142C2C",
			zIndex: -1,
			transition: "opacity 0.2s ease-in-out",
			opacity: 0,
		},

		"&:hover": {
			cursor: "pointer",
			"&::before": {
				opacity: 1,
			},
			boxShadow: "0px 0px 20px 0px rgba(116, 232, 232, 0.20)",
		},
	},
	ctaButtonInner: {
		display: "flex",
		padding: "1rem 2rem",
		alignItems: "center",
	},
	ctaButtonText: {
		marginRight: ".75rem",
		fontSize: "1rem",
	},
	ctaLinkButton: {
		paddingTop: "1rem",
		paddingBottom: "1rem",
		fontSize: "1rem",
		display: "flex",
		alignItems: "center",
		transition: "all 0.2s ease-in-out",
		color: theme.palette.primary.main,
		"&:hover": {
			color: theme.palette.text.primary,
			"& $ctaLinkIcon path": {
				fill: theme.palette.text.primary,
			},
		},
	},
	ctaLinkIcon: {
		marginLeft: ".5rem",
		width: "1rem",
		height: "1rem",
		"& path": {
			transition: "all 0.2s ease-in-out",
			fill: theme.palette.primary.main,
		},
	},
	ctaGroupContainer: {
		marginTop: "56px",
		display: "flex",
		flexDirection: "column",
		fontSize: "1rem",
	},
	heroTextContainer: {
		textAlign: "left",
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
		// top: "calc(80vh - 30px)",
		// position: "absolute",
		width: "100%",
		display: "flex",
		justifyContent: "flex-end",
		cursor: "pointer",
		[theme.breakpoints.down("sm")]: {
			marginRight: theme.spacing(3),
		},
	},
	altCarbon: {
		border: theme.palette.text.secondary,
		background: theme.palette.background.default,
		borderWidth: "1px",
		borderStyle: "solid",
		color: theme.palette.text.secondary,
		borderRadius: "12px",
		padding: theme.spacing(0.75, 1.25, 0.75, 1.25),
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
