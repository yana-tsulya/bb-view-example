var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');

gulp.task('default', ['watch']);

gulp.task('build-js-dev', function () {
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/underscore/underscore-min.js',
        'node_modules/backbone/backbone-min.js',
        'node_modules/requirejs/require.js',
        'js/app/**/*.js',
        'js/app-init.js'
    ])
        .pipe(concat('build.js'))
        .pipe(gulp.dest('build/js'));
});

gulp.task('build-js-prod', function () {
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/requirejs/require.js',
        'node_modules/underscore/underscore-min.js',
        'node_modules/backbone/backbone-min.js',
        'js/app/**/*.js',
        'js/app-init.js'

    ])
        .pipe(concat('build.js'))
        .pipe(minify({
            ext:{
                src:'-debug.js',
                min:'.min.js'
            }
        }))
        .pipe(gulp.dest('build/js'));
});

gulp.task('watch', function(){
    gulp.watch('js/**/*.js', ['build-js-dev']);
});
