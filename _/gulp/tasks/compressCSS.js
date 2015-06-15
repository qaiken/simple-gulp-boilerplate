var gulp      = require('gulp'),
    config    = require('../srcs'),
    minifyCSS = require('gulp-minify-css'),
    combineMQ = require('gulp-combine-mq');

gulp.task('compressCSS', ['sass'], function() {
  return gulp.src(config.sass.css)
    .pipe(combineMQ())
    .pipe(minifyCSS({advanced:false}))
    .pipe(gulp.dest(config.sass.cssDir));
});