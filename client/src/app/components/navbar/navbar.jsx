import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
	},
	navMenu: {
		listStyleType: "none",
		display: "flex",
    '& > li': {
      padding: '20px 24px'
    }
	},
	sectionDesktop: {
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex",
		},
	},
	sectionMobile: {
		display: "flex",
		[theme.breakpoints.up("md")]: {
			display: "none",
		},
	},
}));

const Navbar = () => {
	const classes = useStyles();
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const mobileMenuId = "primary-search-account-menu-mobile";
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem>
				<Typography color="inherit">Home</Typography>
			</MenuItem>
			<MenuItem>
				<Typography color="primary">Services</Typography>
			</MenuItem>
			<MenuItem>
				<Typography color="primary">Portfolio</Typography>
			</MenuItem>
			<MenuItem>
				<Typography color="primary">Team</Typography>
			</MenuItem>
			<MenuItem>
				<Typography color="primary">Contact</Typography>
			</MenuItem>
			<MenuItem>
				<Typography color="primary">Logout</Typography>
			</MenuItem>
		</Menu>
	);

	return (
		<div className={classes.grow}>
			<AppBar position="static" color="transparent">
				<Toolbar>
					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>
						<ul className={classes.navMenu}>
							<li>
								<Typography variant="h6" component="h6" color="inherit">Home</Typography>
							</li>
							<li>
								<Typography variant="h6" component="h6" color="primary">Services</Typography>
							</li>
							<li>
								<Typography variant="h6" component="h6" color="primary">Portfolio</Typography>
							</li>
							<li>
								<Typography variant="h6" component="h6" color="primary">Team</Typography>
							</li>
							<li>
								<Typography variant="h6" component="h6" color="primary">Contact</Typography>
							</li>
							<li>
								<Typography variant="h6" component="h6" color="primary">Logout</Typography>
							</li>
						</ul>
					</div>
					<div className={classes.sectionMobile}>
						<IconButton
							aria-label="show more"
							aria-controls={mobileMenuId}
							aria-haspopup="true"
							onClick={handleMobileMenuOpen}
							color="inherit"
						>
							<MoreIcon />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
		</div>
	);
};

export default Navbar;
