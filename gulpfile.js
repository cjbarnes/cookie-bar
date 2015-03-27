/* jshint node: true  */
'use strict';

var gulp         = require('gulp');
var notify       = require('gulp-notify');
var plumber      = require('gulp-plumber');
var rename       = require('gulp-rename');
var sourcemaps   = require('gulp-sourcemaps');
var uglify       = require('gulp-uglify');

gulp.task('build', function() {
  return gulp.src('./cookie-bar.js')
    // Error handling: notify on error.
    .pipe(plumber(notify.onError({
      title: 'Error compiling cookie-bar.js',
      message: "Scripts Error: <%= error.message %>",
      sound: 'Pop'
    })))
    .pipe(sourcemaps.init())
    // Minify (keeping the @license comment).
    .pipe(uglify({
      preserveComments: 'some'
    }))
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('.'));
});

gulp.task('default', ['build'], function() {

  gulp.watch('cookie-bar.js', ['build']);

});
