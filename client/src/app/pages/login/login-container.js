import React from "react";
import Login from "./login";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../../store/actions/authActions";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.min.css";

const LoginContainer = (props) => {
	// state for login form
	const [loginForm, setLoginForm] = React.useState({
		email: {
			value: "",
			isValid: true,
			errorMessage: "",
		},
		password: {
			value: "",
			isValid: true,
			errorMessage: "",
		},
	});

	// state for remember me
	const [checked, setChecked] = React.useState({
		checked: true,
	});

	// function to handle checkbox tick/untick
	const handleCheckboxChange = (event) => {
		setChecked({ [event.target.name]: event.target.checked });
	};

	// function to handle input change
	const handleChange = (event) => {
		const { name, value } = event.target;

		const updatedState = loginForm;
		updatedState[name].value = value;

		setLoginForm(updatedState);
	};

	// function to handle form submission
	const handleSubmit = (event) => {
		event.preventDefault();
		if (validate()) {
			props.login(loginForm);
		}
	};

	// function to handle form validation
	const validate = () => {
		if (!validateEmail(loginForm.email.value)) {
			setLoginForm({
				...loginForm,
				email: {
					...loginForm.email,
					isValid: false,
					errorMessage: "Invalid Email",
				},
			});
			return false;
		} else if (loginForm.password.value.length < 8) {
			setLoginForm({
				email: {
					...loginForm.email,
					isValid: true,
					errorMessage: "",
				},
				password: {
					...loginForm.password,
					isValid: false,
					errorMessage: "Password too short, min. 8 characters",
				},
			});
			return false;
		} else {
			setLoginForm({
				email: {
					...loginForm.email,
					isValid: true,
					errorMessage: "",
				},
				password: {
					...loginForm.password,
					isValid: true,
					errorMessage: "",
				},
			});
			return true;
		}
	};

	// function to validate user email
	const validateEmail = (email) => {
		var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return regex.test(String(email).toLowerCase());
	};

	// const notify = (err) =>
	// 	toast.error(err, {
	// 		position: "top-right",
	// 		autoClose: false,
	// 		hideProgressBar: false,
	// 		closeOnClick: true,
	// 		pauseOnHover: true,
	// 		draggable: true,
	// 	});

	const childProps = {
		loginForm,
		checked,
		handleCheckboxChange,
		handleChange,
		handleSubmit,
	};

	// auth guard
	if (props.auth.auth?._id) {
		return <Redirect to="/" />;
	}

	// show error if there is one
	// if (props.authError !== null) {
	// 	console.log("error found");
	// 	notify(props.authError);
	// }

	return (
		<div>
			<Login {...childProps} />
			{/* <ToastContainer /> */}
		</div>
	);
};

const mapStateToProps = (state) => {
	console.log(state.auth.auth);
	return {
		auth: state.auth,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		login: (creds) => dispatch(login(creds)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
