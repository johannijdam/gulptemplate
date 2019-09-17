var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
	return gulp.src('./assets/styles/scss/**/*.scss')
	  .pipe(sass().on('error', sass.logError))
	  .pipe(gulp.dest('./assets/styles/css'));
});

gulp.task('sass:watch', function () {
	gulp.watch('./assets/styles/scss/**/*.scss', gulp.series('sass'));
});