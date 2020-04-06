import React from "react";
import { makeStyles } from "@material-ui/core";
import Vector from "./../../../assets/images/new.png";
import ChatContainer from "../../components/chat/chat-container";
import NavbarContainer from "../../components/navbar/navbar-container";

const useStyles = makeStyles(() => ({
	root: {
		height: "100vh",
		backgroundImage: `url(${Vector})`,
		backgroundSize: "cover",
		backgroundPosition: "right",
		backgroundRepeat: "no-repeat",
	},
}));

const Main = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<NavbarContainer />
			<ChatContainer />
		</div>
	);
};

export default Main;
