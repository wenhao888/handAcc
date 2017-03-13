var express = require('express');
var userService = require("../service/user/userService");
var loginService = require("../service/security/loginService");
var router = express.Router();
var stringHelp = require("../service/help/stringHelp");

/**
 * get login page
 */
router.get('/login', function (req, res, next) {
    res.render('user/login', {layout: 'layout/general'});
});


/**
 * user login
 */
router.post('/login', function (req, res, next) {
    var credential = {
        email: req.body.email,
        password: req.body.password
    };

    loginService.login(req, res, credential)
        .then(function (user) {
            res.redirect("/products/list");

        }, function (error) {
            res.redirect("login-failure");
        });
});


/**
 * show page when login failed
 */
router.get("/login-failure", function (req, res, end) {
    res.render("user/login-failure", {layout: 'layout/general'});

});


/**
 * execute log off
 */
router.get("/logoff", function (req, res, end) {
    loginService.logoff(req, res);
    res.redirect("/");
});


/**
 * get new user registration page
 */
router.get("/registration", function (req, res, next) {
    res.render('user/userDetail', {layout: 'layout/general', user: {}});
});

/**
 * post to create new user
 */
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


/**
 * show page when user register succeed
 */
router.get("/registration-confirm", function (req, res, next) {
    res.render("shared/confirm/confirm",
        {   layout: 'layout/general',
            title:"Registration Confirmation",
            message:"You account has been successfully created. Please login using your email.",
            closeUrl:"/"
        });
});

/**
 *  get page to update user profile
 *
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


/**
 * post to update user profile
 */
router.post("/profile", function(req,res,next) {
    var user = {};
    user.id=req.session.token.id;
    user.email = req.body.email;
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.password = req.body.password;
    user.phone = req.body.phone;

    userService.updateUser(user).then(function () {
        loginService.updateToken(req, res, user);
        res.redirect("profile-confirm");

    }, function (error) {
        next(error);
    });
});

/**
 * show page when profile update succeed
 */
router.get("/profile-confirm", function (req, res, next) {
    res.render("shared/confirm/confirm",
        {   layout: 'layout/general',
            title:"Update Profile Confirmation",
            message:"You profile has been successfully updated."
        });
});

module.exports = router;
