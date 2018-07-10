const path = require('path');

const MiniExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	mode: 'development',
	entry: {
		index: path.resolve(__dirname, 'source/js/app.js'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
	},
	module:{
		rules:[
		//loaders
			{
				//tipo de archivo quiero reconocer, extension
				test: /\.css$/,
				//que loader se va a encargar del archivo
				use: [MiniExtractPlugin.loader, 'css-loader'],
			}
		]
	},
	plugins:[
		new MiniExtractPlugin({
			filename: "./css/style.css"
		})
	]
}