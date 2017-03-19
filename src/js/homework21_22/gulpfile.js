var gulp = require('gulp');
var cleanCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var rename = require('gulp-rename');
var sequence = require('gulp-sequence');
var babel = require('gulp-babel');

gulp.task('build-css', ['clean-css'], function () {
    return gulp.src(['src/css/reset.css', 'src/lib/**/*.css', 'src/css/styles.css'])
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(cleanCss())
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('dist/css'))
});

gulp.task('build-js', ['clean-js'], function () {
    return gulp.src(['src/lib/**/*.js', 'src/js/test_module.js', 'src/js/script.js'])
        .pipe(concat('script.js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist/js'))
        .pipe(uglify())
        .pipe(rename('script.min.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('clean-js', function () {
    return gulp.src('dist/js')
        .pipe(clean());
});

gulp.task('clean-css', function () {
    return gulp.src('dist/css')
        .pipe(clean());
});

gulp.task('clean', function () {
    return gulp.src('dist')
        .pipe(clean());
});

gulp.task('watch', function () {
    gulp.watch('src/css/**/*.css', ['build-css']);
    gulp.watch('src/js/**/*.js', ['build-js']);
});

gulp.task('default', function (cb) {
    sequence('clean', ['build-css', 'build-js'])(cb);
});