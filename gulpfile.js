let gulp = require('gulp');
let browserSync = require('browser-sync').create();
let pkg = require('./package.json');

gulp.task('src', () => {
  return gulp.src([
    './node_modules/bootstrap/dist/**/*',
    '!./node_modules/bootstrap/dist/css/bootstrap-grid*',
    '!./node_modules/bootstrap/dist/css/bootstrap-reboot*'
  ])
  .pipe(gulp.dest('./vendor/bootstrap'))
})

gulp.task('jquery', () => {
  return gulp.src([
    './node_modules/jquery/dist/*',
    '!./node_modules/jquery/dist/core.js'
  ])
  .pipe(gulp.dest('./vendor/jquery'))
})

gulp.task('browserSync', () => {
  return browserSync.init({
    server: {
      baseDir: "./"
    }
  })
})

gulp.task('default', gulp.parallel('src', 'jquery', 'browserSync'));