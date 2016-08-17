var webpack = require('webpack');
var path = require('path');
var htmlWebpackplugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	context: path.join( __dirname, './src'),
	entry:{
		app: './index.jsx'
	},
	output: {
		path:'./dist',
		filename: '[name].js'
	},
	module: {
		loaders: [
		    {
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loaders: ['react-hot','babel']
			},
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader?modules&camelCase&importLoaders=1&localIdentName=[local]__[hash:base64:5]!less'
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css?modules&importLoaders=1&localIdentName=[local]__[hash:base64:5]'
			}
			
		]
	},
	resolve:{
		extensions: ['', '.js','.jsx']
	},

	
	// resolveLoader: {
	// 	modulesDirectories: path.resolve(__dirname, '../node_modules')
	// },

	plugins: [
	 	new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
        }),
		new htmlWebpackplugin({
			template: './index.html'
		}),
		new webpack.NoErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
        stats: { chunks:false },
        contentBase: './src',
        hot: true
    }
}