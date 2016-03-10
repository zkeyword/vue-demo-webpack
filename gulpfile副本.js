var gulp          = require('gulp'),
    fs            = require('fs'),
	webpack       = require('gulp-webpack'),
	webpackConfig = require('./webpack.config'),
	//rev           = require('gulp-rev'),
	//cssurl        = require('gulp-cssurl'),
	//revCollector  = require('gulp-rev-collector'),
    replace       = require('gulp-replace'),
	nodemon       = require('gulp-nodemon'),
    svgSprite     = require("gulp-svg-sprites"),
	path          = {
						dev: './src/',
						dist: './dist/'
					};
                    
gulp.task('svg', function () {
    gulp.src(path.dev + '/img/*.svg')
        .pipe(svgSprite({
            selector: "icon-%f",
            cssFile: 'sprite.less',
            svgPath: 'sprite.svg',
            //preview: false,
            templates: {
                css: fs.readFileSync(path.dev + "less/spriteTpl.css", "utf-8")
            },
            svg:{
                sprite: 'sprite.svg'
            }
        }))
        .pipe(gulp.dest(path.dev + "less/sprite"));
});

gulp.task('copySvg', function(){
    gulp.src(path.dev + "less/sprite/sprite.svg")
        .pipe(gulp.dest(path.dist))
});

//js
gulp.task('js', function () {
    var str =  'url(sprite.svg?v=' + ( new Date().getTime() ) + ')';
    gulp.src(path.dev)
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(path.dist))
        .pipe(replace(/url\(\[object Object\]\)/g, str))
        .pipe(gulp.dest(path.dist))
});

//mock数据
gulp.task('server', function(){
	nodemon({
		script: 'index.js'
	});
});

//默认任务
gulp.task('default', ['svg', 'copySvg', 'js',  'server'], function(){

    gulp.watch(path.dev + '/**/*', ['js']);
    gulp.watch(path.dev + 'less/sprite/sprite.svg', ['copySvg']);

    
});
