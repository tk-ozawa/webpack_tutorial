const path = require('path')	// 絶対パス補完

const outputPath = path.resolve(__dirname, 'dist')

console.log({ outputPath })

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
			}
		]
	},

	devServer: {
		contentBase: outputPath	// webpack-dev-serverで開くパスを指定
	}
}