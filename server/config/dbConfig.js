var Sequelize  = require("sequelize");
var dbUrl      = process.env.CLEARDB_DATABASE_URL;

if (!dbUrl) {
    dbUrl = require("../env/devEnv").CLEARDB_DATABASE_URL;
}

var sequelize  = new Sequelize(dbUrl);


module.exports =  {
    url: dbUrl,
    sequelize: sequelize
};