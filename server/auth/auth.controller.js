var express = require("express");
var router = express.Router();
const authService = require("./auth.services");
const response = require("../utils/response");

router.post("/signup", async function (req, res) {
	try {
		const { name, email, password } = req.body;

		if (!name.trim()) {
			response.onFail(res, "Oops, something went wrong");
		}
		if (!email.trim()) {
			response.onFail(res, "Oops, something went wrong");
		}
		if (!password.trim()) {
			response.onFail(res, "Oops, something went wrong");
		}

		const result = await authService.signup(req);
		response.onSuccess(res, "Signup Successfull", result);
	} catch (e) {
		console.log(e);
		response.onFail(res, "Signup Failed", e);
	}
});

router.post("/login", async function (req, res) {
	try {
		const { email, password } = req.body;

		if (!email.trim()) {
			response.onFail(res, "Oops, something went wrong");
		}
		if (!password.trim()) {
			response.onFail(res, "Oops, something went wrong");
		}

		const result = await authService.login(req);
		response.onSuccess(res, "Login Successfull", result);
	} catch (e) {
		console.log(e);
		response.onFail(res, "Login Failed", e);
	}
});

module.exports = router;
