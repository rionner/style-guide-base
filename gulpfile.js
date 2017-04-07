'use strict';

var gulp = require('gulp');

var del = require('del');
var sass = require('gulp-sass');

gulp.task('default', ['clean', 'sass']);

gulp.task('clean', function() {
  del(['public/stylesheets/main.css']);
});

gulp.task('sass', function(cb) {
  gulp.src(['public/stylesheets/scss/main.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('heroku:production', ['sass'], function() {
  console.log('Hey Heroku');
});
