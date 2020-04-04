require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const mongoose = require("./config/db");
const db = mongoose.connection;
const cors = require("cors");
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 5000;

app.use('/',require("./controller"))


db.once("open", function () {
  console.log("Database Connected Successfully");
});

db.on("error", console.error.bind(console, "connection error:"));


app.listen(port, function() {
  console.log(`listening on *:${port}`);
});



io.on("connection", function (socket) {
  console.log("a user connected");
});

