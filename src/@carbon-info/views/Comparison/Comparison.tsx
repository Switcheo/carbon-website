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
	carbon: ["10,000", "< 2 sec", true, "Proof of Stake"],
	eth: ["20", "6 mins", false, "Proof of Stake"],
	sol: ["10,000", "2.5 sec", false, "Proof of Stake"],
	kuj: ["10,000", "4 sec", false, "Proof of Stake"],
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
								<Typography variant="body1">
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
									className={
										columnIndex === 0
											? `${classes.firstColumnCell} ${
													// If it's the first column and the last row, add lastRowFirstColumn class
													index === headers.length - 1
														? classes.lastRowFirstColumn
														: ""
											  }`
											: ""
									}
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
	/* Bottom border for the last row's second column */
	rowContainer: {
		padding: "0 2rem",
		borderRadius: "20px",
		"& > *:not(:first-child)": {
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
		"&:first-child": {
			"& .firstColumnCell": {
				borderTop: "2px solid red",
			},
		},
		"&:last-child": {
			"& .firstColumnCell": {
				borderBottom: "2px solid red",
			},
		},
	},
	headerRowCell: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: ".75rem",
		paddingTop: "2rem",
		paddingBottom: "2rem",
	},
	boxContainer: {
		color: theme.palette.text.primary,
	},
}));
