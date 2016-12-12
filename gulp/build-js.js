var gulp= require("gulp");
var browserify = require('gulp-browserify');

gulp.task("build-js", function() {
    gulp.src('./client/**/*-page.js')
        .pipe(browserify({
            insertGlobals : true,
            debug : false
        }))
        .pipe(gulp.dest('./public/javascripts'))
});

