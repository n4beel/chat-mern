import React from "react";
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

const Login = (props) => {
	return (
		<div>
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
							Hello,
							<br />
							Welcome Back
						</Typography>

						<form
							onSubmit={props.handleSubmit}
							noValidate
							autoComplete="off"
							style={styles.form}
						>
							<div>
								<TextField
									id="email"
									label="Email"
									type="email"
									name="email"
									onChange={props.handleChange}
									error={!props.loginForm.email.isValid}
									helperText={props.loginForm.email.errorMessage}
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
									error={!props.loginForm.password.isValid}
									helperText={props.loginForm.password.errorMessage}
									style={styles.textField}
								/>
							</div>
							<div style={styles.formAction}>
								<div>
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
												Remember me
											</Typography>
										}
									/>
								</div>
								<div>
									<Typography
										component="p"
										color="primary"
										style={styles.forgotPass}
									>
										Forgot Password?
									</Typography>
								</div>
							</div>

							<div>
								<Button
									variant="contained"
									color="primary"
									type="submit"
									style={styles.button}
								>
									Login
								</Button>
							</div>
						</form>
						<Typography component="p" color="primary">
							Don't have an account?&nbsp;
							<Typography component="a" href="/signup" color="primary">
								Click Here
							</Typography>
						</Typography>
					</Container>
				</Box>
			</Grid>
		</div>
	);
};

export default Login;
