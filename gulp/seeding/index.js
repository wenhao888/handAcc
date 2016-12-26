var gulp = require("gulp");

require("./seed-role");


gulp.task("seed", ["seed-role"], function () {
   console.log("seeding is done");
});
