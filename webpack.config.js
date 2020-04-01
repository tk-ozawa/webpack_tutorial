const path = require('path')	// 絶対パス補完

const outputPath = path.resolve(__dirname, 'dist')

console.log({ outputPath })

module.exports = {
	entry: './src/index.js',	// bundle対象の設定

	output: {
		filename: 'main.js',
		path: outputPath
	},

	devServer: {
		contentBase: outputPath	// webpack-dev-serverで開くパスを指定
	}
}