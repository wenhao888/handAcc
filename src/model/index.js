
/**
 * include all data models here
 */
var Role = require("./role").defineModel();
var User = require("./user").defineModel();


/**
 * export db for other module to use
 */
module.exports = {
    Role: Role,
    User: User
};

