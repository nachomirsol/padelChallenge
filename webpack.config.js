const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

const ABSOLUTE_PATHS = {
	components: path.resolve(__dirname, 'src/components/'),
	pages: path.resolve(__dirname, 'src/pages/'),
	routes: path.resolve(__dirname, 'src/routes/'),
	store: path.resolve(__dirname, 'src/store/'),
	api: path.resolve(__dirname, 'src/api/'),
	hooks: path.resolve(__dirname, 'src/hooks/'),
	lib: path.resolve(__dirname, 'src/lib/'),
	utils: path.resolve(__dirname, 'src/utils/'),
	models: path.resolve(__dirname, 'src/models/'),
	constants: path.resolve(__dirname, 'src/constants/'),
	styles: path.resolve(__dirname, 'src/styles/'),
	assets: path.resolve(__dirname, 'src/assets/'),
};

module.exports = (env, { mode }) => {
	const isProduction = mode === 'production';
	return {
		entry: './src/index.tsx',
		output: {
			filename: isProduction ? '[name].[contenthash].js' : 'main.js',
			path: path.resolve(__dirname, 'build'),
		},
		resolve: {
			extensions: ['.ts', '.tsx', '.js'],
			alias: ABSOLUTE_PATHS,
		},
		devServer: {
			historyApiFallback: true,
		},
		plugins: [
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({
				template: './src/index.html',
			}),
			new Dotenv(),
			new MiniCssExtractPlugin({
				filename: '[name].css',
			}),
		],
		module: {
			rules: [
				{
					test: /\.s[ac]ss$/i,
					use: ['style-loader', 'css-loader', 'sass-loader'],
				},
				{
					test: /\.(ts|js)x?$/,
					exclude: /node_modules/,
					use: [
						{
							loader: 'babel-loader',
						},
					],
				},
				{
					test: /\.(?:ico|png|jpg|jpeg|ico)$/i,
					type: 'asset/resource',
				},
			],
		},
	};
};
