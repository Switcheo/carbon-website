import {
	CarbonLogo,
	DiscordFooterIcon,
	GitHubIcon,
	TelegramIcon,
	TwitterIcon,
	CosmosSDKSmallWhiteLogo,
	CoinGeckoLogo,
} from "@carbon-info/assets";
import { Path } from "@carbon-info/constants";
import { isWidth } from "@carbon-info/utils/environment";
import { StyleUtils } from "@carbon-info/utils/styles";
import {
	Box,
	Divider,
	Grid,
	Link,
	Theme,
	Typography,
	makeStyles,
} from "@material-ui/core";
import React from "react";

const sitemap = [
	{
		section: "Learn",
		sitemap: [
			{
				title: "Features",
				link: Path.Footer.Features,
				target: "_blank",
			},
			{
				title: "Partnerships",
				link: Path.Footer.Partnerships,
			},
			{
				title: "Carbon Docs",
				link: Path.Footer.Guides,
				target: "_blank",
			},
			{
				title: "Switcheo Research",
				link: Path.Footer.Research,
				target: "_blank",
			},
		],
	},
	{
		section: "Build",
		sitemap: [
			{
				title: "Node Set-Up",
				link: Path.Footer.Setup,
				target: "_blank",
			},
			{
				title: "Carbon SDK",
				link: Path.Footer.SDK,
				target: "_blank",
			},
			{
				title: "GitHub",
				link: Path.Footer.Github,
				target: "_blank",
			},
			{
				title: "Development Fund",
				link: Path.Footer.SwitcheoDevelopmentFund,
				target: "_blank",
			},
		],
	},
	{
		section: "Ecosystem",
		sitemap: [
			{
				title: "Demex",
				link: Path.Footer.Demex,
				target: "_blank",
			},
			{
				title: "Carbon Hub",
				link: Path.Footer.CarbonHub,
				target: "_blank",
			},
			{
				title: "Carbonscan",
				link: Path.Footer.CarbonScan,
				target: "_blank",
			},
			{
				title: "Hydrogen",
				link: Path.Footer.Hydrogen,
				target: "_blank",
			},
		],
	},
	{
		section: "Resources",
		sitemap: [
			{
				title: "Forum",
				link: Path.Footer.Forum,
				target: "_blank",
			},
			{
				title: "Governance",
				link: Path.Footer.Governance,
				target: "_blank",
			},
			{
				title: "Brand Assets",
				link: Path.Footer.BrandAsset,
				target: "_blank",
			},
		],
	},
];

