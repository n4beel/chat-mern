import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		justifyContent: "flex-end",
		marginBottom: 16,
	},
	message: {
		backgroundColor: theme.palette.background.light,
		boxShadow: "1px 1px 5px #00000029",
		borderRadius: "13px 0px 13px 13px",
		maxWidth: 230,
		padding: "8px 20px",
	},
	text: {
		color: theme.palette.fontColor.grey,
	},
}));

const SentMsg = (props) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.message}>
				<Typography component="p" className={classes.text}>
					{props.children}
				</Typography>
			</div>
		</div>
	);
};

export default SentMsg;
