var gulp = require("gulp");
var browserify = require("browserify");
var gulpBrowserify  = require('gulp-browserify');
var source = require('vinyl-source-stream');
var transform = require('vinyl-transform');


const vendors = ['jquery', 'angular', 'angular-resource', 'angular-route'];


gulp.task('build:vendor', function () {
    const b = browserify({
        debug: false
    });

    vendors.forEach(function (lib) {
        b.require(lib);
    });

    b.bundle()
        .pipe(gulp.src('vendor.js'))
        .pipe(gulp.dest('./public/javascripts'));
});


gulp.task("build:app", function () {
    gulp.src('./client/**/*-page.js')
        .pipe( gulpBrowserify ({
            insertGlobals: true,
            debug: false
        }))
        .on('prebundle', function (bundle) {
                vendors.forEach(function (lib) {
                    bundle.external(lib);
                })
            })
        .pipe(gulp.dest('./public/javascripts'));
});


gulp.task("build-js", ["build:vendor"], function () {
    console.log("build-js is done")
});