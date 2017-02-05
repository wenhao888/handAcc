var gulp = require("gulp");

require("./seed-role");


gulp.task("seed", ["seed-roles"], function () {
   console.log("seeding is done");
});
