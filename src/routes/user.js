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

module.exports = router;
