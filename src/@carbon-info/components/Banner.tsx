import { ArrowIcon } from "@carbon-info/assets";
import { Box, Link, makeStyles, Theme, Typography } from "@material-ui/core";
import clsx from "clsx";
import React from "react";

interface bannerProps {
	icon: React.ReactNode;
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
			target={"_blank"}
			style={{ display: "flex", alignItems: "center" }}
			className={classes.bannerContainer}
		>
			{React.cloneElement(icon as React.ReactElement, {
				className: classes.iconContainer,
			})}
			<Typography variant="body1" color="textPrimary">
				{text}
			</Typography>
			<Box className={clsx(classes.linkButtonContainer)}>
				<Typography className={classes.text}>{highlightedText}</Typography>
				<ArrowIcon className={classes.icon} />
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
		border: "1px #74E8E8 solid",
		padding: "1rem 1.5rem",
		fontSize: "1rem",
		color: theme.palette.text.primary,
		transition: "all 0.2s ease-in-out",
		"&:hover": {
			background: "#103132",
		},
	},
	linkButtonContainer: {
		marginLeft: ".5rem",
		display: "flex",
		width: "fit-content",
		alignItems: "center",
	},
	text: {
		color: theme.palette.primary.main,
		fontWeight: 700,
		[theme.breakpoints.down("sm")]: {
			fontSize: "2.3rem",
			letterSpacing: "1px",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "1.7rem",
			letterSpacing: "1px",
		},
		[theme.breakpoints.down(360)]: {
			fontSize: "1.5rem",
		},
	},
	icon: {
		width: "1rem",
		height: "1rem",
		"& path": {
			fill: theme.palette.primary.main,
		},
		margin: theme.spacing(0, 0.5),
		[theme.breakpoints.down("sm")]: {
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
