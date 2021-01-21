const router = require("express").Router();

const user = require("./user");
const BASE_URL = "/api";

// API
router.use(`${BASE_URL}/user`, user);

module.exports = router;
