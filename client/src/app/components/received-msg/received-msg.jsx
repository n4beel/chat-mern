import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		justifyContent: "flex-start",
		marginBottom: 16,
	},
	message: {
		backgroundColor: theme.palette.background.dark,
		boxShadow: "1px 1px 5px #00000029",
		borderRadius: "0px 13px 13px 13px",
		maxWidth: 230,
		padding: "8px 20px",
	},
	text: {
		color: theme.palette.fontColor.light,
	},
}));

const ReceivedMsg = (props) => {
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

export default ReceivedMsg;
