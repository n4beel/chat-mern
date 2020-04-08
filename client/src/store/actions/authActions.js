import {
	SIGNUP_SUCCESS,
	SIGNUP_ERROR,
	SIGNOUT_SUCCESS,
	LOGIN_SUCCESS,
	LOGIN_ERROR,
} from "../config/type";
import { baseUrl } from "../config/fetchConfig";

export const login = (creds) => {
	return async (dispatch) => {
		const data = {
			email: creds.email.value.trim(),
			password: creds.password.value.trim(),
		};
		try {
			const response = await fetch(baseUrl + "/auth/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			}).then((res) => res.json());
			response.responseCode >= 200 && response.responseCode < 300
				? dispatch({ type: LOGIN_SUCCESS, response })
				: dispatch({ type: LOGIN_ERROR, response });
		} catch (response) {
			console.log("error logging in");
		}
	};
};

export const signUp = (newUser) => {
	return async (dispatch) => {
		const data = {
			name: newUser.name.value.trim(),
			email: newUser.email.value.trim(),
			password: newUser.password.value.trim(),
		};
		try {
			const response = await fetch(baseUrl + "/auth/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			}).then((res) => res.json());
			response.responseCode >= 200 && response.responseCode < 300
				? dispatch({ type: SIGNUP_SUCCESS, response })
				: dispatch({ type: SIGNUP_ERROR, response });
		} catch (response) {
			console.log("error signing up");
		}
	};
};

export const signOut = () => (dispatch) => {
	dispatch({ type: SIGNOUT_SUCCESS });
};
