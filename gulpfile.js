/* global require */

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var mainBowerFiles = require('main-bower-files');
var sassLint = require('gulp-sass-lint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('eslint', function() {
    return gulp.src(['gulpfile.js', './src/*.js*'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('bower-files-css', function() {
    return gulp.src(mainBowerFiles({filter: '**/*.css'}))
        .pipe(concat('_bower.css'))
        .pipe(gulp.dest('./_site/'));
});

gulp.task('sass-lint', function () {
    return gulp.src('./src/*.s+(a|c)ss')
        .pipe(sassLint())
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError());
});

gulp.task('sass', function() {
    return gulp.src('./src/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./_site/'));
});

gulp.task('copy', function() {
    return gulp
        .src('./src/*.+(js|jsx|html)')
        .pipe(gulp.dest('./_site/'));
});

gulp.task('lint', ['eslint', 'sass-lint']);

gulp.task('default', ['lint', 'bower-files-css', 'sass', 'copy']);

gulp.task('watch', function () {
    gulp.watch('src/**', ['default']);
});
