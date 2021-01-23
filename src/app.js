/**
 * Required External Modules
 */
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const helmet = require("helmet");

const userRouter = require("./user/user.controller");
const { errorHandler } = require("../middleware/error.middleware");
const { notFoundHandler } = require("../middleware/not-found.middleware");
require("dotenv").config();

/**
 * App Variables
 */
const PORT = process.env.PORT || "3000";
const app = express();

/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(cookieParser());
// API
app.use("/api/user", userRouter);
// ERROR MIDDLEWARE
app.use(errorHandler);
app.use(notFoundHandler);

/**
 * Server Activation
 */
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;
