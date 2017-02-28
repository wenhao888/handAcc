var express = require('express');
var newProductService = require("../service/product/newProductService");
var router = express.Router();
var emailService= require("../service/email/emailService");
var subscribeService = require("../service/subscribe/subscribeService");

router.get('/', function(req, res, next) {
    var newProducts= newProductService.getNewProducts();
    res.render('home/home', { title: 'Express', layout:false, newProducts: newProducts});
});

router.get('/subscribe',function (req,res,next) {
    res.render('email/subscribe', {layout:'layout/general'});
});

router.get('/subscribeEmail',function (req,res,next) {
    res.render('subscribe/subscribeEmail', {layout:'layout/general'});
});

module.exports = router;