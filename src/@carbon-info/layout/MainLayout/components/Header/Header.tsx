import { CarbonLogo, MenuIcon } from "@carbon-info/assets";
import { Path } from "@carbon-info/constants";
import { isWidth } from "@carbon-info/utils/environment";
import { StyleUtils } from "@carbon-info/utils/styles";
import {
	Box,
	Hidden,
	Link,
	Theme,
	Typography,
	makeStyles,
} from "@material-ui/core";
import clsx from "clsx";
import React, { useLayoutEffect, useState } from "react";
import MobileMenu from "./components/MobileMenu";
import { CTAButton } from "@carbon-info/components";

const SWITCH_THRESHOLD = 45;

interface NavBarLinkProps {
	href: string;
	label: string;
}

const NavBarLink: React.FC<NavBarLinkProps> = ({ href, label }) => {
	const classes = useStyles();
	return (
		<Link href={href} underline="none" target="_blank">
			<Typography
				variant="h5"
				color="textPrimary"
				display="inline"
				className={classes.navBarText}
			>
				{label}
			</Typography>
		</Link>
	);
};

const Header: React.FC = () => {
	const classes = useStyles();
	const isMobile = isWidth("sm");
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const [topOffset, setTopOffset] = useState(window.scrollY);
	useLayoutEffect(() => {
		const updateScrollPosition = () => {
			setTopOffset(window.scrollY);
		};
		window.addEventListener("scroll", updateScrollPosition);
		return () => window.removeEventListener("scroll", updateScrollPosition);
	}, []);
	const isScrolled = topOffset > SWITCH_THRESHOLD;

	return (
		<nav>
			<div className={clsx(classes.mobileMenu, { open: showMobileMenu })}>
				<MobileMenu callback={() => setShowMobileMenu(false)} />
			</div>
			<div className={classes.navBarContainer}>
				<span className={classes.logoContainer}>
					<Link href={"/"} underline="none">
						<CarbonLogo className={classes.logo} />
					</Link>
				</span>
				<div className={classes.navButtonContainer}>
					{isMobile ? (
						<>
							<div
								className={classes.navButtonMobile}
								onClick={() => setShowMobileMenu(true)}
							>
								<MenuIcon
									className={clsx(classes.menuIcon, { open: showMobileMenu })}
								/>
							</div>
						</>
					) : (
						<>
							<NavBarLink href={Path.Footer.Guides} label="Learn" />
							<NavBarLink href={Path.Header.Build} label="Build" />
							<NavBarLink href={Path.Footer.CarbonScan} label="Ecosystem" />
							<NavBarLink href={Path.Footer.Bridge} label="Bridge" />
						</>
					)}
				</div>
				{!isMobile && (
					<>
						<Box
							onClick={() => window.open(`${Path.Footer.Buy}`, "_blank")}
							className={classes.externalLink}
						>
							<CTAButton
								text="Buy $SWTH"
								link={Path.Footer.Buy}
								textClassName={classes.ctaButtonText}
								iconClassName={classes.ctaButtonIcon}
								buttonClassName={classes.ctaButtonBox}
							/>
						</Box>
					</>
				)}
			</div>
			<Hidden mdUp>
				{!showMobileMenu && (
					<div
						className={
							isScrolled
								? classes.navBarFixedContainer
								: classes.navBarFixedContainerCollapsed
						}
					>
						<span className={classes.logoContainer}>
							<Link href={"/"} underline="none">
								<CarbonLogo className={classes.logoFixed} />
							</Link>
						</span>
						<div className={classes.navButtonMobile}>
							<div onClick={() => setShowMobileMenu(true)}>
								<MenuIcon
									className={clsx(classes.menuIcon, { open: showMobileMenu })}
								/>
							</div>
						</div>
					</div>
				)}
			</Hidden>
		</nav>
	);
};

export default Header;

const useStyles = makeStyles((theme: Theme) => ({
	mobileMenu: {
		height: "-webkit-fill-available",
		zIndex: 11,
		opacity: 0,
		transform: "translate(0px,-80vh)",
		transition: "opacity ease-in 0.3s, transform ease-in 0.4s",
		position: "fixed",
		top: 0,
		left: 0,
		pointerEvents: "none",
		"&.open": {
			pointerEvents: "all",
			opacity: 1,
			transform: "translate(0px,0px)",
		},
	},
	navBarContainer: {
		display: "flex",
		alignItems: "center",
		maxWidth: "100%",
		paddingTop: theme.spacing(6),
		paddingBottom: theme.spacing(6),
		justifyContent: "space-between",
		[theme.breakpoints.down("sm")]: {
			transition: "all 0.25s linear",
			paddingTop: theme.spacing(4),
			paddingBottom: theme.spacing(4),
		},
	},
	navBarFixedContainer: {
		zIndex: 1000,
		display: "flex",
		alignItems: "center",
		position: "fixed",
		top: 0,
		left: 0,
		right: 0,
		transform: "translate(0px,0px)",
		background: theme.palette.background.default,
		padding: "1.25rem 3rem 1.25rem 1rem",
		transition: "all 0.25s linear",
		opacity: 1,
		[theme.breakpoints.down("xs")]: {
			padding: ".75rem 2rem .75rem 1rem",
		},
	},
	navBarFixedContainerCollapsed: {
		zIndex: 10,
		display: "flex",
		alignItems: "center",
		position: "fixed",
		transform: "translate(0px,-40px)",
		top: 0,
		left: 0,
		right: 0,
		background: theme.palette.background.navBar,
		padding: "1.25rem 3rem 1.25rem 1rem",
		transition: "all 0.25s linear",
		opacity: 0,
		[theme.breakpoints.down("xs")]: {
			padding: ".5rem 3rem .75rem 1rem",
		},
	},
	navBarText: {
		transition: StyleUtils.hoverTransition(),
		"&:hover": {
			color: theme.palette.primary.main,
		},
	},
	menuIcon: {
		position: "relative",
	},
	logo: {
		verticalAlign: "middle",
		width: "200px",
		[theme.breakpoints.down("xs")]: {
			marginRight: "auto",
			textAlign: "start",
			width: "11rem",
		},
	},
	logoContainer: {
		display: "flex",
		flex: 1,
		[theme.breakpoints.down("xs")]: {
			textAlign: "start",
		},
	},
	logoFixed: {
		[theme.breakpoints.down("sm")]: {
			width: "80%",
		},
		[theme.breakpoints.down("xs")]: {
			width: "11rem",
			marginLeft: "1rem",
		},
	},
	navButtonContainer: {
		display: "flex",
		gap: 50,
		justifyContent: "center",
		flex: 1,
	},
	navButtonMobile: {
		display: "flex",
		flex: 1,
		justifyContent: "flex-end",
	},
	externalLink: {
		display: "flex",
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
		cursor: "pointer",
	},
	ctaButtonIcon: {
		"& path": {
			fill: theme.palette.common.white,
		},
	},
	ctaButtonBox: {
		"&:hover $ctaButtonText": {
			color: theme.palette.primary.main,
			transition: "all 0.2s ease-in",
		},
		"&:hover $ctaButtonIcon": {
			"& path": {
				fill: theme.palette.primary.main,
				transition: "all 0.2s ease-in",
			},
		},
	},
	ctaButtonText: {
		...theme.typography.h5,
		color: theme.palette.common.white,
	},
}));
