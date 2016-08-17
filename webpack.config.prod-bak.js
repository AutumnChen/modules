var webpack = require('webpack');
var htmlWebpackplugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	entry: 
		['./entry.js']
	,
	output: {
		path:'./dist',
		filename: 'bundle.js'
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
			}
		]
	},
	plugins: [
		new htmlWebpackplugin({
			template: './index.html'
		}),
		new ExtractTextPlugin( '[name].[hash:5].css')
	]
}