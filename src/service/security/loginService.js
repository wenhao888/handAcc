var userService = require("../user/userService");
var stringHelp = require("../../service/help/stringHelp");
var logger = require("../logging/logService").getLogger("loginService");
var ResourceNotFoundException = require("../../exception").ResourceNotFoundException;
var InvalidTokenException = require("../../exception").InvalidTokenException;

function login(email, password) {
    email = email || "";
    password = password || "";
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
                    resolve(user);

                } else {
                    var message= stringHelp.format("valid token from user with email {0}", email);
                    logger.error(message);

                    reject(new InvalidTokenException(message))
                }
            });
        })
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
    createToken:createToken
};