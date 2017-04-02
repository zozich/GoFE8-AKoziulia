var gulp = require('gulp');
var cleanCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var sequence = require('gulp-sequence');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var prefixer = require('gulp-autoprefixer');

gulp.task('build-css', ['clean-css'], function () {
    return gulp.src(['src/lib/**/*.css', 'src/scss/main.scss'])
        .pipe(concat('styles.css'))
        .pipe(sass())
        .pipe(prefixer({
            browsers: ['ie >= 8', 'Firefox >= 5', 'Opera >= 15']
        }))
        .pipe(gulp.dest('dist/css'))
        .pipe(cleanCss())
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('dist/css'))
});

gulp.task('copy-crossbrowser-fix', function () {
    return gulp.src('src/fix/**')
        .pipe(gulp.dest('dist/fix'));
});

gulp.task('build-js', ['clean-js'], function () {
    return gulp.src(['src/lib/es5shim/*.js', 'src/lib/jquery/*.js', 'src/lib/**/*.js', 'src/js/*.js'])
        .pipe(concat('script.js'))
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

gulp.task('prepare-images', function () {
    return gulp.src('src/img/**/**')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('copy-fonts', function () {
    return gulp.src('src/fonts/**/**')
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('watch', function () {
    gulp.watch('src/scss/**/*.scss', ['build-css']);
    gulp.watch('src/js/**/*.js', ['build-js']);
});

gulp.task('default', function (cb) {
    sequence('clean', ['build-css', 'build-js', 'prepare-images', 'copy-fonts', 'copy-crossbrowser-fix'])(cb);
});