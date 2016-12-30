var express = require('express');
var router = express.Router();
var home = require("./home");
var user = require("./user");


/* GET home page. */
router.use("/", home);
router.use("/user", user);

module.exports = router;
