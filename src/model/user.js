var Sequelize = require("sequelize");
var sequelize = require("../service/db/sequelize");

function defineModel() {
    var User = sequelize.define('User', {
        email:     {type: Sequelize.STRING, allowNull: false, unique:true},
        password:  {type: Sequelize.STRING, allowNull: false},
        firstName: {type: Sequelize.STRING, allowNull: true},
        lastName:  {type: Sequelize.STRING, allowNull: true},
        phone:     {type: Sequelize.STRING, allowNull: true},
    }, {
        tableName: 'User'
    });

    return User;
}

module.exports= {
    "defineModel": defineModel
};

