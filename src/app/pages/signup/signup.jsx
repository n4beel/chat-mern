import React, { useState } from "react";
import "./signup.scss";
import {
	Grid,
	Box,
	Container,
	TextField,
	Button,
	FormControlLabel,
	Checkbox,
	Typography
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Vector from "./../../../assets/images/vector.svg";

const Signup = () => {
	const [signupForm, setSignupFrom] = useState({
		name: {
			value: ""
		},
		email: {
			value: "",
			isValid: true,
			errorMessage: ""
		},
		password: {
			value: "",
			isValid: true,
			errorMessage: ""
		}
	});

	const [checked, setChecked] = useState({
		checked: false
	});

	const handleCheckboxChange = event => {
		setChecked({ [event.target.name]: event.target.checked });
	};

	// function to handle input change
	const handleChange = event => {
		const { name, value } = event.target;

		const updatedState = signupForm;
		updatedState[name].value = value;

		setSignupFrom(updatedState);
	};

	// function to handle form submission
	const handleSubmit = event => {
		event.preventDefault();
		validate();
		console.log(signupForm);
	};

	// function to handle form validation
	const validate = () => {
		if (!validateEmail(signupForm.email.value)) {
			setSignupFrom({
				...signupForm,
				email: {
					...signupForm.email,
					isValid: false,
					errorMessage: "Invalid Email"
				}
			});
			return;
		} else if (signupForm.password.value.length <= 8) {
			setSignupFrom({
				...signupForm,
				email: {
					...signupForm.email,
					isValid: true,
					errorMessage: ""
				},
				password: {
					...signupForm.password,
					isValid: false,
					errorMessage: "Password too short, min. 8 characters"
				}
			});
		} else {
			setSignupFrom({
				...signupForm,
				email: {
					...signupForm.email,
					isValid: true,
					errorMessage: ""
				},
				password: {
					...signupForm.password,
					isValid: true,
					errorMessage: ""
				}
			});
		}
	};

	// function to validate user email
	function validateEmail(email) {
		var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return regex.test(String(email).toLowerCase());
	}

	return (
		<div className="signup">
			<Grid container>
				<Box
					component={Grid}
					item
					md={6}
					display={{ xs: "none", sm: "none", md: "flex" }}
					flexDirection="column"
					justifyContent="center"
					textAlign="center"
				>
					<img src={Vector} alt="" />
				</Box>
				<Box
					component={Grid}
					item
					xs={12}
					md={6}
					display="flex"
					flexDirection="column"
					justifyContent="center"
					textAlign="center"
				>
					<Container maxWidth="sm">
						<Typography variant="h3" component="h3" className="heading">
							Create an account
						</Typography>

						<form onSubmit={handleSubmit} noValidate autoComplete="off">
							<div>
								<TextField
									id="name"
									label="Name"
									type="text"
									name="name"
									onChange={handleChange}
								/>
							</div>
							<div>
								<TextField
									id="email"
									label="Email"
									type="email"
									name="email"
									onChange={handleChange}
									error={!signupForm.email.isValid}
									helperText={signupForm.email.errorMessage}
								/>
							</div>
							<div>
								<TextField
									id="password"
									label="Password"
									type="password"
									name="password"
									onChange={handleChange}
									error={!signupForm.password.isValid}
									helperText={signupForm.password.errorMessage}
								/>
							</div>
							<div className="form-action">
								<FormControlLabel
									control={
										<Checkbox
											checked={checked.checked}
											onChange={handleCheckboxChange}
											name="checked"
											color="primary"
										/>
									}
									label={
										<Typography component="p" color="primary">
											I agree with the&nbsp;
											<a
												href="https://signup.com/Terms"
												rel="noopener noreferrer"
												target="_blank"
											>
												<Typography component="a" color="primary">
													Terms and Conditions
												</Typography>
											</a>
										</Typography>
									}
								/>
							</div>
							<div>
								<Button variant="contained" color="primary" type="submit">
									Primary
								</Button>
							</div>
						</form>
						<Typography component="p" color="primary">
							Already have an account?&nbsp;
							<Link to="/login">
								<Typography component="a" color="primary">
									Click Here
								</Typography>
							</Link>
						</Typography>
					</Container>
				</Box>
			</Grid>
		</div>
	);
};

export default Signup;
