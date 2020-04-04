const express = require("express");
const router = express.Router();

router.use("/auth", require("./auth/auth.controller"))

// router.use("/chat", require("./chat/chat.controller"))


module.exports = router