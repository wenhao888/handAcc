
var gulp = require("gulp");
var roleService = require("../../src/service/roleService");

gulp. task("seed-role", function(callBack) {
    var roles = [{
        name:"user",
        comment:"normal end-user"
    }, {
        name:"admin",
        comment:"handacc administrator"
    }];

    roleService.bulkCreate(roles).then (function(role) {
        callBack(null);
    }, function (error) {
        callBack(error);
    })
});
