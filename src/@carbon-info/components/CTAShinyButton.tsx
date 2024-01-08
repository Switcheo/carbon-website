import { Box, Link, Theme, Typography, makeStyles } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";

interface CTAShinyButtonProps {
	label: string;
	onClick?: () => void;
	href?: string;
}

const CTAShinyButton: React.FC<CTAShinyButtonProps> = ({
	label,
	onClick,
	href,
}) => {
	const classes = useStyles();
	return (
		<Link
			className={classes.ctaButton}
			onClick={() => {
				if (onClick) {
					onClick();
				}
			}}
			href={href}
		>
			<Box className={classes.ctaButtonInner}>
				<Typography variant="h4" className={classes.ctaButtonText}>
					{label}
				</Typography>
				<ExpandMoreIcon />
			</Box>
		</Link>
	);
};

export default CTAShinyButton;

const useStyles = makeStyles((theme: Theme) => ({
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
		maxWidth: "280px",
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
			textDecoration: "none",
			"&::before": {
				opacity: 1,
			},
			boxShadow: "0px 0px 20px 0px rgba(116, 232, 232, 0.20)",
		},
		[theme.breakpoints.down("sm")]: {
			width: "100%",
			marginRight: "0",
			marginBottom: ".5rem",
			justifyContent: "space-around",
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
}));
