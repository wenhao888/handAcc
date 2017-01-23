var express = require('express');
var newProductService = require("../service/product/newProductService");
var router = express.Router();
var emailService= require("../service/email/emailService");

router.get('/', function(req, res, next) {
    var newProducts= newProductService.getNewProducts();
    res.render('home/home', { title: 'Express', layout:false, newProducts: newProducts});
});


module.exports = router;