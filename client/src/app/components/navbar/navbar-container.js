import React from "react";
import Navbar from "./navbar";
import { connect } from "react-redux";
import { signOut } from "../../../store/actions/authActions";

const NavbarContainer = (props) => {
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const mobileMenuId = "primary-search-account-menu-mobile";

	const childProps = {
		mobileMoreAnchorEl,
		handleMobileMenuOpen,
		handleMobileMenuClose,
		mobileMenuId,
		isMobileMenuOpen,
		...props,
	};

	return <Navbar {...childProps} />;
};

const mapDispatchToProps = (dispatch) => {
	return {
		signOut: () => dispatch(signOut()),
	};
};

export default connect(null, mapDispatchToProps)(NavbarContainer);
