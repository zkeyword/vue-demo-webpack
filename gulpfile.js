var gulp          = require('gulp'),
	webpack       = require('gulp-webpack'),
	webpackConfig = require('./webpack.config'),
	rev           = require('gulp-rev'),
	cssurl        = require('gulp-cssurl'),
	revCollector  = require('gulp-rev-collector'),
	nodemon       = require('gulp-nodemon'),
	path          = {
						dev: './src/',
						dist: './dist/'
					}

//js
gulp.task('js', function () {
  gulp.src(path.dev)
    .pipe(webpack(webpackConfig))
	//.pipe(minifyJs())
    .pipe(gulp.dest(path.dist));
});

//mock数据
gulp.task('server', function(){
	//require('./index')
	nodemon({
		script: 'index.js'
	});
});

//默认任务
gulp.task('default', ['js', 'server'], function(){

    gulp.watch(path.dev+'/**', ['js']);
	
});
