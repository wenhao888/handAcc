var gulp = require("gulp");
var models = require("../src/models");


gulp.task("db-schema", function(callBack) {
    models.sequelize.sync({force:true}).then(function() {
        console.log("db schema was created successfully");
        callBack(null);
    }, function(error) {
      console.log("error in creating db schema", error);
        callBack(error);
    })
});