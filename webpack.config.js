const path = require('path')	// 絶対パス補完

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
				test: /\.css$/,	// cssファイルをjsModuleにbundleする
				use: [	// loader は下から読み込まれる。順番に注意
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(jpe?g|png|gif|svg|ico)$/i,
				loader: 'url-loader',
				options: {
					limit: 2048,	// 2KBを超える画像を分離
					name: './images/[name].[ext]'
				}
			}
		]
	},

	devServer: {
		contentBase: outputPath	// webpack-dev-serverで開くパスを指定
	}
}