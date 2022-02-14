const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = () => {
	return {
		entry: './src/index.tsx',
		resolve: {
			extensions: ['.ts', '.tsx', '.js'],
			alias: {
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
			},
		},
		devServer: {
			historyApiFallback: true,
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: './src/index.html',
			}),
			new Dotenv(),
		],
		module: {
			rules: [
				{
					test: /\.s[ac]ss$/i,
					use: [
						// Creates `style` nodes from JS strings
						'style-loader',
						// Translates CSS into CommonJS
						'css-loader',
						// Compiles Sass to CSS
						'sass-loader',
					],
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
