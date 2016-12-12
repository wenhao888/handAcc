var gulp= require("gulp");
var sass = require('gulp-sass');


gulp.task("build-style", function() {
    gulp.src('./client/**/*-page.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./public/styles'))
});

