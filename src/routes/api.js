var express = require('express');
var stringHelp = require("../service/help/stringHelp");
var userService = require("../service/user/userService");
var logger= require("../service/logging/logService").getLogger("api");
var subscribeService = require("../service/subscribe/subscribeService");

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
        res.send(data);
    },function (err) {
        res.send(err);
    });
});

module.exports = router;
