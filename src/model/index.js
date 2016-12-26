var db = require("./sequelize");

var Sequelize= db.Sequelize;
var sequelize = db.sequelize;

/**
 * include all data models here
 */
var Role = require("./role").define(Sequelize, sequelize);



/**
 * export db for other module to use
 */
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    Role     : Role
};

