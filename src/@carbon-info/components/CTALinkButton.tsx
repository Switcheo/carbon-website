import { ArrowIcon } from "@carbon-info/assets";
import { Link, Theme, makeStyles } from "@material-ui/core";
import "animate.css";
import React from "react";

interface CTALinkButtonProps {
	href: string;
	label: string;
}

const CTALinkButton: React.FC<CTALinkButtonProps> = ({ href, label }) => {
	const classes = useStyles();
	return (
		<Link
			href={href}
			underline="none"
			target="_blank"
			className={classes.CTALinkButton}
		>
			{label}
			<ArrowIcon className={classes.CTALinkIcon} />
		</Link>
	);
};

const useStyles = makeStyles((theme: Theme) => ({
	CTALinkButton: {
		paddingTop: "1rem",
		paddingBottom: "1rem",
		fontSize: "1rem",
		display: "flex",
		alignItems: "center",
		transition: "all 0.2s ease-in-out",
		color: theme.palette.primary.main,
		"&:hover": {
			color: theme.palette.text.primary,
			"& $CTALinkIcon path": {
				fill: theme.palette.text.primary,
			},
		},
	},
	CTALinkIcon: {
		marginLeft: ".5rem",
		width: "1rem",
		height: "1rem",
		"& path": {
			transition: "all 0.2s ease-in-out",
			fill: theme.palette.primary.main,
		},
	},
}));

export default CTALinkButton;
