/**
 * validate a user when creating/updating a usr
 */

var stringHelp = require("../help/stringHelp");

function validate(user) {
    user = user || {};
    var result = {
        isValid: true,
        errors: []
    };

    if (stringHelp.isBlank(user.email)) {
        result.isValid =false;
        result.errors.push("email can not be blank");
    }

    if (stringHelp.isBlank(user.password)) {
        result.isValid =false;
        result.errors.push("password can not be blank");
    }

    return result;
}


module.exports = {
    validate: validate
};