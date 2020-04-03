import React from "react";
import { Fab, makeStyles } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import ChatWindow from "../chat-window/chat-window";

const useStyles = makeStyles((theme) => ({
	chatButton: {
		position: "absolute",
		right: 36,
		bottom: 36,
	},
}));

const Chat = () => {
	const classes = useStyles();

	const [chatStatus, setChatStatus] = React.useState(false);

	console.log(chatStatus);

	return (
		<div>
			<Fab
				color="primary"
				aria-label="add"
				className={classes.chatButton}
				onClick={() => {
					setChatStatus(!chatStatus);
				}}
			>
				<ChatIcon />
			</Fab>
			{chatStatus ? <ChatWindow /> : null}
		</div>
	);
};

export default Chat;
