
var gulp = require("gulp");
var roleService = require("../../server/service/roleService");

gulp. task("seed-role", function(callBack) {
    roleService.create( {
        name:"user",
        comment:"normal end-user"
    }).then (function() {
        callBack(null);
    }, function (error) {
        callBack(error);
    })
});
