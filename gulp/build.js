var gulp = require("gulp");
var browserify  = require('gulp-browserify');


gulp.task("build-js", function () {
    gulp.src('./src/views/**/*-page.js', { read: false })
        .pipe( browserify ({
            insertGlobals: true,
            debug: false
        }))
        .pipe(gulp.dest('./public/javascripts'));
});


gulp.task("build",["build-js"]);