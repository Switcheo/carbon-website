import dropSwth from "@carbon-info/assets/animated/dropSWTH.json";
import floatSwth from "@carbon-info/assets/animated/floatSWTH.json";
import spinSwth from "@carbon-info/assets/animated/spinSWTH.json";
import CTAShinyButton from "@carbon-info/components/CTAShinyButton";
import CTALinkButton from "@carbon-info/components/CTALinkButton";
import FadeAndSlide from "@carbon-info/components/FadeAndSlide";
import { isWidth } from "@carbon-info/utils/environment";
import { StyleUtils } from "@carbon-info/utils/styles";
import { Box, Theme, Typography, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Lottie, { EventListener, Options } from "react-lottie";
import "react-multi-carousel/lib/styles.css";
import { Path } from "@carbon-info/constants";

const Secured: React.FC = () => {
	const classes = useStyles();
	const { ref, inView } = useInView({
		/* Optional options */
		threshold: 0.75,
		triggerOnce: true,
	});
	const widthSmDown = isWidth("sm");

	const genLottieData = (animation: any, loop: boolean, scaleMode?: string) => {
		return {
			loop: loop,
			autoplay: true,
			animationData: animation,
			rendererSettings: {
				preserveAspectRatio: "xMidYMid slice",
				scaleMode: scaleMode,
			},
		};
	};

	const [getSWTHIcon, setGetSWTHIcon] = useState<Options>();

	useEffect(() => {
		if (inView && !getSWTHIcon) {
			const DropSWTH = genLottieData(dropSwth, false);
			setGetSWTHIcon(DropSWTH);
		}
	}, [inView]);

	const events: EventListener[] = [
		{
			eventName: "complete",
			callback: () => setGetSWTHIcon(genLottieData(floatSwth, true)),
		},
	];

	return (
		<div ref={ref} id="secured">
			<Box className={classes.boxContainer}>
				<FadeAndSlide visible={inView} opacity={1}>
					<Box className={clsx(classes.secureContainer, { open: inView })}>
						<div className={classes.descriptionContainer}>
							<Typography
								variant="h2"
								color="textPrimary"
								style={{ marginBottom: "2.125rem" }}
							>
								Secured by SWTH
							</Typography>
							<Typography
								variant="body1"
								color="textSecondary"
								className={classes.description}
							>
								Using the Carbon Token -{" "}
								<span className="highlightedText">$SWTH</span>, anyone can
								secure the network while earning transaction fees and staking
								rewards, providing sustainable real yield to everyone.
							</Typography>
							<Box className={classes.ctaBtnGroupContainer}>
								<CTAShinyButton
									label="Buy $SWTH"
									href={Path.Footer.Buy}
									iconType="arrow"
								/>
								<CTALinkButton label="Start Staking" href={Path.Footer.Stake} />
							</Box>
						</div>
						<Box minWidth={400}>
							{getSWTHIcon && (
								<Lottie
									options={getSWTHIcon}
									width={widthSmDown ? 250 : 400}
									style={{ zIndex: 1 }}
									eventListeners={events}
								/>
							)}
							{widthSmDown && (
								<Lottie
									options={genLottieData(spinSwth, true, "0.25")}
									width={400}
									height={450}
									style={{ position: "absolute", zIndex: 0, top: -75 }}
								/>
							)}
						</Box>
						{!widthSmDown && (
							<Lottie
								options={genLottieData(spinSwth, true, "0.25")}
								width={650}
								height={650}
								style={{ position: "absolute", zIndex: 0, right: -100 }}
							/>
						)}
					</Box>
				</FadeAndSlide>
			</Box>
		</div>
	);
};

export default Secured;

const useStyles = makeStyles((theme: Theme) => ({
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
	boxContainer: {
		margin: "15rem auto",
		maxWidth: "1400px",
		position: "relative",
		zIndex: 1,
	},
	secureContainer: {
		position: "relative",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		margin: "0 auto",
		minHeight: "30rem",
		"&.open": {
			opacity: 1,
		},
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column-reverse",
		},
	},
	descriptionContainer: {
		maxWidth: "48.125rem",
		textAlign: "left",
		marginRight: "5rem",
		zIndex: 10,
		[theme.breakpoints.down("sm")]: {
			marginRight: 0,
			width: "100%",
			textAlign: "center",
		},
	},
	description: {
		fontWeight: 500,
		maxWidth: "35rem",
		marginBottom: "2.125rem",
		"& .highlightedText": {
			fontWeight: 700,
			color: theme.palette.primary.light,
		},
		[theme.breakpoints.down("sm")]: {
			margin: "2.5rem 0",
			width: "100%",
			maxWidth: "unset",
		},
	},
	actionButtons: {
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",
		position: "relative",
		zIndex: 10,
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
			justifyContent: "center",
		},
	},
	containedButton: {
		...theme.typography.h4,
		color: theme.palette.text.primary,
		textTransform: "none",
		padding: "0.5rem 1.5rem",
		marginRight: "2.125rem",
		borderRadius: "24px",
		background: StyleUtils.greenGradient,
		whiteSpace: "nowrap",
		transition: StyleUtils.hoverTransition("background"),
		"&:hover": {
			background: StyleUtils.activeGradient,
			boxShadow: "none",
		},
		[theme.breakpoints.down("sm")]: {
			marginRight: 0,
			marginBottom: "2rem",
		},
	},
	ctaButtonBox: {
		"&:hover $ctaText": {
			color: theme.palette.common.white,
			transition: "all 0.2s ease",
		},
		"&:hover $ctaIcon": {
			"& path": {
				fill: theme.palette.common.white,
			},
		},
	},
	ctaText: {
		...theme.typography.h4,
		color: theme.palette.primary.main,
	},
	ctaIcon: {
		"& path": {
			fill: theme.palette.primary.main,
		},
	},
}));
