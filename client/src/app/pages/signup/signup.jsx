import React, { useState } from "react";
import { styles } from "../../../assets/jss/authStyles";
import {
	Grid,
	Box,
	Container,
	TextField,
	Button,
	FormControlLabel,
	Checkbox,
	Typography,
} from "@material-ui/core";
import Vector from "./../../../assets/images/vector.svg";

const Signup = (props) => {
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
					style={styles.leftItem}
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
					style={styles.rightItem}
				>
					<Container maxWidth="sm" style={styles.formContainer}>
						<Typography
							variant="h3"
							component="h3"
							className="heading"
							style={styles.formHeading}
						>
							Create an account
						</Typography>

						<form
							onSubmit={props.handleSubmit}
							noValidate
							autoComplete="off"
							style={styles.form}
						>
							<div>
								<TextField
									id="name"
									label="Name"
									type="text"
									name="name"
									onChange={props.handleChange}
									style={styles.textField}
								/>
							</div>
							<div>
								<TextField
									id="email"
									label="Email"
									type="email"
									name="email"
									onChange={props.handleChange}
									error={!props.signupForm.email.isValid}
									helperText={props.signupForm.email.errorMessage}
									style={styles.textField}
								/>
							</div>
							<div>
								<TextField
									id="password"
									label="Password"
									type="password"
									name="password"
									onChange={props.handleChange}
									error={!props.signupForm.password.isValid}
									helperText={props.signupForm.password.errorMessage}
									style={styles.textField}
								/>
							</div>
							<div style={styles.formAction}>
								<FormControlLabel
									control={
										<Checkbox
											checked={props.checked.checked}
											onChange={props.handleCheckboxChange}
											name="checked"
											color="primary"
										/>
									}
									label={
										<Typography component="p" color="primary">
											I agree with the&nbsp;
											<Typography
												component="a"
												color="primary"
												href="https://signup.com/Terms"
												rel="noopener noreferrer"
												target="_blank"
											>
												Terms and Conditions
											</Typography>
										</Typography>
									}
								/>
							</div>
							<div>
								<Button
									variant="contained"
									color="primary"
									type="submit"
									style={styles.button}
								>
									Sign Up
								</Button>
							</div>
						</form>
						<Typography component="p" color="primary">
							Already have an account?&nbsp;
							<Typography component="a" color="primary" href="/login">
								Click Here
							</Typography>
						</Typography>
					</Container>
				</Box>
			</Grid>
		</div>
	);
};

export default Signup;
