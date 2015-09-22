var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var isDev = process.env.NODE_ENV === 'development' ? true : false

module.exports = {
	entry: {
		app: './src/js/client/app.js'
	},
	output: {
		path: __dirname + '/build',
		filename: "app.js",
		publicPath: 'build'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: [ /node_modules/, /downloads/ ],
				loaders: ['react-hot', 'babel']
			},
			{
				test: /\.s?css$/,
				exclude: /downloads/,
				loader: isDev
					? 'style!css!postcss!sass'
					: ExtractTextPlugin.extract('style', 'css!postcss!sass')
			},
			{
				test: /downloads/,
				loader: 'file?context=src/js/app/lessons&name=/[path][name].zip!zip-it'
			}
		],
		postcss: function() { return [autoprefixer] }
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	plugins: [
		new ExtractTextPlugin('style.css')
	]
}
