var express = require('express');
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
    res.redirect("contactUs-confirm");
});

router.get("/contactUs-confirm", function(req, res, next) {
    res.render('user/contactUs-confirm', {layout:'layout/general'});
});

router.get("/issue", function(req, res, next) {
    res.render('user/issue', {layout:'layout/general'});
});

module.exports = router;
