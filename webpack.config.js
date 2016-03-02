'use strict'

var webpack           = require('webpack'),
	plugins           = [],
	ExtractTextPlugin = require("extract-text-webpack-plugin"),
	vueLoader         = {
		js: 'babel',
		css: ExtractTextPlugin.extract("vue-style!css"),
        less: ExtractTextPlugin.extract("vue-style!css!less-loader")
	}

module.exports = {
	entry : './src/main.js',
	output : {
		path : __dirname + "/dest/",
		filename : "main.js"
	},
	resolve: {
        extensions: ['', '.js', '.vue', '.less'] //设置require或import的时候可以不需要带后缀
    },
	module : {
		noParse : /es6-promise\.js$/,
		loaders : [{
				test : /\.vue$/,
				loader : 'vue'
			},{
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", 'css-loader!autoprefixer!less-loader')
            },{
				test : /\.js$/,
				exclude : /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
				loader : 'babel'
			}
		]
	},
	babel : {
		presets : ['es2015'],
		plugins : ['transform-runtime']
	},
    plugins: [ //编译的时候所执行的插件数组
        new ExtractTextPlugin('./style.css')
        //new HtmlWebpackPlugin('./html/[name].html')
    ]
}


if (process.env.NODE_ENV === 'production') {
    module.exports.vue.loaders = vueLoader;
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ]);
} else {
	module.exports.devtool = '#source-map'
}