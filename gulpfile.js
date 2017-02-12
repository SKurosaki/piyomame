var gulp = require('gulp');
var sass = require('gulp-sass');

// sass
gulp.task('sass', function () {
  gulp.src( 'sass/**/*.scss' )
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest( 'css' ));
});

// watch
gulp.task('watch', function () {
    gulp.watch('sass/**/*.scss', ['sass']);
});