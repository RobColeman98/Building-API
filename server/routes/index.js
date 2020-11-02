const chirps = require("./chirps");
const express = require("express");

const router = express.Router();
router.use("/chirps", chirps);

module.exports = router;
