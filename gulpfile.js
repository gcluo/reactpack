(function(gulp, gulpLoadPlugins) {
  var $ = gulpLoadPlugins({
    pattern: '*',
    lazy: true,
    rename: {
      'gulp-less': 'less'
    }
  });
  // gulp.task('less', function() {
  //   return gulp.src('./less/**/main.less')
  //     .pipe($.less())
  //     .pipe(gulp.dest('app/css'));
  // });
  gulp.task('scss', function({
    return gulp.src('./scss/docs.scss')
      .pipe($.scss({"bundleExec": true}))
      .pipe(gulp.dest('app/css'));
  }));
  gulp.task('cpassets', function() {
    return gulp.src('./app/assets/**/*.*')
      .pipe(gulp.dest('dist/assets'));
  });
  // gulp.task('watch', ['less'], function() {
  //   gulp.watch('./less/**/*.less', ['less']);
  // });
  gulp.task('watch', ['scss'], function() {
    gulp.watch('./scss/**/*.scss', ['scss']);
  });
})(require('gulp'), require('gulp-load-plugins'))
