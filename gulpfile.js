var gulp = require("gulp");
require("./gulp/build-js");
require("./gulp/build-style");


gulp.task("build",["build-js","build-style"]);