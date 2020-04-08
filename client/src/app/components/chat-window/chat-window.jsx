import React from "react";
import { makeStyles } from "@material-ui/core";
import ReceivedMsgContainer from "../received-msg/received-msg-container";
import SentMsgContainer from "../sent-msg/sent-msg-container";

const useStyles = makeStyles(() => ({
	root: {
		height: 363,
		overflowY: "auto",
		padding: 10,
		/* width */
		"&::-webkit-scrollbar": {
			width: 5,
		},

		/* Handle */
		"&::-webkit-scrollbar-thumb": {
			background: "#aeaeae",
			borderRadius: 5,
		},

		/* Handle on hover */
		"&::-webkit-scrollbar-thumb:hover": {
			background: "#898989",
		},
	},
}));

const ChatWindow = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<ReceivedMsgContainer>heloo</ReceivedMsgContainer>
			<SentMsgContainer>
				heloo heloo heloo heloo heloo heloo helo
			</SentMsgContainer>
			<SentMsgContainer>
				a heloo heloo heloo heloo heloo heloo helo
			</SentMsgContainer>
			<ReceivedMsgContainer>
				helooheloo heloo heloo heloo heloo heloo helo
			</ReceivedMsgContainer>
			<SentMsgContainer>
				heloo heloo heloo heloo heloo heloo helo
			</SentMsgContainer>
			<SentMsgContainer>
				a heloo heloo heloo heloo heloo heloo helo
			</SentMsgContainer>
			<ReceivedMsgContainer>
				helooheloo heloo heloo heloo heloo heloo helo
			</ReceivedMsgContainer>
			<SentMsgContainer>
				heloo heloo heloo heloo heloo heloo helo
			</SentMsgContainer>
		</div>
	);
};

export default ChatWindow;
