var validator = require('validator');


function validateEmail(value) {
   return validator.isEmail(value);
}

function validatePhone(value){
    var pattern = /^(([0-9]+)|\([0-9]+\))(-[0-9]+)*$/;
    return pattern.test(value);
}


function validateContact (value) {
    return validateEmail(value) || validatePhone(value);
}

module.exports = {
    validateContact: validateContact
};