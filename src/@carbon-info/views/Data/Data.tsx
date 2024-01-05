import { FadeAndSlide } from "@carbon-info/components";
import { useContentful } from "@carbon-info/hooks";
import { isWidth } from "@carbon-info/utils/environment";
import {
	Box,
	Divider,
	Grid,
	makeStyles,
	Paper,
	Theme,
	Typography,
} from "@material-ui/core";
import clsx from "clsx";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { AnimateKeyframes } from "react-simple-animate";
import { RollingNum } from "./component";
import Banner from "@carbon-info/components/Banner";
import { DemexLogo } from "@carbon-info/assets";

export interface DataInfo {
	value: string;
	description: string;
	toCountUp: boolean;
}

const Data: React.FC = () => {
	const classes = useStyles();
	const { ref, inView } = useInView({
		/* Optional options */
		threshold: 0.4,
		triggerOnce: true,
	});

	const widthXs = isWidth("xs");

	const { data } = useContentful({
		contentType: "carbonWebsiteInfo",
	});

	const [tableInfo, setTableInfo] = React.useState<DataInfo[]>([]);
	useEffect(() => {
		const results: DataInfo[] = [];
		if (!data && !inView) return;
		async function fetchDataItems() {
			const content = (await data) as any;

			if (content && Array.isArray(content.items)) {
				content.items.forEach((o: any) => {
					let data: DataInfo = {
						value: o.fields.value,
						description: o.fields.key,
						toCountUp:
							o.fields.key === "On-Chain_Transactions" ||
							o.fields.key === "Total_Value_Locked" ||
							o.fields.key === "Total_SWTH_Staked",
					};
					results.push(data);
				});
			}
			setTableInfo(results);
		}
		fetchDataItems();
	}, [data]);

	return (
		<div ref={ref} id="data" className={classes.container}>
			<FadeAndSlide visible={inView} className={classes.dataWrapper}>
				<AnimateKeyframes
					play={inView}
					iterationCount={1}
					keyframes={["transform: scale(0)", "transform: scale(1)"]}
					duration={0.75}
				>
					<Grid
						container
						item
						xs={8}
						sm={12}
						spacing={0}
						justifyContent="center"
						className={clsx(classes.dataTable, { open: inView })}
					>
						{tableInfo.map((item: DataInfo) => (
							<Grid item xs={12} sm={2} key={item.description}>
								<Paper className={classes.dataBox} elevation={0}>
									{item.toCountUp ? (
										<RollingNum item={item} />
									) : (
										<Typography variant="h4" color="textPrimary" align="center">
											{item.description === "Block_Time" ? "< 2s" : item.value}
										</Typography>
									)}
									{/* Description */}
									<Typography
										variant="body2"
										color="textPrimary"
										align="center"
									>
										{item.description.replaceAll("_", " ")}
									</Typography>
								</Paper>
								{widthXs && <Divider className={classes.mobileDivider} />}
							</Grid>
						))}
					</Grid>
					<Box className={classes.bannerContainer}>
						<Banner
							icon={<DemexLogo />}
							text="Ready to test drive Carbon?"
							highlightedText="Trade, Borrow and Earn on Demex"
							link="https://app.dem.exchange/"
						/>
					</Box>
				</AnimateKeyframes>
			</FadeAndSlide>
		</div>
	);
};

export default Data;

const useStyles = makeStyles((theme: Theme) => ({
	container: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		position: "relative",
		marginTop: "10rem",
		paddingBottom: "5rem",
		zIndex: 5,
	},
	headerText: {
		maxWidth: "57.125rem",
		textAlign: "center",
		opacity: 0,
		transition: "all 2s ease",
		"&.open": {
			opacity: 1,
		},
		[theme.breakpoints.down("sm")]: {
			...theme.typography.h3,
		},
	},
	dataWrapper: {
		width: "100%",
		left: 0,
		[theme.breakpoints.up("xl")]: {
			maxWidth: "1900px",
		},
	},
	dataTable: {
		marginTop: "8rem",
		borderWidth: "2px",
		marginLeft: "auto",
		marginRight: "auto",
		borderStyle: "solid",
		borderColor: theme.palette.primary.main,
		boxShadow: theme.shadows[3],
		background:
			"radial-gradient(63.65% 55% at 50.51% 100%, rgba(10, 220, 182, 0.25) 0%, rgba(10, 220, 182, 0.06) 51.54%, rgba(10, 220, 182, 0.00) 100%), #0F4950",
		borderRadius: "20px",
		opacity: 0,
		transition: "all 2s ease",
		animation: "expandTable .25s",
		"&.open": {
			opacity: 1,
		},
		"& > div": {
			// Apply borderLeft to all child divs except the first one
			"&:not(:first-child) > div": {
				borderLeft: `2px solid ${theme.palette.primary.main}`,
				[theme.breakpoints.down("xs")]: {
					borderLeft: "0",
				},
			},

			// Apply marginLeft and marginRight auto to all child divs except the first and last one
			"& > div": {
				marginLeft: "auto",
				marginRight: "auto",
			},
		},
	},
	bannerContainer: {
		marginTop: "4rem",
		[theme.breakpoints.up("sm")]: {
			marginTop: 0,
			display: "flex",
			justifyContent: "center",
			position: "relative",
			top: "-20px",
		},
	},
	dataBox: {
		margin: theme.spacing(4, 0),
		borderRadius: 0,
		backgroundColor: "transparent",
		[theme.breakpoints.only("xs")]: {
			margin: theme.spacing(2, 0),
		},
	},
	mobileDivider: {
		width: "20px",
		height: "2px",
		backgroundColor: theme.palette.background.divider,
		boxShadow: theme.shadows[4],
		borderRadius: "4px",
		margin: "auto",
	},
	cosmosSDK: {
		background: "linear-gradient(180deg, #469590 0%, #31D8D6 100%)",
		backgroundClip: "text",
		WebkitTextFillColor: "transparent",
		WebkitBackgroundClip: "text",
	},
	poweredBy: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: "6rem",
		[theme.breakpoints.only("sm")]: {
			marginBottom: "5rem",
		},
		[theme.breakpoints.only("xs")]: {
			marginBottom: "4rem",
		},
	},
	cosmosSDKLogo: {
		margin: theme.spacing(0, 1.5, 0),
		[theme.breakpoints.down("sm")]: {
			margin: theme.spacing(-1, 1, 0),
			transform: "scale(0.75)",
		},
	},
	smallerText: {
		[theme.breakpoints.down(380)]: {
			fontSize: "1.45rem",
		},
	},
}));
