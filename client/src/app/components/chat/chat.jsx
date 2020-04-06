import React from "react";
import {
	Fab,
	makeStyles,
	Badge,
	Typography,
	IconButton,
} from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import ChatHeadContainer from "../chat-head/chat-head-container";
import ChatWindowContainer from "../chat-window/chat-window-container";
import ChatFootContainer from "../chat-foot/chat-foot-container";

const useStyles = makeStyles((theme) => ({
	chatButton: {
		position: "absolute",
		right: 36,
		bottom: 36,
	},
	root: {
		height: 460,
		width: 360,
		position: "absolute",
		bottom: 36,
		right: 112,
		boxShadow: "1px 1px 6px #00000029",
		borderRadius: 16,
	},
	chatContainer: {
		backgroundColor: "white",
		height: "100%",
		borderRadius: 16,
		position: "relative",
		top: 0,
		left: 0,
		zIndex: "10",
	},
	chatFin: {
		height: 16,
		width: 16,
		backgroundColor: "white",
		transform: "translateY(0px) rotate(45deg)",
		borderRadius: 3,
		position: "absolute",
		bottom: 20,
		right: -7,
		boxShadow: "1px 1px 6px #00000029",
		zIndex: "9",
	},
}));

const Chat = (props) => {
	const classes = useStyles();

	return (
		<div>
			<Fab
				color="primary"
				aria-label="add"
				className={classes.chatButton}
				onClick={() => {
					props.setChatStatus(!props.chatStatus);
				}}
			>
				<Badge color="secondary" variant="dot" invisible={props.invisible}>
					<ChatIcon />
				</Badge>
			</Fab>
			{props.chatStatus ? (
				<div className={classes.root}>
					<div className={classes.chatContainer}>
						<ChatHeadContainer
							setChatStatus={props.setChatStatus}
							chatStatus={props.chatStatus}
						/>
						<ChatWindowContainer />
						<ChatFootContainer />
					</div>
					<div className={classes.chatFin}></div>
				</div>
			) : null}
		</div>
	);
};

export default Chat;
