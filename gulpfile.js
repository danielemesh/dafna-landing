'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var del = require('del');

gulp.task('default', ['clean', 'sass:watch', 'sass']);

gulp.task('clean', function (cb) {
    del(['stylesheets/*.css'], cb);
});

gulp.task('sass', function () {
    gulp.src('./sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed', imagesPath: '/images'}).on('error', sass.logError))
        .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
        .pipe(gulp.dest('./stylesheets'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});