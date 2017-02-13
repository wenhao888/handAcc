var models= require("../../models");
var User= models.User;
var stringHelp = require("../help/stringHelp");
var logger = require("../logging/logService").getLogger("userService");
var InternalException = require("../../exception").InternalException;
var validator=require("./createUserValidator");

/**
 * search user by its email
 *
 * @param email
 * @returns {Promise}
 */
function getUserByEmail(email) {
    var email = (email || "").toLowerCase().trim();
    if (stringHelp.isBlank(email)) {
        return Promise.resolve(null);
    }

    return new Promise(function(resolve, reject) {
        User.findOne({
            where: {
                email: email
            }
        }).then(function (result) {
            resolve(result);

        }, function(error) {
            var message = stringHelp.format("failure in getting email {0}", email);
            logger.error(message, error);

            reject(new InternalException(message));
        })
    });
}

/**
 * create a user
 *
 * @param user
 * @returns {Promise}
 */
function createUser(user) {
    user.email = (user.email || "").toLowerCase().trim();
    return new Promise(function(resolve, reject) {
        User.create(user).then(function(result){
            resolve(result);
        }, function (error) {
            reject(error);
        })
    });
}


/**
 * find a user by id
 *
 * @param id
 * @returns {Promise}
 */
function getUserById(id) {
    return new Promise(function(resolve, reject) {
        User.findById(id).then(function(result){
            resolve(result);
        }, function (error) {
            reject(error);
        })
    });
}


module.exports = {
    getUserByEmail:getUserByEmail,
    createUser: createUser,
    getUserById: getUserById
};