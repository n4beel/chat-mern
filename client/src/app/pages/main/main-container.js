import React from "react";
import Main from "./main";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const MainContainer = (props) => {
	// auth guard
	if (!props.auth?._id) {
		return <Redirect to="/login" />;
	}
	return <Main />;
};

const mapStateToProps = (state) => {
	return {
		auth: state.auth.auth,
	};
};
export default connect(mapStateToProps)(MainContainer);
