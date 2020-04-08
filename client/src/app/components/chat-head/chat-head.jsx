import React from "react";
import { makeStyles, Typography, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Avatar from "./../../../assets/images/avatar.png";

const useStyles = makeStyles((theme) => ({
	head: {
		display: "flex",
		justifyContent: "space-between",
		borderBottom: "1px solid #00000029",
	},
	titleBox: {
		paddingTop: 9,
		paddingLeft: 16,
		display: "flex",
	},
	title: {
		lineHeight: "1.1",
	},
	image: {
		height: 36,
		marginRight: 10,
	},
	availability: {
		lineHeight: "1.2",
		fontSize: 12,
		color: theme.palette.fontColor.grey,
	},
}));

const ChatHead = (props) => {
	const classes = useStyles();
	return (
		<div className={classes.head}>
			<div className={classes.titleBox}>
				<div>
					<img src={Avatar} className={classes.image} alt="chat bot avatar" />
				</div>
				<div>
					<Typography component="p" color="primary" className={classes.title}>
						Chatbot
					</Typography>
					<Typography component="p" className={classes.availability}>
						Online
					</Typography>
				</div>
			</div>
			<div>
				<IconButton
					aria-label="close"
					onClick={() => {
						props.setChatStatus(!props.chatStatus);
					}}
				>
					<CloseIcon color="primary" />
				</IconButton>
			</div>
		</div>
	);
};

export default ChatHead;
