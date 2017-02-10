var Sequelize = require("sequelize");

function defineModel(sequelize) {
    var User = sequelize.define('User', {
        email:     {type: Sequelize.STRING, allowNull: false, unique:true},
        password:  {type: Sequelize.STRING, allowNull: false},
        firstName: {type: Sequelize.STRING, allowNull: false},
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

