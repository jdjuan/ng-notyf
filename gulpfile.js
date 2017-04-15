var gulp = require('gulp'),
    ngc = require('@angular/compiler-cli/src/main').main,
    rollup = require('gulp-rollup'),
    del = require('del'),
    runSequence = require('run-sequence');

gulp.task('ngc', function() {
  return ngc({
    project: 'src/tsconfig.es5.json'
  });
});

gulp.task('clean', function() {
    return del(['build', 'dist']);
});

gulp.task('rollup', function() {
  return gulp.src('./build/**/*.js')
    // transform the files here. 
    .pipe(rollup({
      // any option supported by Rollup can be set here. 
      entry: './build/index.js'
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('copy', function() {
  return gulp.src(['build/**/*', '!build/**/*.js'])
  .pipe(gulp.dest('dist'))
});

gulp.task('copyManifest', function() {
  return gulp.src(['src/package.json'])
  .pipe(gulp.dest('dist'))
});

gulp.task('rmBuild', function() {
  return del(['build']);
});

gulp.task('default', ['clean'], function() {
    runSequence('ngc', 'rollup', 'copy', 'copyManifest', 'rmBuild', function() {
        console.log('Compilation finished succesfully');
    });
});