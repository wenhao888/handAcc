var db = require("./sequelize");

var Sequelize= db.Sequelize;
var sequelize = db.sequelize;

/**
 * include all data models here
 */
require("./user").define(Sequelize, sequelize);



/**
 * export db for other module to use
 */
module.exports = db;

