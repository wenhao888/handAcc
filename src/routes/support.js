
var express = require('express');
var emailService = require("../service/email/emailService");
var productService = require("../service/product/productService");
var router = express.Router();


router.get("/contactUs", function(req, res, next) {
    res.render('support/contactUs', {layout:'layout/general'});
});

router.post("/contactUs", function(req, res, next) {
    var request = {
        user: "",
        contact:"",
        message:""

    };
    request.user  = req.body.user  || "";
    request.contact = req.body.contact || "";
    request.message = req.body.message || "";

    emailService.sendContactUsEmail(request);
    res.redirect("contactUs-confirm");
});

router.get("/contactUs-confirm", function(req, res, next) {
    res.render('support/contactUs-confirm', {layout:'layout/general'});
});

router.get("/issue", function(req, res, next) {
    var products = productService.getProductsForDropDown();
    res.render('support/issue', {layout:'layout/general', products: products});
});

router.post("/issue", function(req, res, next) {
    var request = {
        user: "",
        contact:"",
        product:"",
        priority:"",
        message:""
    };

    request.user  = req.body.user  || "";
    request.contact = req.body.contact || "";
    request.product = req.body.product || "";
    request.priority = req.body.priority || "";
    request.message = req.body.message || "";

    emailService.sendProductIssueEmail(request);
    res.redirect("issue-confirm");
});


router.get("/issue-confirm", function(req, res, next) {
    res.render('support/issue-confirm', {layout:'layout/general'});
});

module.exports = router;
