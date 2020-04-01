const path = require('path')	// 絶対パス補完
const HtmlWebPackPlugin = require('html-webpack-plugin')

const outputPath = path.resolve(__dirname, 'dist')

module.exports = {
	entry: './src/index.js',	// bundle対象の設定

	output: {
		filename: 'main.js',
		path: outputPath
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,	// reactの為にjsだけでなくjsxも対象とする
				exclude: /node_modules/,	// transpile対象外
				loader: "babel-loader"
			},
			{
				test: /\.css$/,	// cssファイルをjsModuleにbundleする
				use: [	// loader は下から読み込まれる。順番に注意
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(jpe?g|png|gif|svg|ico)$/i,
				loader: 'url-loader',
				options: {
					limit: 2048,	// 2KBを超える画像を分離
					name: './images/[name].[ext]'
				}
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			}
		]
	},

	devServer: {
		contentBase: outputPath	// webpack-dev-serverで開くパスを指定
	},

	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html',
		}),
	]
}