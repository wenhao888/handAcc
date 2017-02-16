var ValidationException=require("../../exception").ValidationException;
var ResourceNotFoundException = require("../../exception").ResourceNotFoundException;
var stringHelp = require("../help/stringHelp");

var _userService = null;

function validate(user) {
    user = user || {};
    if (!user.id) {
        return Promise.reject(new ResourceNotFoundException("can't find a null user"));
    }

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

        _userService.getUserByEmail(user.email, user.id).then(function (user) {
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