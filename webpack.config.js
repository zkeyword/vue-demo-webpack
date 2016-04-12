'use strict'

var webpack           = require('webpack'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
    isProduction      = process.env.NODE_ENV === 'production' ? true : false,
    version           = '?v=' + ( new Date().getTime() );

module.exports = {
	entry : __dirname  + '/src/main.js',
    output: {
        path: __dirname  + '/dist',
        filename: 'main.js'
    },
    resolve: {
        extensions: ['', '.js', '.vue','.less'] //设置require或import的时候可以不需要带后缀
    },
    //模块
    module: {
        loaders: [
            {
                //处理js
                test: /\.js$/,
                exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
                loader: 'babel'
            },{
                //处理vue
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                //剥离图片
                test: /\.(woff|woff2|eot|ttf|svg|png|jpg|gif)(\?.*$|$)/,  
                exclude: '/\/dist/',
				loader: 'file-loader?name=img/[hash:8].[name].[ext]' + version
			}
            /*
            { 
                test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,  
                exclude: '/\/dist/',
				loader: 'url-loader?name=img/[hash:8].[name].[ext]' + version
            },
			{
                //剥离图片
				test: /\.png$|\.jpg$|\.gif$/, 
                exclude: '/\/dist/',
				loader: 'file-loader?name=img/[hash:8].[name].[ext]' + version
			}*/
        ]
    },
    //处理VUE
    vue:{
        loaders:{
            js: 'babel',
            css:ExtractTextPlugin.extract('vue-style-loader', 'css-loader'),
            less:ExtractTextPlugin.extract('vue-style-loader', 'css-loader!less-loader')
        }
    },
	//处理js
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
	//剥离css
    plugins: [
        new ExtractTextPlugin('style.css')
    ]
};

if( isProduction ){
	module.exports.plugins = (module.exports.plugins).concat([
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
}else{
	module.exports.devtool = '#source-map'
}