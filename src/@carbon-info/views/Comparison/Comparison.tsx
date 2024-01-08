import {
	CarbonNoBG,
	EthereumIcon,
	Fail,
	KujiraIcon,
	SolanaIcon,
	Success,
} from "@carbon-info/assets";
import { Box, Grid, Theme, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import clsx from "clsx";

interface headerRowCellProps {
	className?: string;
	icon: React.ReactNode;
	label: string;
}

const headers = [
	"Transactional Throughput",
	"Transactional Finality",
	"Frontrunning Prevention",
	"Sybil Protection",
];

const rowData = {
	carbon: ["10,000 TPS", "< 2 sec", true, "Proof of Stake"],
	eth: ["20 TPS", "6 mins", false, "Proof of Stake"],
	sol: ["10,000 TPS", "2.5 sec", false, "Proof of Stake"],
	kuj: ["10,000 TPS", "4 sec", false, "Proof of Stake"],
};

const HeaderRowCell: React.FC<headerRowCellProps> = ({
	className,
	icon,
	label,
}) => {
	const classes = useStyles();
	return (
		<Grid
			container
			item
			xs={2}
			className={`${classes.headerRowCell} ${className || ""}`}
		>
			{icon}
			<Typography variant="h5">{label}</Typography>
		</Grid>
	);
};

const Comparison: React.FC = () => {
	const classes = useStyles();
	return (
		<div id="comparison">
			<Typography
				variant="h2"
				color="textPrimary"
				style={{ marginBottom: "2.125rem" }}
			>
				Comparing to other Blockchain
			</Typography>
			<Box className={classes.boxContainer}>
				{/* Grid */}
				<Grid container>
					{/* Header row */}
					<Grid container item className={classes.rowContainer}>
						{/* empty header cell */}
						<Grid container item xs={4} />
						{/* logo header cell */}
						<HeaderRowCell
							className={classes.firstRowFirstColumn}
							icon={<CarbonNoBG />}
							label="Carbon"
						/>
						<HeaderRowCell icon={<EthereumIcon />} label="Ethereum" />
						<HeaderRowCell icon={<SolanaIcon />} label="Solana" />
						<HeaderRowCell icon={<KujiraIcon />} label="Kujira" />
					</Grid>
					{headers.map((header, index) => (
						<Grid container item key={header} className={classes.rowContainer}>
							<Grid container item xs={4}>
								<Typography
									variant="body1"
									className={classes.headerColumnCell}
								>
									<strong>{header}</strong>
								</Typography>
							</Grid>
							{/* Rows */}
							{Object.entries(rowData).map(([key, values], columnIndex) => (
								<Grid
									container
									item
									xs={2}
									key={key}
									className={clsx({
										[classes.firstColumnCell]: columnIndex === 0,
										[classes.lastRowFirstColumn]:
											columnIndex === 0 && index === headers.length - 1,
									})}
								>
									{header === "Frontrunning Prevention" ? (
										values[index] ? (
											<Success />
										) : (
											<Fail />
										)
									) : (
										<Typography variant="body1">{values[index]}</Typography>
									)}
								</Grid>
							))}
						</Grid>
					))}
				</Grid>
			</Box>
		</div>
	);
};

export default Comparison;

const useStyles = makeStyles((theme: Theme) => ({
	firstRowFirstColumn: {
		borderTopLeftRadius: "12px",
		borderTopRightRadius: "12px",
		borderTop: "2px solid #469590",
		borderLeft: "2px solid #469590",
		borderRight: "2px solid #469590",
		"& > :first-child": {
			marginTop: "-2px",
			marginLeft: "-2px",
			marginRight: "-2px",
		},
	},
	lastRowFirstColumn: {
		borderBottomLeftRadius: "12px",
		borderBottomRightRadius: "12px",
		borderBottom: "2px solid #469590",
		borderLeft: "2px solid #469590",
		borderRight: "2px solid #469590",
	},

	/* Base style for the second column */
	firstColumnCell: {
		borderLeft: "2px solid #469590",
		borderRight: "2px solid #469590",
	},
	headerColumnCell: {
		[theme.breakpoints.down("xs")]: {
			textAlign: "left",
		},
	},
	/* Bottom border for the last row's second column */
	rowContainer: {
		padding: "0 2rem",
		borderRadius: "20px",
		minWidth: "48rem",
		"& > *:not(:first-child)": {
			alignContent: "center",
			justifyContent: "center",
		},
		"& > *": {
			// Selects all direct child elements of rowContainer
			padding: "2rem 0",
		},
		"&:nth-child(even)": {
			// Alternate background color for odd rows
			background: "#0D2625",
		},
	},
	headerRowCell: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: ".75rem",
		paddingTop: "2rem",
		paddingBottom: "2rem",
		"& > svg": {
			width: "2.4rem",
			height: "2.4rem",
		},
	},
	boxContainer: {
		color: theme.palette.text.primary,
		overflow: "scroll",
	},
}));
