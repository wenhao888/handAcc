var express = require('express');
var router = express.Router();
var home = require("./home");
var user = require("./user");
var product = require("./product");
var policy= require("./policy");

/* GET home page. */
router.use("/", home);
router.use("/users", user);
router.use("/products",product);
router.use("/policy", policy);

module.exports = router;
