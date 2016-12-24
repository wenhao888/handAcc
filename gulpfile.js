var gulp = require("gulp");
require("./gulp/build-js");
require("./gulp/test-js");


gulp.task("build",["build-js"]);
