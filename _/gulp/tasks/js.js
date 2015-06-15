//---------------------------------
//
//  Lib dependencies handled thru browserify:
//  Ex: npm install --save-dev jquery
//  var $ = require('jquery'); in your script file
//
//---------------------------------

var gulp = require('gulp'),
  livereload = require('gulp-livereload'),
  browserify = require('gulp-browserify'),
  sourcemaps = require('gulp-sourcemaps'),
  srcs = require('../srcs');

gulp.task('js', function() {
  return gulp.src(srcs.js.main)
    .pipe(browserify({
      debug: true
    }))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('js'))
    .pipe(livereload());
});