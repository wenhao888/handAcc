var express = require('express');
var stringHelp = require("../service/help/stringHelp");
var userService = require("../service/user/userService");

var router = express.Router();

router.post("/user/email/_search", function(req, res, next) {
    var email = req.body.query.email;
    var user = userService.getUserByEmail(email) ;
    res.end(JSON.stringify(user));
});

module.exports = router;
