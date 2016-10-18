var gulp    = require('gulp');
var $       = require('gulp-load-plugins')({ lazy: false });

gulp.task('default', function(done) {
    $.nodemon({ script: 'server/app.js', ext: 'js' });
    gulp.watch('client/**/*.js');
});