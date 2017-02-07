var Sequelize = require("sequelize");

function defineModel(sequelize) {
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

