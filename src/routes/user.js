var express = require('express');
var emailService = require("../service/email/emailService");
var productService = require("../service/product/productService");
var router = express.Router();

router.get('/login', function(req, res, next) {
  res.render('user/login', {layout:'layout/general'});
});

router.get("/registration", function(req, res, next) {
  res.render('user/registration', {layout:'layout/general'});
});


module.exports = router;
