var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var clean = require('gulp-clean');

gulp.task('build-css', function () {
    return gulp.src(['src/lib/**/*.css', 'src/css/*.css'])
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('dist/styles'))
        .pipe(minifyCss())
        .pipe(gulp.dest('dist/styles'))
});

gulp.task('build-js', function () {
    return gulp.src(['src/lib/**/*.js', 'src/script/*.js'])
        .pipe(concat('script.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});

gulp.task('clean', function () {
    return gulp.src('dist')
        .pipe(clean());
});

gulp.task('default', ['clean', 'build-css', 'build-js']);