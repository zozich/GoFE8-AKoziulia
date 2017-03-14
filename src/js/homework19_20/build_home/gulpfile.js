var gulp = require('gulp');
var cleanCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('build-css', function () {
    return gulp.src(['src/lib/**/*.css', 'src/css/*.css'])
        .pipe(concat('styles.css'))
        .pipe(sass())
        .pipe(gulp.dest('dist/styles'))
        .pipe(cleanCss())
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('dist/css'))
});

gulp.task('build-js', function () {
    return gulp.src(['src/lib/**/*.js', 'src/js/*.js'])
        .pipe(concat('script.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(uglify())
        .pipe(rename('script.min.js'))
        .pipe(gulp.dest('dist/js'))
});

gulp.task('clean', function () {
    return gulp.src('dist')
        .pipe(clean());
});

gulp.task('copy-images', function () {
    return gulp.src('src/img/**/**')
        .pipe(gulp.dest('dist/img'))
});

gulp.task('copy-fonts', function () {
    return gulp.src('src/fonts/**/**')
        .pipe(gulp.dest('dist/fonts'))
});

gulp.task('default', ['clean', 'build-css', 'build-js', 'copy-images', 'copy-fonts']);