var express = require('express');
var emailService = require("../service/email/emailService");
var router = express.Router();

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('user/login', {layout:'layout/general'});
});

router.get("/registration", function(req, res, next) {
  res.render('user/registration', {layout:'layout/general'});
});

router.get("/contactUs", function(req, res, next) {
  res.render('user/contactUs', {layout:'layout/general'});
});

router.post("/contactUs", function(req, res, next) {
    var request = {
        user: "",
        email:"",
        phone:"",
        message:""

    };
    request.user  = req.body.user  || "";
    request.email = req.body.email || "";
    request.phone = req.body.phone || "";
    request.message = req.body.message || "";

    emailService.sendContactUsEmail(request);


    res.redirect("contactUs-confirm");
});

router.get("/contactUs-confirm", function(req, res, next) {
    res.render('user/contactUs-confirm', {layout:'layout/general'});
});

router.get("/issue", function(req, res, next) {
    res.render('user/issue', {layout:'layout/general'});
});

module.exports = router;
