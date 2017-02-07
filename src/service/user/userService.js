var model= require("../../model");
var User= model.User;


/**
 * search user by its email
 *
 * @param email
 * @returns {Promise}
 */
function searUserByEmail(email) {
    var email = (email || "").toLowerCase().trim();

    return new Promise(function(resolve, reject) {
        User.findOne({
            where: {
                email: email
            }
        }).then(function (results) {
            resolve(results);

        }, function(error) {
            reject(error);
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
    searUserByEmail:searUserByEmail,
    createUser: createUser,
    getUserById: getUserById
};