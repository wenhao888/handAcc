
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

    //the page before the contactUs page
    var referer=req.body.referer||"";

    emailService.sendContactUsEmail(request);
    res.redirect("contactUs-confirm?closeUrl=" + referer);
});

router.get("/contactUs-confirm", function(req, res, next) {
    var closeUrl=req.query.closeUrl || "";
    res.render("shared/confirm/confirm",
        {   layout: 'layout/general',
            title:"Contact Us Confirmation",
            message:"Thank you for contacting us. Your message has been successfully forwarded to our Customer Support.",
            closeUrl:closeUrl});
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

    //the page before the issue page
    var referer=req.body.referer||"";

    emailService.sendProductIssueEmail(request);
    res.redirect("issue-confirm?closeUrl="+referer);
});


router.get("/issue-confirm", function(req, res, next) {
    var closeUrl=req.query.closeUrl || "";
    res.render("shared/confirm/confirm",
        {   layout: 'layout/general',
            title:" Reporting Product Issue Confirmation",
            message:"Thank you for reporting the issue to us. Your message has been successfully forwarded to our Customer Support.",
            closeUrl:closeUrl});
});

module.exports = router;
