var express = require('express');
var stringHelp = require("../service/help/stringHelp");
var userService = require("../service/user/userService");
var logger= require("../service/logging/logService").getLogger("api");
var subscribeService = require("../service/subscribe/subscribeService");
var emailService = require("../service/email/emailService");
var router = express.Router();

router.post("/users/email/_search", function(req, res, next) {
    var email = req.body.query.email;
    var skipId = req.body.query.skipId || -1;

    userService.getUserByEmail(email).then(function(user) {
        user = user || {};
        if (user.id == skipId) {
            user = {};
        }

        res.end(JSON.stringify(user));

    }, function (error) {
        logger.error(error);

        next(error);
    });

});

router.post('/subscribe',function (req,res,next) {
    var email = req.body.email;
    subscribeService.subscribeEmail(email).then(function (data) {
        res.redirect("/subscribe");
    },function (err) {
        res.send(err);
    });
});

router.get('/unsubscribe/:email',function (req,res,next) {
   var email = req.params.email;
   subscribeService.unSubscribe(email).then(function (data) {
       res.render('subscribe/unsubscribe', {layout:'layout/general'});
   },function (err) {
       res.send(err);
   });
});

router.post('/sendSubscribeEmail',function (req,res,next) {
    subscribeService.getAllUser().then(function (users) {
        req.users = users;
        return next();
    },function (err) {
        res.send(err);
    });
    // var message = req.body.message;
    // emailService.sendSubscribeEmail(email);
},function (req,res,next) {
    var users = req.users;
    console.log(users.length);
    for(var i=0;i<users.length;i++){
        emailService.sendSubscribeEmail(users[i].dataValues.email);
    }
    return next();
},function (req,res,next) {
    res.send('successful send email');
});

router.get('/getAllSubscribeUser',function (req,res,next) {

});

module.exports = router;
