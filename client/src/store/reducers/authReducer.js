import {
	LOGIN_ERROR,
	LOGIN_SUCCESS,
	SIGNUP_ERROR,
	SIGNUP_SUCCESS,
	SIGNOUT_SUCCESS,
} from "../config/type";

const initState = {
	authError: null,
	auth: null,
	token: null,
};

const auth = (state = initState, action) => {
	switch (action.type) {
		case LOGIN_ERROR:
			return {
				...state,
				authError: action.response.result,
			};

		case LOGIN_SUCCESS:
			return {
				...state,
				authError: null,
				auth: action.response.result.getUser,
				token: action.response.result.token,
			};

		case SIGNOUT_SUCCESS:
			return {
				...state,
				auth: null,
				authError: null,
			};

		case SIGNUP_ERROR:
			// proper error message handling to be implemented
			alert(action.response.result);
			return {
				...state,
				auth: null,
				authError: action.response.result,
			};

		case SIGNUP_SUCCESS:
			return {
				...state,
				auth: action.response.result,
				authError: null,
			};

		default:
			return state;
	}
};

export default auth;
