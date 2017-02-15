/**
 * validate a user when creating a user in th backend
 *  we reject after finding one error because error happens only when user hack our fond-end and bypass our
 *    validators for the browser
 */
var ValidationException=require("../../exception").ValidationException;
var stringHelp = require("../help/stringHelp");

var _userService = null;

function validate(user) {
    user = user || {};

    return new Promise(function(resolve, reject) {
        if (stringHelp.isBlank(user.email)) {
            reject(new ValidationException("email can not be blank"));
            return;
        }

        if (stringHelp.isBlank(user.password)) {
            reject(new ValidationException("password can not be blank"));
            return;
        }

        if (stringHelp.isBlank(user.firstName)) {
            reject(new ValidationException("firstName can not be blank"));
            return;
        }

        _userService.getUserByEmail(user.email).then(function (user) {
            if (!user) {
                resolve();

            } else {
               reject(new ValidationException("email already exists in our system"))
            }

        }, function(error) {
            reject(error);
        })
    });
}

function setUserService(userService) {
    _userService = userService;
}

module.exports = {
    validate: validate,
    setUserService: setUserService
};