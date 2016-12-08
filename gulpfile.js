'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');

// 'gulp concatScripts'
gulp.task("concatScripts", function() {
  // Gets the readable array of files to be concatenated.
  // Note: the order of the files in the array does matter, so order them accordingly.
  gulp.src([
    'js.jquery.js',
    'js/sticky/jquery.sticky.js',
    'js/main'])
  .pipe(concat("app.js")) // Concatenates the files in the array to a file called app.js
  .pipe(gulp.dest("js")); // Name of the folder the new app.js file will be saved to.
});

gulp.task("default", ["hello"], function() {
  console.log("Default Task!");
});
