var express = require('express');
var userService = require("../service/user/userService");
var router = express.Router();
var logger = require("../service/logging/logService").getLogger("user");

router.get('/login', function(req, res, next) {
  res.render('user/login', {layout:'layout/general'});
});


router.post('/login', function(req, res, next) {
  res.redirect("/products/list")
});



router.get("/registration", function(req, res, next) {
  res.render('user/registration', {layout:'layout/general'});
});

router.post("/registration", function(req, res, next) {
  var user= {};
  user.email=req.body.email;
  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;
  user.password = req.body.password;
  user.phone    = req.body.phone;

  userService.createUser(user).then(function () {
    res.redirect("registration-confirm");

  }, function(error) {
    logger.error("failed to create user", error);
     next(error);
  });

});


router.get("/registration-confirm", function(req, res, next) {
  res.render("user/registration-confirm",{layout:'layout/general'});
});

module.exports = router;
