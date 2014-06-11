var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');

gulp.task('sass', function() {
  gulp.src('src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
});

gulp.task('watch', function() {
  gulp.watch('scss/*scss', ['sass']);
});

gulp.task('dist',function() {
  gulp.src('src/scss/lanes.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist'))
    .pipe(minifycss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'))
});

gulp.task('default', ['sass', 'watch']);