const Footer: React.FC = () => {
	const classes = useStyles();
	const isMobile = isWidth("sm");
	return (
		<Box id="footer" className={classes.footerContainer}>
			<Divider style={{ marginBottom: "1.5rem" }} />
			<Grid
				container
				className={classes.sitemapContainer}
				spacing={isMobile ? 0 : 0}
			>
				{sitemap.map((section) => {
					return (
						<Grid
							item
							container
							xs={6}
							sm
							md
							key={section.section}
							direction="column"
						>
							<Typography
								color="textPrimary"
								className={classes.footerHeader}
								align="left"
							>
								{section.section}
							</Typography>
							{section.sitemap.map((map, index) => {
								return (
									<Link
										href={map.link}
										underline="none"
										target={map.target}
										key={map.title + index}
									>
										<Typography
											color="textPrimary"
											className={classes.footerLink}
											align="left"
										>
											{map.title}
										</Typography>
									</Link>
								);
							})}
						</Grid>
					);
				})}
			</Grid>
			<Divider style={{ marginTop: "3.5rem" }} />
			<Grid container className={classes.footNoteContainer} spacing={6}>
				<Grid
					container
					item
					xs={12}
					md={12}
					alignItems="center"
					justifyContent="center"
				>
					{!isMobile && (
						<Grid item xs={12} md={6} className={classes.logoContainer}>
							<CarbonLogo className={classes.logo} />
							<Typography className={classes.poweredBySDKContainer}>
								Powered by
								<CosmosSDKSmallWhiteLogo className={classes.cosmosSDKLogo} />
								<Link
									href="https://v1.cosmos.network/sdk"
									target="_blank"
									className={classes.cosmosLink}
								>
									<strong>Cosmos SDK</strong>
								</Link>
							</Typography>
						</Grid>
					)}
					<Grid item xs={12} md={6} className={classes.socialMediaContainer}>
						<Link href={Path.Socials.Twitter} underline="none" target="_blank">
							<TwitterIcon className={classes.socialMediaIcon} />
						</Link>
						<Link href={Path.Socials.Telegram} underline="none" target="_blank">
							<TelegramIcon className={classes.socialMediaIcon} />
						</Link>
						<Link href={Path.Socials.Discord} underline="none" target="_blank">
							<DiscordFooterIcon className={classes.socialMediaIcon} />
						</Link>
						<Link href={Path.Socials.Github} underline="none" target="_blank">
							<GitHubIcon className={classes.socialMediaIcon} />
						</Link>
						<Link
							href={Path.Socials.CoinGecko}
							underline="none"
							target="_blank"
						>
							<CoinGeckoLogo className={classes.socialMediaIcon} />
						</Link>
					</Grid>
					{isMobile && (
						<Grid item xs={12} md={6} className={classes.logoContainer}>
							<CarbonLogo className={classes.logo} />
						</Grid>
					)}
				</Grid>
				<Grid item md={12}>
					<Typography
						className={classes.footNoteText}
						align="left"
						variant="body2"
					>
						This website is maintained by Switcheo Labs. The contents and
						opinions of this website are those of Switcheo Labs. Switcheo Labs
						provides links to cryptocurrency exchanges as a service to the
						public. Switcheo Labs does not operate these websites and is not
						responsible for their content and expressly rejects any liability
						for damages of any kind resulting from the use, reference to, or
						reliance on any information contained within these websites.
						Switcheo Labs does not warrant that the information provided by
						these websites is correct, complete, or up-to-date.
					</Typography>
				</Grid>
				<Grid item md={12}>
					<Typography
						className={classes.footNoteText}
						variant="body2"
						align="left"
					>
						{"Carbon isn't affiliated with "}
						<Link
							href={"https://www.carbondefi.xyz/"}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Typography
								className={classes.altCarbon}
								variant="body2"
								color="textSecondary"
								display="inline"
							>
								Carbon DeFi
							</Typography>
						</Link>
						{
							" by Bancor, a decentralized protocol for automating onchain trading strategies"
						}
					</Typography>
				</Grid>
				<Grid item md={12}>
					<Typography color="textPrimary" variant="body2" align="left">
						Made with ❤️ for builders everywhere
					</Typography>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Footer;

const useStyles = makeStyles((theme: Theme) => ({
	footerContainer: {
		maxWidth: "1400px",
		margin: "0 auto",
	},
	cosmosSDKLogo: {
		margin: "0 .5rem",
	},
	cosmosLink: {
		color: theme.palette.text.primary,
		"&:hover": {
			textDecoration: "none",
		},
	},
	poweredBySDKContainer: {
		marginLeft: "8px",
		display: "flex",
		alignItems: "center",
		color: theme.palette.text.primary,
	},
	logo: {
		margin: "0px 0.063rem",
		[theme.breakpoints.only("sm")]: {
			width: "150px",
		},
		[theme.breakpoints.only("xs")]: {
			width: "100px",
		},
	},
	footerHeader: {
		...theme.typography.h3,
		marginTop: "2rem",
		marginBottom: "1.5rem",
	},
	footerLink: {
		...theme.typography.body1,
		margin: "0.5rem 0px",
		maxWidth: "13rem",
		color: theme.palette.text.secondary,
		"&:hover": {
			color: theme.palette.common.white,
			transition: "all 0.2s ease",
		},
	},
	sitemapContainer: {
		margin: "7.5rem 0px",
		marginLeft: "5%",
		[theme.breakpoints.down("xs")]: {
			margin: "0px",
			padding: "0px 0%",
			width: "fit-content",
		},
	},
	logoContainer: {
		textAlign: "start",
		[theme.breakpoints.down("sm")]: {
			textAlign: "center",
			paddingTop: "4rem",
		},
	},
	socialMediaContainer: {
		textAlign: "center",
		display: "flex",
		justifyContent: "flex-end",
		[theme.breakpoints.down("sm")]: {
			padding: "0 2rem",
			justifyContent: "space-between",
		},
	},
	footNoteContainer: {
		marginTop: "2.5rem",
		marginBottom: "7.5rem",
		[theme.breakpoints.down("sm")]: {
			marginTop: "3.5rem",
		},
	},
	footNoteText: {
		color: theme.palette.text.secondary,
	},
	altCarbon: {
		background: StyleUtils.blueGradient,
		backgroundClip: "text",
		WebkitBackgroundClip: "text",
		color: "transparent",
		display: "inline-block",
		fontWeight: 700,
	},
	socialMediaIcon: {
		height: "32px",
		width: "32px",
		margin: "0px 1.5rem",
		[theme.breakpoints.down("sm")]: {
			margin: "0px 0.5rem",
			width: "2.5rem",
		},
		"&:hover": {
			"& path": {
				fill: theme.palette.primary.main,
				transition: "all 0.2s ease",
			},
		},
	},
}));
