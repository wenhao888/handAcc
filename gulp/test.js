var gulp = require("gulp");
var mocha = require("gulp-mocha");


gulp.task("mocha-test", function() {
    return gulp.src(['client/**/*.spec.js','library/**/*.spec.js','server/**/*.spec.js'], { read: false })
        .pipe(mocha({
            reporter: 'spec'
        }));
});

gulp.task("test", ["mocha-test"], function() {
    console.log("test is done")
});