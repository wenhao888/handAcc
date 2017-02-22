
var Sequelize  = require("sequelize");

var dbUrl = require("../config/configureService").db.POSTGRES_URL;


var sequelize  = new Sequelize(dbUrl, {
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    "ssl":true,
    "dialectOptions":{
        "ssl":{
            "require":true
        }
    }
});




/**
 * export db for other module to use
 */
module.exports = {
    sequelize: sequelize,
    Role: require("./Role").defineModel(sequelize),
    User: require("./User").defineModel(sequelize),
    Subscribe: require("./Subscribe").defineModel(sequelize),
};

