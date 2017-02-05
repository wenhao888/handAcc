var gulp = require("gulp");
require("../src/model");
var sequelize = require("../src/service/db/sequelize");


gulp.task("db-schema", function(callBack) {
    sequelize.sync({force:true}).then(function() {
        console.log("db schema was created successfully");
        callBack(null);
    }, function(error) {
      console.log("error in creating db schema", error);
        callBack(error);
    })
});