
var Sequelize  = require("sequelize");

var dbUrl = require("../../config/configureService").db.POSTGRES_URL;


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



module.exports = sequelize;