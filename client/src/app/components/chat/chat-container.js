import React from "react";
import Chat from "./chat";

const ChatContainer = () => {
	const invisible = false;
	const [chatStatus, setChatStatus] = React.useState(false);

	const childProps = {
		invisible,
		chatStatus,
		setChatStatus,
	};
	return <Chat {...childProps} />;
};

export default ChatContainer;
