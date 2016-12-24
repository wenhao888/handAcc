
function define_model(Sequelize, sequelize) {
    var Role = sequelize.define('Role', {
        name: Sequelize.STRING,
        comment: Sequelize.TEXT
    }, {
        timestamps: false,
        tableName: 'Role'
    });
}

module.exports= {
    "define": define_model
};

