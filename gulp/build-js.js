var gulp = require("gulp");
var browserify  = require('gulp-browserify');

const vendors = ['jquery', 'angular', 'angular-resource', 'angular-route'];


gulp.task('build:vendor', function () {
    gulp.src('./client/vendor.js',{ read: false })
        .pipe( browserify ({
            insertGlobals: false,
            debug: false
        }))
        .on('prebundle', function (bundle) {
            vendors.forEach(function (lib) {
                bundle.require(lib, {expose: lib});
            })
        })
        .pipe(gulp.dest('./public/javascripts'));
});


gulp.task("build:app", function () {
    gulp.src('./client/**/*-page.js', { read: false })
        .pipe( browserify ({
            insertGlobals: false,
            debug: false
        }))
        .on('prebundle', function (bundle) {
                vendors.forEach(function (lib) {
                    bundle.external(lib);
                })
            })
        .pipe(gulp.dest('./public/javascripts'));
});


gulp.task("build-js", ["build:vendor","build:app"], function () {
    console.log("build-js is done")
});