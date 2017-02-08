var express = require('express');
var stringHelp = require("../service/help/stringHelp");
var userService = require("../service/user/userService");
var logger= require("../service/logging/logService").getLogger("api");

var router = express.Router();

router.post("/users/email/_search", function(req, res, next) {
    var email = req.body.query.email;
    userService.getUserByEmail(email).then(function(user) {
        res.end(JSON.stringify(user||{}));

    }, function (error) {
        logger.error(error);
        next(error);
    });

});

module.exports = router;
