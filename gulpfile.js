(function(gulp, gulpLoadPlugins) {
  var $ = gulpLoadPlugins({
    pattern: '*',
    lazy: true,
    rename: {
      'gulp-less': 'less'
    }
  });
  gulp.task('less', function() {
    return gulp.src('./less/**/main.less')
      .pipe($.less())
      .pipe(gulp.dest('app/css'));
  });
})(require('gulp'), require('gulp-load-plugins'))
