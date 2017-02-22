var Sequelize = require("sequelize");

function defineModel(sequelize) {
    var Subscribe = sequelize.define('email_subscribe', {
        id:        {type:Sequelize.INTEGER,primaryKey:true, autoIncrement:true},
        email:     {type: Sequelize.STRING, allowNull: false, unique:true}
    }, {
        tableName: 'email_subscribe'
    });

    return Subscribe;
}

module.exports= {
    "defineModel": defineModel
};

