var webpack = require('webpack');
var htmlWebpackplugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
module.exports = {
	context: path.join( __dirname, './src'),
	entry:{
			app: './index.jsx',
			lib: [
				'react',
				'react-dom',
				'react-router'
			]
	},
	output: {
		path:'./dist',
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.less$/,
				loader: ExtractTextPlugin.extract('style-loader','css-loader?modules&camelCase&importLoaders=1&localIdentName=[local]__[hash:base64:5]!less')
			},
			{
				test: /\.css/,
				loader: ExtractTextPlugin.extract('style-loader','css?modules&importLoaders=1&localIdentName=[local]__[hash:base64:5]')
			},
			{
				test: /\.(js|jsx)$/,
				loaders: ['react-hot', 'babel-loader']
			}
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('lib', 'lib.[hash:5].js'),
		new htmlWebpackplugin({
			template: './index.html'
		}),
		new ExtractTextPlugin( '[name].[hash:5].css')
	]
}