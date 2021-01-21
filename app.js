const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const app = express();
const port = process.env.PORT || "3000";

const controller = require("./controller");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", controller);

app.listen(port);
// app.listen(port, () => {
//   console.log(`Application is listening at port: ${port}`);
// });

module.exports = app;
