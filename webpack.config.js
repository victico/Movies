const path = require('path');
// const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports ={
	entry: {
		app: path.resolve(__dirname,'src/js/index.js'),
	},
	mode: 'development',
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: 'js/[name].js',
	},
	devServer: {
		hot: true,
		open: true,
		port: 9000,
		overlay: true,
		compress:true
	},
	module: {
		rules:[
			{
				test: /\.css$/,
				use: [
					'style-loader',
 					'css-loader'
				]
			},
			{
				test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webp$/,
				type: 'asset/resource',
				use: {
					loader: 'file-loader',
					options: {
						limit: 90000000,
					}
				}
			},
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname,'index.html')
		}),
	]
}