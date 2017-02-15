var models= require("../../models");
var User= models.User;
var stringHelp = require("../help/stringHelp");
var logger = require("../logging/logService").getLogger("userService");
var InternalException = require("../../exception").InternalException;
var createValidator=require("./createUserValidator");

var userService = {
    getUserByEmail:getUserByEmail,
    createUser: createUser,
    getUserById: getUserById
};

createValidator.setUserService(userService);

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
    return createValidator
        .validate(user)
        .then(function() {
           return new Promise(function(resolve, reject) {
               User.create(user).then(function(user){
                   resolve(user);

               }, function (error) {
                   logger.error("failed to create user", error);

                   reject(new InternalException(error.message));
               })
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
    id = id || 0;
    return new Promise(function(resolve, reject) {
        User.findById(id).then(function(result){
            resolve(result);
        }, function (error) {
            var message = stringHelp.format("failed to get user for id", id);
            logger.error(message, error);

            reject(new InternalException(message));        })
    });
}


module.exports = userService;