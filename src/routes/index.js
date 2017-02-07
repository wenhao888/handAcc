var express = require('express');
var router = express.Router();
var home = require("./home");
var user = require("./user");
var product = require("./product");
var policy= require("./policy");
var api   = require("./api");

/* GET home page. */
router.use("/", home);
router.use("/users", user);
router.use("/products",product);
router.use("/policy", policy);
router.use("/api", api);

module.exports = router;
