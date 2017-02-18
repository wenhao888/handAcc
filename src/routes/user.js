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
    var email = req.body.email;
    var password = req.body.password;

    loginService.login(email, password)
        .then(function (user) {
            req.session.token= loginService.createToken(user);
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
    req.session.token= loginService.createToken({});
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
    res.render("user/registration-confirm", {layout: 'layout/general'});
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

    //return the page before edit profile
    var referer=req.body.referer;

    userService.updateUser(user).then(function () {
        req.session.token= loginService.createToken(user);
        var url=stringHelp.format("{0}?closeUrl={1}", "profile-confirm", referer);
        res.redirect(url);

    }, function (error) {
        next(error);
    });
});

/**
 * show page when profile update succeed
 */
router.get("/profile-confirm", function (req, res, next) {
    var closeUrl=req.query.closeUrl || "";
    res.render("user/updateProfile-confirm", {layout: 'layout/general', closeUrl:closeUrl});
});


module.exports = router;
