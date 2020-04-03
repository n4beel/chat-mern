import React, { useState } from "react";
import "./login.scss";
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

const Login = () => {
	const [loginForm, setLoginForm] = useState({
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
		checked: true
	});

	const handleCheckboxChange = event => {
		setChecked({ [event.target.name]: event.target.checked });
	};

	// function to handle input change
	const handleChange = event => {
		const { name, value } = event.target;

		const updatedState = loginForm;
		updatedState[name].value = value;

		setLoginForm(updatedState);
	};

	// function to handle form submission
	const handleSubmit = event => {
		event.preventDefault();
		validate();
		console.log(loginForm);
	};

	// function to handle form validation
	const validate = () => {
		if (!validateEmail(loginForm.email.value)) {
			setLoginForm({
				...loginForm,
				email: {
					...loginForm.email,
					isValid: false,
					errorMessage: "Invalid Email"
				}
			});
			return;
		} else if (loginForm.password.value.length <= 8) {
			setLoginForm({
				email: {
					...loginForm.email,
					isValid: true,
					errorMessage: ""
				},
				password: {
					...loginForm.password,
					isValid: false,
					errorMessage: "Password too short, min. 8 characters"
				}
			});
		} else {
			setLoginForm({
				email: {
					...loginForm.email,
					isValid: true,
					errorMessage: ""
				},
				password: {
					...loginForm.password,
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
		<div className="login">
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
							Hello,
							<br />
							Welcome Back
						</Typography>

						<form onSubmit={handleSubmit} noValidate autoComplete="off">
							<div>
								<TextField
									id="email"
									label="Email"
									type="email"
									name="email"
									onChange={handleChange}
									error={!loginForm.email.isValid}
									helperText={loginForm.email.errorMessage}
								/>
							</div>
							<div>
								<TextField
									id="password"
									label="Password"
									type="password"
									name="password"
									onChange={handleChange}
									error={!loginForm.password.isValid}
									helperText={loginForm.password.errorMessage}
								/>
							</div>
							<div className="form-action">
								<div>
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
												Remember me
											</Typography>
										}
									/>
								</div>
								<div>
									<Typography
										component="p"
										className="forgot-pass"
										color="primary"
									>
										Forgot Password?
									</Typography>
								</div>
							</div>

							<div>
								<Button variant="contained" color="primary" type="submit">
									Login
								</Button>
							</div>
						</form>
						<Typography component="p" color="primary">
							Don't have an account?&nbsp;
							<Link to="/signup">
								<Typography component="a" color="primary">Click Here</Typography>
							</Link>
						</Typography>
					</Container>
				</Box>
			</Grid>
		</div>
	);
};

export default Login;
