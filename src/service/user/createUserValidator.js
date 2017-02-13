/**
 * validate a user when creating a user in th backend
 *  we reject after finding one error because error happens only when user hack our fond-end and bypass our
 *    validators for the browser
 */
var ValidationException=require("../../exception").ValidationException;
var userService=require("./userService");
var stringHelp = require("../help/stringHelp");


function validate(user) {
    user = user || {};

    return new Promise(function(resolve, reject) {
        if (stringHelp.isBlank(user.email)) {
            reject(new ValidationException("email can not be blank"));
        }

        if (stringHelp.isBlank(user.password)) {
            reject(new ValidationException("password can not be blank"));
        }

        userService.getUserByEmail(user.email).then(function() {
            resolve(null);
        }, function(error) {
            reject(error);
        });
    });
}


module.exports = {
    validate: validate
};