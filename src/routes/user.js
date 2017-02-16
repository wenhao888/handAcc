var express = require('express');
var userService = require("../service/user/userService");
var loginService = require("../service/security/loginService");
var router = express.Router();

router.get('/login', function (req, res, next) {
    res.render('user/login', {layout: 'layout/general'});
});


router.post('/login', function (req, res, next) {
    var email = req.body.email;
    var password = req.body.password;

    loginService.login(email, password)
        .then(function (user) {
            var token = {
                id: user.id,
                firstName: user.firstName,
            };
            req.session.token = token;
            res.redirect("/products/list")


        }, function (error) {

            res.redirect("login-failure");
        });
});


router.get("/login-failure", function (req, res, end) {
    res.render("user/login-failure", {layout: 'layout/general'});

});

router.get("/logoff", function (req, res, end) {
    req.session.token = {};
    res.redirect("/");
});


router.get("/registration", function (req, res, next) {
    res.render('user/userDetail', {layout: 'layout/general', user: {}});
});

router.post("/registration", function (req, res, next) {
    var user = {};
    user.email = req.body.email;
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.password = req.body.password;
    user.phone = req.body.phone;

    userService.createUser(user).then(function () {
        res.redirect("registration-confirm");

    }, function (error) {
        next(error);
    });

});


router.get("/registration-confirm", function (req, res, next) {
    res.render("user/registration-confirm", {layout: 'layout/general'});
});

/**
 * profile menu is visible only when user has logged in
 */
router.get("/profile", function (req, res, next) {
    var id = req.session.token.id;

    userService.getUserById(id).then(function (user) {
        res.render('user/userDetail', {layout: 'layout/general', user: user});

    }, function (error) {
        next(error);
    })
});

module.exports = router;
