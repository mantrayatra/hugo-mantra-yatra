'use strict';

var gulp = require('gulp');
var del = require('del');

var outputDir = 'static';

gulp.task('clean:static', function() {
  return del([`${outputDir}/**/*`]);
});

gulp.task('copy:js', ['clean:static'], function() {
  var files = [
    'node_modules/firebase/firebase-app.js',
    'node_modules/firebase/firebase-auth.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/owl.carousel/dist/owl.carousel.min.js'
  ];

  return gulp.src(files)
     .pipe(gulp.dest(`${outputDir}/js`))
});

gulp.task('copy:css-font-awesome', ['clean:static'], function() {
  return gulp.src('node_modules/font-awesome/**/*')
     .pipe(gulp.dest(`${outputDir}/css/font-awesome`))
});

gulp.task('copy:css', ['clean:static', 'copy:css-font-awesome'], function() {
  var files = [
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
    'node_modules/owl.carousel/dist/assets/owl.carousel.min.css',
    'node_modules/owl.carousel/dist/assets/owl.theme.default.min.css',
  ];

  return gulp.src(files)
     .pipe(gulp.dest(`${outputDir}/css`))
});

gulp.task('copy:src', ['clean:static'], function() {
    return gulp.src('src-static/**/*')
       .pipe(gulp.dest(outputDir));
})

gulp.task('copy', ['copy:src', 'copy:js', 'copy:css']);

gulp.task('default', ['copy']);
