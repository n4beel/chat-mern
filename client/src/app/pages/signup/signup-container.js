import React from "react";
import Signup from "./signup";
import { connect } from "react-redux";
import { signUp } from "./../../../store/actions/authActions";
import { Redirect } from "react-router-dom";

const SignupContainer = (props) => {
	const [signupForm, setSignupFrom] = React.useState({
		name: {
			value: "",
			isValid: true,
			errorMessage: "",
		},
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

	const [checked, setChecked] = React.useState({
		checked: false,
	});

	const handleCheckboxChange = (event) => {
		setChecked({ [event.target.name]: event.target.checked });
	};

	// function to handle input change
	const handleChange = (event) => {
		const { name, value } = event.target;

		const updatedState = signupForm;
		updatedState[name].value = value;

		setSignupFrom(updatedState);
	};

	// function to handle form submission
	const handleSubmit = (event) => {
		event.preventDefault();
		if (validate()) {
			props.signUp(signupForm);
		}
	};

	// function to handle form validation
	const validate = () => {
		if (signupForm.name.value.length <= 0) {
			setSignupFrom({
				...signupForm,
				name: {
					...signupForm.name,
					isValid: false,
					errorMessage: "Name cannot be Empty",
				},
			});
			return false;
		}
		if (!validateEmail(signupForm.email.value)) {
			setSignupFrom({
				...signupForm,
				name: {
					...signupForm.name,
					isValid: true,
					errorMessage: "",
				},
				email: {
					...signupForm.email,
					isValid: false,
					errorMessage: "Invalid Email",
				},
			});

			return false;
		}
		if (signupForm.password.value.length < 8) {
			setSignupFrom({
				...signupForm,
				name: {
					...signupForm.name,
					isValid: true,
					errorMessage: "",
				},
				email: {
					...signupForm.email,
					isValid: true,
					errorMessage: "",
				},
				password: {
					...signupForm.password,
					isValid: false,
					errorMessage: "Password too short, min. 8 characters",
				},
			});

			return false;
		}

		setSignupFrom({
			name: {
				...signupForm.name,
				isValid: true,
				errorMessage: "",
			},
			email: {
				...signupForm.email,
				isValid: true,
				errorMessage: "",
			},
			password: {
				...signupForm.password,
				isValid: true,
				errorMessage: "",
			},
		});
		return true;
	};

	// function to validate user email
	function validateEmail(email) {
		var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return regex.test(String(email).toLowerCase());
	}

	const childProps = {
		signupForm,
		checked,
		handleChange,
		handleCheckboxChange,
		handleSubmit,
	};

	// auth guard
	if (props.auth?._id) {
		return <Redirect to="/" />;
	}

	return <Signup {...childProps} />;
};

const mapStateToProps = (state) => {
	return {
		auth: state.auth.auth,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		signUp: (newUser) => dispatch(signUp(newUser)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
