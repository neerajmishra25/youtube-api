const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const videoRoutes = require("./routes/videoRoutes");
require("dotenv").config();
// Connect to DB
connectDB();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(videoRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(`Server running in ${process.env.PORT} mode on port ${PORT}`)
);
