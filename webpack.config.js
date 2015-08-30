var config = require('config')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var isDev = process.env.NODE_ENV === 'development' ? true : false
var devServer = {
	client: 'webpack-dev-server/client?' + config.get('staticFileUrl'),
	server: 'webpack/hot/only-dev-server'
}

module.exports = {
	devServer: {
		headers: { 'Access-Control-Allow-Origin': '*'},
		hot: true
	},
    entry: {
		app: isDev
			? [devServer.client, devServer.server, './src/js/client/app.js']
			: './src/js/client/app.js'
	},
	output: {
		path: __dirname + '/build',
		filename: "app.js",
		publicPath: config.get('staticFileUrl') + '/build'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ['react-hot', 'babel']
			},
			{
				test: /\.s?css$/,
				loader: isDev
					? 'style!css!postcss!sass'
					: ExtractTextPlugin.extract('style', 'css!postcss!sass')
			}
		],
		postcss: function() { return [autoprefixer] }
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin('style.css')
	]
}
