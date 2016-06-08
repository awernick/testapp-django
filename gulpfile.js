var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', ['watch']);

gulp.task('watch', function() {
    gulp.watch('polls/static/polls/sass/*.scss', ['compile-sass'])
})

gulp.task('compile-sass', function() {
    gulp.src('polls/static/polls/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('polls/static/polls'))
})
