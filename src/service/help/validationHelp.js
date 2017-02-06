var validator = require('validator');


function validateEmail(email) {
    return validator.isEmail(email);
}

function validatePhone(phone){
    var pattern = /^(([0-9]+)|\([0-9]+\))(-[0-9]+)*$/;
    return pattern.test(phone);
}


function validateContact(contact) {
    contact = contact || "";
    return validateEmail(contact) || validatePhone(contact);
}


module.exports = {
    validateEmail:validateEmail,
    validatePhone: validatePhone,
    validateContact: validateContact
};