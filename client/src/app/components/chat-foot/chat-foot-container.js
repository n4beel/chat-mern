import React from "react";
import ChatFoot from "./chat-foot";

const ChatFootContainer = () => {
	const [send, setSend] = React.useState({
		disable: true,
	});

	const [message, setMessage] = React.useState({
		message: "",
	});

	const handleChange = (event) => {
		if (event.target.value !== "") {
			setSend({
				disable: false,
			});
		} else {
			setSend({
				disable: true,
			});
		}
		setMessage({
			message: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(message);
		setMessage({
			message: "",
		});
		setSend({
			disable: true,
		});
	};

	const childProps = {
		message,
		send,
		handleChange,
		handleSubmit,
	};

	return <ChatFoot {...childProps} />;
};

export default ChatFootContainer;
