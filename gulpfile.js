const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

gulp.task('cleanDist', function () {
  return gulp.src('dist', { allowEmpty: true, read: false })
    .pipe(clean());
});

gulp.task('compileSass', function () {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('concatScripts', function () {
  return gulp.src('src/**/*.js')
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('optimizeImages', function () {
  return gulp.src('src/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});

gulp.task('build', gulp.series('cleanDist', 'compileSass', 'concatScripts', 'optimizeImages'));

gulp.task('dev', gulp.series('build', function () {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch('src/scss/**/*.scss', gulp.series('compileSass'));
  gulp.watch('src/**/*.js', gulp.series('concatScripts'));
  gulp.watch('dist/**/*.html').on('change', browserSync.reload);
}));

gulp.task('default', gulp.series('dev'));
