import React from "react";
import Signup from "./signup";

const SignupContainer = () => {
	const [signupForm, setSignupFrom] = React.useState({
		name: {
			value: "",
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
			console.log(signupForm);
		}
	};

	// function to handle form validation
	const validate = () => {
		if (!validateEmail(signupForm.email.value)) {
			setSignupFrom({
				...signupForm,
				email: {
					...signupForm.email,
					isValid: false,
					errorMessage: "Invalid Email",
				},
			});
			return false;
		} else if (signupForm.password.value.length <= 8) {
			setSignupFrom({
				...signupForm,
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
		} else {
			setSignupFrom({
				...signupForm,
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
		}
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
	return <Signup {...childProps} />;
};

export default SignupContainer;
