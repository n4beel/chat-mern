import React from "react";
import { makeStyles, Typography, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
	head: {
		display: "flex",
		justifyContent: "space-between",
		borderBottom: "1px solid #00000029",
	},
	titleBox: {
		paddingTop: 9,
		paddingLeft: 16,
	},
	title: {
		lineHeight: "1.1",
	},
	availability: {
		lineHeight: "1.2",
		fontSize: 12,
		color: theme.palette.fontColor.grey,
	},
}));

const ChatHead = () => {
	const classes = useStyles();
	return (
		<div className={classes.head}>
			<div className={classes.titleBox}>
				<Typography component="p" color="primary" className={classes.title}>
					Chatbot
				</Typography>
				<Typography component="p" className={classes.availability}>
					Online
				</Typography>
			</div>
			<div>
				<IconButton aria-label="delete" disableRipple={true}>
					<CloseIcon color="primary" />
				</IconButton>
			</div>
		</div>
	);
};

export default ChatHead;
