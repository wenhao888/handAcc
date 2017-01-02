var express = require('express');
var router = express.Router();
var home = require("./home");
var user = require("./user");
var product = require("./product");


/* GET home page. */
router.use("/", home);
router.use("/users", user);
router.use("/products",product);

module.exports = router;
