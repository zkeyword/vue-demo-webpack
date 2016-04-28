var gulp          = require('gulp'),
	webpack       = require('webpack'),
	webpackStream = require('webpack-stream'),
	webpackConfig = require('./webpack.config'),
	nodemon       = require('gulp-nodemon'),
	path          = {
						dev: './src/',
						dist: './dist/'
					};

//js
gulp.task('js', function () {
    gulp.src(path.dev)
        .pipe( webpackStream(webpackConfig, webpack) )
        .pipe(gulp.dest(path.dist))
});

//mock数据
gulp.task('server', function(){
	nodemon({
		script: 'index.js'
	});
});

//默认任务
gulp.task('default', ['js',  'server'], function(){

    //gulp.watch(path.dev + '/**', ['js']);
    
});
