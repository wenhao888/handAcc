var Sequelize  = require("sequelize");
var dbUrl      = process.env.DATABASE_URL;

if (!dbUrl) {
    dbUrl = require("../env/devEnv").DATABASE_URL;
}

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



module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};