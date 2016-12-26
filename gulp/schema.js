var gulp = require("gulp");
var db=require("../src/model");


gulp.task("db-schema", function(callBack) {
    db.sequelize.sync({force:true}).then(function() {
        console.log("db schema was created successfully");
        callBack(null);
    }, function(error) {
      console.log("error in creating db schema", error);
        callBack(error);
    })
});