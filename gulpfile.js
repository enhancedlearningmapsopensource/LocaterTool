// @ts-nocheck
'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');
var tar = require('gulp-tar');
var gzip = require('gulp-gzip');
var clean = require('gulp-clean');
var babel = require('gulp-babel');
//var bundle = require('gulp-bundle-assets');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jslint = require('gulp-jslint');
var gutil = require('gulp-util');
var cachebust = require('gulp-cache-bust');
var hasher = require('gulp-hasher');
//var imagemin = require('gulp-imagemin');
//var pngquant = require('imagemin-pngquant');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var minify = require('gulp-minify');

gulp.task('default', ['browser-sync'], function () {
    //Default task.
});

gulp.task('browser-sync', ['nodemon'], function () {
    // @ts-ignore
    browserSync.init(null, {
        proxy: "http://localhost:9090",
        files: ["public/**/*.*"],
        browser: "firefox",
        port: 3000,
    });
});
gulp.task('nodemon', ['scripts'], function (cb) {

    var started = false;

    return nodemon({
        script: 'app.js'
    }).on('start', function () {
        // to avoid nodemon being started multiple times
        if (!started) {
            cb();
            started = true;
        }
    });
});

gulp.task('scripts', function () {
    //Check the order in which the dependencies are added.
    gulp.src(['./public/js/external/jquery.min.js', './public/js/external/jquery-ui.min.js',
        './public/js/external/can.jquery-all.js', './public/js/external/pikaday.js',
        './public/js/external/interact.js', './public/js/external/tabletocsv.js',
        './public/js/util/locater.js', './public/js/controller/rosterController.js',
        './public/js/model/rosterModel.js'])
        .pipe(concat('roster-bundle.js'))
        .pipe(jslint({
            predef: ['a_global'],
            global: ['a_global']
        }))
        // .pipe(babel({
        //     presets: ['es2015'],
        //     compact: false
        // }))
        // .pipe(gulp.dest('./public/js/'))
        // .pipe(uglify({ mangle: false }))
        // .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
        .pipe(gulp.dest('./public/js/bundles/'));
    gulp.src('./public/js/bundles/roster-bundle.js')
        .pipe(minify({}))
        .pipe(gulp.dest('./public/js/bundles/'));
    gulp.src(['./public/js/external/jquery.min.js', './public/js/external/jquery-ui.min.js',
        './public/js/external/can.jquery-all.js', './public/js/external/modernizr-2.6.2.js',
        './public/js/external/tinymce/tinymce.min.js', './public/js/util/loadScript.js',
        './public/js/util/uiCommon.js', './public/js/util/testUtil.js',
        './public/js/controller/testController.js', './public/js/model/testModel.js'])
        .pipe(concat('testbuilder-bundle.js'))
        .pipe(jslint({
            predef: ['a_global'],
            global: ['a_global']
        }))
        .pipe(gulp.dest('./public/js/bundles/'));
    gulp.src('./public/js/bundles/testbuilder-bundle.js')
        .pipe(minify({}))
        .pipe(gulp.dest('./public/js/bundles/'));
    gulp.src(['./public/js/external/jquery.min.js', './public/js/external/jquery-ui.min.js',
        './public/js/external/can.jquery-all.js', './public/js/external/modernizr-2.6.2.js',
        './public/js/util/uiCommon.js', './public/js/util/testTakerUtil.js',
        './public/js/controller/testTakerController.js', './public/js/model/testTakerModel.js'])
        .pipe(concat('testtaker-bundle.js'))
        .pipe(jslint({
            predef: ['a_global'],
            global: ['a_global']
        }))
        .pipe(gulp.dest('./public/js/bundles/'));
    gulp.src('./public/js/bundles/testtaker-bundle.js')
        .pipe(minify({}))
        .pipe(gulp.dest('./public/js/bundles/'));
    gulp.src('./public/*.ejs')
        .pipe(cachebust({
            type: 'timestamp'
        }))
        .pipe(gulp.dest('./public/'));

});

gulp.task('images', function () {
    // return gulp.src('./public/images/**/*')
    //     .pipe(imagemin({
    //         progressive: true,
    //         svgoPlugins: [{ removeViewBox: false }],
    //         use: [pngquant()]
    //     }))
    //     .pipe(gulp.dest('./public/images/'))
    //     .pipe(hasher());
});

gulp.task('styles', ['images'], function () {
    return gulp.src('./public/css/style.less')
        .pipe(autoprefixer())
        .pipe(cachebust({
            assetRoot: ('./public'),
            hashes: hasher.hashes     // since images task has run we can pass in the hashes object
        }))
        .pipe(gulp.dest('./public/css/styles/'))
        .pipe(hasher())
        .pipe(minifyCss())
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('./public/css/styles/'))
        .pipe(hasher());
});
gulp.task('moveapp', ['movenodemodules'], function () {
    gulp.src(['./app/**'])
        .pipe(gulp.dest('./target/app'));
});
gulp.task('moveconfig', ['movenodemodules'], function () {
    gulp.src('./config/**')
        .pipe(gulp.dest('./target/config'));
});

gulp.task('movenodemodules', ['movefiles'], function () {
    gulp.src('./node-modules/**')
        .pipe(gulp.dest('./target/node-modules'));
});
gulp.task('movefiles', ['movepublic'], function () {
    gulp.src(['./app.js', './package.json', './package-lock.json', 'README.md'])
        .pipe(gulp.dest('./target/'));
});
gulp.task('movepublic', ['movescripts'], function () {
    gulp.src('./public/**')
        .pipe(gulp.dest('./target/public'));
});
gulp.task('movescripts', ['movetmp'], function () {
    gulp.src('./scripts/**')
        .pipe(gulp.dest('./target/scripts'));
});
gulp.task('movetmp', function () {
    gulp.src('./scripts/**')
        .pipe(gulp.dest('./target/tmp'));
});
gulp.task('createtar', ['build'], function () {
    var option, i = process.argv.indexOf("--deploy");
    if (i > -1) {
        option = "-" + process.argv[i + 1];
    } else {
        option = "";
    }
    gulp.src(['./target/**'])
        .pipe(tar('elm-locater' + option + '.tar'))
        .pipe(gzip())
        .pipe(gulp.dest('./'));
    // './node-modules/**', './public/**', './README.md', './scripts/**', './tmp/**'])
});
gulp.task('build', ['moveapp']);
gulp.task('zip', ['createtar']);
//Using gulp-concat instead of bundle.
// gulp.task('bundle', function () {
//     return gulp.src('./bundle.config.js')
//         .pipe(bundle())
//         .pipe(bundle.results('./')) // arg is destination of bundle.result.json
//         .pipe(gulp.dest('./public'));
// });