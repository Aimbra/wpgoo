const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')

module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',

				options: {
					presets: ['env']
				}
			},
			{
				test: /\.(scss|css)$/,

				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: 'css-loader',

						options: {
							sourceMap: true
						}
					},
					{
						loader: 'sass-loader',

						options: {
							sourceMap: true
						}
					}
				]
			}
		]
	},

	plugins: [
		new UglifyJSPlugin(),
		new MiniCssExtractPlugin({ filename: 'app.min.css', path: path.resolve(__dirname, 'dist') })
	],

	entry: './src/index.js',

	output: {
		filename: './dist/bundle.js',
		path: path.resolve(__dirname, 'dist')
	},

	mode: 'production'
};
