import React from "react";
import { makeStyles } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import KeyboardVoiceIcon from "@material-ui/icons/KeyboardVoice";

const useStyles = makeStyles((theme) => ({
	main: {
		position: "absolute",
		bottom: 0,
		backgroundColor: "white",
		borderRadius: "0 0 16px 16px",
	},
	root: {
		padding: "2px 4px",
		display: "flex",
		alignItems: "center",
		width: 352,
		borderRadius: "0 0 16px 16px",
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
	},
	iconButton: {
		padding: 10,
	},
	divider: {
		height: 28,
		margin: 4,
	},
}));

const ChatFoot = (props) => {
	const classes = useStyles();

	return (
		<div className={classes.main}>
			<Paper
				component="form"
				className={classes.root}
				onSubmit={props.handleSubmit}
			>
				<InputBase
					className={classes.input}
					placeholder="Type a Message..."
					inputProps={{
						"aria-label": "type a message...",
						name: "message",
						onChange: props.handleChange,
						autoComplete: "off",
						value: props.message.message,
					}}
				/>
				<IconButton className={classes.iconButton} aria-label="voice">
					<KeyboardVoiceIcon />
				</IconButton>
				<Divider className={classes.divider} orientation="vertical" />
				<IconButton
					color="primary"
					className={classes.iconButton}
					aria-label="send"
					type="submit"
					disabled={props.send.disable}
				>
					<SendIcon />
				</IconButton>
			</Paper>
		</div>
	);
};

export default ChatFoot;
