var express = require('express');
var productService = require("../service/product/productService");
var router = express.Router();


router.get('/login', function(req, res, next) {
  res.render('user/login', {layout:'layout/general'});
});

router.get("/registration", function(req, res, next) {
  res.render('user/registration', {layout:'layout/general'});
});

router.post("/registration", function(req, res, next) {
  res.redirect("registration-confirm");
});


router.get("/registration-confirm", function(req, res, next) {
  res.render("user/registration-confirm",{layout:'layout/general'});
});

module.exports = router;
