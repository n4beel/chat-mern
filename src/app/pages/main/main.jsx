import React from "react";
import Navbar from "../../components/navbar";
import { makeStyles } from "@material-ui/core";
import Vector from "./../../../assets/images/new.png";
import Chat from "../../components/chat/chat";

const useStyles = makeStyles((theme) => ({
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
			<Navbar />
			<Chat />
		</div>
	);
};

export default Main;
