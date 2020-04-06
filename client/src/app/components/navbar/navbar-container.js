import React from "react";
import Navbar from "./navbar";

const NavbarContainer = () => {
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
	};

	return <Navbar {...childProps} />;
};

export default NavbarContainer;
