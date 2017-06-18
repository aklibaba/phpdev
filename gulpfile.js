const gulp = require('gulp');
const babel = require('gulp-babel');
const watch = require('gulp-watch');

gulp.task('scripts', () =>
  gulp.src('src/main.js')
    .pipe(babel({
      presets: ['es2015', 'stage-0'],
      // plugins: ['transform-runtime']
    }))
    .pipe(gulp.dest('public'))
);

gulp.task('watch', ['scripts'], function () {
  gulp.watch('src/*.js', ['scripts']);
});