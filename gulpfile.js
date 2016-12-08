'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var maps = require('gulp-sourcemaps');

// 'gulp concatScripts'
gulp.task("concatScripts", function() {
  // Gets the readable array of files to be concatenated.
  // Note: the order of the files in the array does matter, so order them accordingly.
  return gulp.src([
    'js.jquery.js',
    'js/sticky/jquery.sticky.js',
    'js/main'])
  .pipe(maps.init())      // Runs the maps.init method for concat
  .pipe(concat("app.js")) // Concatenates the files in the array to a file called app.js
  .pipe(maps.write('../maps')) // Current directory, relevant to the gulp.dest() directory (js in this case)
  .pipe(gulp.dest("js")); // Name of the folder the new app.js file will be saved to.
});

// 'gulp minifyScripts'
// concatScripts added as a dependency for minifyScrips
gulp.task("minifyScripts", ["concatScripts"], function() {
  return gulp.src("js/app.js")         // Gets the file to be minified
    .pipe(uglify())             // Calls the uglify method
    .pipe(rename('app.min.js')) // Rename the minified file to app.min.js
    .pipe(gulp.dest('js'));     // Sets the destination folder
});

// 'gulp compileSass'
gulp.task('compileSass', function() {
   return gulp.src("scss/application.scss") // Gets the file to be compiled
    .pipe(maps.init())              // Runs the maps.init method for sass
    .pipe(sass())                   // Compile source into css
    .pipe(maps.write('./'))         // Current directory, relevant to the gulp.dest() directory (css in this case)
    .pipe(gulp.dest('css'));        // Save compiled file into the css folder
});

//'gulp build'
// Getting an array of dependencies to run
gulp.task("build", ['minifyScripts', 'compileSass']);

// 'gulp'
gulp.task("default", ["build"]);
