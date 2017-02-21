var userService = require("../user/userService");
var stringHelp = require("../../service/help/stringHelp");
var logger = require("../logging/logService").getLogger("loginService");
var ResourceNotFoundException = require("../../exception").ResourceNotFoundException;
var InvalidTokenException = require("../../exception").InvalidTokenException;

function login(req, res, credential) {
    credential= credential || {};
    var email = credential.email || "";
    var password = credential.password || "";
    return userService
        .getUserByEmail(email)
        .then(function(user) {
           return new Promise(function(resolve, reject) {
               if (!user) {
                   var message=stringHelp.format("can't find user with email {0}", email);
                   logger.error(message);

                   reject(new ResourceNotFoundException(message));
               } else {
                   resolve(user);
               }
           })
        })
        .then(function(user) {
            return new Promise(function (resolve, reject) {
                if (user.password === password) {
                    var token = createToken(user);
                    req.session.token= token;                      //store token in session
                    res.cookie("token" , JSON.stringify(token));   //store token into cookie
                    resolve(user);
                } else {
                    var message= stringHelp.format("invalid token from user with email {0}", email);
                    logger.error(message);

                    reject(new InvalidTokenException(message))
                }
            });
        })
}

function updateToken(req, res, user) {
    var token = createToken(user);
    req.session.token= token;                      //update token in session
    res.cookie("token" , JSON.stringify(token));   //update token into cookie
}

function logoff(req, res) {
    req.session.token= {};                      //clear token in session
    res.cookie("token" , JSON.stringify({}));   //clear token into cookie
}

function createToken(user) {
    return {
        id: user.id,
        email: user.email,
        firstName: user.firstName
    }
}

module.exports ={
    login: login,
    logoff:logoff,
    updateToken:updateToken
};