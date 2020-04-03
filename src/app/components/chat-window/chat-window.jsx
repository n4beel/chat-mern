import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		height: 460,
		width: 360,
		position: "absolute",
		bottom: 36,
		right: 112,
		boxShadow: "1px 1px 6px #00000029",
  },
  chatContainer:{
    backgroundColor: "white",
    height: '100%',
    borderRadius: 5,
    position: 'relative',
    top: 0,
    left: 0,
    zIndex: '10'
  },
  chatFin:{
    height: 16,
    width: 16,
    backgroundColor: 'white',
    transform: 'translateY(0px) rotate(45deg)',
    borderRadius: 3,
    position: 'absolute',
    bottom: 19,
    right: -8,
		boxShadow: "1px 1px 6px #00000029",
    zIndex: '9'
  }
}));

const ChatWindow = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.chatFin}></div>
			<div className={classes.chatContainer}></div>
		</div>
	);
};

export default ChatWindow;
