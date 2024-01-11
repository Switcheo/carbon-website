import { ArrowIcon } from "@carbon-info/assets";
import { Box, Link, makeStyles, Theme, Typography } from "@material-ui/core";
import clsx from "clsx";
import React from "react";

interface bannerProps {
	icon?: React.ReactNode;
	text: string;
	highlightedText: string;
	link: string;
}

const Banner: React.FC<bannerProps> = (props: bannerProps) => {
	const classes = useStyles() as any;
	const { text, highlightedText, icon, link } = props;
	return (
		<Link
			href={link}
			underline="none"
			target="_blank"
			style={{ display: "flex", alignItems: "center" }}
			className={classes.bannerContainer}
		>
			<Box className={classes.iconContainer}>
				{icon && React.cloneElement(icon as React.ReactElement)}
			</Box>
			<Box className={classes.textContainer}>
				<Typography variant="body1" color="textPrimary">
					{text}
				</Typography>
				<Box className={clsx(classes.linkButtonContainer)}>
					<Typography className={classes.text}>{highlightedText}</Typography>
					<ArrowIcon className={classes.icon} />
				</Box>
			</Box>
		</Link>
	);
};

export default Banner;

const useStyles = makeStyles((theme: Theme) => ({
	iconContainer: {
		marginRight: "1rem",
	},
	bannerContainer: {
		width: "fit-content",
		display: "flex",
		alignItems: "center",
		borderRadius: "20px",
		border: "1px solid " + theme.palette.primary.main,
		padding: "1rem 1.5rem",
		fontSize: "1rem",
		color: theme.palette.text.primary,
		background: theme.palette.background.default,
		transition: "all 0.2s ease-in-out",
		"&:hover": {
			background: "#103132",
		},
		[theme.breakpoints.down("xs")]: {
			padding: ".5rem 1rem",
			width: "auto",
		},
	},
	linkButtonContainer: {
		marginLeft: "0",
		display: "flex",
		width: "fit-content",
		alignItems: "center",
		[theme.breakpoints.up("sm")]: {
			marginLeft: ".5rem",
		},
	},
	text: {
		color: theme.palette.primary.main,
		fontWeight: 700,
	},
	textContainer: {
		display: "flex",
		[theme.breakpoints.down("xs")]: {
			flexDirection: "column",
			textAlign: "left",
		},
	},
	icon: {
		width: "1rem",
		height: "1rem",
		"& path": {
			fill: theme.palette.primary.main,
		},
		margin: theme.spacing(0, 0.5),
		[theme.breakpoints.down("xs")]: {
			verticalAlign: "baseline",
			height: "2rem",
			margin: theme.spacing(0, 1),
		},
		[theme.breakpoints.down("xs")]: {
			verticalAlign: "sub",
			height: "2rem",
			margin: "0px 2px",
		},
		[theme.breakpoints.down(360)]: {
			height: "1.8rem",
			margin: "0px 2px",
		},
	},
}));
