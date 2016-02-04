var gulp          = require('gulp'),
	webpack       = require('gulp-webpack'),
	webpackConfig = require('./webpack.config'),
	path          = {
						dev: 'src/',
						dest: 'dest/'
					}

//js
gulp.task('js', function () {
  gulp.src(path.dev)
    .pipe(webpack(webpackConfig))
	//.pipe(minifyJs())
    .pipe(gulp.dest(path.dest));
});


//默认任务
gulp.task('default', ['js'], function(){

    gulp.watch(path.dev+'/**', ['js']);
	
});
