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
					},
	svgSprite	  = require('gulp-svg-sprite'),
	svgSpriteCnf  = {
		shape				: {
			dimension		: {			// Set maximum dimensions 
				maxWidth	: 32,
				maxHeight	: 32
			},
			spacing			: {			// Add padding 
				padding		: 10
			}
		},
		mode				: {
			css             : {     // Activate the «css» mode
				prefix      : '.icon-%s',
				dimensions  : "-size",
				sprite      : "svg/sprite.svg",
				render      : {
					less    : true  // Activate CSS output (with default options)
				}
			}
		}
	}
gulp.task('svg', function () {
	
	gulp.src(path.dev + 'img/*.svg')
		.pipe(svgSprite(svgSpriteCnf))
		.pipe(gulp.dest(path.dev + 'less'));
		
	gulp.src(path.dev + 'less/css/svg/*.svg')
		.pipe(gulp.dest(path.dist+'svg'));
});

//js
gulp.task('js', function () {
  gulp.src(path.dev)
    .pipe(webpack(webpackConfig))
	//.pipe(minifyJs())
    .pipe(gulp.dest(path.dist));
});

//mock数据
gulp.task('server', function(){
	nodemon({
		script: 'index.js'
	});
});

//默认任务
gulp.task('default', ['svg', 'js', 'server'], function(){

    gulp.watch(path.dev+'/**/*', ['js']);
	
});
