var Sequelize = require("sequelize");
var sequelize = require("../service/db/sequelize");

function defineModel() {
    var Role = sequelize.define('Role', {
        name: Sequelize.STRING,
        comment: Sequelize.TEXT
    }, {
        timestamps: false,
        tableName: 'Role'
    });

    return Role;
}

module.exports= {
    "defineModel": defineModel
};

