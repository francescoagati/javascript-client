var gulp = require('gulp');
var gutil = require('gulp-util');
var coffee = require('gulp-coffee');
var ecstatic = require('ecstatic');
var http = require('http');

gulp.task('coffee', function() {
  gulp.src('./src/*.coffee')
    .pipe(coffee({bare: false}).on('error', gutil.log))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('default', function(){

  http.createServer(
    ecstatic({ root: __dirname})
  ).listen(8080);

  console.log('Listening on :8080');
  gulp.watch('**/*.coffee', function(){
    gulp.run('coffee');
  });

});