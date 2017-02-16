var models= require("../../models");
var User= models.User;
var stringHelp = require("../help/stringHelp");
var logger = require("../logging/logService").getLogger("userService");
var InternalException = require("../../exception").InternalException;
var ResourceNotFoundException = require("../../exception").ResourceNotFoundException;
var createValidator = require("./createUserValidator");
var updateValidator = require("./updateUserValidator");

var userService = {
    getUserByEmail:getUserByEmail,
    createUser: createUser,
    getUserById: getUserById,
    updateUser:updateUser
};

createValidator.setUserService(userService);
updateValidator.setUserService(userService);

/**
 * search user by its email
 *
 * @param email
 * @returns {Promise}
 */
function getUserByEmail(email, skipId) {
    var email = (email || "").toLowerCase().trim();
    skipId = skipId || 0;

    if (stringHelp.isBlank(email)) {
        return Promise.resolve(null);
    }

    return new Promise(function(resolve, reject) {
        User.findOne({
            where: {
                email: email,
                id: {
                    $ne: skipId
                }
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
 * update an existing user
 *
 * @param user
 * @returns {*}
 */
function updateUser(user) {
    if (!user || !user.id) {
        return Promise.reject(new ResourceNotFoundException("can't find a null user"));
    }

    return updateValidator
        .validate(user)
        .then(function() {
            return new Promise(function(resolve, reject) {
                User.upate(user, {
                    where: {
                        id: user.id
                    }
                }).then(function(user){
                    resolve(user);

                }, function (error) {
                    var message= stringHelp.format("failed to update user {0}", user.id);
                    logger.error(message, error);

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